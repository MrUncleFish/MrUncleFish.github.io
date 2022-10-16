import './StartScreen.scss'
import Eye from "../../components/Eye/Eye";

function StartScreen() {

    return (

        <div className="start_screen">

            <div className="bg-blur"/>

            <Eye/>

            <div className="title_container">
                <div className="title_container__column">
                    <div className="title_text first">
                        <div className="bg_closer__right"/>
                        Приветствую!
                    </div>
                    <div className="title_text second">
                        <div className="bg_closer__right"/>
                        меня зовут Александр
                    </div>
                </div>
                <div className="title_container__column">
                    <div className="title_text third">
                        <div className="bg_closer__right"/>
                        и я уже давно
                    </div>
                    <div className="title_text fourth">
                        <div className="bg_closer__right"/>
                        Frontend-разработчик
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartScreen
