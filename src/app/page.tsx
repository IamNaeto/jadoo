"use client"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Category from "./components/Category"
import Destination from "./components/Destination"
import Book from "./components/Book"
import Testimonials from "./components/Testimonials"
import Sponsors from "./components/Sponsors"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Category />
      <Destination />
      <Book />
      <Testimonials />
      <Sponsors />
    </main>
  )
}
