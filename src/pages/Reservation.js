import BookingForm from "../components/BookingForm";

const Reservation = (props) => {
  return (
    <>
      <h1 className="text-center">Reservation</h1>
      <div className="center">
        <BookingForm  availableTimes={props.availableTimes} />
      </div>
    </>
  );
};
export default Reservation;