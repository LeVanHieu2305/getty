import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './interactiveVideo.scss';

gsap.registerPlugin(ScrollTrigger);

function InteractiveVideo() {
    const videoRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);
    const [currentSegment, setCurrentSegment] = useState({ start: 0, end: 10 });
    const [progress, setProgress] = useState(0);
    const [viewedSegments, setViewedSegments] = useState([]);
    const [showSubtitles, setShowSubtitles] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const segments = [
        { start: 0, end: 10 },
        { start: 10, end: 20 },
        { start: 20, end: 30 },
        { start: 30, end: 40 },
        { start: 40, end: 50 },
        { start: 50, end: 60 }
    ];

    const subtitleText = "So, what I focused on when I designed the Disney Hall is the relationship of the audience to the performer and then the performer to the audience and the audience to the audience.";
    const words = subtitleText.split(" ");

 useEffect(() => {
        // Sao lưu videoRef.current vào biến
        const videoElement = videoRef.current;

        // Khởi tạo ScrollTrigger
        if (videoElement) {
            ScrollTrigger.create({
                trigger: videoElement,
                start: "top center",
                end: "bottom center",
                onEnter: () => !isPaused && videoElement.play(),
                onLeave: () => videoElement.pause(),
                onEnterBack: () => !isPaused && videoElement.play(),
                onLeaveBack: () => videoElement.pause(),
            });
        }

        // Hàm cập nhật thời gian
        const handleTimeUpdate = () => {
            if (videoElement) {
                const { start, end } = currentSegment;
                const currentProgress = ((videoElement.currentTime - start) / (end - start)) * 100;
                setProgress(currentProgress);

                const currentTime = videoElement.currentTime;
                const wordsPerSecond = words.length / (end - start);
                const currentWordIndex = Math.floor((currentTime - start) * wordsPerSecond);
                setActiveIndex(currentWordIndex);

                if (videoElement.currentTime >= end) {
                    videoElement.pause();
                    videoElement.currentTime = end; // Ensure it doesn't loop back
                    playNextSegment(); // Play the next segment automatically
                }
            }
        };

        // Hàm xử lý play
        const handlePlay = () => setShowSubtitles(true);
        // const handlePause = () => setShowSubtitles(false);

        if (videoElement) {
            videoElement.addEventListener("timeupdate", handleTimeUpdate);
            videoElement.addEventListener("play", handlePlay);
            // videoElement.addEventListener("pause", handlePause);
        }

        // Cleanup
        return () => {
            if (videoElement) {
                videoElement.removeEventListener("timeupdate", handleTimeUpdate);
                videoElement.removeEventListener("play", handlePlay);
                // videoElement.removeEventListener("pause", handlePause);
            }
        };
    }, [isPaused, currentSegment]);

    const playSegment = (start, end) => {
        const video = videoRef.current;
        video.pause();
        video.currentTime = start;

        video.play();
        setIsPaused(false);
        setCurrentSegment({ start, end });
        setProgress(0);
        markSegmentsAsViewed(start); // Mark segments as viewed when the segment starts
    };

    const playNextSegment = () => {
        const currentIndex = segments.findIndex(segment => segment.start === currentSegment.start);
        const nextIndex = currentIndex + 1;

        if (nextIndex < segments.length) {
            const nextSegment = segments[nextIndex];
            playSegment(nextSegment.start, nextSegment.end);
        }
    };

    const playPreviousSegment = () => {
        const currentIndex = segments.findIndex(segment => segment.start === currentSegment.start);
        const prevIndex = currentIndex - 1;

        if (prevIndex >= 0) {
            const prevSegment = segments[prevIndex];
            playSegment(prevSegment.start, prevSegment.end);
        }
    };

    const markSegmentsAsViewed = (start) => {
        const currentIndex = segments.findIndex(segment => segment.start === start);
        const newViewedSegments = segments.slice(0, currentIndex + 1).map(segment => segment.start);
        setViewedSegments(newViewedSegments);
    };

    const togglePause = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPaused(false);
        } else {
            video.pause();
            setIsPaused(true);
        }
    };

    return (
        <div className="interactiveVideo">
            <div className="interactiveVideo__inner">
                <video ref={videoRef} className="interactiveVideo__media" muted>
                    <source src="../videos/getty_desktop_CH1_1920.mp4" type="video/mp4" />
                </video>
                {/* <video ref={videoRef} className="interactiveVideo__recap" muted>
                    <source src="../videos/recap.mp4" type="video/mp4" />
                </video> */}
            </div>
            <div className="navigation">
                <div className="half-screen prev" onClick={playPreviousSegment} data-label="Prev"></div>
                <div className="half-screen next" onClick={playNextSegment} data-label="Next"></div>
            </div>
            <div className="chapterInteractive__ui">
                <div className={`subtitles ${showSubtitles ? 'visible' : 'hidden'}`}>
                    <p className="captionSmallText name active">Frank Gehry, architect</p>
                    <p className="subtitle heading2Text">
                        {words.map((word, index) => (
                            <span key={index} className={`word ${index <= activeIndex ? 'active' : ''}`}>{word} </span>
                        ))}
                    </p>
                </div>
                <div className="controls">
                    <div className="buttons">
                        <button onClick={togglePause} className="pause">
                            {isPaused ? "Play" : "Pause"}
                        </button>
                        {segments.map((segment, index) => (
                            <button
                                key={index}
                                onClick={() => playSegment(segment.start, segment.end)}
                                className={viewedSegments.includes(segment.start) ? 'viewed' : ''}
                            >
                                {currentSegment.start === segment.start && currentSegment.end === segment.end && (
                                    <div className="progress-bar">
                                        <div className="progress" style={{ width: `${progress}%` }}></div>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InteractiveVideo;
