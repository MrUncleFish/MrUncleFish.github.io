import './BodyPage.scss'
import StartScreen from "../StartScreen/StartScreen";
import React, {useEffect, useState} from "react";
import AboutScreen from "../AboutScreen/AboutScreen";
import MatrixScreen from "../MatrixScreen/MatrixScreen";
import ScrollHandler from "../../components/ScrollHandler/ScrollHandler";
import StatsScreen from "../StatsScreen/StatsScreen";
import FinalScreen from "../FinalScreen/FinalScreen";

function BodyPage() {

    const [page, setPage] = useState(4);
    const [blockChangePage, setBlockChangePage] = useState(false);
    const pages = [
        <StartScreen/>,
        <AboutScreen isActive={page === 1}/>,
        <MatrixScreen isActive={page === 2}/>,
        <StatsScreen isActive={page === 3}/>,
        <FinalScreen isActive={page === 4}/>
    ];

    useEffect(() => {
        if (blockChangePage) setTimeout(() => setBlockChangePage(false), 250);
    }, [blockChangePage]);

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

    return (
        <div onKeyDown={keyPressHandler} tabIndex={0} onKeyUp={keyPressHandler} onWheel={wheelHandler}
             className="BodyPage" style={{top: '-' + (page * 100) + '%'}}>
            <ScrollHandler/>
            {pages.map((e, id) => <div key={id}>{e}</div>)}
        </div>
    )
}

export default BodyPage
