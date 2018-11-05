# react-pixel-size

> Determine your screen pixel size in micrometers (with user interaction).

[![NPM](https://img.shields.io/npm/v/react-pixel-size.svg)](https://www.npmjs.com/package/react-pixel-size) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

`react-pixel-size` is a library that helps you determine actual size (in micrometers) of the pixel on user's device by allowing it to measure a physical object like credit card or ruler with pixels (see examples).

## Install

```bash
npm install --save react-pixel-size
```

## Usage

```jsx
import React, { Component } from 'react'

import ReactPixelSize from 'react-pixel-size'

class Example extends Component {
  render () {
    return (
      <ReactPixelSize />
    )
  }
}
```

## License

MIT © [Bartosz 'Wunsz' Jabłoński | Code in the Cup](https://codeinthecup.pl/)
