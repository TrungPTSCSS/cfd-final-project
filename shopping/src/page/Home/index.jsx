import React from 'react'
import { Footer } from '../../components'
import Banner from './components/Banner'
import BestPick from './components/BestPick'
import Brand from './components/Brand'
import CountDown from './components/CountDown'
import Promotion from './components/Promotion'
import Review from './components/Review'
import TopSellers from './components/TopSellers'

export default function Home() {
    let listSlider=[
        {
            title:'Women',
            image:'./img/covers/cover-1.jpg',
            type:'women',
            titleButton:'Shop Women'
        },
        {
            title:'Men',
            image:'./img/covers/cover-2.jpg',
            type:'men',
            titleButton:'Shop Men'
        },
        {
            title:'Kids',
            image:'./img/covers/cover-3.jpg',
            type:'kids',
            titleButton:'Shop Kids'
        }
    ]
    return (
        <div>
            <div className="py-3 bg-dark bg-pattern mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Text */}
                            <div className="text-center text-white">
                                <span className="heading-xxs letter-spacing-xl">
                                    ⚡️ Happy Holiday Deals on Everything ⚡️
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Banner listBanner={listSlider} />
            {/* FEATURES */}
            <Promotion />
            {/* BEST PICKS */}
            <BestPick />
            {/* TOP SELLERS */}
            <TopSellers />
            {/* COUNTDOWN */}
            <CountDown />
            {/* REVIEWS */}
            <Review />
            {/* BRANDS */}
            <Brand />
        </div>
    )
}
