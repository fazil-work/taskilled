import React, { useState } from 'react'
import { ArrowChevron } from "../../Assets/SVGs/icons";
import "./Style/cal.css"

const objMonth = {
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

const arrWeekDays = ["B", "B.e", "Ç.a", "Ç", "C.a", "C", "Ş",];
const arrMonths = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];

const CalendarLogic = ({date, toggle, handleToUpdateDate,pastDate}) => {

  const [firstDay, setFirstDay] = useState(new Date(date.getFullYear() + "-" + (date.getMonth() + 1) + "-01").getDay())
  const [selectedYear, setSelectedYear] = useState(date.getFullYear())
  const [selectedMonth, setSelectedMonth] = useState(date.getMonth())
  const [selectedDay, setSelectedDay] = useState(date.getDate())

	const prevMonth = () => {
		if (selectedMonth - 1 < 0) {
			handleToUpdateDate(selectedDay + "/" + 11 + "/" + selectedYear -1);
      setSelectedMonth(11)
      setSelectedYear(selectedYear - 1)
      setFirstDay(new Date(selectedYear - 1 + "-" + "12-01").getDay())
		} else {
      handleToUpdateDate(selectedDay + "/" + selectedMonth -1 + "/" + selectedYear);
      setSelectedMonth(selectedMonth - 1)
      setFirstDay(new Date(selectedYear + "-" + selectedMonth + "-01").getDay())
		}
	};

	const nextMonth = () => {
		if (selectedMonth + 1 > 11) {
			handleToUpdateDate(selectedDay + "/" + 0 + "/" + selectedYear+1);
      setSelectedMonth(0)
      setSelectedYear(selectedYear + 1)
      setFirstDay(new Date(selectedYear + 1 + "-" + "01-01").getDay())
		} else {
			handleToUpdateDate(selectedDay + "/" + selectedMonth + 1+ "/" + selectedYear);
			setSelectedMonth(selectedMonth + 1)
      setFirstDay(new Date(selectedYear + "-" + (selectedMonth + 2) + "-01").getDay())
		}
	};

	const handleClick = event => {
		let dateX = (selectedMonth + 1 < 10 ? "0" + (selectedMonth + 1) : (selectedMonth + 1)) + "/" + event.currentTarget.dataset.id + "/" + selectedYear;
		let now = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
		
		Date.parse(dateX) < Date.parse(now) ? pastDate(true) : pastDate(false)
		Date.parse(dateX) >= Date.parse(now) && setSelectedDay(parseInt(event.currentTarget.dataset.id));
		handleToUpdateDate(dateX);
	};

	function getDayBlocks() {
		let arrDays = [];

		[...Array(firstDay)].map((day, index) => {
			arrDays.push(<div key={index} className="dayBlock" />);
		});

		for (let i = 1; i < Object.values(objMonth)[selectedMonth] + 1; i++) {
			arrDays.push(
				<div key={Math.random()} data-id={i} onClick={handleClick} className={`dayBlock ${i === selectedDay ? "active" : ""}`}>
					<div className="inner">{i}</div>
				</div>
			);
		}

		return arrDays;
	}

  return (
    <div className="flipContainerRight">
      <div className={`flipper ${toggle ? "" : "toggle"}`}>
        <div className="front frontRight">

          <div className="containerDatePicker">
            <button className="btn btnPrev" onClick={prevMonth}>
              {ArrowChevron(.8)}
            </button>
						<p>
              {arrMonths[selectedMonth]}
						</p>
            <button className="btn btnNext" onClick={nextMonth}>
              {ArrowChevron(.8)}
            </button>
          </div>

          <div className="containerDay">
            {arrWeekDays.map((day, index) => (
              <div key={index} className="weekday">{day}</div>
            ))}
            {getDayBlocks()}
          </div>

        </div>
      </div>
    </div>
  )
}

export const Calendar = () => {

  const [date, setDate] = useState(new Date())
  const [toggle, setToggle] = useState(true)
  const [selectedDate, setSelectedDate] = useState("")
  const [pastDate, setPastDate] = useState(false)

  const handleToUpdateDate = (dateX) =>{
		let now = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear()

		if(Date.parse(dateX) >= Date.parse(now)){
			setSelectedDate(dateX)
		}
  }

  return (
    <div>
      <div className="outer calendar">
        <div className="wrapper">
          <CalendarLogic
						date={date}
						toggle={toggle}
						handleToUpdateDate={handleToUpdateDate}
						pastDate={setPastDate}
					/>
					{console.log(selectedDate)}
					{(!pastDate && selectedDate) && <h3 className='chosenDate'>{selectedDate}</h3>}
					{pastDate && <p className='noPastDates chosenDate'>Keçmiş tarixlərə tapşırıq təyin edə bilməzsiniz</p>}
        </div>
      </div>
    </div>
  )
}