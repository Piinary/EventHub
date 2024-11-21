import { Minus, Plus } from "lucide-react";

interface Props {
  onChange: (value: number) => void;
  capacity: number;
}
function CounterInput(props: Props) {
  // const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <div
        className="w-[22px] h-[22px] flex justify-center items-center bg-gray-100 border-1 border-[var(--primary-gradient-2)] rounded-l cursor-pointer"
        onClick={() => props.onChange(props.capacity - 1)}
      >
        <Minus size={18} stroke="var(--primary-gradient-2)" />
      </div>

      {/* <div className="px-2 h-[22px] flex justify-center items-center border-y border-[var(--primary-gradient-2)]">
        {count}
      </div> */}
      <input
        type="text"
        value={props.capacity}
        onChange={(e) => {
          props.onChange(parseInt(e.target.value));
          if (parseInt(e.target.value)) {
            props.onChange(parseInt(e.target.value));
            props.onChange(parseInt(e.target.value));
          }
        }}
        className="focus-visible:outline-0 h-[22px] w-10 flex justify-center items-center text-center border-y border-[var(--primary-gradient-2)] bg-white text-black"
      />

      <div
        className="w-[22px] h-[22px] flex justify-center items-center bg-gray-100 border-1 border-[var(--primary-gradient-2)] rounded-r cursor-pointer"
        onClick={() => props.onChange(props.capacity + 1)}
      >
        <Plus size={18} stroke="var(--primary-gradient-2)" />
      </div>
    </div>
  );
}

export default CounterInput;
