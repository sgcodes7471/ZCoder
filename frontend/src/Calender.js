
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatesMatrix from './DatesMatrix';
import CalenderHeader from './CalenderHeader';
import Weeks from './Weeks';
import Contests from './Contests';

const generateDates = () => {
    const calender = [[]]
    const date = new Date();
    const year = date.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[date.getMonth()];
    const firstDay = new Date(year, date.getMonth(), 1);
    const lastDay = new Date(year, date.getMonth() + 1, 0);
    let week = 0;

    for(let i =0;i< firstDay.getDay();i++){
        calender[week].push(null)                                                      
    }

    for(let i=1;i<=lastDay.getDate();i++){
        if(calender[week].length == 7){
            week++
            calender[week] = []
        } 
        calender[week].push(i)                                                    
    }

    while(calender[week].length<7){
        calender[week].push(null)
    }
    console.log(calender)
    return calender
}

const Calendar = () => {
    const dates = generateDates()
    const currentDay = new Date().getDate();
    const [selectedDay , setSelectedDay ] = useState(null)
    const daySelectHandler = (day) => {
        setSelectedDay(day)
    }

    return (
        <div className='body-wrapper flex' style={{height:'100vh'}}>
            <div className="calender-block-wrapper flex2">
            <CalenderHeader/>
            <Weeks/>
            <DatesMatrix dates={dates} currentDay={currentDay} onSelect={daySelectHandler}/>
            <Contests day = {selectedDay} />
        </div>
        </div>
    );
};

export default Calendar;