"use client"

import { Inter } from "next/font/google";
// import "./globals.css";
import '@/styles/global.scss'

import { CustomHead } from '@/components/custom-head/index'

import { useStore } from '@/lib/store'
import { useEffect, useState } from 'react'

import { ReactLenis, useLenis } from 'lenis/react'
import Lenis from '@/dist/lenis.mjs'

import styles from "./page.module.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({  seo = { title: '', description: '', image: '', keywords: '' }, children }) {
  const lenis = useLenis(({ scroll }) => {
 
  })
  // const [lenis, setLenis] = useStore((state) => [state.lenis, state.setLenis])

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  //   const lenis = new Lenis({
  //     // gestureOrientation: 'both',
  //     smoothWheel: true,
  //     // smoothTouch: true,
  //     syncTouch: true,
  //   })
  //   window.lenis = lenis
  //   setLenis(lenis)

  //   // new ScrollSnap(lenis, { type: 'proximity' })

  //   return () => {
  //     lenis.destroy()
  //     setLenis(null)
  //   }
  // }, [])

//   const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

  return (
    <ReactLenis root>
    <html lang="en">
      <CustomHead {...seo} />
      <body className={inter.className}>
        <Header />
        <main className='main'>
          {children}  
        </main>
        <Footer />
      </body>
    </html>
     </ReactLenis>
  );
}
