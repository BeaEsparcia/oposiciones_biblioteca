/**
 * Motor Dinámico de Generación y Calibración de Preguntas (QuestionEngine)
 * Soporta los 4 modos de entrenamiento:
 * 1. Entrenar (Estándar 10 Q)
 * 2. Repasar fallos (Banco de errores)
 * 3. Por bloques temáticos (Categorías originales del banco)
 * 4. Simulacro C1 (20 Q con corrección diferida)
 */

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Aleatoriza el orden de las 4 opciones de una pregunta,
 * recalculando el índice de la respuesta correcta.
 */
function prepareQuestionWithOptionsShuffled(rawQuestion) {
  const originalCorrectOptionText = rawQuestion.options[rawQuestion.correctAnswer];
  const shuffledOptions = shuffleArray(rawQuestion.options);
  const newCorrectIndex = shuffledOptions.indexOf(originalCorrectOptionText);

  return {
    ...rawQuestion,
    options: shuffledOptions,
    correctAnswer: newCorrectIndex,
    _originalCorrectAnswer: rawQuestion.correctAnswer
  };
}

export const QuestionEngine = {
  /**
   * Obtiene la lista única de categorías/bloques temáticos existentes
   * en el banco de datos sin reclasificar ni inventar categorías.
   */
  getCategories(sourceId = 'ley_3_2011_clm') {
    const allQuestions = window.OposicionesData 
      ? window.OposicionesData.getAllQuestions() 
      : (window.LEY_3_2011_CLM?.questions || []);

    const categoriesSet = new Set();
    allQuestions.forEach(q => {
      if (q.category) categoriesSet.add(q.category);
    });

    return [...categoriesSet];
  },

  /**
   * MODO 1: Entrenar (Sesión estándar equilibrada de 10 preguntas)
   */
  generateSession(sourceId = 'ley_3_2011_clm', targetCount = 10) {
    const allQuestions = window.OposicionesData 
      ? window.OposicionesData.getAllQuestions() 
      : (window.LEY_3_2011_CLM?.questions || []);

    if (!allQuestions || allQuestions.length === 0) return [];

    // Agrupamos por las categorías existentes
    const categoryGroups = {};
    allQuestions.forEach(q => {
      const cat = q.category || 'General';
      if (!categoryGroups[cat]) categoryGroups[cat] = [];
      categoryGroups[cat].push(q);
    });

    const categories = Object.keys(categoryGroups);
    const selectedQuestions = [];
    const usedIds = new Set();

    // 1. Muestreo estratificado por categorías
    const shuffledCategories = shuffleArray(categories);
    for (const cat of shuffledCategories) {
      if (selectedQuestions.length >= targetCount) break;
      const catQuestions = shuffleArray(categoryGroups[cat]);
      const picked = catQuestions.find(q => !usedIds.has(q.id));
      if (picked) {
        selectedQuestions.push(picked);
        usedIds.add(picked.id);
      }
    }

    // 2. Completar hasta targetCount si quedan pendientes
    if (selectedQuestions.length < targetCount) {
      const remainingQuestions = shuffleArray(allQuestions.filter(q => !usedIds.has(q.id)));
      for (const q of remainingQuestions) {
        if (selectedQuestions.length >= targetCount) break;
        selectedQuestions.push(q);
        usedIds.add(q.id);
      }
    }

    return shuffleArray(selectedQuestions).map(q => prepareQuestionWithOptionsShuffled(q));
  },

  /**
   * MODO 2: Repasar fallos
   */
  generateReviewSession(failedQuestionIds) {
    if (!failedQuestionIds || failedQuestionIds.length === 0) return [];

    const reviewQuestions = failedQuestionIds
      .map(id => window.OposicionesData ? window.OposicionesData.getQuestionById(id) : null)
      .filter(q => q !== null);

    return shuffleArray(reviewQuestions).map(q => prepareQuestionWithOptionsShuffled(q));
  },

  /**
   * MODO 3: Por bloques temáticos (Utiliza exactamente la categoría indicada)
   */
  generateBlockSession(categoryName, targetCount = 10) {
    const allQuestions = window.OposicionesData 
      ? window.OposicionesData.getAllQuestions() 
      : (window.LEY_3_2011_CLM?.questions || []);

    const filtered = allQuestions.filter(q => q.category === categoryName);
    if (filtered.length === 0) return [];

    const shuffled = shuffleArray(filtered);
    const selected = shuffled.slice(0, targetCount);

    return selected.map(q => prepareQuestionWithOptionsShuffled(q));
  },

  /**
   * MODO 4: Simulacro C1 (Examen amplio de 20 preguntas)
   */
  generateSimulacroSession(sourceId = 'ley_3_2011_clm', targetCount = 20) {
    return this.generateSession(sourceId, targetCount);
  }
};

if (typeof window !== 'undefined') {
  window.QuestionEngine = QuestionEngine;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { QuestionEngine };
}
