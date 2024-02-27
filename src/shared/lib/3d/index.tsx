import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min.js";

import styles from "./styles.module.scss";
import { Button } from "@shared/ui/Button";

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 0.5,
          scaleMobile: 1.0,
          color: 0xff7300,
          backgroundColor: 0x0b1948,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className={styles.background} id="vanta-bg">
      <div className="container">
        <h1 className={styles.background__heading}>
          Крупнейший <span className="orange_gradient">медиахолдинг</span> в
          казахстане
        </h1>
        <p className="paragraph mt-4 w-[40%]">
          TAN MEDIA GROUP - крупнейший медиахолдинг в Казахстане. Несколько
          масштабных медиаресурсов и безграничное количество возможностей.
        </p>
        <Button text="Связаться с нами" buttonType="filled" margin="mt-4" />
      </div>
      <div className={styles.decoration}></div>
    </div>
  );
};

export default VantaBackground;
