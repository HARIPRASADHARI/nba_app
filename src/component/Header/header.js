import React from 'react';
import {Link} from 'react-router-dom';
import style from './header.css';
import FontAwesome from 'react-fontawesome';
import SideNavigation from './SideNav/sidenav';

const Header = (props) =>{

    const logo=()=>{
        return(
            <Link to ="/" className={style.logo}>
                <img alt ="nba" src="/images/nba_logo.png"/>
            </Link>
        )
    }
    const navBars=()=>{
        return(
            <div className={style.bars}>
                <FontAwesome name="bars" 
                    onClick={props.onOpenNav}
                    style={{
                        color:'#dfdfdf',
                        padding:'10px',
                        cursor:'pointer'
                    }}
                />
            </div>
        )
    }

    return(
        <header className={style.header}>
            <SideNavigation {...props}/>
            <div className={style.headerOpt}>
                {navBars()}
                {logo()}
            </div>
        </header>
    )
}

export default Header;