import * as React from "react"
import { motion } from "framer-motion"
import { Link } from "react-scroll"
import { useColorMode, useColorModeValue } from "@chakra-ui/react"

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
}

interface Props {
    id: string
    toggle: () => void
    tab: string
    colorSchemeButton: boolean
    isOpen: boolean
}
export const MenuItem = ({
    id,
    toggle,
    tab,
    colorSchemeButton,
    isOpen,
}: Props) => {
    const { colorMode, toggleColorMode } = useColorMode()
    const color = useColorModeValue("#347fdb", "#a8c8f0")

    var displayValue
    if (isOpen) {
        displayValue = "flex"
    } else {
        //wait for animation to finish
        setTimeout(() => {
            displayValue = "block"
        }, 500)
    }

    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
                display: `${displayValue}`,
                alignItems: "center",
                justifyContent: "center",
                color: color,
                pointerEvents: `${isOpen ? "all" : "none"}`,
            }}
        >
            {colorSchemeButton ? (
                <div onClick={() => (toggleColorMode(), toggle())}>
                    Toggle {colorMode === "light" ? "Dark" : "Light"}
                </div>
            ) : (
                <Link
                    to={id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                >
                    <div onClick={toggle}>{tab}</div>
                </Link>
            )}
        </motion.li>
    )
}
