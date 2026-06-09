import { useTranslations, useTranslatedPath } from '~/i18n/utils';

export const getHeaderData = (lang: 'es' | 'en' | 'de') => {
  const t = useTranslations(lang);
  const p = useTranslatedPath(lang);

  return {
    links: [
      {
        text: t('nav.inicio'),
        href: p('/'),
      },
      {
        text: t('nav.equipo'),
        href: p('/equipo'),
        'data-umami-event': 'Equipo button',
      },
      {
        text: t('nav.blog'),
        href: p('/blog'),
        'data-umami-event': 'Blog button',
      },
      {
        text: t('nav.contacto'),
        href: p('/contacto'),
        'data-umami-event': 'Contacto button',
      },
    ],
    actions: [
      {
        text: t('nav.pedirCita'),
        href: 'https://portal.clinicaenlanube.com/clinicas/925/cita_peticiones/new',
        target: '_blank',
        'data-umami-event': 'Pedir cita button',
      },
    ],
  };
};

export const getFooterData = (lang: 'es' | 'en' | 'de') => {
  const t = useTranslations(lang);
  const p = useTranslatedPath(lang);

  return {
    links: [
      {
        title: t('footer.clinic'),
        links: [
          { text: t('nav.equipo'), href: p('/equipo') },
          { text: t('nav.blog'), href: p('/blog') },
        ],
      },
      {
        title: 'Legal',
        links: [
          { text: t('footer.terms'), href: p('/terms') },
          { text: t('footer.privacy'), href: p('/privacy') },
        ],
      },
    ],
    secondaryLinks: [],
    socialLinks: [
      {
        ariaLabel: 'Instagram',
        icon: 'tabler:brand-instagram',
        href: 'https://www.instagram.com/clinicaalexandragine/',
      },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/casadelaluztenerife/' },
    ],
    footNote: `
      ${t('footer.madeBy')} <a class="text-blue-600 underline dark:text-muted" href="https://www.linkedin.com/in/rubenafonsodev/" target="_blank"> Rubén Afonso</a> · ${t('footer.allRights')}.
    `,
  };
};
