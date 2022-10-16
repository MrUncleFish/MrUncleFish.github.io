import './MatrixScreen.scss'
import React, {Fragment, useEffect, useState} from "react";
import {generateRandomIntegerInRange, getRandomNumberList} from "../../functions/math";
import RandomNumberColumn from "../../components/RandomNumberColumn/RandomNumberColumn";
import {getMaxrixNumbersCount, isMobile, isTooWideForStats} from "../../functions/mobile";

interface MatrixScreenProps {
    isActive: boolean;
}

function MatrixScreen({isActive} : MatrixScreenProps) {

    const [randomNumbers, setRandomNumbers] = useState(getRandomNumberList(200, 5, 43))
    const [maxCountNumbers, setMaxCountNumbers] = useState(getMaxrixNumbersCount());

    if (isActive) console.log(1);

    useEffect(() => {
        updateConfig();
        window.addEventListener("resize", updateConfig);
    }, []);

    const updateConfig = () => setMaxCountNumbers(getMaxrixNumbersCount())

    return (
        <div className="ThirdScreen">
            <div className="skill_list__container">
                {randomNumbers.slice(0, maxCountNumbers).map((value, index) =>  <RandomNumberColumn key={index} length={value}/>)}
            </div>

            <div className="row_сontent">
                <div className="table">
                    Здесь представлены мои актуальные проекты, в которых я принимаю участие.<br/>
                    Они не обязательно связаны с программированием, но они обязательно связаны со мной.<br/>
                    Так что правило простое: чем больше тут кнопок, тем больше я сейчас реализуюсь как создатель.
                </div>
                <div className="button_сolumn">
                    <a href="https://vk.com/murazorro" target="_blank"><div className="button">
                        <div className="button__title">Мой паблик</div>
                        <div className="button__role">Владелец</div>
                    </div></a>
                    <a href="https://t.me/PremiumEngineTestBot" target="_blank"><div className="button">
                        <div className="button__title">Игра</div>
                        <div className="button__role">Frontend разработчик</div>
                    </div></a>
                </div>
            </div>

        </div>
    )
}

export default MatrixScreen
