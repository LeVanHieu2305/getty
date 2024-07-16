"use client"

import Image from "next/image";
import styles from "./page.module.css";

import { useEffect, useState } from 'react'

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { useStore } from '@/lib/store'
import { useScroll } from '@/hooks/use-scroll'
import { Landing } from "@/components/Landing/Landing";
import Chapter1 from "@/components/chapter1/Chapter1";
import Chapter2 from "@/components/chapter2/Chapter2";
import Chapter3 from "@/components/chapter3/Chapter3";
import Chapter4 from "@/components/chapter4/Chapter4";
import IntroVideo from "@/components/introVideo/introVideo";
import InteractiveVideo from "@/components/interactiveVideo/interactiveVideo";
import ChapterEditorial from "@/components/chapterEditorial/chapterEditorial";
import ChapterEditorialTwo from "@/components/chapterEditorialTwo/chapterEditorialTwo";
import ChapterEditorialThree from "@/components/chapterEditorialThree/chapterEditorialThree";
import ChapterVideo from "@/components/chapterVideo/chapterVideo";
import OutroVideo from "@/components/outroVideo/outroVideo";
import Archive from "@/components/archive/archive";


gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const lenis = useStore(({ lenis }) => lenis)

  useScroll(ScrollTrigger.update)

  useEffect(() => {
    if (lenis) {
      ScrollTrigger.refresh()
      lenis?.start()
    }
  }, [lenis])

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])




  return (
    <>
      {/* <Landing /> */}
      <IntroVideo />
      <Chapter1 />
      <InteractiveVideo />
      <ChapterEditorial/>
      <Chapter2 />
      <InteractiveVideo />
      <ChapterEditorialTwo/>
      <Chapter3 />
      <InteractiveVideo />
      <ChapterEditorialThree />
      <Chapter4 />
      <ChapterVideo />
      {/* <OutroVideo /> */}
      <Archive />
    </>
  );
}
