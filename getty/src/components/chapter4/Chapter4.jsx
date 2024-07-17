import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "./chapter4.scss";
function Chapter4() {
  useEffect(() => {
    gsap.to(".titleStretch__content-svgggg", {
      scrollTrigger: {
        trigger: ".chapter-four",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
        // markers: true,
        onUpdate: (self) => {
          // Tính toán scaleY dựa trên tiến độ cuộn
          const scaleValue = 3.5 - self.progress * 4; // scaleY từ 2.5 xuống 1
          gsap.to(".titleStretch__content-svgggg", {
            scaleY: scaleValue,
            overwrite: "auto",
          });
        },
      },
    });
  });

  return (
    <div className="chapter-four">
      <div className="chapter-four-top">
        <div className="four-chapterTitle__titleWrap">
          <div className="chapterTitleSvg">
            <div className="titleStretch__content">
              <svg
                width="1761"
                height="801"
                 className="titleStretch__content-svgggg"
                viewBox="0 0 1761 801"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <g id="outro-desktop-en">
                  <path
                    id="A"
                    d="M90.2209 617.02C90.1683 615.402 88.8414 614.117 87.2225 614.117H77.6813C76.0625 614.117 74.7356 615.402 74.6829 617.02L73.4765 654.084C73.4238 655.702 72.0969 656.986 70.4781 656.986H3.28859C1.56921 656.986 0.201608 655.544 0.292812 653.827L34.8584 3.11538C34.943 1.52261 36.2591 0.274536 37.8542 0.274536H124.969C126.559 0.274536 127.873 1.51521 127.964 3.10271L165.295 653.814C165.393 655.536 164.024 656.986 162.3 656.986H94.4258C92.8069 656.986 91.48 655.702 91.4274 654.084L90.2209 617.02ZM76.972 527.106C76.9165 528.8 78.275 530.204 79.9704 530.204H84.9628C86.647 530.204 88.0012 528.818 87.962 527.135L85.0634 402.51L81.7542 185.431L81.0565 402.51L76.972 527.106Z"
                    fill="black"
                  ></path>
                  <path
                    id="p"
                    d="M386.345 532.941C384.688 532.941 383.345 534.284 383.345 535.941V653.986C383.345 655.643 382.002 656.986 380.345 656.986H250.52C248.863 656.986 247.52 655.643 247.52 653.986V3.27454C247.52 1.61768 248.863 0.274536 250.52 0.274536H391.127C497.947 0.274536 537.563 55.9126 537.563 163.54V355.993C537.563 467.27 497.24 532.941 390.419 532.941H386.345ZM383.345 375.796C383.345 377.453 384.703 378.837 386.33 378.528C394.888 376.901 398.908 367.869 398.908 351.433V171.749C398.908 159.275 395.968 149.076 386.334 147.373C384.702 147.084 383.345 148.466 383.345 150.123V375.796Z"
                    fill="black"
                  ></path>
                  <path
                    id="l"
                    d="M545.676 656.986C544.019 656.986 542.676 655.643 542.676 653.986V3.27454C542.676 1.61768 544.019 0.274536 545.676 0.274536H746.177C747.834 0.274536 749.177 1.61768 749.177 3.27454V394.95C749.177 396.607 750.521 397.95 752.177 397.95H892.772C894.429 397.95 895.772 399.293 895.772 400.95V653.986C895.772 655.643 894.429 656.986 892.772 656.986H545.676Z"
                    fill="black"
                  ></path>
                  <path
                    id="a"
                    d="M992.959 617.018C992.905 615.401 991.578 614.117 989.96 614.117H980.078C978.46 614.117 977.134 615.401 977.08 617.018L975.847 654.086C975.793 655.703 974.466 656.986 972.848 656.986H904.052C902.331 656.986 900.963 655.542 901.056 653.824L936.381 3.1119C936.467 1.52057 937.783 0.274536 939.377 0.274536H1028.54C1030.12 0.274536 1031.44 1.51302 1031.53 3.09895L1069.68 653.811C1069.78 655.534 1068.41 656.986 1066.69 656.986H997.19C995.572 656.986 994.246 655.703 994.192 654.086L992.959 617.018ZM979.359 527.161C979.335 528.835 980.685 530.204 982.359 530.204H987.667C989.346 530.204 990.698 528.827 990.666 527.148L984.306 185.431L979.359 527.161Z"
                    fill="black"
                  ></path>
                  <path
                    id="c"
                    d="M1152.11 656.986C1096.85 656.986 1071.98 632.829 1071.98 559.464V95.113C1071.98 27.1156 1103.06 0.274536 1152.8 0.274536C1201.85 0.274536 1230.87 25.3262 1230.87 95.113V301.386C1230.87 303.043 1229.53 304.386 1227.87 304.386H1159.95C1158.29 304.386 1156.95 303.043 1156.95 301.386V105.849C1156.95 88.8501 1156.95 87.9554 1152.11 87.9554C1149.35 87.9554 1148.66 88.8501 1148.66 104.06V546.043C1148.66 563.042 1148.66 562.148 1152.11 562.148C1155.57 562.148 1156.95 563.042 1156.95 545.148V335.296C1156.95 333.64 1158.29 332.296 1159.95 332.296H1227.87C1229.53 332.296 1230.87 333.64 1230.87 335.296V558.569C1230.87 631.935 1203.24 656.986 1152.11 656.986Z"
                    fill="black"
                  ></path>
                  <path
                    id="e"
                    d="M1758.54 653.986C1758.54 655.643 1757.2 656.986 1755.54 656.986H1241.99C1240.33 656.986 1238.99 655.643 1238.99 653.986V3.27454C1238.99 1.61768 1240.33 0.274536 1241.99 0.274536H1755.54C1757.2 0.274536 1758.54 1.61768 1758.54 3.27454V238.069C1758.54 239.726 1757.2 241.069 1755.54 241.069H1508.83C1507.17 241.069 1505.83 242.412 1505.83 244.069V261.783C1505.83 263.44 1507.17 264.783 1508.83 264.783H1755.54C1757.2 264.783 1758.54 266.127 1758.54 267.783V376.708C1758.54 378.365 1757.2 379.708 1755.54 379.708H1508.83C1507.17 379.708 1505.83 381.051 1505.83 382.708V401.335C1505.83 402.991 1507.17 404.335 1508.83 404.335H1755.54C1757.2 404.335 1758.54 405.678 1758.54 407.335V653.986Z"
                    fill="black"
                  ></path>
                  <path
                    id="t"
                    d="M188.605 721.064C187.5 721.064 186.605 721.959 186.605 723.064V798.275C186.605 799.379 185.709 800.275 184.605 800.275H63.3678C62.2632 800.275 61.3678 799.379 61.3678 798.275V723.064C61.3678 721.959 60.4724 721.064 59.3678 721.064H3.71094C2.60637 721.064 1.71094 720.168 1.71094 719.064V667.128C1.71094 666.023 2.60637 665.128 3.71094 665.128H241.3C242.405 665.128 243.3 666.023 243.3 667.128V719.064C243.3 720.168 242.405 721.064 241.3 721.064H188.605Z"
                    fill="black"
                  ></path>
                  <path
                    id="O"
                    d="M317.456 800.275C302.731 800.275 290.203 798.655 280.094 795.236C259.435 788.397 249.105 773.461 249.105 746.468V720.554C249.105 707.058 251.963 696.44 257.457 688.162C268.885 671.786 289.764 665.128 318.115 665.128C332.18 665.128 344.268 666.928 354.817 670.527C375.476 678.085 387.124 693.561 387.124 720.554V746.468C387.124 759.425 384.267 769.862 378.993 777.78C368.004 793.616 347.125 800.275 317.456 800.275ZM318.115 757.085C320.532 757.085 321.192 755.826 321.192 751.327V713.176C321.192 708.677 320.532 707.777 318.115 707.777C316.137 707.777 315.038 708.497 315.038 713.356V751.507C315.038 755.826 316.137 757.085 318.115 757.085Z"
                    fill="black"
                  ></path>
                  <path
                    id="G"
                    d="M751.383 763.683C751.257 762.586 749.578 762.438 749.199 763.476C745.999 772.249 740.905 779.138 733.691 784.249C716.234 796.357 689.863 800.275 654.948 800.275C582.148 800.275 544.262 781.756 544.262 740.803V740.447C544.262 689.166 608.148 665.128 726.634 665.128C763.034 665.128 792.749 667.087 816.521 670.826C862.987 678.424 887.796 693.725 895.012 719.49C895.359 720.729 894.406 721.929 893.119 721.929H743.599C742.973 721.929 742.4 721.612 741.903 721.231C739.981 719.757 735.755 719.08 727.006 719.08C709.92 719.08 702.491 724.065 702.491 735.995C702.491 747.747 708.806 751.665 725.891 751.665C735.203 751.665 740.322 750.66 743.433 748.781C744.834 747.935 744.02 746.145 742.384 746.145H713.406C712.301 746.145 711.406 745.249 711.406 744.145V728.024C711.406 726.92 712.301 726.024 713.406 726.024H892.892C893.997 726.024 894.892 726.92 894.892 728.024V798.275C894.892 799.379 893.997 800.275 892.892 800.275H757.388C756.372 800.275 755.518 799.513 755.402 798.504L751.383 763.683Z"
                    fill="black"
                  ></path>
                  <path
                    id="A_2"
                    d="M948.882 793.28C948.792 792.246 947.927 791.452 946.889 791.452H942.158C941.12 791.452 940.255 792.246 940.165 793.28L939.718 798.447C939.628 799.481 938.763 800.275 937.725 800.275H901.771C900.555 800.275 899.621 799.199 899.791 797.995L918.317 666.848C918.456 665.862 919.301 665.128 920.297 665.128H967.623C968.612 665.128 969.452 665.85 969.601 666.826L989.609 797.973C989.793 799.184 988.856 800.275 987.631 800.275H951.321C950.284 800.275 949.418 799.481 949.329 798.447L948.882 793.28ZM941.547 772.108C941.504 773.242 942.411 774.184 943.546 774.184H945.479C946.621 774.184 947.532 773.228 947.476 772.087L944.142 703.232L941.547 772.108Z"
                    fill="black"
                  ></path>
                  <path
                    id="t_2"
                    d="M1178.41 721.064C1177.31 721.064 1176.41 721.959 1176.41 723.064V798.275C1176.41 799.379 1175.52 800.275 1174.41 800.275H1046.61C1045.5 800.275 1044.61 799.379 1044.61 798.275V723.064C1044.61 721.959 1043.71 721.064 1042.61 721.064H983.824C982.72 721.064 981.824 720.168 981.824 719.064V667.128C981.824 666.023 982.72 665.128 983.824 665.128H1234.08C1235.18 665.128 1236.08 666.023 1236.08 667.128V719.064C1236.08 720.168 1235.18 721.064 1234.08 721.064H1178.41Z"
                    fill="black"
                  ></path>
                  <path
                    id="H"
                    d="M1305.89 751.782C1305.89 750.678 1304.99 749.782 1303.89 749.782H1301.81C1300.71 749.782 1299.81 750.678 1299.81 751.782V798.275C1299.81 799.379 1298.92 800.275 1297.81 800.275H1242.57C1241.47 800.275 1240.57 799.379 1240.57 798.275V667.128C1240.57 666.023 1241.47 665.128 1242.57 665.128H1297.81C1298.92 665.128 1299.81 666.023 1299.81 667.128V712.869C1299.81 713.974 1300.71 714.869 1301.81 714.869H1303.89C1304.99 714.869 1305.89 713.974 1305.89 712.869V667.128C1305.89 666.023 1306.78 665.128 1307.89 665.128H1363.43C1364.54 665.128 1365.43 666.023 1365.43 667.128V798.275C1365.43 799.379 1364.54 800.275 1363.43 800.275H1307.89C1306.78 800.275 1305.89 799.379 1305.89 798.275V751.782Z"
                    fill="black"
                  ></path>
                  <path
                    id="E"
                    d="M1667.56 798.275C1667.56 799.379 1666.66 800.275 1665.56 800.275H1371.95C1370.84 800.275 1369.95 799.379 1369.95 798.275V667.128C1369.95 666.023 1370.84 665.128 1371.95 665.128H1665.56C1666.66 665.128 1667.56 666.023 1667.56 667.128V712.682C1667.56 713.786 1666.66 714.682 1665.56 714.682H1524.8C1523.69 714.682 1522.8 715.577 1522.8 716.682V717.562C1522.8 718.667 1523.69 719.562 1524.8 719.562H1665.56C1666.66 719.562 1667.56 720.457 1667.56 721.562V741.213C1667.56 742.317 1666.66 743.213 1665.56 743.213H1524.8C1523.69 743.213 1522.8 744.108 1522.8 745.213V746.281C1522.8 747.385 1523.69 748.281 1524.8 748.281H1665.56C1666.66 748.281 1667.56 749.176 1667.56 750.281V798.275Z"
                    fill="black"
                  ></path>
                  <path
                    id="R"
                    d="M1714.18 798.275C1714.18 799.379 1713.29 800.275 1712.18 800.275H1674.8C1673.69 800.275 1672.8 799.379 1672.8 798.275V667.128C1672.8 666.023 1673.69 665.128 1674.8 665.128H1722.16C1751.77 665.128 1760.13 670.196 1760.13 680.707V722.19C1760.13 729.51 1756.71 733.077 1747.22 735.141C1755.95 736.455 1760.13 739.646 1760.13 746.404C1760.13 752.723 1760.13 789.284 1760.13 798.277C1760.13 799.381 1759.23 800.275 1758.13 800.275H1720.74C1719.64 800.275 1718.74 799.379 1718.74 798.275V747.342C1718.74 745.52 1718.49 744.926 1716.18 744.766C1715.08 744.689 1714.18 745.61 1714.18 746.714V798.275ZM1715.32 682.584C1714.69 682.584 1714.18 683.094 1714.18 683.724V725.377C1714.18 725.586 1714.35 725.756 1714.56 725.756C1717.6 725.756 1718.74 725.005 1718.74 723.692V684.274C1718.74 682.96 1717.98 682.584 1715.32 682.584Z"
                    fill="black"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="chapter-four-bottom"></div>
    </div>
  );
}

export default Chapter4;
