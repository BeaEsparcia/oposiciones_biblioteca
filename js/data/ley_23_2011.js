/**
 * Ley 23/2011, de 29 de julio, de depósito legal.
 * 
 * Publicación oficial: Boletín Oficial del Estado (BOE) núm. 182, de 30 de julio de 2011.
 * Banco Exhaustivo de 30 Preguntas calibradas para Oposiciones de Bibliotecas (Nivel C1).
 * Cobertura completa de los 19 Artículos, 4 Capítulos y Disposiciones.
 * Fuente estricta: Texto consolidado oficial del BOE.
 */

const LEY_23_2011 = {
  id: 'ley_23_2011',
  title: 'Ley 23/2011, de 29 de julio, de depósito legal',
  shortTitle: 'Ley 23/2011 (Depósito Legal)',
  jurisdiction: 'Estatal',
  category: 'Legislación Estatal',
  officialReference: 'BOE núm. 182, de 30 de julio de 2011',
  structureSummary: '19 Artículos, 4 Capítulos, 3 D. Adicionales, 1 D. Transitoria, 1 D. Derogatoria y 3 D. Finales',
  categories: [
    'Disposiciones Generales y Definiciones',
    'Publicaciones Sujetas y Exclusiones',
    'Sujetos Obligados y Tramitación',
    'Centros Depositarios y de Conservación',
    'Constitución y Procedimiento de Depósito',
    'Número de Depósito Legal',
    'Régimen Sancionador y Procedimiento'
  ],
  questions: [
    // --- 1. DISPOSICIONES GENERALES Y DEFINICIONES (Q01-Q04) ---
    {
      id: 'ley23_2011_q01',
      category: 'Disposiciones Generales y Definiciones',
      difficulty: 'C1',
      lawReference: 'Artículo 1',
      question: 'Conforme al artículo 1, ¿cuál de las siguientes afirmaciones describe correctamente el objeto de la Ley 23/2011?',
      options: [
        'Regular exclusivamente el depósito de publicaciones impresas destinadas a la venta, con finalidad de control bibliográfico nacional.',
        'Regular el depósito legal como institución jurídica que permite recoger publicaciones de todo tipo reproducidas en cualquier soporte y destinadas a distribución o comunicación pública, gratuita u onerosa.',
        'Establecer exclusivamente las obligaciones de los editores respecto de las publicaciones producidas físicamente en España.',
        'Regular la conservación de publicaciones únicamente por parte de la Biblioteca Nacional de España.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 1 de la Ley 23/2011 establece que la ley tiene por objeto regular el depósito legal como institución jurídica que permite a la Administración recoger publicaciones de todo tipo reproducidas en cualquier clase de soporte y destinadas a su distribución o comunicación pública, sea esta gratuita u onerosa.'
    },
    {
      id: 'ley23_2011_q02',
      category: 'Disposiciones Generales y Definiciones',
      difficulty: 'C1',
      lawReference: 'Artículo 2',
      question: '¿Cuál de los siguientes NO figura entre los objetivos expresamente enumerados en el artículo 2?',
      options: [
        'Recopilar, almacenar y conservar las publicaciones que constituyen el patrimonio bibliográfico, sonoro, visual, audiovisual y digital español.',
        'Recoger información para confeccionar estadísticas oficiales sobre dicho patrimonio.',
        'Garantizar que todas las publicaciones depositadas sean de libre acceso para cualquier ciudadano, sin restricciones derivadas de la propiedad intelectual.',
        'Describir el conjunto de la producción bibliográfica, sonora, visual, audiovisual y digital española.'
      ],
      correctAnswer: 2,
      explanation: 'El art. 2 enumera como objetivos recopilar, almacenar y conservar las publicaciones que constituyen el patrimonio bibliográfico, sonoro, visual, audiovisual y digital español; describirlo para la bibliografía nacional; y recoger información para estadísticas oficiales. El libre acceso irrestricto al margen de la propiedad intelectual no figura entre sus objetivos.'
    },
    {
      id: 'ley23_2011_q03',
      category: 'Disposiciones Generales y Definiciones',
      difficulty: 'C1',
      lawReference: 'Artículo 3, letras a) y b)',
      question: 'A efectos de la Ley 23/2011, ¿qué distingue específicamente a una publicación en línea de una publicación electrónica?',
      options: [
        'La publicación en línea se encuentra necesariamente restringida mediante contraseña.',
        'La publicación electrónica utiliza soporte tangible, mientras que la publicación en línea utiliza un soporte electrónico no tangible.',
        'La publicación electrónica debe ser audiovisual y la publicación en línea necesariamente textual.',
        'No existe ninguna diferencia conceptual entre ambas.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 3 define la publicación electrónica como aquella que utiliza un soporte tangible (CD, DVD, memoria, etc.), mientras que la publicación en línea es la que utiliza un soporte electrónico no tangible y se distribuye o comunica a través de redes telemáticas.'
    },
    {
      id: 'ley23_2011_q04',
      category: 'Disposiciones Generales y Definiciones',
      difficulty: 'C1',
      lawReference: 'Artículo 3, letra b)',
      question: '¿Cuál de las siguientes afirmaciones sobre las publicaciones en línea es correcta?',
      options: [
        'Los sitios web quedan expresamente excluidos de la consideración de publicaciones en línea.',
        'Solo tienen consideración de publicaciones en línea los contenidos difundidos gratuitamente.',
        'Los sitios web se consideran publicaciones en línea a efectos de la Ley.',
        'Una publicación en línea debe estar necesariamente asociada a una edición impresa.'
      ],
      correctAnswer: 2,
      explanation: 'El art. 3.b) establece expresamente que los sitios web se consideran publicaciones en línea a efectos de la Ley 23/2011.'
    },

    // --- 2. PUBLICACIONES SUJETAS Y EXCLUSIONES (Q05-Q07) ---
    {
      id: 'ley23_2011_q05',
      category: 'Publicaciones Sujetas y Exclusiones',
      difficulty: 'C1',
      lawReference: 'Artículo 4, apartado 1',
      question: '¿Cuál de las siguientes publicaciones está expresamente incluida entre las que pueden ser objeto de depósito legal?',
      options: [
        'Sellos de correo.',
        'Calendarios y agendas.',
        'Objetos tridimensionales que acompañen a un documento principal.',
        'Videojuegos, incluidos todos sus contenidos digitales, con exclusión de los objetos tridimensionales.'
      ],
      correctAnswer: 3,
      explanation: 'El art. 4.1.i) incluye expresamente entre las publicaciones objeto de depósito legal a los videojuegos, comprendiendo todos sus contenidos digitales, con exclusión de los objetos tridimensionales. Los sellos, calendarios y objetos tridimensionales aislados están excluidos (art. 5).'
    },
    {
      id: 'ley23_2011_q06',
      category: 'Publicaciones Sujetas y Exclusiones',
      difficulty: 'C1',
      lawReference: 'Artículo 5, letra g)',
      question: '¿Cuál de los siguientes sí está excluido del depósito legal conforme al artículo 5?',
      options: [
        'Catálogos comerciales de librerías.',
        'Publicaciones de impresión bajo demanda destinadas a distribución en un ámbito familiar.',
        'Carteles anunciadores y publicitarios.',
        'Libros de texto de Bachillerato.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 5.g) excluye del depósito legal a las publicaciones de impresión bajo demanda destinadas a distribución en un ámbito estrictamente familiar o privado.'
    },
    {
      id: 'ley23_2011_q07',
      category: 'Publicaciones Sujetas y Exclusiones',
      difficulty: 'C1',
      lawReference: 'Artículo 5, letra e)',
      question: 'Una publicación comercial consiste en un catálogo de una editorial destinado a difundir sus fondos. Conforme a la Ley 23/2011:',
      options: [
        'Está excluido por tratarse de publicidad comercial.',
        'Está incluido, pues los catálogos comerciales de editoriales, librerías y subastas constituyen una excepción a la exclusión general de catálogos comerciales.',
        'Solo está incluido si se distribuye gratuitamente.',
        'Solo está incluido si se publica en formato electrónico.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 5.e) excluye los catálogos comerciales, pero exceptúa expresamente de dicha exclusión a los catálogos comerciales de editoriales, librerías y subastas, que por tanto sí están sujetos a depósito legal.'
    },

    // --- 3. SUJETOS OBLIGADOS Y TRAMITACIÓN (Q08-Q13) ---
    {
      id: 'ley23_2011_q08',
      category: 'Sujetos Obligados y Tramitación',
      difficulty: 'C1',
      lawReference: 'Artículo 7, apartado 1',
      question: '¿Quién está obligado, con carácter general, a constituir el depósito legal cuando el editor tiene domicilio, residencia o establecimiento permanente en España?',
      options: [
        'El impresor, con independencia del lugar de residencia del editor.',
        'El productor.',
        'El editor.',
        'La oficina de depósito legal correspondiente.'
      ],
      correctAnswer: 2,
      explanation: 'El art. 7.1 establece con carácter general que el sujeto obligado a constituir el depósito legal es el editor, siempre que tenga domicilio, residencia o establecimiento permanente en territorio español.'
    },
    {
      id: 'ley23_2011_q09',
      category: 'Sujetos Obligados y Tramitación',
      difficulty: 'C1',
      lawReference: 'Artículo 7, apartado 2',
      question: 'Si el editor no reside ni tiene sucursal en España, y por razón del tipo de recurso procede que otro sujeto constituya el depósito, ¿quién puede quedar obligado?',
      options: [
        'Exclusivamente la Biblioteca Nacional de España.',
        'El productor, impresor, estampador o grabador que tenga domicilio, residencia o establecimiento permanente en España.',
        'Exclusivamente el distribuidor.',
        'La Comunidad Autónoma donde se comercialice la publicación.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 7.2 estipula que si el editor no reside ni tiene sucursal en España, el obligado al depósito legal será el productor, impresor, estampador o grabador que tenga domicilio, residencia o establecimiento permanente en España.'
    },
    {
      id: 'ley23_2011_q10',
      category: 'Sujetos Obligados y Tramitación',
      difficulty: 'C1',
      lawReference: 'Artículo 8, apartados 1 y 2',
      question: 'Respecto de la solicitud del número de depósito legal, ¿cuál es la regla correcta?',
      options: [
        'Siempre corresponde al impresor.',
        'En una obra publicada en formato tangible corresponde al editor; en obras sonoras, visuales, audiovisuales y películas cinematográficas corresponde al productor.',
        'Siempre corresponde al productor, aunque exista editor en España.',
        'Corresponde a la oficina autonómica de depósito legal.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 8 dispone que la solicitud del número corresponde al editor en obras en formato tangible (apartado 1), y al productor en el caso de obras sonoras, visuales, audiovisuales y películas cinematográficas (apartado 2).'
    },
    {
      id: 'ley23_2011_q11',
      category: 'Sujetos Obligados y Tramitación',
      difficulty: 'C1',
      lawReference: 'Artículo 8, apartado 3',
      question: 'Si el editor obligado a solicitar el número de depósito legal de una obra publicada en formato tangible no lo hubiera solicitado, ¿quién deberá hacerlo, en defecto del editor?',
      options: [
        'El distribuidor.',
        'El productor, impresor, estampador o grabador, en este orden.',
        'La Biblioteca Nacional de España.',
        'La oficina de depósito legal, de oficio.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 8.3 precisa que si el editor obligado no solicita el número de depósito legal en obras en formato tangible, deberán hacerlo en su defecto el productor, el impresor, el estampador o el grabador, en este orden.'
    },
    {
      id: 'ley23_2011_q12',
      category: 'Sujetos Obligados y Tramitación',
      difficulty: 'C1',
      lawReference: 'Artículo 7, apartado 3 y Artículo 8, apartado 4',
      question: 'En el caso de publicaciones electrónicas y publicaciones en línea, ¿cuál de las siguientes afirmaciones es correcta?',
      options: [
        'Los editores de publicaciones en línea están siempre obligados a gestionar directamente el depósito legal.',
        'La responsabilidad del depósito legal de las publicaciones electrónicas recae en su editor o productor, mientras que los editores de publicaciones en línea están exonerados de la gestión del depósito.',
        'La responsabilidad corresponde exclusivamente a las oficinas autonómicas.',
        'Las publicaciones en línea están excluidas del depósito legal si tienen acceso restringido.'
      ],
      correctAnswer: 1,
      explanation: 'En las publicaciones electrónicas en soporte tangible la responsabilidad recae en su editor o productor; en cambio, los editores de publicaciones en línea están exonerados de la gestión del depósito (art. 7.3 y art. 8.4), siendo los centros de conservación quienes capturan o recopilan los contenidos.'
    },
    {
      id: 'ley23_2011_q13',
      category: 'Sujetos Obligados y Tramitación',
      difficulty: 'C1',
      lawReference: 'Artículo 7, apartado 4',
      question: 'Respecto de las publicaciones en línea de acceso restringido, los editores:',
      options: [
        'No tienen ninguna obligación relacionada con el depósito legal.',
        'Deben transferir las publicaciones que les sean solicitadas por los centros de conservación.',
        'Deben entregar siempre cuatro ejemplares físicos.',
        'Deben hacerlas libremente accesibles a cualquier ciudadano.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 7.4 establece que en publicaciones en línea de acceso restringido, los editores deben transferir las publicaciones o facilitar el acceso cuando les sean requeridas por los centros de conservación.'
    },

    // --- 4. CENTROS DEPOSITARIOS Y DE CONSERVACIÓN (Q14-Q20) ---
    {
      id: 'ley23_2011_q14',
      category: 'Centros Depositarios y de Conservación',
      difficulty: 'C1',
      lawReference: 'Artículo 9, apartado 1',
      question: '¿Cuáles son, conforme al artículo 9, los centros depositarios?',
      options: [
        'La Biblioteca Nacional de España y la Filmoteca Española.',
        'Exclusivamente las oficinas de depósito legal de las Comunidades Autónomas.',
        'Las oficinas de depósito legal que determinen las Comunidades Autónomas en el ámbito de sus competencias.',
        'Únicamente los centros de conservación autonómicos.'
      ],
      correctAnswer: 2,
      explanation: 'El art. 9.1 define a los centros depositarios como las oficinas de depósito legal que determinen las comunidades autónomas en el ámbito de sus competencias.'
    },
    {
      id: 'ley23_2011_q15',
      category: 'Centros Depositarios y de Conservación',
      difficulty: 'C1',
      lawReference: 'Artículo 9, apartado 2',
      question: '¿Cuál de las siguientes instituciones NO aparece expresamente enumerada como centro de conservación por el artículo 9?',
      options: [
        'Biblioteca Nacional de España.',
        'Filmoteca Española.',
        'Los centros que determinen las Comunidades Autónomas en el ámbito de sus competencias.',
        'Las oficinas de depósito legal de las Comunidades Autónomas.'
      ],
      correctAnswer: 3,
      explanation: 'El art. 9.2 enumera expresamente como centros de conservación a la Biblioteca Nacional de España, a la Filmoteca Española y a los centros que determinen las comunidades autónomas en el ámbito de sus competencias. Las oficinas de depósito legal son centros depositarios (art. 9.1), no centros de conservación.'
    },
    {
      id: 'ley23_2011_q16',
      category: 'Centros Depositarios y de Conservación',
      difficulty: 'C1',
      lawReference: 'Artículo 9, apartado 3',
      question: 'Una vez constituido el depósito legal, el interesado:',
      options: [
        'Puede retirar las obras cuando considere que su comunicación pública perjudica sus intereses.',
        'Puede retirarlas previa autorización de la Biblioteca Nacional de España.',
        'No puede retirar las obras depositadas por el solo hecho de no desear su comunicación pública.',
        'Puede retirarlas siempre que conserve una copia equivalente.'
      ],
      correctAnswer: 2,
      explanation: 'El art. 9.3 estipula expresamente que el interesado no podrá retirar las obras depositadas por el mero hecho de no desear su comunicación pública una vez constituido el depósito.'
    },
    {
      id: 'ley23_2011_q17',
      category: 'Centros Depositarios y de Conservación',
      difficulty: 'C1',
      lawReference: 'Artículo 10, apartado 1',
      question: '¿Cuál de las siguientes funciones corresponde a la Biblioteca Nacional de España?',
      options: [
        'Ejercer exclusivamente funciones sancionadoras sobre los editores.',
        'Elaborar la Bibliografía española y facilitar información para elaborar la estadística de las publicaciones objeto de depósito legal.',
        'Determinar unilateralmente las oficinas de depósito legal de las Comunidades Autónomas.',
        'Gestionar directamente todas las publicaciones en línea de acceso restringido.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 10.1 encomienda a la Biblioteca Nacional de España elaborar la Bibliografía española y facilitar la información necesaria para confeccionar la estadística oficial de las publicaciones objeto de depósito legal.'
    },
    {
      id: 'ley23_2011_q18',
      category: 'Centros Depositarios y de Conservación',
      difficulty: 'C1',
      lawReference: 'Artículo 10, apartado 2',
      question: '¿Cuál de las siguientes afirmaciones sobre los ejemplares que debe conservar la BNE es correcta?',
      options: [
        'Debe conservar siempre exactamente cuatro ejemplares de todas las publicaciones sujetas a depósito legal.',
        'Entre otros supuestos, conserva dos ejemplares de las primeras ediciones, reediciones de libros, folletos y recursos multimedia en los que al menos uno de los soportes sea en papel.',
        'Nunca conserva publicaciones electrónicas.',
        'Solo conserva publicaciones impresas destinadas a la venta.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 10.2.a) señala que la BNE conservará dos ejemplares de las primeras ediciones y reediciones de libros, folletos y recursos multimedia en los que al menos uno de los soportes sea en papel.'
    },
    {
      id: 'ley23_2011_q19',
      category: 'Centros Depositarios y de Conservación',
      difficulty: 'C1',
      lawReference: 'Artículo 10, apartado 2, letra b)',
      question: 'Según el artículo 10, ¿qué ocurre con los temarios de oposiciones editados por las propias academias que imparten la enseñanza?',
      options: [
        'La BNE debe conservar siempre un ejemplar.',
        'Deben depositarse dos ejemplares en la oficina autonómica.',
        'No se entrega ningún ejemplar a la BNE por este concepto.',
        'Se depositan únicamente cuando tengan ISBN.'
      ],
      correctAnswer: 2,
      explanation: 'El art. 10.2.b) establece que de los temarios de oposiciones editados por las propias academias que imparten la enseñanza no se entregará ningún ejemplar a la Biblioteca Nacional de España.'
    },
    {
      id: 'ley23_2011_q20',
      category: 'Centros Depositarios y de Conservación',
      difficulty: 'C1',
      lawReference: 'Artículo 11',
      question: 'Respecto de las oficinas de depósito legal de las Comunidades Autónomas, ¿cuál es su función?',
      options: [
        'Recibir los ejemplares y facilitar su entrega a los centros de conservación mencionados en el artículo 9.',
        'Elaborar exclusivamente la Bibliografía española.',
        'Determinar las sanciones aplicables en todo el territorio nacional.',
        'Sustituir a la Biblioteca Nacional de España como centro de conservación estatal.'
      ],
      correctAnswer: 0,
      explanation: 'El art. 11 encomienda a las oficinas de depósito legal de las comunidades autónomas recibir los ejemplares y facilitar su entrega a los centros de conservación previstos en la ley.'
    },

    // --- 5. CONSTITUCIÓN Y PROCEDIMIENTO DE DEPÓSITO (Q21-Q23) ---
    {
      id: 'ley23_2011_q21',
      category: 'Constitución y Procedimiento de Depósito',
      difficulty: 'C1',
      lawReference: 'Artículo 12, apartado 1',
      question: 'Las publicaciones en soporte tangible sujetas a depósito legal deben constituirlo:',
      options: [
        'Después de su distribución, dentro del plazo que determine la Comunidad Autónoma.',
        'Antes de su distribución o venta, ante la oficina de depósito legal correspondiente.',
        'Únicamente cuando la publicación sea vendida.',
        'Antes de solicitar el ISBN, necesariamente.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 12.1 dispone que las publicaciones en soporte tangible deben constituir el depósito legal antes de su distribución o venta, ante la oficina de depósito legal correspondiente.'
    },
    {
      id: 'ley23_2011_q22',
      category: 'Constitución y Procedimiento de Depósito',
      difficulty: 'C1',
      lawReference: 'Artículo 12, apartados 1 a 4',
      question: '¿Cuál de las siguientes afirmaciones sobre la constitución del depósito legal de publicaciones en soporte tangible es INCORRECTA?',
      options: [
        'Cada publicación solo podrá tener un número de depósito legal, sin perjuicio de las excepciones previstas legalmente.',
        'Las obras deberán ser depositadas en su integridad.',
        'La prensa diaria y las publicaciones periódicas son consideradas suscripciones para garantizar su entrega inmediata en las oficinas de depósito legal.',
        'Una obra puede ser depositada únicamente mediante el envío de una parte representativa de sus contenidos.'
      ],
      correctAnswer: 3,
      explanation: 'El art. 12.2 exige expresamente que las obras deberán ser depositadas en su integridad. La opción D afirma incorrectamente que pueden depositarse enviando solo una parte representativa.'
    },
    {
      id: 'ley23_2011_q23',
      category: 'Constitución y Procedimiento de Depósito',
      difficulty: 'C1',
      lawReference: 'Artículo 12, apartado 5',
      question: 'En una publicación electrónica en soporte tangible cuyo uso caduque con el tiempo, la Ley 23/2011 exige que:',
      options: [
        'Se entregue exclusivamente el soporte original.',
        'Se entregue de modo que pueda ser consultada sin límite de tiempo.',
        'Se deposite únicamente el manual de instrucciones.',
        'Se sustituya por una versión impresa.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 12.5 prescribe que en publicaciones electrónicas en soporte tangible cuyo uso caduque con el tiempo, deberán entregarse de modo que puedan ser consultadas sin límite de tiempo.'
    },

    // --- 6. NÚMERO DE DEPÓSITO LEGAL (Q24-Q27) ---
    {
      id: 'ley23_2011_q24',
      category: 'Número de Depósito Legal',
      difficulty: 'C1',
      lawReference: 'Artículo 13, apartado 1',
      question: '¿Cuándo debe solicitarse el número de depósito legal de una obra publicada en soporte tangible?',
      options: [
        'Antes de iniciar su distribución, pero después de finalizar la producción.',
        'Antes de que finalice la producción o impresión del documento.',
        'Una vez realizada la primera venta.',
        'Dentro del mes siguiente a su publicación.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 13.1 estipula que la solicitud del número de depósito legal de una obra publicada en soporte tangible deberá realizarse antes de que finalice la producción o impresión del documento.'
    },
    {
      id: 'ley23_2011_q25',
      category: 'Número de Depósito Legal',
      difficulty: 'C1',
      lawReference: 'Artículo 13, apartado 2',
      question: '¿Cuál de las siguientes combinaciones describe correctamente la composición del número de depósito legal?',
      options: [
        'Siglas DL + ISBN + número de constitución + año.',
        'Siglas DL —o equivalente autonómico— + sigla de la oficina + número de constitución + año en cuatro cifras.',
        'Sigla autonómica + ISBN + año en dos cifras.',
        'Siglas DL + provincia + ISBN + año.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 13.2 detalla la composición reglada del número: siglas DL (o equivalente en lengua cooficial) + sigla de la oficina provincial/autonómica + número de constitución + año en cuatro cifras.'
    },
    {
      id: 'ley23_2011_q26',
      category: 'Número de Depósito Legal',
      difficulty: 'C1',
      lawReference: 'Artículo 13, apartado 5',
      question: '¿Cuál de las siguientes publicaciones lleva su propio número de depósito legal, en lugar de mantener necesariamente el mismo número?',
      options: [
        'Una obra en varios volúmenes.',
        'Un recurso continuado.',
        'Una edición paralela en distintos soportes.',
        'Una publicación seriada.'
      ],
      correctAnswer: 2,
      explanation: 'El art. 13.5 indica que las ediciones paralelas en distintos soportes llevarán cada una su propio número de depósito legal, a diferencia de las publicaciones seriadas o las obras en varios volúmenes que mantienen el mismo número.'
    },
    {
      id: 'ley23_2011_q27',
      category: 'Número de Depósito Legal',
      difficulty: 'C1',
      lawReference: 'Artículo 14, apartado 1',
      question: 'En una publicación en formato de libro, ¿dónde debe figurar el número de depósito legal?',
      options: [
        'Exclusivamente en la portada.',
        'En la misma hoja de impresión que el ISBN, pudiendo consignarse en el reverso de la portada o en la contraportada.',
        'Exclusivamente en la mancheta.',
        'En cualquier lugar no visible siempre que aparezca en los metadatos.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 14.1 señala que en publicaciones en formato de libro el número de depósito legal debe figurar en la misma hoja de impresión que el ISBN, pudiendo consignarse en el reverso de la portada o en la contraportada.'
    },

    // --- 7. RÉGIMEN SANCIONADOR Y PROCEDIMIENTO (Q28-Q30) ---
    {
      id: 'ley23_2011_q28',
      category: 'Régimen Sancionador y Procedimiento',
      difficulty: 'C1',
      lawReference: 'Artículo 15',
      question: 'Si se incumple la obligación de constituir el depósito legal de una publicación en soporte tangible, la Oficina de Depósito Legal:',
      options: [
        'Debe imponer inmediatamente una multa sin requerimiento previo.',
        'Requerirá a la persona responsable para que lo constituya en un plazo máximo de un mes.',
        'Dispone de un plazo máximo de tres meses para requerirlo.',
        'Remitirá necesariamente el expediente a la Biblioteca Nacional de España.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 15 dispone que si se incumple la obligación de constituir el depósito, la oficina de depósito legal requerirá a la persona obligada para que lo constituya en un plazo máximo de un mes.'
    },
    {
      id: 'ley23_2011_q29',
      category: 'Régimen Sancionador y Procedimiento',
      difficulty: 'C1',
      lawReference: 'Artículo 17, apartado 3, letra b)',
      question: '¿Cuál de las siguientes conductas constituye una infracción grave?',
      options: [
        'La ausencia de constitución del depósito legal en los plazos establecidos.',
        'La distribución de ejemplares sin número de depósito legal.',
        'La manipulación fraudulenta o dolosa del número de depósito legal.',
        'La falta de entrega de un ejemplar defectuoso cuando sea requerido.'
      ],
      correctAnswer: 2,
      explanation: 'El art. 17.3.b) califica expresamente como infracción grave la manipulación fraudulenta o dolosa del número de depósito legal. Las demás conductas mencionadas son leves (art. 17.2).'
    },
    {
      id: 'ley23_2011_q30',
      category: 'Régimen Sancionador y Procedimiento',
      difficulty: 'C1',
      lawReference: 'Artículo 18, apartado 1',
      question: '¿Cuál de las siguientes afirmaciones sobre las sanciones de la Ley 23/2011 es correcta?',
      options: [
        'Las infracciones leves se sancionan con multa de 500 a 1.000 euros y las graves de 1.001 a 10.000 euros.',
        'Las infracciones leves se sancionan con multa de 1.000 a 2.000 euros y las graves de 2.001 a 30.000 euros.',
        'Las infracciones leves y graves tienen una multa única de hasta 30.000 euros.',
        'La imposición de una sanción sustituye la obligación de constituir el depósito legal.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 18.1 fija las sanciones: multa de 1.000 a 2.000 euros para infracciones leves, y multa de 2.001 a 30.000 euros para infracciones graves.'
    }
  ]
};

if (typeof window !== 'undefined') {
  window.LEY_23_2011 = LEY_23_2011;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LEY_23_2011;
}
