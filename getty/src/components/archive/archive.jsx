import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./archive.scss";
gsap.registerPlugin(ScrollTrigger);
function Archive() {
  useEffect(() => {
    gsap.to(".archive-titleStretch__content-svg", {
        scrollTrigger: {
          trigger: ".archive",
          start: "top 50%",
          end: "bottom top",
          scrub: true,
          // markers: true,
          onUpdate: (self) => {
            // Tính toán scaleY dựa trên tiến độ cuộn
            const scaleValue = 2.2 - (self.progress * 4); // scaleY từ 2.5 xuống 1
            gsap.to(".archive-titleStretch__content-svg", {
              scaleY: scaleValue,
              overwrite: 'auto' // Đảm bảo animation không bị chồng chéo
            });
          }
        },
      })
  });

  return (
    <div className="archive">
      <header className="archiveHeader">
        <div className="archiveHeader__titleContainer">
          <div className="titleStretch">
            <div className="titleStretch__outer">
              <div className="titleStretch__inner">
                <div className="titleStretch__content">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1767.67 742"
                    preserveAspectRatio="none"
                    className="archive-titleStretch__content-svg"
                  >
                    <path d="M0,3A3,3,0,0,1,3,0H82.7a3,3,0,0,1,3,3V739a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3Z"></path>
                    <path d="M389.92,739a3,3,0,0,1-3,3H95.68a3,3,0,0,1-3-3V3a3,3,0,0,1,3-3H433.21a3,3,0,0,1,2.88,2.17L566.71,456.54,507.34,192a3,3,0,0,1-.07-.66V3a3,3,0,0,1,3-3H798.41a3,3,0,0,1,3,3V739a3,3,0,0,1-3,3H467.07a3,3,0,0,1-2.89-2.18l-136-480.12,61.69,276.9a2.82,2.82,0,0,1,.08.65Z"></path>
                    <path d="M808.44,3a3,3,0,0,1,3-3h95c54.81,0,84.15,23.7,84.15,102V640c0,78.33-32.43,102-87.24,102h-92a3,3,0,0,1-3-3Zm88.69,91.81a3,3,0,0,0-3,3V638a3,3,0,0,0,3,3H898c3.86,0,6.18-4.13,6.18-9.28V102c0-5.16-1.54-7.22-4.63-7.22Z"></path>
                    <path d="M1563.83,739a3,3,0,0,1-3,3H998.61a3,3,0,0,1-3-3V3a3,3,0,0,1,3-3h562.22a3,3,0,0,1,3,3V269.07a3,3,0,0,1-3,3H1290.44a3,3,0,0,0-3,3v20.79a3,3,0,0,0,3,3h270.39a3,3,0,0,1,3,3V425.71a3,3,0,0,1-3,3H1290.44a3,3,0,0,0-3,3v21.83a3,3,0,0,0,3,3h270.39a3,3,0,0,1,3,3Z"></path>
                    <path d="M1650.89,739.26a3,3,0,0,1-3,2.74h-80.39a3,3,0,0,1-3-3.31l41.31-396.23a3.42,3.42,0,0,0,0-.64L1568.41,3.33a3,3,0,0,1,3-3.33h75.79a3,3,0,0,1,3,2.68l13.6,127.17,3.09,146.34,3.86-147.37L1683.57,2.7a3,3,0,0,1,3-2.7H1760a3,3,0,0,1,3,3.32L1726.34,348a3.32,3.32,0,0,0,0,.63l41.31,390a3,3,0,0,1-3,3.32h-78.85a3,3,0,0,1-3-2.74L1670,592.57l-3.09-177.26-3.09,177.26Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="archiveHeader__bottom">
          <div className="archiveHeader__bottomLeft captionBigText">
            <p className="m-only">171 Highlights</p>
            <p className="d-only">171 Collection Highlights</p>
            <p className="d-only">1988–2003</p>
            <p className="d-only">Getty Research Institute</p>
          </div>
          <div className="archiveHeader__bottomRight">
            <p className="heading1Text">
              Hundreds of thousands of sketches, drawings, physical and digital
              models, photographic images, documentation, and various ephemera
              spanning nearly 300 projects comprise the Frank O. Gehry papers
              held at Getty Research Institute. To develop this story, Getty
              selected 171 highlights from our archive and augmented these with
              research, interviews, media capture, and 3D modeling work.
            </p>
            <p className="heading1Text">
              Together, these efforts provide a small, but captivating glimpse
              into the immense work that went into the design of the Walt Disney
              Concert Hall (WDCH). Getty’s archival selections are featured
              below in order of appearance.
            </p>
            <a
              className="externalLink"
              href="http://primo.getty.edu/GRI:GETTY_ALMA21183099180001551"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btnBrackets captionBigText active">
                <span className="leftBracket">[</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
                  fill="none"
                >
                  <path
                    stroke="#000"
                    strokeWidth="1.1"
                    d="m1 6.404 2.5-2.5 2.5-2.5m0 0H3m3 0V4.36"
                  ></path>
                </svg>
                <span className="text">
                  <span className="textFlip">
                    <div className="chars">V</div>
                    <div className="chars">i</div>
                    <div className="chars">e</div>
                    <div className="chars">w</div>
                    <div className="chars">f</div>
                    <div className="chars">u</div>
                    <div className="chars">l</div>
                    <div className="chars">l</div>
                    <div className="chars">c</div>
                    <div className="chars">o</div>
                    <div className="chars">l</div>
                    <div className="chars">l</div>
                    <div className="chars">e</div>
                    <div className="chars">c</div>
                    <div className="chars">t</div>
                    <div className="chars">i</div>
                    <div className="chars">o</div>
                    <div className="chars">n</div>
                  </span>
                </span>
                <span className="rightBracket">]</span>
              </button>
            </a>
          </div>
        </div>
      </header>
      <div className="archiveGrid">
        <div className="archiveGrid__list">
          <article className="archiveGridItem descriptor">
            <h2 className="captionSmallText"></h2>
            <p className="archiveGridItem__body bodyText">
              The design process for the Walt Disney Concert Hall unfolded
              across countless models, both physical and digital, and numerous
              sketches.
            </p>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[01]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Sketch of WDCH Exterior
            </h3>
            <div className="archiveGridItem__imgWrapper">
              <Image
                src="/images/gri_ASR036_366124ds.jpg"
                width={300}
                height={269}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[02]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Sketch of WDCH Exterior
            </h3>
            <div className="archiveGridItem__imgWrapper">
            <Image
                src="/images/gri_ASR042_366130ds.jpg"
                width={300}
                height={269}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem descriptor">
            <h2 className="captionSmallText">CHAPTER I Ship in the Box</h2>
            <p className="archiveGridItem__body bodyText">
              At the building s literal and conceptual center is the concert
              hall itself, an interior space whose development in many ways
              directed the overall scheme for the building.
            </p>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[03]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Plan Sketch of WDCH Interior
            </h3>
            <div className="archiveGridItem__imgWrapper">
            <Image
                src="/images/gri_ASR043_366131ds.jpg"
                width={300}
                height={269}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[04]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Study Model of WDCH Interior
            </h3>
            <div className="archiveGridItem__imgWrapper">
              <Image
                src="/images/gri_04.jpg"
                width={300}
                height={248}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[05]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Study Model for WDCH Interior
            </h3>
            <div className="archiveGridItem__imgWrapper">
              <Image
                src="/images/gri_05.jpg"
                width={300}
                height={248}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[06]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Study Model for WDCH Interior
            </h3>
            <div className="archiveGridItem__imgWrapper">
              <Image
                src="/images/gri_06.jpg"
                width={300}
                height={248}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[07]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Study Model for WDCH Interior
            </h3>
            <div className="archiveGridItem__imgWrapper">
              <Image
                src="/images/gri_07.jpg"
                width={300}
                height={248}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[08]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Study Model for WDCH Interior
            </h3>
            <div className="archiveGridItem__imgWrapper">
              <Image
                src="/images/gri_08.jpg"
                width={300}
                height={248}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[09]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Study Model for WDCH Interior
            </h3>
            <div className="archiveGridItem__imgWrapper">
              <Image
                src="/images/gri_09.jpg"
                width={300}
                height={248}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[10]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Study Model for WDCH Interior
            </h3>
            <div className="archiveGridItem__imgWrapper">
              <Image
                src="/images/gri_10.jpg"
                width={300}
                height={248}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[11]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Study Model for WDCH Interior
            </h3>
            <div className="archiveGridItem__imgWrapper">
              <Image
                src="/images/gri_11.jpg"
                width={300}
                height={248}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[12]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Study Model for WDCH Interior
            </h3>
            <div className="archiveGridItem__imgWrapper">
              <Image
                src="/images/gri_12.jpg"
                width={300}
                height={248}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[13]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Study Model for WDCH Interior
            </h3>
            <div className="archiveGridItem__imgWrapper">
              <Image
                src="/images/gri_13.jpg"
                width={300}
                height={248}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[14]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Ceiling Study Model for WDCH Interior
            </h3>
            <div className="archiveGridItem__imgWrapper">
              <Image
                src="/images/gri_14.jpg"
                width={300}
                height={248}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[15]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Ceiling Study Model for WDCH Interior
            </h3>
            <div className="archiveGridItem__imgWrapper">
              <Image
                src="/images/gri_15.jpg"
                width={300}
                height={248}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[16]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Study Model for WDCH Interior
            </h3>
            <div className="archiveGridItem__imgWrapper">
              <Image
                src="/images/gri_16.jpg"
                width={300}
                height={248}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[17]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Study Model for WDCH Interior
            </h3>
            <div className="archiveGridItem__imgWrapper">
              <Image
                src="/images/gri_17.jpg"
                width={300}
                height={248}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[18]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Study Model for WDCH Interior
            </h3>
            <div className="archiveGridItem__imgWrapper">
              <Image
                src="/images/gri_18.jpg"
                width={300}
                height={248}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[19]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Study Model for WDCH Interior
            </h3>
            <div className="archiveGridItem__imgWrapper">
              <Image
                src="/images/gri_19.jpg"
                width={300}
                height={248}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[20]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Study Model for WDCH Interior
            </h3>
            <div className="archiveGridItem__imgWrapper">
              <Image
                src="/images/gri_20.jpg"
                width={300}
                height={248}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[21]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Study Model for WDCH Interior
            </h3>
            <div className="archiveGridItem__imgWrapper">
              <Image
                src="/images/gri_21.jpg"
                width={300}
                height={248}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
          <article className="archiveGridItem interactive">
            <p className="archiveGridItem__subtitle captionSmallText">[22]</p>
            <h3 className="archiveGridItem__title captionSmallText d-only">
              Study Model for WDCH Interior
            </h3>
            <div className="archiveGridItem__imgWrapper">
              <Image
                src="/images/gri_22.jpg"
                width={300}
                height={248}
                alt="img"
                className="archiveGridItem__imgWrapper-img"
              />
            </div>
          </article>
        </div>
        <div className="archiveGrid__bottom">
          <button className="btnBrackets captionBigText active archiveGrid__paginate btnMore">
            <span className="leftBracket">[</span>
            <span className="text">
              <span className="textFlip archiveGrid__paginate btnMore">
                <div className="chars">S</div>
                <div className="chars">e</div>
                <div className="chars">e</div>
                <div className="chars">m</div>
                <div className="chars">o</div>
                <div className="chars">r</div>
                <div className="chars">e</div>
              </span>
            </span>
            <span className="rightBracket">]</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Archive;
