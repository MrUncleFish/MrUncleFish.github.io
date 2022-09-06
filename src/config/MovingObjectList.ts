import MovingObject, {MovingObjectEntity} from "../classes/MovingObject";

export const MOVING_OBJECT_LIST: MovingObjectEntity[] = [{
    id: 0,
    width: 15,
    height: 25,
    positionX: 2,
    positionY: 56,
    moveSpeedX: MovingObject.MOVE_SPEED,
    moveSpeedY: MovingObject.MOVE_SPEED,
    title: 'SwordMastery',
    desc: 'Занимаюсь фехтованием примерно год, меня с детства тянуло к мечам, и это один из редких спортов что мне нравится'
},{
    id: 1,
    width: 15,
    height: 25,
    positionX: 26,
    positionY: 56,
    moveSpeedX: MovingObject.MOVE_SPEED,
    moveSpeedY: MovingObject.MOVE_SPEED,
    title: 'English',
    desc: 'Мой уровень - intermediate. Активно ищучаю уже два года, поступил в магистратуру на английский язык для бизнес-коммуникаций'
},{
    id: 2,
    width: 15,
    height: 25,
    positionX: 50,
    positionY: 56,
    moveSpeedX: MovingObject.MOVE_SPEED,
    moveSpeedY: MovingObject.MOVE_SPEED,
    title: 'Travels',
    desc: 'Люблю кататься по разным местам, люблю движ, когда-нибудь буду делать истории моих поездок (когда научусь фотографировать)'
},{
    id: 3,
    width: 15,
    height: 25,
    positionX: 74,
    positionY: 56,
    moveSpeedX: MovingObject.MOVE_SPEED,
    moveSpeedY: MovingObject.MOVE_SPEED,
    title: 'Games',
    desc: 'Да, признаюсь, я - гик, я прошел много игр, в основном мне либо нравятся быстрые экшены, либо вдумчивые головомки'
},{
    id: 4,
    width: 15,
    height: 25,
    positionX: 2,
    positionY: 18,
    moveSpeedX: MovingObject.MOVE_SPEED,
    moveSpeedY: MovingObject.MOVE_SPEED,
    title: 'Public',
    desc: 'Очень люблю выступать, шутить, выражаться через рот перед аудиторией, одно из новых увлечений, находится в разработке'
},{
    id: 5,
    width: 15,
    height: 25,
    positionX: 26,
    positionY: 18,
    moveSpeedX: MovingObject.MOVE_SPEED,
    moveSpeedY: MovingObject.MOVE_SPEED,
    title: 'Psycho',
    desc: 'Подсел на эту тему уже давно, просто нравится разбирать следить за некоторыми психологами, читать интересные мысли'
},{
    id: 6,
    width: 15,
    height: 25,
    positionX: 50,
    positionY: 18,
    moveSpeedX: -MovingObject.MOVE_SPEED,
    moveSpeedY: -MovingObject.MOVE_SPEED,
    title: 'Driving',
    desc: 'Просто люблю езду, водить классно, эдакий купол с музыкой, на котором просто куда-то ппасть'
},{
    id: 7,
    width: 15,
    height: 25,
    positionX: 74,
    positionY: 18,
    moveSpeedX: MovingObject.MOVE_SPEED,
    moveSpeedY: MovingObject.MOVE_SPEED,
    title: 'Design',
    desc: 'Этот сайт и есть моей попыткой дебютировать как дизайнер, я пока не понял что с этим делать и как реализовывать'
}]