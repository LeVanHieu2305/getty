import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './introVideo.scss';

gsap.registerPlugin(ScrollTrigger);

function IntroVideo() {
    const videoRef = useRef(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        const coolVideo = videoRef.current;

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
            document.body.classList.remove('no-scroll'); // Allow scrolling when video is loaded
        };

        coolVideo.onloadedmetadata = () => {
            console.log("Video onloadedmetadata event fired");

            // Configure gsap timeline for scroll-triggered playback
            const videoDuration = coolVideo.duration;
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".introVideo-wrap",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    onEnter: () => coolVideo.play(),
                    onLeave: () => coolVideo.pause(),
                    onEnterBack: () => coolVideo.play(),
                    onLeaveBack: () => coolVideo.pause(),
                }
            }).to(coolVideo, {
                currentTime: videoDuration,
                duration: videoDuration,
                ease: "none"
            });
        };

        // Disable scrolling until video is loaded
        document.body.classList.add('no-scroll');

    }, []);

    return (
        <div className="introVideo">
            {!isVideoLoaded && (
                <div className="loading-overlay">
                    Loading...
                </div>
            )}
            <div className='introVideo-wrap'>
                <video 
                    ref={videoRef} 
                    className="video" 
                    playsInline 
                    preload="auto" 
                    muted 
                    width="100%" 
                    height="auto">
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
