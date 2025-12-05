import { ui, defaultLang, type TranslationKey, type Lang } from './ui';
export type { Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}

export function switchLang(currentLang: Lang): Lang {
  return currentLang === 'en' ? 'de' : 'en';
}

export function getAlternateLangUrl(url: URL, currentLang: Lang): string {
  const newLang = switchLang(currentLang);
  const pathWithoutLang = url.pathname.replace(/^\/(en|de)/, '');
  return `/${newLang}${pathWithoutLang || '/'}`;
}
