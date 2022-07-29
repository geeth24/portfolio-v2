import { Flex, Spinner, useColorModeValue } from "@chakra-ui/react"
import Head from "next/head"
import Hero from "../components/Hero/Hero"
import dynamic from "next/dynamic"
import Navbar from "../components/Navbar/Navbar"
// import Projects from "../components/Projects/Projects"
const Projects = dynamic(() => import("../components/Projects/Projects"), {
    suspense: true,
})
import Skills from "../components/Skills/Skills"
import Timeline from "../components/Timeline/Timeline"

import { animateScroll } from "react-scroll"
import { Suspense, useEffect } from "react"
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
    const renderLoader = () => (
        <Flex justifyContent="center" alignItems="center" height="100vh">
            <Spinner size="xl" thickness="4px" speed="0.65s" color="#347fdb" />
        </Flex>
    )
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
            <Suspense fallback={renderLoader()}>
                <Projects />
            </Suspense>
            <Contact />
        </div>
    )
}

export default Home
