import { useColorModeValue } from "@chakra-ui/react"
import Head from "next/head"
import Hero from "../components/Hero/Hero"

import Navbar from "../components/Navbar/Navbar"
import Projects from "../components/Projects/Projects"
import Skills from "../components/Skills/Skills"
import Timeline from "../components/Timeline/Timeline"

import { animateScroll } from "react-scroll"
import { useEffect } from "react"
import Contact from "../components/Contact/Contact"

const Home = () => {
    const bg = useColorModeValue("#F7FAFC", "#1a202c")

    useEffect(() => {
        setTimeout(() => {
            if (window.pageYOffset > 0) {
            } else {
                animateScroll.scrollTo(800, { duration: 1000 })
            }
        }, 5000)
    }, [])
    return (
        <div
            style={{
                backgroundColor: bg,
            }}
        >
            <Head>
                <title>Home | Geeth</title>
            </Head>
            <Navbar />
            <Hero />
            <Timeline />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home
