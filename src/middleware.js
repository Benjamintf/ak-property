import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // የምንጠቀማቸው ቋንቋዎች ዝርዝር
  locales: ['en', 'am'],
 
  // መጀመሪያ ዌብሳይቱ ሲከፈት የሚታየው ቋንቋ
  defaultLocale: 'en'
});
 
export const config = {
  // እነዚህን መንገዶች ብቻ ነው ቋንቋ የሚቀይረው
  matcher: ['/', '/(am|en)/:path*']
};