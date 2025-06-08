
# Locales Manager

A simple Locale manager for JavaScript apps and browser environments.

Supports:

✅ Language code  
✅ Name  
✅ Direction (`ltr` / `rtl`)  
✅ Inline SVG flag  
✅ Easy switching between locales

---

## Installation

```bash
npm install locales-manager
```

Or include directly in the browser:

```html
<script src="https://cdn.jsdelivr.net/npm/locales-manager"></script>
```

---

## Usage

### In the Browser (IIFE build)

```html
<script src="https://cdn.jsdelivr.net/npm/locales-manager"></script>
<script>
    const locales = new Locales([
        { name: 'English', code: 'en', dir: 'ltr', flag: '<svg></svg>' },
        { name: 'Arabic', code: 'ar', dir: 'rtl', flag: '<svg></svg>' }
    ]);

    console.log(locales.current().getName());  // Example: "English"
</script>
```

---

### In Modern Apps (ES Modules)

```js
import Locales from 'locales-manager';

const locales = new Locales([
    { name: 'English', code: 'en', dir: 'ltr', flag: '<svg></svg>' },
    { name: 'Arabic', code: 'ar', dir: 'rtl', flag: '<svg></svg>' }
]);

console.log(locales.current().getName());
```

---

## API

### `new Locales(supportedLocales: LocaleEntityData[])`

Creates a new Locales manager.

**`LocaleEntityData` type:**

```ts
{
    name: string;
    code: string;
    dir: string; // "ltr" or "rtl"
    flag: string; // Inline SVG string
}
```

---

### Locales instance methods

#### `locales.get()`

Returns the list of supported `LocaleEntity` instances.

#### `locales.current()`

Returns the current `LocaleEntity`.

#### `locales.setLocale(langCode: string)`

Sets the current locale to the given language code.

#### `locales.has(langCode: string)`

Returns `true` if the language is supported.

#### `locales.getByCode(langCode: string)`

Returns the `LocaleEntity` for the given language code, or `undefined`.

---

### LocaleEntity methods

#### `getName()`

Returns the locale's name.

#### `getCode()`

Returns the locale's code.

#### `getDir()`

Returns the locale's text direction.

#### `getSvgFlag(width: number, height: number)`

Returns the SVG flag string with specified width and height.

---

## Example

```js
const locales = new Locales([
    { name: 'English', code: 'en', dir: 'ltr', flag: '<svg>...</svg>' },
    { name: 'Arabic', code: 'ar', dir: 'rtl', flag: '<svg>...</svg>' }
]);

console.log(locales.current().getCode());  // 'en'

locales.setLocale('ar');

console.log(locales.current().getDir());   // 'rtl'
```

---

## Build (for contributors)

To build the library:

```bash
npm install
npm run build
```

Outputs to `dist/`:

- `dist/index.js` → IIFE for browsers
- `dist/index.esm.js` → ESM for modern bundlers

---

## License

MIT

---

## Author

[Ahmed Fathy](https://github.com/ahmed-aliraqi)
