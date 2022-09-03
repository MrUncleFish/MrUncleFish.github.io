export const isMobile = () => window.innerHeight >= window.innerWidth;

export const getMaxrixNumbersCount = () => {

    const oneLineSize = window.innerHeight / (100 / 1.8);

    return window.innerWidth / oneLineSize;
}