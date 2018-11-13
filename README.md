# react-pixel-size

> Determine your screen pixel size in micrometers (with user interaction).

[![NPM](https://img.shields.io/npm/v/react-pixel-size.svg)](https://www.npmjs.com/package/react-pixel-size) [![pipeline status](https://gitlab.com/codeinthecup/react-pixel-size/badges/master/pipeline.svg)](https://gitlab.com/codeinthecup/react-pixel-size/commits/master) [![coverage report](https://gitlab.com/codeinthecup/react-pixel-size/badges/master/coverage.svg)](https://gitlab.com/codeinthecup/react-pixel-size/commits/master)

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
 
##### `cardDisplaySettings`
 - `object`
 - Default: `{}`
 - Display settings styling credit-card. It has following options:
    - `bgGradientStart` - Gradient start color (Default: `#1a845a`)
    - `bgGradientEnd` - Gradient end color (Default: `#58e0ab`)
    - `chipVariant` - Color of card's chip: `silver` or `gold` (Default: `silver`)
    - `lettersVariant` - Color of card's letters: `silver` or `gold` (Default: `silver`)
    - `withStar` - Decoration star (Default: `true`)
 - Accepted by: `CardPixelSize`

## License

MIT © [Bartosz 'Wunsz' Jabłoński | Code in the Cup](https://codeinthecup.pl/)
