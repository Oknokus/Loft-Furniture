import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import phoneImg from "../../../assets/phoneImg.svg";
import deliveryImg from "../../../assets/deliveryImg.svg";
import logoImg from "../../../assets/logoImg.svg";
import searchImg from "../../../assets/searchImg.svg";
import bagImg from "../../../assets/bagImg.svg";
import wishlistImg from "../../../assets/wishlistImg.svg";
import profileImg from "../../../assets/profileImg.svg";

import kitchenImg from "../../../assets/categoryImg/kitchenImg.svg";
import livingroomImg from "../../../assets/categoryImg/livingroomImg.svg";
import bedroomImg from "../../../assets/categoryImg/bedroomImg.svg";
import closetImg from "../../../assets/categoryImg/closetImg.svg";
import officeImg from "../../../assets/categoryImg/officeImg.svg";
import childrensroomImg from "../../../assets/categoryImg/childrensroomImg.svg";
import etcImg from "../../../assets/categoryImg/etcImg.svg";


import bgTitleImg from "../../../assets/bgTitleImg.png"


import styles from './Header.module.css';


const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.headerBlack_container}>
                    <div>
                        <ul className={styles.header_nav}>
                            <li>
                                <Link to={"/"}>Главная</Link>
                            </li>
                            <li>
                                <a href="#">О нас</a>
                            </li>
                            <li>
                                <a href="#">Контакты</a>
                            </li>
                        </ul>
                    </div>

                    <div >
                        <ul className={styles.header_info}>
                            <li>
                                <img 
                                    className={styles.header_infoImg}
                                    src={phoneImg} alt="phoneImg" />
                                <span>8 (964) 89 99 119</span>
                            </li>
                            <li>
                                <img
                                    className={styles.header_infoImgDev} 
                                    src={deliveryImg} alt="deliveryImg" />
                                <a href="#">Доставка</a>
                            </li>                       
                        </ul>
                    </div>

                </div>

                <div className={styles.headerWhite_container}>
                    <div className={styles.headerWhite_containerItems}>
                        <div>
                            <a href="#">
                                <img 
                                className={styles.headerWhiteLogo}
                                src={logoImg} alt="logoImg" />
                            </a>                            
                        </div>

                        <div className={styles.headerWhite_containerItemsInput}>
                            <input 
                                className={styles.headerWhite_input}
                                type="text" placeholder='Поиск' />
                            <img src={searchImg} alt="searchImg" />
                        </div>

                        <div className={styles.headerWhite_icon}>
                            <a href="#"><img src={wishlistImg} alt="wishlistImg" /></a>
                            <a href="#"><img src={bagImg} alt="bagImg" /></a>
                            <Link to={"/register"}><img src={profileImg} alt="profileImg" /></Link>
                        </div>
                    </div>
                </div>

                <div className={styles.header_category}>
                    <ul className={styles.header_categoryUl}>
                        <li>
                            <img src={kitchenImg} alt="kitchenImg" />
                            <a href="#">Кухни</a>
                        </li>
                        <li>
                            <img src={bedroomImg} alt="bedroomImg" />
                            <a href="#">Спальни</a>
                        </li>
                        <li>
                            <img src={livingroomImg} alt="livingroomImg" />
                            <a href="#">Гостинные</a>
                        </li>
                        <li>
                            <img src={closetImg} alt="closetImg" />
                            <a href="#">Прихожие</a>
                        </li>
                        <li>
                            <img src={officeImg} alt="officeImg" />
                            <a href="#">Офисная мебель</a>
                        </li>
                        <li>
                            <img src={childrensroomImg} alt="childrensroomImg" />
                            <a href="#">Детская</a>
                        </li>
                        <li>                           
                            <a href="#">Акция</a>
                        </li>
                        <li>                           
                            <a href="#"><img src={etcImg} alt="etcImg" /></a>
                        </li>
                    </ul>
                </div>
                <div className={styles.layout_container}>
                    <img src={bgTitleImg} alt="bgTitleImg" />
                    
                    <div className={styles.container_title}>
                        <h2>LOFT <br/>
                            МЕБЕЛЬ
                        </h2>
                        <p>Современная и удобная мебель в Анапе</p>
                        <button>СМОТРЕТЬ КАТАЛОГ</button>

                    </div>
                    <p>Хиты продаж</p>
                </div>
            </div>
                           
        </>
    )
}
export default Header;