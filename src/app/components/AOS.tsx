"use client"

import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
        easing: 'ease-out-quad',
        duration: 1000,
        once: true,
        mirror: false,
        offset: 10,
        delay: 400,
    });
  }, [])

  return null
}