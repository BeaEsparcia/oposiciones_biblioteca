/**
 * Oposiciones Bibliotecas C1 — Aplicación Principal
 * Soporte para múltiples fuentes normativas y los 4 modos de estudio:
 * 1. Entrenar (10 Q)
 * 2. Repasar Fallos (Banco de errores)
 * 3. Por Bloques (Categorías de la norma activa)
 * 4. Simulacro C1 (20 Q con corrección diferida)
 */

// --- ESTADO DE LA APLICACIÓN ---
const AppState = {
  currentView: 'home', // 'home' | 'quiz' | 'results'
  currentMode: 'standard', // 'standard' | 'review' | 'block' | 'simulacro'
  activeSourceId: 'all', // 'all' | 'ley_3_2011_clm' | 'decreto_33_2018_clm' | 'reglamento_albacete_2022'
  activeCategory: null,
  activeQuestions: [],
  currentIndex: 0,
  currentQuestion: null,
  hasAnsweredCurrent: false,
  sessionResults: [] // Array de { question, selectedOption, isCorrect }
};

// --- ELEMENTOS DEL DOM ---
const DOM = {
  // Vistas
  viewHome: document.getElementById('view-home'),
  viewQuiz: document.getElementById('view-quiz'),
  viewResults: document.getElementById('view-results'),
  
  // Header
  btnHeaderHome: document.getElementById('btn-header-home'),
  
  // Selector de Fuentes
  sourcePillsContainer: document.getElementById('source-pills-container'),
  badgeSourceJurisdiction: document.getElementById('badge-source-jurisdiction'),
  badgeModuleCount: document.getElementById('badge-module-count'),
  sourceCardTitle: document.getElementById('source-card-title'),
  sourceCardSubtitle: document.getElementById('source-card-subtitle'),
  metaPillRef: document.getElementById('meta-pill-ref'),
  metaPillStructure: document.getElementById('meta-pill-structure'),

  // Pantalla Inicio - Acciones
  btnStartSession: document.getElementById('btn-start-session'),
  btnStartReview: document.getElementById('btn-start-review'),
  btnStartBlock: document.getElementById('btn-start-block'),
  btnStartSimulacro: document.getElementById('btn-start-simulacro'),
  selectBlockCategory: document.getElementById('select-block-category'),
  badgeErrorCount: document.getElementById('badge-error-count'),
  statTotalAnswered: document.getElementById('stat-total-answered'),
  statAccuracy: document.getElementById('stat-accuracy'),
  statStoredErrors: document.getElementById('stat-stored-errors'),

  // Pantalla Quiz
  quizSourceName: document.getElementById('quiz-source-name'),
  quizModeBadge: document.getElementById('quiz-mode-badge'),
  quizCategory: document.getElementById('quiz-category'),
  quizCounter: document.getElementById('quiz-counter'),
  quizProgressBar: document.getElementById('quiz-progress-bar'),
  questionText: document.getElementById('question-text'),
  optionsContainer: document.getElementById('options-container'),
  
  // Acciones en modo Simulacro (Corrección diferida)
  simulacroActions: document.getElementById('simulacro-actions'),
  btnSimulacroNext: document.getElementById('btn-simulacro-next'),

  // Tarjeta de Retroalimentación Inmediata Integrada (Modos 1, 2 y 3)
  feedbackCard: document.getElementById('feedback-card'),
  feedbackStatusBadge: document.getElementById('feedback-status-badge'),
  feedbackLegalRef: document.getElementById('feedback-legal-ref'),
  feedbackExplanation: document.getElementById('feedback-explanation'),
  btnNextQuestion: document.getElementById('btn-next-question'),

  // Pantalla Resultados
  resultsModeTitle: document.getElementById('results-mode-title'),
  resultsScoreTitle: document.getElementById('results-score-title'),
  resultsMessage: document.getElementById('results-message'),
  resultsCorrectCount: document.getElementById('results-correct-count'),
  resultsErrorCount: document.getElementById('results-error-count'),
  resultsPercentage: document.getElementById('results-percentage'),
  resultsErrorBanner: document.getElementById('results-error-banner'),
  resultsErrorBannerCount: document.getElementById('results-error-banner-count'),
  btnResultsReviewErrors: document.getElementById('btn-results-review-errors'),
  btnResultsNewSession: document.getElementById('btn-results-new-session'),
  btnResultsGoHome: document.getElementById('btn-results-go-home'),
  breakdownList: document.getElementById('breakdown-list')
};

// --- INICIALIZACIÓN ---
function init() {
  bindEvents();
  updateActiveSourceUI();
  populateBlockCategories();
  updateHomeStats();
  switchView('home');
}

// --- ACTUALIZAR INFORMACIÓN DE LA FUENTE ACTIVA ---
function updateActiveSourceUI() {
  const sourceId = AppState.activeSourceId;

  // Actualizar clases activas en los botones de fuente
  if (DOM.sourcePillsContainer) {
    const pills = DOM.sourcePillsContainer.querySelectorAll('.source-pill');
    pills.forEach(pill => {
      const pId = pill.getAttribute('data-source-id');
      pill.classList.toggle('active', pId === sourceId);
    });
  }

  if (sourceId === 'all') {
    const allQuestions = window.OposicionesData ? window.OposicionesData.getAllQuestions() : [];
    DOM.badgeSourceJurisdiction.textContent = 'Temario Completo';
    DOM.badgeModuleCount.textContent = `${allQuestions.length} Preguntas Disponibles`;
    DOM.sourceCardTitle.textContent = 'Todas las Fuentes Normativas';
    DOM.sourceCardSubtitle.textContent = 'Ley 16/1985 (T. VII) • Ley 10/2007 • Ley 23/2011 • RD 635/2015 • Ley 3/2011 • Decreto 33/2018 • Decreto 136/2012 • Reglamento Albacete 2022';
    DOM.metaPillRef.textContent = '📚 8 Fuentes Normativas';
    DOM.metaPillStructure.textContent = '⚖️ Estatal, Autonómica y Local';
  } else {
    const src = window.OposicionesData ? window.OposicionesData.getSourceById(sourceId) : null;
    if (src) {
      const qCount = src.questions ? src.questions.length : 0;
      DOM.badgeSourceJurisdiction.textContent = src.jurisdiction || src.category;
      DOM.badgeModuleCount.textContent = qCount > 0 ? `${qCount} Preguntas Calibradas` : 'Estructura Lista (En Preparación)';
      DOM.sourceCardTitle.textContent = src.shortTitle || src.title;
      DOM.sourceCardSubtitle.textContent = src.title;
      DOM.metaPillRef.textContent = src.officialReference ? `📑 ${src.officialReference}` : '📑 Publicación Oficial';
      DOM.metaPillStructure.textContent = src.structureSummary ? `⚖️ ${src.structureSummary}` : '⚖️ Nivel C1';
    }
  }

  // Actualizar categorías del selector de bloques
  populateBlockCategories();
}

// --- POBLAR SELECTOR DE BLOQUES TEMÁTICOS ---
function populateBlockCategories() {
  if (!DOM.selectBlockCategory) return;
  DOM.selectBlockCategory.innerHTML = '';

  const categories = window.QuestionEngine.getCategories(AppState.activeSourceId);
  
  if (categories.length === 0) {
    const opt = document.createElement('option');
    opt.value = '';
    opt.textContent = 'Sin categorías disponibles para esta fuente';
    DOM.selectBlockCategory.appendChild(opt);
    DOM.btnStartBlock.disabled = true;
    return;
  }

  DOM.btnStartBlock.disabled = false;
  categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    DOM.selectBlockCategory.appendChild(opt);
  });
}

// --- VINCULACIÓN DE EVENTOS ---
function bindEvents() {
  // Navegación superior
  DOM.btnHeaderHome.addEventListener('click', () => {
    if (AppState.currentView === 'quiz' && !AppState.hasAnsweredCurrent) {
      if (confirm('¿Deseas salir de la sesión en curso? Podrás comenzar una nueva cuando quieras.')) {
        switchView('home');
      }
    } else {
      switchView('home');
    }
  });

  // Selector de Fuentes
  if (DOM.sourcePillsContainer) {
    DOM.sourcePillsContainer.addEventListener('click', (e) => {
      const pill = e.target.closest('.source-pill');
      if (pill) {
        const sourceId = pill.getAttribute('data-source-id');
        AppState.activeSourceId = sourceId;
        updateActiveSourceUI();
      }
    });
  }

  // 1. Modo Entrenar
  DOM.btnStartSession.addEventListener('click', () => startSession('standard'));
  
  // 2. Modo Repasar Fallos
  DOM.btnStartReview.addEventListener('click', () => startSession('review'));

  // 3. Modo Por Bloques
  DOM.btnStartBlock.addEventListener('click', () => {
    const selectedCategory = DOM.selectBlockCategory.value;
    if (selectedCategory) {
      startSession('block', selectedCategory);
    }
  });

  // 4. Modo Simulacro C1
  DOM.btnStartSimulacro.addEventListener('click', () => startSession('simulacro'));

  // Navegación en Quiz
  DOM.btnNextQuestion.addEventListener('click', handleNextQuestion);
  if (DOM.btnSimulacroNext) {
    DOM.btnSimulacroNext.addEventListener('click', handleNextQuestion);
  }

  // Acciones en Resultados
  DOM.btnResultsNewSession.addEventListener('click', () => {
    if (AppState.currentMode === 'simulacro') {
      startSession('simulacro');
    } else if (AppState.currentMode === 'block') {
      startSession('block', AppState.activeCategory);
    } else {
      startSession('standard');
    }
  });
  DOM.btnResultsGoHome.addEventListener('click', () => switchView('home'));
  DOM.btnResultsReviewErrors.addEventListener('click', () => {
    const failedSessionQuestions = AppState.sessionResults
      .filter(r => !r.isCorrect)
      .map(r => r.question);
    
    if (failedSessionQuestions.length > 0) {
      startCustomSession(failedSessionQuestions, 'review');
    }
  });

  // Atajos de teclado para estudio directo
  window.addEventListener('keydown', (e) => {
    if (AppState.currentView !== 'quiz') return;

    if (!AppState.hasAnsweredCurrent) {
      const key = e.key.toUpperCase();
      let selectedIdx = -1;
      if (key === 'A' || key === '1') selectedIdx = 0;
      if (key === 'B' || key === '2') selectedIdx = 1;
      if (key === 'C' || key === '3') selectedIdx = 2;
      if (key === 'D' || key === '4') selectedIdx = 3;

      if (selectedIdx >= 0 && selectedIdx < 4) {
        handleOptionSelect(selectedIdx);
      }
    } else {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleNextQuestion();
      }
    }
  });
}

// --- CAMBIO DE VISTAS ---
function switchView(viewName) {
  AppState.currentView = viewName;
  
  DOM.viewHome.classList.remove('active');
  DOM.viewQuiz.classList.remove('active');
  DOM.viewResults.classList.remove('active');

  if (viewName === 'home') {
    DOM.viewHome.classList.add('active');
    DOM.btnHeaderHome.style.display = 'none';
    updateHomeStats();
  } else if (viewName === 'quiz') {
    DOM.viewQuiz.classList.add('active');
    DOM.btnHeaderHome.style.display = 'inline-block';
  } else if (viewName === 'results') {
    DOM.viewResults.classList.add('active');
    DOM.btnHeaderHome.style.display = 'inline-block';
  }
}

// --- ACTUALIZAR PANTALLA PRINCIPAL ---
function updateHomeStats() {
  const stats = window.StorageManager.getGlobalStats();
  const failedIds = window.StorageManager.getFailedQuestionIds();

  DOM.statTotalAnswered.textContent = stats.totalAnswered;
  
  const accuracy = stats.totalAnswered > 0 
    ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) 
    : 0;
  DOM.statAccuracy.textContent = `${accuracy}%`;

  DOM.statStoredErrors.textContent = failedIds.length;
  DOM.badgeErrorCount.textContent = `${failedIds.length} pendientes`;

  if (failedIds.length > 0) {
    DOM.btnStartReview.disabled = false;
    DOM.badgeErrorCount.className = 'badge badge-warning';
  } else {
    DOM.btnStartReview.disabled = true;
    DOM.badgeErrorCount.className = 'badge badge-neutral';
    DOM.badgeErrorCount.textContent = 'Al día (0)';
  }
}

// --- INICIAR SESIÓN DE ESTUDIO SEGÚN MODO ---
function startSession(mode, param = null) {
  AppState.currentMode = mode;
  AppState.currentIndex = 0;
  AppState.sessionResults = [];
  AppState.activeCategory = param;

  const currentSource = AppState.activeSourceId;

  if (mode === 'standard') {
    // Modo 1: Entrenar (10 Q equilibradas de la fuente activa)
    AppState.activeQuestions = window.QuestionEngine.generateSession(currentSource, 10);
    if (AppState.activeQuestions.length === 0) {
      alert('Esta fuente normativa todavía no tiene preguntas cargadas en el banco.');
      switchView('home');
      return;
    }
  } else if (mode === 'review') {
    // Modo 2: Repasar Fallos
    const failedIds = window.StorageManager.getFailedQuestionIds();
    if (failedIds.length === 0) {
      alert('No tienes preguntas pendientes en el banco de fallos. ¡Buen trabajo!');
      switchView('home');
      return;
    }
    AppState.activeQuestions = window.QuestionEngine.generateReviewSession(failedIds);
  } else if (mode === 'block') {
    // Modo 3: Por Bloques
    AppState.activeQuestions = window.QuestionEngine.generateBlockSession(param, currentSource, 10);
    if (AppState.activeQuestions.length === 0) {
      alert('No se encontraron preguntas cargadas para este bloque temático.');
      switchView('home');
      return;
    }
  } else if (mode === 'simulacro') {
    // Modo 4: Simulacro C1 (20 Q corrección al final)
    AppState.activeQuestions = window.QuestionEngine.generateSimulacroSession(currentSource, 20);
    if (AppState.activeQuestions.length === 0) {
      alert('Esta fuente normativa todavía no tiene preguntas cargadas en el banco.');
      switchView('home');
      return;
    }
  }

  switchView('quiz');
  renderCurrentQuestion();
}

function startCustomSession(questions, mode) {
  AppState.currentMode = mode;
  AppState.currentIndex = 0;
  AppState.sessionResults = [];
  AppState.activeQuestions = questions.map(q => {
    const raw = window.OposicionesData.getQuestionById(q.id) || q;
    return window.QuestionEngine ? window.QuestionEngine.generateReviewSession([raw.id])[0] || raw : raw;
  });
  switchView('quiz');
  renderCurrentQuestion();
}

// --- RENDERIZAR PREGUNTA ACTUAL ---
function renderCurrentQuestion() {
  AppState.hasAnsweredCurrent = false;
  const q = AppState.activeQuestions[AppState.currentIndex];
  AppState.currentQuestion = q;

  // Header del Quiz según modo y fuente
  const total = AppState.activeQuestions.length;
  const currentNum = AppState.currentIndex + 1;
  DOM.quizCounter.textContent = `Pregunta ${currentNum} de ${total}`;
  
  const progressPct = (currentNum / total) * 100;
  DOM.quizProgressBar.style.width = `${progressPct}%`;

  DOM.quizSourceName.textContent = q.sourceTitle || 'Ley 3/2011';

  if (AppState.currentMode === 'simulacro') {
    DOM.quizModeBadge.textContent = 'Simulacro C1 (Examen)';
    DOM.quizCategory.textContent = `${total} Preguntas`;
  } else if (AppState.currentMode === 'review') {
    DOM.quizModeBadge.textContent = 'Repaso de Fallos';
    DOM.quizCategory.textContent = q.category || 'General';
  } else if (AppState.currentMode === 'block') {
    DOM.quizModeBadge.textContent = 'Bloque Temático';
    DOM.quizCategory.textContent = AppState.activeCategory || q.category;
  } else {
    DOM.quizModeBadge.textContent = 'Entrenamiento';
    DOM.quizCategory.textContent = q.category || 'General';
  }

  // Texto de la pregunta
  DOM.questionText.textContent = q.question;

  // Opciones
  DOM.optionsContainer.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  q.options.forEach((optText, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.setAttribute('data-index', index);
    
    btn.innerHTML = `
      <span class="option-letter">${letters[index]}</span>
      <span class="option-text">${optText}</span>
    `;

    // Interacción directa en un solo clic
    btn.addEventListener('click', () => handleOptionSelect(index));
    DOM.optionsContainer.appendChild(btn);
  });

  // Ocultar paneles de acción previos
  DOM.feedbackCard.style.display = 'none';
  if (DOM.simulacroActions) DOM.simulacroActions.style.display = 'none';
}

// --- GESTIÓN DE RESPUESTA DIRECTA EN UN SOLO CLIC ---
function handleOptionSelect(selectedIndex) {
  if (AppState.hasAnsweredCurrent) return;
  AppState.hasAnsweredCurrent = true;

  const q = AppState.currentQuestion;
  const isCorrect = selectedIndex === q.correctAnswer;

  // Registrar respuesta
  AppState.sessionResults.push({
    question: q,
    selectedOption: selectedIndex,
    isCorrect: isCorrect
  });

  // Actualizar estadísticas globales
  window.StorageManager.recordAnswer(isCorrect);

  const optionButtons = DOM.optionsContainer.querySelectorAll('.option-btn');

  // Comportamiento según el MODO:
  if (AppState.currentMode === 'simulacro') {
    // EN SIMULACRO: NO mostrar si es correcto/incorrecto. Selección neutra.
    optionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      btn.style.pointerEvents = 'none';
      if (idx === selectedIndex) {
        btn.classList.add('selected-neutral');
      } else {
        btn.classList.add('dimmed');
      }
    });

    // Mostrar botón directo de navegación hacia la siguiente pregunta
    const isLast = AppState.currentIndex === AppState.activeQuestions.length - 1;
    DOM.btnSimulacroNext.textContent = isLast ? 'Finalizar Simulacro y Ver Resultados →' : 'Siguiente Pregunta →';
    DOM.simulacroActions.style.display = 'flex';

    setTimeout(() => {
      DOM.simulacroActions.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 40);

  } else {
    // EN MODOS 1, 2 Y 3: Retroalimentación inmediata con verde/rojo y explicación
    if (isCorrect) {
      if (AppState.currentMode === 'review') {
        window.StorageManager.removeFailedQuestion(q.id);
      }
    } else {
      window.StorageManager.addFailedQuestion(q.id);
    }

    optionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      btn.style.pointerEvents = 'none';
      if (idx === q.correctAnswer) {
        btn.classList.add('correct');
        btn.querySelector('.option-letter').textContent = '✓';
      } else if (idx === selectedIndex && !isCorrect) {
        btn.classList.add('incorrect');
        btn.querySelector('.option-letter').textContent = '✗';
      } else {
        btn.classList.add('dimmed');
      }
    });

    renderFeedback(isCorrect, q);
  }
}

// --- RENDERIZAR RETROALIMENTACIÓN INMEDIATA ---
function renderFeedback(isCorrect, question) {
  DOM.feedbackCard.style.display = 'block';

  if (isCorrect) {
    DOM.feedbackStatusBadge.className = 'badge badge-success';
    DOM.feedbackStatusBadge.textContent = '✓ Respuesta Correcta';
  } else {
    DOM.feedbackStatusBadge.className = 'badge badge-error';
    DOM.feedbackStatusBadge.textContent = '✗ Respuesta Incorrecta';
  }

  DOM.feedbackLegalRef.textContent = question.lawReference || 'Norma aplicable';
  DOM.feedbackExplanation.textContent = question.explanation;

  const isLast = AppState.currentIndex === AppState.activeQuestions.length - 1;
  DOM.btnNextQuestion.textContent = isLast ? 'Ver Resultados Finales →' : 'Continuar a la Siguiente Pregunta →';

  setTimeout(() => {
    DOM.feedbackCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 50);
}

// --- SIGUIENTE PREGUNTA O RESULTADOS ---
function handleNextQuestion() {
  if (AppState.currentIndex < AppState.activeQuestions.length - 1) {
    AppState.currentIndex += 1;
    renderCurrentQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    finishSession();
  }
}

// --- FINALIZAR SESIÓN Y MOSTRAR RESULTADOS ---
function finishSession() {
  window.StorageManager.recordSessionCompletion();

  // Si fue un simulacro, registrar de forma diferida todos los fallos en el banco
  if (AppState.currentMode === 'simulacro') {
    AppState.sessionResults.forEach(r => {
      if (!r.isCorrect) {
        window.StorageManager.addFailedQuestion(r.question.id);
      }
    });
  }

  switchView('results');

  const total = AppState.sessionResults.length;
  const correct = AppState.sessionResults.filter(r => r.isCorrect).length;
  const errors = total - correct;
  const percentage = Math.round((correct / total) * 100);

  if (AppState.currentMode === 'simulacro') {
    DOM.resultsModeTitle.textContent = 'Simulacro C1 Finalizado';
  } else if (AppState.currentMode === 'block') {
    DOM.resultsModeTitle.textContent = `Bloque: ${AppState.activeCategory}`;
  } else if (AppState.currentMode === 'review') {
    DOM.resultsModeTitle.textContent = 'Sesión de Repaso Finalizada';
  } else {
    DOM.resultsModeTitle.textContent = 'Sesión Finalizada';
  }

  DOM.resultsScoreTitle.textContent = `${correct} / ${total}`;
  DOM.resultsCorrectCount.textContent = correct;
  DOM.resultsErrorCount.textContent = errors;
  DOM.resultsPercentage.textContent = `${percentage}%`;

  // Mensaje pedagógico adaptado
  if (percentage === 100) {
    DOM.resultsMessage.textContent = '¡Excelente! Dominio impecable de los conceptos y preceptos evaluados.';
  } else if (percentage >= 80) {
    DOM.resultsMessage.textContent = 'Muy buen nivel C1. Has demostrado una comprensión sólida de la norma.';
  } else if (percentage >= 50) {
    DOM.resultsMessage.textContent = 'Buen avance. Puedes repasar los artículos con fallos en el banco de repaso.';
  } else {
    DOM.resultsMessage.textContent = 'Sesión completada. Conviene afianzar los datos cuantitativos y competencias en el banco de fallos.';
  }

  // Banner y botón de errores
  const failedIdsInBank = window.StorageManager.getFailedQuestionIds();
  if (errors > 0 || failedIdsInBank.length > 0) {
    if (DOM.resultsErrorBanner) {
      DOM.resultsErrorBanner.style.display = 'block';
      DOM.resultsErrorBannerCount.textContent = failedIdsInBank.length;
    }
  } else {
    if (DOM.resultsErrorBanner) DOM.resultsErrorBanner.style.display = 'none';
  }

  if (errors > 0) {
    DOM.btnResultsReviewErrors.style.display = 'inline-flex';
    DOM.btnResultsReviewErrors.textContent = `Repasar los ${errors} fallos de esta sesión ahora`;
  } else {
    DOM.btnResultsReviewErrors.style.display = 'none';
  }

  // Desglose detallado con soluciones y justificación jurídica
  renderBreakdown();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- RENDERIZAR DESGLOSE DETALLADO ---
function renderBreakdown() {
  DOM.breakdownList.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  AppState.sessionResults.forEach((res, index) => {
    const item = document.createElement('div');
    item.className = 'breakdown-item';

    const statusBadge = res.isCorrect
      ? '<span class="badge badge-success">Correcta</span>'
      : '<span class="badge badge-error">Fallada</span>';

    item.innerHTML = `
      <div class="breakdown-item-header">
        <span class="breakdown-num">Pregunta ${index + 1} • ${res.question.sourceTitle || 'Norma'} • ${res.question.category}</span>
        ${statusBadge}
      </div>
      <div class="breakdown-question">${res.question.question}</div>
      <div class="breakdown-meta">
        <span>Tu respuesta: <strong>${letters[res.selectedOption]})</strong> ${res.isCorrect ? '✓' : `(Correcta: ${letters[res.question.correctAnswer]})`}</span>
        <span>⚖️ ${res.question.lawReference}</span>
      </div>
      <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.6rem; padding-top: 0.5rem; border-top: 1px dashed var(--border-subtle);">
        ${res.question.explanation}
      </div>
    `;

    DOM.breakdownList.appendChild(item);
  });
}

// Iniciar al cargar el DOM
document.addEventListener('DOMContentLoaded', init);
