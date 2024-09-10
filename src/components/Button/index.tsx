interface Props {
    callback: () => void,
    text: string,
    size?: 's'|'m'|'l',
    is_enable?: boolean,
    fill_bg?: boolean,
    border?: boolean,
}
function Button(props: Props) {
    return (
        <div
            className="cursor-pointer w-[250px] h-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-base group relative border 
            border-solid overflow-hidden transition-all ease-in-out"
          >
            {props.text}
            <div className="
            absolute top-[-50px] left-[-75px] w-[50px] h-[155px] bg-white opacity-20 
            transform rotate-[35deg] transition-all duration-[600ms] 
            ease-in-out z-[999990] after:content-[''] group-hover:left-[160%]" ></div> 
          </div>
     );
}

export default Button;