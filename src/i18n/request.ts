import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// የሚፈቀዱ ቋንቋዎች ዝርዝር
const locales = ['en', 'am'];

export default getRequestConfig(async ({requestLocale}) => {
  // requestLocaleን await እናደርጋለን
  const locale = await requestLocale;

  // የመጣው locale በዝርዝሩ ውስጥ ከሌለ 404 እንዲያሳይ
  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  return {
    // 1. localeን መልሶ መላክ (return ማድረግ) አሁን ግዴታ ነው
    locale,
    // 2. የቋንቋ ፋይሉን መጫን
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
