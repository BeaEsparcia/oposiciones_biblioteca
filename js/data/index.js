/**
 * Registro central y agregador de fuentes de estudio.
 */

const DataRegistry = {
  get SOURCES() {
    if (typeof window !== 'undefined' && window.LEY_3_2011_CLM) {
      return [window.LEY_3_2011_CLM];
    }
    return [];
  },

  getSourceById(sourceId) {
    return this.SOURCES.find(s => s.id === sourceId) || null;
  },

  getAllQuestions() {
    return this.SOURCES.flatMap(s => s.questions.map(q => ({
      ...q,
      sourceId: s.id,
      sourceTitle: s.shortTitle
    })));
  },

  getQuestionById(questionId) {
    const all = this.getAllQuestions();
    return all.find(q => q.id === questionId) || null;
  }
};

if (typeof window !== 'undefined') {
  window.OposicionesData = DataRegistry;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DataRegistry;
}
