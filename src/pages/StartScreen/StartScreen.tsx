import './StartScreen.scss'
import Eye from "../../components/Eye/Eye";

function StartScreen() {

    return (

        <div className="StartScreen">

            <div className="StartScreen__fon"/>

            <Eye/>

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
