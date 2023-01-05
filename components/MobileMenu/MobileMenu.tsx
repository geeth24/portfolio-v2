import * as React from "react"
import { useRef } from "react"
import { motion, useCycle } from "framer-motion"
import { useDimensions } from "./use-dimensions"
import { MenuToggle } from "./MenuToggle"
import { Navigation } from "./Navigation"
import { Box, useColorModeValue, chakra } from "@chakra-ui/react"

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
}

const MobileMenu = () => {
    const [isOpen, toggleOpen] = useCycle(false, true)
    const containerRef = useRef(null)
    const { height } = useDimensions(containerRef)
    const bg = useColorModeValue("#ffffffb8", "#1a202cb8")

    
    return (
        <chakra.nav
            as={motion.nav}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            display={{ base: "block", md: "none" }}
        >
            <Box
                as={motion.div}
                className="background"
                variants={sidebar}
                style={{
                    background: bg,
                    position: "fixed",

                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                    overflow: "hidden",
                    width: "300px",
                    backdropFilter: "saturate(180%) blur(50px)",
                    WebkitBackdropFilter: "saturate(180%) blur(50px)",
                }}
            />
            <Navigation toggle={() => toggleOpen()} isOpen={isOpen} />
            <MenuToggle toggle={() => toggleOpen()} />
        </chakra.nav>
    )
}

export default MobileMenu
