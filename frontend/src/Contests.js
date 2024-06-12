import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Contests = ({ day }) => {
    const [contests, setContests] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchContests = async () => {
            try{
                const response = await axios.get('https://codeforces.com/api/contest.list');
                const contests = response.data.result.filter((contest) => new Date(contest.startTimeSeconds * 1000).getDate() === day);
                setContests(contests);
                setLoading(false);
            }catch(error){
                alert('Failed to fetch the contests date due to Network issues')
            }
        };
        fetchContests();
    }, [day]);
    
    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (contests.length === 0) {
        return <div>No contests found on this day.</div>;
    }
    
    return (
        <div>
        {contests.map((contest) => (
            <div key={contest.id}>
            <h3>{contest.name}</h3>
            <p>Start time: {new Date(contest.startTimeSeconds * 1000).toLocaleString()}</p>
            <p>Duration: {contest.durationSeconds / 3600} hours</p>
            </div>
        ))}
        </div>
    );
};

export default Contests;