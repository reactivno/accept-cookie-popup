# AcceptCookiePopup v1.0.1

Плагин для уведомления о сборе cookie

## Начало работы

Скачайте плагин и добавьте на сайт. Ниже добавьте вызов экземпляра AcceptCookiePopup:

```javascript
new AcceptCookiePopup();
```

## Настройка
Плагин имеет стандартные настройки. Однако, также он может принимать объект с конфигурацией. При желании можно внести некоторые собственные изменения. Ключи для конфигурации описаны в таблице ниже:

```
Ключ                  | Описание (тип, значение по-умолчанию)
----------------------|--------------------------------------
siteName              | Имя сайта (string, ~Имя хоста~)
linkCookiePage        | Адрес страница с правилами обработки cookie (string, '/cookie-policy/')
showDelay             | Время задержки показа (number, 2000)
showAnimationDuration | Продолжительность анимации показа (number, 800)
hideMonthCount        | Время скрытия предупреждения в месяцах (number, 2)
cookieName            | Название cookie (string, 'cookiePopup')
cookieValue           | Значение cookie (string, 'allreadyShowed')
popupName             | Имя БЭМ-класса popup (string, 'cookie-accept-popup')
customCSS             | Добавление собсвенных css правил (boolean, false)
```