import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { GithubActivity } from '@/components/GithubActivity'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <GithubActivity />
      <Contact />
    </>
  )
}
