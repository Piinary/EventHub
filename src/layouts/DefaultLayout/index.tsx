import Heading from "../components/Heading";
import styles from './defaultLayout.module.css';
import SideBar from '../components/SideBar';
import React from 'react';
import clsx from 'clsx';
function DefaultLayout({children}: {children: React.ReactNode}) {
    return ( <div>  
        {/* <Heading />  */}
        <div className={styles.wrapper}>
            <SideBar position="left" />
            <div className={clsx(styles.border_wrapper)}>{children}</div>
            <SideBar position="right"/>
        </div>
    </div> );
}

export default DefaultLayout;