# AcceptCookiePopup

Cookie consent notification plugin

## Getting Started

Download the plugin and add it to your website. Below, initialize an instance of `AcceptCookiePopup`:

```javascript
new AcceptCookiePopup();
```

## Configuration

The plugin comes with default settings, but it can also accept a configuration object for customization. Below is a table of available configuration keys:

```
Key                   | Description (Type, Default Value)
----------------------|--------------------------------------
siteName              | Website name (string, ~Hostname~)
linkCookiePage        | URL of the cookie policy page (string, '/cookie-policy/')
showDelay             | Delay before showing the popup in milliseconds (number, 2000)
showAnimationDuration | Popup show animation duration in milliseconds (number, 800)
hideMonthCount        | Number of months until the popup reappears (number, 2)
cookieName            | Cookie name (string, 'cookiePopup')
cookieValue           | Cookie value (string, 'alreadyShowed')
popupName             | BEM class name for the popup (string, 'cookie-accept-popup')
customCSS             | Enable custom CSS rules (boolean, false)
btnText               | Accept button text (string, 'Хорошо')
closeTitle            | Close button (крестик) (string, 'Закрыть')
messageText           | Custom message text. Default method returns string. (function)
```