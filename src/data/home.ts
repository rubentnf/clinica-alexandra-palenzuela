export const getHomeContent = (lang: 'es' | 'en' | 'de') => {
  const content = {
    es: {
      metadata: {
        title: 'Clínica Alexandra Palenzuela — Ginecología, Nutrición y Fisioterapia',
      },
      hero: {
        alt: 'Clínica Alexandra Palenzuela',
        subtitle: [
          'No tratamos síntomas, cuidamos personas.',
          'Unimos ciencia, innovación y un enfoque integral para acompañarte en tu salud y bienestar.',
          'Atendemos a mujeres y hombres desde un equipo multidisciplinar —ginecología, obstetricia, medicina integrativa, fisioterapia y nutrición— para ofrecer soluciones completas, personalizadas y duraderas en cada etapa de la vida.',
        ],
      },
      ginecologia: {
        title: 'Ginecología',
        alt: 'Consulta de ginecología integrativa',
        items: [
          {
            title: 'Revisión ginecológica anual y citologías',
            description: 'Realizamos revisiones ginecológicas anuales y citologías para asegurar la salud y bienestar de nuestras pacientes.',
            icon: 'tabler:wand',
          },
          {
            title: 'Estudio del metabolismo de estrógenos',
            description: 'Realizamos estudios del metabolismo de estrógenos para comprender mejor la salud hormonal de nuestras pacientes.',
            icon: 'tabler:settings',
          },
          {
            title: 'Estudio del equilibrio de las bacterias vaginales',
            description: 'Realizamos estudios del equilibrio de las bacterias vaginales para comprender mejor la salud vaginal de nuestras pacientes.',
            icon: 'tabler:presentation',
          },
          {
            title: 'Disbiosis intestinal. Conoce tu microbiota',
            description: 'Realizamos estudios de disbiosis intestinal para conocer mejor la microbiota de nuestras pacientes.',
            icon: 'tabler:carousel-horizontal',
          },
        ],
      },
      nutricion: {
        title: 'Nutrición',
        alt: 'Asesoramiento nutricional personalizado',
        items: [
          {
            title: 'Planes nutricionales personalizados',
            description: 'Creamos planes nutricionales personalizados para cada paciente, adaptados a sus necesidades y objetivos específicos.',
            icon: 'tabler:list',
          },
          {
            title: 'Educación alimentaria para distintas etapas de la vida',
            description: 'Brindamos educación alimentaria adaptada a las diferentes etapas de la vida, promoviendo hábitos saludables y bienestar integral.',
            icon: 'tabler:school',
          },
          {
            title: 'Tratamiento dietético para patologías (diabetes, obesidad, etc.)',
            description: 'Ofrecemos tratamiento dietético especializado para diversas patologías, incluyendo diabetes, obesidad y otras condiciones, adaptado a las necesidades individuales de cada paciente.',
            icon: 'tabler:health-recognition',
          },
          {
            title: 'Asesoramiento en suplementación y hábitos saludables',
            description: 'Ofrecemos asesoramiento en suplementación y hábitos saludables para mejorar el bienestar general de nuestras pacientes.',
            icon: 'tabler:treadmill',
          },
        ],
      },
      fisioterapia: {
        title: 'Fisioterapia',
        alt: 'Sesión de fisioterapia y suelo pélvico',
        items: [
          {
            title: 'Rehabilitación de suelo pélvico',
            description: 'Ofrecemos programas de rehabilitación de suelo pélvico personalizados para mejorar la función y el bienestar de nuestras pacientes.',
            icon: 'tabler:wand',
          },
          {
            title: 'Tratamiento de dolores musculares y articulares',
            description: 'Ofrecemos tratamiento especializado para dolores musculares y articulares, adaptado a las necesidades individuales de cada paciente.',
            icon: 'tabler:settings',
          },
          {
            title: 'Fisioterapia para embarazadas y postparto',
            description: 'Ofrecemos programas de fisioterapia especializados para embarazadas y postparto, adaptados a las necesidades individuales de cada paciente.',
            icon: 'tabler:presentation',
          },
          {
            title: 'Ejercicios de recuperación funcional y prevención de lesiones',
            description: 'Ofrecemos ejercicios de recuperación funcional y programas de prevención de lesiones, adaptados a las necesidades individuales de cada paciente.',
            icon: 'tabler:carousel-horizontal',
          },
        ],
      },
      obstetricia: {
        title: 'Obstetricia',
        alt: 'Control y seguimiento del embarazo',
        items: [
          {
            title: 'Seguimiento integral del embarazo',
            description: 'Acompañamiento médico personalizado durante todas las etapas de la gestación para garantizar la salud de la madre y el bebé.',
            icon: 'tabler:heart-plus',
          },
          {
            title: 'Asesoramiento y resolución de dudas',
            description: 'Brindamos un espacio de confianza para resolver todas tus inquietudes sobre el embarazo, el desarrollo del bebé y los cambios en tu cuerpo.',
            icon: 'tabler:message',
          },
          {
            title: 'Control prenatal y diagnóstico',
            description: 'Realizamos las pruebas y revisiones necesarias para monitorizar el desarrollo del embarazo y asegurar la tranquilidad de los futuros padres.',
            icon: 'tabler:stethoscope',
          },
          {
            title: 'Atención en el postparto',
            description: 'Seguimiento médico tras el nacimiento para asegurar una recuperación óptima y acompañar a la madre en las primeras semanas tras el parto.',
            icon: 'tabler:nurse',
          },
        ],
      },
      online: {
        title: 'Servicio de consulta online',
        alt: 'Dra. Palenzuela atendiendo una consulta médica online',
        subtitle: 'Ponemos a tu alcance un servicio de consulta médica online, pensado para acompañarte y resolver todas tus dudas sobre salud femenina sin que tengas que desplazarte. <br /> <br /> A través de una videoconsulta directa con la Dra. Palenzuela, podrás recibir orientación personalizada, valorar resultados de pruebas o comentar cualquier síntoma que te preocupe, todo desde la comodidad y privacidad de tu hogar. <br /><br /> Ideal para consultas de seguimiento, revisión de analíticas o valoración de tratamientos.',
      },
      blog: {
        title: 'Más contenido en nuestro Blog',
      },
    },
    en: {
      metadata: {
        title: 'Alexandra Palenzuela Clinic — Gynecology, Nutrition and Physiotherapy',
      },
      hero: {
        alt: 'Alexandra Palenzuela Clinic',
        subtitle: [
          "We don't treat symptoms, we care for people.",
          'We combine science, innovation, and a comprehensive approach to accompany you in your health and well-being.',
          'We serve women and men through a multidisciplinary team—gynecology, obstetrics, integrative medicine, physiotherapy, and nutrition—to offer complete, personalized, and lasting solutions at every stage of life.',
        ],
      },
      ginecologia: {
        title: 'Gynecology',
        alt: 'Gynecological consultation',
        items: [
          {
            title: 'Annual gynecological check-up and cytologies',
            description: 'We perform annual gynecological check-ups and cytologies to ensure the health and well-being of our patients.',
            icon: 'tabler:wand',
          },
          {
            title: 'Estrogen metabolism study',
            description: 'We conduct estrogen metabolism studies to better understand the hormonal health of our patients.',
            icon: 'tabler:settings',
          },
          {
            title: 'Study of the balance of vaginal bacteria',
            description: 'We perform studies on the balance of vaginal bacteria to better understand the vaginal health of our patients.',
            icon: 'tabler:presentation',
          },
          {
            title: 'Intestinal dysbiosis. Know your microbiota',
            description: 'We conduct intestinal dysbiosis studies to better understand the microbiota of our patients.',
            icon: 'tabler:carousel-horizontal',
          },
        ],
      },
      nutricion: {
        title: 'Nutrition',
        alt: 'Personalized nutritional advice',
        items: [
          {
            title: 'Personalized nutritional plans',
            description: 'We create personalized nutritional plans for each patient, adapted to their specific needs and goals.',
            icon: 'tabler:list',
          },
          {
            title: 'Food education for different stages of life',
            description: 'We provide food education adapted to the different stages of life, promoting healthy habits and integral well-being.',
            icon: 'tabler:school',
          },
          {
            title: 'Dietary treatment for pathologies (diabetes, obesity, etc.)',
            description: 'We offer specialized dietary treatment for various pathologies, including diabetes, obesity, and other conditions, adapted to the individual needs of each patient.',
            icon: 'tabler:health-recognition',
          },
          {
            title: 'Advice on supplementation and healthy habits',
            description: 'We offer advice on supplementation and healthy habits to improve the general well-being of our patients.',
            icon: 'tabler:treadmill',
          },
        ],
      },
      fisioterapia: {
        title: 'Physiotherapy',
        alt: 'Physiotherapy and pelvic floor session',
        items: [
          {
            title: 'Pelvic floor rehabilitation',
            description: 'We offer personalized pelvic floor rehabilitation programs to improve the function and well-being of our patients.',
            icon: 'tabler:wand',
          },
          {
            title: 'Treatment of muscle and joint pain',
            description: 'We offer specialized treatment for muscle and joint pain, adapted to the individual needs of each patient.',
            icon: 'tabler:settings',
          },
          {
            title: 'Physiotherapy for pregnant women and postpartum',
            description: 'We offer specialized physiotherapy programs for pregnant women and postpartum, adapted to the individual needs of each patient.',
            icon: 'tabler:presentation',
          },
          {
            title: 'Functional recovery exercises and injury prevention',
            description: 'We offer functional recovery exercises and injury prevention programs, adapted to the individual needs of each patient.',
            icon: 'tabler:carousel-horizontal',
          },
        ],
      },
      obstetricia: {
        title: 'Obstetrics',
        alt: 'Pregnancy tracking and prenatal advice',
        items: [
          {
            title: 'Comprehensive pregnancy tracking',
            description: 'Personalized medical support during all stages of pregnancy to guarantee the health of the mother and the baby.',
            icon: 'tabler:heart-plus',
          },
          {
            title: 'Advice and resolution of doubts',
            description: 'We provide a space of trust to resolve all your concerns about pregnancy, the development of the baby and the changes in your body.',
            icon: 'tabler:message',
          },
          {
            title: 'Prenatal control and diagnosis',
            description: 'We perform the necessary tests and reviews to monitor the development of the pregnancy and ensure the peace of mind of the future parents.',
            icon: 'tabler:stethoscope',
          },
          {
            title: 'Postpartum care',
            description: 'Medical follow-up after birth to ensure optimal recovery and accompany the mother in the first weeks after delivery.',
            icon: 'tabler:nurse',
          },
        ],
      },
      online: {
        title: 'Online consultation service',
        alt: 'Dr. Palenzuela attending an online medical consultation',
        subtitle: 'We offer you an online medical consultation service, designed to accompany you and resolve all your questions about female health without you having to travel. <br /> <br /> Through a direct video consultation with Dr. Palenzuela, you can receive personalized guidance, evaluate test results or discuss any symptoms that concern you, all from the comfort and privacy of your home. <br /><br /> Ideal for follow-up consultations, reviewing analytical results or evaluating treatments.',
      },
      blog: {
        title: 'More content in our Blog',
      },
    },
    de: {
      metadata: {
        title: 'Klinik Alexandra Palenzuela — Gynäkologie, Ernährung und Physiotherapie',
      },
      hero: {
        alt: 'Klinik Alexandra Palenzuela',
        subtitle: [
          'Wir behandeln keine Symptome, wir kümmern uns um Menschen.',
          'Wir verbinden Wissenschaft, Innovation und einen ganzheitlichen Ansatz, um Sie bei Ihrer Gesundheit und Ihrem Wohlbefinden zu begleiten.',
          'Wir betreuen Frauen und Männer durch ein multidisziplinäres Team – Gynäkologie, Geburtshilfe, integrative Medizin, Physiotherapie und Ernährung –, um in jeder Lebensphase vollständige, personalisierte und dauerhafte Lösungen anzubieten.',
        ],
      },
      ginecologia: {
        title: 'Gynäkologie',
        alt: 'Gynäkologische Beratung',
        items: [
          {
            title: 'Jährliche gynäkologische Untersuchung und Zytologien',
            description: 'Wir führen jährliche gynäkologische Untersuchungen und Zytologien durch, um die Gesundheit und das Wohlbefinden unserer Patientinnen zu gewährleisten.',
            icon: 'tabler:wand',
          },
          {
            title: 'Untersuchung des Östrogenstoffwechsels',
            description: 'Wir führen Untersuchungen des Östrogenstoffwechsels durch, um die hormonelle Gesundheit unserer Patientinnen besser zu verstehen.',
            icon: 'tabler:settings',
          },
          {
            title: 'Untersuchung des Gleichgewichts der Vaginalbakterien',
            description: 'Wir führen Untersuchungen des Gleichgewichts der Vaginalbakterien durch, um die vaginale Gesundheit unserer Patientinnen besser zu verstehen.',
            icon: 'tabler:presentation',
          },
          {
            title: 'Intestinale Dysbiose. Kennen Sie Ihre Mikrobiota',
            description: 'Wir führen Untersuchungen zur intestinalen Dysbiose durch, um die Mikrobiota unserer Patientinnen besser zu verstehen.',
            icon: 'tabler:carousel-horizontal',
          },
        ],
      },
      nutricion: {
        title: 'Ernährung',
        alt: 'Personalisierte Ernährungsberatung',
        items: [
          {
            title: 'Personalisierte Ernährungspläne',
            description: 'Wir erstellen für jede Patientin personalisierte Ernährungspläne, die auf ihre spezifischen Bedürfnisse und Ziele zugeschnitten sind.',
            icon: 'tabler:list',
          },
          {
            title: 'Ernährungsbildung für verschiedene Lebensphasen',
            description: 'Wir bieten eine an die verschiedenen Lebensphasen angepasste Ernährungsbildung an, die gesunde Gewohnheiten und ganzheitliches Wohlbefinden fördert.',
            icon: 'tabler:school',
          },
          {
            title: 'Diätetische Behandlung von Krankheiten (Diabetes, Adipositas etc.)',
            description: 'Wir bieten spezialisierte diätetische Behandlungen für verschiedene Krankheiten an, einschließlich Diabetes, Adipositas und andere Zustände, die auf die individuellen Bedürfnisse jeder Patientin zugeschnitten sind.',
            icon: 'tabler:health-recognition',
          },
          {
            title: 'Beratung zu Nahrungsergänzungsmitteln und gesunden Gewohnheiten',
            description: 'Wir beraten Sie zu Nahrungsergänzungsmitteln und gesunden Gewohnheiten, um das allgemeine Wohlbefinden unserer Patientinnen zu verbessern.',
            icon: 'tabler:treadmill',
          },
        ],
      },
      fisioterapia: {
        title: 'Physiotherapie',
        alt: 'Physiotherapie- und Beckenbodensitzung',
        items: [
          {
            title: 'Beckenboden-Rehabilitation',
            description: 'Wir bieten personalisierte Beckenboden-Rehabilitationsprogramme an, um die Funktion und das Wohlbefinden unserer Patientinnen zu verbessern.',
            icon: 'tabler:wand',
          },
          {
            title: 'Behandlung von Muskel- und Gelenkschmerzen',
            description: 'Wir bieten spezialisierte Behandlungen für Muskel- und Gelenkschmerzen an, die auf die individuellen Bedürfnisse jeder Patientin zugeschnitten sind.',
            icon: 'tabler:settings',
          },
          {
            title: 'Physiotherapie für Schwangere und nach der Geburt',
            description: 'Wir bieten spezialisierte Physiotherapieprogramme für Schwangere und die Zeit nach der Geburt an, die auf die individuellen Bedürfnisse jeder Patientin zugeschnitten sind.',
            icon: 'tabler:presentation',
          },
          {
            title: 'Übungen zur funktionellen Wiederherstellung und Verletzungsprävention',
            description: 'Wir bieten Übungen zur funktionellen Wiederherstellung und Programme zur Verletzungsprävention an, die auf die individuellen Bedürfnisse jeder Patientin zugeschnitten sind.',
            icon: 'tabler:carousel-horizontal',
          },
        ],
      },
      obstetricia: {
        title: 'Geburtshilfe',
        alt: 'Schwangerschaftsbegleitung und pränatale Beratung',
        items: [
          {
            title: 'Ganzheitliche Schwangerschaftsbegleitung',
            description: 'Persönliche medizinische Begleitung in allen Phasen der Schwangerschaft, um die Gesundheit von Mutter und Kind zu gewährleisten.',
            icon: 'tabler:heart-plus',
          },
          {
            title: 'Beratung und Klärung von Fragen',
            description: 'Wir bieten einen vertrauensvollen Raum, um all Ihre Sorgen über die Schwangerschaft, die Entwicklung des Babys und die Veränderungen in Ihrem Körper zu besprechen.',
            icon: 'tabler:message',
          },
          {
            title: 'Vorsorgeuntersuchung und Diagnose',
            description: 'Wir führen die notwendigen Tests und Untersuchungen durch, um die Entwicklung der Schwangerschaft zu überwachen und die Sicherheit der werdenden Eltern zu gewährleisten.',
            icon: 'tabler:stethoscope',
          },
          {
            title: 'Wochenbettbetreuung',
            description: 'Medizinische Nachsorge nach der Geburt, um eine optimale Erholung zu gewährleisten und die Mutter in den ersten Wochen nach der Entbindung zu begleiten.',
            icon: 'tabler:nurse',
          },
        ],
      },
      online: {
        title: 'Online-Beratungsservice',
        alt: 'Dra. Palenzuela bei einer Online-Sprechstunde',
        subtitle: 'Wir bieten Ihnen einen Online-Sprechstundenservice an, um Sie zu begleiten und alle Ihre Fragen zur weiblichen Gesundheit zu beantworten, ohne dass Sie verreisen müssen. <br /> <br /> Durch eine direkte Videoberatung mit Dr. Palenzuela können Sie personalisierte Beratung erhalten, Testergebnisse auswerten oder Symptome besprechen, die Sie beunruhigen – alles bequem und privat von zu Hause aus. <br /><br /> Ideal für Nachsorgeuntersuchungen, die Überprüfung von Analyseergebnissen oder die Bewertung von Behandlungen.',
      },
      blog: {
        title: 'Mehr Inhalte in unserem Blog',
      },
    },
  };

  return content[lang];
};
