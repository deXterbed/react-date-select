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

export default App