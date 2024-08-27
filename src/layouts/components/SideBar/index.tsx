import clsx from 'clsx';
import styles from './sideBar.module.css';

import SuggestTag from '../../../components/SuggestTag';
interface Props {
    position: 'left' | 'right';
}
function SideBar(props: Props) {
    
    return ( <div className={clsx(props.position =='left'?  styles.position_l: styles.position_r, styles.wrapper)}>
        <SuggestTag data={{}} />
    </div> );
}

export default SideBar;