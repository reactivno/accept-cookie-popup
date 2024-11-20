import { defaultSettings } from './const.js';

export default class AcceptCookiePopup {
  #options = null;
  #popup = null;
  #showDelay = null;
  #cookieName;
  #cookieValue = null;
  #popupName = null;
  #siteName = null;
  #linkCookiePage = null;
  #popupTemplate = null;
  #hideMonthCount = null;
  #customCSS = null;
  #showAnimationDuration = null;

  constructor( options = {} ) {
    this.#options = options;

    if ( navigator.cookieEnabled ) {
      this.#cookieName = this.#getOptionFallback( 'cookieName', defaultSettings.cookieName);
      this.#cookieValue = this.#getOptionFallback( 'cookieValue', defaultSettings.cookieValue );
      this.#siteName = this.#getOptionFallback( 'siteName', defaultSettings.siteName );
      this.#linkCookiePage = this.#getOptionFallback( 'linkCookiePage', defaultSettings.linkCookiePage );
      this.#popupName = this.#getOptionFallback( 'popupName', defaultSettings.popupName );
      this.#showDelay = this.#getOptionFallback( 'showDelay', defaultSettings.showDelay );
      this.#showAnimationDuration = this.#getOptionFallback( 'showAnimationDuration', defaultSettings.showAnimationDuration );
      this.#hideMonthCount = this.#getOptionFallback( 'hideMonthCount', defaultSettings.hideMonthCount );
      this.#customCSS = this.#getOptionFallback( 'customCSS', defaultSettings.customCSS );
      this.#getTemplate();

      this.#init();
    }
  }

  #init() {
    if ( !this.#getCookie() || ( this.#getCookie() !== this.#cookieValue ) ) {
      !window.isCookiePopupInit ? this.#renderPopup() : '';
    }
  }

  #getOptionFallback( option, fallbackValue ) {
    return Object.prototype.hasOwnProperty.call(this.#options, option) ? this.#options[ option ] : fallbackValue;
  }

  #getTemplate() {
    this.#popupTemplate = `
    <template id="${this.#popupName}">
      <div class="${this.#popupName}">
        <button class="${this.#popupName}__cross ${this.#popupName}__close" type="button" aria-label="Закрыть" title="Закрыть"></button>
        <div class="${this.#popupName}__container">
          <p>
            Продолжая использовать сайт ${this.#siteName.toLocaleUpperCase()}, Вы соглашаетесь на использование файлов COOKIE. Более подробная информация на странице <a href="${this.#linkCookiePage}"  target="_blank" rel="nofollow noreferer noopener">Политика обработки файлов cookie</a>
          </p>
          <button class="${this.#popupName}__btn ${this.#popupName}__close ${this.#popupName}__accept" type="button">Хорошо</button>
        </div>
      </div>
    </template>
    `;
  }

  #getDefaultCSSText() {
    return `.${this.#popupName}{box-sizing:border-box;display:none;position:fixed;left:0;bottom:0;width:100%;z-index:1000;color:var(--cookie-popup-color,#231f1e);background-color:var(--cookie-popup-bg,#fff);padding:30px 20px 20px;font-size:16px;line-height:1.3}.${this.#popupName}--show{display:block;-webkit-animation-name:show-popup;animation-name:show-popup;-webkit-animation-duration:${this.#showAnimationDuration}ms;animation-duration:${this.#showAnimationDuration}ms;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.${this.#popupName}__cross{position:absolute;top:10px;right:20px;padding:0;border-radius:2px;border:none;width:18px;height:18px;background-color:transparent;background-image:url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.41425 7.00025L13.7072 1.70725C14.0982 1.31625 14.0982 0.68425 13.7072 0.29325C13.3162 -0.09775 12.6842 -0.09775 12.2933 0.29325L7.00025 5.58625L1.70725 0.29325C1.31625 -0.09775 0.68425 -0.09775 0.29325 0.29325C-0.09775 0.68425 -0.09775 1.31625 0.29325 1.70725L5.58625 7.00025L0.29325 12.2933C-0.09775 12.6842 -0.09775 13.3162 0.29325 13.7072C0.48825 13.9022 0.74425 14.0002 1.00025 14.0002C1.25625 14.0002 1.51225 13.9022 1.70725 13.7072L7.00025 8.41425L12.2933 13.7072C12.4882 13.9022 12.7443 14.0002 13.0002 14.0002C13.2562 14.0002 13.5122 13.9022 13.7072 13.7072C14.0982 13.3162 14.0982 12.6842 13.7072 12.2933L8.41425 7.00025Z' fill='%23231f1e'/%3E%3C/svg%3E%0A");background-repeat:no-repeat;background-position:center;background-size:contain;opacity:1;cursor:pointer}.${this.#popupName}__container{max-width:690px;margin:0 auto}.${this.#popupName}__container p{margin:4px 0 18px}.${this.#popupName}__container a{color:inherit;-webkit-text-decoration:1px solid underline;text-decoration:1px solid underline}.${this.#popupName}__btn{display:inline-flex;padding:14px 40px;border:none;border-radius:0;color:#fff;background-color:#231f1e;cursor:pointer;text-transform:uppercase}@media (any-hover:hover){.${this.#popupName}__cross{transition:opacity .2s ease-in-out}.${this.#popupName}__cross:hover{opacity:.6}.${this.#popupName}__container a{transition:text-decoration-color .2s ease-in-out}.${this.#popupName}__container a:hover{text-decoration-color:transparent}.${this.#popupName}__btn{transition:opacity .2s ease-in-out}.${this.#popupName}__btn:hover{opacity:.8}}@-webkit-keyframes show-popup{0%{-webkit-transform:translateY(100%);transform:translateY(100%);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes show-popup{0%{-webkit-transform:translateY(100%);transform:translateY(100%);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@media (min-width:768px){.${this.#popupName}__container{display:flex;align-items:center}.${this.#popupName}__container p{margin:0 30px 0 0}}@media (min-width:1200px){.${this.#popupName}{padding:40px 0}.${this.#popupName}__cross{top:20px;right:max(40px,(100% - 1110px) / 2);width:24px;height:24px}.${this.#popupName}__container{max-width:990px}}`;
  }

  #addCSS() {
    const style = document.createElement( 'STYLE' );
    style.textContent = this.#getDefaultCSSText();
    document.head.appendChild( style );
  }

  #pasteTemplate() {
    document.body.insertAdjacentHTML( 'beforeend', this.#popupTemplate );
  }

  #deleteTemplate() {
    document.querySelector( `#${this.#popupName}` ).remove();
  }

  #renderPopup() {
    if ( !this.#customCSS ) {
      this.#addCSS();
    }
    this.#pasteTemplate();

    const template = document.querySelector( `#${this.#popupName}` )
      .content
      .querySelector( `.${this.#popupName}` )
      .cloneNode( true );

    this.#popup = template;
    this.#preparePopup();
    document.body.appendChild( template );

    this.#deleteTemplate();
    AcceptCookiePopup.#registrationPopup();
  }

  #preparePopup() {
    const closeNodes = this.#popup.querySelectorAll( `.${this.#popupName}__close` );

    closeNodes.forEach( btn => {
      btn.addEventListener( 'click', this.#onCloseBtnClick );
    } );

    setTimeout( () => ( this.#popup.classList.add( `${this.#popupName}--show` ) ), this.#showDelay );
  }

  #removePopup() {
    this.#popup.remove();

    this.#popup = null;
  }

  #onCloseBtnClick = ( evt ) => {
    evt.preventDefault();
    if ( evt.currentTarget.classList.contains( `${this.#popupName}__accept` ) ) this.#writeCookie();
    this.#removePopup();
  };

  #writeCookie = () => {
    const date = new Date;
    date.setMonth( date.getMonth() + this.#hideMonthCount );
    document.cookie = this.#cookieName + '=' + this.#cookieValue + '; path=/; expires=' + date.toUTCString();
  };

  #getCookie = () => {
    const matches = document.cookie.match( new RegExp( '(?:^|; )' + this.#cookieName.replace( /([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1' ) + '=([^;]*)' ) ); // eslint-disable-line
    return matches ? decodeURIComponent( matches[ 1 ] ) : undefined;
  };

  static #registrationPopup() {
    window.isCookiePopupInit = true;
  }
}
