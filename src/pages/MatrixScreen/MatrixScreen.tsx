import './MatrixScreen.scss'
import React, {Fragment} from "react";
import {generateRandomIntegerInRange, getRandomNumberList} from "../../functions/math";
import RandomNumberColumn from "../../components/RandomNumberColumn/RandomNumberColumn";
import {getMaxrixNumbersCount} from "../../functions/mobile";

interface MatrixScreenProps {
    isActive: boolean;
}

function MatrixScreen({isActive} : MatrixScreenProps) {

    if (isActive) console.log(1);

    const randomNumbers = getRandomNumberList(getMaxrixNumbersCount(), 5, 43);

    return (
        <div className="ThirdScreen">
            <div className="row">
                {randomNumbers.map((value, index) =>  <RandomNumberColumn key={index} length={value}/>)}
            </div>

            <div className="rowContent">
                <div className="table">
                    Тремболо
                </div>
                <div className="buttonColumn">
                    <div className="button">
                        <div className="button__title">Мой паблик</div>
                        <div className="button__role">Владелец</div>
                    </div>
                    <div className="button">
                        <div className="button__title">Игра</div>
                        <div className="button__role">Frontend разработчик</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MatrixScreen
