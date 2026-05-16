"use client";

import { useSwiper} from 'swiper/react'
import { PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'

export default function WorkSliderButtons({containerStyles, btnStyles, iconsStyles}){
    const swiper = useSwiper();

    return (
        <div className={containerStyles}>
            <button className={btnStyles} onClick={() => swiper.slidePrev()} aria-label="Previous slide">
                <PiCaretLeftBold className={iconsStyles}/>
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()} aria-label="Next slide">
                <PiCaretRightBold className={iconsStyles}/>
            </button>
        </div>
    );



}