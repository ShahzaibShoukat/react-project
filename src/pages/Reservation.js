import BookingForm from "../components/BookingForm";

const Reservation = (props) => {
  return (
    <div>
      <BookingForm  availableTimes={props.availableTimes} bookingState={props.bookingState} />
    </div>
  );
};
export default Reservation;