import clsx from "clsx";

interface Props {
  callback: () => void;
  text: string;
  size?: "s" | "m" | "l";
  is_disable?: boolean;
  fill_bg?: boolean;
  border?: boolean;
}
function Button(props: Props) {
  return (
    <div onClick={props.callback} className="flex items-center justify-center w-[250px] h-10 cursor-pointer bg-primary rounded-lg">
      <div
        className={clsx(
          `cursor-pointer w-full h-full rounded-[6px] flex items-center justify-center font-bold text-base group relative overflow-hidden transition-all ease-in-out`,
          props.fill_bg && " bg-primary text-white",
          props.border && "bg-white w-[244px] h-[34px]",
          props.is_disable && "bg-gray-300 cursor-default"
        )}
      >
        <div
          className={clsx(
            props.border &&
              "text-transparent bg-clip-text bg-gradient-to-l from-[var(--primary-gradient-1)] to-[var(--primary-gradient-2)]",
            props.is_disable && "text-gray-400"
          )}
        >
          {props.text}
        </div>

        <div
          className={clsx(
            props.fill_bg &&
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
