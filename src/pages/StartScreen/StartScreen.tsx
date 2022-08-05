import './StartScreen.scss'
import {useEffect, useState} from "react";

function StartScreen() {

    const [eyeCoord, setEyeCoord] = useState(0);

    // top 12%-64%
    // left 12%-69%
    // 88 - 120 82.5, 65,

    const coordList = [
        [82.5, 65],
        [40, 40],
        [60, 20],
        [55, 40],
        [55, 55],
        [110, 50],
        [130, 37.5],
        [110, 20],
        [110, 40],
        [82.5, 20],
        [82.5, 40],
    ];

    useEffect(() => {

        setTimeout(() => {

            let newCoord = eyeCoord;
            while (newCoord === eyeCoord) {
                newCoord = generateRandomIntegerInRange(1, coordList.length-1)
            }

             setEyeCoord(newCoord);

        }, eyeCoord === 0 ? 3000 : 1000);

    }, [eyeCoord]);

    function generateRandomIntegerInRange(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    return (

        <div className="StartScreen">
            <div className="eye">
            </div>
            <div className="eye_entity">
                <div className="eye_entity__container">
                    <div className="eye_entry" style={{top: coordList[eyeCoord][1] + '%', left: coordList[eyeCoord][0] + '%'}}>
                        <div/>
                    </div>
                </div>
                <div className="eye_entity__container">
                    <div className="eye_entry_r" style={{top: coordList[eyeCoord][1] + '%', right: 165 - coordList[eyeCoord][0] + '%'}}>
                        <div/>
                    </div>
                </div>
            </div>

            <div className="titleContainer">
                <div className="titleContainer__column">
                    <div className="titleText first">
                        <div className="bg_closer__right"/>
                        Приветствую!
                    </div>
                    <div className="titleText second">
                        <div className="bg_closer__right"/>
                        и я уже давно
                    </div>
                </div>
                <div className="titleContainer__column">
                    <div className="titleText third">
                        <div className="bg_closer__right"/>
                        меня зовут Дядя Рыба
                    </div>
                    <div className="titleText fourth">
                        <div className="bg_closer__right"/>
                        Frontend-разработчик
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartScreen
