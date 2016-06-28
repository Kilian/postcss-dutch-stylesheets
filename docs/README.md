# PostCSS Dutch Style Sheets

[![travis](https://img.shields.io/travis/kilian/postcss-dutch-stylesheets.svg?style=flat-square)](https://travis-ci.org/kilian/postcss-dutch-stylesheets)
[![npm](https://img.shields.io/npm/v/postcss-dutch-stylesheets.svg?style=flat-square)](https://www.npmjs.com/package/postcss-dutch-stylesheets)

> [PostCSS](https://github.com/postcss/postcss) plugin for writing Dutch Style Sheets.

Take CSS to the next level and write your CSS in Dutch!

## Installation

```console
$ npm install postcss-dutch-stylesheets
```

## Usage

```js
// ES5
var dutchStyleSheets = require('postcss-dutch-stylesheets')

// ES6
import dutchStyleSheets from 'postcss-dutch-stylesheets'
```

See [PostCSS#Usage](https://github.com/postcss/postcss#usage) for usage for your environment.

## Example

Using this `input.css`:

```css
.foo {
    höhe: 300px;
    außenabstand-unten: 10px;
    schriftgröße: 20px !wichtig;
    hintergrundfarbe: schwarz;
    farbe: weiß;
}
```

you will get:

```css
.foo {
    height: 300px;
    margin-bottom: 10px;
    font-size: 20px !important;
    background-color: black;
    color: white;
}
```

## Documentation

- [Properties](https://github.com/kilian/postcss-dutch-stylesheets/blob/master/docs/Properties.md)
- [Values](https://github.com/kilian/postcss-dutch-stylesheets/blob/master/docs/Values.md)

## Contributing

`postcss-ditch-stylesheets` has only a subset of CSS and needs your help to add more Dutch properties and values.

## Changelog

See [CHANGELOG.md](https://github.com/kilian/postcss-dutch-stylesheets/blob/master/CHANGELOG.md).

## License

See [LICENSE](https://github.com/kilian/postcss-dutch-stylesheets/blob/master/LICENSE).

## Attribution

Postcss-dutch-stylesheets is fully based on [postcss-german-stylesheets](https://github.com/timche/postcss-german-stylesheets) by [timche](https://github.com/timche), all credit goes to them.
