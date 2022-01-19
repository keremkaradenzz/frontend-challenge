import React from 'react';
import styles from '../../styles/Header.module.css';
const Header = ({children}: {children: React.ReactNode}) =>{
    return (
        <div className={styles.header}>
            <nav className={styles.nav}>
                <h1>DEMO Streaming</h1>
                <div>
                    <p>Log in</p>
                    <button>
                        Start your free trail
                    </button>
                </div>
            </nav>
        
        {children}
    </div>
    )
}


export default Header;