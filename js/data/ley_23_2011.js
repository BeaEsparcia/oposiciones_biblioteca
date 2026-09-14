/**
 * Ley 23/2011, de 29 de julio, de depósito legal.
 * 
 * Publicación oficial: Boletín Oficial del Estado (BOE) núm. 182, de 30 de julio de 2011.
 * Banco Exhaustivo de 30 Preguntas calibradas para Oposiciones de Bibliotecas (Nivel C1).
 * Cobertura completa de los 20 Artículos (incluido Art. 10 bis), 5 Capítulos, 3 D. Adicionales, 1 D. Derogatoria y 4 D. Finales.
 * Fuente estricta: Texto consolidado oficial del BOE.
 */

const LEY_23_2011 = {
  id: 'ley_23_2011',
  title: 'Ley 23/2011, de 29 de julio, de depósito legal',
  shortTitle: 'Ley 23/2011 (Depósito Legal)',
  jurisdiction: 'Estatal',
  category: 'Legislación Estatal',
  officialReference: 'BOE núm. 182, de 30 de julio de 2011',
  structureSummary: '20 Artículos, 5 Capítulos, 3 D. Adicionales, 1 D. Derogatoria y 4 D. Finales',
  categories: [
    'Disposiciones Generales y Definiciones',
    'Publicaciones Sujetas y Exclusiones',
    'Sujetos Obligados y Tramitación',
    'Centros Depositarios y de Conservación',
    'Constitución y Procedimiento de Depósito',
    'Número de Depósito Legal y Ejecución',
    'Régimen Sancionador y Disposiciones'
  ],
  questions: [
    // --- 1. DISPOSICIONES GENERALES Y DEFINICIONES (Q01-Q05) ---
    {
      id: 'ley23_2011_q01',
      category: 'Disposiciones Generales y Definiciones',
      difficulty: 'C1',
      lawReference: 'Artículo 1',
      question: 'Conforme al artículo 1 de la Ley 23/2011, de 29 de julio, de depósito legal, ¿cómo se define y cuál es el objeto de esta institución jurídica?',
      options: [
        'Es un tributo especial de carácter estatal destinado exclusivamente a financiar las adquisiciones patrimoniales de la Biblioteca Nacional de España.',
        'Es la institución jurídica que permite a la Administración General del Estado y a las Comunidades Autónomas recoger ejemplares de las publicaciones de todo tipo reproducidas en cualquier clase de soporte y destinadas por cualquier procedimiento a su distribución o comunicación pública, sea esta gratuita u onerosa, con el fin de preservar el patrimonio bibliográfico, sonoro, visual, audiovisual y digital y permitir el acceso al mismo.',
        'Es el registro administrativo que otorga con carácter constitutivo los derechos morales y patrimoniales de autor sobre las obras impresas en territorio español.',
        'Es el procedimiento obligatorio por el cual los impresores deben remitir cuatro ejemplares físicos de toda obra antes de solicitar el código ISBN.'
      ],
      correctAnswer: 1,
      explanation: 'El artículo 1 define el depósito legal como la institución jurídica que faculta a la AGE y a las CCAA para recoger ejemplares de publicaciones en cualquier soporte destinadas a distribución o comunicación pública (gratuita u onerosa), con el fin de preservar el patrimonio bibliográfico, sonoro, visual, audiovisual y digital español y permitir el acceso al mismo con fines culturales, de investigación, información y reedición.'
    },
    {
      id: 'ley23_2011_q02',
      category: 'Disposiciones Generales y Definiciones',
      difficulty: 'C1',
      lawReference: 'Artículo 2',
      question: 'Según el artículo 2 de la Ley 23/2011, ¿cuál de los siguientes NO figura entre los objetivos legalmente asignados al depósito legal?',
      options: [
        'Recopilar, almacenar y conservar en los centros de conservación de la AGE y de las CCAA las publicaciones que constituyen el patrimonio bibliográfico, sonoro, visual, audiovisual y digital español.',
        'Recoger la información precisa para confeccionar las estadísticas oficiales sobre dicho patrimonio.',
        'Establecer tarifas obligatorias y universales de préstamo para compensar económicamente a los autores por cada consulta efectuada en los centros de depósito.',
        'Describir el conjunto de la producción bibliográfica, sonora, visual, audiovisual y digital española para difundirla y posibilitar el intercambio de datos con otras agencias o instituciones bibliotecarias.'
      ],
      correctAnswer: 2,
      explanation: 'El artículo 2 enumera cuatro objetivos: 1) recopilar, almacenar y conservar las publicaciones; 2) recoger información para estadísticas oficiales; 3) describir la producción y posibilitar el intercambio de datos; y 4) permitir el acceso y consulta en los centros o mediante bases de datos restringidas respetando la propiedad intelectual. La fijación de tarifas de préstamo no figura en la ley.'
    },
    {
      id: 'ley23_2011_q03',
      category: 'Disposiciones Generales y Definiciones',
      difficulty: 'C1',
      lawReference: 'Artículo 3',
      question: 'De acuerdo con las definiciones del artículo 3 de la Ley 23/2011, ¿qué distingue conceptualmente a una «Publicación electrónica» de una «Publicación en línea»?',
      options: [
        'La publicación electrónica exige siempre un precio de venta al público, mientras que la publicación en línea es necesariamente gratuita.',
        'La publicación electrónica es aquella información o contenido en un soporte electrónico tangible objeto de difusión, mientras que la publicación en línea es la difundida en un soporte electrónico no tangible (incluyendo los sitios web).',
        'La publicación electrónica se limita a grabaciones sonoras y la publicación en línea a textos digitalizados en formato PDF.',
        'La publicación en línea carece de metadatos identificativos, a diferencia de la publicación electrónica que requiere código ISBN.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 3 define «publicación electrónica» como el contenido en soporte electrónico (que en el contexto de la ley alude a soporte tangible como CD, DVD, etc., objeto de difusión), mientras que «publicación en línea» es el contenido difundido en soporte electrónico no tangible (redes telemáticas), especificando expresamente que los sitios web se consideran publicaciones en línea.'
    },
    {
      id: 'ley23_2011_q04',
      category: 'Disposiciones Generales y Definiciones',
      difficulty: 'C1',
      lawReference: 'Artículo 3',
      question: 'En relación con las definiciones técnicas del artículo 3 de la Ley 23/2011, señale la afirmación correcta respecto a los recursos integrables y las ediciones paralelas:',
      options: [
        'Un recurso integrable es una obra que nunca puede ser modificada tras su publicación inicial.',
        'Las ediciones paralelas son el conjunto de ejemplares de un documento que con el mismo contenido se publican en soportes distintos (como revista en papel y microficha, o base de datos en CD y en línea); y los recursos integrables son publicaciones que se completan o modifican por actualizaciones integradas en un todo (como hojas sueltas o sitios web actualizables).',
        'La edición paralela requiere obligatoriamente que uno de los soportes sea exclusivamente audiovisual.',
        'Los sitios web actualizables se clasifican legalmente como publicaciones seriadas de duración determinada.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 3 define textualmente «Edición paralela» como los ejemplares de un documento que con el mismo contenido se publican en soportes distintos, y «Recurso integrable» como la publicación que se completa o modifica por actualizaciones que se integran en un todo (finitos o continuados, citando las hojas sueltas y sitios web actualizables).'
    },
    {
      id: 'ley23_2011_q05',
      category: 'Disposiciones Generales y Definiciones',
      difficulty: 'C1',
      lawReference: 'Artículo 3',
      question: 'Conforme al artículo 3 de la Ley 23/2011, ¿cómo se define a la figura del «Productor» a los efectos de la obligación de depósito legal?',
      options: [
        'La persona que se dedica exclusiva o principalmente a la realización e impresión material de libros en papel.',
        'La persona física o jurídica que asume la iniciativa, la coordinación y el riesgo económico de la producción de obras y contenidos sonoros, visuales, audiovisuales o digitales.',
        'El distribuidor comercial encargado de situar las publicaciones en los puntos de venta al por menor.',
        'El autor titular originario de los derechos morales de propiedad intelectual sobre una obra científica.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 3 define textualmente al «Productor» como la persona física o jurídica que asume la iniciativa, la coordinación y el riesgo económico de la producción de obras y contenidos sonoros, visuales, audiovisuales o digitales.'
    },

    // --- 2. PUBLICACIONES SUJETAS Y EXCLUSIONES (Q06-Q10) ---
    {
      id: 'ley23_2011_q06',
      category: 'Publicaciones Sujetas y Exclusiones',
      difficulty: 'C1',
      lawReference: 'Artículo 4, apartados 1 y 2',
      question: 'Según el artículo 4 (apartados 1 y 2) de la Ley 23/2011, ¿cuál es el principio general sobre las publicaciones y manifestaciones editoriales sujetas a depósito legal?',
      options: [
        'Solo están sujetas las primeras ediciones de libros impresos en papel que superen una tirada comercial de 1.000 ejemplares.',
        'Son objeto de depósito legal todo tipo de publicaciones, producidas o editadas en España, por cualquier procedimiento y distribuidas o comunicadas en cualquier soporte o medio (tangible o intangible), incluyéndose las ediciones, reediciones, versiones, ediciones paralelas y actualizaciones de producciones sonoras, audiovisuales, multimedia y electrónicas.',
        'Quedan sujetas únicamente aquellas publicaciones financiadas total o parcialmente con subvenciones del Ministerio de Cultura.',
        'El depósito legal aplica con carácter exclusivo a las publicaciones que cuenten con número internacional normalizado (ISBN o ISSN).'
      ],
      correctAnswer: 1,
      explanation: 'El art. 4.1 sujeta a depósito todo tipo de publicaciones producidas o editadas en España en cualquier soporte (tangible o intangible), y el art. 4.2 explicita que comprende las ediciones, reediciones, versiones, ediciones paralelas y actualizaciones de publicaciones escritas, sonoras, audiovisuales, multimedia y electrónicas.'
    },
    {
      id: 'ley23_2011_q07',
      category: 'Publicaciones Sujetas y Exclusiones',
      difficulty: 'C1',
      lawReference: 'Artículo 4, apartado 3, letra h)',
      question: 'De acuerdo con la relación de publicaciones y recursos del artículo 4.3 de la Ley 23/2011, ¿cuál de los siguientes elementos está expresamente INCLUIDO como objeto de depósito legal?',
      options: [
        'Los sellos de correo de curso legal.',
        'Los carteles anunciadores y publicitarios, así como la propaganda electoral.',
        'Los calendarios de pared y agendas comerciales de bolsillo.',
        'Las tarjetas de visita y las invitaciones impresas de boda o bautizo.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 4.3.h) incluye expresamente entre las publicaciones objeto de depósito legal a los «carteles anunciadores y publicitarios, así como la propaganda electoral». Los sellos, calendarios, agendas e impresos sociales están excluidos (art. 5).'
    },
    {
      id: 'ley23_2011_q08',
      category: 'Publicaciones Sujetas y Exclusiones',
      difficulty: 'C1',
      lawReference: 'Artículo 4, apartado 3, letras n) y o)',
      question: 'Conforme al artículo 4.3 de la Ley 23/2011, ¿qué especialidad rige para el depósito legal de los videojuegos y de las películas cinematográficas?',
      options: [
        'Los videojuegos están excluidos por considerarse software privativo; y de las películas solo se deposita el guion impreso.',
        'Los videojuegos incluirán todos los contenidos digitales, excluyendo los objetos tridimensionales; y de las películas cinematográficas se deposita copia nueva íntegra en versión original y un ejemplar del material publicitario correspondiente.',
        'Los videojuegos deben depositar obligatoriamente los mandos y consolas físicas de juego; y las películas se entregan únicamente en soporte VHS.',
        'En ambos casos el depósito es voluntario y queda condicionado a que la obra haya obtenido un premio en un festival oficial.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 4.3.n) estipula que los videojuegos «incluirán todos los contenidos digitales, excluyendo los objetos tridimensionales». El art. 4.3.o) exige el depósito de copia nueva íntegra en versión original de películas cinematográficas u obras audiovisuales de productores en España, junto con su material publicitario.'
    },
    {
      id: 'ley23_2011_q09',
      category: 'Publicaciones Sujetas y Exclusiones',
      difficulty: 'C1',
      lawReference: 'Artículo 5, letras a) y e)',
      question: 'En virtud del artículo 5 de la Ley 23/2011, ¿cuál de las siguientes publicaciones en soporte tangible se encuentra EXCLUIDA del depósito legal?',
      options: [
        'Las partituras musicales impresas para orquesta.',
        'Los impresos de carácter social (invitaciones de boda/bautizo, esquelas, tarjetas de visita, carnés de identidad, títulos o diplomas) y los documentos internos de las Administraciones Públicas.',
        'Los libros de texto de Educación Secundaria Obligatoria y Formación Profesional.',
        'Los mapas, planos, atlas y cartas marinas.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 5 enumera las exclusiones, figurando en la letra a) los documentos de las AAPP de carácter interno o susceptibles de integración en expedientes, y en la letra e) los impresos de carácter social (bodas, bautizos, esquelas, tarjetas de visita, carnés, títulos/diplomas). Las partituras, libros de texto y mapas están incluidos en el art. 4.3.'
    },
    {
      id: 'ley23_2011_q10',
      category: 'Publicaciones Sujetas y Exclusiones',
      difficulty: 'C1',
      lawReference: 'Artículo 5, letra i)',
      question: 'Respecto al régimen de exclusiones del artículo 5 de la Ley 23/2011, señale la excepción expresa en la que un catálogo comercial SÍ está sujeto a depósito legal:',
      options: [
        'Los catálogos publicitarios de grandes superficies comerciales de electrodomésticos.',
        'Los catálogos comerciales de editoriales, librerías y subastas.',
        'Los folletos comerciales de venta de vehículos a motor.',
        'Ningún catálogo comercial está sujeto a depósito bajo ninguna circunstancia.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 5.i) excluye los «catálogos comerciales de todo tipo, con la excepción de los catálogos de editoriales, librerías y subastas», los cuales figuran expresamente incluidos como objeto de depósito en el art. 4.3.g).'
    },

    // --- 3. SUJETOS OBLIGADOS Y TRAMITACIÓN (Q11-Q13) ---
    {
      id: 'ley23_2011_q11',
      category: 'Sujetos Obligados y Tramitación',
      difficulty: 'C1',
      lawReference: 'Artículo 6, apartados 1 y 2',
      question: 'De acuerdo con el artículo 6 de la Ley 23/2011, ¿quién es el sujeto obligado principal a constituir el depósito legal y quiénes lo son con carácter subsidiario?',
      options: [
        'El obligado principal es siempre el impresor; y en su defecto, el autor material de la obra.',
        'El obligado principal es el editor que tenga su domicilio, residencia o establecimiento permanente en territorio español (cualquiera que sea el lugar de impresión); y si no reside ni tiene sucursal en España, el depósito deberá ser cumplimentado por el productor, impresor, estampador o grabador con domicilio en España.',
        'La obligación recae exclusivamente en los distribuidores mayoristas que comercialicen los libros en las librerías.',
        'El obligado principal es la biblioteca pública donde se realice la primera presentación del libro.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 6.1 establece que el obligado principal es el editor con domicilio, residencia o establecimiento permanente en España (cualquiera que sea el lugar de impresión). El art. 6.2 añade que cuando no resida ni tenga sucursal en España, o por razón del tipo de recurso proceda, el obligado será el productor, impresor, estampador o grabador domiciliado en España.'
    },
    {
      id: 'ley23_2011_q12',
      category: 'Sujetos Obligados y Tramitación',
      difficulty: 'C1',
      lawReference: 'Artículo 7',
      question: 'Según el artículo 7 de la Ley 23/2011, ¿a quién corresponde la obligación de solicitar el número de depósito legal y cuál es el orden de prelación en defecto del editor para obras en formato tangible?',
      options: [
        'Corresponde siempre a la oficina de depósito legal de oficio en el momento de la catalogación.',
        'Corresponde al editor en obras en formato tangible, o al productor en obras sonoras, visuales, audiovisuales y películas cinematográficas; y en obras tangibles, si el editor no lo solicita, deberán hacerlo en su defecto el productor, impresor, estampador o grabador, en este orden.',
        'Corresponde en exclusiva al distribuidor comercial; y en su defecto, a la entidad de gestión de derechos de autor.',
        'Corresponde al autor de la obra; y en su defecto, a la imprenta municipal.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 7 estipula que están obligados a solicitar el número el editor en obras tangibles y el productor en sonoras, visuales, audiovisuales y cine. Si el editor de obra tangible no lo solicita, lo harán subsidiariamente «el productor, impresor, estampador o grabador, en este orden».'
    },
    {
      id: 'ley23_2011_q13',
      category: 'Sujetos Obligados y Tramitación',
      difficulty: 'C1',
      lawReference: 'Artículo 8, apartados 1 y 2',
      question: 'Conforme al artículo 8 de la Ley 23/2011, en relación con las publicaciones electrónicas y las publicaciones en línea:',
      options: [
        'Los editores de publicaciones en línea deben enviar físicamente un disco duro mensual a la Biblioteca Nacional de España.',
        'La responsabilidad de las publicaciones electrónicas en soporte tangible recae en su editor o productor; mientras que se exonera a los editores de publicaciones en línea de la gestión del depósito, estando obligados a facilitar la recolección automática o transferir las de acceso restringido que les sean solicitadas por los centros de conservación.',
        'Las publicaciones en línea de acceso restringido quedan totalmente exentas de cualquier obligación o transferencia a los centros de conservación.',
        'Los editores de sitios web deben solicitar un número de depósito legal independiente para cada página HTML que publiquen en Internet.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 8.1 responsabiliza al editor/productor de las publicaciones electrónicas tangibles. El art. 8.2 exonera a los editores de publicaciones en línea de gestionar el depósito, obligándolos a permitir la recolección automática en abierto o transferir las de acceso restringido requeridas por los centros de conservación (quienes determinan qué capturar).'
    },

    // --- 4. CENTROS DEPOSITARIOS Y DE CONSERVACIÓN (Q14-Q21) ---
    {
      id: 'ley23_2011_q14',
      category: 'Centros Depositarios y de Conservación',
      difficulty: 'C1',
      lawReference: 'Artículo 9, apartados 1 y 2',
      question: 'En virtud del artículo 9 de la Ley 23/2011, ¿cuál es la distinción orgánica y funcional entre «Centros depositarios» y «Centros de conservación»?',
      options: [
        'Son centros depositarios la BNE y la Filmoteca Española; y centros de conservación las librerías municipales.',
        'Son centros depositarios las oficinas de depósito legal que determinen las Comunidades Autónomas en el ámbito de sus competencias; y son centros de conservación la Biblioteca Nacional de España, la Filmoteca Española y los que determinen las Comunidades Autónomas.',
        'No existe distinción funcional, teniendo todas las bibliotecas de barrio la condición de centros de conservación estatal.',
        'Los centros depositarios son los registros de la propiedad intelectual y los centros de conservación son los archivos históricos provinciales.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 9.1 define a los centros depositarios como las oficinas de depósito legal que determinen las CCAA en su ámbito. El art. 9.2 define como centros de conservación a la Biblioteca Nacional de España, a la Filmoteca Española y a los que determinen las comunidades autónomas en el ámbito de sus competencias.'
    },
    {
      id: 'ley23_2011_q15',
      category: 'Centros Depositarios y de Conservación',
      difficulty: 'C1',
      lawReference: 'Artículo 9, apartados 3 y 4',
      question: 'De acuerdo con los apartados 3 y 4 del artículo 9 de la Ley 23/2011, en relación con las obras depositadas y el archivo digital previo a la impresión:',
      options: [
        'Los autores pueden retirar los ejemplares depositados en cualquier momento si deciden cambiar de editorial.',
        'Una vez constituido el depósito, los interesados no podrán retirar las obras depositadas por el solo hecho de no desear su comunicación pública; y el archivo digital previo a la impresión de libros y recursos continuados será depositado en el servidor del centro de conservación autonómico y en el de la BNE.',
        'El archivo digital previo a la impresión solo es obligatorio para publicaciones infantiles.',
        'Las obras depositadas se destruyen automáticamente una vez transcurridos diez años desde su ingreso en el centro de conservación.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 9.3 prohíbe a los interesados retirar las obras depositadas por el mero hecho de no desear su comunicación pública. El art. 9.4 obliga a los editores a depositar el archivo digital previo a la impresión de libros y recursos continuados (art. 4.3.a y c) en los servidores del centro de conservación autonómico y de la BNE.'
    },
    {
      id: 'ley23_2011_q16',
      category: 'Centros Depositarios y de Conservación',
      difficulty: 'C1',
      lawReference: 'Artículo 10, apartados 2 y 3',
      question: 'Según el artículo 10 de la Ley 23/2011, ¿cuáles son las funciones atribuidas a la Biblioteca Nacional de España en relación con el depósito legal?',
      options: [
        'La fijación de las sanciones económicas en todo el territorio nacional y la gestión del registro mercantil de editoriales.',
        'La elaboración de la Bibliografía española, facilitar la información necesaria para elaborar la estadística de las publicaciones objeto de depósito legal, y ejercer un papel de coordinación, asesoramiento y seguimiento entre los centros conservadores.',
        'La custodia física obligatoria de cuatro ejemplares en papel de todos los folletos comerciales editados en España.',
        'La aprobación preceptiva de los estatutos de las asociaciones profesionales de impresores.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 10.2 encomienda a la BNE elaborar la Bibliografía española y facilitar información para la estadística de publicaciones objeto de depósito. El art. 10.3 añade que ejercerá un papel de coordinación y asesoramiento entre los centros conservadores, así como de seguimiento del cumplimiento normativo.'
    },
    {
      id: 'ley23_2011_q17',
      category: 'Centros Depositarios y de Conservación',
      difficulty: 'C1',
      lawReference: 'Artículo 10, apartado 4, letras a), b) y c)',
      question: 'Conforme al artículo 10.4 de la Ley 23/2011, ¿cuántos ejemplares conserva la Biblioteca Nacional de España de las primeras ediciones de libros en papel, de sus diversas encuadernaciones y de las partituras o mapas?',
      options: [
        'Tres ejemplares de libros, dos de cada encuadernación y un ejemplar de partituras.',
        'Dos ejemplares de libros en papel (+ archivo digital previo si existe), un ejemplar de cada encuadernación si existen diversas de una misma edición, y dos ejemplares de partituras, mapas, planos o atlas.',
        'Un único ejemplar de libros y ningún ejemplar de partituras o mapas.',
        'Cuatro ejemplares de todas las publicaciones impresas sin distinción de soporte.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 10.4 establece: letra a) 2 ejemplares de primeras ediciones y reediciones de libros/folletos/multimedia en papel (+ archivo digital previo); letra b) 1 ejemplar de cada encuadernación; letra c) 2 ejemplares de partituras, mapas, planos, atlas o similares.'
    },
    {
      id: 'ley23_2011_q18',
      category: 'Centros Depositarios y de Conservación',
      difficulty: 'C1',
      lawReference: 'Artículo 10, apartado 4, letras d), e), l), m) y n)',
      question: 'En relación con las entregas de ejemplares a la Biblioteca Nacional de España (art. 10.4 de la Ley 23/2011), señale la regla correcta para prensa, libros de texto y marcapáginas:',
      options: [
        'De la prensa se entregan siempre cinco ejemplares en papel; y los libros de texto están exentos de entrega a la BNE.',
        'De la prensa y revistas se entrega un ejemplar en papel y otro en archivo digital previo (o dos en papel si no se aporta el digital); de los libros de texto se entrega un ejemplar; y de carteles, postales de paisajes/ciudades y marcapáginas se entrega un ejemplar.',
        'De los marcapáginas y carteles se entregan tres ejemplares obligatorios en papel couché.',
        'De los facsímiles y libros de bibliófilo se entregan cuatro ejemplares numerados.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 10.4.d) exige de prensa/revistas 1 en papel y 1 en archivo digital (o 2 en papel si no hay digital); la letra e) fija 1 ejemplar de libros de texto; y las letras l), m) y n) fijan 1 ejemplar de postales de paisajes/ciudades, carteles y marcapáginas respectivamente.'
    },
    {
      id: 'ley23_2011_q19',
      category: 'Centros Depositarios y de Conservación',
      difficulty: 'C1',
      lawReference: 'Artículo 10, apartado 5',
      question: 'De acuerdo con el artículo 10.5 de la Ley 23/2011, ¿de cuál de las siguientes publicaciones NO se entregará ningún ejemplar a la Biblioteca Nacional de España?',
      options: [
        'De las partituras musicales y los atlas geográficos.',
        'De las postales de paisajes y ciudades.',
        'De las láminas, cromos, naipes y tarjetas de felicitación; de las aplicaciones informáticas; de las guías sanitarias de sociedades médicas; y de los temarios de oposiciones editados por las propias academias que imparten la enseñanza.',
        'De las grabaciones sonoras y documentos audiovisuales.'
      ],
      correctAnswer: 2,
      explanation: 'El art. 10.5 enumera expresamente los supuestos en que no se entrega ningún ejemplar a la BNE: láminas, cromos, naipes, tarjetas de felicitación y postales (salvo las de paisajes y ciudades); aplicaciones informáticas; guías sanitarias sobre profesionales/servicios médicos editadas por las propias sociedades; y temarios de oposiciones editados por las propias academias.'
    },
    {
      id: 'ley23_2011_q20',
      category: 'Centros Depositarios y de Conservación',
      difficulty: 'C1',
      lawReference: 'Artículo 10 bis, apartado 2, letra b)',
      question: 'Según el artículo 10 bis de la Ley 23/2011, ¿qué materiales deben recibir la Filmoteca Española y las Filmotecas de las Comunidades Autónomas en el caso de películas cinematográficas rodadas en digital destinadas a salas de cine?',
      options: [
        'Una copia en cinta magnética VHS sin sonido.',
        'Dos copias: un DCP no encriptado de la versión original y un DCDM o equivalentes de alta resolución y buena calidad u otros formatos de preservación estandarizados.',
        'Exclusivamente el cartel publicitario en papel tamaño estándar.',
        'Una memoria USB comercial protegida con contraseña de distribuidor.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 10 bis.2.b) exige en películas cinematográficas rodadas en digital para salas de cine: «dos copias: un DCP no encriptado de la versión original y un DCDM o equivalentes de alta resolución y de buena calidad u otros formatos de preservación que se incluyan en una norma de estandarización».'
    },
    {
      id: 'ley23_2011_q21',
      category: 'Centros Depositarios y de Conservación',
      difficulty: 'C1',
      lawReference: 'Artículo 11, apartados 1 y 2',
      question: 'Conforme al artículo 11 de la Ley 23/2011, ¿qué funciones corresponden a las Oficinas de Depósito Legal de las Comunidades Autónomas?',
      options: [
        'Recibir los ejemplares objeto de depósito para facilitarlos a los centros de conservación, y ejercer la función inspectora en su respectiva demarcación en los términos de la normativa autonómica.',
        'Dictar decretos legislativos en materia de propiedad intelectual.',
        'Asignar los números de ISSN a nivel internacional en coordinación con la UNESCO.',
        'Elaborar directamente las estadísticas del Instituto Nacional de Estadística (INE).'
      ],
      correctAnswer: 0,
      explanation: 'El art. 11.1 señala que las oficinas de depósito legal de las CCAA reciben los ejemplares y los facilitan a los centros de conservación. El art. 11.2 añade que los responsables de estas oficinas ejercerán la función inspectora en su demarcación según la normativa autonómica.'
    },

    // --- 5. CONSTITUCIÓN Y PROCEDIMIENTO DE DEPÓSITO (Q22-Q23) ---
    {
      id: 'ley23_2011_q22',
      category: 'Constitución y Procedimiento de Depósito',
      difficulty: 'C1',
      lawReference: 'Artículo 12, apartados 1, 3 y 5',
      question: 'En relación con la constitución del depósito de publicaciones en soporte tangible (artículo 12 de la Ley 23/2011), señale la afirmación correcta:',
      options: [
        'Las publicaciones pueden distribuirse y venderse antes de constituir el depósito legal si se cuenta con un permiso provisional del ayuntamiento.',
        'El depósito debe constituirse ante la oficina de la Comunidad Autónoma donde el editor tenga su sede social antes de su distribución o venta (no pudiendo distribuirse en caso de incumplimiento), las obras deben depositarse íntegras, y si se presenta un ejemplar incompleto o defectuoso, el obligado debe depositar uno nuevo completo a requerimiento de la oficina.',
        'La prensa diaria queda exenta del régimen de entrega inmediata en las oficinas de depósito legal.',
        'Si un libro tiene defectos de imprenta, la oficina de depósito legal debe subsanarlos por sus propios medios sin requerir al editor.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 12.1 exige constituir el depósito ante la oficina de la CCAA de la sede del editor antes de la distribución o venta (la obra no puede distribuirse si se incumple); el art. 12.3 exige que las obras se depositen en su integridad; y el art. 12.5 obliga a reponer ejemplares incompletos o defectuosos previo requerimiento en el plazo fijado.'
    },
    {
      id: 'ley23_2011_q23',
      category: 'Constitución y Procedimiento de Depósito',
      difficulty: 'C1',
      lawReference: 'Artículo 13, apartados 1, 2 y 3',
      question: 'De acuerdo con el artículo 13 de la Ley 23/2011, ¿qué requisitos técnicos son exigibles para la constitución del depósito de publicaciones electrónicas en soporte tangible?',
      options: [
        'Deben estar obligatoriamente encriptadas con clave de acceso restringida al público.',
        'Deben ser depositadas de modo que no sea necesaria la introducción de clave alguna para su lectura, acompañadas de todos los manuales y software necesario, facilitando la información para transferir datos al soporte de conservación; y aquellas cuyo uso caduque en el tiempo deben entregarse de modo que puedan ser consultadas sin límite de tiempo.',
        'Deben convertirse necesariamente a formato impreso en papel antes de su entrega.',
        'Quedan exentas de entregar manuales de usuario y software complementario.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 13.1 exige que se depositen sin clave de lectura y con manuales/software para investigación y conservación; el art. 13.2 obliga a facilitar la transferencia de datos; y el art. 13.3 dispone que las publicaciones electrónicas con caducidad temporal se entregarán para su consulta sin límite de tiempo.'
    },

    // --- 6. NÚMERO DE DEPÓSITO LEGAL Y EJECUCIÓN (Q24-Q26) ---
    {
      id: 'ley23_2011_q24',
      category: 'Número de Depósito Legal y Ejecución',
      difficulty: 'C1',
      lawReference: 'Artículo 14, apartados 1 y 2',
      question: 'Según el artículo 14 (apartados 1 y 2) de la Ley 23/2011, ¿en qué momento debe solicitarse el número de depósito legal en soporte tangible y cuál es su estructura reglada?',
      options: [
        'Se solicita dentro del mes siguiente a la venta del libro; y consta únicamente del código ISBN seguido del año en dos cifras.',
        'Se solicita antes de que finalice la producción o impresión del documento; y está compuesto por las siglas DL (o equivalente autonómico), la sigla de la Oficina, el número de constitución y el año en cuatro cifras (separadas por espacio, salvo el año precedido de guion), cerrándose la numeración al finalizar cada año.',
        'Se solicita antes de redactar el manuscrito original; y se compone del NIF del editor y la fecha de registro.',
        'Se solicita tras recibir la autorización del Registro de la Propiedad Intelectual; y su numeración es continua sin cierre anual.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 14.1 fija la solicitud antes de que finalice la producción o impresión. El art. 14.2 detalla la estructura: siglas DL (o equivalente autonómico) + espacio + sigla Oficina + espacio + número + guion + año en 4 cifras. Al finalizar cada año se cierra la numeración y se reinicia.'
    },
    {
      id: 'ley23_2011_q25',
      category: 'Número de Depósito Legal y Ejecución',
      difficulty: 'C1',
      lawReference: 'Artículo 14, apartados 3 y 4',
      question: 'Conforme al artículo 14 (apartados 3 y 4) de la Ley 23/2011, ¿en cuál de los siguientes supuestos la publicación debe llevar un número de depósito legal PROPIO y DIFERENCIADO?',
      options: [
        'Los diferentes números o fascículos de una publicación periódica o seriada.',
        'Las obras que consten de varios volúmenes o documentos.',
        'Las ediciones paralelas en distintos soportes (y cada una de las diferentes ediciones de una misma obra, salvo las diferentes ediciones de los diarios que van bajo el mismo número).',
        'Las diferentes reimpresiones idénticas de un mismo libro sin modificación alguna.'
      ],
      correctAnswer: 2,
      explanation: 'El art. 14.4 estipula que llevarán su propio número de depósito legal las ediciones paralelas en distintos soportes y cada una de las ediciones diferentes de una misma obra (con la salvedad de las diferentes ediciones de los diarios). En cambio, los recursos continuados (art. 14.3.a) y las obras en varios volúmenes (art. 14.3.b) mantienen un número único.'
    },
    {
      id: 'ley23_2011_q26',
      category: 'Número de Depósito Legal y Ejecución',
      difficulty: 'C1',
      lawReference: 'Artículo 14, apartado 5 y Artículo 15',
      question: 'En virtud de los artículos 14.5 y 15 de la Ley 23/2011, ¿dónde debe figurar el número de depósito legal en libros y periódicos, y qué plazo otorga la oficina en caso de ejecución subsidiaria por incumplimiento?',
      options: [
        'En libros en cualquier página interior oculta; y la oficina concede un plazo improrrogable de seis meses.',
        'En libros en la misma hoja de impresión que el ISBN (pudiendo consignarse en el reverso de la portada o en la contraportada) y en periódicos en la mancheta; y en caso de incumplimiento, la Oficina requerirá a la persona responsable para que proceda en el plazo máximo de un mes.',
        'En la faja promocional exterior del libro; y el plazo de requerimiento es de diez días hábiles.',
        'Exclusivamente en el lomo exterior del libro; y la oficina sanciona inmediatamente sin trámite de requerimiento previo.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 14.5 exige consignar el número en la misma hoja del ISBN (reverso de portada o contraportada en libros) y en la mancheta en periódicos. El art. 15 regula la ejecución subsidiaria: si se incumple la constitución, la Oficina de Depósito Legal requerirá al responsable para que proceda en el plazo máximo de un mes.'
    },

    // --- 7. RÉGIMEN SANCIONADOR Y DISPOSICIONES (Q27-Q30) ---
    {
      id: 'ley23_2011_q27',
      category: 'Régimen Sancionador y Disposiciones',
      difficulty: 'C1',
      lawReference: 'Artículo 16, apartado 2 y Artículo 18',
      question: 'De acuerdo con los artículos 16, 17 y 18 de la Ley 23/2011, ¿a quién corresponde la potestad sancionadora en materia de depósito legal y cuáles son las conductas tipificadas como infracciones LEVES?',
      options: [
        'Corresponde al Ministerio de Hacienda; y es leve la manipulación dolosa del número de depósito.',
        'Corresponde a los órganos competentes de las Comunidades Autónomas; y constituyen infracciones leves la ausencia de constitución del depósito legal en los plazos y con el número de ejemplares requeridos, y la distribución de ejemplares que carezcan del número correspondiente o que no hayan sido objeto de depósito.',
        'Corresponde a los Juzgados de lo Contencioso-Administrativo; y es leve la obstrucción física a los inspectores.',
        'Corresponde a la Biblioteca Nacional de España; y es leve la negativa de acceso a publicaciones electrónicas restringidas.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 16.2 atribuye la potestad sancionadora a los órganos competentes de las CCAA. El art. 18 tipifica como infracciones leves: a) la ausencia de constitución en plazos y número de ejemplares; y b) la distribución de ejemplares sin número o no depositados.'
    },
    {
      id: 'ley23_2011_q28',
      category: 'Régimen Sancionador y Disposiciones',
      difficulty: 'C1',
      lawReference: 'Artículo 19 y Artículo 20, apartados 1, 2 y 4',
      question: 'Según los artículos 19 y 20 de la Ley 23/2011, ¿cuál de las siguientes conductas constituye una infracción GRAVE y cuáles son las cuantías de las sanciones previstas?',
      options: [
        'El retraso de un día en la solicitud del número; con multa fija de 100 euros.',
        'La manipulación fraudulenta o dolosa del número de depósito legal, la reincidencia en leves, los datos falsos, la obstrucción inspectora y la negativa a permitir acceso a publicaciones en línea restringidas; sancionándose las leves con multa de 1.000 a 2.000 euros y las graves de 2.001 a 30.000 euros (sin que la sanción exima de constituir el depósito).',
        'La venta de libros con descuento comercial superior al 5%; con multa de 50.000 a 100.000 euros.',
        'La publicación de libros anónimos; con sanción de cierre definitivo de la editorial.'
      ],
      correctAnswer: 1,
      explanation: 'El art. 19 enumera las infracciones graves (manipulación dolosa del número, reincidencia, datos falsos, obstrucción y negativa en publicaciones en línea restringidas). El art. 20 fija multas de 1.000 a 2.000 € para leves y de 2.001 a 30.000 € para graves, aclarando que la sanción no exime de constituir el depósito.'
    },
    {
      id: 'ley23_2011_q29',
      category: 'Régimen Sancionador y Disposiciones',
      difficulty: 'C1',
      lawReference: 'Disposiciones Adicionales Segunda y Tercera',
      question: 'En relación con las Disposiciones Adicionales de la Ley 23/2011, señale la previsión correspondiente al órgano consultivo (DA 2.ª) y a las Comunidades Autónomas con lengua cooficial (DA 3.ª):',
      options: [
        'El órgano consultivo estará integrado exclusivamente por editores privados; y las obras en lengua cooficial están exentas de depósito fuera de su territorio.',
        'Se creará un órgano consultivo en materia de depósito legal (integrado, entre otros, por un representante de cada Comunidad Autónoma y uno de la Junta de Coordinación de Publicaciones Oficiales de la AGE); y quienes produzcan materiales en lengua oficial distinta a la española deberán librar un ejemplar a la biblioteca pública o centro que determinen las CCAA con lengua cooficial, aun produciéndose en territorio donde la única lengua oficial sea la del Estado.',
        'El órgano consultivo dictará sentencias vinculantes; y el depósito de obras en lengua cooficial requiere autorización previa del Ministerio de Asuntos Exteriores.',
        'Se suprime la entrega de ejemplares a bibliotecas públicas autonómicas en favor de un archivo digital centralizado en Bruselas.'
      ],
      correctAnswer: 1,
      explanation: 'La DA 2.ª prevé el órgano consultivo con representación de cada CCAA y de la Junta de Coordinación de Publicaciones Oficiales de la AGE. La DA 3.ª obliga a entregar un ejemplar a la biblioteca pública designada por las CCAA con lengua cooficial para materiales en dicha lengua, aun cuando la producción se realice en territorio con lengua única estatal.'
    },
    {
      id: 'ley23_2011_q30',
      category: 'Régimen Sancionador y Disposiciones',
      difficulty: 'C1',
      lawReference: 'Disposiciones Derogatoria Única, Final Primera y Final Cuarta',
      question: 'Conforme a las Disposiciones de la Ley 23/2011, ¿qué normativa quedó expresamente derogada, cuál es el título competencial constitucional y qué especialidad rige en su entrada en vigor?',
      options: [
        'Quedó derogada la Ley 10/2007 de Bibliotecas; se fundamenta en el artículo 149.1.1.ª de la CE; y entró en vigor al día siguiente de su publicación en el BOE.',
        'Quedan derogadas expresamente las Órdenes del MEC de 30 de octubre de 1971 y de 20 de febrero de 1973; se dicta al amparo del artículo 149.2 de la CE (y art. 149.1.31.ª para estadística estatal); y entró en vigor a los seis meses de su publicación en el BOE, salvo los artículos 8.1 y 13 (publicaciones electrónicas) cuya eficacia se difirió a la entrada en vigor del Real Decreto previsto en la disposición final tercera.',
        'Quedó derogado el Código Civil en materia de contratos editoriales; y su vigencia fue diferida diez años en todo el territorio nacional.',
        'Derogó todas las leyes de bibliotecas autonómicas aprobadas con anterioridad a 1978.'
      ],
      correctAnswer: 1,
      explanation: 'La DD Única deroga las Órdenes Ministeriales de 1971 y 1973. La DF 1.ª invoca el art. 149.2 CE (servicio de la cultura) y art. 149.1.31.ª (estadística). La DF 4.ª fijó la vacatio legis general de 6 meses tras su publicación en el BOE, supeditando la entrada en vigor de los arts. 8.1 y 13 a la aprobación del Real Decreto sobre publicaciones electrónicas (DF 3.ª).'
    }
  ]
};

if (typeof window !== 'undefined') {
  window.LEY_23_2011 = LEY_23_2011;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LEY_23_2011;
}
