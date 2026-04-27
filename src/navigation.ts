import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Equipo',
      href: getPermalink('/equipo'),
    },
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
      title: 'La Clínica',
      links: [
        { text: 'Equipo', href: getPermalink('/equipo') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Términos de uso', href: getPermalink('/terms') },
        { text: 'Política de privacidad', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/clinicaalexandragine/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/casadelaluztenerife/' },
  ],
  footNote: `
    Hecho con <span aria-hidden="true">❤️</span> por <a class="text-blue-600 underline dark:text-muted" href="https://www.linkedin.com/in/rubenafonsodev/" target="_blank"> Rubén Afonso</a> · Todos los derechos reservados.
  `,
};

// Made with <span aria-hidden="true">❤️</span> by
