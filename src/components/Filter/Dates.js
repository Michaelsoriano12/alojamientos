import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./filters.css";

const Dates = ({ userDate, setUserDate }) => {
  return (
    <div className="dates">
      <div className="date-filter">
        <DatePicker
          className="date-style"
          selected={userDate.from}
          //onChange={(target) => handleDate("from", target)}
          onChange={(date) => setUserDate({ ...userDate, from: date })}
          dateFormat="yyyy/MM/dd"
          minDate={new Date()}
          placeholderText="Ingrese primer día de hospedaje"
        ></DatePicker>
      </div>
      <div className="date-filter">
        <DatePicker
          className="date-style"
          selected={userDate.to}
          //onChange={(target) => handleDate("to", target)}
          onChange={(date) => setUserDate({ ...userDate, to: date })}
          dateFormat="yyyy/MM/dd"
          minDate={new Date()}
          placeholderText="Ingrese ultimo día de hospedaje"
        ></DatePicker>
      </div>
    </div>
  );
};
export default Dates;
