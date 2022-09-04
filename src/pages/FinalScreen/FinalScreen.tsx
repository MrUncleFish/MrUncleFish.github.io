import './FinalScreen.scss'
import React, {Fragment, useEffect, useRef, useState} from "react";
interface FinalScreenProps {
    isActive: boolean;
}

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

function FinalScreen({isActive} : FinalScreenProps) {

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

    const openRatingChoose = (e: React.MouseEvent) => setActiveChooseRating(true);
    const closeRatingChoose = (e: React.MouseEvent) => setActiveChooseRating(false);
    const setRating = (e: React.MouseEvent) => {

        if (!activeChooseRating) return;

        // @ts-ignore
        let clickWidth = e.clientX - ratingRef.current.getBoundingClientRect().x;
        // @ts-ignore
        let generalWidth = ratingRef.current.getBoundingClientRect().width;

        setRatingWidth(clickWidth / generalWidth * 100);
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
               {isMobile()
                   ? <div className="row">
                       <div className="vk_icon"/>
                       <div className="tg_icon"/>
                       <div className="inst_icon"/>
                       <div className="gl_icon"/>
                       <div className="gm_icon"/>
                       <div className="gh_icon"/>
                   </div>
                   : <Fragment><div className="row">
                    <div className="vk_icon"/>
                    <div className="tg_icon"/>
                    <div className="inst_icon"/>
                </div>
                <div className="row">
                    <div className="gl_icon"/>
                    <div className="gm_icon"/>
                    <div className="gh_icon"/>
                </div></Fragment>}
            </div>

            <div className="kate_container">
                <a>За рисунки спасибо <a>Kate</a></a>
            </div>

            <div className="text_container">
                Вот и всё, конечная страница. И что остаётся в конце? Возможно, вам захочется связаться со мной,
                или просто посмотреть на меня соц сетях, и как раз для этого вы можете протыкать прекрасный список
                соц сетей, или же поставить оценку сайту с помощью слова-ползунка, он будет благодарен.
            </div>

            <div className="rating_container">
                <div className="text_left">
                    Технология проставления оценки:<br/>
                    -наведите на слово;<br/>
                    -зажмите левую кнопку мыши;<br/>
                    -передвигайте ползунок оценки;<br/>
                    -???<br/>
                    -PROFIT!
                </div>
                <div ref={ratingRef}
                     style={{background: '-webkit-linear-gradient(0deg, yellow ' + ratingWidth + '%, black ' + ratingWidth + '%)',}}
                     className="rating"  onMouseDown={openRatingChoose} onMouseUp={closeRatingChoose} onMouseMove={setRating} onMouseLeave={closeRatingChoose}>звездочки</div>
                <div>{Math.ceil(ratingWidth)}%</div>
            </div>
        </div>
    </div>
}

export default FinalScreen
