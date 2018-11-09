# react-pixel-size

> Determine your screen pixel size in micrometers (with user interaction).

[![NPM](https://img.shields.io/npm/v/react-pixel-size.svg)](https://www.npmjs.com/package/react-pixel-size) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

`react-pixel-size` is a library that helps you determine actual size (in micrometers) of the pixel on user's device by allowing it to measure a physical object like credit card or ruler with pixels (see examples).

## Install

```bash
npm install --save react-pixel-size
```
or
```bash
yarn add react-pixel-size
```

## Usage

```jsx
import React, { Component } from 'react';
import {CardPixelSize, RulerPixelSize, DiagonalPixelSize} from 'react-pixel-size';

class Example extends Component {
  handlePixelSizeChange = (pixelSize) => {
    console.log(pixelSize);
  }
  
  render () {
    return (
      <CardPixelSize onResultChange={this.handlePixelSizeChange} />   
      <RulerPixelSize onResultChange={this.handlePixelSizeChange} />   
      <DiagonalPixelSize onResultChange={this.handlePixelSizeChange} />
    );
  }
}
```

See `example` catalog for more usages.

## API
##### `onPixelSizeChange`
 - `function(number)`
 - Default: `null`
 - Callback fired when pixel size calculation is done.
 - Accepted by: `CardPixelSize`, `RulerPixelSize`, `DiagonalPixelSize`
 
##### `minDiff`
 - `number`
 - Default: `1`
 - Minimal value by which `grow`/`shrink` is done when resizing by buttons.
 - Accepted by: `CardPixelSize`, `RulerPixelSize`
 
##### `buttonsProps`
 - `object`
 - Default: `{}`
 - All props passed to the `div` element wrapping `grow` and `shrink` buttons.
 - Accepted by: `CardPixelSize`, `RulerPixelSize`
 
##### `growComponentProps`
 - `object`
 - Default: `{}`
 - All props passed to the `grow` button.
 - Accepted by: `CardPixelSize`, `RulerPixelSize`
 
##### `shrinkComponentProps`
 - `object`
 - Default: `{}`
 - All props passed to the `grow` button.
 - Accepted by: `CardPixelSize`, `RulerPixelSize`
 
##### `inputComponentProps`
 - `object`
 - Default: `{}`
 - All props passed to the diagonal `input` element.
 - Accepted by: `DiagonalPixelSize`
 
##### `growComponent`
 - `Component|node`
 - Default: `<button />`
 - Component handling clicks resulting in resizable grow.
 - Accepted by: `CardPixelSize`, `RulerPixelSize`

##### `shrinkComponent`
 - `Component|node`
 - Default: `<button />`
 - Component handling clicks resulting in resizable shrink.
 - Accepted by: `CardPixelSize`, `RulerPixelSize`

##### `inputComponent`
 - `Component|node`
 - Default: `<input type="number" min="0" />`
 - Component to receive the screen diagonal value.
 - Accepted by: `DiagonalPixelSize`

##### `rulerLength`
 - `number`
 - Default: `3`
 - Number of centimeters displayed on the ruler element.
 - Accepted by: `RulerPixelSize`
 
##### `screenWidth`
 - `number`
 - Default: `screen.width`
 - Custom screen resolution width (by default taken from `screen` global).
 - Accepted by: `DiagonalPixelSize`
 
##### `screenHeight`
 - `number`
 - Default: `screen.height`
 - Custom screen resolution height (by default taken from `screen` global).
 - Accepted by: `DiagonalPixelSize`
 
##### `millimeters`
 - `bool`
 - Default: `false`
 - Number of centimeters displayed on the ruler element.
 - Accepted by: `DiagonalPixelSize`


## License

MIT © [Bartosz 'Wunsz' Jabłoński | Code in the Cup](https://codeinthecup.pl/)
