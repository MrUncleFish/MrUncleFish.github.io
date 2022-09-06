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
                    Повторюсь, звать меня <span>Александр Муратов</span>, мне сейчас <span>22</span> годика.
                    Этот сайт был разработан в процессе моего творческого поиска, совмещенного с желанием
                    поэкспериментировать в механиках.<br/>
                    Мой же карьерный путь был перемешан с периодом студенчества
                    (сейчас я обучаюсь в магистратуре), и его можно разделить на несколько этапов: <span>самообучение</span> {"->"} <span>попытки фриланса</span> {"->"} <span>работа в офисе</span> {"->"} <span>аутсорс.</span><br/>
                    В начале своего пути я хотел связаться с бекендом, и в нем даже успел немного поработать,
                    но потом появился реакт, в котором я разработал множество интересных приложений для крупных
                    компаний. Сейчас открыт к сотрудничеству и хочу активно наращивать свой профессионализм, чтобы
                    выходить на новые горизонты.
                </div>
            </div>

            <div className="row">
                <div className="SkillList">
                    <SkillContainer title="HTML+CSS/SASS">знаком непонаслышке с адаптивной версткой, сверстал множество кроссплатформенных приложений</SkillContainer>
                    <SkillContainer title="JS/TS + React">Имею опыт решения разнообразных задач, разработал много адаптивных механик (кликеры, мини-игры, карты и т.д.)</SkillContainer>
                    <SkillContainer title="Backend(PHP/C#)">Имею и такой опыт, в основном любительский, много работал в связке с бекендерами</SkillContainer>
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
