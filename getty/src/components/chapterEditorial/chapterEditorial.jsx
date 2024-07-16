import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./chapterEditorial.scss";
import brollreelFinalArchiveCropped from "../../../public/images/brollreel_final_archive_cropped.jpg";
import L from "../../../public/images/l.svg";
import MmCropped from "../../../public/images/mm_cropped.jpg";
import Competitiondetails from "../../../public/images/competitiondetails.jpg";
import Dch_v1_resized from "../../../public/images/dch_v1_resized.jpg";

gsap.registerPlugin(ScrollTrigger);

function ChapterEditorial() {
  useEffect(() => {
    gsap.to(".titleStretch__content-svg", {
      scrollTrigger: {
        trigger: ".ChapterEditorial",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
        // markers: true,
        onUpdate: (self) => {
          // Tính toán scaleY dựa trên tiến độ cuộn
          const scaleValue = 2.2 - self.progress * 4; // scaleY từ 2.5 xuống 1
          gsap.to(".titleStretch__content-svg", {
            scaleY: scaleValue,
            overwrite: "auto", // Đảm bảo animation không bị chồng chéo
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

    animateImages(".chapterSection .parallax__inner-1", -20, 20);
    animateImages(".chapterSection .parallax__inner-2", -20, 20);
    animateImages(".chapterSection .parallax__inner-3", -20, 20);
    animateImages(".chapterEditorial-bg .parallax__inner-4", -20, 20);

    gsap.to(".readMore", {
      scrollTrigger: {
        trigger: ".chapterSection",
        start: "top -200%",
        end: "bottom-=900px top",
        // markers: true,
        scrub: true, // Tự động cuộn khi cuộn chuột
      },
      scaleX: 1,
    });
  });
  return (
    <div className="ChapterEditorial">
      <div className="readMore js-readMore">
        <div className="chapterSection comp">
          <div className="chapterSection padding-x bg-16a147">
            <header className="editorialHero">
              <div className="editorialHero__titleContainer">
                <div className="titleStretch__content">
                  <svg
                    className="titleStretch__content-svg"
                    width="1511"
                    height="408"
                    viewBox="0 0 1511 408"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <g id="ch1-edit-desktop-en">
                      <path
                        id="S"
                        d="M158.629 200C99.152 200 61.3939 194.01 38.0039 182.552C15.5076 171.687 5.63022 155.67 1.53418 134.724C1.17941 132.909 2.59141 131.25 4.43998 131.25H141.018C142.347 131.25 143.537 132.199 144.598 132.999C147.596 135.259 155.139 136.458 165.981 136.458C176.339 136.458 179.68 135.938 179.68 133.854C179.68 132.552 178.344 132.031 170.324 131.25C162.305 130.99 146.934 130.208 117.864 128.906C71.7523 126.823 43.3502 121.615 27.3113 112.24C11.2725 103.125 5.9262 89.0625 5.9262 69.2708C5.9262 27.0833 55.0452 0 152.949 0C185.695 0 212.092 2.08334 233.477 7.03125C274.004 15.7357 297.77 33.4656 310.013 61.5817C310.853 63.5112 309.406 65.625 307.302 65.625H174.309C173.108 65.625 172.072 64.8551 171.259 63.9707C168.715 61.2015 162.821 59.8958 150.944 59.8958C140.252 59.8958 138.247 61.1979 138.247 63.0209C138.247 64.0625 138.915 64.5833 146.6 65.3646C154.286 66.1458 169.322 66.9271 199.395 67.9688C226.795 69.0104 248.514 71.6146 265.555 75.7813C299.638 84.375 314.34 100.521 314.34 129.167C314.34 175.521 260.877 200 158.629 200Z"
                        fill="black"
                      ></path>
                      <path
                        id="A"
                        d="M363.126 189.756C363.027 188.175 361.716 186.944 360.132 186.944H356.705C355.121 186.944 353.81 188.175 353.711 189.756L353.242 197.189C353.142 198.769 351.831 200 350.248 200H313.144C311.365 200 309.977 198.462 310.159 196.693L330.135 2.69274C330.292 1.16294 331.581 0 333.119 0H382.505C384.033 0 385.317 1.14926 385.486 2.66844L407.06 196.668C407.257 198.446 405.866 200 404.078 200H366.589C365.006 200 363.695 198.769 363.595 197.189L363.126 189.756ZM355.208 158.307C355.162 159.995 356.518 161.389 358.207 161.389H358.606C360.304 161.389 361.664 159.98 361.604 158.283L358.007 56.3889L355.208 158.307Z"
                        fill="black"
                      ></path>
                      <path
                        id="I"
                        d="M409.19 3C409.19 1.34314 410.534 0 412.19 0H459.082C460.738 0 462.082 1.34315 462.082 3V197C462.082 198.657 460.738 200 459.082 200H412.19C410.534 200 409.19 198.657 409.19 197V3Z"
                        fill="black"
                      ></path>
                      <path
                        id="L"
                        d="M469.079 200C467.422 200 466.079 198.657 466.079 197V3C466.079 1.34314 467.422 0 469.079 0H514.883C516.539 0 517.883 1.34315 517.883 3V141.167C517.883 142.824 519.226 144.167 520.883 144.167H541.8C543.457 144.167 544.8 145.51 544.8 147.167V197C544.8 198.657 543.457 200 541.8 200H469.079Z"
                        fill="black"
                      ></path>
                      <path
                        id="I_2"
                        d="M548.797 3C548.797 1.34314 550.141 0 551.797 0H619.599C621.256 0 622.599 1.34315 622.599 3V197C622.599 198.657 621.256 200 619.599 200H551.797C550.141 200 548.797 198.657 548.797 197V3Z"
                        fill="black"
                      ></path>
                      <path
                        id="N"
                        d="M737.114 197C737.114 198.657 735.771 200 734.114 200H629.598C627.941 200 626.598 198.657 626.598 197V3C626.598 1.34314 627.941 0 629.598 0H752.013C753.243 0 754.348 0.750755 754.801 1.89409L802.85 123.056L780.881 52.1002C780.792 51.8128 780.746 51.5137 780.746 51.2129V3C780.746 1.34315 782.09 0 783.746 0H887.115C888.771 0 890.115 1.34315 890.115 3V197C890.115 198.657 888.771 200 887.115 200H767.007C765.772 200 764.662 199.243 764.213 198.092L714.15 70L736.982 144.292C737.069 144.577 737.114 144.874 737.114 145.173V197Z"
                        fill="black"
                      ></path>
                      <path
                        id="G"
                        d="M994.959 161.93C994.826 160.72 992.651 160.716 992.44 161.916C988.26 185.766 975.663 200 947.647 200C933.897 200 923.382 197.333 915.563 192.267C899.926 181.6 894.264 158.4 894.264 118.133V84.2667C894.264 25.3333 925.539 0 982.966 0C1040.39 0 1065.74 24.2667 1064.93 77.6C1064.93 78.7782 1063.97 79.7333 1062.79 79.7333H986.453C985.569 79.7333 984.853 79.017 984.853 78.1333C984.853 66.6667 984.314 65.6 980.27 65.6C978.922 65.6 977.843 65.8667 977.034 66.6667C975.686 68 975.147 72.5333 975.147 84V125.6C975.147 141.067 976.226 143.2 981.887 143.2C985.839 143.2 987.987 140.029 988.504 134.199C988.65 132.549 987.284 131.2 985.628 131.2H983.809C982.152 131.2 980.809 129.857 980.809 128.2V89.4C980.809 87.7431 982.152 86.4 983.809 86.4H1061.93C1063.58 86.4 1064.93 87.7431 1064.93 89.4V197C1064.93 198.657 1063.58 200 1061.93 200H1001.83C1000.3 200 999.016 198.849 998.849 197.328L994.959 161.93Z"
                        fill="black"
                      ></path>
                      <path
                        id="T"
                        d="M1185.5 51.9444C1183.84 51.9444 1182.5 53.2876 1182.5 54.9444V197C1182.5 198.657 1181.16 200 1179.5 200H1132.77C1131.11 200 1129.77 198.657 1129.77 197V54.9444C1129.77 53.2876 1128.43 51.9444 1126.77 51.9444H1113.19C1111.53 51.9444 1110.19 50.6013 1110.19 48.9444V3C1110.19 1.34314 1111.53 0 1113.19 0H1199.08C1200.74 0 1202.08 1.34315 1202.08 3V48.9444C1202.08 50.6013 1200.74 51.9444 1199.08 51.9444H1185.5Z"
                        fill="black"
                      ></path>
                      <path
                        id="H"
                        d="M1262.71 127.912C1262.71 126.457 1261.53 125.278 1260.07 125.278C1258.62 125.278 1257.44 126.457 1257.44 127.912V197C1257.44 198.657 1256.09 200 1254.44 200H1209.08C1207.42 200 1206.08 198.657 1206.08 197V3C1206.08 1.34314 1207.42 0 1209.08 0H1254.44C1256.09 0 1257.44 1.34315 1257.44 3V70.9773C1257.44 72.4319 1258.62 73.6111 1260.07 73.6111C1261.53 73.6111 1262.71 72.4319 1262.71 70.9773V3C1262.71 1.34315 1264.05 0 1265.71 0H1311.33C1312.99 0 1314.33 1.34315 1314.33 3V197C1314.33 198.657 1312.99 200 1311.33 200H1265.71C1264.05 200 1262.71 198.657 1262.71 197V127.912Z"
                        fill="black"
                      ></path>
                      <path
                        id="E"
                        d="M1510.91 197C1510.91 198.657 1509.57 200 1507.91 200H1321.33C1319.67 200 1318.33 198.657 1318.33 197V3C1318.33 1.34314 1319.67 0 1321.33 0H1507.91C1509.57 0 1510.91 1.34315 1510.91 3V70.3333C1510.91 71.9902 1509.57 73.3333 1507.91 73.3333H1420.24C1418.58 73.3333 1417.24 74.6765 1417.24 76.3333V77.5556C1417.24 79.2124 1418.58 80.5556 1420.24 80.5556H1507.91C1509.57 80.5556 1510.91 81.8987 1510.91 83.5556V112.556C1510.91 114.212 1509.57 115.556 1507.91 115.556H1420.24C1418.58 115.556 1417.24 116.899 1417.24 118.556V120.056C1417.24 121.712 1418.58 123.056 1420.24 123.056H1507.91C1509.57 123.056 1510.91 124.399 1510.91 126.056V197Z"
                        fill="black"
                      ></path>
                      <path
                        id="S_2"
                        d="M54.7031 408C15.9129 408 0.914062 392.471 0.914062 358.469V335.766C0.914062 334.109 2.25721 332.766 3.91406 332.766H50.1515C51.8084 332.766 53.1515 334.109 53.1515 335.766V356.862C53.1515 361.414 53.9273 362.485 55.7375 362.485C57.5477 362.485 58.5821 361.681 58.5821 356.059V345.082C58.5821 341.601 58.3235 338.656 57.5477 336.782C56.2547 332.498 50.8241 329.017 35.8252 320.718C26.5156 315.363 19.5334 310.276 14.6199 305.992C4.53448 297.424 1.68987 287.518 1.68987 269.58V258.067C1.68987 225.403 19.0161 208 56.7719 208C90.1315 208 109.268 222.458 109.268 254.051V274.344C109.268 276.001 107.925 277.344 106.268 277.344H61.8407C60.1839 277.344 58.8407 276.001 58.8407 274.344V257.531C58.8407 251.373 59.0993 250.303 56.2547 250.303C54.1859 250.303 53.6687 250.57 53.6687 256.728V269.044C53.6687 271.186 53.9273 273.06 54.7031 274.399C55.9961 277.344 60.9095 280.557 74.0982 288.054C83.9251 293.408 91.1659 298.495 96.3379 302.779C106.682 312.15 110.044 321.253 110.044 337.853V358.469C110.044 393.274 93.4933 408 54.7031 408Z"
                        fill="black"
                      ></path>
                      <path
                        id="E_2"
                        d="M303.475 405C303.475 406.657 302.131 408 300.475 408H117.065C115.409 408 114.065 406.657 114.065 405V211C114.065 209.343 115.409 208 117.065 208H300.475C302.131 208 303.475 209.343 303.475 211V278.333C303.475 279.99 302.131 281.333 300.475 281.333H214.343C212.687 281.333 211.343 282.676 211.343 284.333V285.556C211.343 287.212 212.687 288.556 214.343 288.556H300.475C302.131 288.556 303.475 289.899 303.475 291.556V320.556C303.475 322.212 302.131 323.556 300.475 323.556H214.343C212.687 323.556 211.343 324.899 211.343 326.556V328.056C211.343 329.712 212.687 331.056 214.343 331.056H300.475C302.131 331.056 303.475 332.399 303.475 334.056V405Z"
                        fill="black"
                      ></path>
                      <path
                        id="A_2"
                        d="M373.377 395.471C373.246 393.917 371.947 392.722 370.387 392.722H359.752C358.193 392.722 356.893 393.917 356.763 395.471L355.942 405.251C355.812 406.805 354.512 408 352.953 408H310.151C308.343 408 306.945 406.412 307.175 404.619L332.045 210.619C332.237 209.121 333.511 208 335.02 208H393.601C395.101 208 396.371 209.109 396.573 210.596L422.935 404.596C423.18 406.397 421.78 408 419.962 408H377.187C375.627 408 374.327 406.805 374.197 405.251L373.377 395.471ZM361.263 345.675C361.172 347.391 362.54 348.833 364.259 348.833H365.845C367.577 348.833 368.95 347.37 368.838 345.641L364.685 281.056L361.263 345.675Z"
                        fill="black"
                      ></path>
                      <path
                        id="o"
                        d="M509.168 408C488.628 408 474.837 400.371 474.837 378.572V237.155C474.837 217.537 488.335 208 509.461 208C531.468 208 543.792 217.537 543.792 237.155V378.572C543.792 400.371 530.001 408 509.168 408ZM509.461 379.117C510.635 379.117 510.928 378.572 510.928 374.213V239.063C510.928 234.975 510.635 234.703 509.168 234.703C507.701 234.703 507.407 234.975 507.407 239.063V374.213C507.407 378.845 507.994 379.117 509.461 379.117Z"
                        fill="black"
                      ></path>
                      <path
                        id="F"
                        d="M653.897 361.889C652.24 361.889 650.897 363.232 650.897 364.889V405C650.897 406.657 649.554 408 647.897 408H551.335C549.678 408 548.335 406.657 548.335 405V211C548.335 209.343 549.678 208 551.335 208H735.955C737.612 208 738.955 209.343 738.955 211V288.611C738.955 290.268 737.612 291.611 735.955 291.611H653.897C652.24 291.611 650.897 292.954 650.897 294.611V296.944C650.897 298.601 652.24 299.944 653.897 299.944H735.955C737.612 299.944 738.955 301.288 738.955 302.944V358.889C738.955 360.546 737.612 361.889 735.955 361.889H653.897Z"
                        fill="black"
                      ></path>
                      <path
                        id="S_3"
                        d="M876.736 408C855.75 408 839.561 405.386 827.169 400.157C803.552 389.608 792.662 370.856 788.83 343.9C788.577 342.122 789.973 340.549 791.77 340.549H856.417C857.788 340.549 858.947 341.503 859.548 342.736C862.944 349.713 873.069 352.314 882.532 352.314C892.725 352.314 896.323 349.961 896.323 345.778C896.323 343.686 895.524 342.379 893.325 341.333C889.528 338.98 879.134 337.412 855.75 335.32C812.978 331.399 791.992 315.451 791.992 277.542C791.992 262.902 795.19 250.614 801.586 240.157C814.377 219.242 838.361 208 871.539 208C887.929 208 901.52 210.353 913.112 214.536C935.634 222.845 949.628 240.855 956.879 271.836C957.314 273.692 955.89 275.451 953.984 275.451H893.98C892.645 275.451 891.502 274.551 890.937 273.342C888.039 267.143 880.907 263.948 869.541 263.948C858.548 263.948 855.35 267.608 855.35 271.529C855.35 272.837 856.35 274.405 857.948 275.19C861.746 277.281 871.539 278.588 894.125 280.68C908.315 281.987 920.107 284.601 929.701 288.784C949.288 297.15 959.281 312.575 959.281 340.288C959.281 353.359 956.483 364.863 950.887 375.059C939.295 395.712 915.91 408 876.736 408Z"
                        fill="black"
                      ></path>
                      <path
                        id="o_2"
                        d="M997.609 408C977.069 408 963.278 400.371 963.278 378.572V237.155C963.278 217.537 976.776 208 997.902 208C1019.91 208 1032.23 217.537 1032.23 237.155V378.572C1032.23 400.371 1018.44 408 997.609 408ZM997.902 379.117C999.076 379.117 999.369 378.572 999.369 374.213V239.063C999.369 234.975 999.076 234.703 997.609 234.703C996.142 234.703 995.848 234.975 995.848 239.063V374.213C995.848 378.845 996.435 379.117 997.902 379.117Z"
                        fill="black"
                      ></path>
                      <path
                        id="u"
                        d="M1070.62 408C1045.16 408 1036.23 388.575 1036.23 349.45V211C1036.23 209.343 1037.57 208 1039.23 208H1065.97C1067.63 208 1068.97 209.343 1068.97 211V346.167C1068.97 355.743 1069.14 356.29 1070.62 356.29C1072.11 356.29 1072.28 356.016 1072.28 346.167V211C1072.28 209.343 1073.62 208 1075.28 208H1102.18C1103.84 208 1105.18 209.343 1105.18 211V349.45C1105.18 389.395 1094.6 408 1070.62 408Z"
                        fill="black"
                      ></path>
                      <path
                        id="N_2"
                        d="M1244.14 405C1244.14 406.657 1242.79 408 1241.14 408H1112.18C1110.52 408 1109.18 406.657 1109.18 405V211C1109.18 209.343 1110.52 208 1112.18 208H1262.94C1264.09 208 1265.13 208.657 1265.64 209.692L1324.41 331.056L1297.61 260.179C1297.48 259.84 1297.42 259.481 1297.42 259.118V211C1297.42 209.343 1298.76 208 1300.42 208H1427.97C1429.62 208 1430.97 209.343 1430.97 211V405C1430.97 406.657 1429.62 408 1427.97 408H1280.03C1278.87 408 1277.82 407.336 1277.32 406.292L1216.09 278L1243.94 352.213C1244.07 352.55 1244.14 352.907 1244.14 353.267V405Z"
                        fill="black"
                      ></path>
                      <path
                        id="D"
                        d="M1434.96 211C1434.96 209.343 1436.31 208 1437.96 208H1472.49C1480.25 208 1486.74 209.944 1492.51 213.278C1504.06 220.778 1510.91 236.333 1510.91 264.389V351.333C1510.91 365.5 1509.29 376.611 1505.86 384.667C1499.01 401.333 1486.92 408 1471.95 408H1437.96C1436.31 408 1434.96 406.657 1434.96 405V211ZM1470.14 357.5C1470.14 359.157 1471.83 360.946 1472.95 359.723C1473.91 358.673 1474.11 356.254 1474.11 350.778V262.167C1474.11 255.222 1473.39 254.111 1470.32 254.111C1470.22 254.111 1470.14 254.192 1470.14 254.292V357.5Z"
                        fill="black"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <p className="editorialHero__description heading1Text">
                Gehry s design approach aimed at once to subvert public
                perception of his unconventional design methods and to give rise
                to a concert hall that was appropriately and uniquely “LA.”
              </p>
            </header>
          </div>
          <div className="chapterSection padding-x bg-16a147">
            <div className="parallax__inner-1">
              <Image
                src={brollreelFinalArchiveCropped}
                alt="Image Error"
                className="editorialMedia__asset"
              />
            </div>
          </div>
          <div className="chapterSection padding-x bg-16a147">
            <div className="editorialDropCap">
              <div className="editorialDropCap__text">
                <Image
                  src={L}
                  alt="Image Error"
                  className="editorialMedia__asset"
                />
                <p className="editorialDropCap__body bodyText">
                  ate in 1988, four designs submitted to the competition for a
                  new concert hall in downtown Los Angeles were first unveiled
                  to the public. Directly adjacent to the Music Center, the
                  proposed Walt Disney Concert Hall was made possible by a $50
                  million gift by Lillian Disney in honor of her late husband,
                  and the future hall was intended to serve as a new dedicated
                  home for the LA Phil.&nbsp;
                </p>
              </div>
              <div className="editorialDropCap__media">
                <div className="parallax__inner-2">
                  <Image
                    src={MmCropped}
                    alt="Image Error"
                    className="editorialMedia__asset"
                  />
                </div>
                <h3 className="editorialMedia__caption captionSmallText">
                  Perspective Rendering for Frank Gehry s entry to the Walt
                  Disney Concert Hall Competition
                </h3>
              </div>
            </div>
          </div>
          <div className="chapterSection padding-x comp bg-white">
            <div className="isSingleImage isFlipped imageText">
              <div className="imageText__left">
                <div className="imageText__text">
                  <p className="imageText__body bodyText">
                    Of the four finalists in the competition, Frank Gehry’s firm
                    seemed to many to be an outlier: although his team had been
                    involved in increasingly large-scale public and cultural
                    projects by this point, Gehry was still largely known for
                    his work with bold forms and experimental, though
                    commonplace materials including chain-link fencing, stucco,
                    cardboard, and unpainted plywood, none of which seemed
                    appropriate to the design of a civic monument like a concert
                    hall. Gehry’s office, however, devised schemes for the
                    Concert Hall which managed to strike a careful balance:
                    refined, yet informal, serious, yet inviting, the design was
                    deemed befitting of a concert hall which would suit the
                    unique cultural landscape of Los Angeles, and a few weeks
                    later in 1988 it was announced as the competition’s winning
                    entry.
                  </p>
                </div>
              </div>
              <div className="imageText__right">
                <div className="editorialMedia isLandscape imageText__mediaRight parallax">
                  <div className="parallax__inner-3">
                    <Image
                      src={Competitiondetails}
                      alt="Image Error"
                      className="editorialMedia__asset"
                    />
                  </div>
                </div>
                <h3 className="isAbsolute editorialMedia__caption captionSmallText">
                  Model for Frank Gehry s entry to the Walt Disney Concert Hall
                  Competition
                </h3>
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
      <div className="chapterEditorial-bg">
        <div className="parallax__inner-4">
          <Image
            src={Dch_v1_resized}
            alt="Image Error"
            className="editorialMedia__asset"
          />
        </div>
      </div>
      <div className="waviy">
        <span style={{ "--i": 1 }}>R</span>
        <span style={{ "--i": 2 }}>E</span>
        <span style={{ "--i": 3 }}>A</span>
        <span style={{ "--i": 4 }}>D</span>
        <span style={{ "--i": 5 }}> </span>
        <span style={{ "--i": 6 }}>M</span>
        <span style={{ "--i": 7 }}>O</span>
        <span style={{ "--i": 8 }}>R</span>
        <span style={{ "--i": 9 }}>E</span>
      </div>
    </div>
  );
}

export default ChapterEditorial;
