import '@google/model-viewer';
import styles from "./Model.module.css";
import React, { useState } from 'react';

export default function Model(){
    const [xAxis, setXAxis] = useState(0);
    const [yAxis, setYAxis] = useState(65);
    
    function changeRotation(e) {
        setXAxis(((window.innerWidth / 2 - e.pageX) / 25)+10);
        setYAxis(((window.innerHeight / 2 - e.pageY) / 25)+65);
    }

    return(
    <div className={styles.my3D} onMouseMove={changeRotation}>
        <model-viewer 
        poster="../img/stock/poster-Sitting.webp" 
        loading="eager" 
          src="../model3D/Sitting Idle2.glb"
          ios-src=""
          alt="A 3D model of me"
          environment-image="../img/stock/music_hall_01_1k.hdr" 
          data-js-focus-visible=""
          exposure="0.64" 
          shadow-intensity="4.2" 
          shadow-softness="0.2" 
          min-camera-orbit="-10deg 60deg 10m" 
          max-camera-orbit="10deg 70deg 10m" 
          camera-target="0m 2m 0m" 
          camera-orbit={xAxis+"deg "+yAxis+"deg 14m"}
          autoplay animation-name="Armature|mixamo.com|Layer0">
          <div className="progress-bar hide" slot="progress-bar">
              <div className="update-bar"></div>
          </div>
        </model-viewer>
      </div>

    );

}