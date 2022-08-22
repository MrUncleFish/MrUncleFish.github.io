import React, {FC, useEffect, useState} from "react";
import './MovingTitle.scss';

interface MovingTitleProps {
    isActive: boolean;
    children: React.ReactNode;
}

const PATTERN = [0, 1, 2, 1, 0, -1, -2, -1, 0];
const TIME_BETWEEN_MOVE_LETTERS_MS = 75;

const MovingTitle: FC<MovingTitleProps> = ({isActive, children}) => {

    const messageArray = String(children).split('');
    const [moveTimeout, setMoveTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
    const [titlePos, setTitlePos] = useState<number[]>([]);

    useEffect(() => {

        if (isActive && moveTimeout === null) {
            setMoveTimeout(setTimeout(moveTitle, 1000));
        }
        if (!isActive && moveTimeout !== null) {
            clearTimeout(moveTimeout);
            setMoveTimeout(null);
        }
    },[isActive, setMoveTimeout]);

    function moveTitle () {

        for (let i = 0; i < messageArray.length + PATTERN.length; i++) {

            let row = messageArray.map(() => 0);
            for (let j = 0; (j < PATTERN.length) && (i - j >= 0); j++) row[i-j] = PATTERN[j];

            setTimeout(() => {
                setTitlePos(row);
            },  TIME_BETWEEN_MOVE_LETTERS_MS * i)
        }
    }

    return (
        <div className="mov_header">
            {messageArray.map((letter, id) => <span style={{top: (titlePos[id] | 0) + 'vw'}} key={id}>{letter}</span>)}
        </div>
    )
}

export default MovingTitle