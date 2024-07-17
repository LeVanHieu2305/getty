import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./chapterEditorialThree.scss";
import wdchInteriorapril11 from "../../../public/images/wdch_interiorapril11.jpg";
import C from "../../../public/images/c.svg";
import c4u1766Cropped from "../../../public/images/c4u1766_cropped.jpg";
import wdch_int_auditorium from "../../../public/images/wdch_int_auditorium.jpg";
import wdchInteriorapril12 from "../../../public/images/wdch_interiorapril12.jpg";
import brollreelFinalArchiveCropped from "../../../public/images/brollreel_final_archive_cropped.jpg";

gsap.registerPlugin(ScrollTrigger);

function ChapterEditorialThree() {
  useEffect(() => {
    gsap.to(".titleStretch__content-svggg", {
      scrollTrigger: {
        trigger: ".chapterEditorialThree",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
        // markers: true,
        onUpdate: (self) => {
          // Tính toán scaleY dựa trên tiến độ cuộn
          const scaleValue = 2.2 - self.progress * 4; // scaleY từ 2.5 xuống 1
          gsap.to(".titleStretch__content-svggg", {
            scaleY: scaleValue,
            overwrite: "auto",
          });
        },
      },
    });
    // Images parallax
    const animateImages = (selector, fromY, toY) => {
      gsap.utils.toArray(selector).forEach((item) => {
        const img = document.querySelectorAll(`${selector} img`);
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: selector,
            scrub: true,
            pin: false,
          },
        });

        tl.fromTo(
          img,
          { yPercent: fromY, ease: "none" },
          { yPercent: toY, ease: "none" }
        );
      });
    };

    animateImages(
      ".chapterEditorialThree .chapterSection .parallax__inner-a",
      -20,
      20
    );
    animateImages(
      ".chapterEditorialThree .chapterSection .parallax__inner-b",
      -20,
      20
    );
    animateImages(
      ".chapterEditorialThree .chapterSection .parallax__inner-c",
      -20,
      20
    );
    animateImages(
      ".chapterEditorialThree .chapterEditorialThree-bg .parallax__inner-d",
      -20,
      20
    );
    animateImages(
      ".chapterEditorialThree .chapterSection .parallax__inner-f",
      -20,
      20
    );
    animateImages(
      ".chapterEditorialThree .chapterSection .parallax__inner-e",
      -20,
      20
    );
    gsap.to(".chapterEditorialThree-readMore", {
      scrollTrigger: {
        trigger: ".chapterEditorialThree .chapterSection",
        start: "top -200%",
        end: "bottom-=900px top",
        scrub: true, // Cho phép scale thay đổi theo scroll chuột
        // markers: true,
      },
      scaleX: 1,
    });
  });
  return (
    <div className="chapterEditorialThree">
      <div className="chapterEditorialThree-readMore js-readMore">
        <div className="chapterSection comp">
          <div className="chapterSection bg-ffa441 padding-x">
            <header className="editorialHero">
              <div className="editorialHero__titleContainer">
                <div className="titleStretch__content">
                  <svg
                    width="1511"
                    height="409"
                    className="titleStretch__content-svggg"
                    viewBox="0 0 1511 409"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <g id="ch2-desktop-en">
                      <path
                        id="m"
                        d="M160.836 197.5C160.836 199.157 159.493 200.5 157.836 200.5H3.41358C1.75672 200.5 0.413574 199.157 0.413574 197.5V3.5C0.413574 1.84314 1.75672 0.5 3.41357 0.5H219.371C220.806 0.5 222.04 1.51655 222.315 2.9252L232.643 55.8275C232.672 55.9793 232.69 56.1332 232.696 56.2878L234.947 115.222L238.547 56.2883C238.557 56.1334 238.578 55.9794 238.612 55.8278L250.245 2.85647C250.548 1.48038 251.767 0.5 253.175 0.5H465.124C466.781 0.5 468.124 1.84315 468.124 3.5V197.5C468.124 199.157 466.781 200.5 465.124 200.5H309.346C307.689 200.5 306.346 199.157 306.346 197.5V158.648C306.346 158.402 306.376 158.157 306.436 157.918L331.652 57.4444L285.333 198.436C284.928 199.668 283.779 200.5 282.483 200.5H184.728C183.418 200.5 182.259 199.65 181.866 198.4L137.337 56.8889L160.759 158.501C160.81 158.722 160.836 158.948 160.836 159.175V197.5Z"
                        fill="black"
                      ></path>
                      <path
                        id="a"
                        d="M533.969 190.223C533.853 188.656 532.548 187.444 530.977 187.444H525.926C524.355 187.444 523.05 188.656 522.934 190.223L522.38 197.721C522.264 199.288 520.959 200.5 519.388 200.5H474.856C473.057 200.5 471.662 198.927 471.878 197.14L495.297 3.14045C495.479 1.6336 496.758 0.5 498.276 0.5H557.204C558.711 0.5 559.984 1.61787 560.179 3.11215L585.472 197.112C585.706 198.908 584.308 200.5 582.497 200.5H537.515C535.944 200.5 534.639 199.288 534.523 197.721L533.969 190.223ZM524.688 158.792C524.634 160.486 525.992 161.889 527.687 161.889H529.188C530.893 161.889 532.256 160.469 532.185 158.765L527.969 56.8889L524.688 158.792Z"
                        fill="black"
                      ></path>
                      <path
                        id="k"
                        d="M753.093 110.222L725.986 151.416C725.664 151.906 725.492 152.479 725.492 153.065V197.5C725.492 199.157 724.149 200.5 722.492 200.5H591.914C590.257 200.5 588.914 199.157 588.914 197.5V3.5C588.914 1.84314 590.257 0.5 591.914 0.5H722.016C723.673 0.5 725.016 1.84315 725.016 3.5V40.8913C725.016 41.1844 724.973 41.4759 724.888 41.7566L709.788 91.8889L733.915 42.7349C734.01 42.5418 734.125 42.3595 734.259 42.1911L766.469 1.63425C767.038 0.917658 767.903 0.5 768.818 0.5H912.413C915.085 0.5 916.423 3.73046 914.535 5.62063L839.897 80.3065C839.768 80.4352 839.628 80.552 839.478 80.6553L837.799 81.8139C836.141 82.9573 836.059 85.3765 837.634 86.6305L839.37 88.0123C839.591 88.1884 839.787 88.3949 839.95 88.6257L915.824 195.766C917.231 197.753 915.81 200.5 913.375 200.5H769.034C767.999 200.5 767.036 199.966 766.489 199.088L736.333 150.747C735.803 149.898 735.731 148.841 736.142 147.929L753.093 110.222Z"
                        fill="black"
                      ></path>
                      <path
                        id="i"
                        d="M926.082 3.5C926.082 1.84314 927.425 0.5 929.082 0.5H1005.96C1007.62 0.5 1008.96 1.84315 1008.96 3.5V197.5C1008.96 199.157 1007.62 200.5 1005.96 200.5H929.082C927.425 200.5 926.082 199.157 926.082 197.5V3.5Z"
                        fill="black"
                      ></path>
                      <path
                        id="N"
                        d="M1150.56 197.5C1150.56 199.157 1149.22 200.5 1147.56 200.5H1015.86C1014.2 200.5 1012.86 199.157 1012.86 197.5V3.5C1012.86 1.84314 1014.2 0.5 1015.86 0.5H1177.48C1178.65 0.5 1179.71 1.17818 1180.21 2.23804L1242.12 135.778L1209.84 40.1335C1209.73 39.8243 1209.68 39.5002 1209.68 39.174V3.5C1209.68 1.84315 1211.02 0.5 1212.68 0.5H1340.78C1342.44 0.5 1343.78 1.84315 1343.78 3.5V197.5C1343.78 199.157 1342.44 200.5 1340.78 200.5H1185.62C1184.46 200.5 1183.41 199.833 1182.91 198.786L1121 68.2778L1150.4 155.032C1150.51 155.342 1150.56 155.667 1150.56 155.995V197.5Z"
                        fill="black"
                      ></path>
                      <path
                        id="G"
                        d="M1446.32 171.429C1442.15 190.54 1430.02 200.5 1401.57 200.5C1362.89 200.5 1349.24 184.888 1349.24 144.511V56.4892C1349.24 16.1124 1380.71 0.5 1430.39 0.5C1485.38 0.5 1510.41 16.1124 1510.41 55.6817V69.3708C1510.41 71.0276 1509.07 72.3708 1507.41 72.3708H1436.43C1434.77 72.3708 1433.43 71.0276 1433.43 69.3708V54.8741C1433.43 46.5296 1432.67 46.5296 1429.26 46.5296C1425.84 46.5296 1425.09 46.7988 1425.09 55.4125V141.281C1425.09 151.779 1426.98 154.201 1433.43 154.201C1439.5 154.201 1441.77 151.779 1441.77 141.281V136.744C1441.77 135.087 1440.43 133.744 1438.77 133.744H1433.77C1432.12 133.744 1430.77 132.4 1430.77 130.744V85.0612C1430.77 83.4044 1432.12 82.0612 1433.77 82.0612H1507.41C1509.07 82.0612 1510.41 83.4044 1510.41 85.0612V197.5C1510.41 199.157 1509.07 200.5 1507.41 200.5H1452.06C1450.52 200.5 1449.24 199.339 1449.08 197.811L1446.32 171.429Z"
                        fill="black"
                      ></path>
                      <path
                        id="n"
                        d="M65.8796 405.5C65.8796 407.157 64.5365 408.5 62.8796 408.5H3.41358C1.75672 408.5 0.413574 407.157 0.413574 405.5V212.306C0.413574 210.65 1.75672 209.306 3.41357 209.306H76.3905C77.7649 209.306 78.9635 210.24 79.2995 211.573L119.109 369.491L96.5318 258.848C96.4915 258.651 96.4712 258.45 96.4712 258.248V212.306C96.4712 210.65 97.8144 209.306 99.4712 209.306H156.49C158.147 209.306 159.49 210.65 159.49 212.306V405.5C159.49 407.157 158.147 408.5 156.49 408.5H87.7797C86.4128 408.5 85.2187 407.576 84.8757 406.253L46.301 257.445L65.8174 351.761C65.8588 351.961 65.8796 352.165 65.8796 352.369V405.5Z"
                        fill="black"
                      ></path>
                      <path
                        id="o"
                        d="M372.853 407.694C327.949 407.694 289.747 405.306 258.917 400.267C195.917 390.188 164.417 368.173 164.417 328.387V290.193C164.417 270.3 173.13 254.651 189.885 242.45C224.736 218.314 288.406 208.5 374.864 208.5C417.757 208.5 454.619 211.152 486.789 216.457C549.789 227.597 585.31 250.408 585.31 290.193V328.387C585.31 347.485 576.597 362.868 560.512 374.539C527.002 397.88 463.331 407.694 372.853 407.694ZM374.864 344.036C382.236 344.036 384.247 342.18 384.247 335.549V279.318C384.247 272.688 382.236 271.361 374.864 271.361C368.832 271.361 365.481 272.422 365.481 279.584V335.814C365.481 342.18 368.832 344.036 374.864 344.036Z"
                        fill="black"
                      ></path>
                      <path
                        id="i_2"
                        d="M588.955 212.306C588.955 210.65 590.298 209.306 591.955 209.306H722.937C724.594 209.306 725.937 210.65 725.937 212.306V405.5C725.937 407.157 724.594 408.5 722.937 408.5H591.955C590.298 408.5 588.955 407.157 588.955 405.5V212.306Z"
                        fill="black"
                      ></path>
                      <path
                        id="s"
                        d="M869.432 408.5C834.422 408.5 807.043 405.862 786.397 400.585C745.104 390.032 728.497 369.453 728.946 339.64C728.946 338.62 729.773 337.793 730.793 337.793H860.148C861.805 337.793 863.148 339.136 863.148 340.793V342.542C863.148 346.499 866.29 348.61 871.676 348.61C877.511 348.61 880.653 347.027 880.653 343.861C880.653 338.848 869.88 337.001 829.036 330.669C806.595 327.24 789.09 323.018 774.727 318.533C746.451 309.299 732.985 295.843 732.985 273.682C732.985 233.843 775.625 209.306 869.88 209.306C960.097 209.306 1006.33 230.677 1004.98 271.571V272.792C1004.98 274.449 1003.64 275.792 1001.98 275.792H883.204C881.547 275.792 880.204 274.449 880.204 272.792V270.779C880.204 266.558 877.062 264.447 870.329 264.447C865.392 264.447 863.148 266.03 863.148 269.196C863.148 274.209 874.369 276.584 909.827 281.596C933.166 285.026 952.466 288.984 966.829 293.997C996.452 303.495 1009.47 317.742 1009.02 340.959C1009.02 386.866 968.176 408.5 869.432 408.5Z"
                        fill="black"
                      ></path>
                      <path
                        id="e"
                        d="M1510.41 405.5C1510.41 407.157 1509.07 408.5 1507.41 408.5H1015.93C1014.27 408.5 1012.93 407.157 1012.93 405.5V212.306C1012.93 210.65 1014.27 209.306 1015.93 209.306H1507.41C1509.07 209.306 1510.41 210.65 1510.41 212.306V279.344C1510.41 281.001 1509.07 282.344 1507.41 282.344H1271.43C1269.77 282.344 1268.43 283.687 1268.43 285.344V286.537C1268.43 288.194 1269.77 289.537 1271.43 289.537H1507.41C1509.07 289.537 1510.41 290.88 1510.41 292.537V321.396C1510.41 323.053 1509.07 324.396 1507.41 324.396H1271.43C1269.77 324.396 1268.43 325.739 1268.43 327.396V328.866C1268.43 330.523 1269.77 331.866 1271.43 331.866H1507.41C1509.07 331.866 1510.41 333.209 1510.41 334.866V405.5Z"
                        fill="black"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <p className="editorialHero__description heading1Text">
                The organ, a sculptural ensemble of pipes in metal and in
                Norwegian wood, crowns the symmetrical interior of the Walt
                Disney Concert Hall. Inaugurated a full year after the Hall
                first opened, the organ represented a significant,
                cross-disciplinary achievement whose complex design,
                construction, and sound testing required additional time,
                negotiation, care, and commitment to realize.
              </p>
            </header>
          </div>
          <div className="chapterSection bg-ffa441 padding-x">
            <div className="parallax__inner-a">
              <Image
                src={wdchInteriorapril11}
                alt="Image Error"
                className="editorialMedia__asset"
              />
            </div>
          </div>
          <div className="chapterSection bg-ffa441 padding-x">
            <div className="editorialDropCap">
              <div className="editorialDropCap__text">
                <Image
                  src={C}
                  alt="Image Error"
                  className="editorialMedia__asset"
                />
                <p className="editorialDropCap__body bodyText">
                  ollaborating with Manuel Rosales Jr., a renowned organ
                  designer and builder, Frank Gehry spent nearly three years
                  heavily involved in the design of the organ. During this
                  period, the architect’s office produced numerous variations
                  across more than forty models. This process took what Gehry
                  recalled as a “circuitous” journey, before the design was
                  ready to be delivered to Glatter-Götz Organ Builders, a German
                  organ-building company. The result: a remarkably unique organ,
                  exceptional both as an instrument to be heard and as a work to
                  be seen.
                </p>
              </div>
              <div className="editorialDropCap__media">
                <div className="parallax__inner-b">
                  <Image
                    src={c4u1766Cropped}
                    alt="Image Error"
                    className="editorialMedia__asset"
                  />
                </div>
                <h3 className="editorialMedia__caption captionSmallText">
                  MANUEL ROSALES JR. WORKING AT THE ORGAN
                  <br />
                  PHOTO BY LAURENCE BARTONE
                </h3>
              </div>
            </div>
          </div>
          <div className="chapterSection-wrap bg-white padding-2">
            <div className="chapterSection">
              <div className="isSingleImage isFlipped imageText">
                <div className="imageText__left">
                  <div className="imageText__text">
                    <p className="imageText__body bodyText">
                      “Among his many accomplishments, Frank Gehry will be
                      remembered as the architect who elevated the organ to be
                      the magnificent centerpiece of his design for the Walt
                      Disney Concert Hall.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="chapterSection">
              <div className="isFlipped imageText">
                <div className="imageText__left">
                  <div className="editorialMedia isPortrait imageText__mediaRight">
                    <div className="parallax">
                      <div className="parallax__inner-e">
                        <Image src={wdchInteriorapril12} alt=""/>
                      </div>
                    </div>
                    <h3
                      align="left"
                      className="isAbsolute editorialMedia__caption captionSmallText"
                    >
                      THE MANY PIPES WHICH COMPRISE THE ORGAN
                      <br />
                      PHOTO BY ADAM LATHAM COURTESY OF LA PHIL
                    </h3>
                  </div>
                  <div className="imageText__text">
                    <h2 className="imageText__title subHeadingText">
                      WHY AN ORGAN?
                    </h2>
                    <p className="imageText__body bodyText">
                      Why an organ of this magnitude, with its 6,134 pipes
                      towering above the concert hall s stage? Frank Gehry
                      explains this process as a crescendo of ideas. When, at an
                      early stage, he visited Hans Scharoun s Berlin
                      Philharmonie, Gehry found himself in awe of Scharoun s
                      organ for the immediate power and dynamic presence it
                      afforded the hall. The organ s rich materiality and
                      Baroque sculptural quality, accentuated by the play of
                      light within its immediate surrounds, strongly appealed to
                      Gehry s vision for the Walt Disney Concert Hall. However,
                      he and the project team sensed that the organs off-axis
                      placement in the Berlin Philharmonie was acoustically less
                      than ideal, and Gehry sought to devise alternate design
                      solutions in his own scheme for the Walt Disney Concert
                      Hall. The setting of the organ on the halls axis of
                      symmetry thus became essential, as was the creation of an
                      illumination device through which rays of light could
                      bathe the instrument in warm tones from high above. With
                      its playfully curving pipes on its façade—pipes which are
                      in fact functional—the organ embraces the orchestra and
                      audience alike, alluding to the playful dynamism and
                      spirit of invention that Gehry first noticed and admired
                      in Scharouns organ. THE ORGAN IN THE HALL PHOTO BY ADAM
                      LATHAM COURTESY OF LA PHIL
                    </p>
                  </div>
                </div>
                <div className="imageText__right">
                  <div className="editorialMedia isPortrait imageText__mediaLeft">
                    <div className="parallax">
                      <div className="parallax__inner-f">
                        <Image src={wdch_int_auditorium} alt=""/>
                      </div>
                    </div>
                    <h3
                      align="left"
                      className="editorialMedia__caption captionSmallText"
                    >
                      Constructing an Exterior Model in Paper and Acrylic
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="readMore__end bg-white">
          <div className="readMore__noise"></div>
          <button className="btnBrackets captionBigText active readMore__btn">
            <span className="leftBracket"></span>
            <span className="text">
              <span className="textFlip readMore__btn">
                <div className="chars">R</div>
                <div className="chars">e</div>
                <div className="chars">a</div>
                <div className="chars">d</div>
                <div className="chars">M</div>
                <div className="chars">o</div>
                <div className="chars">r</div>
                <div className="chars">e</div>
              </span>
            </span>
            <span className="rightBracket"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChapterEditorialThree;
