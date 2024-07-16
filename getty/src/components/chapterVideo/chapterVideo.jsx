import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./chapterVideo.scss";

gsap.registerPlugin(ScrollTrigger);

function ChapterVideo() {
  const videoRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      ScrollTrigger.create({
        trigger: video,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => video.play(),
        onLeave: () => video.pause(),
        onEnterBack: () => video.play(),
        onLeaveBack: () => video.pause(),
      });

      ScrollTrigger.create({
        trigger: textRefs.current[index],
        start: "top 20%",
        end: "bottom -50%",
        // markers: true,
        onEnter: () => gsap.to(textRefs.current[index], { opacity: 1, y: 0, duration: 1 }),
        onLeave: () => gsap.to(textRefs.current[index], { opacity: 0, y: 20, duration: 1 }),
        onEnterBack: () => gsap.to(textRefs.current[index], { opacity: 1, y: 0, duration: 1 }),
        onLeaveBack: () => gsap.to(textRefs.current[index], { opacity: 0, y: 20, duration: 1 }),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="chapter-video">
      <div className="chapter-video-wrap">
        <video className="video" muted ref={(el) => (videoRefs.current[0] = el)}>
          <source src="../videos/outro-0.mp4" type="video/mp4" />
        </video>
        <p ref={(el) => (textRefs.current[0] = el)} className="text">
          <span>The Walt Disney Concert Hall stands today </span>
          <span>as a testament to the intensive, collaborative </span>
          <span>process led by Frank Gehry and his studio — a </span>
          <span>disciplines, and across many years.</span>
        </p>
      </div>
      <div className="chapter-video-wrap">
        <video className="video" muted ref={(el) => (videoRefs.current[1] = el)}>
          <source src="../videos/outro-1.mp4" type="video/mp4" />
        </video>
        <p ref={(el) => (textRefs.current[1] = el)} className="text">
          <span>As if a musical instrument, the </span>
          <span>Walt Disney Concert Hall ushers </span>
          <span>audiences into the shared, communal </span>
          <span>experience of hearing music together.</span>
        </p>
      </div>
      <div className="chapter-video-wrap">
        <video className="video" muted ref={(el) => (videoRefs.current[2] = el)}>
          <source src="../videos/outro-2.mp4" type="video/mp4" />
        </video>
        <p ref={(el) => (textRefs.current[2] = el)} className="text">
          <span>If architecture, according to Frank </span>
          <span>Gehry, is the practice of creating feeling from </span>
          <span>inert materials, music suffuses this space with </span>
          <span>feeling of its own — one performance at a time.</span>
        </p>
      </div>
    </div>
  );
}

export default ChapterVideo;
