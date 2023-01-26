import { useState } from "react";
import { useNavigate } from "react-router-dom"

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const clearForm = () => {
        setDate("");
        setTime("17:00");
        setGuests("0");
        setOccasion("");
    };

    let bookingState1 = props.bookingState;

    const onSuccess = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(bookingState1 == true) {onSuccess('/booking-confirmation')};
        clearForm();
    };

    return (
        <div className="reservation text-center">
            <h1>Available time<br></br>{props.availableTimes.join(" | ")}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input value={date} onChange={(e) => {setDate(e.target.value);}}
                    type="date" id="res-date" />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={(e) => {setTime(e.target.value);}}>
                    {props.availableTimes.map((time) => <option>{time}</option>)}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input value={guests} onChange={(e) => {setGuests(e.target.value);}}
                    type="number" placeholder="1" min="1" max="10" id="guests" />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => {setOccasion(e.target.value);}}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <button type="submit">
                    Make Your reservation
                </button>
            </form>
        </div>
    );
};
export default BookingForm;