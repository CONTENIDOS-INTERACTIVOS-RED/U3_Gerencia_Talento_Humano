export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad:
      'Tendencias emergentes de la gestión integral de talento humano',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Tendencias de la gestión integral de talento humano',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Trabajo híbrido y remoto',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Diversidad, Equidad e Inclusión (DEI)',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Transformación digital en la gestión del talento humano',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: '<em>Employer branding</em> (marca empleadora)',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Human Resources Business Partner (HRBP)',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestión integral del cambio y liderazgo ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿Qué es la gestión del cambio?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'La importancia del liderazgo en la gestión del cambio',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Desafíos en la gestión del cambio',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'El papel de los stakeholders en la gestión del cambio',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Factores que impulsan el cambio organizacional',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alles, M. A. (2008). Comportamiento organizacional: cómo lograr un cambio cultural a través de gestión por competencias: ( ed.). Buenos Aires, Argentina: Ediciones Granica.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/66671?page=22',
    },
    {
      referencia:
        'Gallardo Gallardo, E. (2015). ¿Cómo gestionar el cambio en una organización?: ( ed.). Barcelona, Spain: Editorial UOC.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/57894?page=18',
    },
    {
      referencia:
        'Guerrero Bejarano, M. A. Izaguirre Olmedo, J. y Méndez Bravo, J. (2021). La administración aplicada al talento humano, operaciones en servicios financieros, hoteleros y de comunicación: su adaptación post COVID: ( ed.). Quito, Universidad Internacional del Ecuador.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/19854?page=108',
    },
    {
      referencia:
        'Menéndez Cuenca, J. L. (2023). Principios del coaching: (3 ed.). Madrid, Bubok Publishing S.L.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/26054?page=34',
    },
    {
      referencia:
        'Montenegro Timón, J. D. García Rubiano, M. & Babativa Novoa, A. (2024). Horizontes laborales: exploración de estrategias innovadoras en la gestión de talento humano: (1 ed.). Universidad Católica de Colombia.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/27955?page=71',
    },
    {
      referencia:
        'Rodríguez del Tronco, J. Rodríguez del Tronco, R. & Vico García, N. (2017). Smart feedback: conversaciones para el desarrollo del talento: (1 ed.). LID Editorial España.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/26969?page=28',
    },
  ],
  glosario: [
    {
      termino: 'Adaptabilidad',
      significado:
        'Capacidad de ajustarse a cambios en el entorno empresarial.',
    },
    {
      termino: 'Análisis de datos',
      significado:
        'Proceso de examinar datos para tomar decisiones informadas en la gestión del talento humano.',
    },
    {
      termino: 'Ambiente laboral',
      significado:
        'Espacio en el cual los empleados realizan sus actividades laborales, influenciado por la cultura organizacional.',
    },
    {
      termino: 'Bienestar',
      significado:
        'Estado de salud física, mental y emocional de los empleados, que debe ser promovido por las organizaciones',
    },
    {
      termino: 'Beneficios extralegales',
      significado:
        'Ventajas adicionales al salario que pueden ofrecer las empresas a sus empleados.',
    },
    {
      termino: 'Coaching',
      significado:
        'Proceso estructurado que ayuda a individuos a alcanzar objetivos específicos mediante reflexión y acción',
    },
    {
      termino: 'Colaboración',
      significado:
        'Trabajo conjunto entre empleados y equipos para alcanzar objetivos comunes.',
    },
    {
      termino: 'Competencias',
      significado:
        'Habilidades y capacidades que los empleados desarrollan para cumplir con sus responsabilidades laborales',
    },
    {
      termino: 'Cultura organizacional',
      significado:
        'Conjunto de valores, creencias y comportamientos que caracterizan a una organización',
    },
    {
      termino: 'Diversidad, equidad e inclusión (DEI)',
      significado:
        'Principios que buscan promover un entorno laboral donde se valore la diversidad y se garantice la equidad.',
    },
    {
      termino: 'Employer branding',
      significado:
        'Estrategia de construcción y gestión de la marca empleadora para atraer y retener talento.',
    },
    {
      termino: 'Estrategia organizacional',
      significado:
        'Plan que define los objetivos a largo plazo y las acciones necesarias para alcanzarlos.',
    },
    {
      termino: 'Feedback',
      significado:
        'Retroalimentación sobre el desempeño que permite a los empleados mejorar sus habilidades',
    },
    {
      termino: 'Gestión del cambio',
      significado:
        'Proceso de planificación e implementación de cambios dentro de una organización.',
    },
    {
      termino: 'Innovación',
      significado:
        'Introducción de nuevas ideas, productos o procesos que mejoran la organización.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'Capacidad de guiar y motivar a un equipo hacia el logro de objetivos.',
    },
    {
      termino: 'Mentoría',
      significado:
        'Proceso en el que una persona experimentada (mentor) guía a otra (mentee) en su desarrollo personal y profesional',
    },
    {
      termino: 'Propuesta de Valor del Empleado (EVP)',
      significado:
        'Conjunto de beneficios y oportunidades que una empresa ofrece a sus empleados.',
    },
    {
      termino: 'Retención de talento',
      significado:
        'Estrategias implementadas para mantener a los empleados dentro de la organización.',
    },
    {
      termino: 'Teletrabajo',
      significado:
        'Modalidad de trabajo que permite a los empleados realizar sus funciones desde lugares fuera de la oficina, como sus hogares.',
    },
    {
      termino: 'Transformación digital',
      significado:
        'Integración de la tecnología en todos los aspectos de la gestión del talento humano.',
    },
    {
      termino: 'Trabajo híbrido',
      significado:
        'Modelo que combina el trabajo presencial en la oficina y el trabajo remoto.',
    },
  ],
}
