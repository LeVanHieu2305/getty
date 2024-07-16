import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./chapterEditorialTwo.scss";
import wdchExtSunriseAl from "../../../public/images/wdch_ext_sunrise_al.jpg";
import A from "../../../public/images/a.svg";
import MmCropped from "../../../public/images/mm_cropped.jpg";
import grimbf from "../../../public/images/grimbf.jpg";
import grimbf1 from "../../../public/images/grimbf1.jpg";
import brollreelFinalArchiveCropped from "../../../public/images/brollreel_final_archive_cropped.jpg";

gsap.registerPlugin(ScrollTrigger);

function ChapterEditorialTwo() {
  useEffect(() => {
    gsap.to(".titleStretch__content-svgg", {
      scrollTrigger: {
        trigger: ".chapterEditorialTwo",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
        // markers: true,
        onUpdate: (self) => {
          // Tính toán scaleY dựa trên tiến độ cuộn
          const scaleValue = 2.2 - self.progress * 4; // scaleY từ 2.5 xuống 1
          gsap.to(".titleStretch__content-svgg", {
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
      ".chapterEditorialTwo .chapterSection .parallax__inner-a",
      -20,
      20
    );
    animateImages(
      ".chapterEditorialTwo .chapterSection .parallax__inner-b",
      -20,
      20
    );
    animateImages(
      ".chapterEditorialTwo .chapterSection .parallax__inner-c",
      -20,
      20
    );
    animateImages(
      ".chapterEditorialTwo .chapterEditorialTwo-bg .parallax__inner-d",
      -20,
      20
    );
    animateImages(
      ".chapterEditorialTwo .chapterSection .parallax__inner-f",
      -20,
      20
    );
    animateImages(
      ".chapterEditorialTwo .chapterSection .parallax__inner-e",
      -20,
      20
    );
    gsap.to(".chapterEditorialTwo-readMore", {
      scrollTrigger: {
        trigger: ".chapterEditorialTwo .chapterSection",
        start: "top -200%",
        end: "bottom-=900px top",
        scrub: true, // Cho phép scale thay đổi theo scroll chuột
        // markers: true,
      },
      scaleX: 1,
    });
  });
  return (
    <div className="chapterEditorialTwo">
      <div className="chapterEditorialTwo-readMore js-readMore">
        <div className="chapterSection comp">
          <div className="chapterSection bg-4596ff padding-x">
            <header className="editorialHero">
              <div className="editorialHero__titleContainer">
                <div className="titleStretch__content">
                  <svg
                    width="1511"
                    className="titleStretch__content-svgg"
                    height="408"
                    viewBox="0 0 1511 408"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <g id="ch3-edit-desktop-en">
                      <path
                        id="S"
                        d="M40.5884 200C13.0718 200 0.724609 192.371 0.724609 170.027L0.724609 115.352C0.724609 114.247 1.62004 113.352 2.72461 113.352H36.8245C37.9291 113.352 38.8245 114.247 38.8245 115.352L38.8245 165.94C38.8245 171.117 39.1773 171.39 40.9412 171.39C42.7051 171.39 43.0579 171.117 43.0579 165.94L43.0579 119.619C43.0579 117.528 43.0579 115.938 42.124 114.61C42.044 114.496 41.9709 114.378 41.9022 114.257C40.6973 112.136 36.419 109.928 26.4773 104.632C6.01627 94.0055 1.07739 88.2834 0.724609 75.2044L0.724609 27.5204C0.724609 9.53679 16.5996 0 41.9995 0C67.0467 0 81.5106 9.26432 81.5106 24.2507L81.5106 74.0218C81.5106 75.1264 80.6151 76.0218 79.5106 76.0218H45.0579C43.9533 76.0218 43.0579 75.1264 43.0579 74.0218L43.0579 31.6076C43.0579 26.9755 42.7051 26.703 40.9412 26.703C39.1773 26.703 38.8245 26.9755 38.8245 31.6076L38.8245 71.1172C38.8245 72.4036 39.1391 73.69 39.4711 74.747C39.5098 74.8702 39.5596 74.9895 39.6301 75.0977C40.8597 76.9844 45.5797 79.5106 59.2856 86.921C76.2189 95.9128 81.5106 101.362 81.5106 115.531L81.5106 169.482C81.5106 192.371 67.3995 200 40.5884 200Z"
                        fill="black"
                      ></path>
                      <path
                        id="h"
                        d="M233.789 127.278C233.789 126.173 232.894 125.278 231.789 125.278H231.353C230.249 125.278 229.353 126.173 229.353 127.278L229.353 198C229.353 199.105 228.458 200 227.353 200H87.501C86.3964 200 85.501 199.105 85.501 198L85.501 2C85.501 0.895429 86.3964 0 87.501 0L227.353 0C228.458 0 229.353 0.895431 229.353 2L229.353 71.6111C229.353 72.7157 230.249 73.6111 231.353 73.6111H231.789C232.894 73.6111 233.789 72.7157 233.789 71.6111L233.789 2C233.789 0.895431 234.685 0 235.789 0L386.698 0C387.802 0 388.698 0.89543 388.698 2L388.698 198C388.698 199.105 387.802 200 386.698 200L235.789 200C234.685 200 233.789 199.105 233.789 198L233.789 127.278Z"
                        fill="black"
                      ></path>
                      <path
                        id="a"
                        d="M434.042 188.847C433.99 187.781 433.111 186.944 432.045 186.944H428.817C427.751 186.944 426.872 187.781 426.82 188.847L426.367 198.098C426.314 199.163 425.435 200 424.369 200H394.858C393.69 200 392.771 199.004 392.864 197.841L408.536 1.84059C408.619 0.801154 409.487 0 410.529 0L449.385 0C450.423 0 451.288 0.793907 451.378 1.82793L468.303 197.828C468.404 198.996 467.483 200 466.31 200H436.493C435.427 200 434.548 199.163 434.496 198.098L434.042 188.847ZM427.916 159.346C427.892 160.467 428.794 161.389 429.916 161.389H430.934C432.06 161.389 432.964 160.46 432.933 159.334L430.111 56.3889L427.916 159.346Z"
                        fill="black"
                      ></path>
                      <path
                        id="p"
                        d="M554.348 162.222C553.243 162.222 552.348 163.118 552.348 164.222L552.348 198C552.348 199.105 551.452 200 550.348 200H474.481C473.377 200 472.481 199.105 472.481 198L472.481 2C472.481 0.895429 473.377 0 474.481 0L556.924 0C619.735 0 643.03 16.9444 643.03 49.7222V108.333C643.03 142.222 619.319 162.222 556.508 162.222H554.348ZM552.348 113.278C552.348 114.382 553.249 115.296 554.346 115.17C559.211 114.611 561.499 111.869 561.499 106.944V52.2222C561.499 48.4778 559.82 45.4063 554.347 44.8223C553.249 44.7051 552.348 45.6177 552.348 46.7222V113.278Z"
                        fill="black"
                      ></path>
                      <path
                        id="i"
                        d="M646.855 2C646.855 0.895429 647.751 0 648.855 0L694.879 0C695.983 0 696.879 0.895431 696.879 2L696.879 198C696.879 199.105 695.983 200 694.879 200H648.855C647.751 200 646.855 199.105 646.855 198L646.855 2Z"
                        fill="black"
                      ></path>
                      <path
                        id="n"
                        d="M891.934 198C891.934 199.105 891.039 200 889.934 200H702.871C701.767 200 700.871 199.105 700.871 198L700.871 2C700.871 0.895429 701.767 0 702.871 0L942.398 0C943.06 0 943.68 0.328086 944.052 0.876104L1017.57 109.098C1018.97 111.148 1022.11 109.334 1021.03 107.103L991.601 46.2458C991.47 45.9743 991.402 45.6767 991.402 45.3752V2C991.402 0.895429 992.297 0 993.402 0L1177.6 0C1178.71 0 1179.6 0.895431 1179.6 2V198C1179.6 199.105 1178.71 200 1177.6 200H943.103C942.43 200 941.803 199.662 941.433 199.101L872.53 94.629C871.171 92.5685 868.016 94.3163 869.041 96.5613L891.754 146.271C891.873 146.532 891.934 146.815 891.934 147.102L891.934 198Z"
                        fill="black"
                      ></path>
                      <path
                        id="g"
                        d="M1377.07 154.788C1376.9 152.427 1372.69 152.108 1371.96 154.357C1369.04 163.238 1365.07 170.524 1359.95 176.285C1343.7 194.203 1319.15 200 1286.64 200C1218.86 200 1183.59 172.596 1183.59 111.989V111.462C1183.59 35.5731 1243.07 0 1353.38 0C1387.27 0 1414.94 2.89855 1437.07 8.43215C1480.82 19.8046 1503.95 42.8392 1510.37 81.7632C1510.57 82.9664 1509.63 84.058 1508.41 84.058L1369.51 84.058C1368.74 84.058 1368.07 83.5897 1367.57 82.9975C1365.77 80.8362 1361.84 79.8419 1353.73 79.8419C1337.82 79.8419 1330.9 87.22 1330.9 104.875C1330.9 122.266 1336.78 128.063 1352.69 128.063C1362.56 128.063 1367.37 126.137 1370.12 122.571C1371.01 121.417 1370.05 119.895 1368.59 119.895H1341.2C1340.1 119.895 1339.2 118.999 1339.2 117.895V92.1186C1339.2 91.014 1340.1 90.1186 1341.2 90.1186L1508.03 90.1186C1509.14 90.1186 1510.03 91.014 1510.03 92.1186V198C1510.03 199.105 1509.14 200 1508.03 200H1382.21C1381.17 200 1380.3 199.19 1380.22 198.145L1377.07 154.788Z"
                        fill="black"
                      ></path>
                      <path
                        id="c"
                        d="M385.779 311.557C387.466 311.557 388.825 312.972 388.732 314.656C385.217 378.644 323.408 408 192.902 408C147.166 408 110.66 404.311 82.5469 397.196C25.9007 382.44 0.724609 353.191 0.724609 308.395L0.724609 308.132C0.724609 245.154 67.0216 208 197.518 208C319.979 208 384.5 243.114 388.691 301.59C388.812 303.283 387.448 304.706 385.75 304.706H216.495C215.189 304.706 214.082 303.821 213.352 302.737C210.728 298.842 204.331 297.065 194.161 297.065C179.475 297.065 172.342 300.754 172.342 308.395C172.342 316.564 179.894 319.726 193.741 319.726C204.292 319.726 210.742 317.547 213.364 313.532C214.079 312.439 215.189 311.557 216.495 311.557H385.779Z"
                        fill="black"
                      ></path>
                      <path
                        id="u"
                        d="M472.619 408C413.558 408 392.848 388.575 392.848 349.45L392.848 211C392.848 209.343 394.191 208 395.848 208H465.784C467.441 208 468.784 209.343 468.784 211L468.784 346.167C468.784 355.743 469.168 356.29 472.619 356.29C476.071 356.29 476.454 356.016 476.454 346.167L476.454 211C476.454 209.343 477.798 208 479.454 208H549.774C551.431 208 552.774 209.343 552.774 211V349.45C552.774 389.395 528.229 408 472.619 408Z"
                        fill="black"
                      ></path>
                      <path
                        id="r"
                        d="M711.719 348.278C711.425 348.278 711.187 348.516 711.187 348.809L711.187 407C711.187 407.552 710.74 408 710.187 408H558.651C558.099 408 557.651 407.552 557.651 407L557.651 209C557.651 208.448 558.099 208 558.651 208H733.501C771.752 208 802.034 210.222 824.347 214.389C868.442 223.278 878.536 240.222 878.536 265.778C878.536 297.444 858.88 310.5 814.253 316.889C832.847 318 846.129 319.944 855.161 323.278C873.755 329.111 878.536 340.778 878.536 361.611V405C878.536 406.657 877.193 408 875.536 408H729.063C727.406 408 726.063 406.657 726.063 405L726.063 361.889C726.063 349.111 722.875 348.278 711.719 348.278ZM712.187 271.056C711.635 271.056 711.187 271.503 711.187 272.056V291.167C711.187 291.719 711.635 292.167 712.187 292.167H718.094C727.125 292.167 731.376 288.556 731.376 281.611V281.333C731.376 275.5 727.657 271.056 717.563 271.056H712.187Z"
                        fill="black"
                      ></path>
                      <path
                        id="v"
                        d="M917.796 408C916.381 408 915.159 407.012 914.863 405.628L873.329 211.628C872.929 209.761 874.352 208 876.262 208H956.475C957.951 208 959.207 209.073 959.438 210.531L968.364 266.889L971.332 356.889L973.875 266.889L982.801 210.531C983.032 209.073 984.289 208 985.765 208H1064.28C1066.19 208 1067.62 209.761 1067.22 211.628L1025.68 405.628C1025.38 407.012 1024.16 408 1022.75 408H917.796Z"
                        fill="black"
                      ></path>
                      <path
                        id="e"
                        d="M1374.12 405C1374.12 406.657 1372.77 408 1371.12 408H1073.98C1072.33 408 1070.98 406.657 1070.98 405V211C1070.98 209.343 1072.33 208 1073.98 208L1371.12 208C1372.77 208 1374.12 209.343 1374.12 211V278.333C1374.12 279.99 1372.77 281.333 1371.12 281.333H1229.67C1228.01 281.333 1226.67 282.676 1226.67 284.333V285.556C1226.67 287.212 1228.01 288.556 1229.67 288.556H1371.12C1372.77 288.556 1374.12 289.899 1374.12 291.556V320.556C1374.12 322.212 1372.77 323.556 1371.12 323.556H1229.67C1228.01 323.556 1226.67 324.899 1226.67 326.556V328.056C1226.67 329.712 1228.01 331.056 1229.67 331.056H1371.12C1372.77 331.056 1374.12 332.399 1374.12 334.056V405Z"
                        fill="black"
                      ></path>
                      <path
                        id="s"
                        d="M1443.47 408C1396.33 408 1378.1 392.471 1378.1 358.469V335.766C1378.1 334.109 1379.45 332.766 1381.1 332.766H1438.59C1440.24 332.766 1441.59 334.109 1441.59 335.766V356.862C1441.59 361.414 1442.53 362.485 1444.73 362.485C1446.93 362.485 1448.19 361.681 1448.19 356.059V345.082C1448.19 341.601 1447.87 338.656 1446.93 336.782C1445.36 332.498 1438.76 329.017 1420.53 320.718C1409.22 315.363 1400.73 310.276 1394.76 305.992C1382.5 297.424 1379.05 287.518 1379.05 269.58V258.067C1379.05 225.403 1400.1 208 1445.99 208C1486.53 208 1509.78 222.458 1509.78 254.051V274.344C1509.78 276.001 1508.44 277.344 1506.78 277.344H1451.5C1449.84 277.344 1448.5 276.001 1448.5 274.344V257.531C1448.5 251.373 1448.81 250.303 1445.36 250.303C1442.84 250.303 1442.21 250.57 1442.21 256.728V269.044C1442.21 271.186 1442.53 273.06 1443.47 274.399C1445.04 277.344 1451.01 280.557 1467.04 288.054C1478.98 293.408 1487.78 298.495 1494.07 302.779C1506.64 312.15 1510.72 321.253 1510.72 337.853V358.469C1510.72 393.274 1490.61 408 1443.47 408Z"
                        fill="black"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <p className="editorialHero__description heading1Text">
                Frank Gehry and his team engaged in an unprecedented traffic
                between handcraft and digital tooling in developing designs for
                the Walt Disney Concert Hall.
              </p>
            </header>
          </div>
          <div className="chapterSection bg-4596ff padding-x">
            <div className="parallax__inner-a">
              <Image
                src={wdchExtSunriseAl}
                alt="Image Error"
                className="editorialMedia__asset"
              />
            </div>
          </div>
          <div className="chapterSection bg-4596ff padding-x">
            <div className="editorialDropCap">
              <div className="editorialDropCap__text">
                <Image
                  src={A}
                  alt="Image Error"
                  className="editorialMedia__asset"
                />
                <p className="editorialDropCap__body bodyText">
                  t the project's inception, the building’s exterior form was to
                  be worked out through an iterative process of constructing
                  models by hand. With the concert hall shoebox at the center,
                  the building’s various programmatic requirements were fleshed
                  out with hand-cut elements in wood representing stairs,
                  elevators, mechanical systems, offices, and other “secondary”
                  spaces. Placed on the site, these various elements together
                  suggested how the concert hall’s monumental form could be
                  broken down to meet the urban context at a more human scale.
                </p>
              </div>
              <div className="editorialDropCap__media">
                <div className="parallax__inner-b">
                  <Image
                    src={MmCropped}
                    alt="Image Error"
                    className="editorialMedia__asset"
                  />
                </div>
                <h3 className="editorialMedia__caption captionSmallText">
                  CONSTRUCTING AN EXTERIOR MODEL IN PAPER AND ACRYLIC
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
                      Frank Gehry’s team next turned to paper models to
                      understand how these various programmatic and scalar needs
                      could be enwrapped in a single architectural gesture.
                      Initially envisioned as a dynamic form clad in limestone,
                      the building's exterior was later changed to stainless
                      steel—largely owing to aesthetic and budgetary
                      considerations.
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
                        <Image src={grimbf1} />
                      </div>
                    </div>
                    <h3
                      align="left"
                      className="isAbsolute editorialMedia__caption captionSmallText"
                    >
                      Exterior Study Model
                    </h3>

                  </div>
                  <div className="imageText__text">
                    <h2 className="imageText__title subHeadingText">
                      handcrafted possibilities
                    </h2>
                    <p className="imageText__body bodyText">
                      Tape, glue, and strips of paper reveal an ongoing process
                      of adjusting the building’s form, approximating complex
                      curvatures, and considering engineering opportunities and
                      constraints.
                    </p>
                  </div>
                </div>
                <div className="imageText__right">
                  <div className="editorialMedia isPortrait imageText__mediaLeft">
                    <div className="parallax">
                      <div className="parallax__inner-f">
                        <Image src={grimbf} />
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
      <div className="chapterEditorialTwo-bg">
        <div className="parallax__inner-d">
          <Image
            src={brollreelFinalArchiveCropped}
            alt="Image Error"
            className="editorialMedia__asset"
          />
        </div>
      </div>
    </div>
  );
}

export default ChapterEditorialTwo;
