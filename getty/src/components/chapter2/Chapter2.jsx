import React, { useEffect, useRef } from "react";
import Image from 'next/image';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './chapter2.scss'
import Top from '../../../public/images/blue-top.png'
import Bottom from '../../../public/images/blue-bottom.png'
import Center from '../../../public/images/blue-center.png'
import Left from '../../../public/images/blue-left.png'

function Chapter2() {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".chapter-two",
              start: "top 10%",
            //   markers: true,
              toggleActions: "restart none none none",
              onEnter: () => {
                tl.restart();
              },
              onLeaveBack: () => {
                tl.restart();
              }
            }
          });
          
          tl.to(".two-text-splitter--splitted-a", {
            y: 100,
            delay: 0,
            opacity: 1,
            stagger: 0.08,
            rotateX: 0,
            scaleY: 1,
            duration: 1, 
          })
          .to(".two-text-splitter--splitted-b", {
            y: 100,
            delay: 0,
            opacity: 1,
            stagger: 0.08,
            rotateX: 0,
            scaleY: 1,
            duration: 1, 
          }, "<"); // Đặt "<" để chỉ định rằng `.two-text-splitter--splitted-b` sẽ chạy ngay sau khi `.two-text-splitter--splitted-a` kết thúc


        // Function to handle mouse move
        // Get the box element
        // const box = document.getElementById('box');

        // // Function to handle mouse move
        // function handleMouseMove(event) {
        //     if (typeof window !== "undefined") {
        //         const centerX = window.innerWidth / 2;
        //         const centerY = window.innerHeight / 2;
        //         const mouseX = event.clientX;
        //         const mouseY = event.clientY;

        //         const rotateY = (centerX - mouseX) / centerX * 5; // 45 degrees rotation max
        //         const rotateX = (mouseY - centerY) / centerY * 5; // 45 degrees rotation max

        //         // Convert degrees to radians
        //         const degToRad = (deg) => deg * (Math.PI / 180);

        //         // Convert rotation to radians
        //         const radY = degToRad(rotateY);
        //         const radX = degToRad(rotateX);

        //         // Create the 3D transform matrix
        //         const matrix = [
        //             Math.cos(radY), Math.sin(radX) * Math.sin(radY), Math.cos(radX) * Math.sin(radY), 0,
        //             0, Math.cos(radX), -Math.sin(radX), 0,
        //             -Math.sin(radY), Math.sin(radX) * Math.cos(radY), Math.cos(radX) * Math.cos(radY), 0,
        //             0, 0, 0, 1
        //         ];

        //         const depth = 200;
        //         const moveX = ((event.pageX) - (window.innerWidth / 2)) / depth;
        //         const moveY = ((event.pageY) - (window.innerHeight / 2)) / depth;

        //         const imgMoveX = ((event.pageX) - (window.innerWidth / 2)) / 50;
        //         const imgMoveY = ((event.pageY) - (window.innerWidth / 2)) / 50;
        //         gsap.to('.titleScribbles__wrap .chapter-image', {
        //             translateX: imgMoveX,
        //             translateY: imgMoveY,
        //             rotateY: moveX,
        //             rotateX: moveY,

        //             duration: 1,
        //             ease: "slow",
        //         });
        //     }

        // }
        // document.addEventListener('mousemove', handleMouseMove);

    })

    return (
        <div className='chapter-two'>
            <div className="chapter-two-top">
                <div className="chapter-two-tt">
                    A Once-Impossible Build
                </div>
                <div className="titleScribbles__wrap">
                    <Image src={Top} alt="Image Error" className='two-chapter-image' />
                    <Image src={Bottom} alt="Image Error" className='two-chapter-image' />
                    <Image src={Center} alt="Image Error" className='two-chapter-image' />
                    <Image src={Left} alt="Image Error" className='two-chapter-image' />
                </div>
                <div className="two-chapterTitle__titleWrap">
                    <div className="chapterTitleSvg">
                        <div className="svgRoot svgMain">
                            <div className="two-item two-text-splitter--splitted-a">
                                <svg viewBox="0 0 511.0067138671875 378.0000305175781" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" id="s" d="m256.32,874c-63.87,0-113.82-5.01-151.49-15.02C29.49,838.95-.8,799.9.02,743.33v-.5c0-1.66,1.34-3,3-3h238.84c1.66,0,3,1.34,3,3v6.01c0,7.51,5.73,11.52,15.56,11.52,10.65,0,16.38-3,16.38-9.01,0-9.51-19.65-13.02-94.17-25.03-40.94-6.51-72.88-14.52-99.08-23.03-51.59-17.52-76.15-43.06-76.15-85.11,0-75.6,77.79-122.16,249.75-122.16s248.93,40.55,246.47,118.16v5.01c0,1.66-1.34,3-3,3h-221.64c-1.66,0-3-1.34-3-3v-6.51c0-8.01-5.73-12.02-18.01-12.02-9.01,0-13.1,3-13.1,9.01,0,9.51,20.47,14.02,85.16,23.53,42.58,6.51,77.79,14.02,103.99,23.53,54.04,18.02,77.79,45.06,76.97,89.12,0,87.12-74.52,128.17-254.66,128.17Z" transform="translate(-0.0037994384765625 -496.0199890136719)"></path></svg>
                            </div>
                            <div className="two-item two-text-splitter--splitted-a">
                                <svg viewBox="0 0 214.16958618164062 378" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" id="a" d="m622.61,847.88c-.13-1.56-1.43-2.76-2.99-2.76h-24.24c-1.56,0-2.86,1.2-2.99,2.76l-1.91,23.36c-.13,1.56-1.43,2.76-2.99,2.76h-84.09c-1.8,0-3.2-1.58-2.98-3.37l46.5-372c.19-1.5,1.46-2.63,2.98-2.63h112.38c1.5,0,2.78,1.11,2.97,2.61l49.29,372c.24,1.8-1.16,3.39-2.97,3.39h-84.07c-1.56,0-2.86-1.2-2.99-2.76l-1.91-23.36Zm-22.16-88.96c-.15,1.75,1.23,3.25,2.99,3.25h8.1c1.77,0,3.15-1.52,2.99-3.28l-4.42-47.65-3.31-77.17-2.36,77.17-3.98,47.67Z" transform="translate(-500.3972473144531 -496)"></path></svg>
                            </div>
                            <div className="two-item two-text-splitter--splitted-a">
                                <svg viewBox="0 0 155 378" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" id="i" d="m718,499c0-1.66,1.34-3,3-3h149c1.66,0,3,1.34,3,3v372c0,1.66-1.34,3-3,3h-149c-1.66,0-3-1.34-3-3v-372Z" transform="translate(-718 -496)"></path></svg>
                            </div>
                            <div className="two-item two-text-splitter--splitted-a">
                                <svg viewBox="0 0 370 378" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" id="l" d="m882,874c-1.66,0-3-1.34-3-3v-372c0-1.66,1.34-3,3-3h152.53c1.66,0,3,1.34,3,3v237.88c0,1.66,1.35,3,3,3h205.47c1.66,0,3,1.34,3,3v128.12c0,1.66-1.34,3-3,3h-364Z" transform="translate(-879 -496)"></path></svg>
                            </div>
                            <div className="two-item two-text-splitter--splitted-a">
                                <svg viewBox="0 0 499.0057373046875 378.0000305175781" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" id="s_2" d="m1503.3,874c-62.37,0-111.15-5.01-147.93-15.02-73.57-20.03-103.16-59.08-102.36-115.65v-.5c0-1.66,1.35-3,3-3h233.09c1.66,0,3,1.34,3,3v6.01c0,7.51,5.6,11.52,15.19,11.52,10.4,0,16-3,16-9.01,0-9.51-19.19-13.02-91.96-25.03-39.98-6.51-71.17-14.52-96.75-23.03-50.38-17.52-74.37-43.06-74.37-85.11,0-75.6,75.96-122.16,243.89-122.16s243.08,40.55,240.68,118.16v5.01c0,1.66-1.34,3-3,3h-216.29c-1.66,0-3-1.34-3-3v-6.51c0-8.01-5.6-12.02-17.59-12.02-8.8,0-12.8,3-12.8,9.01,0,9.51,19.99,14.02,83.16,23.53,41.58,6.51,75.97,14.02,101.55,23.53,52.78,18.02,75.97,45.06,75.17,89.12,0,87.12-72.77,128.17-248.68,128.17Z" transform="translate(-1252.994384765625 -496.0199279785156)"></path></svg>
                            </div>
                            <div className="two-item two-text-splitter--splitted-b">
                                <svg viewBox="0 0 136.34999084472656 82.0299072265625" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" id="o" d="m70.17,964c-14.55,0-26.92-.98-36.91-3.06-20.41-4.15-30.61-13.22-30.61-29.6v-15.73c0-8.19,2.82-14.64,8.25-19.66,11.29-9.94,31.92-13.98,59.92-13.98,13.9,0,25.84,1.09,36.26,3.28,20.41,4.59,31.92,13.98,31.92,30.36v15.73c0,7.86-2.82,14.2-8.03,19-10.86,9.61-31.48,13.65-60.79,13.65Zm.65-26.21c2.39,0,3.04-.77,3.04-3.49v-23.15c0-2.73-.65-3.28-3.04-3.28-1.95,0-3.04.44-3.04,3.39v23.15c0,2.62,1.09,3.39,3.04,3.39Z" transform="translate(-2.6499977111816406 -881.9700927734375)"></path></svg>
                            </div>
                            <div className="two-item two-text-splitter--splitted-b">
                                <svg viewBox="0 0 298 80.239990234375" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" id="F" d="m306.34,944.61c-1.66,0-3,1.34-3,3v12.5c0,1.66-1.34,3-3,3h-154.34c-1.66,0-3-1.34-3-3v-74.24c0-1.66,1.34-3,3-3h292c1.66,0,3,1.34,3,3v27.54c0,1.66-1.34,3-3,3h-132.99c-.92,0-1.67.75-1.67,1.67s.75,1.67,1.67,1.67h132.99c1.66,0,3,1.34,3,3v18.85c0,1.66-1.34,3-3,3h-131.66Z" transform="translate(-143 -882.8699951171875)"></path></svg>
                            </div>
                            <div className="two-item two-text-splitter--splitted-b">
                                <svg viewBox="0 0 123.97891235351562 80.239990234375" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" id="s_3" d="m562.2,963.11c-15.5,0-27.62-1.06-36.76-3.19-18.28-4.25-25.63-12.54-25.43-24.55v-.74h59.41v1.91c0,1.59,1.39,2.44,3.77,2.44,2.58,0,3.97-.64,3.97-1.91,0-2.02-4.77-2.76-22.85-5.31-9.93-1.38-17.68-3.08-24.04-4.89-12.52-3.72-18.48-9.14-18.48-18.07,0-16.05,18.88-25.93,60.6-25.93s60.41,8.61,59.81,25.08v1.7h-55.24v-2.02c0-1.7-1.39-2.55-4.37-2.55-2.19,0-3.18.64-3.18,1.91,0,2.02,4.97,2.97,20.66,4.99,10.33,1.38,18.88,2.97,25.23,4.99,13.11,3.83,18.88,9.57,18.68,18.92,0,18.49-18.08,27.21-61.8,27.21Z" transform="translate(-500.0060729980469 -882.8699951171875)"></path></svg>
                            </div>
                            <div className="two-item two-text-splitter--splitted-b">
                                <svg viewBox="0 0 247 80.22998046875" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" id="T" d="m823.37,921.51c-1.66,0-3,1.34-3,3v35.6c0,1.66-1.34,3-3,3h-135.74c-1.66,0-3-1.34-3-3v-35.6c0-1.66-1.34-3-3-3h-46.63c-1.66,0-3-1.34-3-3v-32.63c0-1.66,1.34-3,3-3h241c1.66,0,3,1.34,3,3v32.63c0,1.66-1.34,3-3,3h-46.63Z" transform="translate(-626 -882.8800048828125)"></path></svg>
                            </div>
                            <div className="two-item two-text-splitter--splitted-b">
                                <svg viewBox="0 0 347 80.239990234375" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" id="E" d="m1225,960.11c0,1.66-1.34,3-3,3h-341c-1.66,0-3-1.34-3-3v-74.24c0-1.66,1.34-3,3-3h341c1.66,0,3,1.34,3,3v23.42c0,1.66-1.34,3-3,3h-164.34c-.8,0-1.45.65-1.45,1.45s.65,1.45,1.45,1.45h164.34c1.66,0,3,1.34,3,3v8.04c0,1.66-1.34,3-3,3h-164.28c-.83,0-1.51.67-1.51,1.5s.68,1.5,1.51,1.5h164.28c1.66,0,3,1.34,3,3v24.87Z" transform="translate(-878 -882.8699951171875)"></path></svg>
                            </div>
                            <div className="two-item two-text-splitter--splitted-b">
                                <svg viewBox="0 0 347 80.239990234375" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" id="E_2" d="m1578,960.11c0,1.66-1.34,3-3,3h-341c-1.66,0-3-1.34-3-3v-74.24c0-1.66,1.34-3,3-3h341c1.66,0,3,1.34,3,3v23.42c0,1.66-1.34,3-3,3h-164.34c-.8,0-1.45.65-1.45,1.45s.65,1.45,1.45,1.45h164.34c1.66,0,3,1.34,3,3v8.04c0,1.66-1.34,3-3,3h-164.28c-.83,0-1.51.67-1.51,1.5s.68,1.5,1.51,1.5h164.28c1.66,0,3,1.34,3,3v24.87Z" transform="translate(-1231 -882.8699951171875)"></path></svg>
                            </div>
                            <div className="two-item two-text-splitter--splitted-b">
                                <svg viewBox="0 0 169 80.239990234375" width="100%" height="100%" preserveAspectRatio="none"><path xmlns="http://www.w3.org/2000/svg" id="l_2" d="m1586,963.11c-1.66,0-3-1.34-3-3v-74.24c0-1.66,1.34-3,3-3h100.94c1.65,0,3,1.34,3,3v35.23c0,1.66,1.34,3,3,3h56.06c1.66,0,3,1.34,3,3v33c0,1.66-1.34,3-3,3h-163Z" transform="translate(-1583 -882.8699951171875)"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chapter-two-bottom">

            </div>
        </div>
    )
}

export default Chapter2
