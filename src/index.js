import React from 'react'

import {
  newDate,
  setMonth,
  getMonth,
  getDate,
  setDate,
  setYear,
  getYear
} from './date_utils'

import MonthSelect from './month_select'
import YearSelect from './year_select'
import DaySelect from './day_select'

class DateSelect extends React.Component {
  constructor(props) {
    super(props)

    this.containerRef = this.refs.containerRef

    this.state = {
      date: this.getDateInView(),
      selectingDate: null,
      monthContainer: null
    }
  }

  componentDidMount() {
    this.props.onChange(this.state.date)
  }

  changeMonth = (month) => {
    this.setState(
      ({ date }) => ({
        date: setMonth(date, month)
      }),
      () => this.props.onChange(this.state.date)
    )
  }

  changeYear = (year) => {
    this.setState(
      ({ date }) => ({
        date: setYear(date, year)
      }),
      () => this.props.onChange(this.state.date)
    )
  }

  changeDate = (day) => {
    this.setState(
      ({ date }) => ({
        date: setDate(date, day)
      }),
      () => this.props.onChange(this.state.date)
    )
  }

  getDateInView() {
    const { preSelection, selected, openToDate } = this.props
    const current = newDate()
    const initialDate = openToDate || selected || preSelection
    if (initialDate) {
      return initialDate
    }
    return current
  }

  renderMonthSelect() {
    return (
      <MonthSelect
        className="month-select"
        locale={this.props.locale}
        onChange={this.changeMonth}
        month={getMonth(this.state.date)}
      />
    )
  }

  renderYearSelect() {
    return (
      <YearSelect
        className="year-select"
        locale={this.props.locale}
        onChange={this.changeYear}
        year={getYear(this.state.date)}
      />
    )
  }

  renderDaySelect() {
    return (
      <DaySelect
        className="day-select"
        locale={this.props.locale}
        onChange={this.changeDate}
        date={this.state.date}
        day={getDate(this.state.date)}
      />
    )
  }

  render() {
    return (
      <div ref={this.containerRef} className="react-date-select-container">
        {this.renderDaySelect()}
        {this.renderMonthSelect()}
        {this.renderYearSelect()}
      </div>
    )
  }
}

export default DateSelect
