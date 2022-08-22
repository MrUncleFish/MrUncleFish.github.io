import './ThirdScreen.scss'
import React from "react";

interface SecondScreenProps {
    isActive: boolean;
}

function ThirdScreen({isActive} : SecondScreenProps) {

    if (isActive) console.log(1);

    return (
        <div className="ThirdScreen">
        </div>
    )
}

export default ThirdScreen
