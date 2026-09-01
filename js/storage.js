/**
 * Gestor de persistencia unificado con soporte para LocalStorage
 * y memoria en tiempo de ejecución (fallback seguro).
 */

const STORAGE_KEYS = {
  FAILED_QUESTIONS: 'opos_bibliotecas_failed_questions_v1',
  GLOBAL_STATS: 'opos_bibliotecas_global_stats_v1'
};

// Fallback en memoria por si LocalStorage está deshabilitado o restringido por el navegador
let memoryStore = {
  failedQuestions: new Set(),
  stats: { totalAnswered: 0, totalCorrect: 0, totalIncorrect: 0, sessionsCompleted: 0 }
};

const StorageManager = {
  /**
   * Obtiene la lista de IDs de preguntas falladas
   * @returns {string[]}
   */
  getFailedQuestionIds() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.FAILED_QUESTIONS);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed)) {
          // Sincronizar memoria
          parsed.forEach(id => memoryStore.failedQuestions.add(id));
          return [...memoryStore.failedQuestions];
        }
      }
    } catch (e) {
      console.warn('LocalStorage no disponible, usando memoria:', e);
    }
    return [...memoryStore.failedQuestions];
  },

  /**
   * Guarda un ID de pregunta en el banco de fallos (sin duplicados)
   * @param {string} questionId 
   */
  addFailedQuestion(questionId) {
    if (!questionId) return;
    memoryStore.failedQuestions.add(questionId);
    try {
      const arr = [...memoryStore.failedQuestions];
      localStorage.setItem(STORAGE_KEYS.FAILED_QUESTIONS, JSON.stringify(arr));
      console.log('✓ Pregunta fallada registrada en banco:', questionId, 'Total en banco:', arr.length);
    } catch (e) {
      console.warn('Error al guardar en LocalStorage:', e);
    }
  },

  /**
   * Elimina un ID de pregunta del banco de fallos (cuando se acierta en repaso)
   * @param {string} questionId 
   */
  removeFailedQuestion(questionId) {
    if (!questionId) return;
    memoryStore.failedQuestions.delete(questionId);
    try {
      const arr = [...memoryStore.failedQuestions];
      localStorage.setItem(STORAGE_KEYS.FAILED_QUESTIONS, JSON.stringify(arr));
      console.log('✓ Pregunta superada y liberada del banco de fallos:', questionId, 'Restantes:', arr.length);
    } catch (e) {
      console.warn('Error al actualizar LocalStorage:', e);
    }
  },

  /**
   * Obtiene las estadísticas acumuladas
   */
  getGlobalStats() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.GLOBAL_STATS);
      if (raw) {
        const parsed = JSON.parse(raw);
        memoryStore.stats = { ...memoryStore.stats, ...parsed };
        return memoryStore.stats;
      }
    } catch (e) {
      console.warn('Error leyendo estadísticas de LocalStorage:', e);
    }
    return memoryStore.stats;
  },

  /**
   * Registra una respuesta en las estadísticas globales
   * @param {boolean} isCorrect 
   */
  recordAnswer(isCorrect) {
    const stats = this.getGlobalStats();
    stats.totalAnswered += 1;
    if (isCorrect) {
      stats.totalCorrect += 1;
    } else {
      stats.totalIncorrect += 1;
    }
    memoryStore.stats = stats;
    try {
      localStorage.setItem(STORAGE_KEYS.GLOBAL_STATS, JSON.stringify(stats));
    } catch (e) {
      console.warn('Error guardando estadísticas:', e);
    }
  },

  /**
   * Registra una sesión completada
   */
  recordSessionCompletion() {
    const stats = this.getGlobalStats();
    stats.sessionsCompleted += 1;
    memoryStore.stats = stats;
    try {
      localStorage.setItem(STORAGE_KEYS.GLOBAL_STATS, JSON.stringify(stats));
    } catch (e) {
      console.warn('Error registrando sesión:', e);
    }
  }
};

if (typeof window !== 'undefined') {
  window.StorageManager = StorageManager;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { StorageManager };
}
