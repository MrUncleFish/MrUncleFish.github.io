import './StatsScreen.scss'
import React, {Fragment, useEffect, useState} from "react";
import MovingObjectContainer from "../../components/MovingObjectContainer/MovingObjectContainer";
import heroAva from "../../assets/img/hero_ava.png";
import {isMobile, isTooWideForStats} from "../../functions/mobile";
import {MOVING_OBJECT_LIST} from "../../config/MovingObjectList";


interface StatsScreenProps {
    isActive: boolean;
}

function StatsScreen({isActive}: StatsScreenProps) {

    const [activeAnim, setActiveAnim] = useState(false);
    const [isUnlimited, setIsUnlimited] = useState(false);
    const [currentChange, setCurrentChange] = useState(100);
    const [changeChangeBlocked, setChangeChangeBlocked] = useState(false);

    useEffect(() => {

        console.log(10);

        if (currentChange <= 0 && !isUnlimited && activeAnim) {
            setActiveAnim(false);
            return;
        }

        if (changeChangeBlocked || !activeAnim || isUnlimited) return;
        setChangeChangeBlocked(true);

        setTimeout(() => {

            setCurrentChange(currentChange - 1);
            setChangeChangeBlocked(false);

        }, 100)

    }, [changeChangeBlocked, currentChange, activeAnim, isUnlimited]);

    if (isMobile()) return (
        <div className="StatsScreen">
            <div className="StatsContainer StatsContainer__mobile">
                <div className="HeroContainer">
                    <img src={heroAva} className="HeroAva"/>
                    <div className="HeroNick">@KeyLord</div>
                    <div>
                        <div className="HeroDesc">
                            Эта страница - кладезь некоторых моих увлечений/умений/etc!
                        </div>
                    </div>
                </div>
                <div className="GalleryContainer">
                    {MOVING_OBJECT_LIST.map((item) => <div key={item.id} className="GalleryItem">
                        <div className="FloatContainer_block__title">{item.title}</div>
                        <div className="FloatContainer_block__desc">{item.desc}</div>
                    </div>)}
                </div>
                <div className="GalleryCounter">
                    1/3
                </div>
            </div>
        </div>
    )

    return (
        <div className="StatsScreen">
            <div className={isTooWideForStats() ? "StatsContainer StatsContainer__wide" : "StatsContainer"}>
                <MovingObjectContainer isActive={activeAnim}/>
                <div className="HeroContainer">
                    <img src={heroAva} className="HeroAva"/>
                    <div className="HeroNick">@KeyLord</div>

                    <div className="HeroDesc">
                        Эта страница - кладезь некоторых моих увлечений/умений/etc! Вы можете включить анимацию
                        передвижения этих карточек, нажав на кнопку снизу, но будьте внимательны, заряд может
                        истощиться!
                        <span onClick={() => setIsUnlimited(true)} style={{cursor: 'pointer'}}>(нажмите на это предложение, чтобы отключить заряд)</span> Также
                        вы можете навести курсор на карточку и остановить её.
                    </div>

                    <div className="HeroChangeName">Заряд анимации</div>

                    <div className="battery">
                        <div className="battery__charge" style={{left: currentChange - 100 + '%'}}/>
                    </div>

                    {activeAnim
                        ? <div onClick={() => setActiveAnim(false)}
                               className="activate_button deactivated">отключить</div>
                        : <div onClick={() => (currentChange > 0 || isUnlimited) && setActiveAnim(true)}
                               className="activate_button">активировать</div>}

                    {isUnlimited && <div className="secret_desc">// бесконечный заряд</div>}
                </div>
            </div>
        </div>
    )
}

export default StatsScreen
