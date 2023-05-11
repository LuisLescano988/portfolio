import About from "@/components/About"
import Landing from "@/components/Landing"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 w-70 md:max-w-5xl">
      <Landing/>
      <Projects/>
      <About/>
    </main>
  )
}
