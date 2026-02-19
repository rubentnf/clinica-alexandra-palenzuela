import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Equipo',
      links: [
        {
          text: 'Alexandra Palenzuela',
          href: getPermalink('/equipo/alexandra-palenzuela'),
        },
        {
          text: 'Rita Morales Hernández',
          href: getPermalink('/equipo/rita-morales-hernandez'),
        },
        {
          text: 'Clara Militto Val',
          href: getPermalink('/equipo/clara-militto-val'),
        },
        {
          text: 'Nerea Peñalver Vargas',
          href: getPermalink('/equipo/nerea-penalver-vargas'),
        },
      ],
    },
    /* {
      text: 'Pages',
      links: [
        {
          text: 'Services',
          href: getPermalink('/services'),
        },
        {
          text: 'About us',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    }, */
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
  ],
  actions: [
    {
      text: 'Pedir cita',
      href: 'https://portal.clinicaenlanube.com/clinicas/925/cita_peticiones/new',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        { text: 'Ginecología', href: '#' },
        { text: 'Nutrición', href: '#' },
        { text: 'Fisioterapia', href: '#' },
        { text: 'Psicología', href: '#' },
        { text: 'Medicina Integrativa', href: '#' },
        { text: 'Recursos', href: '#' },
      ],
    },
    {
      title: 'La Clínica',
      links: [
        { text: 'Equipo', href: '#' },
        { text: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Términos de uso', href: '#' },
        { text: 'Política de privacidad', href: '#' },
        { text: 'Aviso legal', href: '#' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    /*  { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' }, */
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/clinicaalexandragine/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/casadelaluztenerife/' },
    /* { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }, */
    /*  { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' }, */
  ],
  footNote: `
    Hecho con <span aria-hidden="true">❤️</span> por <a class="text-blue-600 underline dark:text-muted" href="https://www.linkedin.com/in/rubenafonsodev/" target="_blank"> Rubén Afonso</a> · Todos los derechos reservados.
  `,
};

// Made with <span aria-hidden="true">❤️</span> by
