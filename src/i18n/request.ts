import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// የሚፈቀዱ ቋንቋዎች ዝርዝር
const locales = ['en', 'am'];

export default getRequestConfig(async ({locale}) => {
  // የቀረበው ቋንቋ በዝርዝሩ ውስጥ ካለ ያረጋግጣል
  if (!locales.includes(locale as any)) notFound();

  return {
    // የ 'messages' ፎልደር ከ 'src' ውጭ ስለሆነ ሁለት ደረጃ ወደ ኋላ (../../) ይሄዳል
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});