import React, { useState, MouseEvent } from "react";
import mojs from "@mojs/core";

import { random, randomColor } from './utils';
import { StyledBalloon } from './Balloons.styles';

interface BalloonProps {
  msgText: string;
  colors: string[];
  popVolumeLevel: number;
  loop: boolean;
  hangOnTop: boolean;
  supportsTouch: boolean;
}

export const Balloon: React.FC<BalloonProps> = ({
  msgText,
  colors,
  popVolumeLevel,
  loop,
  hangOnTop,
  supportsTouch
}) => {
  const delay = random(0, 4);
  const hasMsg = random(0, 2) === 1;
  const duration = 10 + random(1, 5);
  const left = random(10, 70); // random init left value to fly
  const [show, setShow] = useState<boolean>(true);
  const [visible, setVisible] = useState<boolean>(true);

  const audio = new Audio(
    "https://soundbible.com/mp3/Balloon%20Popping-SoundBible.com-1247261379.mp3"
  );
  audio.volume = popVolumeLevel;

  const popBalloon = (e: MouseEvent<HTMLDivElement>): void => {
    const t = e.currentTarget as HTMLDivElement;
    const color = t.getAttribute("color") || "#fff";
    
    const burst = new mojs.Burst({
      radius: { 30: 100 },
      parent: t,
      count: 10,
      className: "show",
      children: {
        fill: [color],
        angle: { 0: 180 },
        delay: "stagger(0, 25)",
        shape: ["circle", "polygon"],
      },
    });

    audio.play();
    burst.replay();
    t.style.visibility = "hidden";
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  return (
    <>
      {show ? (
        <StyledBalloon
          color={randomColor(colors)}
          onClick={supportsTouch ? popBalloon : undefined}
          onDoubleClickCapture={supportsTouch ? undefined : popBalloon}
          animate={{
            delay,
            duration,
            rotate: random(20, 25),
            left,
            loop,
            hangOnTop,
          }}
          show={show}
          visible={visible}
        >
          <div className="string"></div>
          {hasMsg && <span className="msg">{msgText}</span>}
        </StyledBalloon>
      ) : null}
    </>
  );
};

interface BalloonsProps {
  count: number;
  msgText: string;
  colors: string[];
  popVolumeLevel: number;
  loop: boolean;
  hangOnTop: boolean;
}

export const Balloons: React.FC<BalloonsProps> = ({
  count,
  msgText,
  colors,
  popVolumeLevel,
  loop,
  hangOnTop
}) => {
  const density = count; // concurrent balloon count
  const supportsTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  return (
    <div className="set-of-balloons">
      {Array.from({ length: density }, (_, i) => (
        <Balloon
          key={`balloon-${i}`}
          {...{ msgText, colors, popVolumeLevel, loop, hangOnTop, supportsTouch }}
        />
      ))}
    </div>
  );
};
