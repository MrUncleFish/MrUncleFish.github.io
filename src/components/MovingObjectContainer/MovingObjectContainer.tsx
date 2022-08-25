import React, {FC, useEffect, useState} from "react";
import './MovingObjectContainer.scss';
import MovingObject, {MovingObjectEntity} from "../../classes/MovingObject";
import {MOVING_OBJECT_LIST} from "../../config/MovingObjectList";

interface MovingObjectContainerProps {
    isActive: boolean;
}

const MovingObjectContainer: FC<MovingObjectContainerProps> = ({isActive}) => {

    const [pos, setPos] = useState<MovingObjectEntity[]>(MOVING_OBJECT_LIST);
    const [timeoutForChange, setTimeoutForChange] = useState(true);

    useEffect(() => {

        if (!timeoutForChange || !isActive) return;
        setTimeoutForChange(false);

        setTimeout(() => {

            let newPos = pos.map((item, index, array) => {
                item.moveSpeedY = item.moveSpeedY > 0 ? MovingObject.MOVE_SPEED : -MovingObject.MOVE_SPEED;
                item.moveSpeedX = item.moveSpeedX > 0 ? MovingObject.MOVE_SPEED : -MovingObject.MOVE_SPEED;
                item = MovingObject.checkCollisions(item, array);
                return item;
            })
            newPos = newPos.map((item, index, array) => MovingObject.getMove(item));
            setPos(newPos);
            setTimeoutForChange(true);
        }, 100);

    }, [pos, timeoutForChange, isActive]);

    const blockObject = (objectId: number) => setPos(MovingObject.blockObject(pos, objectId));


    return (
        <div className="FloatContainer">
            {pos.map((item, index) =>
                <div onMouseEnter={() => blockObject(item.id)} onMouseLeave={() => blockObject(-1)} key={index} className="FloatContainer_block" style={{width: item.width + '%', height: item.height + '%', bottom: item.positionY + '%', left: item.positionX + '%'}}>
                    <div className="FloatContainer_block__title">{item.title}</div>
                    <div className="FloatContainer_block__desc">{item.desc}</div>
                </div>)}
        </div>
    )
}

export default MovingObjectContainer