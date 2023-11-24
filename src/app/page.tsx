"use client"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Category from "./components/Category"
import Destination from "./components/Destination"
import Book from "./components/Book"
import Testimonials from "./components/Testimonials"
import Sponsors from "./components/Sponsors"
import Subscribe from "./components/Subscribe"
import Footer from "./components/Footer"

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
      <Subscribe />
      <Footer />
    </main>
  )
}
