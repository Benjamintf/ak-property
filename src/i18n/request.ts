import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// የሚፈቀዱ ቋንቋዎች ዝርዝር
const locales = ['en', 'am'];

export default getRequestConfig(async ({locale}) => {
  // የቀረበው ቋንቋ በዝርዝሩ ውስጥ ካለ አረጋግጥ
  if (!locales.includes(locale as any)) notFound();

  return {
    // ማሳሰቢያ፡ የ 'messages' ፎልደር ከ 'src' ውጭ ከሆነ '../' ተጠቀም
messages: (await import(`../../messages/${locale}.json`)).default
  };
});