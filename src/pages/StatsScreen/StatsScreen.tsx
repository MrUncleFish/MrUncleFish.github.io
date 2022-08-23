import './StatsScreen.scss'
import React, {Fragment, useEffect, useState} from "react";

interface StatsScreenProps {
    isActive: boolean;
}

interface movingObject {
    id: number;
    width: number;
    height: number;
    directionX: string;
    directionY: string;
    positionX: number;
    positionY: number;
    moveSpeedX: number;
    moveSpeedY: number;
}

function StatsScreen({isActive} : StatsScreenProps) {
   // [10, 10, '+', '+', 20, 30, MOVE_SPEED, MOVE_SPEED]
    const MOVE_SPEED = 3;

    const [pos, setPos] = useState<movingObject[]>([{
        id: 1,
        width: 20,
        height: 20,
        directionX: '+',
        directionY: '-',
        positionX: 10,
        positionY: 10,
        moveSpeedX: MOVE_SPEED,
        moveSpeedY: MOVE_SPEED,
    },{
        id: 2,
        width: 20,
        height: 20,
        directionX: '+',
        directionY: '-',
        positionX: 60,
        positionY: 60,
        moveSpeedX: MOVE_SPEED,
        moveSpeedY: MOVE_SPEED,
    },]);

    useEffect(() => {

        setTimeout(() => {
            let newPos = pos.map((item, index, array) => {
                item.moveSpeedY = MOVE_SPEED;
                item.moveSpeedX = MOVE_SPEED;
                item = checkCollisions(item, array);
                item = getMove(item);

                return item;
            })

            console.log(newPos);

            setPos(newPos);

        }, 100)
    }, [pos]);

    const getMove = (curPos: movingObject) => {

        let newPos = curPos;

        if (curPos.directionX === '+') newPos.positionX += newPos.moveSpeedX;
        else newPos.positionX -= newPos.moveSpeedX;

        if (curPos.directionY === '+') newPos.positionY += newPos.moveSpeedY;
        else newPos.positionY -= newPos.moveSpeedY;

        return newPos
    }

    const checkCollisions = (curPos: movingObject, curPosList: movingObject[]) => {

        let newPos = curPos;

        if (newPos.directionX === '+') {
            newPos = checkRight(newPos, 100);
        } else {
            newPos = checkLeft(newPos, 0);
        }

        if (newPos.directionY === '+') {
            newPos = checkTop(newPos, 100);
        } else {
            newPos = checkBottom(newPos, 0);
        }

        curPosList.forEach((item, key, array) => {
            if (newPos.id === item.id) return;

            if (newPos.directionX === '+') {
                newPos = checkRightBody(newPos, item);
            } else {
                newPos = checkLeftBody(newPos, item);
            }

            if (newPos.directionY === '+') {
                newPos = checkTopBody(newPos, item);
            } else {
                newPos = checkBottomBody(newPos, item);
            }
        })

        return newPos
    }

    const checkRight = (object: movingObject, limit: number) : movingObject => {

            if (object.positionX + object.width >= limit) object.directionX = '-';
            if (object.positionX + object.width + object.moveSpeedX > limit) object.moveSpeedX = limit - object.positionX - object.width;

            return object;
    }

    const checkLeft = (object: movingObject, limit: number) : movingObject => {

            if (object.positionX <= limit) object.directionX = '+';
            if (object.positionX - object.moveSpeedX < limit) object.moveSpeedX = object.positionX - limit;

            return object;
    }

    const checkTop = (object: movingObject, limit: number) : movingObject => {

        if (object.positionY + object.height >= limit) object.directionY = '-';
        if (object.positionY + object.height + object.moveSpeedY > limit) object.moveSpeedY = limit - object.positionY - object.height;

        return object;
    }

    const checkBottom = (object: movingObject, limit: number) : movingObject => {

        if (object.positionY <= limit) object.directionY = '+';
        if (object.positionY - object.moveSpeedY < limit) object.moveSpeedY = object.positionY - limit;

        return object;
    }

    // сравнивает линию и квадрат на входимость (основая координата - та, на которой расположено две точки линии)
    const checkRightBody = (object: movingObject, item: movingObject) : movingObject => {

        // второстепенная координата линии
            const x = object.positionX + object.width;

        // второстепенная меньшая координата квадрата
            const xd1 = item.positionX;

        // второстепенная большая координата квадрата
            const xd2 = item.positionX + item.width;

        // основная меньшая координата линии
            const y1 = object.positionY;

        // основная большая координата линии
            const y2 = object.positionY + object.height;

        // основная меньшая координата квадрата
            const yd1 = item.positionY;

        // основная большая координата квадрата
            const yd2 = item.positionY + item.height;

            if (checkBetween(x, xd1, xd2)) {

                if (checkBetween(y1, yd1, yd2)) {
                };
                if (checkBetween(y2, yd1, yd2)) {

                };
                if (checkBetween(yd1, y1, y2)) {

                };
                if (checkBetween(yd2, y1, y2)) {

                };
            }

            return object;
    }

    const checkBetween = (val:number, from:number, to:number): boolean => (val >= from && val <= to);

    const checkForEntry = () => {

    }

    const checkLeftBody = (object: movingObject, item: movingObject) : movingObject => {

/*            if (object.positionX <= limit) object.directionX = '+';
            if (object.positionX - object.moveSpeedX < limit) object.moveSpeedX = object.positionX - limit;
*/
            return object;
    }

    const checkTopBody = (object: movingObject, item: movingObject) : movingObject => {

/*        if (object.positionY + object.height >= limit) object.directionY = '-';
        if (object.positionY + object.height + object.moveSpeedY > limit) object.moveSpeedY = limit - object.positionY - object.height;
*/
        return object;
    }

    const checkBottomBody = (object: movingObject, item: movingObject) : movingObject => {

/*        if (object.positionY <= limit) object.directionY = '+';
        if (object.positionY - object.moveSpeedY < limit) object.moveSpeedY = object.positionY - limit;
*/
        return object;
    }

    return (
        <div className="StatsScreen">
            <div className="StatsContainer">
                <div className="FloatContainer">
                    <div className="FloatContainer_block" style={{width: pos[0].width + '%', height: pos[0].height + '%', bottom: pos[0].positionY + '%', left: pos[0].positionX + '%'}}/>
                    <div className="FloatContainer_block" style={{width: pos[1].width + '%', height: pos[1].height + '%', bottom: pos[1].positionY + '%', left: pos[1].positionX + '%'}}/>
                </div>
                <div className="HeroContainer">

                </div>
            </div>
        </div>
    )
}

export default StatsScreen
