import React from 'react'
import { useState } from 'react';
import './index.css';
import Select from 'react-select'

const BookingForm = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState({
        value: "1",
    });
    const [occasion, setRole] = useState("occasion");


    const clearForm = () => {
        setDate("");
        setTime("");
        setGuest({
            value: "1",
        });
        setRole("role");
    };
    
    const  availableTimes = [
        { value: "12:00", label:'12:00 PM at 02/15/2023'},
        { value: "13:00", label:'13:00 PM at 02/15/2023'},
        { value: "16:00", label:'16:00 PM at 02/15/2023'},
        { value: "18:00", label:'18:00 PM at 02/15/2023'},
    ];
    

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Booking Success!");
        clearForm();
    };
//how to create react function?
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Booking form</h2>
                    <div className="Field">
                        <label>
                            Choose Date <sup>*</sup>
                        </label>
                        <input
                        value={date}
                        type='date'
                        inputFormat="MM/dd/yyyy"
                        placeholder="Date"
                        onChange={(e) => { 
                            setDate(e.target.value); 
                          }} 
                        
                        />
                    </div>
                    <div className="Field">
                        <label>
                            Choose Time <sup>*</sup>
                        </label>
                       <Select 
                        value ={availableTimes.find(({value}) => value===time)}
                        type="time"
                        placeholder="Time"
                        options={availableTimes}
                        onChange={(e) => { 
                            setTime(e); 
                          }} />

                    </div>

                    <div className="Field">
                        <label id='guests'>
                            Number of guests:
                        </label>
                        <input
                            aria-labelledby='guests'
                            value={guest.value}
                            type="number"
                            placeholder="Number of guests"
                            min={1}
                            max={10}
                            onChange={(e) => { 
                                setGuest(e.target.value); 
                              }} 
                        />
                    </div>
                    <div className="Field">
                        <label>
                            Occasion <sup>*</sup>
                        </label>
                        <select value={occasion} onChange={(e) => setRole(e.target.value)}>
                            <option value="occasion">Occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>
                    <button type="submit">
                        Book Now
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

export default BookingForm