import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./chapter3.scss";
import Main from "../../../public/images/main.png";
import One from "../../../public/images/01.png";
import Two from "../../../public/images/02.png";
import Three from "../../../public/images/03.png";
import Four from "../../../public/images/04.png";

function Chapter3() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".chapter-three",
        start: "top 10%",
        // markers: true,
        toggleActions: "restart none none none",
        onEnter: () => {
          tl.restart();
        },
        onLeaveBack: () => {
          tl.restart();
        },
      },
    });

    tl.to(".three-text-splitter--splitted-a", {
      y: 100,
      delay: 0,
      opacity: 1,
      stagger: 0.08,
      rotateX: 0,
      scaleY: 1,
      duration: 1,
    }).to(
      ".three-text-splitter--splitted-b",
      {
        y: 100,
        delay: 0,
        opacity: 1,
        stagger: 0.08,
        rotateX: 0,
        scaleY: 1,
        duration: 1,
      },
      "<"
    ); // Đặt "<" để chỉ định rằng `.three-text-splitter--splitted-b` sẽ chạy ngay sau khi `.three-text-splitter--splitted-a` kết thúc

    // Function to handle mouse move
    // function handleMouseMove(event) {
    //   if (typeof window !== "undefined") {
    //     const centerX = window.innerWidth / 2;
    //     const centerY = window.innerHeight / 2;
    //     const mouseX = event.clientX;
    //     const mouseY = event.clientY;

    //     const rotateY = ((centerX - mouseX) / centerX) * 5; // 45 degrees rotation max
    //     const rotateX = ((mouseY - centerY) / centerY) * 5; // 45 degrees rotation max

    //     // Convert degrees to radians
    //     const degToRad = (deg) => deg * (Math.PI / 180);

    //     // Convert rotation to radians
    //     const radY = degToRad(rotateY);
    //     const radX = degToRad(rotateX);

    //     // Create the 3D transform matrix
    //     const matrix = [
    //       Math.cos(radY),
    //       Math.sin(radX) * Math.sin(radY),
    //       Math.cos(radX) * Math.sin(radY),
    //       0,
    //       0,
    //       Math.cos(radX),
    //       -Math.sin(radX),
    //       0,
    //       -Math.sin(radY),
    //       Math.sin(radX) * Math.cos(radY),
    //       Math.cos(radX) * Math.cos(radY),
    //       0,
    //       0,
    //       0,
    //       0,
    //       1,
    //     ];

    //     const depth = 200;
    //     const moveX = (event.pageX - window.innerWidth / 2) / depth;
    //     const moveY = (event.pageY - window.innerHeight / 2) / depth;

    //     const imgMoveX = (event.pageX - window.innerWidth / 2) / 50;
    //     const imgMoveY = (event.pageY - window.innerWidth / 2) / 50;
    //     gsap.to(".three-titleScribbles__wrap .three-chapter-image", {
    //       translateX: imgMoveX,
    //       translateY: imgMoveY,
    //       rotateY: moveX,
    //       rotateX: moveY,

    //       duration: 1,
    //       ease: "slow",
    //     });
    //   }
    // }
    // document.addEventListener("mousemove", handleMouseMove);
  });

  return (
    <div className="chapter-three">
      <div className="chapter-three-top">
        <div className="chapter-three-tt">A Once-Impossible Build</div>
        <div className="three-titleScribbles__wrap">
          <Image src={Main} alt="Image Error" className="three-chapter-image" />
          <Image src={One} alt="Image Error" className="three-chapter-image" />
          <Image src={Two} alt="Image Error" className="three-chapter-image" />
          <Image src={Three} alt="Image Error" className="three-chapter-image" />
          <Image src={Four} alt="Image Error" className="three-chapter-image" />
        </div>
        <div className="three-chapterTitle__titleWrap">
          <div className="chapterTitleSvg">
            <div className="svgRoot svgMain">
              <div className="three-item three-text-splitter--splitted-a">
                <svg
                  viewBox="0 0 176.1599884033203 649"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m3.99,963c-1.66,0-3-1.34-3-3V317c0-1.66,1.34-3,3-3h105.75c49.39,0,67.41,30.65,67.41,73.01v155.94c0,53.57-2.45,72.36-25,80.17-.92.32-.96,1.71-.06,2.08,20.79,8.6,25.06,26.44,25.06,57.46v206.42c0,45.07-24.03,73.91-68.07,73.91H3.99ZM86.06,396.03c-1.66,0-3,1.34-3,3v179.12c0,1.47,1.2,2.67,2.67,2.67,4.67,0,6.67-3.6,6.67-9.91v-167.66c0-4.51-1.33-7.21-6.01-7.21h-.34Zm-.33,275.83c-1.47,0-2.67,1.2-2.67,2.67v200.18c0,1.47,1.2,2.67,2.67,2.67,4.67,0,6.67-3.6,6.67-8.11v-188.39c0-6.31-2-9.01-6.67-9.01Z"
                    transform="translate(-0.9900000095367432 -314)"
                  ></path>
                </svg>
              </div>
              <div
                className="three-item three-text-splitter--splitted-a"
              >
                <svg
                  viewBox="0 0 149.1300048828125 407.00006103515625"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m262.4,872c-44.42,0-74.25-15.53-74.25-59.89v-287.78c0-39.92,29.19-59.33,74.88-59.33s74.25,19.41,74.25,59.33v287.78c0,44.36-29.83,59.89-74.88,59.89Zm.63-58.78c2.54,0,3.17-1.11,3.17-9.98v-275.03c0-8.32-.63-8.87-3.81-8.87s-3.81.55-3.81,8.87v275.03c0,9.43,1.27,9.98,4.44,9.98Z"
                    transform="translate(-188.14999389648438 -464.99993896484375)"
                  ></path>
                </svg>
              </div>
              <div
                className="three-item three-text-splitter--splitted-a"
              >
                <svg
                  viewBox="0 0 144.13998413085938 309"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m419.05,872c-43.3,0-71.76-11.9-71.76-45.9v-260.1c0-1.66,1.34-3,3-3h58.37c1.66,0,3,1.34,3,3v253.3c0,7.22,4.91,7.65,8.01,7.65,2.48,0,5.99-.85,5.99-7.65v-253.3c0-1.66,1.34-3,3-3h59.77c1.66,0,3,1.34,3,3v260.1c0,34-28.46,45.9-72.37,45.9Z"
                    transform="translate(-347.28997802734375 -563)"
                  ></path>
                </svg>
              </div>
              <div
                className="three-item three-text-splitter--splitted-a"
              >
                <svg
                  viewBox="0 0 100.53192138671875 247.50006103515625"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m559.09,868.5c-1,0-1.94-.5-2.49-1.33l-17.65-26.4c-.53-.8-1.42-1.28-2.37-1.36-22.5-1.68-37.14-19.18-37.14-30.7v-160.95c0-11.78,17.72-26.76,46.72-26.76,31.41,0,46.72,14.99,46.72,26.76v160.95c0,5.85-4.23,19.8-11.46,25.42-1.71,1.33-2.53,3.98-1.18,5.67l19.07,23.82c1.57,1.96.17,4.88-2.34,4.88h-37.87Zm-12.93-58.62c2.42,0,3.57-1.31,3.57-2.94v-159.03c0-1.64-1.15-2.62-3.57-2.62-.81,0-4.01.98-4.01,2.62v159.03c0,1.64,3.2,2.94,4.01,2.94Z"
                    transform="translate(-499.44000244140625 -620.9999389648438)"
                  ></path>
                </svg>
              </div>
              <div
                className="three-item three-text-splitter--splitted-a"
              >
                <svg
                  viewBox="0 0 143.1199951171875 309"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m673.78,872c-43,0-71.26-11.9-71.26-45.9v-260.1c0-1.66,1.34-3,3-3h61.57c1.66,0,3,1.34,3,3v253.3c0,7.22,1.23,7.65,4.3,7.65,2.46,0,3.07-.85,3.07-7.65v-253.3c0-1.66,1.34-3,3-3h62.18c1.66,0,3,1.34,3,3v260.1c0,34-28.26,45.9-71.87,45.9Z"
                    transform="translate(-602.52001953125 -563)"
                  ></path>
                </svg>
              </div>
              <div
                className="three-item three-text-splitter--splitted-a"
              >
                <svg
                  viewBox="0 0 141.1300048828125 407"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m896.79,869c0,1.66-1.34,3-3,3h-135.13c-1.66,0-3-1.34-3-3v-401c0-1.66,1.34-3,3-3h135.13c1.66,0,3,1.34,3,3v137.22c0,1.66-1.34,3-3,3h-61.59c-1.19,0-2.16.97-2.16,2.16s.97,2.16,2.16,2.16h61.59c1.66,0,3,1.34,3,3v108.39c0,1.66-1.34,3-3,3h-61.31c-1.35,0-2.44,1.09-2.44,2.44s1.09,2.44,2.44,2.44h61.31c1.66,0,3,1.34,3,3v134.19Z"
                    transform="translate(-755.6599731445312 -465)"
                  ></path>
                </svg>
              </div>
              <div
                className="three-item three-text-splitter--splitted-a"
              >
                <svg
                  viewBox="0 0 265.239990234375 649"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m1068.62,441.93c-1.66,0-3,1.34-3,3v515.07c0,1.66-1.35,3-3,3h-148.5c-1.66,0-3-1.34-3-3V444.93c0-1.66-1.34-3-3-3h-49.37c-1.66,0-3-1.34-3-3v-121.93c0-1.66,1.34-3,3-3h259.24c1.66,0,3,1.34,3,3v121.93c0,1.66-1.34,3-3,3h-49.37Z"
                    transform="translate(-855.75 -314)"
                  ></path>
                </svg>
              </div>
              <div
                className="three-item three-text-splitter--splitted-b"
              >
                <svg
                  viewBox="0 0 60.05000305175781 74.00006103515625"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m213.89,964c-6.41,0-11.86-.89-16.26-2.76-8.99-3.74-13.48-11.92-13.48-26.7v-14.19c0-7.39,1.24-13.2,3.63-17.74,4.97-8.97,14.06-12.61,26.39-12.61,6.12,0,11.38.98,15.97,2.96,8.99,4.14,14.06,12.61,14.06,27.39v14.19c0,7.09-1.24,12.81-3.54,17.14-4.78,8.67-13.87,12.32-26.78,12.32Zm.29-23.65c1.05,0,1.34-.69,1.34-3.15v-20.89c0-2.46-.29-2.96-1.34-2.96-.86,0-1.34.39-1.34,3.05v20.89c0,2.36.48,3.05,1.34,3.05Z"
                    transform="translate(-184.15000915527344 -890)"
                  ></path>
                </svg>
              </div>
              <div
                className="three-item three-text-splitter--splitted-b"
              >
                <svg
                  viewBox="0 0 129 71.989990234375"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m317.12,946.39c-1.1,0-2,.9-2,2v12.6c0,1.1-.89,2-2,2h-65.41c-1.1,0-2-.9-2-2v-67.99c0-1.1.9-2,2-2h125c1.11,0,2,.9,2,2v26.1c0,1.1-.89,2-2,2h-56.09c-.83,0-1.5.67-1.5,1.5s.67,1.5,1.5,1.5h56.09c1.11,0,2,.9,2,2v18.3c0,1.1-.89,2-2,2h-55.59Z"
                    transform="translate(-245.70999145507812 -891)"
                  ></path>
                </svg>
              </div>
              <div
                className="three-item three-text-splitter--splitted-b"
              >
                <svg
                  viewBox="0 0 89.04290771484375 72"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m446.79,962.99c-10.99,0-19.47-.94-25.96-2.82-11.89-3.65-17.62-10.03-19.83-19.13-.29-1.21.65-2.33,1.89-2.33h33.08c.84,0,1.56.56,2.12,1.17,2.03,2.22,7.03,3.06,11.72,3.06,5.34,0,7.22-.85,7.22-2.35,0-.75-.42-1.22-1.57-1.6-1.99-.85-7.43-1.41-19.68-2.16-22.4-1.41-33.39-7.15-33.39-20.8,0-5.27,1.67-9.69,5.02-13.46,6.7-7.53,19.26-11.58,36.63-11.58,8.58,0,15.7.85,21.77,2.35,11.34,2.88,18.56,8.98,22.47,19.36.47,1.26-.49,2.56-1.83,2.56h-30.51c-.8,0-1.5-.51-2.02-1.13-1.67-1.99-5.31-3.01-10.93-3.01s-7.43,1.32-7.43,2.73c0,.47.52,1.04,1.36,1.32,1.99.75,7.12,1.22,18.95,1.98,7.43.47,13.61,1.41,18.63,2.92,10.26,3.01,15.49,8.56,15.49,18.54,0,4.71-1.46,8.85-4.4,12.52-6.07,7.43-18.32,11.86-38.83,11.86Z"
                    transform="translate(-400.9471130371094 -890.989990234375)"
                  ></path>
                </svg>
              </div>
              <div
                className="three-item three-text-splitter--splitted-b"
              >
                <svg
                  viewBox="0 0 60.049957275390625 74.00006103515625"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m521.17,963c-6.41,0-11.86-.89-16.26-2.76-8.99-3.74-13.48-11.92-13.48-26.7v-14.19c0-7.39,1.24-13.2,3.63-17.74,4.97-8.97,14.06-12.61,26.39-12.61,6.12,0,11.38.98,15.97,2.96,8.99,4.14,14.06,12.61,14.06,27.39v14.19c0,7.09-1.24,12.81-3.54,17.14-4.78,8.67-13.87,12.32-26.77,12.32Zm.29-23.65c1.05,0,1.34-.69,1.34-3.15v-20.89c0-2.46-.29-2.96-1.34-2.96-.86,0-1.34.39-1.34,3.05v20.89c0,2.36.48,3.05,1.34,3.05Z"
                    transform="translate(-491.4299621582031 -889)"
                  ></path>
                </svg>
              </div>
              <div
                className="three-item three-text-splitter--splitted-b"
              >
                <svg
                  viewBox="0 0 77.99005126953125 71.989990234375"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m592.22,962.99c-15.49,0-25.09-2.83-30.88-8.67-5.78-6.04-7.84-15.1-7.84-28.15v-33.17c0-1.1.9-2,2-2h33.5c1.1,0,2,.9,2,2v41.86c0,2.82.37,3.51,1.77,3.51,1.21,0,1.59-.68,1.59-3.51v-41.86c0-1.1.89-2,2-2h33.13c1.1,0,2,.9,2,2v33.17c0,8.57-1.31,15.49-3.92,20.94-5.22,11.01-16.33,15.88-35.35,15.88Z"
                    transform="translate(-553.4999389648438 -891)"
                  ></path>
                </svg>
              </div>
              <div
                className="three-item three-text-splitter--splitted-b"
              >
                <svg
                  viewBox="0 0 192.6600341796875 72.00006103515625"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m715.57,960.99c0,1.1-.9,2-2,2h-76.8c-1.1,0-2-.9-2-2v-67.99c0-1.1.9-2,2-2h90.22c.6,0,1.18.27,1.56.74l35.08,43.55-15.85-25.21c-.2-.32-.31-.69-.31-1.07v-16.02c0-1.1.9-2,2-2h75.96c1.1,0,2,.9,2,2v67.99c0,1.1-.9,2-2,2h-88.54c-.61,0-1.19-.28-1.57-.76l-36.55-46.04,16.49,26.41c.2.32.3.68.3,1.06v17.32Z"
                    transform="translate(-634.77001953125 -890.9899291992188)"
                  ></path>
                </svg>
              </div>
              <div
                className="three-item three-text-splitter--splitted-b"
              >
                <svg
                  viewBox="0 0 68.80999755859375 72"
                  width="100%"
                  height="100%"
                  preserveAspectRatio="none"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m830.72,893c0-1.1.9-2,2-2h31.22c23.5,0,35.59,8.8,35.59,28.6v13.9c0,6.3-1.02,11.7-3.16,16.1-4.29,8.8-13.56,13.4-30.51,13.4h-33.14c-1.1,0-2-.9-2-2v-67.99Zm32.77,22.21c-.06,0-.11.05-.11.11v23.29c0,.06.05.11.11.11,2.37,0,3.05-.33,3.05-4.32v-14.99c0-3.6-.45-4.2-3.05-4.2Z"
                    transform="translate(-830.719970703125 -891)"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chapter-three-bottom"></div>
    </div>
  );
}

export default Chapter3;
