export const languages = {
  en: 'English',
  de: 'Deutsch',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Hero
    'hero.title': 'Fullstack & Mobile Developer',
    'hero.description': 'Apple enthusiast. Minimalist at heart. Building products that just work.',

    // About
    'about.title': 'About Me',
    'about.p1': 'I craft modern web and mobile applications with a deep appreciation for thoughtful design. Every detail matters.',
    'about.p2': 'From concept to deployment, I focus on clean code, intuitive interfaces, and experiences that feel effortless.',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.error': 'Failed to load projects.',
    'projects.empty': 'No projects available.',

    // Contact
    'contact.title': "Let's Connect",
    'contact.subtitle': "Have a project in mind or just want to say hello? I'd love to hear from you.",
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message Sent!',
    'contact.success.text': "Thanks for reaching out. I'll get back to you soon.",
    'contact.another': 'Send Another',
    'contact.error': 'Something went wrong. Please try again.',
    'contact.placeholder.name': 'Your name',
    'contact.placeholder.email': 'your@email.com',
    'contact.placeholder.message': 'Your message...',

    // Footer
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy Policy',
    'footer.rights': 'All rights reserved.',

    // Tech Stack Categories
    'tech.frontend': 'Frontend',
    'tech.mobile': 'Mobile',
    'tech.backend': 'Backend',
    'tech.ai': 'AI/ML',
  },
  de: {
    // Hero
    'hero.title': 'Fullstack & Mobile Entwickler',
    'hero.description': 'Apple-Enthusiast. Minimalist im Herzen. Ich baue Produkte, die einfach funktionieren.',

    // About
    'about.title': 'Über Mich',
    'about.p1': 'Ich entwickle moderne Web- und Mobile-Anwendungen mit einem tiefen Verständnis für durchdachtes Design. Jedes Detail zählt.',
    'about.p2': 'Vom Konzept bis zum Deployment liegt mein Fokus auf sauberem Code, intuitiven Interfaces und Erfahrungen, die sich mühelos anfühlen.',

    // Projects
    'projects.title': 'Ausgewählte Projekte',
    'projects.error': 'Projekte konnten nicht geladen werden.',
    'projects.empty': 'Keine Projekte vorhanden.',

    // Contact
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Hast du ein Projekt im Sinn oder möchtest einfach Hallo sagen? Ich freue mich von dir zu hören.',
    'contact.name': 'Name',
    'contact.email': 'E-Mail',
    'contact.message': 'Nachricht',
    'contact.send': 'Nachricht senden',
    'contact.sending': 'Senden...',
    'contact.success': 'Nachricht gesendet!',
    'contact.success.text': 'Danke für deine Nachricht. Ich melde mich bald bei dir.',
    'contact.another': 'Neue Nachricht',
    'contact.error': 'Etwas ist schiefgelaufen. Bitte versuche es erneut.',
    'contact.placeholder.name': 'Dein Name',
    'contact.placeholder.email': 'deine@email.de',
    'contact.placeholder.message': 'Deine Nachricht...',

    // Footer
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.rights': 'Alle Rechte vorbehalten.',

    // Tech Stack Categories
    'tech.frontend': 'Frontend',
    'tech.mobile': 'Mobile',
    'tech.backend': 'Backend',
    'tech.ai': 'KI/ML',
  },
} as const;

export type TranslationKey = keyof typeof ui.en;
