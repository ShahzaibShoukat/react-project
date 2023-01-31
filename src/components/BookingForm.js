import { useState } from "react";
import { useNavigate } from "react-router-dom"

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

    const onSuccess = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSuccess('/booking-confirmation');
        clearForm();
    };

    const getIsFormValid = () => {
        return (
          date &&
          time !== "00:00" &&
          guests > 0 &&
          occasion !== "occasion"
        );
    };

    return (
        <div className="d-flex jc-center ai-center">
            <div className="form-reservation p-2 m-2 shadow radius">
            <h2 className="mb-1">Reservation form</h2>
            <form onSubmit={handleSubmit} className="reservation">
                <label htmlFor="date">Choose date<strong className="star">*</strong></label>
                <input name="date" value={date} onChange={(e) => {setDate(e.target.value);}}
                    type="date" id="date" aria-label="Choose date" className="pb" />
                <label htmlFor="time" aria-label="Choose time" >Choose time<strong className="star">*</strong></label>
                <select name="time" id="time" value={time} onChange={(e) => {setTime(e.target.value);}} className="pb">
                <option value={"00:00"}>Select Time</option>
                    {props.availableTimes.map((time) => <option value={time}>{time}</option>)}
                </select>
                <label htmlFor="guests">Number of guests<strong className="star">*</strong></label>
                <input name="guests" value={guests} onChange={(e) => {setGuests(e.target.value);}}
                    type="number" placeholder="1" min="0" max="20" id="guests" aria-label="Number of guests" />
                <label htmlFor="occasion" aria-label="Occasion">Occasion<strong className="star">*</strong></label>
                <select name="occasion" id="occasion" value={occasion} onChange={(e) => {setOccasion(e.target.value);}}>
                    <option value="occasion">Select Occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>
                <button className="mt-1 btn" disabled={!getIsFormValid()} type="submit">
                    Make Your reservation
                </button>
            </form>
            </div>
        </div>
    );
};
export default BookingForm;