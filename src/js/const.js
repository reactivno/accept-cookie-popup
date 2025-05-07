const defaultSettings = {
  siteName: window.location.host,
  linkCookiePage: '/cookie-policy/',
  showDelay: 2000,
  showAnimationDuration: 800,
  hideMonthCount: 2,
  cookieName: 'cookiePopup',
  cookieValue: 'allreadyShowed',
  popupName: 'cookie-accept-popup',
  customCSS: false,
  btnText: 'Хорошо',
  closeTitle: 'Закрыть',
  messageText: (site, link) => `<p>Продолжая использовать сайт ${site}, Вы соглашаетесь на использование файлов COOKIE. Более подробная информация на странице <a href="${link}" target="_blank" rel="nofollow noreferer noopener">Политика обработки файлов cookie</a></p>`,
};

export { defaultSettings };