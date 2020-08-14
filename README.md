# react-date-select

> A select box alternative to react datepicker

[![NPM](https://img.shields.io/npm/v/react-date-select.svg)](https://www.npmjs.com/package/react-date-select) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-date-select
```

## Usage

```jsx
import React, { Component } from 'react'
import DateSelect from 'react-date-select'

class App extends Component {
  state = {
    date: new Date()
  }

  render() {
    return <DateSelect onChange={this.handleChange} />
  }

  handleChange = date => {
    this.setState({
      date
    })
  }
}
```

## License

MIT © [deXterbed](https://github.com/deXterbed)
