import './SecondScreen.scss'
import SkillContainer from "../../components/SkillContainer/SkillContainer";

import csharp_logo from "../../assets/img/csharp_logo.png";
import sass_logo from "../../assets/img/sass_logo.png";
import css_logo from "../../assets/img/css_logo.png";
import react_logo from "../../assets/img/react_logo.png";
import html_logo from "../../assets/img/html_logo.png";
import js_logo from "../../assets/img/js_logo.png";
import php_logo from "../../assets/img/php_logo.png";
import React, {useEffect, useState} from "react";

interface SecondScreenProps {
    isActive: boolean;
}


function SecondScreen({isActive} : SecondScreenProps) {

    // html css sass js reactjs php c# ts огу образование
    const [moveTimeout, setMoveTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {

        if (isActive && moveTimeout === null) {
            setMoveTimeout(setTimeout(moveTitle, 1000));
        }
        if (!isActive && moveTimeout !== null) {
            clearTimeout(moveTimeout);
            setMoveTimeout(null);
        }
    },[isActive, setMoveTimeout]);

    const moveTitle = () => {
        console.log(1);
    }

    return (

        <div className="SecondScreen">
            <div className="top_space"/>
            <div className="header">Давайте
                <span> з</span>
                <span>н</span>
                <span>а</span>
                <span>к</span>
                <span>о</span>
                <span>м</span>
                <span>и</span>
                <span>т</span>
                <span>ь</span>
                <span>с</span>
                <span>я</span>
                <span>!</span>
            </div>
            <div className="header_text">
                текст рыба, который меня восхваливает текст рыба,
                который меня восхваливает текст рыба, который меня восхваливает
                текст рыба, который меня восхваливает а я уже <span>30</span> лет как молодец
                текст рыба, который меня восхваливает
                текст рыба, который меня восхваливает
                текст рыба, который меня восхваливает
                текст рыба, который меня восхваливает
                текст рыба, который меня восхваливает год рождения <span>20.04.2000</span> текст рыба, который меня восхваливает
                текст рыба, который меня восхваливает
                текст рыба, который меня восхваливает
                текст рыба, который меня восхваливает
            </div>
            <div className="row">
                <div>
                    <SkillContainer title="HTML+CSS/SASS">знаком непонаслышне с адаптивной версткой, сверстал множество кроссплатформенных приложений</SkillContainer>
                    <SkillContainer title="JS/TS + React">Имею опыт решения разнообразных задач, вот такой я молодец Имею опыт решения разнообразных задач</SkillContainer>
                    <SkillContainer title="Backend(PHP/C#)">Имею и такой опыт, в общем молодец Имею и такой опыт, в общем молодец Имею и такой опыт, в общем молодец</SkillContainer>
                </div>
                <div>
                    <div className="logo_container">
                        <img className="csharp_logo" src={csharp_logo}/>
                        <img className="sass_logo" src={sass_logo}/>
                        <img className="css_logo" src={css_logo}/>
                        <img className="react_logo" src={react_logo}/>
                        <img className="html_logo" src={html_logo}/>
                        <img className="js_logo" src={js_logo}/>
                        <img className="php_logo" src={php_logo}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SecondScreen
