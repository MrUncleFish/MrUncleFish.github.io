import './BodyPage.scss'
import StartScreen from "../StartScreen/StartScreen";
import React, {useEffect, useState} from "react";
import SecondScreen from "../SecondScreen/SecondScreen";

function BodyPage() {

    const pages = [
        <StartScreen/>,
        <StartScreen/>,
        <StartScreen/>,
        <StartScreen/>,
        <SecondScreen/>
    ];
    const [page, setPage] = useState(0);
    const [blockChangePage, setBlockChangePage] = useState(false);

    const tryToChangePage = (pageNumber: number) => {

        if (pageNumber > 0) {
            if (!blockChangePage && pages.length - 1 !== page) {
                setPage(page + 1);
                setBlockChangePage(true);
            }
        }

        if (pageNumber < 0) {
            if (!blockChangePage) {
                setPage(page - 1);
                setBlockChangePage(true);
            }
        }
    }

    useEffect(() => {
        window.addEventListener('mousewheel', (e) => e.preventDefault(), {passive: false});
        window.addEventListener('keydown', (e) => e.preventDefault(), {passive: false});

        return () => {
            window.removeEventListener('mousewheel', (e) => e.preventDefault())
            window.removeEventListener('keydown', (e) => e.preventDefault())
        }
    }, []);

    useEffect(() => {
        if (blockChangePage) setTimeout(() => setBlockChangePage(false), 250);
    }, [blockChangePage]);

    const wheelHandler = (e: React.WheelEvent) => {

        window.scrollTo(0, 0);
        if (e.deltaY > 0) {
            tryToChangePage(1);
        } else {
            tryToChangePage(-1);
        }
    }

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowDown") tryToChangePage(1);
        if (e.key === "ArrowUp") tryToChangePage(-1);
    }

    return (
        <div onKeyDown={keyPressHandler} tabIndex={0} onKeyUp={keyPressHandler} onWheel={wheelHandler} className="BodyPage" style={{top: '-' + (page * 100) + '%'}}>
            {pages.map((e, id) => <div key={id}>{e}</div>)}
        </div>
    )
}

export default BodyPage
