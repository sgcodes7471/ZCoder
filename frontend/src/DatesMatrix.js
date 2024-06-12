const DatesMatrix = ({ dates, currentDay , onSelect }) => {
    return (
        <div className="flex2">
            {dates.map((date, index) => (
                <div key={date} className="flex" >
                    {date.map((day) => (
                        <div style={{width:'5vw',height:'5vh',borderRadius:'2vh',padding:'1vh', cursor:'pointer',backgroundColor: day === currentDay ? 'rgba(255, 0, 0, 0.5)' : 'inherit'}}
                        onClick={() => {onSelect(day)}} 
                        key={Math.random()}>{day}</div>
                    ))}
                </div>
            ))}
        </div>
    );
};
export default DatesMatrix;