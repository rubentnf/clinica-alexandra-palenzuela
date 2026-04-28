import { getPermalink, getBlogPermalink } from './utils/permalinks';
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
      },
      {
        text: t('nav.blog'),
        href: p('/blog'),
      },
      {
        text: t('nav.contacto'),
        href: p('/contacto'),
      },
    ],
    actions: [
      {
        text: t('nav.pedirCita'),
        href: 'https://portal.clinicaenlanube.com/clinicas/925/cita_peticiones/new',
        target: '_blank',
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
        title: lang === 'es' ? 'La Clínica' : lang === 'en' ? 'The Clinic' : 'Die Klinik',
        links: [
          { text: t('nav.equipo'), href: p('/equipo') },
          { text: t('nav.blog'), href: p('/blog') },
        ],
      },
      {
        title: 'Legal',
        links: [
          { text: lang === 'es' ? 'Términos de uso' : lang === 'en' ? 'Terms of Use' : 'Nutzungsbedingungen', href: p('/terms') },
          { text: lang === 'es' ? 'Política de privacidad' : lang === 'en' ? 'Privacy Policy' : 'Datenschutzerklärung', href: p('/privacy') },
        ],
      },
    ],
    secondaryLinks: [],
    socialLinks: [
      { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/clinicaalexandragine/' },
      { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/casadelaluztenerife/' },
    ],
    footNote: `
      ${lang === 'es' ? 'Hecho con' : lang === 'en' ? 'Made with' : 'Hergestellt mit'} <span aria-hidden="true">❤️</span> ${lang === 'es' ? 'por' : lang === 'en' ? 'by' : 'von'} <a class="text-blue-600 underline dark:text-muted" href="https://www.linkedin.com/in/rubenafonsodev/" target="_blank"> Rubén Afonso</a> · ${lang === 'es' ? 'Todos los derechos reservados' : lang === 'en' ? 'All rights reserved' : 'Alle Rechte vorbehalten'}.
    `,
  };
};
