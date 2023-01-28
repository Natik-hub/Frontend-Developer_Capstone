import React from 'react'
import { useState } from 'react';
import './index.css';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created!");
        clearForm();
    };
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
                        <input
                        value={time}
                        type="time"
                        placeholder="Time"
                        onChange={(e) => { 
                            setTime(e.target.value); 
                          }} 
                        
                        />
                    </div>

                    <div className="Field">
                        <label>
                            Number of guests<sup>*</sup>
                        </label>
                        <input
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
                        Create account
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

export default BookingForm