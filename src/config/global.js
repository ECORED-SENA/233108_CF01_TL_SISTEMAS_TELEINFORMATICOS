export default {
  global: {
    Name: 'Herramientas informáticas en las organizaciones',
    Description:
      'Este componente formativo tiene como fin dar a conocer cada una de las herramientas informáticas que se requieren para el óptimo manejo de una organización.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistemas informáticos en una organización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Herramientas informáticas para la organización',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Funcionalidades de los dispositivos informáticos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Implementación de componentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Instalación de herramientas informáticas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Búsqueda de información técnica',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Gestión de cuentas corporativas de sistemas informáticos',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/233108_CF01_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: '<i>Software</i>',
      significado:
        'programas de computadora, instrucciones o procedimientos que se ejecutan para operar y satisfacer las necesidades específicas de un usuario.',
    },
    {
      termino: 'Bases de datos',
      significado:
        'conjunto ordenado de datos personales referentes a una persona física identificada o identificable, condicionados a criterios determinados, con independencia de la forma o modalidad de su creación, tipo de soporte, procesamiento, almacenamiento y organización.',
    },
    {
      termino: 'Código abierto',
      significado:
        'se refiere al código fuente del <i>software</i> que es abiertamente accesible y que puede ser cambiado y distribuido por cualquier persona.',
    },
    {
      termino: 'Desarrollo tecnológico',
      significado:
        'trabajo sistemático fundamentado en los conocimientos obtenidos por la investigación o la experiencia práctica, que se dirige a la fabricación de nuevos materiales, productos o dispositivos; a establecer nuevos procedimientos, sistemas y servicios, o a mejorar considerablemente los ya existentes.',
    },
    {
      termino: 'Equipos de cómputo',
      significado:
        'dispositivo electrónico que almacena y procesa información para después mostrarla en una interfaz a la disposición del usuario, permite una interacción del <i>hardware</i> (parte tangible) con el software (parte intangible).',
    },
    {
      termino: '<i>Hardware</i>',
      significado:
        'conjunto de elementos físicos o materiales que constituyen una computadora o un sistema informático.',
    },
    {
      termino: 'Licencia de <i>software</i>',
      significado:
        'contrato en donde el usuario acepta los términos y condiciones del fabricante para poder hacer uso del <i>software</i>.',
    },
    {
      termino: 'Mantenimiento de <i>software</i>',
      significado:
        'es la modificación de un producto de software después de la entrega, para corregir errores, mejorar el rendimiento, u otros atributos.',
    },
    {
      termino: 'Producto de <i>software</i>',
      significado:
        'se refiere al sistema (código fuente), documentación asociada y datos necesarios para el funcionamiento del <i>software</i> que se desarrolló y que se entrega a un cliente o usuario.',
    },
    {
      termino: 'Pruebas de <i>software</i>',
      significado:
        'proceso de analizar un componente de <i>software</i> u operar un sistema que ayuda a detectar errores o defectos y a identificar la completitud o diferencias con respecto a los requerimientos y acuerdos establecidos con la finalidad de evaluar la calidad del <i>software</i>.',
    },
    {
      termino: 'Redes de Computadores',
      significado:
        'también llamada red de ordenadores o red informática. Es un conjunto de equipos conectados por medio de cables, señales, ondas o cualquier otro método de transporte de datos, que comparten información (archivos), recursos (CD-ROM, impresoras, etc.)',
    },
    {
      termino: 'Seguridad de la información',
      significado:
        'la capacidad de preservar la confidencialidad, integridad y disponibilidad de la información, así como la autenticidad, confiabilidad, trazabilidad y no repudio de la misma.',
    },
    {
      termino: 'Servicio de autenticación',
      significado:
        'servicio de seguridad que verifica la identidad alegada por una entidad.',
    },
    {
      termino: 'Sistema de información',
      significado:
        'conjunto de aplicaciones, servicios, activos de tecnología de la información u otros componentes que manejan información.',
    },
    {
      termino: 'Sistema Operativo',
      significado:
        'un sistema operativo es el <i>software</i> o programa más importante que se ejecuta en un computador, nos permite usarlo y darle órdenes para que haga lo que necesitamos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Las mejores herramientas de software para la gestión de organizaciones. (2021) ',
      link: '',
    },
    {
      referencia:
        'Salem Al-Mamary, Yaser Hasan & Shamsuddin, Alina & Aziati, A. ResearchGate. El papel de los diferentes tipos de sistemas de información en las organizaciones empresariales. (2019). ',
      link: 'https://www.researchgate.net/publication/264556488_The_Role_of_Different_Types_of_Information_Systems_In_Business_Organizations_A_Review',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del Ecosistema Virtual de Recursos Educativos Digitales ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ronald Alexander Vacca Ascanio',
          cargo: 'Experto temático',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander ',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseño instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander ',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesoría metodológica y pedagógica',
          centro: 'Centro de Diseño y MetrologíaRegional - Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo de desarrollo curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuación instruccional',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jesús Antonio Vecino Valero',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Urueta Álvarez',
          cargo: 'Desarrollo <i>full stack</i>',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo:
            'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
