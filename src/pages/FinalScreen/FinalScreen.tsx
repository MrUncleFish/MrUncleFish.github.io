import './FinalScreen.scss'
import React, {useEffect, useRef, useState} from "react";
interface FinalScreenProps {
    isActive: boolean;
}

import meteor1 from "../../assets/img/paint/meteor_1.png";
import meteor2 from "../../assets/img/paint/meteor_2.png";
import meteor3 from "../../assets/img/paint/meteor_3.png";
import sun1 from "../../assets/img/paint/sun-1.png";
import sun2 from "../../assets/img/paint/sun-2.png";
import sun3 from "../../assets/img/paint/sun-3.png";

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

function FinalScreen({isActive} : FinalScreenProps) {

    const [animState, setAnimState] = useState(0);
    const [ratingWidth, setRatingWidth] = useState(0);
    const [activeChooseRating, setActiveChooseRating] = useState(false);
    const [animTickBlock, setAnimTickBlock] = useState(false);
    const ratingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (animTickBlock) return;
        setAnimTickBlock(true);

        setTimeout(() => {

            if (animState >= 2) setAnimState(0);
            else setAnimState(animState + 1);

            setAnimTickBlock(false);

        }, 300);

    },  [animState, animTickBlock]);

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
            <div className="rope"/>
            <img src={animSun[animState] || animSun[0]} className="sun"/>
            <img src={animMeteors[animState] || animMeteors[0]} className="meteor meteor__anim1"/>
            <img src={animMeteors[animState] || animMeteors[0]} className="meteor meteor__anim2"/>
            <img src={animMeteors[animState] || animMeteors[0]} className="meteor meteor__anim3"/>
            <div className="star"/>
            <div className="smile"/>

            <div className="icon_container">
                <div className="icon_title">Мои соцсети:</div>
                <div className="row">
                    <div className="vk_icon"/>
                    <div className="tg_icon"/>
                </div>
                <div className="row">
                    <div className="inst_icon"/>
                    <div className="gh_icon"/>
                </div>
                <div className="row">
                    <div className="gl_icon"/>
                    <div className="gm_icon"/>
                </div>
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
