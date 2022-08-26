import './StatsScreen.scss'
import React, {useEffect, useState} from "react";
import MovingObjectContainer from "../../components/MovingObjectContainer/MovingObjectContainer";
import heroAva from "../../assets/img/hero_ava.png";


interface StatsScreenProps {
    isActive: boolean;
}

function StatsScreen({isActive} : StatsScreenProps) {

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

    return (
        <div className="StatsScreen">
            <div className="StatsContainer">
                <MovingObjectContainer isActive={activeAnim}/>
                <div className="HeroContainer">
                    <img src={heroAva} className="HeroAva"/>
                    <div className="HeroNick">@KeyLord</div>

                    <div className="HeroDesc">
                        Эта страница - кладезь некоторых моих увлечений/умений/etc! Вы можете включить анимацию передвижения этих карточек, нажав на кнопку снизу, но будьте внимательны, заряд может истощиться!
                        <span onClick={() => setIsUnlimited(true)} style={{cursor: 'pointer'}}>(нажмите на это предложение, чтобы отключить заряд)</span> Также вы можете навести курсор на карточку и остановить её.
                    </div>

                    <div className="HeroChangeName">Заряд анимации</div>

                    <div className="battery"><div className="battery__charge" style={{left: currentChange - 100 + '%'}}/></div>

                    {activeAnim
                        ? <div onClick={() => setActiveAnim(false)} className="activate_button deactivated">отключить</div>
                        : <div onClick={() => (currentChange > 0 || isUnlimited) && setActiveAnim(true)} className="activate_button">активировать</div>}

                    <div className="anim_square"/>

                    {isUnlimited && <div className="secret_desc">// бесконечный заряд</div>}
                </div>
            </div>
        </div>
    )
}

export default StatsScreen
