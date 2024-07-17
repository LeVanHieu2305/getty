import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './introVideo.scss';

gsap.registerPlugin(ScrollTrigger);

function IntroVideo() {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        const coolVideo = document.querySelector("video");
        const texts = document.querySelectorAll(".introText");

        if (!coolVideo) {
            console.error("Video element not found");
            return;
        }

        // Ensure video starts loading
        coolVideo.preload = "auto"; // Ensure the video is set to preload

        // Check if the video has finished loading
        coolVideo.onloadeddata = () => {
            console.log("Video onloadeddata event fired");
            setIsVideoLoaded(true);
        };

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".introVideo-wrap",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                // markers: true,
                duration: 10,
            },
            ease: "power2.inOut",
        });

        coolVideo.onloadedmetadata = function () {
            console.log("Video onloadedmetadata event fired");
            const videoDuration = coolVideo.duration;
            const scrollDuration = 1800 * (window.innerHeight / videoDuration);
            tl.to(coolVideo, { currentTime: videoDuration, duration: scrollDuration, ease: "none" });
        };

        // Handling touch devices
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

        // GSAP timeline to control text
        let tlText = gsap.timeline({
            scrollTrigger: {
                trigger: ".introVideo-wrap",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                // markers: true,
            }
        });

        texts.forEach((text, index) => {
            tlText.fromTo(text,
                { autoAlpha: 0 },
                {
                    autoAlpha: 1,
                    duration: 1,
                    ease: "power2.inOut"
                }, index * 5)
                .to(text,
                    {
                        autoAlpha: 0,
                        duration: 1,
                        ease: "power2.inOut"
                    }, (index * 5) + 5);
        });

    }, []);

    useEffect(() => {
        if (isVideoLoaded) {
            console.log("Video has finished loading");
        } else {
            console.log("Video is still loading");
        }
    }, [isVideoLoaded]);

    return (
        <div className="introVideo">
            <div className='introVideo-wrap'>
                <video className="video" playsInline preload="auto" muted>
                    <source src="../videos/getty_desktop_CH1_1920.mp4" type="video/mp4" />
                </video>
                <div className="introText introText-1">Frank Gehrys acclaimed Walt Disney Concert Hall has been called a Living room for Los Angeles.</div>
                <div className="introText introText-2">This remarkable work of public architecture is the result of a decades-long process of collaboration, negotiation, and invention</div>
                <div className="introText introText-3">During this time, Gehry and his collaborators developed hundreds of the limits of technical possibility</div>
                <div className="introText introText-4">Designed from the inside out, the Hall was conceived with music at its center - a space for music to be heard, seen, and felt</div>
                <div className="introText introText-5">This is the story of the Walt Disney Concert Hall, as told through the Frank Gehry archive at</div>
            </div>
        </div>
    );
}

export default IntroVideo;
