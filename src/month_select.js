import React from 'react'
import * as utils from './date_utils'

class MonthSelect extends React.Component {
  onChange(month) {
    if (month !== this.props.month) {
      this.props.onChange(month)
    }
  }

  renderSelectOptions(monthNames) {
    return monthNames.map((M, i) => (
      <option key={i} value={i}>
        {M}
      </option>
    ))
  }

  render() {
    const monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
      this.props.useShortMonthInDropdown
        ? M => utils.getMonthShortInLocale(M, this.props.locale)
        : M => utils.getMonthInLocale(M, this.props.locale)
    )
    return (
      <select
        className={this.props.className}
        value={this.props.month}
        onChange={(e) => this.onChange(e.target.value)}
      >
        {this.renderSelectOptions(monthNames)}
      </select>
    )
  }
}

export default MonthSelect