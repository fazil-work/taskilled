import React from "react";
import { ArrowChevron } from "../../Assets/SVGs/icons";
import "./Style/cal.css"

const arrMonth = {
	Yanvar: 31,
  Fevral: 28,
	Mart: 31,
	Aprel: 30,
	May: 31,
	İyun: 30,
	İyul: 31,
	Avqust: 31,
	Sentyabr: 30,
	Oktyabr: 31,
	Noyabr: 30,
	Dekabr: 31
};
const arrDays = [
	"B",
	"B.e",
	"Ç.a",
	"Ç",
	"C.a",
	"C",
	"Ş",
];

class RightBlock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstDay: new Date(
				this.props.date.getFullYear() +
					"-" +
					(this.props.date.getMonth() + 1) +
					"-01"
			).getDay(),
			selectedYear: this.props.date.getFullYear(),
			selectedMonth: this.props.date.getMonth(),
			selectedDay: this.props.date.getDate()
		};
	}
	updateMonth = event => {
		let newMonth = Object.keys(arrMonth).indexOf(event.target.value);
		this.handleToUpdateDate(this.state.selectedDay + "/" + newMonth + "/" + this.state.selectedYear);
		this.setState({
			selectedMonth: newMonth,
			firstDay: new Date(
				this.state.selectedYear + "-" + (newMonth + 1) + "-01"
			).getDay()
		});
	};
	prevMonth = () => {
		if (this.state.selectedMonth - 1 < 0) {
			this.handleToUpdateDate(this.state.selectedDay + "/" + 11 + "/" + this.state.selectedYear -1);
			this.setState(prevState => ({
				selectedMonth: 11,
				selectedYear: prevState.selectedYear - 1,
				firstDay: new Date(prevState.selectedYear - 1 + "-" + "12-01").getDay()
			}));
		} else {
			this.handleToUpdateDate(this.state.selectedDay + "/" + this.state.selectedMonth -1 + "/" + this.state.selectedYear);
			this.setState(prevState => ({
				selectedMonth: prevState.selectedMonth - 1,
				firstDay: new Date(
					this.state.selectedYear + "-" + prevState.selectedMonth + "-01"
				).getDay()
			}));
		}
	};
	nextMonth = () => {
		if (this.state.selectedMonth + 1 > 11) {
			this.handleToUpdateDate(this.state.selectedDay + "/" +0 + "/" + this.state.selectedYear+1);
			this.setState(prevState => ({
				selectedMonth: 0,
				selectedYear: prevState.selectedYear + 1,
				firstDay: new Date(prevState.selectedYear + 1 + "-" + "01-01").getDay()
			}));
		} else {
			this.handleToUpdateDate(this.state.selectedDay + "/" + this.state.selectedMonth + 1+ "/" + this.state.selectedYear);
			this.setState(prevState => ({
				selectedMonth: prevState.selectedMonth + 1,
				firstDay: new Date(
					this.state.selectedYear + "-" + (prevState.selectedMonth + 2) + "-01"
				).getDay()
			}));
		}
	};
	updateYear = event => {
		if (event.target.value.length === 4) {
			this.handleToUpdateDate(this.state.selectedDay + "/" + this.state.selectedMonth + "/" + event.target.value);
			this.setState({
				selectedYear: parseInt(event.target.value),
				firstDay: new Date(
					parseInt(event.target.value) + "-" + (this.state.selectedMonth + 1) + "-01"
				).getDay()
			});
		} else if (event.target.value.length > 0) {
			this.setState({
				selectedYear: parseInt(event.target.value)
			});
		}
	};
	handleClick = event => {
		this.handleToUpdateDate(event.currentTarget.dataset.id + "/" + this.state.selectedMonth + "/" + this.state.selectedYear);
			this.setState({
			selectedDay: parseInt(event.currentTarget.dataset.id)
		});
	};

	getDayBlocks() {
		let arrNo = [];
		for (let n = 0; n < this.state.firstDay; n++) {
			arrNo.push(<div className="day-block" />);
		}
		for (
			let i = 1;
			i < Object.values(arrMonth)[this.state.selectedMonth] + 1;
			i++
		) {
			arrNo.push(
				<div
					data-id={i}
					onClick={this.handleClick}
					className={`day-block ${i === this.state.selectedDay ? "active" : ""}`}
				>
					<div className="inner">{i}</div>
				</div>
			);
		}
		return arrNo;
	}
	render() {
		this.handleToUpdateDate = this.props.handleToUpdateDate;

		const monthOptions = Object.keys(arrMonth).map(month => (
			<option
				className="option-month"
				selected={
					month === Object.keys(arrMonth)[this.state.selectedMonth] ? "selected" : ""
				}
			>
				{month}
			</option>
		));

		return (
			<div className="flip-container-right">
				<div className={`flipper ${this.props.toggle ? "" : "toggle"}`}>
					<div className="front front-right">
						<div className="container-date-picker">
							<button className="btn btn-prev" onClick={this.prevMonth}>
								{ArrowChevron(.8)}
							</button>
							<select className="select-month" onChange={this.updateMonth}>
								{monthOptions}
							</select>
							{/* <input
								type="text"
								className="input-year"
								onChange={this.updateYear}
								value={this.state.selectedYear}
								maxlength="4"
							/> */}
							<button className="btn btn-next" onClick={this.nextMonth}>
								{ArrowChevron(.8)}
							</button>
						</div>
						<div className="container-day">
							{arrDays.map(day => (
								<div className="weekday">{day}</div>
							))}
							{this.getDayBlocks()}
						</div>
					</div>
					{/* <div className="back back-right">
						<div className="container-events">{this.getEvents()} </div>
					</div> */}
				</div>
			</div>
		);
	}
}

export class Calendar extends React.Component {
	constructor(props) {
		super(props);
		let date = new Date();
		this.state = {
			date: date,
			toggle: true,
			eventList: [],
			selectedDate: date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
		};
	}

	handleToUpdate = isToggle => {
		this.setState({ toggle: isToggle });
	};
	handleToUpdateSubmit = (time, event) => {
		this.setState(prevState => {
			const list = [...prevState.eventList, [this.state.selectedDate, time, event]];
			return {
			eventList: list
			}
		});
	};
  handleToUpdateDate = (date) =>{
    this.setState({
      selectedDate: date
    });
  }
	componentDidMount() {
		this.timerID = setInterval(this.tick, 1000); //refresh each second
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick = () => {
		this.setState({
			date: new Date()
		});
	};

	render() {
		return (
      <div className="outer calendar">
        <div className="wrapper">
          <RightBlock date={this.state.date} toggle={this.state.toggle} handleToUpdateDate={this.handleToUpdateDate} eventList={this.state.eventList}/>
        </div>
      </div>
		);
	}
}