import clsx from "clsx";
import { Check } from "lucide-react";
interface Props {
  callback: () => void;
  text: string;
  size?: "s" | "m" | "l";
  is_disable?: boolean;
  fill_bg?: boolean;
  border?: boolean;
  checked?: boolean;
}
function Button(props: Props) {
  return (
    <div
      onClick={props.callback}
      className={clsx(
        `flex items-center justify-center cursor-pointer bg-primary rounded-lg`,
        props.size === "s" && props.border && "w-fit h-fit p-[2px]",
        props.size === "s" && props.fill_bg && "w-fit h-fit py-[2px] px-[6px]",
        props.size === "m" && "w-[250px] h-[40px]"
      )}
    >
      <div
        className={clsx(
          `cursor-pointer w-full h-full rounded-[6px] flex items-center justify-center font-bold text-base group relative overflow-hidden transition-all ease-in-out`,
          props.fill_bg && " bg-primary text-white",
          props.border && props.size === "m" && "bg-white w-[246px] h-[36px]",
          props.border && props.size === "s" && "bg-white w-fit h-fit px-1 ",
          props.is_disable && "bg-gray-300 cursor-default"
        )}
      >
        <div
          className={clsx(
            `flex items-center justify-center gap-1`,
            props.border &&
              "text-transparent bg-clip-text bg-gradient-to-l from-[var(--primary-gradient-1)] to-[var(--primary-gradient-2)]",
            props.is_disable && "text-gray-400"
          )}
        >
          {props.text}
          <Check className={clsx(props.checked ? "block" : "hidden")}></Check>
        </div>

        <div
          className={clsx(
            props.fill_bg &&
              props.size === "m" &&
              "absolute top-[-50px] left-[-75px] w-[50px] h-[155px] bg-white opacity-20 transform rotate-[35deg] transition-all duration-[600ms] ease-in-out z-[999990] after:content-[''] group-hover:left-[160%]"
          )}
        ></div>
        <div
          className={clsx(
            props.is_disable &&
              "absolute top-[-10px] left-20 border-l-[3px] border-l-transparent border-t-[40px] border-t-gray-200 border-r-[3px] border-r-transparent rotate-45"
          )}
        ></div>
        <div
          className={clsx(
            props.is_disable &&
              "absolute bottom-[-10px] right-20 border-l-[4px] border-l-transparent border-b-[50px] border-t-gray-200 border-r-[4px] border-r-transparent rotate-45"
          )}
        ></div>
      </div>
    </div>
  );
}

export default Button;
