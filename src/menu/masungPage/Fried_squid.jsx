import '../MenuPage.css';
import React, { useState, useEffect } from 'react';
import Header_menu from '../../header/Header_menu';
import { Link } from 'react-router-dom';
import image from '../../img/masung/오징어튀김.jpg';
import image_net from '../../img/nutrient/masung.png';
import BookmarkButton from '../bookmark/Bookmark';
// import Chart from '../Chart';

function Fried_squid() {
    const logoText = "마성떡볶이";

    return (
        <div className="menu-imform">
            <Header_menu logoText={logoText} />
            <div id='gap'></div>
            <div className='bookmarkIcon'>
                <BookmarkButton />
            </div>
            <Link to="/optionMasung">
                <div className='menu-inform-wrap'>
                    <div className='menu-img'>
                        <img src={image} alt='사진' width='130' class='menu-menu-img' height='110' />
                    </div>
                    <div className='infrom-text'>
                        <div className='menu-name'>
                            오징어튀김
                        </div>
                        <div className='menu-price'>
                            3,000원
                        </div>
                    </div>
                </div>
            </Link>
            <div className='nutrient-img'>
                <img src={image_net} alt='사진' class='today-nutrient-img' width='340' height='215' />
            </div>
        </div>
    );
}

export default Fried_squid;