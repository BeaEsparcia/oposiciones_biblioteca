/**
 * Registro central y agregador de fuentes de estudio.
 * Permite gestionar múltiples normas jurídicas de forma modular e independiente.
 */

const DataRegistry = {
  get SOURCES() {
    const sources = [];
    if (typeof window !== 'undefined') {
      if (window.LEY_16_1985_T7) sources.push(window.LEY_16_1985_T7);
      if (window.LEY_10_2007) sources.push(window.LEY_10_2007);
      if (window.LEY_23_2011) sources.push(window.LEY_23_2011);
      if (window.RD_635_2015) sources.push(window.RD_635_2015);
      if (window.LEY_3_2011_CLM) sources.push(window.LEY_3_2011_CLM);
      if (window.DECRETO_33_2018_CLM) sources.push(window.DECRETO_33_2018_CLM);
      if (window.REGLAMENTO_ALBACETE_2022) sources.push(window.REGLAMENTO_ALBACETE_2022);
    }
    return sources;
  },

  getSourceById(sourceId) {
    return this.SOURCES.find(s => s.id === sourceId) || null;
  },

  getAllQuestions(sourceId = null) {
    const activeSources = sourceId && sourceId !== 'all' 
      ? this.SOURCES.filter(s => s.id === sourceId)
      : this.SOURCES;

    return activeSources.flatMap(s => s.questions.map(q => ({
      ...q,
      sourceId: s.id,
      sourceTitle: s.shortTitle,
      sourceFullName: s.title
    })));
  },

  getQuestionById(questionId) {
    const all = this.getAllQuestions();
    return all.find(q => q.id === questionId) || null;
  },

  getSourcesSummary() {
    return this.SOURCES.map(s => ({
      id: s.id,
      title: s.title,
      shortTitle: s.shortTitle,
      jurisdiction: s.jurisdiction,
      category: s.category,
      officialReference: s.officialReference,
      questionCount: s.questions ? s.questions.length : 0
    }));
  }
};

if (typeof window !== 'undefined') {
  window.OposicionesData = DataRegistry;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DataRegistry;
}
