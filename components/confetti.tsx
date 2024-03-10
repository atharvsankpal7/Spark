import React, { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";

const ConfettiComponent = (props: any) => {
    const { isActive } = props;
    const [isActiveState, setIsActiveState] = useState(isActive);
    const config = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 5000,
        stagger: 0,
        width: "10px",
        height: "10px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    };

    return <Confetti active={isActive} config={config} />;
};

export default ConfettiComponent;
