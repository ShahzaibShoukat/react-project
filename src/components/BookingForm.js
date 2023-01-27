import { useState } from "react";
import { useNavigate } from "react-router-dom"


const PasswordErrorMessage = () => {
    return (
      <p className="FieldError">Password should have at least 8 characters</p>
    );
};



const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("00:00");
    const [guests, setGuests] = useState("0");
    const [occasion, setOccasion] = useState("occasion");
    const clearForm = () => {
        setDate("");
        setTime("00:00");
        setGuests("0");
        setOccasion("occasion");
    };

    let bookingState1 = props.bookingState;

    const onSuccess = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(bookingState1 === true) {onSuccess('/booking-confirmation')};
        clearForm();
    };

    const getIsFormValid = () => {
        return (
          date &&
          time !== "select-time" &&
          guests > 0 &&
          occasion !== "select-occasion"
        );
    };

    return (
        <div className="reservation">
            <h1 className="text-center">Available time<br></br>{props.availableTimes.join(" | ")}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date<strong className="star">*</strong></label>
                <input value={date} onChange={(e) => {setDate(e.target.value);}}
                    type="date" id="res-date" aria-label="Choose date" />
                <label htmlFor="res-time" aria-label="Choose time" >Choose time<strong className="star">*</strong></label>
                <select id="res-time" value={time} onChange={(e) => {setTime(e.target.value);}}>
                <option value={"select-time"}>Select Time</option>
                    {props.availableTimes.map((time) => <option value={time}>{time}</option>)}
                </select>
                <label htmlFor="guests">Number of guests<strong className="star">*</strong></label>
                <input value={guests} onChange={(e) => {setGuests(e.target.value);}}
                    type="number" placeholder="1" min="0" max="20" id="guests" aria-label="Number of guests" />
                <label htmlFor="occasion" aria-label="Occasion">Occasion<strong className="star">*</strong></label>
                <select id="occasion" value={occasion} onChange={(e) => {setOccasion(e.target.value);}}>
                    <option value="select-occasion">Select Occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>
                <button disabled={!getIsFormValid()} type="submit">
                    Make Your reservation
                </button>
            </form>
        </div>
    );
};
export default BookingForm;