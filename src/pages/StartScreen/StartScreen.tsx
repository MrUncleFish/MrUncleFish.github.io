import './StartScreen.scss'
import {useEffect, useState} from "react";

function StartScreen() {

    const [eyeCoord, setEyeCoord] = useState([80, 25]);

    // top 12%-64%
    // left 12%-69%
    // 88 - 120

    const step = 1;

    useEffect(() => {

        setTimeout(() => {
             setEyeCoord([getXCoord(eyeCoord[0], eyeCoord[1]), getYCoord(eyeCoord[0], eyeCoord[1])]);
        }, 10);

    }, [eyeCoord]);

    function generateRandomIntegerInRange(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const getXCoord = (currentXCoord: number, currentYCoord: number) => {

        if (currentXCoord > 68) return currentXCoord - step;
        if (currentXCoord < 13) return currentXCoord + step;

        if (currentXCoord + currentYCoord > 119) return currentXCoord - step;
        if (currentXCoord + currentYCoord < 89) return currentXCoord + step;

        return generateRandomIntegerInRange(0, 1) === 0 ? currentXCoord - step : currentXCoord + step;
    }

    const getYCoord = (currentXCoord: number, currentYCoord: number) => {

        if (currentYCoord > 68) return currentYCoord - step;
        if (currentYCoord < 13) return currentYCoord + step;

        if (currentXCoord + currentYCoord > 119) return currentYCoord - step;
        if (currentXCoord + currentYCoord < 89) return currentYCoord + step;

        return generateRandomIntegerInRange(0, 1) === 0 ? currentYCoord - step : currentYCoord + step;
    }

    return (
        <div className="StartScreen">
            <div className="eye">
                <div className="eye_left">
                    <div className="eye_entry" style={{top: eyeCoord[1] + '%', left: eyeCoord[0] + '%'}}>
                        <div/>
                    </div>
                </div>
                <div className="eye_right">
                    <div className="eye_entry_r" style={{top: eyeCoord[1] + '%', right: 150 - eyeCoord[0] + '%'}}>
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
