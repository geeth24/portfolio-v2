import * as React from "react"
import { motion } from "framer-motion"
import { MenuItem } from "./MenuItem"

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}
interface Props {
    toggle: () => void
    isOpen: boolean
}

export const Navigation = ({ toggle, isOpen }: Props) => (
    <>
        <motion.ul variants={variants}>
            <MenuItem
                toggle={toggle}
                isOpen={isOpen}
                id="home"
                tab="Home"
                colorSchemeButton={false}
            />
            <MenuItem
                toggle={toggle}
                isOpen={isOpen}
                id="timeline"
                tab="Timeline"
                colorSchemeButton={false}
            />
            <MenuItem
                toggle={toggle}
                isOpen={isOpen}
                id="skills"
                tab="Skills"
                colorSchemeButton={false}
            />
            <MenuItem
                toggle={toggle}
                isOpen={isOpen}
                id="projects"
                tab="Projects"
                colorSchemeButton={false}
            />
            <MenuItem
                toggle={toggle}
                isOpen={isOpen}
                id="contact"
                tab="Contact"
                colorSchemeButton={false}
            />
            <MenuItem
                toggle={toggle}
                isOpen={isOpen}
                id="contact"
                tab="Colorscheme"
                colorSchemeButton={true}
            />
        </motion.ul>
    </>
)
