import type { Lang } from '../data/translations';

export const getPath = (lang: Lang, path: string): string => {
  if (lang === 'es') {
    return path === '' ? '/' : `/${path}`;
  }
  return path === '' ? `/${lang}` : `/${lang}/${path}`;
};
