export const getContactoContent = (lang: 'es' | 'en' | 'de') => {
  const content = {
    es: {
      metadata: { title: 'Contacto' },
      tagline: 'Contacto',
      title: 'Estamos aquí para ayudarte',
      featuresTitle: 'Métodos de contacto y ubicación',
      mapTitle: '¿Dónde estamos?',
      items: {
        phone: 'Teléfono',
        email: 'Correo',
        location: 'Ubicación',
        address: 'Av. Trinidad, 15 Bloque B. Piso 2º Dcha',
      },
    },
    en: {
      metadata: { title: 'Contact' },
      tagline: 'Contact',
      title: 'We are here to help you',
      featuresTitle: 'Contact methods and location',
      mapTitle: 'Where are we?',
      items: {
        phone: 'Phone',
        email: 'Email',
        location: 'Location',
        address: 'Av. Trinidad, 15 Block B. 2nd Floor Right',
      },
    },
    de: {
      metadata: { title: 'Kontakt' },
      tagline: 'Kontakt',
      title: 'Wir sind hier, um Ihnen zu helfen',
      featuresTitle: 'Kontaktmethoden und Standort',
      mapTitle: 'Wo finden Sie uns?',
      items: {
        phone: 'Telefon',
        email: 'E-Mail',
        location: 'Standort',
        address: 'Av. Trinidad, 15 Block B. 2. Stock rechts',
      },
    },
  };

  return content[lang];
};
