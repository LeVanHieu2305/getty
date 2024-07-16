import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Scribble from "../../../public/images/scribble.jpg";
import SculptingHarmony from "../../../public/images/sculpting-harmony.svg";
import "./Footer.scss";
gsap.registerPlugin(ScrollTrigger);
export const Footer = () => {
  useEffect(() => {
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
      ".footer .parallax__inner",
      -20,
      20
    );
  });
  return (
    <div className="footer">
      <div className="footer__headerWrap  parallax__inner">
        <Image src={Scribble} alt="Image Error" className="footer__scribble" />
        <header className="footer__header" id="accessible-footer">
          <h1 className="footer__title captionBigText">Acknowledgments</h1>
          <h2 className="heading1Text">
            Getty developed this digital exhibition through archival research,
            conversations with Frank Gehry and his many collaborators, and new
            scholarship, including 3D modeling and analysis.
          </h2>
        </header>
      </div>
      <div className="credits">
        <div className="credits__block large">
          <div className="credits__list">
            <div className="fullWidth credits__item">
              <h3 className="credits__itemTitle">By</h3>
              <p className="credits__itemBody">
                Maristella Casciato, Serena Parr Cline,
                <br />
                Gary Riichirō Fox, Linda Han, Emily Pugh, Todd Swanson, Ian Webb{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="specialThanks">
        <h2 className="specialThanks__title">Special thanks</h2>
        <div className="credits__block small">
          <div className="credits__list">
            <div className="credits__item">
              <h3 className="credits__itemTitle"></h3>
              <p className="credits__itemBody">
                Frank Gehry, Chief of Staff and partner Meaghan Lloyd, the
                partners of Gehry Partners, LLP, and Megan Meulemans Motoo
                Komoda of Nagata Acoustics LA PHIL AND TEAM : Scott Arenstein,
                Michele Beacham, Nora Brady, Jessie Farber, Kristen
                Flock-Ritchie, Raymond Horwitz, Chad Smith, Daniel Song, Natalie
                Suarez, Meghan Umber, Michael Vitale, Kelvin Vu, Julia Ward
              </p>
            </div>
          </div>
        </div>
        <div className="credits__block small">
          <div className="credits__list">
            <div className="credits__item">
              <h3 className="credits__itemTitle">
                Web Design, Development &amp; Sketching animations
              </h3>
              <p className="credits__itemBody">
                Resn Team : Bruno Arizio, Realexis Christofides, Ben Dudson,
                Jena Fenwick, Leigh Hibell, Matthijs Horsman, Aaron Howell,
                Simon Jullien, Manvydas Kūgis, Guillaume Lanier, Jamie Owen,
                James Rowsell, Thibault Terray
              </p>
            </div>
            <div className="credits__item">
              <h3 className="credits__itemTitle">
                Video Portraits of Frank Gehry
              </h3>
              <p className="credits__itemBody">
                David Brandon Geeting and team : Suzaine Aguirre, Connor
                Beadles, Matthew Beck, Evan Cox, Sam Kim, Natalie Fält, Destiny
                Farran, David Brandon Geeting, Kane Giblin, Caleb Lanier, Mark
                McGann, Anthony Yamamoto
              </p>
            </div>
            <div className="credits__item">
              <h3 className="credits__itemTitle">Drone Footage</h3>
              <p className="credits__itemBody">
                Mark Bender, John Kiffe, Michael Kretovics, Bill Malo
              </p>
            </div>
          </div>
        </div>
        <div className="credits__block small">
          <div className="credits__list">
            <div className="fullWidth credits__item">
              <h3 className="credits__itemTitle">Getty Colleagues</h3>
              <p className="credits__itemBody">
                Chelsea Anderson, Patricia Araque, Mark Benson, Tristan
                Bravinder, Sean Cantalupo, Kristen Carter, Shannon Carter,
                Cherie Chen, Kimberly Chen, Lora Chin Derrien, Michele Ciaccio,
                Tahnee Cracchiola, Peter Dueker, Lauren Edson, Nancy Enneking,
                Rich Fagen, Virginia Farrell, Malia Freund, Belamy Gonzalez,
                Marc Grobman, Ann Harezlak, Ann Harrison, Scarlett Hu, Natalia
                Jackson, Jessica Jurado, John Kiffe, Lili Koponen, Emily Lam,
                Lisa Lapin, Joohee Lee, Kirsten Lew, Miguel Lombera, Carlos
                Mansilla, Liz McDermott, Sara McGillivray, Mary Miller, David
                Newbury, Megan Newcome, Jane Niles, Kara Olidge, Aura Orozco,
                Andrew Perchuk, Manuel Perez, Glenn Phillips, Melissa Piper,
                Lily Pregill, Paul Riolo, Rachel Rivenc, Linda Roane, Adriana
                Romero, Carlie Rose, Amelie Rousseaux, Barry Russakis, Laura
                Schroffel, Caitlin Shamberg, Tyrone Smith, Elizabeth Smith,
                Teresa Soleau, Christopher Sprinkle, Margot Stokol, Jenn
                Stringer, Renee Tabizon, Valerie Tate, Brendan Threadgill, Nancy
                Um, Yasmine Vatere, Maria Velez, Anya Ventura, Khristaan
                Villela, Gilbert Visser, Lena Watanabe, Erica Wofford, Desiree
                Zenowich
              </p>
            </div>
          </div>
        </div>
        <div className="credits__block small">
          <h2 className="credits__blockTitle">
            Music performed by and provided courtesy of the LA Phil
          </h2>
          <div className="credits__list">
            <div className="fullWidth credits__item">
              <h3 className="credits__itemTitle"></h3>
              <p className="credits__itemBody">
                Intro - Antonín Dvořák: “Scherzo. Vivace (Symphony No. 7 in D
                minor, Op.70, B. 141”
                <br />
                Performed by Los Angeles Philharmonic, Gustavo Dudamel
                <br />
                Courtesy of Deutsche Grammophon Baarn under license from
                Universal Music Enterprises
                <br />
                <br />
                Chapter I - Wolfgang Amadeus Mozart: “Violin Concerto No. 5 in A
                Major, K. 219, `Turkish`: I. Allegro aperto - Adagio - Allegro
                aperto”
                <br />
                Performed by Martin Chalifour, Los Angeles Philharmonic, Sir
                Neville Marriner
                <br />
                Courtesy of Yarlung Records
                <br />
                <br />
                Chapter II - Gustav Mahler: “Sturmisch bewegt (Passionate,
                Agitated) (Symphony No.1 in D)”
                <br />
                Performed by Los Angeles Philharmonic, Gustavo Dudamel
                <br />
                Courtesy of Deutsche Grammophon Baarn under license from
                Universal Music Enterprises
                <br />
                <br />
                Chapter III - Camille Saint-Saëns: “Maestoso – Piu allegro –
                Molto allegro (Symphony No.3 in C minor, Op.78 “Organ Symphony”)
                By: Anita
                <br />
                Priest, Los Angeles Philharmonic, Zubin Mehta”
                <br />
                Performed by Anita Priest, Los Angeles Philharmonic, Zubin Mehta
                <br />
                Courtesy of Decca Music Group under license from Universal Music
                Enterprises
                <br />
                <br />
                Index/Acknowledgments - Sergei Rachmaninoff: “I.Moderato (Piano
                Concerto No.2 in C minor, Op.18) By: Yuja Wang, Los Angeles
                <br />
                Philharmonic, Gustavo Dudamel”
                <br />
                Performed by Yuja Wang, Los Angeles Philharmonic, Gustavo
                Dudamel
                <br />
                Courtesy of Deutsche Grammophon Baarn under license from
                Universal Music Enterprises
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>
            <div className="fullWidth credits__item">
              <h3 className="credits__itemTitle">
                Additional Walt Disney Concert Hall Photos
              </h3>
              <p className="credits__itemBody">
                Ship in the Box video photos : by Adam Latham courtesy of the LA
                Phil
                <br />
                Bouquet of Sound video photos
                <br />
                1: ©Paul Cressey Photography
                <br />
                2, 4, 6, 7: by Adam Latham courtesy of the LA Phil
                <br />
                3: ©Dustin Downing
                <br />
                5: Mike Kelley/@mikekelley_
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer__bottom">
        <Image
          src={SculptingHarmony}
          alt="Image Error"
          className="footer__logo"
        />
        <div className="footer__bottomBlock">
          <button className="btnBrackets captionBigText active">
            <span className="leftBracket">[</span>
            <span className="text">
              <span className="textFlip">
                {" "}
                <div className="chars">B</div>
                <div className="chars">a</div>
                <div className="chars">c</div>
                <div className="chars">k</div> <div className="chars">t</div>
                <div className="chars">o</div> <div className="chars">t</div>
                <div className="chars">o</div>
                <div className="chars">p</div>
              </span>
            </span>
            <span className="rightBracket">]</span>
          </button>
          <p className="captionBigText">© J. Paul Getty Trust</p>
        </div>
      </footer>
    </div>
  );
};
