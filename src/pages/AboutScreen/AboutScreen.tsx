import './AboutScreen.scss'
import SkillContainer from "../../components/SkillContainer/SkillContainer";

import csharp_logo from "../../assets/img/csharp_logo.png";
import sass_logo from "../../assets/img/sass_logo.png";
import css_logo from "../../assets/img/css_logo.png";
import react_logo from "../../assets/img/react_logo.png";
import html_logo from "../../assets/img/html_logo.png";
import js_logo from "../../assets/img/js_logo.png";
import php_logo from "../../assets/img/php_logo.png";
import React from "react";
import MovingTitle from "../../components/MovingTitle/MovingTitle";

interface AboutScreenProps {
    isActive: boolean;
}

function AboutScreen({isActive} : AboutScreenProps) {

    // html css sass js reactjs php c# ts огу образование
    return (

        <div className="SecondScreen">
            <div>
                <div className="top_space"/>
                <MovingTitle isActive={isActive}>давайте знакомиться!</MovingTitle>
                <div className="header_text">
                    332текст рыба, который меня восхваливает текст рыба,
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
            </div>

            <div className="row">
                <div className="SkillList">
                    <SkillContainer title="HTML+CSS/SASS">знаком непонаслышне с адаптивной версткой, сверстал множество кроссплатформенных приложений</SkillContainer>
                    <SkillContainer title="JS/TS + React">Имею опыт решения разнообразных задач, вот такой я молодец Имею опыт решения разнообразных задач</SkillContainer>
                    <SkillContainer title="Backend(PHP/C#)">Имею и такой опыт, в общем молодец Имею и такой опыт, в общем молодец Имею и такой опыт, в общем молодец</SkillContainer>
                </div>
            </div>

            <div className="logo_container__body">
                <div className="logo_container">
                    <img alt="" className="csharp_logo" src={csharp_logo}/>
                    <img alt="" className="sass_logo" src={sass_logo}/>
                    <img alt="" className="css_logo" src={css_logo}/>
                    <img alt="" className="react_logo" src={react_logo}/>
                    <img alt="" className="html_logo" src={html_logo}/>
                    <img alt="" className="js_logo" src={js_logo}/>
                    <img alt="" className="php_logo" src={php_logo}/>
                </div>
            </div>


        </div>
    )
}

export default AboutScreen
