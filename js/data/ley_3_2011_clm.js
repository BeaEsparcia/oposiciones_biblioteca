/**
 * Ley 3/2011, de 24 de febrero, de la Lectura y de las Bibliotecas de Castilla-La Mancha
 * Banco Exhaustivo de Preguntas calibradas para Oposiciones de Bibliotecas (Nivel C1).
 * Cobertura completa de los 10 Títulos, 55 Artículos y Disposiciones.
 * Fuente estricta: Texto consolidado oficial.
 */

const LEY_3_2011_CLM = {
  id: 'ley_3_2011_clm',
  title: 'Ley 3/2011, de 24 de febrero, de la Lectura y de las Bibliotecas de Castilla-La Mancha',
  shortTitle: 'Ley 3/2011 (CLM)',
  jurisdiction: 'Castilla-La Mancha',
  category: 'Legislación Autonómica',
  officialReference: 'DOCM núm. 46, de 8 de marzo de 2011 / BOE núm. 103, de 30 de abril de 2011',
  questions: [
    // --- TÍTULO PRELIMINAR: DISPOSICIONES GENERALES & DEFINICIONES (Arts. 1-3) ---
    {
      id: 'ley3_2011_q01',
      category: 'Conceptos y Definiciones',
      difficulty: 'C1',
      lawReference: 'Artículo 3, letra d)',
      question: 'De acuerdo con el artículo 3 de la Ley 3/2011, ¿cómo se define expresamente la «Biblioteca pública de doble uso»?',
      options: [
        'Servicio bibliotecario de carácter móvil que realiza funciones de biblioteca pública mediante visitas periódicas a municipios o zonas urbanas carentes de biblioteca pública.',
        'Institución de titularidad pública que ofrece colecciones y servicios bibliotecarios tanto de carácter público general, como de carácter escolar, compartiendo sus infraestructuras y recursos.',
        'Conjunto de actividades y servicios bibliotecarios de carácter público y dependientes de una biblioteca o servicio técnico, ofrecidos en municipios u otras localizaciones donde no existe un servicio bibliotecario.',
        'Servicio de apoyo a la actividad docente y discente, dependiente del centro escolar, que reúne, organiza y pone a disposición de toda la comunidad escolar los recursos documentales necesarios.'
      ],
      correctAnswer: 1,
      explanation: 'El artículo 3.d) define literalmente la «Biblioteca pública de doble uso» como aquella institución de titularidad pública que ofrece colecciones y servicios bibliotecarios tanto de carácter público general como escolar, compartiendo infraestructuras y recursos.'
    },
    {
      id: 'ley3_2011_q11',
      category: 'Conceptos y Definiciones',
      difficulty: 'C1',
      lawReference: 'Artículo 3, letra h)',
      question: 'Según el artículo 3 de la Ley 3/2011, el «Centro de documentación» se define como:',
      options: [
        'Institución que alberga colecciones referidas a un campo específico del conocimiento, exclusivamente de titularidad pública y acceso general.',
        'Colecciones organizadas de contenidos electrónicos procedentes exclusivamente de bibliotecas, archivos y museos autonómicos.',
        'Institución o servicio dependiente de una entidad superior, que selecciona, identifica, analiza y difunde, principalmente, información especializada de carácter científico, técnico o cultural y que tiene como objetivo servir a la finalidad de la entidad de la que depende.',
        'Conjunto de documentos sin tratamiento técnico bibliotecario custodiados en archivos administrativos regionales.'
      ],
      correctAnswer: 2,
      explanation: 'El artículo 3.h) define el «Centro de documentación» como la institución o servicio dependiente de una entidad superior, que selecciona, identifica, analiza y difunde información especializada científica, técnica o cultural para servir a la finalidad de la entidad matriz y facilitar el acceso a sus registros culturales e informativos.'
    },
    {
      id: 'ley3_2011_q12',
      category: 'Conceptos y Definiciones',
      difficulty: 'C1',
      lawReference: 'Artículo 3, letra i)',
      question: 'A efectos de la Ley 3/2011, ¿qué se entiende por «Colección» en el caso de fondos que no cuentan con tratamiento técnico bibliotecario?',
      options: [
        'Conjunto de documentos sin tratamiento técnico bibliotecario.',
        'Conjunto de libros objeto de depósito legal autonómico.',
        'Fondos documentales procedentes exclusivamente de legados y donaciones privadas.',
        'Conjunto de publicaciones periódicas custodiadas en salas de reserva.'
      ],
      correctAnswer: 0,
      explanation: 'El art. 3.i) define «Colección» como el «Conjunto de documentos sin tratamiento técnico bibliotecario». Añade que en el caso de bibliotecas con fondos tratados técnicamente, podrá entenderse como el conjunto de documentos con características particulares por origen, contenido o formato.'
    },
    {
      id: 'ley3_2011_q13',
      category: 'Conceptos y Definiciones',
      difficulty: 'C1',
      lawReference: 'Artículo 3, letra k)',
      question: '¿Cómo define la Ley 3/2011 al «Bibliotecario» en su artículo 3.k)?',
      options: [
        'Funcionario de carrera perteneciente exclusivamente a los cuerpos facultativos y técnicos de archivos y bibliotecas de la Junta de Comunidades.',
        'Profesional, con un perfil multidisciplinar, responsable de un servicio bibliotecario que mediante su gestión, facilita la consecución de los fines de la institución bibliotecaria.',
        'Personal laboral encargado de la custodia y préstamo físico de materiales documentales en bibliotecas municipales.',
        'Técnico especialista responsable del tratamiento catalográfico y clasificación documental en la Biblioteca de Castilla-La Mancha.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 3.k) define al Bibliotecario como «Profesional, con un perfil multidisciplinar, responsable de un servicio bibliotecario que mediante su gestión, facilita la consecución de los fines de la institución bibliotecaria».'
    },

    // --- TÍTULO I: EL FOMENTO DE LA LECTURA (Arts. 4-8) ---
    {
      id: 'ley3_2011_q14',
      category: 'Fomento de la Lectura',
      difficulty: 'C1',
      lawReference: 'Artículo 7, apartado 6',
      question: 'Conforme al artículo 7.6 de la Ley 3/2011, ¿cuál es el procedimiento de propuesta y aprobación de los Planes de fomento de la lectura?',
      options: [
        'Propuestos por el Consejo Asesor de la Red de Bibliotecas y aprobados por la persona titular de la Consejería de Cultura.',
        'Propuestos por las Consejerías competentes en educación, lectura y bibliotecas, previo informe del Consejo de la Lectura y Bibliotecas, y aprobados por el Consejo de Gobierno.',
        'Elaborados y aprobados directamente por la Comisión Técnica de la Red de Bibliotecas Públicas.',
        'Propuestos por la Biblioteca de Castilla-La Mancha y aprobados por las Cortes Regionales mediante Resolución.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 7.6 establece que los planes de fomento de la lectura «serán propuestos por las Consejerías de la Administración Regional competentes en materia de educación, lectura y bibliotecas, previo informe del Consejo de la Lectura y Bibliotecas de Castilla-La Mancha y serán aprobados por el Consejo de Gobierno».'
    },
    {
      id: 'ley3_2011_q15',
      category: 'Fomento de la Lectura',
      difficulty: 'C1',
      lawReference: 'Artículo 8, apartados 1 y 2',
      question: 'Respecto al Observatorio del Libro y la Lectura de Castilla-La Mancha (art. 8), señale la afirmación correcta:',
      options: [
        'Es un órgano unipersonal dependiente de la Universidad de Castilla-La Mancha.',
        'Tiene carácter de órgano colegiado dependiente de la Consejería competente y está integrado en el Centro de la Lectura, la Imagen y la Palabra.',
        'Es una entidad pública empresarial adscrita a las Diputaciones Provinciales de la región.',
        'Es una subcomisión permanente integrada en el Consejo Asesor de la Red de Bibliotecas Públicas.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 8.1 dispone que el Observatorio del Libro y la Lectura, «dependiente de la Consejería competente en materia de fomento de la lectura, libro y bibliotecas, con el carácter de órgano colegiado, estará integrado en el Centro de la Lectura, la Imagen y la Palabra».'
    },

    // --- TÍTULO II: EL SISTEMA DE BIBLIOTECAS (Arts. 9-15) ---
    {
      id: 'ley3_2011_q16',
      category: 'El Sistema de Bibliotecas',
      difficulty: 'C1',
      lawReference: 'Artículo 10',
      question: 'Según el artículo 10 de la Ley 3/2011, ¿cuál de los siguientes centros forma parte del Sistema de Bibliotecas de Castilla-La Mancha?',
      options: [
        'Exclusivamente las bibliotecas públicas de titularidad municipal.',
        'Las bibliotecas escolares dependientes de centros educativos sostenidos con fondos públicos.',
        'Todas las librerías y editoriales privadas radicadas en el territorio autonómico.',
        'Únicamente las bibliotecas dependientes de la Consejería de Cultura y la BPE de Toledo.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 10.c incluye expresamente en el Sistema de Bibliotecas a «Las bibliotecas escolares dependientes de centros educativos sostenidos con fondos públicos», además de la Red de BP, las universitarias públicas, las especializadas de la Junta y las adscritas mediante convenio.'
    },
    {
      id: 'ley3_2011_q17',
      category: 'El Sistema de Bibliotecas',
      difficulty: 'C1',
      lawReference: 'Artículo 11',
      question: '¿Mediante qué instrumento jurídico se integran en el Sistema de Bibliotecas de Castilla-La Mancha los centros o colecciones que no formen parte de la Red de Bibliotecas Públicas?',
      options: [
        'Mediante Decreto del Consejo de Gobierno a propuesta de las Cortes Regionales.',
        'Mediante convenio entre el titular del centro y la Consejería de la Administración Regional competente en materia de bibliotecas.',
        'Mediante simple comunicación previa dirigida a la Dirección-Gerencia de la Biblioteca de Castilla-La Mancha.',
        'Mediante resolución sancionadora de adscripción obligatoria dictada por la Delegación Provincial.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 11 dictamina que las bibliotecas, especializadas, centros de documentación o colecciones que no formen parte de la Red «podrán integrarse en el Sistema de Bibliotecas de Castilla-La Mancha mediante convenio entre el titular y la Consejería de la Administración Regional competente en materia de bibliotecas».'
    },
    {
      id: 'ley3_2011_q18',
      category: 'El Sistema de Bibliotecas',
      difficulty: 'C1',
      lawReference: 'Artículo 13, apartado 2',
      question: 'En relación con el Directorio de instituciones y centros del Sistema de Bibliotecas de Castilla-La Mancha (art. 13.2):',
      options: [
        'Los centros pertenecientes a la Red de Bibliotecas Públicas incluidos en el Registro de Bibliotecas serán incluidos de oficio en el Directorio.',
        'Requiere que cada biblioteca municipal solicite anualmente su renovación e inscripción expresa.',
        'Es gestionado de forma rotatoria bienal por las cinco Diputaciones Provinciales.',
        'Se publica con carácter reservado y acceso restringido exclusivamente para personal inspector.'
      ],
      correctAnswer: 0,
      explanation: 'El art. 13.2 señala que «Todas las instituciones y centros incorporados al Sistema formarán parte del Directorio. Los centros pertenecientes a la Red de Bibliotecas Públicas [...] y, por lo tanto, incluidos en el Registro de Bibliotecas establecido en el artículo 29 de esta Ley, serán incluidos de oficio en el presente Directorio».'
    },
    {
      id: 'ley3_2011_q03',
      category: 'Órganos y Planificación',
      difficulty: 'C1',
      lawReference: 'Artículo 15.2.c y Artículo 17.3',
      question: 'Según la Ley 3/2011, ¿a qué órgano corresponde la aprobación del Mapa de Bibliotecas de Castilla-La Mancha, así como de sus posteriores modificaciones?',
      options: [
        'A la Comisión Técnica de la Red de Bibliotecas Públicas de Castilla-La Mancha.',
        'Al Consejo de Gobierno de la Junta de Comunidades de Castilla-La Mancha, mediante Decreto.',
        'Al Consejo de la Lectura y Bibliotecas de Castilla-La Mancha, a propuesta de la Consejería competente en materia de bibliotecas.',
        'Al Consejo Asesor de la Red de Bibliotecas Públicas de Castilla-La Mancha, previo informe de las Comisiones Técnicas Provinciales.'
      ],
      correctAnswer: 2,
      explanation: 'Conforme a los arts. 15.2.c y 17.3, la Consejería competente en materia de bibliotecas elabora y eleva el Mapa de Bibliotecas (y sus modificaciones) al Consejo de la Lectura y Bibliotecas de Castilla-La Mancha para su aprobación.'
    },
    {
      id: 'ley3_2011_q19',
      category: 'Órganos Colegiados',
      difficulty: 'C1',
      lawReference: 'Artículo 15, apartados 3 y 4',
      question: '¿Quién ostenta la Presidencia del Consejo de la Lectura y Bibliotecas de Castilla-La Mancha y con qué frecuencia ordinaria se reúne este órgano colegiado?',
      options: [
        'La persona titular de la Dirección General de bibliotecas, reuniéndose dos veces al año.',
        'La persona titular de la Consejería competente en materia de bibliotecas, reuniéndose una vez al año.',
        'La persona titular del Rectorado de la UCLM, reuniéndose con periodicidad trimestral.',
        'La persona titular de la Dirección-Gerencia de la Biblioteca de CLM, reuniéndose semestralmente.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 15.3.a atribuye la Presidencia a la persona titular de la Consejería competente en materia de bibliotecas. El art. 15.4 dispone que «se reunirá una vez al año y cuando sea convocado por la persona titular de la Presidencia del Consejo».'
    },
    {
      id: 'ley3_2011_q20',
      category: 'Órganos Colegiados',
      difficulty: 'C1',
      lawReference: 'Artículo 15, apartado 3.b.4',
      question: 'En la composición del Consejo de la Lectura y Bibliotecas de Castilla-La Mancha, los cinco Alcaldes de municipios con biblioteca en la Red son designados por:',
      options: [
        'Elección directa entre todos los alcaldes de la región en asamblea general.',
        'La persona titular de la Presidencia del Consejo, a propuesta de la Federación de Municipios y Provincias de Castilla-La Mancha.',
        'Las Cortes de Castilla-La Mancha por mayoría de dos tercios.',
        'Los Presidentes de las cinco Diputaciones Provinciales por consenso unánime.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 15.3.b.4 establece que las vocalías correspondientes a los cinco Alcaldes serán «designados por la persona titular de la Presidencia del Consejo a propuesta de la Federación de Municipios y Provincias de Castilla-La Mancha» y serán renovados de forma periódica.'
    },

    // --- TÍTULO III: SERVICIOS Y COMPETENCIAS (Arts. 16-21) ---
    {
      id: 'ley3_2011_q02',
      category: 'Competencias Municipales y Población',
      difficulty: 'C1',
      lawReference: 'Artículo 16, apartados 2, 3, 4 y 5',
      question: 'Conforme a lo dispuesto en el artículo 16 de la Ley 3/2011 sobre la obligación de prestación de servicios bibliotecarios públicos, señale la afirmación correcta:',
      options: [
        'Todos los municipios mayores de 500 habitantes deberán disponer obligatoriamente de biblioteca de titularidad pública y uso general.',
        'Todos los municipios de más de 20.000 habitantes deberán disponer de una red municipal de bibliotecas de titularidad pública y uso general.',
        'Los municipios que tengan entre 300 y 1.000 habitantes deberán disponer necesariamente de una biblioteca fija de titularidad municipal.',
        'Los municipios menores de 300 habitantes están exentos de recibir cualquier tipo de prestación o servicio bibliotecario.'
      ],
      correctAnswer: 1,
      explanation: 'El artículo 16.3 establece que «Todos los municipios de Castilla-La Mancha de más de 20.000 habitantes deberán disponer de una red municipal de bibliotecas de titularidad pública y uso general». La obligación de biblioteca fija es para municipios > 1.000 hab. (art. 16.2), entre 300 y 1.000 hab. dispondrán de servicios móviles (art. 16.4) y los < 300 hab. tendrán servicios de extensión según viabilidad técnica (art. 16.5).'
    },
    {
      id: 'ley3_2011_q21',
      category: 'Competencias Municipales y Población',
      difficulty: 'C1',
      lawReference: 'Artículo 16, apartados 4 y 5',
      question: '¿Qué servicio bibliotecario público corresponde a los municipios de Castilla-La Mancha que tengan entre 300 y 1.000 habitantes y carezcan de biblioteca pública de uso general?',
      options: [
        'Servicios de extensión bibliotecaria fijados discrecionalmente por la Delegación Provincial.',
        'Servicios bibliotecarios de carácter móvil.',
        'Obligación inmediata de construir un edificio bibliotecario estable.',
        'Acceso restringido telemático exclusivo a la Biblioteca Digital de CLM.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 16.4 estipula expresamente: «Todos los municipios de Castilla-La Mancha que tengan entre 300 y 1.000 habitantes y no dispongan de biblioteca pública de uso general, dispondrán de servicios bibliotecarios de carácter móvil».'
    },
    {
      id: 'ley3_2011_q22',
      category: 'Servicios Básicos',
      difficulty: 'C1',
      lawReference: 'Artículo 18',
      question: 'Según el artículo 18 de la Ley 3/2011, ¿cuál de los siguientes se considera un «servicio básico» de acceso libre y gratuito en cualquier biblioteca de titularidad pública y uso general?',
      options: [
        'El préstamo interbibliotecario internacional de manuscritos protegidos.',
        'El servicio de cafetería y reprografía de fondos comerciales.',
        'La consulta en sala de las publicaciones que integren su fondo, así como el préstamo individual y colectivo.',
        'La expedición de certificados oficiales de homologación de lectura comprensiva.'
      ],
      correctAnswer: 2,
      explanation: 'El art. 18.1 enumera como servicios básicos: a) Consulta en sala, b) Préstamo individual y colectivo, c) Información y orientación para el uso y necesidades de información, d) Acceso a la información digital e Internet y formación para su manejo. El art. 18.2 declara que se accederá a ellos de forma libre y gratuita.'
    },
    {
      id: 'ley3_2011_q07',
      category: 'Competencias Provinciales',
      difficulty: 'C1',
      lawReference: 'Artículo 20, letra b)',
      question: 'Conforme al artículo 20 de la Ley 3/2011, en el apoyo a la financiación de construcción de edificios, equipamiento y mantenimiento de bibliotecas públicas municipales de carácter general, las Diputaciones Provinciales actuarán especialmente en los municipios:',
      options: [
        'Menores de 1.000 habitantes.',
        'Menores de 3.000 habitantes.',
        'Menores de 5.000 habitantes.',
        'Menores de 20.000 habitantes.'
      ],
      correctAnswer: 2,
      explanation: 'El art. 20.b encomienda a las Diputaciones Provinciales apoyar la financiación de construcción, equipamiento y mantenimiento de bibliotecas municipales «especialmente en los municipios menores de 5.000 habitantes».'
    },
    {
      id: 'ley3_2011_q23',
      category: 'Competencias Autonómicas',
      difficulty: 'C1',
      lawReference: 'Artículo 21, letra l) y m)',
      question: '¿A cuál de las siguientes Administraciones corresponde crear y gestionar el «Registro de Bibliotecas de la Red de Bibliotecas Públicas de Castilla-La Mancha» y ejercer la potestad sancionadora en la Red?',
      options: [
        'A las Diputaciones Provinciales en sus respectivos territorios.',
        'A la Consejería de la Administración Regional competente en materia de bibliotecas.',
        'A los Ayuntamientos de municipios de más de 20.000 habitantes.',
        'A la Universidad de Castilla-La Mancha en régimen de encomienda de gestión.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 21 (letras l y m) atribuye a la Consejería competente en materia de bibliotecas de la Junta de Comunidades: «l) Crear y gestionar el Registro de Bibliotecas de la Red de Bibliotecas Públicas de Castilla-La Mancha» y «m) Inspeccionar, evaluar la calidad de los servicios y ejercer la potestad sancionadora de la Red».'
    },

    // --- TÍTULO IV: LA BIBLIOTECA DE CASTILLA-LA MANCHA (Arts. 22-24) ---
    {
      id: 'ley3_2011_q24',
      category: 'Biblioteca de Castilla-La Mancha',
      difficulty: 'C1',
      lawReference: 'Artículos 22 y 23.1',
      question: 'Sobre la Biblioteca de Castilla-La Mancha (arts. 22 y 23), señale la afirmación correcta:',
      options: [
        'Es un centro de titularidad estatal gestionado directamente por el Ministerio de Cultura.',
        'Es la cabecera del Sistema de Bibliotecas de CLM y principal centro de la Red, depende orgánicamente de la Consejería e integra a efectos de gestión a la BPE de Toledo.',
        'Es una fundación pública con personalidad jurídica propia e independiente de la Junta de Comunidades.',
        'Es una biblioteca universitaria adscrita al Vicerrectorado de Investigación de la UCLM.'
      ],
      correctAnswer: 1,
      explanation: 'Los arts. 22 y 23.1 definen a la Biblioteca de Castilla-La Mancha como cabecera del Sistema y principal centro de la Red, dependiente orgánicamente de la Consejería de bibliotecas e integrando a los efectos de gestión a la Biblioteca Pública del Estado de Toledo.'
    },
    {
      id: 'ley3_2011_q05',
      category: 'Biblioteca de Castilla-La Mancha',
      difficulty: 'C1',
      lawReference: 'Artículo 24, letra e)',
      question: '¿Cuál de las siguientes funciones está atribuida expresamente a la Biblioteca de Castilla-La Mancha por el artículo 24 de la Ley 3/2011?',
      options: [
        'Aprobar el reglamento interno de funcionamiento de la Red de Bibliotecas Públicas de Castilla-La Mancha.',
        'Establecer el sistema y forma de financiación de las bibliotecas incorporadas a la Red de Bibliotecas Públicas.',
        'Servir de central de canje, intercambio y depósito de fondos duplicados o procedentes de expurgo de los centros integrantes de la Red de Bibliotecas Públicas de Castilla-La Mancha.',
        'Ejercer la potestad sancionadora en materia de infracciones graves y muy graves cometidas en la Red.'
      ],
      correctAnswer: 2,
      explanation: 'El art. 24.e atribuye a la Biblioteca de Castilla-La Mancha la función de «Servir de central de canje, intercambio y depósito de fondos duplicados o procedentes de expurgo de los centros integrantes de la Red de Bibliotecas Públicas de Castilla-La Mancha».'
    },
    {
      id: 'ley3_2011_q25',
      category: 'Biblioteca de Castilla-La Mancha',
      difficulty: 'C1',
      lawReference: 'Artículo 24, letras b), c) y g)',
      question: 'En materia de patrimonio y control bibliográfico, la Biblioteca de Castilla-La Mancha se encarga de:',
      options: [
        'Destruir los fondos duplicados que no tengan carácter de incunables.',
        'Ser depositaria de un ejemplar de Depósito Legal, compilar la bibliografía de Castilla-La Mancha y coordinar técnicamente la Biblioteca Digital de Castilla-La Mancha.',
        'Fijar los precios de venta de las publicaciones impresas en la región.',
        'Asignar el número de ISBN a los editores castellano-manchegos.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 24 (letras b, c y g) encomienda a la Biblioteca de CLM ser depositaria de un ejemplar de Depósito Legal, recoger publicaciones oficiales autonómicas, actuar como centro de control compilando y publicando la Bibliografía regional, y coordinar técnicamente la Biblioteca Digital de CLM.'
    },

    // --- TÍTULO V: LA RED DE BIBLIOTECAS PÚBLICAS Y SUS ÓRGANOS (Arts. 25-34) ---
    {
      id: 'ley3_2011_q26',
      category: 'Red de Bibliotecas Públicas',
      difficulty: 'C1',
      lawReference: 'Artículo 27',
      question: 'Conforme al artículo 27 de la Ley 3/2011, la integración de centros en la Red de Bibliotecas Públicas de Castilla-La Mancha se realiza:',
      options: [
        'Por Orden de la Consejería de Hacienda tras auditoría financiera.',
        'Según propuesta de la Comisión Técnica de la Red, por resolución de la Consejería competente en materia de bibliotecas, previa aceptación del titular de dicho centro.',
        'Por acuerdo plenario del Ayuntamiento sin intervención de órganos autonómicos.',
        'Por silencio administrativo positivo transcurridos tres meses desde la solicitud.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 27 estipula: «La integración de centros en la Red de Bibliotecas Públicas se realizará según propuesta de la Comisión Técnica de la Red de Bibliotecas Públicas de Castilla-La Mancha, por resolución de la Consejería competente en materia de bibliotecas, previa aceptación del titular de dicho centro».'
    },
    {
      id: 'ley3_2011_q06',
      category: 'Requisitos de la Red de Bibliotecas',
      difficulty: 'C1',
      lawReference: 'Artículo 28, apartado 2, letra b)',
      question: 'De acuerdo con el artículo 28.2.b) de la Ley 3/2011, ¿cuál es el requisito mínimo general de apertura al público que deben cumplir las bibliotecas integradas en la Red de Bibliotecas Públicas de Castilla-La Mancha?',
      options: [
        'Al menos 20 horas semanales, repartidas en un mínimo de cuatro días.',
        'Al menos 15 horas semanales, repartidas en cinco días.',
        'Al menos 25 horas semanales, repartidas de lunes a sábado.',
        'Al menos 12 horas semanales, distribuidas a criterio del Ayuntamiento titular.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 28.2.b establece con claridad el mínimo de «Apertura al público de al menos 15 horas semanales, repartidas en cinco días», dejando al Mapa de Bibliotecas la facultad de fijar mínimos superiores según la población del municipio.'
    },
    {
      id: 'ley3_2011_q27',
      category: 'Financiación de la Red',
      difficulty: 'C1',
      lawReference: 'Artículo 31.3 y Artículo 32.2.a',
      question: '¿Qué órgano tiene la competencia expresa de establecer el sistema y forma de financiación de las bibliotecas incorporadas a la Red de Bibliotecas Públicas de Castilla-La Mancha?',
      options: [
        'La Comisión de Hacienda de las Cortes de Castilla-La Mancha.',
        'El Consejo Asesor de la Red de Bibliotecas Públicas de Castilla-La Mancha.',
        'Las Comisiones Técnicas Provinciales conjuntamente.',
        'El Consejo Escolar de Castilla-La Mancha.'
      ],
      correctAnswer: 1,
      explanation: 'Los arts. 31.3 y 32.2.a atribuyen al Consejo Asesor de la Red de Bibliotecas Públicas de CLM la función básica de «Establecer el sistema y forma de financiación de las bibliotecas incorporadas a la Red en el marco de lo indicado en la presente Ley y el resto del ordenamiento jurídico».'
    },
    {
      id: 'ley3_2011_q04',
      category: 'Órganos Colegiados y Quórum',
      difficulty: 'C1',
      lawReference: 'Artículo 32, apartado 4',
      question: 'En relación con el régimen de sesiones del Consejo Asesor de la Red de Bibliotecas Públicas de Castilla-La Mancha, el artículo 32.4 de la Ley 3/2011 establece que se reunirá:',
      options: [
        'Al menos una vez al año y cuando lo soliciten, al menos, tres de las instituciones representadas.',
        'Al menos dos veces al año y cuando lo soliciten dos tercios de sus miembros.',
        'Una vez al año y cuando sea convocado exclusivamente por iniciativa de la Presidencia de la Junta de Comunidades.',
        'Con periodicidad semestral ordinaria y cuando lo soliciten la mayoría absoluta de los vocales municipales.'
      ],
      correctAnswer: 0,
      explanation: 'El art. 32.4 señala que «El Consejo Asesor de la Red se reunirá al menos una vez al año y cuando lo soliciten, al menos, tres de las instituciones representadas».'
    },
    {
      id: 'ley3_2011_q28',
      category: 'Órganos Colegiados',
      difficulty: 'C1',
      lawReference: 'Artículo 33, apartados 1, 2.g y 3.a',
      question: 'Respecto a la Comisión Técnica de la Red de Bibliotecas Públicas de Castilla-La Mancha (art. 33), señale la opción correcta:',
      options: [
        'Es el máximo órgano de representación política de los municipios y está presidido por el Rector de la UCLM.',
        'Es el máximo órgano técnico de dirección, coordinación e impulso de la Red, su Presidencia corresponde a la persona titular de la Dirección General de bibliotecas y le compete aprobar el reglamento interno de funcionamiento de la Red.',
        'Es un órgano consultivo sin facultades de aprobación reglamentaria.',
        'Está presidida por el Delegado Provincial de Toledo y carece de secretaría técnica.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 33 define a la Comisión Técnica como el «máximo órgano técnico de dirección, coordinación e impulso de la Red», presidido por el titular de la Dirección General de bibliotecas (33.3.a) y con la función expresa de «Aprobar el reglamento interno de funcionamiento de la Red de Bibliotecas Públicas» (33.2.g).'
    },
    {
      id: 'ley3_2011_q29',
      category: 'Órganos Colegiados',
      difficulty: 'C1',
      lawReference: 'Artículo 33, apartado 3.b.3',
      question: 'En la composición de la Comisión Técnica de la Red de Bibliotecas Públicas (art. 33.3.b.3), ¿cuántos vocales máximos pueden designarse por la Presidencia y qué representación mínima obligatoria deben tener?',
      options: [
        'Un máximo de 10 vocales, todos de la Administración autonómica.',
        'Un máximo de 12 vocales, de los cuales al menos seis deberán representar a bibliotecas públicas dependientes de los municipios y/o a las Diputaciones Provinciales.',
        'Un máximo de 5 vocales, uno por cada provincia.',
        'Un número ilimitado de vocales elegidos por sufragio entre el personal bibliotecario.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 33.3.b.3 establece «Un máximo de doce vocales designados por la persona titular de la Presidencia de la Comisión Técnica [...] Al menos seis de dichos vocales, deberán representar a bibliotecas públicas dependientes de los municipios y/o a las Diputaciones Provinciales».'
    },
    {
      id: 'ley3_2011_q30',
      category: 'Órganos Colegiados',
      difficulty: 'C1',
      lawReference: 'Artículo 34',
      question: 'En cada una de las cinco provincias de Castilla-La Mancha existe una Comisión Técnica Provincial de la Red (art. 34). ¿Quién ostenta su Presidencia y qué función específica le compete sobre servicios móviles?',
      options: [
        'Presidida por el Presidente de la Diputación, aprueba la compra de bibliobuses.',
        'Presidida por la persona titular de la Delegación Provincial de la Consejería de bibliotecas, y le corresponde dirigir la prestación de los servicios bibliotecarios móviles en el ámbito de la provincia.',
        'Presidida por el Alcalde de la capital de provincia, y coordina exclusivamente las bibliotecas universitarias.',
        'Presidida por el Director de la BPE, y aprueba las sanciones graves de la provincia.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 34.3.a fija la Presidencia en la «persona titular de la Delegación Provincial de la Consejería [...] competente en materia de bibliotecas» y el art. 34.2.b le atribuye «Dirigir la prestación de los servicios bibliotecarios móviles en el ámbito de la provincia».'
    },
    {
      id: 'ley3_2011_q31',
      category: 'Órganos Colegiados y Quórum',
      difficulty: 'C1',
      lawReference: 'Artículo 33.4 y Artículo 34.4',
      question: 'Tanto la Comisión Técnica de la Red como las Comisiones Técnicas Provinciales se reunirán de forma ordinaria al menos:',
      options: [
        'Una vez al año y cuando lo soliciten tres miembros.',
        'Dos veces al año y cuando lo soliciten dos tercios de sus miembros.',
        'Cuatro veces al año por convocatoria ministerial.',
        'Una vez al mes durante el periodo lectivo escolar.'
      ],
      correctAnswer: 1,
      explanation: 'Los arts. 33.4 y 34.4 fijan idéntico régimen para ambos órganos técnicos: «se reunirá al menos dos veces al año y cuando lo soliciten dos tercios de sus miembros».'
    },

    // --- TÍTULO VI & VII: DERECHOS, DEBERES, EXCLUSIÓN E INSPECCIÓN (Arts. 35-39) ---
    {
      id: 'ley3_2011_q32',
      category: 'Derechos de la Ciudadanía',
      difficulty: 'C1',
      lawReference: 'Artículo 35, apartado 2',
      question: 'Según el artículo 35.2 de la Ley 3/2011, en el caso de servicios bibliotecarios públicos no considerados básicos:',
      options: [
        'Está absolutamente prohibido cualquier tipo de contraprestación o cobro.',
        'Podrá exigirse el pago del coste de los mismos, de acuerdo con la normativa de aplicación.',
        'Quedan reservados exclusivamente para investigadores acreditados por la Real Academia.',
        'Solo podrán prestarse en días festivos y domingos.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 35.2 señala textualmente: «En el caso de servicios no considerados básicos según el artículo 18, podrá exigirse el pago del coste de los mismos, de acuerdo con la normativa de aplicación».'
    },
    {
      id: 'ley3_2011_q33',
      category: 'Régimen de Control e Integración',
      difficulty: 'C1',
      lawReference: 'Artículo 38',
      question: 'Conforme al artículo 38 de la Ley 3/2011, el incumplimiento de obligaciones o compromisos por los titulares integrados en el Sistema o en la Red conllevará su exclusión mediante:',
      options: [
        'Decreto sancionador del Consejo de Gobierno sin trámite de alegaciones.',
        'Resolución de la persona titular de la Consejería competente en materia de bibliotecas, previa tramitación de un procedimiento administrativo donde se dará audiencia al interesado.',
        'Baja automática e instantánea en el Directorio decretada por la secretaría del centro.',
        'Sentencia firme del Tribunal Superior de Justicia de Castilla-La Mancha.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 38 estipula que el incumplimiento «conllevará la exclusión de los citados titulares del Sistema y de la Red [...] mediante Resolución de la persona titular de la Consejería competente en materia de bibliotecas, previa tramitación de un procedimiento administrativo donde se dará audiencia al interesado».'
    },
    {
      id: 'ley3_2011_q34',
      category: 'Inspección de Servicios',
      difficulty: 'C1',
      lawReference: 'Artículo 39',
      question: '¿A quién corresponde la inspección y evaluación de la calidad de los servicios en la Red de Bibliotecas Públicas según el artículo 39 de la Ley 3/2011?',
      options: [
        'A la Inspección General de Servicios del Ministerio de Hacienda.',
        'A la Consejería competente en materia de bibliotecas (que dispondrá de un servicio de inspección), sin perjuicio del asesoramiento, apoyo técnico y directrices de la Consejería competente en materia de calidad de los servicios públicos.',
        'A los directores de las bibliotecas municipales en régimen de autoevaluación semestral.',
        'A la Comisión Europea a través de la oficina de Eblida.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 39 asigna la inspección y evaluación a la Consejería competente en bibliotecas, disponiendo de un servicio de inspección propio, con el asesoramiento y directrices de la Consejería competente en materia de calidad de los servicios públicos.'
    },

    // --- TÍTULO VIII: UNIVERSITARIAS, ESCOLARES Y ESPECIALIZADAS (Arts. 40-42) ---
    {
      id: 'ley3_2011_q35',
      category: 'Otras Bibliotecas del Sistema',
      difficulty: 'C1',
      lawReference: 'Artículo 41, apartados 1 y 2',
      question: 'En relación con las bibliotecas escolares de centros públicos (art. 41), ¿a qué Consejería corresponde su creación, gestión y financiación y cuál es el papel de la Consejería de bibliotecas?',
      options: [
        'Corresponde a la Consejería de Fomento; la de bibliotecas financia los edificios.',
        'Corresponde a la Consejería competente en materia de educación; la Consejería competente en materia de bibliotecas podrá asesorar en criterios de coordinación/gestión técnica y facilitar la formación del personal.',
        'Dependen directamente de las Cortes Regionales con apoyo del Defensor del Pueblo.',
        'Dependen en exclusiva de las AMPAS de cada centro educativo sin intervención autonómica.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 41.1 atribuye la creación, regulación, gestión y financiación a la Consejería competente en materia de educación. El art. 41.2 añade que la Consejería de bibliotecas «podrá asesorar en el establecimiento de los criterios generales de coordinación y gestión técnica de las bibliotecas escolares, así como facilitar la formación inicial y continua del personal».'
    },

    // --- TÍTULO IX: RÉGIMEN SANCIONADOR (Arts. 43-55) ---
    {
      id: 'ley3_2011_q36',
      category: 'Régimen Sancionador',
      difficulty: 'C1',
      lawReference: 'Artículo 45, letra e)',
      question: 'De acuerdo con el artículo 45 de la Ley 3/2011, «la no devolución y la pérdida de los libros o, en general, de los materiales prestados» está tipificada como:',
      options: [
        'Infracción leve.',
        'Infracción grave.',
        'Infracción muy grave.',
        'Mera falta civil no susceptible de procedimiento sancionador administrativo.'
      ],
      correctAnswer: 0,
      explanation: 'El art. 45.e tipifica expresamente como infracción LEVE «La no devolución y la pérdida de los libros o, en general, de los materiales prestados».'
    },
    {
      id: 'ley3_2011_q08',
      category: 'Régimen Sancionador',
      difficulty: 'C1',
      lawReference: 'Artículos 45, 46 y 47',
      question: 'Según el régimen sancionador regulado en la Ley 3/2011, ¿cuál de las siguientes conductas constituye legalmente una infracción GRAVE?',
      options: [
        'Maltratar o dañar los materiales documentales integrantes del patrimonio bibliográfico y documental cuando el daño causado suponga la retirada temporal de los materiales afectados.',
        'Las acciones u omisiones que produzcan la pérdida, destrucción o inutilización definitiva de fondos documentales del patrimonio bibliográfico.',
        'La no devolución y la pérdida de los libros o materiales prestados cuando no formen parte del patrimonio bibliográfico.',
        'Las acciones que impidan el derecho de acceso a los recursos de información con infracción del principio de igualdad por motivos de ideología o religión.'
      ],
      correctAnswer: 0,
      explanation: 'El art. 46.a tipifica como infracción GRAVE el daño a materiales del patrimonio bibliográfico cuando suponga su «retirada temporal». Si la pérdida o destrucción es «definitiva» (opción B) o si hay discriminación en el acceso (opción D), son infracciones MUY GRAVES (art. 47). La no devolución o pérdida de préstamos ordinarios (opción C) es infracción LEVE (art. 45.e).'
    },
    {
      id: 'ley3_2011_q37',
      category: 'Régimen Sancionador',
      difficulty: 'C1',
      lawReference: 'Artículo 47, letra a) y b)',
      question: 'Constituyen infracciones MUY GRAVES según el artículo 47 de la Ley 3/2011:',
      options: [
        'No guardar el debido orden y compostura en la sala de lectura tras ser requerido por el personal.',
        'Impedir o menoscabar sin causa justificada el derecho de acceso con infracción del principio de igualdad por motivos ideológicos/religiosos, y causar la pérdida, destrucción o inutilización definitiva de fondos del patrimonio bibliográfico o bienes de la Red.',
        'Retrasarse más de 15 días en la devolución de tres volúmenes prestados.',
        'Dañar un bien mueble cuando no impida su posterior utilización.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 47 tipifica como muy graves: a) Impedir o menoscabar el acceso con infracción del principio de igualdad por discriminación ideológica, religiosa, etc., y b) La pérdida, destrucción o inutilización DEFINITIVAS de fondos del patrimonio bibliográfico o bienes muebles/inmuebles de la Red.'
    },
    {
      id: 'ley3_2011_q38',
      category: 'Régimen Sancionador',
      difficulty: 'C1',
      lawReference: 'Artículo 48, apartado 2',
      question: 'En el régimen sancionador de la Ley 3/2011, cuando el infractor sea un usuario menor de edad (art. 48.2):',
      options: [
        'Queda absolutamente exento de cualquier consecuencia económica o jurídica.',
        'Los padres, tutores o personas que ejerzan la guarda serán responsables subsidiarios de las sanciones pecuniarias impuestas al mismo.',
        'Se le sancionará obligatoriamente con el tramo máximo de multa previsto para la falta.',
        'La sanción pecuniaria se traslada de forma solidaria e inmediata al director del centro escolar.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 48.2 establece expresamente: «Los padres, tutores o personas que ejerzan la guarda del usuario menor de edad serán responsables subsidiarios de las sanciones pecuniarias impuestas al mismo».'
    },
    {
      id: 'ley3_2011_q39',
      category: 'Régimen Sancionador',
      difficulty: 'C1',
      lawReference: 'Artículo 49, apartado 1.d)',
      question: 'A efectos de apreciar la circunstancia agravante de reincidencia (art. 49.1.d), ¿en qué plazo debe cometerse más de una infracción de la misma naturaleza declarada por resolución firme?',
      options: [
        'En el término de seis meses desde el inicio del expediente.',
        'En el término de un año, computado desde la notificación de la sanción impuesta por la anterior infracción.',
        'En el término de tres años computados desde la fecha del hecho infractor.',
        'En cualquier momento dentro de la misma legislatura autonómica.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 49.1.d define la reincidencia como «la comisión en el término de un año de más de una infracción de la misma naturaleza cuando así haya sido declarado por resolución firme. El plazo se computará desde la notificación de la sanción impuesta por la anterior infracción».'
    },
    {
      id: 'ley3_2011_q40',
      category: 'Régimen Sancionador y Plazos',
      difficulty: 'C1',
      lawReference: 'Artículo 50, apartado 1',
      question: '¿Cuáles son los plazos de prescripción de las INFRACCIONES establecidos en el artículo 50.1 de la Ley 3/2011?',
      options: [
        'Leves: 3 meses; Graves: 1 año; Muy graves: 2 años.',
        'Leves: 6 meses; Graves: 2 años; Muy graves: 3 años.',
        'Leves: 1 año; Graves: 2 años; Muy graves: 4 años.',
        'Leves: 6 meses; Graves: 1 año; Muy graves: 5 años.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 50.1 determina: «Las infracciones prescribirán: a) Las leves, a los seis meses. b) Las graves, a los dos años. c) Las muy graves, a los tres años».'
    },
    {
      id: 'ley3_2011_q41',
      category: 'Régimen Sancionador',
      difficulty: 'C1',
      lawReference: 'Artículo 51, apartado 2',
      question: 'De conformidad con el artículo 51.2 de la Ley 3/2011, ¿cuáles de las siguientes medidas CARECEN de naturaleza sancionadora?',
      options: [
        'El apercibimiento y la multa de cuantía inferior a 500 euros.',
        'La medida de expulsión de un usuario en supuestos de grave alteración del orden y la obligación de indemnizar los daños y perjuicios causados.',
        'La suspensión de los derechos de usuario por un periodo de hasta tres meses.',
        'La amonestación verbal en presencia del resto de usuarios.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 51.2 aclara que carecen de naturaleza sancionadora: a) La medida de expulsión de un usuario en supuestos de grave alteración del orden, y b) La obligación de indemnizar los daños y perjuicios por pérdida, destrucción o inutilización de fondos o bienes.'
    },
    {
      id: 'ley3_2011_q42',
      category: 'Régimen Sancionador y Cuantías',
      difficulty: 'C1',
      lawReference: 'Artículo 52, apartados 1 y 2',
      question: '¿Qué sanciones pecuniarias y accesorias corresponden a las infracciones LEVES y GRAVES según el artículo 52 de la Ley 3/2011?',
      options: [
        'Leves: hasta 1.000 € (suspensión hasta 1 mes) | Graves: 1.001 a 5.000 € (suspensión hasta 6 meses).',
        'Leves: apercibimiento o multa de hasta 3.000 € (suspensión hasta 6 meses) | Graves: multa desde 3.001 hasta 15.000 € (suspensión hasta 1 año).',
        'Leves: hasta 500 € | Graves: 501 a 3.000 €.',
        'Leves: apercibimiento exclusivo | Graves: multa fija de 10.000 €.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 52.1 fija para leves apercibimiento o multa de hasta 3.000 € (y accesoria de suspensión de derechos hasta 6 meses). El art. 52.2 fija para graves multa de 3.001 a 15.000 € (y accesoria de suspensión de derechos hasta 1 año).'
    },
    {
      id: 'ley3_2011_q09',
      category: 'Sanciones y Prescripción',
      difficulty: 'C1',
      lawReference: 'Artículo 52.3 y Artículo 53, letra c)',
      question: 'En el marco de la Ley 3/2011, las infracciones MUY GRAVES conllevan una sanción de multa de:',
      options: [
        '3.001 euros hasta 15.000 euros, y su sanción prescribe a los dos años.',
        '15.001 euros hasta 60.000 euros, y su sanción prescribe a los tres años.',
        'Hasta 3.000 euros, y su sanción prescribe al año.',
        '60.001 euros hasta 120.000 euros, y su sanción prescribe a los cuatro años.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 52.3 fija para infracciones muy graves multa de «15.001 euros hasta 60.000 euros» (y posible suspensión de hasta dos años). El art. 53.c establece que las sanciones por infracciones muy graves prescriben a los «tres años».'
    },
    {
      id: 'ley3_2011_q43',
      category: 'Régimen Sancionador y Plazos',
      difficulty: 'C1',
      lawReference: 'Artículo 53',
      question: '¿Cuáles son los plazos de prescripción de las SANCIONES impuestas según el artículo 53 de la Ley 3/2011?',
      options: [
        'Leves: 6 meses; Graves: 1 año; Muy graves: 2 años.',
        'Leves: un año; Graves: dos años; Muy graves: tres años.',
        'Leves: dos años; Graves: tres años; Muy graves: cuatro años.',
        'Todas las sanciones prescriben a los cinco años con arreglo a la normativa tributaria.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 53 fija los plazos de prescripción de las sanciones: «a) Las impuestas por infracciones leves: un año. b) Las impuestas por infracciones graves: dos años. c) Las impuestas por infracciones muy graves: tres años».'
    },
    {
      id: 'ley3_2011_q10',
      category: 'Procedimiento y Competencia Sancionadora',
      difficulty: 'C1',
      lawReference: 'Artículo 54, apartado 2, letra b)',
      question: 'Conforme al artículo 54.2 de la Ley 3/2011, cuando la titularidad o gestión del centro corresponda a la Administración de la Junta de Comunidades de Castilla-La Mancha, ¿a qué órgano corresponde imponer las sanciones por infracciones GRAVES?',
      options: [
        'A las personas titulares de las Delegaciones Provinciales de la Consejería competente en materia de bibliotecas.',
        'A la persona titular de la Dirección General competente en materia de bibliotecas.',
        'A la persona titular de la Consejería competente en materia de bibliotecas.',
        'A la persona titular de la Dirección-Gerencia de la Biblioteca de Castilla-La Mancha.'
      ],
      correctAnswer: 1,
      explanation: 'En centros gestionados por la Junta (art. 54.2): las infracciones LEVES las sancionan los titulares de las Delegaciones Provinciales (54.2.a); las GRAVES, el titular de la Dirección General de bibliotecas (54.2.b); y las MUY GRAVES, el titular de la Consejería (54.2.c).'
    },
    {
      id: 'ley3_2011_q44',
      category: 'Procedimiento Sancionador',
      difficulty: 'C1',
      lawReference: 'Artículo 54, apartados 2.a y 2.c',
      question: 'En centros de la Junta de Comunidades, ¿a quién compete sancionar las infracciones LEVES y las MUY GRAVES respectivamente (art. 54.2)?',
      options: [
        'Leves: Directores de Bibliotecas | Muy graves: Consejo de Gobierno.',
        'Leves: Titulares de las Delegaciones Provinciales de la Consejería | Muy graves: Titular de la Consejería competente en materia de bibliotecas.',
        'Leves: Jefes de Servicio | Muy graves: Presidente de la Junta.',
        'Leves y Muy graves corresponden en exclusiva al Director General de Función Pública.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 54.2.a atribuye las leves a los titulares de las Delegaciones Provinciales de la Consejería, y el art. 54.2.c atribuye las muy graves a la persona titular de la Consejería competente en materia de bibliotecas.'
    },

    // --- DISPOSICIONES TRANSITORIAS, DEROGATORIAS Y FINALES ---
    {
      id: 'ley3_2011_q45',
      category: 'Disposiciones de la Ley',
      difficulty: 'C1',
      lawReference: 'Disposición Derogatoria Única',
      question: '¿Qué norma legal de ámbito autonómico quedó expresamente derogada con la entrada en vigor de la Ley 3/2011?',
      options: [
        'La Ley 4/1990, de Patrimonio Cultural de Castilla-La Mancha.',
        'La Ley 1/1989, de 4 de mayo, de Bibliotecas de Castilla-La Mancha.',
        'La Ley 7/1985, Reguladora de las Bases del Régimen Local.',
        'La Ley 10/2007, de la lectura, del libro y de las bibliotecas.'
      ],
      correctAnswer: 1,
      explanation: 'La Disposición Derogatoria Única señala: «Quedan derogadas la Ley 1/1989, de 4 de mayo, de Bibliotecas de Castilla-La Mancha, así como todas las normas de igual o inferior rango en lo que contradigan o se opongan a lo dispuesto en la presente Ley».'
    },
    {
      id: 'ley3_2011_q46',
      category: 'Disposiciones de la Ley',
      difficulty: 'C1',
      lawReference: 'Disposición Transitoria Única, apartado 1',
      question: 'Conforme a la Disposición Transitoria Única de la Ley 3/2011, ¿de qué plazo se dispuso para la integración de los centros bibliotecarios existentes en la Red y para la firma de convenios de financiación?',
      options: [
        'Seis meses desde la publicación en el DOCM.',
        'Un año natural.',
        'Un plazo de dos años, desde la fecha de la entrada en vigor de la Ley.',
        'Cinco años prorrogables por acuerdo del Consejo de Gobierno.'
      ],
      correctAnswer: 2,
      explanation: 'La DT Única.1 establece: «Se dispone de un plazo de dos años, desde la fecha de la entrada en vigor de esta Ley, para la integración de los centros bibliotecarios existentes, en la Red de Bibliotecas Públicas de Castilla-La Mancha y para la firma de los convenios de financiación».'
    },
    {
      id: 'ley3_2011_q47',
      category: 'Disposiciones de la Ley',
      difficulty: 'C1',
      lawReference: 'Disposición Final Tercera',
      question: 'Según la Disposición Final Tercera, las normas internas de funcionamiento que establezcan los centros de la Red de Bibliotecas Públicas deberán someterse a:',
      options: [
        'Aprobación de la Consejería de bibliotecas, previo informe de la Comisión Técnica de la Red de Bibliotecas Públicas.',
        'Aprobación exclusiva del Pleno del Ayuntamiento titular sin informe previo.',
        'Visto bueno de la Delegación del Gobierno en Castilla-La Mancha.',
        'Depósito notarial en el Colegio Oficial de Bibliotecarios.'
      ],
      correctAnswer: 0,
      explanation: 'La DF 3ª dictamina que los centros de la Red «deberán establecer normas internas de funcionamiento, las cuales serán sometidas a la aprobación de la Consejería [...] competente en materia de bibliotecas previo informe de la Comisión Técnica de la Red de Bibliotecas Públicas de Castilla-La Mancha».'
    },
    {
      id: 'ley3_2011_q48',
      category: 'Disposiciones de la Ley',
      difficulty: 'C1',
      lawReference: 'Disposición Final Quinta',
      question: '¿Cuándo entró en vigor la Ley 3/2011 según su Disposición Final Quinta?',
      options: [
        'El mismo día de su publicación en el DOCM.',
        'A los veinte días de su publicación en el «Diario Oficial de Castilla-La Mancha».',
        'El 1 de enero del año siguiente a su promulgación.',
        'A los tres meses de su publicación en el BOE.'
      ],
      correctAnswer: 1,
      explanation: 'La DF 5ª dispone textualmente: «La presente Ley entrará en vigor a los veinte días de su publicación en el «Diario Oficial de Castilla-La Mancha»».'
    }
  ]
};

// Exposición global y modular
if (typeof window !== 'undefined') {
  window.LEY_3_2011_CLM = LEY_3_2011_CLM;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LEY_3_2011_CLM };
}
