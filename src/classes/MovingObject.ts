export default class MovingObject {

    public static MOVE_SPEED = 1;

    private static LEFT_WALL: MovingObjectEntity = {
        id: 1001,
        width: 100,
        height: 100,
        positionX: -100,
        positionY: 0,
        moveSpeedX: 0,
        moveSpeedY: 0,
    }
    private static RIGHT_WALL: MovingObjectEntity = {
        id: 1002,
        width: 100,
        height: 100,
        positionX: 100,
        positionY: 0,
        moveSpeedX: 0,
        moveSpeedY: 0,
    }
    private static BOTTOM_WALL: MovingObjectEntity = {
        id: 1003,
        width: 100,
        height: 100,
        positionX: 0,
        positionY: -100,
        moveSpeedX: 0,
        moveSpeedY: 0,
    }
    private static TOP_WALL: MovingObjectEntity = {
        id: 1004,
        width: 100,
        height: 100,
        positionX: 0,
        positionY: 100,
        moveSpeedX: 0,
        moveSpeedY: 0,
    }

    static getMove(curPos: MovingObjectEntity): MovingObjectEntity {

        let newPos = curPos;

        if (newPos.isBlocked) return newPos;

        newPos.positionX += newPos.moveSpeedX;
        newPos.positionY += newPos.moveSpeedY;

        return newPos
    }

    static blockObject = (curPosList: MovingObjectEntity[], blockId: number): MovingObjectEntity[] => (curPosList.map((item) => {
            item.isBlocked = item.id === blockId;
            return item;
        }))

    static checkCollisions(curPos: MovingObjectEntity, curPosList: MovingObjectEntity[]): MovingObjectEntity {

        let newPos = curPos;

        if (newPos.isBlocked) return newPos;

        if (newPos.moveSpeedX > 0 && this.checkRightBody(newPos, this.RIGHT_WALL)) newPos.moveSpeedX = -newPos.moveSpeedX;
        else if (newPos.moveSpeedX < 0 && this.checkLeftBody(newPos, this.LEFT_WALL)) newPos.moveSpeedX = -newPos.moveSpeedX;

        if (newPos.moveSpeedY > 0 && this.checkTopBody(newPos, this.TOP_WALL)) newPos.moveSpeedY = -newPos.moveSpeedY;
        else if (newPos.moveSpeedY < 0 && this.checkBottomBody(newPos, this.BOTTOM_WALL)) newPos.moveSpeedY = -newPos.moveSpeedY;

        curPosList.forEach((item, key, array) => {
            if (newPos.id === item.id) return;

            if (newPos.moveSpeedX > 0 && this.checkRightBody(newPos, item)) newPos.moveSpeedX = -newPos.moveSpeedX;
            else if (newPos.moveSpeedX < 0 && this.checkLeftBody(newPos, item)) newPos.moveSpeedX = -newPos.moveSpeedX;

            if (newPos.moveSpeedY > 0 && this.checkTopBody(newPos, item)) newPos.moveSpeedY = -newPos.moveSpeedY;
            else if (newPos.moveSpeedY < 0 && this.checkBottomBody(newPos, item)) newPos.moveSpeedY = -newPos.moveSpeedY;
        })

        return newPos;
    }

    // сравнивает линию и квадрат на входимость (основая координата - та, на которой расположено две точки линии)
    // второстепенная координата линии
    // второстепенная меньшая координата квадрата
    // второстепенная большая координата квадрата
    // основная меньшая координата линии
    // основная большая координата линии
    // основная меньшая координата квадрата
    // основная большая координата квадрата
    private static checkLineAndSquareForCollision (sLine:number, mMinLine:number, mMaxLine:number, sMinSquare:number, sMaxSquare:number, mMinSquare:number, mMaxSquare:number): boolean {

        if (this.checkBetween(sLine, sMinSquare, sMaxSquare)) {
            if (this.checkBetween(mMinLine, mMinSquare, mMaxSquare)) return true;
            if (this.checkBetween(mMaxLine, mMinSquare, mMaxSquare)) return true;
            if (this.checkBetween(mMinSquare, mMinLine, mMaxLine)) return true;
            if (this.checkBetween(mMaxSquare, mMinLine, mMaxLine)) return true;
        }

        return false;
    }

    private static checkBetween = (val:number, from:number, to:number): boolean => (val >= from && val <= to);

    private static checkRightBody = (object: MovingObjectEntity, item: MovingObjectEntity) : boolean => {

        return this.checkLineAndSquareForCollision(
            object.positionX + object.width,
            object.positionY,
            object.positionY + object.height,
            item.positionX,
            item.positionX + item.width,
            item.positionY,
            item.positionY + item.height);
    }

    private static checkLeftBody = (object: MovingObjectEntity, item: MovingObjectEntity) : boolean => {

        return this.checkLineAndSquareForCollision(
            object.positionX,
            object.positionY,
            object.positionY + object.height,
            item.positionX,
            item.positionX + item.width,
            item.positionY,
            item.positionY + item.height);
    }

    private static checkTopBody = (object: MovingObjectEntity, item: MovingObjectEntity) : boolean => {

        return this.checkLineAndSquareForCollision(
            object.positionY + object.height,
            object.positionX,
            object.positionX + object.width,
            item.positionY,
            item.positionY + item.height,
            item.positionX,
            item.positionX + item.width);
    }

    private static checkBottomBody = (object: MovingObjectEntity, item: MovingObjectEntity) : boolean => {

        return this.checkLineAndSquareForCollision(
            object.positionY,
            object.positionX,
            object.positionX + object.width,
            item.positionY,
            item.positionY + item.height,
            item.positionX,
            item.positionX + item.width);
    }
}

export interface MovingObjectEntity {
    id: number;
    width: number;
    height: number;
    positionX: number;
    positionY: number;
    moveSpeedX: number;
    moveSpeedY: number;
    title?: string;
    desc?: string;
    isBlocked?: boolean;
}