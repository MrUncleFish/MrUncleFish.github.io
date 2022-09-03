export const isMobile = () => window.innerHeight >= window.innerWidth;

export const isTooWideForStats = () => (window.innerHeight * 0.95) < (window.innerWidth * 0.55);

export const getMaxrixNumbersCount = () => {

    const oneLineSize = window.innerHeight / (100 / 1.8);

    return window.innerWidth / oneLineSize;
}