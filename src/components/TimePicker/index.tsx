import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

interface Props {
  setTime: (time: string) => void;

}

function TimePicker(props:Props) {
  return (
      <Datetime onChange={(e) => props.setTime(e.toLocaleString())}
        className="flex-1 h-[32px] rounded-lg bg-[var(--neutral)] border-none" 
        inputProps={{ className: "w-full h-full border-none text-center focus:outline-none bg-[var(--neutral)] rounded-lg text-[var(--primary-gradient-2)] text-base" }} 
      />   
  );
}

export default TimePicker;
