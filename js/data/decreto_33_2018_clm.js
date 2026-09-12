/**
 * Decreto 33/2018, de 22 de mayo, por el que se aprueba el Reglamento básico
 * de la Red de Bibliotecas Públicas de Castilla-La Mancha.
 * 
 * Publicación oficial: Diario Oficial de Castilla-La Mancha (DOCM) núm. 129, de 3 de julio de 2018.
 * Banco Exhaustivo de 25 Preguntas calibradas para Oposiciones de Bibliotecas (Nivel C1).
 * Cobertura completa de los 18 Artículos, 6 Capítulos, DT Única y 3 DF.
 * Fuente estricta: Texto oficial del Decreto 33/2018 (DOCM).
 */

const DECRETO_33_2018_CLM = {
  id: 'decreto_33_2018_clm',
  title: 'Decreto 33/2018, de 22 de mayo, por el que se aprueba el Reglamento básico de la Red de Bibliotecas Públicas de Castilla-La Mancha',
  shortTitle: 'Decreto 33/2018 (RBP-CLM)',
  jurisdiction: 'Castilla-La Mancha (Autonómica)',
  category: 'Reglamento Autonómico',
  officialReference: 'DOCM núm. 129, de 3 de julio de 2018',
  structureSummary: '18 Artículos, 6 Capítulos, 1 Disposición Transitoria y 3 Disposiciones Finales',
  categories: [
    'Objeto y Marco Normativo',
    'Acceso, Horarios y Tarjeta de Usuario',
    'Modalidades y Uso de Tarjetas',
    'Servicios Mínimos y Consulta en Sala',
    'Régimen de Préstamo (Individual, Colectivo, Red e Interbibliotecario)',
    'Información, Internet y Actividades Culturales',
    'Otros Servicios (Cesión, Desideratas y Reprografía)',
    'Derechos y Deberes de los Usuarios',
    'Infracciones, Sanciones e Inspección',
    'Disposiciones Transitorias y Finales'
  ],
  questions: [
    // --- 1. DISPOSICIONES TRANSITORIAS Y FINALES (Q01-Q03) ---
    {
      id: 'dec33_2018_q01',
      category: 'Disposiciones Transitorias y Finales',
      difficulty: 'C1',
      lawReference: 'Disposición Final Primera',
      question: 'De acuerdo con la Disposición Final Primera del Decreto 33/2018, ¿de qué plazo máximo disponen los centros integrantes de la Red de Bibliotecas Públicas de Castilla-La Mancha para elaborar sus normas internas de funcionamiento a contar desde la fecha del registro de su integración?',
      options: [
        'Seis meses.',
        'Un año.',
        'Dos años.',
        'Dieciocho meses.'
      ],
      correctAnswer: 1,
      explanation: 'La Disposición Final Primera establece literalmente que los centros integrantes de la RBP deberán elaborar sus normas internas de funcionamiento «en el plazo máximo de un año desde la fecha del registro de su integración en la RBP» (y dispondrán de un plazo de un año desde la entrada en vigor los centros que ya estuvieran integrados).'
    },
    {
      id: 'dec33_2018_q02',
      category: 'Disposiciones Transitorias y Finales',
      difficulty: 'C1',
      lawReference: 'Disposición Transitoria Única',
      question: 'Conforme a la Disposición Transitoria Única del Decreto 33/2018, ¿cuál es el plazo establecido a partir de su entrada en vigor para la implantación progresiva de la tarjeta individual de usuario juvenil?',
      options: [
        'Un año.',
        'Dieciocho meses.',
        'Dos años.',
        'Tres años.'
      ],
      correctAnswer: 2,
      explanation: 'La Disposición Transitoria Única dispone expresamente que «se dispondrá de dos años a partir de la entrada en vigor del presente decreto para la implantación progresiva de la tarjeta de usuario juvenil, establecida en el artículo 5.1. 2º del Reglamento».'
    },
    {
      id: 'dec33_2018_q03',
      category: 'Disposiciones Transitorias y Finales',
      difficulty: 'C1',
      lawReference: 'Disposición Final Tercera',
      question: 'Según la Disposición Final Tercera del Decreto 33/2018, ¿cuándo entró en vigor el presente Decreto?',
      options: [
        'El mismo día de su publicación en el Diario Oficial de Castilla-La Mancha.',
        'A los veinte días de su publicación en el Diario Oficial de Castilla-La Mancha.',
        'Al mes siguiente de su aprobación por el Consejo de Gobierno.',
        'A los tres meses de su publicación en el DOCM.'
      ],
      correctAnswer: 1,
      explanation: 'La Disposición Final Tercera determina textualmente: «El presente decreto entrará en vigor a los 20 días de su publicación en el Diario Oficial de Castilla-La Mancha».'
    },

    // --- 2. CAPÍTULO I: OBJETO Y MARCO NORMATIVO (Q04-Q05) ---
    {
      id: 'dec33_2018_q04',
      category: 'Objeto y Marco Normativo',
      difficulty: 'C1',
      lawReference: 'Artículo 1, apartado 2',
      question: 'Según el artículo 1.2 del Reglamento básico aprobado por el Decreto 33/2018, ¿dónde se publicarán los criterios técnicos de funcionamiento de la RBP (tales como normas técnicas de catalogación, circulación de fondos o modelos de formularios) establecidos por la Comisión Técnica de la Red?',
      options: [
        'En el Diario Oficial de Castilla-La Mancha mediante Orden de la Consejería.',
        'En el Catálogo Colectivo de la Red de Bibliotecas Públicas de acceso público.',
        'En la intranet del Portal de la RBP de Castilla-La Mancha al que tendrá acceso el personal bibliotecario responsable de cada centro.',
        'En el tablón de anuncios de cada biblioteca municipal titular del servicio.'
      ],
      correctAnswer: 2,
      explanation: 'El artículo 1.2 establece que los criterios técnicos de funcionamiento cuyo establecimiento corresponde a la Comisión Técnica de la RBP «serán publicados en la intranet del Portal de la RBP de Castilla-La Mancha al que tendrá acceso el personal bibliotecario responsable de cada centro integrado en la Red».'
    },
    {
      id: 'dec33_2018_q05',
      category: 'Objeto y Marco Normativo',
      difficulty: 'C1',
      lawReference: 'Artículo 1, apartado 3',
      question: 'De acuerdo con el artículo 1.3 del Decreto 33/2018, ¿cómo se define la oferta específica de servicios de cada biblioteca o Red de un mismo titular y cuál es su procedimiento de aprobación?',
      options: [
        'En un plan anual de gestión aprobado exclusivamente por el Pleno del Ayuntamiento titular.',
        'En sus Normas Internas de Funcionamiento en forma de reglamento, elaborado por los titulares y aprobado por la Consejería competente en bibliotecas previo informe de la Comisión Técnica de la RBP.',
        'En una carta de servicios aprobada por la Dirección-Gerencia de la Biblioteca de Castilla-La Mancha.',
        'Mediante resolución sancionadora de adscripción obligatoria dictada por la Delegación Provincial.'
      ],
      correctAnswer: 1,
      explanation: 'El artículo 1.3 establece que la oferta específica de servicios vendrá definida en sus «Normas Internas de Funcionamiento que serán formuladas en la forma de reglamento... elaborado por parte de los titulares o gestores... sometido a la aprobación de la Consejería competente en materia de bibliotecas, previo informe de la Comisión Técnica de la Red de Bibliotecas Públicas de Castilla-La Mancha».'
    },

    // --- 3. CAPÍTULO II: NORMAS GENERALES, HORARIOS Y TARJETA (Q06-Q14) ---
    {
      id: 'dec33_2018_q06',
      category: 'Acceso, Horarios y Tarjeta de Usuario',
      difficulty: 'C1',
      lawReference: 'Artículo 2, apartados 1, 2 y 3',
      question: 'Respecto a las condiciones generales de acceso a las bibliotecas de la RBP (artículo 2 del Decreto 33/2018), señale la afirmación correcta:',
      options: [
        'El acceso físico a las instalaciones requiere el abono previo de una tasa municipal de entrada.',
        'El acceso físico a las instalaciones de carácter público será libre y gratuito, si bien para beneficiarse de los servicios que presten será necesario disponer de la tarjeta de usuario en vigor de la RBP.',
        'El acceso virtual está reservado en exclusiva para investigadores acreditados por el Consejo de Gobierno.',
        'Las bibliotecas de la Red están exentas de cumplir la normativa en materia de accesibilidad cognitiva universal.'
      ],
      correctAnswer: 1,
      explanation: 'El artículo 2.1 establece: «El acceso físico a las instalaciones de carácter público será libre y gratuito. No obstante, para beneficiarse de los servicios que presten será necesario disponer de la tarjeta de usuario en vigor de la RBP en los términos establecidos en las normas internas de funcionamiento de cada centro».'
    },
    {
      id: 'dec33_2018_q07',
      category: 'Acceso, Horarios y Tarjeta de Usuario',
      difficulty: 'C1',
      lawReference: 'Artículo 3',
      question: 'Conforme al artículo 3 del Decreto 33/2018, ¿quién determina el horario y calendario de apertura de los centros y servicios incorporados a la RBP y a qué marco deben tender?',
      options: [
        'Son fijados por Orden anual de la Consejería de Hacienda y Administraciones Públicas.',
        'Son determinados por la Administración o institución titular y deberán tender al cumplimiento de lo dispuesto en el Mapa de Bibliotecas de Castilla-La Mancha y en la Ley 3/2011.',
        'Son determinados por la Comisión Técnica Provincial de la Red correspondiente sin atender al Mapa de Bibliotecas.',
        'Son aprobados por la Dirección de la Biblioteca de Castilla-La Mancha con carácter vinculante e idéntico para todos los municipios.'
      ],
      correctAnswer: 1,
      explanation: 'El artículo 3 estipula: «El horario y calendario de apertura de los centros y servicios incorporados a la RBP serán determinados por la Administración o institución titular y deberán tender al cumplimiento de lo dispuesto en el Mapa de Bibliotecas de Castilla-La Mancha y en la Ley 3/2011, de 24/02/2011».'
    },
    {
      id: 'dec33_2018_q08',
      category: 'Acceso, Horarios y Tarjeta de Usuario',
      difficulty: 'C1',
      lawReference: 'Artículo 4, apartados 1 y 2',
      question: 'En relación con la tarjeta de usuario de la RBP (artículo 4 del Decreto 33/2018), ¿cuál de las siguientes obligaciones corresponde a todos los centros incorporados a la Red?',
      options: [
        'Emitir la tarjeta utilizando modelos propios diseñados libremente por cada Ayuntamiento.',
        'Emitir la tarjeta a cualquier ciudadano que lo solicite, mantener actualizada la base de datos de usuarios y renovar tarjetas, siendo su uso válido en todas las bibliotecas integradas en la Red.',
        'Cobrar una cuota fija de registro inicial a los usuarios no residentes en el municipio.',
        'Exigir que el usuario tramite una tarjeta distinta e independiente en cada biblioteca de la región que visite.'
      ],
      correctAnswer: 1,
      explanation: 'El artículo 4 (apartados 1 y 2) señala que todos los centros tienen la obligación de emitir la tarjeta (utilizando exclusivamente los modelos vigentes), mantener actualizada la base de datos y renovarla, siendo el documento necesario para servicios como el préstamo y con validez en todas las bibliotecas de la Red.'
    },
    {
      id: 'dec33_2018_q09',
      category: 'Acceso, Horarios y Tarjeta de Usuario',
      difficulty: 'C1',
      lawReference: 'Artículo 4, apartados 5 y 6',
      question: 'Según el artículo 4 del Decreto 33/2018, en materia de expedición y pérdida de la tarjeta de usuario:',
      options: [
        'La expedición inicial de la tarjeta podrá devengar una tasa, pero las reimpresiones por pérdida serán siempre gratuitas.',
        'La expedición inicial será gratuita en todos los casos, pero las administraciones podrán solicitar el coste de segundas y sucesivas impresiones por pérdida, conllevando la pérdida la suspensión temporal de los servicios que la requieran.',
        'La versión electrónica de la tarjeta para móviles carece de validez legal para el préstamo domiciliario.',
        'La responsabilidad por el uso de la tarjeta cesa automáticamente a los 30 días de su extravío aunque no se haya comunicado.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 4.5 señala que la expedición inicial es gratuita en todos los casos, pudiendo solicitarse el coste de segundas y sucesivas impresiones por pérdida, conllevando la pérdida la suspensión temporal. El art. 4.6 añade que la versión electrónica para dispositivos móviles tendrá los mismos efectos que la física.'
    },
    {
      id: 'dec33_2018_q10',
      category: 'Modalidades y Uso de Tarjetas',
      difficulty: 'C1',
      lawReference: 'Artículo 5, apartado 1 (1º)',
      question: 'Conforme al artículo 5.1.1º del Decreto 33/2018, ¿cuál es la franja de edad, requisito de solicitud y momento de caducidad de la tarjeta personal INFANTIL?',
      options: [
        'Destinada de 0 a 12 años; solicitud por correo electrónico; caduca a los 13 años.',
        'Destinada a usuarios de 0 a 13 años; solicitud presencial por alguno de los progenitores o tutor legal previa identificación de éste; caduca cuando el usuario alcanza la edad de 14 años.',
        'Destinada de 0 a 14 años; solicitud firmada sin presencia física; caduca a los 15 años.',
        'Destinada exclusivamente a menores escolarizados en educación primaria; caduca al finalizar el ciclo formativo.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 5.1.1º fija literalmente la tarjeta Infantil: «Destinada a los usuarios de 0 a 13 años. Será necesario que la solicitud se haga presencialmente por alguno de los progenitores o tutor legal del menor y la tarjeta se realizará previa identificación de éste. La tarjeta caducará cuando el usuario alcance la edad de 14 años».'
    },
    {
      id: 'dec33_2018_q11',
      category: 'Modalidades y Uso de Tarjetas',
      difficulty: 'C1',
      lawReference: 'Artículo 5, apartado 1 (2º)',
      question: 'En la modalidad de tarjeta personal JUVENIL regulada en el artículo 5.1.2º del Decreto 33/2018:',
      options: [
        'Está destinada a usuarios de 12 a 16 años y caduca a los 17 años.',
        'Está destinada a usuarios de 14 a 17 años; la solicitud debe estar firmada por alguno de los progenitores o tutor legal y la tarjeta se realiza previa identificación del joven; caduca cuando el usuario alcanza la edad de 18 años.',
        'Requiere obligatoriamente la presencia física del tutor en el mostrador para cada préstamo que realice el menor.',
        'Exige que el joven cuente con autorización judicial para acceder a recursos de Internet.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 5.1.2º define la tarjeta Juvenil: «Destinada a los usuarios de 14 a 17 años. Será necesario que la solicitud esté firmada por alguno de los progenitores o tutor legal del menor y la tarjeta se realizará previa identificación del joven. La tarjeta caducará cuando el usuario alcance la edad de 18 años».'
    },
    {
      id: 'dec33_2018_q12',
      category: 'Modalidades y Uso de Tarjetas',
      difficulty: 'C1',
      lawReference: 'Artículo 5, apartados 2 y 3',
      question: 'De acuerdo con el artículo 5 del Decreto 33/2018, ¿a quién se destina la tarjeta colectiva y cuál es el plazo general de caducidad para TODAS las modalidades de tarjeta de usuario?',
      options: [
        'A familias numerosas; caducando todas las tarjetas a los dos años de expedición.',
        'A instituciones y colectivos (bibliotecas, asociaciones, centros de enseñanza, clubes de lectura); caducando todas las modalidades de tarjeta a los cuatro años de la fecha de expedición, pudiendo ser renovadas.',
        'A empresas privadas de reprografía; caducando todas las tarjetas al año de expedición.',
        'A bibliotecas universitarias exclusivamente; caducando todas las tarjetas a los cinco años.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 5.2 destina la tarjeta colectiva a «instituciones y colectivos, como bibliotecas, asociaciones, centros de enseñanza o clubes de lectura». El art. 5.3 dictamina: «Todas las modalidades de tarjeta de usuario caducarán a los cuatro años de la fecha de expedición pudiendo ser renovadas».'
    },
    {
      id: 'dec33_2018_q13',
      category: 'Modalidades y Uso de Tarjetas',
      difficulty: 'C1',
      lawReference: 'Artículo 6, apartado 2, letra b)',
      question: 'Según el artículo 6.2.b) del Decreto 33/2018, los usuarios mayores de 14 años que no puedan acceder a la biblioteca durante su horario de apertura podrán delegar la responsabilidad de obtener préstamos cuando concurra alguna de las siguientes causas:',
      options: [
        'Mera preferencia personal comunicada verbalmente por teléfono.',
        'Impedimento físico (enfermedad/discapacidad), distancia del lugar de estudio/trabajo fuera del municipio que impida compatibilizarlo con el horario (sábados incluidos), o distancia de residencia fuera del municipio sin BP en su localidad.',
        'Haber superado el límite de 10 préstamos simultáneos en su biblioteca de referencia.',
        'Pertenecer a un club de lectura radicado en otra Comunidad Autónoma.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 6.2.b enumera taxativamente las 3 causas: 1º Impedimento físico (enfermedad o discapacidad); 2º Distancia del lugar de estudio o trabajo fuera del municipio de la biblioteca que impida compatibilizarlo totalmente con el horario (sábados incluidos); 3º Distancia de residencia fuera del municipio sin servicio de BP en su localidad.'
    },
    {
      id: 'dec33_2018_q14',
      category: 'Modalidades y Uso de Tarjetas',
      difficulty: 'C1',
      lawReference: 'Artículo 6, apartado 3, letras a) y b)',
      question: 'En relación con las autorizaciones entre usuarios adultos para el uso de la tarjeta de usuario (artículo 6.3 del Decreto 33/2018), señale la opción correcta:',
      options: [
        'La autorización temporal tendrá una duración máxima de dos años improrrogables.',
        'En las autorizaciones permanentes, ningún usuario podrá acumular más de 2 autorizaciones de otros usuarios y no se aprobarán, en ningún caso, autorizaciones recíprocas.',
        'Cualquier usuario puede acumular hasta cinco autorizaciones permanentes si residen en el mismo distrito postal.',
        'Las autorizaciones recíprocas están permitidas siempre que ambos solicitantes firmen ante notario.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 6.3.a fija la duración máxima de la autorización temporal en un año (renovable). El art. 6.3.b establece tajantemente: «En ningún caso ningún usuario podrá acumular más de 2 autorizaciones de otros usuarios. No se aprobarán, en ningún caso, autorizaciones recíprocas».'
    },

    // --- 4. CAPÍTULO III: CATÁLOGO DE SERVICIOS Y PRÉSTAMO (Q15-Q21) ---
    {
      id: 'dec33_2018_q15',
      category: 'Servicios Mínimos y Consulta en Sala',
      difficulty: 'C1',
      lawReference: 'Artículo 7',
      question: 'Conforme al artículo 7 del Decreto 33/2018, ¿cuál es la OFERTA MÍNIMA de servicios que deberán ofertar las bibliotecas y centros incorporados a la RBP?',
      options: [
        'Exclusivamente consulta en sala y préstamo domiciliario de libros impresos.',
        'Consulta en sala, préstamo, información y orientación, servicio de acceso a internet y aplicaciones informáticas, promoción de la lectura y actividades culturales.',
        'Préstamo interbibliotecario internacional y reprografía de incunables.',
        'Cafetería, préstamo de instrumentos musicales y venta de publicaciones oficiales.'
      ],
      correctAnswer: 1,
      explanation: 'El artículo 7 establece textualmente que los centros incorporados a la RBP «deberán ofertar, al menos, los servicios de consulta en sala, préstamo, información y orientación, servicio de acceso a internet y aplicaciones informáticas, promoción de la lectura y actividades culturales».'
    },
    {
      id: 'dec33_2018_q16',
      category: 'Servicios Mínimos y Consulta en Sala',
      difficulty: 'C1',
      lawReference: 'Artículo 8, apartados 2 y 3',
      question: 'En el servicio de consulta en sala (artículo 8 del Decreto 33/2018), ¿bajo qué circunstancias se podrán establecer restricciones en el uso de materiales de la biblioteca?',
      options: [
        'Por decisión discrecional e inapelable del personal de seguridad privada.',
        'En función de sus características especiales, estado de conservación y valor patrimonial de los fondos, u otras circunstancias que así lo exijan.',
        'Por razón de nacionalidad, lengua de origen o edad del usuario investigador.',
        'Únicamente cuando el solicitante no acredite titulación universitaria superior.'
      ],
      correctAnswer: 1,
      explanation: 'El artículo 8.2 dispone que todos los usuarios tienen derecho a usar salas, servicios y materiales, «salvo las restricciones que se establezcan en función de sus características especiales, estado de conservación y valor patrimonial de los fondos, u otras circunstancias que así lo exijan».'
    },
    {
      id: 'dec33_2018_q17',
      category: 'Régimen de Préstamo (Individual, Colectivo, Red e Interbibliotecario)',
      difficulty: 'C1',
      lawReference: 'Artículo 9, apartado 6, letra a)',
      question: 'De acuerdo con el artículo 9.6.a) del Decreto 33/2018, ¿cuáles de los siguientes fondos quedan EXCLUIDOS del servicio de préstamo individual fuera de la biblioteca?',
      options: [
        'Las novelas publicadas en los últimos doce meses.',
        'Los documentos de consulta y referencia, los ejemplares de carácter único y de difícil reposición, las obras de particular interés bibliográfico, histórico o artístico y aquellas obras de colección local de conservación y reserva.',
        'Cualquier documento que cuente con versión electrónica en la plataforma de préstamo digital.',
        'Las publicaciones periódicas infantiles y juveniles.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 9.6.a excluye expresamente de préstamo individual: «los documentos de consulta y referencia, los ejemplares de carácter único y de difícil reposición, las obras de particular interés bibliográfico, histórico o artístico y aquellas obras de colección local que se consideren de conservación y reserva» (claramente identificadas).'
    },
    {
      id: 'dec33_2018_q18',
      category: 'Régimen de Préstamo (Individual, Colectivo, Red e Interbibliotecario)',
      difficulty: 'C1',
      lawReference: 'Artículo 9, apartado 6, letra b)',
      question: 'En la modalidad de PRÉSTAMO COLECTIVO regulada en el artículo 9.6.b) del Decreto 33/2018:',
      options: [
        'La solicitud se realizará de forma individual por cada uno de los miembros del colectivo.',
        'La solicitud se realizará de forma conjunta y unitaria, reservándose la Biblioteca la potestad de denegar motivadamente duplicados, novedades, obras muy demandadas, deterioradas o reservadas.',
        'La denegación de préstamo colectivo nunca requiere motivación jurídica.',
        'Está prohibido que los centros docentes y clubes de lectura hagan uso de esta modalidad.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 9.6.b establece que la solicitud de préstamo colectivo «se realizará de forma conjunta y unitaria», que la biblioteca puede denegar el préstamo de duplicados, novedades, muy demandadas, deterioradas o reservadas, y que «la denegación de la solicitud de préstamo siempre será motivada».'
    },
    {
      id: 'dec33_2018_q19',
      category: 'Régimen de Préstamo (Individual, Colectivo, Red e Interbibliotecario)',
      difficulty: 'C1',
      lawReference: 'Artículo 9, apartado 6, letra c)',
      question: 'Respecto a la BIBLIOTECA DE REFERENCIA en el préstamo en red (artículo 9.6.c del Decreto 33/2018), señale la afirmación correcta:',
      options: [
        'Es asignada de oficio por la Consejería en función estricta del empadronamiento del usuario.',
        'Es aquella en la que el usuario está asignado de forma voluntaria en el sistema de gestión; solo se podrá estar asignado simultáneamente a una única biblioteca y el usuario podrá cambiar voluntariamente sin que el municipio de residencia condicione su elección.',
        'Un usuario puede tener hasta tres bibliotecas de referencia activas simultáneamente en distintas provincias.',
        'La devolución de los préstamos en red debe realizarse obligatoriamente en la biblioteca prestadora de origen y nunca en la de referencia.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 9.6.c define la biblioteca de referencia como aquella en que el usuario está asignado voluntariamente, estipulando que «solo se podrá estar asignado simultáneamente a una única biblioteca», con libre cambio voluntario sin condicionamiento de residencia, y que «la devolución del préstamo en red se efectuará siempre de forma presencial en la biblioteca de referencia».'
    },
    {
      id: 'dec33_2018_q20',
      category: 'Régimen de Préstamo (Individual, Colectivo, Red e Interbibliotecario)',
      difficulty: 'C1',
      lawReference: 'Artículo 9, apartado 6, letra c)',
      question: 'En el procedimiento de PRÉSTAMO EN RED (artículo 9.6.c del Decreto 33/2018), ¿cuál es el plazo de envío para las bibliotecas prestadoras y qué causas tasadas permiten denegar el envío?',
      options: [
        'Plazo de dos días hábiles; denegación libre sin justificación.',
        'Plazo de cuatro días hábiles desde la recepción de la petición; denegación solo si se trata de obras ya prestadas, reservadas con anterioridad a la petición o que aún se encuentren en el mercado editorial.',
        'Plazo de diez días naturales; denegación si la biblioteca solicitante pertenece a otra provincia.',
        'Plazo de siete días hábiles; denegación si los gastos de envío superan los 5 euros.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 9.6.c estipula que las bibliotecas prestadoras enviarán los documentos en el plazo de «cuatro días hábiles desde la recepción de la petición» y solo podrán denegar el envío si «se trate de obras ya prestadas, reservadas con anterioridad a la fecha de la petición o que aún se encuentren en el mercado editorial».'
    },
    {
      id: 'dec33_2018_q21',
      category: 'Régimen de Préstamo (Individual, Colectivo, Red e Interbibliotecario)',
      difficulty: 'C1',
      lawReference: 'Artículo 9, apartado 6, letras d) y e)',
      question: 'Conforme al artículo 9.6 del Decreto 33/2018, en relación con el préstamo interbibliotecario y de dispositivos electrónicos:',
      options: [
        'El préstamo interbibliotecario solo puede solicitarse para obras que ya figuren en los catálogos de la RBP.',
        'Las bibliotecas públicas de la Red podrán ofrecer el préstamo, en sala o a domicilio, de ordenadores, dispositivos electrónicos, instrumentos musicales y otros bienes inventariables culturales o educativos.',
        'El precio del préstamo interbibliotecario podrá fijarse con un recargo del 50% sobre el coste real para financiar adquisiciones.',
        'Queda terminantemente prohibido prestar instrumentos musicales fuera de las instalaciones bibliotecarias.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 9.6.e autoriza el préstamo de «ordenadores, dispositivos electrónicos, instrumentos musicales así como cualquier otro bien inventariable de carácter cultural o educativo» dentro o a domicilio. El art. 9.6.d aclara que el pago del préstamo interbibliotecario «no podrá superar el del coste del mismo» y se aplica a fondos ajenos a la RBP.'
    },

    // --- 5. CAPÍTULO III: INFORMACIÓN, INTERNET, ACTIVIDADES Y OTROS SERVICIOS (Q22-Q24) ---
    {
      id: 'dec33_2018_q22',
      category: 'Información, Internet y Actividades Culturales',
      difficulty: 'C1',
      lawReference: 'Artículos 10, 11 y 12',
      question: 'En materia de imagen corporativa, acceso a Internet y actividades culturales (artículos 10 a 12 del Decreto 33/2018), señale la afirmación correcta:',
      options: [
        'Cualquier elemento de información y señalización deberá cumplir con el manual de estilo de la imagen corporativa de la RBP, el acceso a Internet será público y gratuito para registrados (pudiendo cobrarse la impresión en papel), y las actividades culturales serán de libre acceso.',
        'Cada centro municipal podrá diseñar su propia rotulación sin respetar el manual de estilo de la RBP.',
        'El acceso a Internet conlleva una tarifa fija obligatoria por hora de conexión.',
        'Las actividades culturales de las bibliotecas están restringidas exclusivamente a los socios del club de lectura.'
      ],
      correctAnswer: 0,
      explanation: 'El art. 10.1 exige cumplir el uso de la imagen corporativa según el manual de estilo; el art. 11 garantiza servicio público y gratuito de acceso a Internet para usuarios registrados (permitiendo regular el pago por impresión en papel); y el art. 12 establece que las actividades serán de libre acceso para todos los ciudadanos.'
    },
    {
      id: 'dec33_2018_q23',
      category: 'Otros Servicios (Cesión, Desideratas y Reprografía)',
      difficulty: 'C1',
      lawReference: 'Artículo 13, apartados 2 y 3',
      question: 'De acuerdo con el artículo 13 del Decreto 33/2018, ¿en qué supuestos se podrá denegar la cesión de instalaciones y cuál es el plazo máximo de respuesta en el servicio de desideratas?',
      options: [
        'Cesión denegada por motivos de marcas, lucro, propaganda o alejamiento de función cultural; desideratas con contestación motivada en plazo no superior a 10 días hábiles desde registro de entrada.',
        'Cesión obligatoria para cualquier acto mercantil; desideratas con contestación en un plazo máximo de seis meses.',
        'Cesión denegada únicamente por orden judicial; desideratas sin obligación de respuesta escrita.',
        'Cesión reservada para actos religiosos; desideratas con contestación en 48 horas.'
      ],
      correctAnswer: 0,
      explanation: 'El art. 13.2 faculta a denegar la cesión cuando los actos se alejen de la función cultural/educativa, tengan como fin la publicidad de marcas, lucro o propaganda, o interfieran en el uso de espacios. El art. 13.3 fija el plazo de contestación de desideratas en «no superior a 10 días hábiles desde la fecha de registro de entrada de la solicitud».'
    },
    {
      id: 'dec33_2018_q24',
      category: 'Otros Servicios (Cesión, Desideratas y Reprografía)',
      difficulty: 'C1',
      lawReference: 'Artículo 13, apartado 4',
      question: 'Conforme al artículo 13.4 del Decreto 33/2018 sobre el SERVICIO DE REPRODUCCIÓN DE DOCUMENTOS, señale la opción correcta:',
      options: [
        'Es obligatorio en todas las bibliotecas de municipios de más de 1.000 habitantes.',
        'Las bibliotecas de uso público general de municipios mayores de 5.000 habitantes y especializadas de la RBP contarán con servicio de reprografía, cuyos precios públicos irán encaminados exclusivamente a financiar los costes del servicio.',
        'Los precios de las fotocopias pueden fijarse libremente para generar beneficios netos a la biblioteca.',
        'El usuario queda exento de cualquier responsabilidad por infracción de propiedad intelectual.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 13.4 establece la obligatoriedad del servicio de reproducción en municipios mayores de 5.000 habitantes y bibliotecas especializadas de la RBP, y determina que los precios públicos «irán encaminados exclusivamente a financiar los costes de prestación del servicio de reproducción de documentos».'
    },

    // --- 6. CAPÍTULOS IV, V Y VI: DERECHOS, DEBERES, SANCIONES E INSPECCIÓN (Q25) ---
    {
      id: 'dec33_2018_q25',
      category: 'Infracciones, Sanciones e Inspección',
      difficulty: 'C1',
      lawReference: 'Artículos 14, 15, 16, 17 y 18',
      question: 'En el marco de los Capítulos IV, V y VI del Decreto 33/2018 (Derechos, Deberes, Sanciones e Inspección), señale la afirmación correcta:',
      options: [
        'Los responsables de las bibliotecas carecen de facultades para excluir de las salas a quienes alteren el orden.',
        'Las infracciones y sanciones se rigen por la Ley 3/2011; la inspección corresponde a la Consejería competente en bibliotecas (de oficio o a instancia de parte) y el incumplimiento de compromisos por los titulares puede derivar en la expulsión del Sistema y de la RBP.',
        'La potestad sancionadora en la RBP prescribe en el plazo único de 10 días naturales.',
        'Las sugerencias y quejas de los usuarios solo pueden presentarse ante el Ministerio de Cultura.'
      ],
      correctAnswer: 1,
      explanation: 'Los arts. 16 y 17 remiten la tipificación y sanciones a la Ley 3/2011 y el procedimiento a las Leyes 39/2015 y 40/2015. El art. 18 asigna la inspección a la Consejería competente (art. 39 Ley 3/2011) y advierte de que el incumplimiento de compromisos por los titulares puede derivar en la expulsión del Sistema y de la RBP según el art. 38 de la Ley 3/2011.'
    }
  ]
};

if (typeof window !== 'undefined') {
  window.DECRETO_33_2018_CLM = DECRETO_33_2018_CLM;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DECRETO_33_2018_CLM;
}
