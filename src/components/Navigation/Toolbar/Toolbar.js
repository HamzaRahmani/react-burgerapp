import React from 'react';
import styles from './Toolbar.css';
import Logo from '../../Logo/Logo'; 
import NavigationItems from '../NavItems/NavItems';
const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <div>MENU</div>
        <div className={styles.Logo}> <Logo/></div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;