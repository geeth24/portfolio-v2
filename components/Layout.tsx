import React from "react"
import ScrollToTop from "./ScrollToTop"
import { useColorModeValue } from "@chakra-ui/react"
// import dynamic from "next/dynamic"
import MobileMenu from "./MobileMenu/MobileMenu"
import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"

type LayoutProps = {
    children: React.ReactNode
}

// const MobileMenu = dynamic(() => import("./MobileMenu/MobileMenu"), {
//     suspense: true,
// })
// const Footer = dynamic(() => import("./Footer/Footer"), {
//     suspense: true,
// })

const Layout = ({ children }: LayoutProps) => {
    const colorMode = useColorModeValue("white", "rgb(26 32 44)")

    // const renderLoader = () => (
    //     <Flex justifyContent="center" alignItems="center" height="100vh">
    //         <Spinner size="xl" thickness="4px" speed="0.65s" color="#3182CE" />
    //     </Flex>
    // )

    return (
        <>
            {/* <Suspense fallback={renderLoader()}> */}
            <div
                style={{
                    backgroundColor: colorMode,
                }}
            >
                <ScrollToTop />
                <MobileMenu />
                <Navbar />
                {children}
                <Footer />
            </div>
            {/* </Suspense> */}
        </>
    )
}

export default Layout
