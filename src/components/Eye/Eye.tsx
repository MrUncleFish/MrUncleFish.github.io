import React, {FC, Fragment, useEffect, useState} from "react";
import './Eye.scss';
import {generateRandomIntegerInRange} from "../../functions/math";

interface EyeProps {
}

const Eye: FC<EyeProps> = () => {

    const [eyeCoord, setEyeCoord] = useState(0);

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

        }, eyeCoord === 0 ? 4500 : 1000);

    }, [eyeCoord]);



    return (
        <Fragment>
            <svg className="eye_svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 33 50 34">
                <linearGradient id="Gradient1">
                    <stop className="g1-stop1" offset="50%"/>
                    <stop className="g1-stop2" offset="50%"/>
                </linearGradient>
                <linearGradient id="Gradient2">
                    <stop className="g2-stop1" offset="50%"/>
                    <stop className="g2-stop2" offset="50%"/>
                </linearGradient>
                <path className="eye_form" d="M 50 50 C 35 70 15 70 0 50 C 15 30 35 30 50 50 z"/>
            </svg>

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
        </Fragment>
    )
}

export default Eye