const CalenderHeader = () => {
    const today= new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    return (  
        <div className="flex" style={{justifyContent:'space-between', width:'25vw',height:'15vh'}}>
            <h1>{monthNames[today.getMonth()]},{today.getFullYear()}</h1>
            <h4>{weekNames[today.getDay()]}</h4>
        </div>
    );
}

export default CalenderHeader;