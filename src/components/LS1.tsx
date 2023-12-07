import React, { useState, CSSProperties, useEffect } from "react";
import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef,
} from "@react-spring/web";

import styles from "./LS1.module.css";

const pages: ((
  props: AnimatedProps<{ style: CSSProperties }>,
) => React.ReactElement)[] = [
    ({ style }) => (
      <animated.div style={{ ...style, background: "#363543" }}>S</animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style, background: "#18171c" }}>O</animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style, background: "#363543" }}>M</animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style, background: "#18171c" }}>C</animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style, background: "#363543" }}>H</animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style, background: "#18171c" }}>A</animated.div>
    ),
    ({ style }) => (
      <animated.div style={{ ...style, background: "#363543" }}>I</animated.div>
    ),
  ];

export default function LS1({setLoading}:any) {
  const [index, set] = useState(0);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  function Slide() {
    let counter = 0;
    const intervalId = setInterval(() => {
      counter++;
      if (counter >= 7) {
        setTimeout(()=>{
          setLoading(3)
        },250)
        clearInterval(intervalId);
        return;
      }
      set((state) => (state + 1) % 7);
    }, 200);
  }  

  useEffect(() => {
    transRef.start();
  },[index]);

  useEffect(()=>{
    Slide();
  },[])

  return (
    <div id="ls1-click" className={`ls flex fill ${styles.container}`}>
      {transitions((style, i) => {
        const Page = pages[i];
        return <Page style={style} />;
      })}
    </div>
  );
}
