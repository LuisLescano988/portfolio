import About from "@/components/About"
import Landing from "@/components/Landing"
import Projects from "@/components/Projects"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 w-70 md:max-w-5xl">
      <Landing/>
      <Projects/>
      <About/>
      <Footer/>
    </main>
  )
}