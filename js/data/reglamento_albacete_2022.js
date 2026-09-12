/**
 * Reglamento de funcionamiento del Servicio de Bibliotecas Municipales del Ayuntamiento de Albacete.
 * 
 * Publicación oficial: Boletín Oficial de la Provincia de Albacete (BOP) núm. 60, de 23 de mayo de 2022 (pp. 18-31).
 * Banco Exhaustivo de 30 Preguntas calibradas para Oposiciones de Bibliotecas (Nivel C1).
 * Cobertura equilibrada de los 29 Artículos, 4 Títulos, 3 Capítulos y Disposición Derogatoria Única.
 * Fuente estricta: Texto oficial del BOP de Albacete.
 */

const REGLAMENTO_ALBACETE_2022 = {
  id: 'reglamento_albacete_2022',
  title: 'Reglamento de funcionamiento del Servicio de Bibliotecas Municipales del Ayuntamiento de Albacete',
  shortTitle: 'Reglamento Albacete 2022',
  jurisdiction: 'Albacete (Normativa Municipal)',
  category: 'Reglamento Municipal',
  officialReference: 'BOP de Albacete núm. 60, de 23 de mayo de 2022',
  structureSummary: '29 Artículos, 4 Títulos, 3 Capítulos y 1 Disposición Derogatoria Única',
  categories: [
    'Disposiciones Generales, Principios y Ámbito',
    'Estructura y Secciones del Servicio Municipal',
    'Servicios de Préstamo, Reservas y Devoluciones',
    'Consulta en Sala, Fondos y Política de Donaciones',
    'Información, Internet y Actividades Culturales',
    'Otros Servicios: Pacto por la Lectura, Cesión y Reprografía',
    'Tarjeta de Usuario, Modalidades, Horarios y Espacios',
    'Derechos, Deberes, Régimen Sancionador y Junta de Gobierno'
  ],
  questions: [
    // --- 1. DISPOSICIONES GENERALES, PRINCIPIOS Y ÁMBITO (Q01-Q04) ---
    {
      id: 'alb_2022_q01',
      category: 'Disposiciones Generales, Principios y Ámbito',
      difficulty: 'C1',
      lawReference: 'Artículo 1, letras b) y c)',
      question: 'De acuerdo con el artículo 1 del Reglamento de funcionamiento del Servicio de Bibliotecas Municipales del Ayuntamiento de Albacete, en relación con la naturaleza y disponibilidad de sus normas:',
      options: [
        'El reglamento es un documento reservado de régimen interno accesible únicamente previa solicitud por registro general de entrada.',
        'Por su naturaleza de documento público, estará siempre disponible para consulta tanto en los mostradores de atención al público como en la página web del Servicio Municipal (www.albacete.es/bibliotecas), y es un documento en permanente revisión que incluirá siempre la fecha de su última revisión.',
        'Las normas de funcionamiento tienen una vigencia fija e inalterable de cuatro años que coincide con la legislatura municipal.',
        'La consulta de las normas en la página web municipal requiere identificación electrónica mediante certificado digital o Cl@ve.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 1.b garantiza la consulta pública tanto física en mostradores como digital en la web oficial del Servicio de Bibliotecas (www.albacete.es/bibliotecas). El art. 1.c estipula que es un documento en permanente revisión que siempre incluirá la fecha de su última revisión.'
    },
    {
      id: 'alb_2022_q02',
      category: 'Disposiciones Generales, Principios y Ámbito',
      difficulty: 'C1',
      lawReference: 'Artículo 2, letra c)',
      question: 'Conforme al artículo 2.c) del Reglamento de Albacete, ¿cuál es la titularidad de las bibliotecas públicas municipales de Albacete y en virtud de qué resolución quedaron integradas en la Red de Bibliotecas Públicas de Castilla-La Mancha?',
      options: [
        'Son de titularidad mixta provincial-municipal y se integraron por Decreto de Alcaldía de 2014.',
        'Son de titularidad municipal, dependientes del Ayuntamiento de Albacete, y están integradas en la Red en virtud de la Resolución de 25/03/2019 de la Consejería de Educación, Cultura y Deportes.',
        'Son de titularidad de la Junta de Comunidades de Castilla-La Mancha, con gestión delegada en el Ayuntamiento ex convenio de 2011.',
        'Son de titularidad estatal transferida por Real Decreto de 1985.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 2.c declara expresamente la titularidad municipal y dependencia directa del Ayuntamiento de Albacete, citando la Resolución autonómica de 25 de marzo de 2019 como instrumento formal de integración e inscripción registral en la RBP.'
    },
    {
      id: 'alb_2022_q03',
      category: 'Disposiciones Generales, Principios y Ámbito',
      difficulty: 'C1',
      lawReference: 'Artículo 4, letras a), b), c) y d)',
      question: 'Según el artículo 4 del Reglamento de Albacete, ¿cuál de los siguientes NO figura como uno de los principios y valores rectores del Servicio de Bibliotecas Públicas Municipales de Albacete?',
      options: [
        'La libertad intelectual y de expresión, el derecho de acceso a la información y el respeto a la propiedad intelectual.',
        'La igualdad en el acceso sin discriminación por razón de origen, etnia, religión, género, edad, discapacidad o recursos económicos.',
        'La rentabilidad económica directa de las colecciones mediante la fijación de tarifas de consulta por tramos horarios.',
        'La pluralidad de los fondos para reflejar la diversidad de la sociedad y el respeto a la privacidad y confidencialidad.'
      ],
      correctAnswer: 2,
      explanation: 'El art. 4 recoge exclusivamente cuatro principios: libertad intelectual (a), igualdad sin discriminación (b), pluralidad (c) y privacidad/confidencialidad de datos (d). La rentabilidad económica es ajena y contraria a los valores del servicio público.'
    },
    {
      id: 'alb_2022_q04',
      category: 'Disposiciones Generales, Principios y Ámbito',
      difficulty: 'C1',
      lawReference: 'Artículo 5, letras b), e) y g)',
      question: 'En relación con las funciones de las Bibliotecas Municipales de Albacete establecidas en el artículo 5 del Reglamento, señale la afirmación correcta:',
      options: [
        'La biblioteca debe restringir sus servicios a usuarios empadronados, excluyendo a colectivos de municipios limítrofes.',
        'Tienen entre sus funciones estimular el uso de servicios dedicando esfuerzos específicos a sectores desfavorecidos o con necesidades especiales, colaborar con centros escolares, residencias de la tercera edad y hospitales, y atender a las necesidades locales garantizando la preservación de la cultura local.',
        'Tienen encomendada la custodia exclusiva del Archivo Histórico Provincial de Albacete.',
        'Las actividades de fomento de la lectura deben dirigirse exclusivamente a la población universitaria y de postgrado.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 5 detalla las funciones del centro bibliotecario municipal: atención a colectivos vulnerables (b), colaboración sociocomunitaria con residencias/hospitales/escuelas (e) y preservación de la memoria y cultura local (g).'
    },

    // --- 2. ESTRUCTURA Y SECCIONES DEL SERVICIO MUNICIPAL (Q05-Q08) ---
    {
      id: 'alb_2022_q05',
      category: 'Estructura y Secciones del Servicio Municipal',
      difficulty: 'C1',
      lawReference: 'Artículo 6',
      question: 'De acuerdo con el artículo 6 del Reglamento de Albacete, ¿en cumplimiento de qué acuerdo del Pleno municipal corresponde al Servicio de Bibliotecas la gestión de las Bibliotecas Públicas Municipales y qué centros y dependencias comprende?',
      options: [
        'Acuerdo del Pleno de 14 de febrero de 2014; comprende únicamente la Biblioteca Central.',
        'Acuerdo del Pleno de 30 de mayo de 2012; comprende la Red de Bibliotecas Públicas Municipales, Centro de Documentación, salas de estudio, kioscos de prensa y cualquier otro centro dependiente.',
        'Acuerdo del Pleno de 23 de mayo de 2022; comprende exclusivamente las salas de estudio universitarias.',
        'Acuerdo de la Junta de Gobierno Local de 27 de octubre de 2017; comprende solo bibliotecas de barrio.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 6 fundamenta la gestión del Servicio en el acuerdo plenario de 30 de mayo de 2012 y especifica su contenido orgánico: Red de bibliotecas, Centro de Documentación, salas de estudio y kioscos de prensa.'
    },
    {
      id: 'alb_2022_q06',
      category: 'Estructura y Secciones del Servicio Municipal',
      difficulty: 'C1',
      lawReference: 'Artículo 7, letras c) y f)',
      question: 'Conforme al artículo 7 del Reglamento de Albacete, ¿cuál de las siguientes tareas corresponde específicamente a la Sección «Red de Bibliotecas»?',
      options: [
        'Coordinar la gestión económica general y de nóminas de todo el Ayuntamiento de Albacete.',
        'Crear, mantener y controlar el archivo funcional de la Red, mantener un registro general centralizado de todos los fondos y realizar recuentos periódicos de fondos que serán totales, al menos, una vez cada tres años.',
        'Tramitar la contratación de la publicidad institucional del consistorio municipal.',
        'Inspeccionar los centros educativos privados de la provincia.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 7 enumera las funciones técnicas de la sección «Red de Bibliotecas», destacando el archivo funcional (b), el recuento total al menos trienal (c) y el registro centralizado (f).'
    },
    {
      id: 'alb_2022_q07',
      category: 'Estructura y Secciones del Servicio Municipal',
      difficulty: 'C1',
      lawReference: 'Artículo 8, letras d), g) y j)',
      question: 'Según el artículo 8 del Reglamento de Albacete, ¿cuál de las siguientes actividades está encomendada a la Sección de «Programas de Promoción de la Lectura»?',
      options: [
        'La imposición de multas de tráfico en los accesos a las bibliotecas.',
        'Organizar actividades como el «Día del Libro», talleres de encuadernación y cómics, organizar lotes bibliográficos para préstamos colectivos y coordinar la actividad de los kioscos de prensa.',
        'La catalogación de los fondos del Archivo de la Diputación Provincial.',
        'La adquisición y distribución de prensa diaria a los quioscos comerciales privados.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 8 detalla el catálogo de actividades de animación y fomento asignadas a esta sección, incluyendo talleres singulares (cómics, encuadernación), lotes colectivos (g) y la coordinación de los kioscos de prensa (j).'
    },
    {
      id: 'alb_2022_q08',
      category: 'Estructura y Secciones del Servicio Municipal',
      difficulty: 'C1',
      lawReference: 'Artículo 9, letras a), f) y g)',
      question: 'De acuerdo con el artículo 9 del Reglamento de Albacete, en relación con la Sección del «Centro de Documentación»:',
      options: [
        'Gestiona exclusivamente las solicitudes de préstamo interbibliotecario internacional.',
        'Le corresponde coordinar todos los centros o servicios documentales o de información diferentes de la Red de Bibliotecas, organizar y mantener la Biblioteca Documental y realizar recuentos totales de fondos al menos una vez cada tres años.',
        'Es un órgano dependiente de la Universidad de Castilla-La Mancha sin vinculación con el Ayuntamiento.',
        'Carece de registro propio de fondos al estar fusionado con el Padrón municipal.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 9 regula la Sección del Centro de Documentación, encargada de la Biblioteca Documental (g), coordinación de servicios documentales ajenos a la Red (a) y recuentos totales al menos cada tres años (f).'
    },

    // --- 3. SERVICIOS DE PRÉSTAMO, RESERVAS Y DEVOLUCIONES (Q09-Q15) ---
    {
      id: 'alb_2022_q09',
      category: 'Servicios de Préstamo, Reservas y Devoluciones',
      difficulty: 'C1',
      lawReference: 'Artículo 10',
      question: 'Conforme al artículo 10 del Reglamento de Albacete, ¿cuáles son los servicios que los centros incorporados a la Red de Bibliotecas Públicas deberán ofertar al menos con carácter obligatorio?',
      options: [
        'Consulta en sala, préstamo, información y orientación, servicio de acceso a Internet, promoción de la lectura y actividades culturales.',
        'Exclusivamente el préstamo domiciliario de libros y la lectura de prensa diaria.',
        'Préstamo de material audiovisual, reprografía de pago y cafetería de usuarios.',
        'Salas de estudio 24 horas y préstamo interbibliotecario con el extranjero.'
      ],
      correctAnswer: 0,
      explanation: 'El art. 10 enumera taxativamente los 6 servicios básicos y obligatorios mínimos que deben prestar todos los centros de la Red.'
    },
    {
      id: 'alb_2022_q10',
      category: 'Servicios de Préstamo, Reservas y Devoluciones',
      difficulty: 'C1',
      lawReference: 'Artículo 11, apartado 1, letras d) y e)',
      question: 'Según el artículo 11.1 del Reglamento de Albacete, ¿en qué momento exacto se consideran efectivamente devueltos los ejemplares prestados a los usuarios?',
      options: [
        'En el momento en que el usuario los deposita en el buzón o en las mesas de la biblioteca, con independencia de la hora.',
        'En el momento en que el personal del servicio correspondiente realiza la devolución en el sistema informático de la Biblioteca y no antes.',
        'A las 24 horas de haber sido entregados físicamente en el mostrador.',
        'En el momento en que el usuario envía un correo electrónico notificando la entrega.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 11.1.e establece con total claridad que la devolución solo es efectiva tras su descarga informática por el personal, advirtiendo de que no se consideran devueltos los libros dejados en mesas, carros o mostradores mientras no se procesen.'
    },
    {
      id: 'alb_2022_q11',
      category: 'Servicios de Préstamo, Reservas y Devoluciones',
      difficulty: 'C1',
      lawReference: 'Artículo 11, apartado 2, letras a) y b)',
      question: 'En relación con las modalidades de préstamo reguladas en el artículo 11.2 del Reglamento de Albacete, señale la afirmación correcta:',
      options: [
        'Las obras de colección local de conservación y reserva pueden retirarse libremente en préstamo individual sin restricciones.',
        'En el préstamo individual quedan excluidos los documentos de consulta y referencia, ejemplares únicos y de difícil reposición, obras de particular interés bibliográfico, histórico o artístico y colección local de conservación; y en el préstamo colectivo la solicitud es conjunta y unitaria, siendo la denegación siempre motivada.',
        'El préstamo digital no tiene la consideración de préstamo individual en ningún caso.',
        'La denegación de una solicitud de préstamo colectivo tiene carácter discrecional y no precisa ser motivada por escrito.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 11.2.a tasa los fondos excluidos de préstamo individual (claramente identificados) e incluye el préstamo digital. El art. 11.2.b regula el préstamo colectivo unitario y exige siempre motivación en las denegaciones.'
    },
    {
      id: 'alb_2022_q12',
      category: 'Servicios de Préstamo, Reservas y Devoluciones',
      difficulty: 'C1',
      lawReference: 'Artículo 11, apartado 2, letras c) y d)',
      question: 'De acuerdo con el artículo 11.2 del Reglamento de Albacete, en las modalidades de préstamo en red y préstamo interbibliotecario:',
      options: [
        'La solicitud y devolución del préstamo en red pueden efectuarse en cualquier biblioteca de la región sin acudir a la de referencia.',
        'La solicitud y devolución del préstamo en red se efectúan siempre de forma presencial en la biblioteca de referencia; y el coste íntegro de los gastos de envío y devolución (en red e interbibliotecario) es asumido de forma general por el Servicio Municipal si se cuenta con partida presupuestaria.',
        'El Ayuntamiento cobra obligatoriamente un recargo fijo de gestión de 10 euros por cada petición de préstamo interbibliotecario.',
        'Un usuario puede estar asignado simultáneamente a tres bibliotecas de referencia municipales distintas.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 11.2.c exige que la solicitud y devolución en red sean presenciales en la biblioteca de referencia (única), y fija la asunción general de los costes de envío por el Ayuntamiento de Albacete (tanto en red como en interbibliotecario ex art. 11.2.d).'
    },
    {
      id: 'alb_2022_q13',
      category: 'Servicios de Préstamo, Reservas y Devoluciones',
      difficulty: 'C1',
      lawReference: 'Artículo 12',
      question: 'Conforme al artículo 12 del Reglamento de Albacete, ¿a través de qué medios o canales pueden las personas usuarias efectuar reservas y renovaciones de documentos?',
      options: [
        'Exclusivamente personándose en el mostrador del centro titular del documento.',
        'Presencialmente, por teléfono, o a través de la sesión personal en el catálogo colectivo de la Red de Bibliotecas Públicas.',
        'Únicamente mediante envío de burofax postal dirigido al Director del Servicio.',
        'Mediante solicitud por escrito en el Registro General del Ayuntamiento con 10 días de antelación.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 12 admite tres vías directas y ágiles para tramitar reservas y renovaciones: en persona, vía telefónica o telemáticamente en el catálogo colectivo OPAC.'
    },
    {
      id: 'alb_2022_q14',
      category: 'Servicios de Préstamo, Reservas y Devoluciones',
      difficulty: 'C1',
      lawReference: 'Artículo 13, apartados 2 y 3',
      question: 'Según el artículo 13 del Reglamento de Albacete, ¿cuál es el procedimiento exigido al usuario para comprobar el estado físico de los documentos y qué especialidad rige para los materiales audiovisuales?',
      options: [
        'La biblioteca no admite reclamaciones sobre el estado del material una vez salido del edificio en ningún tipo de soporte.',
        'El usuario debe comprobar el estado físico al tramitar el préstamo comunicando anomalías antes de retirarlo; en materiales audiovisuales (donde no es posible la comprobación previa), si se descubre un defecto que impida su lectura/audición, debe comunicarlo como muy tarde en el momento de la devolución.',
        'El usuario dispone de un plazo improrrogable de 30 días tras la devolución para presentar quejas sobre el estado del CD o DVD.',
        'La comprobación física de libros y audiovisuales corresponde exclusivamente al servicio de encuadernación municipal antes de cada préstamo.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 13.2 establece el deber de verificar el estado al retirar el préstamo y formula la regla especial para audiovisuales: si está defectuoso, debe comunicarse al personal, como muy tarde, en el momento de la devolución.'
    },
    {
      id: 'alb_2022_q15',
      category: 'Servicios de Préstamo, Reservas y Devoluciones',
      difficulty: 'C1',
      lawReference: 'Artículo 13, apartado 4 (letras a, b, c y párrafo final)',
      question: 'De acuerdo con el artículo 13.4 del Reglamento de funcionamiento del Servicio de Bibliotecas Municipales del Ayuntamiento de Albacete, en relación con la tipificación del deterioro de los fondos y los materiales anejos:',
      options: [
        'El desgaste natural derivado del uso normal y continuado de un libro en papel se califica formalmente como deterioro sancionable.',
        'Se considera deterioro cualquier ensuciamiento, mutilación, escritura o ruptura en papel no atribuible al desgaste normal; el daño que impida la lectura/audición en audiovisuales; y el deterioro del lector o falta de componentes en libros electrónicos; afectando el concepto de deterioro y retraso por igual a los materiales principales como a los ejemplares anejos o secundarios prestados con el principal.',
        'Los ejemplares anejos o secundarios (como CD complementarios o cuadernillos) quedan exentos del régimen de sanciones y retrasos aplicable a la obra principal.',
        'La falta de componentes de un lector de libros electrónicos no se considera deterioro si el dispositivo principal enciende correctamente.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 13.4 desglosa con precisión técnica la definición de deterioro para los tres soportes (papel, audiovisual y lectores de libros electrónicos), excluyendo el desgaste por uso normal, y aclara en su último párrafo que el régimen de deterioro y retraso aplica exactamente igual a los anejos o materiales secundarios prestados con el principal.'
    },

    // --- 4. CONSULTA EN SALA, FONDOS Y POLÍTICA DE DONACIONES (Q16, Q17, Q25) ---
    {
      id: 'alb_2022_q16',
      category: 'Consulta en Sala, Fondos y Política de Donaciones',
      difficulty: 'C1',
      lawReference: 'Artículo 14, letras c), d), e) y f)',
      question: 'En relación con el servicio de consulta en sala (artículo 14 del Reglamento de Albacete), señale la afirmación correcta:',
      options: [
        'Se permite la reserva previa de puestos de lectura mediante colocación de objetos personales.',
        'Los puestos de lectura se destinan preferentemente a consultar colecciones de la biblioteca (el estudio con material personal se condiciona a plazas suficientes), no se permite reservar puestos, los materiales consultados deben dejarse en mesas/carros y los puestos multimedia son de uso individual exclusivo para ordenadores.',
        'Los puestos multimedia pueden utilizarse libremente como mesas de estudio personal aunque los ordenadores estén apagados.',
        'Los usuarios deben recolocar obligatoriamente los libros consultados en sus estanterías de origen.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 14 regula el orden en sala: prohibición de colocar libros en estanterías por usuarios (c), preferencia para fondos propios sobre apuntes personales (d), prohibición de reservar puestos (e) y destino exclusivo de puestos informáticos (f).'
    },
    {
      id: 'alb_2022_q17',
      category: 'Consulta en Sala, Fondos y Política de Donaciones',
      difficulty: 'C1',
      lawReference: 'Artículo 14, letras h), j), k) y l)',
      question: 'Conforme al artículo 14 del Reglamento de Albacete, en la consulta de fondos de sección local, fondo antiguo y zonas infantiles:',
      options: [
        'Los documentos de fondo antiguo pueden sacarse fuera de la sala designada siempre que se firme un recibo.',
        'Los fondos en depósito o acceso restringido se consultan en espacios específicos previa presentación de tarjeta y solicitud; la sala/zona infantil está reservada a menores de 14 años y adultos acompañantes; y el personal no se hace cargo en ningún caso del cuidado de menores.',
        'El personal bibliotecario asume legalmente la guarda y custodia de los menores en la sala infantil durante el horario de apertura.',
        'La sala infantil puede ser ocupada por estudiantes adultos universitarios en épocas de exámenes.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 14.h-j impone condiciones estrictas de consulta para fondo antiguo y depósitos. El art. 14.k reserva la zona infantil a menores de 14 años y sus acompañantes, y el art. 14.l aclara tajantemente que el personal nunca asume el cuidado de menores.'
    },
    {
      id: 'alb_2022_q25',
      category: 'Consulta en Sala, Fondos y Política de Donaciones',
      difficulty: 'C1',
      lawReference: 'Artículo 19, apartado 1 y Artículo 20, apartados 1 y 2',
      question: 'De acuerdo con los artículos 19 y 20 del Reglamento de Albacete, ¿cuáles son las colecciones bibliográficas de la Red y qué donaciones NO serán recogidas por la Biblioteca?',
      options: [
        'Colección General desde 1960, Infantil hasta 14 años y Local/Regional; y no se recogen donaciones en mal estado, las no adaptadas a objetivos, obras de materia en otros idiomas, libros de informática/guías de viaje con más de 5 años, textos religiosos/sectarios, de apología de violencia/sexismo/xenofobia ni libros de texto.',
        'Colección General solo para fondos del siglo XXI; y se aceptan donaciones de libros de texto de cualquier año.',
        'Colección Local restringida a publicaciones oficiales del Ayuntamiento; y las donaciones de informática se aceptan sin límite de antigüedad.',
        'Colección Infantil para menores de 18 años; y se aceptan donaciones de textos religiosos de grupos sectarios.'
      ],
      correctAnswer: 0,
      explanation: 'El art. 19.1 define las 3 colecciones (General desde 1960, Infantil hasta 14 años, Local/Regional) y el art. 20.2 tasa exhaustivamente los 7 supuestos de no aceptación de donaciones (incluyendo informática >5 años, libros de texto e idiomas extranjeros en materias).'
    },

    // --- 5. INFORMACIÓN, INTERNET Y ACTIVIDADES CULTURALES (Q18-Q22) ---
    {
      id: 'alb_2022_q18',
      category: 'Información, Internet y Actividades Culturales',
      difficulty: 'C1',
      lawReference: 'Artículo 15',
      question: 'De acuerdo con el artículo 15 del Reglamento de Albacete, ¿qué niveles de atención comprende el servicio de información y orientación bibliotecaria?',
      options: [
        'Exclusivamente la orientación básica sobre la ubicación de aseos y salidas de emergencia.',
        'Atención a nivel básico sobre recursos, servicios, organización y localización de fondos de la Biblioteca; y a nivel especializado sobre temas relacionados con la localidad y la provincia de Albacete, así como sobre determinados temas o autores.',
        'Asesoramiento jurídico gratuito en materia de contratos y herencias.',
        'Elaboración de tesis doctorales y trabajos de fin de grado por encargo del usuario.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 15.b estructura el servicio de información en dos niveles: básico (servicios, instalaciones y catálogo) y especializado (ámbito local, provincial y materias/autores específicos).'
    },
    {
      id: 'alb_2022_q19',
      category: 'Información, Internet y Actividades Culturales',
      difficulty: 'C1',
      lawReference: 'Artículo 16, letra b)',
      question: 'Según el artículo 16.b) del Reglamento de Albacete, ¿cuál de las siguientes condiciones es obligatoria para el uso de la conexión WiFi y qué consecuencia acarrea el uso de credenciales ajenas?',
      options: [
        'La conexión WiFi no requiere tarjeta de la Red; y usar claves ajenas se sanciona con una advertencia verbal.',
        'Para utilizar la conexión WiFi es necesario tener tarjeta de la RBP, registrarse y aceptar las condiciones del servidor; y el uso de la identificación y contraseña de otra persona supondrá la inhabilitación tanto de quien se conecte como de la persona propietaria de dichos datos.',
        'El acceso a Internet se realiza obligatoriamente mediante pago de 1 euro por cada 30 minutos de conexión.',
        'La tarjeta de la RBP solo autoriza la conexión desde ordenadores fijos de la biblioteca y no por WiFi.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 16.b establece que la red WiFi requiere tarjeta y registro, y sanciona la cesión o uso indebido de contraseñas ajenas con la inhabilitación simultánea de ambas personas.'
    },
    {
      id: 'alb_2022_q20',
      category: 'Información, Internet y Actividades Culturales',
      difficulty: 'C1',
      lawReference: 'Artículo 16, letras a), c), d) y e)',
      question: 'Conforme al artículo 16 del Reglamento de Albacete, en relación con el acceso a Internet y puestos multimedia:',
      options: [
        'Se permite la consulta de cualquier página web sin restricciones al amparo de la libertad de cátedra.',
        'Se prohíbe expresamente la consulta de páginas de contenido pornográfico, violento o xenófobo; la persona usuaria es la única responsable del uso legal del servicio; el personal no está obligado a prestar asesoramiento sobre la navegación; y las impresiones se abonan según los precios aprobados por la corporación municipal.',
        'La biblioteca garantiza la veracidad jurídica de todos los contenidos consultados en Internet.',
        'Las copias impresas desde Internet son gratuitas e ilimitadas para todos los usuarios.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 16 regula los límites en Internet: prohibición expresa de contenidos ilícitos/violentos (d), exoneración de la biblioteca y responsabilidad del usuario (c), no obligación de asesorar en navegación (e) y pago de impresiones ex precios municipales (a).'
    },
    {
      id: 'alb_2022_q21',
      category: 'Información, Internet y Actividades Culturales',
      difficulty: 'C1',
      lawReference: 'Artículo 17, letras a), b) y c)',
      question: 'De acuerdo con el artículo 17 del Reglamento de Albacete, ¿ante quién se conciertan las visitas guiadas de carácter colectivo y cómo se adjudican las plazas en actividades culturales con inscripción previa cuando la demanda supera la oferta?',
      options: [
        'Se conciertan ante la Policía Local; y las plazas se adjudican mediante sorteo ante notario.',
        'Se conciertan con la Jefatura de Sección de «Programas de Promoción de la Lectura» o con la Dirección del Servicio; y las plazas se adjudican por orden de petición constituyendo una lista de espera con las solicitudes que excedan del cupo.',
        'Se conciertan con la Consejería de Hacienda; y las plazas se reservan para miembros del Pleno.',
        'Las visitas guiadas están prohibidas en los centros de la Red Municipal.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 17.a designa a los dos órganos interlocutores para concertar visitas guiadas (Jefatura de Promoción o Dirección) y el art. 17.c fija el criterio de adjudicación de plazas por riguroso orden de petición con lista de espera.'
    },
    {
      id: 'alb_2022_q22',
      category: 'Información, Internet y Actividades Culturales',
      difficulty: 'C1',
      lawReference: 'Artículo 17, letras d) y g)',
      question: 'Según el artículo 17 del Reglamento de Albacete, en relación con el acompañamiento de menores y la toma de imágenes en actividades culturales:',
      options: [
        'Los menores pueden permanecer siempre solos; y las fotos tomadas se publican sin restricción alguna.',
        'En actividades de entrada libre sin inscripción, los menores de 7 años deben estar acompañados en todo momento; en actividades con inscripción para grupo reducido menor de 8 años, el responsable debe permanecer localizable; y la difusión de imágenes se hará sin identificar a los menores (o con autorización previa en las de inscripción).',
        'Los mayores de 6 años no precisan acompañamiento en ninguna actividad municipal.',
        'Queda terminantemente prohibido a la biblioteca realizar cualquier fotografía ilustrativa de sus eventos.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 17.d establece las dos edades de control (7 años presencial / 8 años localizable) y el art. 17.g regula la protección de la imagen de menores en difusión cultural.'
    },

    // --- 6. OTROS SERVICIOS: PACTO POR LA LECTURA, CESIÓN Y REPROGRAFÍA (Q23-Q24) ---
    {
      id: 'alb_2022_q23',
      category: 'Otros Servicios: Pacto por la Lectura, Cesión y Reprografía',
      difficulty: 'C1',
      lawReference: 'Artículo 18, apartados 1 y 2',
      question: 'Conforme al artículo 18 del Reglamento de Albacete, ¿a través de qué instrumento prioritario colabora el Servicio Municipal con el entorno social y cuáles son las condiciones de cesión de instalaciones?',
      options: [
        'A través del Plan de Empleo Juvenil de 2020; y las salas se ceden mediante alquiler comercial a empresas.',
        'A través del Pacto Social por la Lectura (firmado el 27 de octubre de 2017 en Albacete); y la cesión de instalaciones es temporal, gratuita y autorizada por la Dirección del Servicio, prohibiéndose para actividades particulares, políticas, sindicales, publicitarias, comerciales o empresariales.',
        'A través del Convenio Marco Estatal de 1999; y las salas se ceden libremente a partidos políticos en campaña.',
        'Mediante convenios anuales con entidades bancarias; con coste de 50 euros por hora de cesión.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 18.1 cita el Pacto Social por la Lectura de 27 de octubre de 2017. El art. 18.2 regula la cesión gratuita bajo autorización de la Dirección (c) y prohíbe de forma expresa los actos comerciales, políticos, sindicales o privados (h).'
    },
    {
      id: 'alb_2022_q24',
      category: 'Otros Servicios: Pacto por la Lectura, Cesión y Reprografía',
      difficulty: 'C1',
      lawReference: 'Artículo 18, apartados 3 y 4',
      question: 'En relación con los servicios de desideratas y reproducción de documentos (artículo 18 del Reglamento de Albacete), señale la opción correcta:',
      options: [
        'Las desideratas solo pueden presentarse presencialmente por escrito en papel timbrado.',
        'Las desideratas requieren tarjeta de la RBP en vigor (presencial o en línea en el catálogo); y en reprografía se podrá denegar la copia de ejemplares deteriorados, únicos o de difícil reposición, soportes especiales y prensa periódica encuadernada, fijándose los precios por la corporación para financiar costes.',
        'La reprografía es ilimitada y gratuita para cualquier documento histórico del fondo antiguo.',
        'El usuario no tiene responsabilidad alguna en materia de propiedad intelectual al fotocopiar fondos.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 18.3 regula las desideratas con tarjeta (presencial o web). El art. 18.4 tasa las exclusiones de reprografía (prensa encuadernada, únicos, deteriorados) y limita los precios públicos a financiar los costes del servicio.'
    },

    // --- 7. TARJETA DE USUARIO, MODALIDADES, HORARIOS Y ESPACIOS (Q26-Q29) ---
    {
      id: 'alb_2022_q26',
      category: 'Tarjeta de Usuario, Modalidades, Horarios y Espacios',
      difficulty: 'C1',
      lawReference: 'Artículo 22, apartados 4 y 5',
      question: 'Conforme al artículo 22 del Reglamento de Albacete, en relación con el tratamiento de datos de carácter personal y la exigencia de la tarjeta de la Red de Bibliotecas:',
      options: [
        'Los datos personales de los usuarios se rigen por la Ley de Secretos Oficiales de 1968, estando prohibida la digitalización de ficheros.',
        'El tratamiento de los datos personales facilitados a la Biblioteca es confidencial y se efectúa de acuerdo con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD); y, aunque la tarjeta de la RBP es obligatoria para el préstamo y acceso a Internet, excepcionalmente podrá utilizarse el Documento Nacional de Identidad en lugar de dicha tarjeta.',
        'El Documento Nacional de Identidad no puede sustituir a la tarjeta de usuario en ningún caso ni bajo ninguna circunstancia.',
        'La consulta y el uso de puestos multimedia y de acceso a Internet están exentos de la exigencia de la tarjeta de usuario de la RBP.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 22.4 fundamenta la confidencialidad en el RGPD europeo (2016/679) y en la LOPDGDD (LO 3/2018). El art. 22.5 exige la tarjeta para préstamo, puestos multimedia e Internet, previendo expresamente la salvedad de que excepcionalmente podrá utilizarse el DNI.'
    },
    {
      id: 'alb_2022_q27',
      category: 'Tarjeta de Usuario, Modalidades, Horarios y Espacios',
      difficulty: 'C1',
      lawReference: 'Artículo 23, apartado 1',
      question: 'Según el artículo 23.1 del Reglamento de Albacete, ¿cómo se gestiona la fotografía de la persona usuaria, qué documentos identificativos se admiten y qué requisito rige para las solicitudes de personas menores de edad?',
      options: [
        'El usuario debe aportar obligatoriamente dos fotografías impresas en papel fotográfico tamaño carné; y no se admiten pasaportes ni permisos de conducir.',
        'La fotografía se efectúa directamente en el propio mostrador de la Biblioteca; se admite el DNI, pasaporte, carné de conducir o tarjeta de residencia; las solicitudes de menores de edad deben incluir los datos y firma de una de las personas responsables de su patria potestad/representación legal; y en menores de 13 años son estas quienes realizan la solicitud presencialmente.',
        'Las solicitudes de menores de edad requieren obligatoriamente la firma conjunta y presencial de ambos progenitores sin excepción.',
        'La fotografía solo es obligatoria para personas usuarias mayores de 65 años.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 23.1 detalla el procedimiento operativo de alta: la foto se realiza en el mostrador, enumera los documentos acreditativos válidos y fija los requisitos de representación para menores de edad (firma de 1 tutor) y menores de 13 años (solicitud presencial por tutores).'
    },
    {
      id: 'alb_2022_q28',
      category: 'Tarjeta de Usuario, Modalidades, Horarios y Espacios',
      difficulty: 'C1',
      lawReference: 'Artículo 24, apartado 2, letras c) y d)',
      question: 'De acuerdo con el artículo 24.2 del Reglamento de Albacete, ¿cuál es el procedimiento formal exigido para autorizar la utilización de la tarjeta por persona distinta de su titular y a quién corresponde resolver la solicitud?',
      options: [
        'Basta con una autorización verbal comunicada por teléfono al personal de sala; y se resuelve de forma automática sin expediente.',
        'El titular debe autorizarlo previamente y por escrito mediante formulario normalizado del Portal de Bibliotecas de Castilla-La Mancha, incluyendo declaración responsable sobre su imposibilidad de acudir en horario de apertura; las solicitudes son valoradas y resueltas por la persona responsable de la Biblioteca; y el titular continúa siendo responsable del buen uso de la tarjeta.',
        'La autorización debe ser elevada a escritura pública notarial y aprobada por el Pleno municipal del Ayuntamiento.',
        'La autorización transfiere íntegramente la responsabilidad jurídica al tercero autorizado, quedando el titular exento de toda obligación.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 24.2.c regula las garantías del trámite de autorización: formulario oficial del Portal, declaración responsable de incompatibilidad horaria, resolución por la persona responsable de la biblioteca y mantenimiento de la responsabilidad en el titular de la tarjeta.'
    },
    {
      id: 'alb_2022_q29',
      category: 'Tarjeta de Usuario, Modalidades, Horarios y Espacios',
      difficulty: 'C1',
      lawReference: 'Artículo 25',
      question: 'Conforme al artículo 25 del Reglamento de Albacete, en relación con el uso de las instalaciones y las normas de convivencia:',
      options: [
        'Es exigible en todo caso un silencio absoluto en todas las salas sin excepción.',
        'No es exigible un silencio absoluto pero debe mantenerse un volumen de voz moderado a criterio del personal; los teléfonos deben mantenerse silenciados y las llamadas limitarse a zonas indicadas; el consumo de comida/bebida se limita a zonas habilitadas (hall/comunes); los patinetes/bicicletas se aparcan fuera; y el acceso de animales se limita a perros guía o de asistencia.',
        'Se permite el acceso de animales de compañía de cualquier tipo si van sujetos con correa.',
        'Está permitido el aparcamiento de patinetes eléctricos dentro de las salas de lectura junto a los puestos de estudio.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 25 regula la convivencia en detalle: silencio moderado (d), móviles y llamadas (e), comida/bebida en hall (h), vehículos con ruedas fuera (i) y limitación estricta de animales a perros guía o de asistencia (m).'
    },

    // --- 8. DERECHOS, DEBERES, RÉGIMEN SANCIONADOR Y JUNTA DE GOBIERNO (Q30) ---
    {
      id: 'alb_2022_q30',
      category: 'Derechos, Deberes, Régimen Sancionador y Junta de Gobierno',
      difficulty: 'C1',
      lawReference: 'Artículo 26, Artículo 28 y Disposición Derogatoria Única',
      question: 'En relación con los horarios estacionales, la potestad sancionadora y el régimen derogatorio (artículos 26 y 28 y Disposición Derogatoria del Reglamento de Albacete):',
      options: [
        'Los centros abren de lunes a jueves; las sanciones las impone el Director de la Biblioteca; y deroga una ordenanza de 1992.',
        'Los centros abren 5 días a la semana (lunes a viernes) con apertura de algún centro en sábado; el horario de invierno rige del 18 de septiembre al 24 de junio y el de verano del 25 de junio al 17 de septiembre; la imposición de sanciones a personas usuarias corresponde a la Junta de Gobierno Local del Ayuntamiento de Albacete; y deroga el Reglamento de Régimen Interior de 30 de enero de 2014 (BOP de 14 de febrero de 2014).',
        'El horario continuado de verano es de 10:00 a 14:00 h; y la competencia sancionadora corresponde al Ministro de Cultura.',
        'El régimen sancionador prescribe en el plazo único de 24 horas y no deroga ninguna norma previa.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 26 fija las fechas exactas de invierno y verano y la apertura en sábado. El art. 28 atribuye la competencia sancionadora municipal a la Junta de Gobierno Local. La Disposición Derogatoria Única deroga el reglamento municipal precedente de 2014.'
    }
  ]
};

if (typeof window !== 'undefined') {
  window.REGLAMENTO_ALBACETE_2022 = REGLAMENTO_ALBACETE_2022;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = REGLAMENTO_ALBACETE_2022;
}
