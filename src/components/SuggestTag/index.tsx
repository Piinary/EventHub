import DefaultErrorImage from '../../assets/default_error_image.png';
import DefaultAvatar from '../../assets/default-avatar.svg';
interface Props {

    data: any
}
function SuggestTag(props: Props) {
    
    return (
    <div >
        <img src={props.data.img||DefaultErrorImage} alt="loading" />
        <div>
            <span>title</span>
            <div className='flex '>
                <img className='w-5 h-5' src={props.data.avatar|| DefaultAvatar} alt="error" />
                <span>Piinary</span>
            </div>
        </div>
    </div>);
}

export default SuggestTag;