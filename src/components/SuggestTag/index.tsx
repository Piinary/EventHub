import DefaultErrorImage from '../../assets/poster.png'; 
interface Props {
    data: any
}
function SuggestTag(props: Props) {
    
    return (
    <div className='flex align-center'>
        <img className='w-[72px] h-[72px]' src={props.data.img||DefaultErrorImage} alt="loading" />
        <div className='ml-[6px] flex-1 w-[100%]'>
            <div className='min-h-10'><span className='text-xs font-bold text-left line-clamp-2'>{props.data.title||`Vòng Bán kết Khu vực | FPT Edu Tích Tịch Tình Tang 2024| FPT Edu Tích Tịch Tình Tang 2024| FPT Edu Tích Tịch Tình Tang 2024`} </span></div>
            <div className='flex '>
                <img className='w-5 h-5 rounded-full' src={props.data.avatar|| DefaultErrorImage} alt="error" />
                <span className='ml-[4px] text-slate-400'>{props.data.host||`Piinary`}</span>
            </div>
        </div>
    </div>);
}
export default SuggestTag;