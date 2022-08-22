import React, {FC, useEffect} from "react";
import './ScrollHandler.scss';

interface ScrollHandlerProps {

}

const ScrollHandler: FC<ScrollHandlerProps> = ({}) => {

    useEffect(() => {
        window.addEventListener('mousewheel', (e) => e.preventDefault(), {passive: false});
        window.addEventListener('keydown', (e) => e.preventDefault(), {passive: false});

        return () => {
            window.removeEventListener('mousewheel', (e) => e.preventDefault())
            window.removeEventListener('keydown', (e) => e.preventDefault())
        }
    }, []);

    return <div/>
}

export default ScrollHandler