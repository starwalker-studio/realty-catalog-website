import { useEffect, useState } from "react";

export const useMobileScreen = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const [isNavButtonOn, setIsNavButtonOn] = useState<boolean>(false);

    const MAX_MOBILE_WIDTH = 736;

    useEffect(() => {
        window.addEventListener("resize", () => { setWidth(window.innerWidth) });
        window.removeEventListener("resize", () => { setWidth(window.innerWidth) });
    }, [width]);

    const isMobileScreen = () => {
        return width <= MAX_MOBILE_WIDTH;
    }

    const handleClick = () => {
        setIsNavButtonOn(prevState => !prevState);
    }

    const nav_transition = {
        transition: "all, transform 400ms",
        transform: isNavButtonOn ? "translateX(0px) translateY(0px)" : "translateX(-430px) translateY(0px)"
    }

    return {
        isMobileScreen,
        handleClick,
        nav_transition
    }
}