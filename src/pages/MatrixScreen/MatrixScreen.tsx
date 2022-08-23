import './MatrixScreen.scss'
import React, {Fragment} from "react";
import {generateRandomIntegerInRange, getRandomNumberList} from "../../functions/math";
import RandomNumberColumn from "../../components/RandomNumberColumn/RandomNumberColumn";

interface MatrixScreenProps {
    isActive: boolean;
}

function MatrixScreen({isActive} : MatrixScreenProps) {

    if (isActive) console.log(1);

    const randomNumbers = getRandomNumberList(20, 5, 43);

    return (
        <div className="ThirdScreen">
            <div className="row">
                {randomNumbers.map((value, index) =>  <RandomNumberColumn key={index} length={value}/>)}
            </div>
            <div className="top_space"/>

            <div className="rowContent">
                <div className="table">
                    Тремболо
                </div>
                <div className="buttonColumn">
                    <div className="button">нажать</div>
                    <div className="button">нажать</div>
                    <div className="button">нажать</div>
                    <div className="button">нажать</div>
                    <div className="button">нажать</div>
                </div>
            </div>

        </div>
    )
}

export default MatrixScreen
