import './BodyPage.scss'
import StartScreen from "../StartScreen/StartScreen";
import React, {useEffect, useState} from "react";
import AboutScreen from "../AboutScreen/AboutScreen";
import MatrixScreen from "../MatrixScreen/MatrixScreen";
import ScrollHandler from "../../components/ScrollHandler/ScrollHandler";
import StatsScreen from "../StatsScreen/StatsScreen";
import FinalScreen from "../FinalScreen/FinalScreen";
import {isMobile, isTooWideForStats} from "../../functions/mobile";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";

function BodyPage() {

    const [page, setPage] = useState(0);
    const [blockChangePage, setBlockChangePage] = useState(false);
    const [mobile, setMobile] = useState(false);
    const [wideScreen, setWideScreen] = useState(false);
    const pages = [
        <StartScreen/>,
        <AboutScreen isActive={page === 1}/>,
        <MatrixScreen isActive={page === 2}/>,
        <StatsScreen isActive={page === 3} mobile={mobile} wideScreen={wideScreen}/>,
        <FinalScreen isActive={page === 4} mobile={mobile}/>
    ];

    useEffect(() => {
        if (blockChangePage) setTimeout(() => setBlockChangePage(false), 250);
    }, [blockChangePage]);

    useEffect(() => {
        updateConfig();
        window.addEventListener("resize", updateConfig);
    }, []);

    const updateConfig = () => {
        setMobile(isMobile());
        setWideScreen(isTooWideForStats());

        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        console.log('config');
    }

    const wheelHandler = (e: React.WheelEvent) => {

        window.scrollTo(0, 0);
        if (e.deltaY > 0) tryToChangePage(1);
        else tryToChangePage(-1);
    }

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowDown") tryToChangePage(1);
        if (e.key === "ArrowUp") tryToChangePage(-1);
    }

    const tryToChangePage = (pageNumber: number) => {
        if (pageNumber > 0 && !blockChangePage && pages.length - 1 !== page) changePage(page + 1);
        if (pageNumber < 0 && !blockChangePage) changePage(page - 1);
    }

    const changePage = (pageNumber: number) => {
            setPage(pageNumber);
            setBlockChangePage(true);
    }

    if (mobile) return (
        <Swiper initialSlide={page} direction={"vertical"} className="BodyPage__mobile" onSlideChange={(e) => setPage(e.realIndex)}>
            {pages.map((e, id) => <SwiperSlide key={id}>{e}</SwiperSlide>)}
        </Swiper>
    )

    return (
        <div onKeyDown={keyPressHandler} tabIndex={0} onKeyUp={keyPressHandler} onWheel={wheelHandler}
             className="BodyPage" style={{top: '-' + (page * 100) + '%'}}>
            <ScrollHandler/>
            {pages.map((e, id) => <div key={id}>{e}</div>)}
        </div>
    )
}

export default BodyPage
