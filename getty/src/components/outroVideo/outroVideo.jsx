import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './outroVideo.scss';

gsap.registerPlugin(ScrollTrigger);

function OutroVideo() {
    useEffect(() => {
        const texts = document.querySelectorAll(".introText");
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".outroVideo-wrap",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                // markers: true,
                duration: 10,
            },
            ease: "power2.inOut",
        });
        // wait until video metadata is loaded, so we can grab the proper duration before adding the onscroll animation. Might need to add a loader for loonng videos
        coolVideo.onloadedmetadata = function () {
            const videoDuration = coolVideo.duration;
            const scrollDuration = 1800 * (window.innerHeight / videoDuration);
            tl.to(coolVideo, { currentTime: videoDuration, duration: scrollDuration, ease: "none" });
        };


        // Dealing with devices
        function isTouchDevice() {
            return (
                "ontouchstart" in window ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
            );
        }
        if (isTouchDevice()) {
            coolVideo.play();
            coolVideo.pause();
        }


    }, []);

    return (
        <div className="outroVideo">
            <div className='outroVideo-wrap'>
                <video className="video" playsInline webkitplaysinline  preload="auto" muted>
                    <source src="../videos/outro.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default OutroVideo;
