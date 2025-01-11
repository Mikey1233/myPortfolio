import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import "./SplitWord.css";

const SplitWord = ({ selector }) => {
  useEffect(() => {
    let typeSplit;

    // Split the text into words and lines
    const runSplit = () => {
      typeSplit = new SplitType(selector, {
        types: "lines, words",
      });

      createAnimation();
    };

    const createAnimation = () => {
      const words = document.querySelectorAll(`${selector} .word`);

      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: selector,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });

      tl.to(words, {
        color: "#d4ede4", // Desired text color
        duration: 1,
        stagger: 0.5,
      });
    };

    runSplit();

    // Cleanup on unmount
    return () => {
      if (typeSplit) typeSplit.revert();
      ScrollTrigger.killAll();
    };
  }, [selector]);

  return null; // This component doesn't render anything
};

export default SplitWord;
