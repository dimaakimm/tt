import React from 'react';
import {Link} from "react-router-dom";
import classes from './Footer.module.css'
const Footer = () => {
    return (
        <footer className={classes.footer + ' clear'}>
            <div className="footerLeft">
                <Link to='/'>
                    <img src="../images/logoQPICK.svg" alt="logoQPICK"/>
                </Link>
            </div>
            <div className={classes.footerMiddle + " footerMiddle d-flex justify-between"}>
                <ul className={classes.linksLeft}>
                    <Link to='/favourites'><li>Избранное</li></Link>
                    <Link to='/cart'><li>Корзина</li></Link>
                    <Link to='/'><li>Контакты</li></Link>
                </ul>
                <div className={classes.linksRight}>
                    <ul>
                        <Link to='/favourites'>
                            <li>Условия сервиса</li>
                        </Link>
                    </ul>
                    <ul className='d-flex flex-row'>
                        <Link to='/'>
                            <li><img src="../images/planet.svg" alt="planet"/></li>
                        </Link>
                        <Link to='/'>
                            <li><img src="../images/rusLanguage.svg" alt="planet"/></li>
                        </Link>
                        <Link to='/'>
                            <li><img src="../images/engLanguage.svg" alt="planet"/></li>
                        </Link>
                    </ul>
                </div>
            </div>
            <ul className='footerRight d-flex'>
            <li>
                    <Link to='/favourites'>
                        <img src="../images/vkIcon.svg" alt="cartIcon"/>
                    </Link>
                </li>
                <li>
                    <Link to='/cart'>
                        <img className='pl-10' src="../images/tgIcon.svg" alt="cartIcon"/>
                    </Link>
                </li>
                <li>
                    <Link to='/cart'>
                        <img className='pl-10' src="../images/whatsUpIcon.svg" alt="cartIcon"/>
                    </Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;