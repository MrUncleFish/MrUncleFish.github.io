import './FinalScreen.scss'
import React, {Fragment, useEffect, useRef, useState} from "react";

import meteor1 from "../../assets/img/paint/meteor_1.png";
import meteor2 from "../../assets/img/paint/meteor_2.png";
import meteor3 from "../../assets/img/paint/meteor_3.png";

import sword2 from "../../assets/img/paint/sword_2.png";
import sword3 from "../../assets/img/paint/sword_3.png";

import sun1 from "../../assets/img/paint/sun-1.png";
import sun2 from "../../assets/img/paint/sun-2.png";
import sun3 from "../../assets/img/paint/sun-3.png";


import tree from "../../assets/img/paint/tree.png";
import tree2 from "../../assets/img/paint/tree_1.png";

import wind from "../../assets/img/paint/wind_1.png";
import wind2 from "../../assets/img/paint/wind_2.png";
import wind3 from "../../assets/img/paint/wind_3.png";
import {isMobile} from "../../functions/mobile";

const animMeteors = [
    meteor1,
    meteor2,
    meteor3
]
const animSun = [
    sun1,
    sun2,
    sun3
]
const animSword = [
    sword2,
    sword3
]

interface FinalScreenProps {
    isActive: boolean;
    mobile: boolean;
}

function FinalScreen({isActive, mobile} : FinalScreenProps) {

    const [animTwoState, setAnimTwoState] = useState(0);
    const [animThreeState, setAnimThreeState] = useState(0);
    const [ratingWidth, setRatingWidth] = useState(0);
    const [activeChooseRating, setActiveChooseRating] = useState(false);
    const [animTickBlock, setAnimTickBlock] = useState(false);
    const ratingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (animTickBlock) return;
        setAnimTickBlock(true);

        setTimeout(() => {

            if (animThreeState >= 2) setAnimThreeState(0);
            else setAnimThreeState(animThreeState + 1);

            if (animTwoState >= 1) setAnimTwoState(0);
            else setAnimTwoState(animTwoState + 1);

            setAnimTickBlock(false);

        }, 300);

    },  [animTwoState, animThreeState, animTickBlock]);

    const openRatingChoose = (e: React.MouseEvent | React.TouchEvent) => setActiveChooseRating(true);
    const closeRatingChoose = (e: React.MouseEvent | React.TouchEvent) => setActiveChooseRating(false);

    const setRatingByMouse = (e: React.MouseEvent) => changeRating(e.clientX);

    const setRatingByTouch = (e: React.TouchEvent) => changeRating(e.nativeEvent.touches[0].clientX);

    const changeRating = (inputValue: number) => {

        if (!activeChooseRating) return;

        // @ts-ignore
        let clickWidth = inputValue - ratingRef.current.getBoundingClientRect().x;
        // @ts-ignore
        let generalWidth = ratingRef.current.getBoundingClientRect().width;

        let result = clickWidth / generalWidth * 100;
        if (result > 100) result = 100;
        if (result < 0) result = 0;

        setRatingWidth(result);
    }

    return <div className="FinalScreen">
        <div className="borderTop"/>
        <div className="borderLeft"/>
        <div className="borderRight"/>
        <div className="borderBottom"/>


        <div className="FinalScreen__content">
            <div className="grass"/>
            <div className="sky"/>
            <div className="home"/>
            <img src={animSun[animThreeState] || animSun[0]} className="sun"/>
            <img src={animMeteors[animThreeState] || animMeteors[0]} className="meteor meteor__anim1"/>
            <img src={animMeteors[animThreeState] || animMeteors[0]} className="meteor meteor__anim2"/>
            <img src={animMeteors[animThreeState] || animMeteors[0]} className="meteor meteor__anim3"/>
            <img src={animSword[animTwoState] || animSword[0]} className="sword"/>
            <img src={wind3} className="wind"/>
            <img src={tree} className="tree"/>
            <img src={tree2} className="tree2"/>

           <div className="icon_container">
                <div className="icon_title">Мои соцсети:</div>
               {mobile
                   ? <div className="row">
                       <a href="https://vk.com/id171138541" target="_blank"><div className="vk_icon"/></a>
                       <a href="https://t.me/FarmStreet" target="_blank"><div className="tg_icon"/></a>
                       <a href="https://www.instagram.com/key_lord20/" target="_blank"><div className="inst_icon"/></a>
                       <a href="https://gitlab.com/alex2000mn" target="_blank"><div className="gl_icon"/></a>
                       <a href="mailto:alex2000mn@gmail.com?subject=Приветствую%20Александра" target="_blank"><div className="gm_icon"/></a>
                       <a href="https://github.com/FarmStreet" target="_blank"><div className="gh_icon"/></a>
                   </div>
                   : <Fragment><div className="row">
                   <a href="https://vk.com/id171138541" target="_blank"><div className="vk_icon"/></a>
                   <a href="https://t.me/FarmStreet" target="_blank"><div className="tg_icon"/></a>
                   <a href="https://www.instagram.com/key_lord20/" target="_blank"><div className="inst_icon"/></a>
                </div>
                <div className="row">
                   <a href="https://gitlab.com/alex2000mn" target="_blank"><div className="gl_icon"/></a>
                   <a href="mailto:alex2000mn@gmail.com?subject=Приветствую%20Александра" target="_blank"><div className="gm_icon"/></a>
                   <a href="https://github.com/FarmStreet" target="_blank"><div className="gh_icon"/></a>
                </div></Fragment>}
            </div>

            <div className="kate_container">
                <span>За рисунки спасибо <a href="https://vk.com/id119792781" target="_blank">KATE</a></span>
            </div>

            <div className="text_container">
                Вот и всё, конечная страница. И что остаётся в конце? Возможно, вам захочется связаться со мной,
                или просто посмотреть на меня соц сетях, и как раз для этого вы можете протыкать прекрасный список
                соц сетей, или же поставить оценку сайту с помощью слова-ползунка, он будет благодарен.
            </div>

            <div className="rating_container">
                <div className="text_left">
                    Технология проставления оценки:<br/>
                    {mobile ? <Fragment>-зажмите пальцем текст рейтинга;<br/></Fragment> : <Fragment>-наведите на слово;<br/>-зажмите левую кнопку мыши;<br/></Fragment>}
                    -передвигайте ползунок оценки;<br/>
                    -???<br/>
                    -PROFIT!
                </div>
                <div ref={ratingRef}
                     style={{background: '-webkit-linear-gradient(0deg, yellow ' + ratingWidth + '%, black ' + ratingWidth + '%)',}}
                     className="rating"
                     onMouseDown={openRatingChoose}
                     onMouseUp={closeRatingChoose}
                     onMouseMove={setRatingByMouse}
                     onMouseLeave={closeRatingChoose}
                     onTouchStart={openRatingChoose}
                     onTouchMove={setRatingByTouch}
                     onTouchEnd={closeRatingChoose}
                >звездочки</div>
                <div>{Math.ceil(ratingWidth)}%</div>
            </div>
        </div>
    </div>
}

export default FinalScreen
