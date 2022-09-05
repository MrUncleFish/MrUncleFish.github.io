import React, {FC, Fragment, useEffect, useState} from "react";
import './RandomNumberColumn.scss';
import {generateRandomIntegerInRange, getRandomNumberList} from "../../functions/math";

interface RandomNumberColumnProps {
    length: number;
    style?: object;
}

const RandomNumberColumn: FC<RandomNumberColumnProps> = ({length, style = {}}) => {

    const [numbers, setNumbers] = useState<number[]>(getRandomNumberList(length, 0, 1));

    useEffect(() => {

        setTimeout(() => setNumbers(getRandomNumberList(length, 0, 1)), generateRandomIntegerInRange(3, 7) * 100);
        }, [numbers])

    return (
        <div className="numberColumn" style={style}>
            {numbers.map((value, index) => <Fragment key={index}>{value}<br/></Fragment>)}
        </div>
    )
}

export default RandomNumberColumn