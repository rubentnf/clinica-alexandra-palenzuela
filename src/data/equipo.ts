export const getEquipoContent = (lang: 'es' | 'en' | 'de') => {
  const content = {
    es: {
      metadata: { title: 'Nuestro Equipo - Clínica Alexandra Palenzuela' },
      tagline: 'Conócenos',
      title: 'Nuestro Equipo',
      subtitle: 'Un equipo multidisciplinar comprometido con tu salud y bienestar integral.',
      viewProfile: 'Ver perfil',
      team: [
        {
          name: 'Alexandra Palenzuela',
          role: 'Ginecología y Médica Integrativa',
          image: { src: '~/assets/images/alexandra.webp', alt: 'Alexandra Palenzuela' },
          href: '/equipo/alexandra-palenzuela',
        },
        {
          name: 'Rita Morales',
          role: 'Nutricionista',
          image: { src: '~/assets/images/rita.webp', alt: 'Rita Morales' },
          href: '/equipo/rita-morales-hernandez',
        },
        {
          name: 'Clara Militto Val',
          role: 'Fisioterapeuta',
          image: { src: '~/assets/images/clara.webp', alt: 'Clara Militto Val' },
          href: '/equipo/clara-militto-val',
        },
        {
          name: 'Nerea Peñalver Vargas',
          role: 'Obstetricia y Ginecología',
          image: { src: '~/assets/images/nerea.webp', alt: 'Nerea Peñalver Vargas' },
          href: '/equipo/nerea-penalver-vargas',
        },
      ],
    },
    en: {
      metadata: { title: 'Our Team - Alexandra Palenzuela Clinic' },
      tagline: 'Meet Us',
      title: 'Our Team',
      subtitle: 'A multidisciplinary team committed to your health and comprehensive well-being.',
      viewProfile: 'View profile',
      team: [
        {
          name: 'Alexandra Palenzuela',
          role: 'Gynecology and Integrative Physician',
          image: { src: '~/assets/images/alexandra.webp', alt: 'Alexandra Palenzuela' },
          href: '/equipo/alexandra-palenzuela',
        },
        {
          name: 'Rita Morales',
          role: 'Nutritionist',
          image: { src: '~/assets/images/rita.webp', alt: 'Rita Morales' },
          href: '/equipo/rita-morales-hernandez',
        },
        {
          name: 'Clara Militto Val',
          role: 'Physiotherapist',
          image: { src: '~/assets/images/clara.webp', alt: 'Clara Militto Val' },
          href: '/equipo/clara-militto-val',
        },
        {
          name: 'Nerea Peñalver Vargas',
          role: 'Obstetrics and Gynecology',
          image: { src: '~/assets/images/nerea.webp', alt: 'Nerea Peñalver Vargas' },
          href: '/equipo/nerea-penalver-vargas',
        },
      ],
    },
    de: {
      metadata: { title: 'Unser Team - Klinik Alexandra Palenzuela' },
      tagline: 'Lernen Sie uns kennen',
      title: 'Unser Team',
      subtitle: 'Ein multidisziplinäres Team, das sich für Ihre Gesundheit und Ihr ganzheitliches Wohlbefinden einsetzt.',
      viewProfile: 'Profil ansehen',
      team: [
        {
          name: 'Alexandra Palenzuela',
          role: 'Gynäkologie und integrative Medizin',
          image: { src: '~/assets/images/alexandra.webp', alt: 'Alexandra Palenzuela' },
          href: '/equipo/alexandra-palenzuela',
        },
        {
          name: 'Rita Morales',
          role: 'Ernährungsberaterin',
          image: { src: '~/assets/images/rita.webp', alt: 'Rita Morales' },
          href: '/equipo/rita-morales-hernandez',
        },
        {
          name: 'Clara Militto Val',
          role: 'Physiotherapeutin',
          image: { src: '~/assets/images/clara.webp', alt: 'Clara Militto Val' },
          href: '/equipo/clara-militto-val',
        },
        {
          name: 'Nerea Peñalver Vargas',
          role: 'Geburtshilfe und Gynäkologie',
          image: { src: '~/assets/images/nerea.webp', alt: 'Nerea Peñalver Vargas' },
          href: '/equipo/nerea-penalver-vargas',
        },
      ],
    },
  };

  return content[lang];
};
