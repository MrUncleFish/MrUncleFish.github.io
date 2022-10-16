import './StatsScreen.scss'
import React, {useEffect, useState} from "react";
import MovingObjectContainer from "../../components/MovingObjectContainer/MovingObjectContainer";
import heroAva from "../../assets/img/hero_ava.jpg";
import {MOVING_OBJECT_LIST} from "../../config/MovingObjectList";
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";


interface StatsScreenProps {
    isActive: boolean;
    mobile: boolean;
    wideScreen: boolean;
}

function StatsScreen({isActive, mobile, wideScreen}: StatsScreenProps) {

    const [activeAnim, setActiveAnim] = useState(false);
    const [isUnlimited, setIsUnlimited] = useState(false);
    const [currentChange, setCurrentChange] = useState(100);
    const [changeChangeBlocked, setChangeChangeBlocked] = useState(false);

    useEffect(() => {

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

    if (mobile) return (
        <div className="stats__screen">
            <div className="stats__container stats_container__mobile">
                <div className="hero__container">
                    <img src={heroAva} className="hero__ava"/>
                    <div className="hero__nick">@KeyLord</div>
                    <div>
                        <div className="hero__desc">
                            Эта страница - кладезь некоторых моих увлечений/умений/etc!
                        </div>
                    </div>
                </div>
                <Swiper
                    slidesPerView={1.5}
                    spaceBetween={20}
                    pagination={{
                        type: "fraction",
                        horizontalClass: "GalleryCounter"
                    }}
                    centeredSlides={true}
                    modules={[Pagination]}
                    className="gallery_container">
                    {MOVING_OBJECT_LIST.map((item) => <SwiperSlide key={item.id} className="gallery_item">
                        <div className="float_container__block_title">{item.title}</div>
                        <div className="float_container__block_desc">{item.desc}</div>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    )

    return (
        <div className="stats__screen">
            <div className={wideScreen ? "stats__container stats_container__wide" : "stats__container"}>
                <MovingObjectContainer isActive={activeAnim}/>
                <div className="hero__container">
                    <img src={heroAva} className="hero__ava"/>
                    <div className="hero__nick">@KeyLord</div>

                    <div className="hero__desc">
                        Эта страница - кладезь некоторых моих увлечений/умений/etc! Вы можете включить анимацию
                        передвижения этих карточек, нажав на кнопку снизу, но будьте внимательны, заряд может
                        истощиться!
                        <span onClick={() => setIsUnlimited(true)} style={{cursor: 'pointer'}}>(нажмите на это предложение, чтобы отключить заряд)</span> Также
                        вы можете навести курсор на карточку и остановить её.
                    </div>

                    <div className="hero__change_name">Заряд анимации</div>

                    <div className="battery">
                        <div className="battery__charge" style={{left: currentChange - 100 + '%'}}/>
                    </div>

                    {activeAnim
                        ? <div onClick={() => setActiveAnim(false)}
                               className="button__activate button__deactivated">отключить</div>
                        : <div onClick={() => (currentChange > 0 || isUnlimited) && setActiveAnim(true)}
                               className="button__activate">активировать</div>}

                    {isUnlimited && <div className="secret__desc">// бесконечный заряд</div>}
                </div>
            </div>
        </div>
    )
}

export default StatsScreen
