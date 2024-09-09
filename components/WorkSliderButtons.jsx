"use client";

import { useSwiper} from 'swiper/react'
import { PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'

export default function WorkSliderButtons({containerStyles, btnStyles, iconsSytles}){
    const swiper = useSwiper();

    return (
        <div className={containerStyles}>
            <button className={btnStyles}>
                <PiCaretLeftBold className={iconsSytles} onClick={() => swiper.slidePrev()}/>
            </button>
            <button className={btnStyles}>
                <PiCaretRightBold className={iconsSytles} onClick={() => swiper.slideNext()}/>
            </button>
        </div>
    );



}