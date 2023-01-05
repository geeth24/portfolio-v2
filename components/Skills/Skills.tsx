import { Flex, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React from "react"

import SkillCard from "./SkillCard"
import { skillsData } from "./SkillsData"

function Skills() {
    const bgColor = useColorModeValue("gray.100", "gray.700")

    const title = "Skills"
    const subtitle = "What I know"

    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            height={{ base: "100%", md: "100vh" }}
            bg={bgColor}
            margin="0 auto"
            id="skills"
            pb={{ base: "10", md: "0" }}
        >
            <Flex align="flex-start" justify="center" direction="column" p={5}>
                <Text fontSize="6xl" fontWeight="bold" mb={5}>
                    {title.split("").map((char, index) => {
                        return (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {char}
                            </motion.span>
                        )
                    })}
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                    {subtitle.split("").map((char, index) => {
                        return (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {char}
                            </motion.span>
                        )
                    })}
                </Text>
                <SimpleGrid columns={{ base: 2, md: 4, lg: 5 }} spacing={5}>
                    {skillsData.map((skill, index) => {
                        return (
                            <SkillCard
                                key={index}
                                title={skill.title}
                                icon={skill.icon}
                                iconColor={skill.iconColor}
                                customColorLight={skill.customColorLight}
                                customColorDark={skill.customColorDark}
                            />
                        )
                    })}
                </SimpleGrid>
                {/* <Text fontSize="2xl" fontWeight="bold" mt={10}>
                    Frameworks
                </Text>
                <SimpleGrid
                    columns={{ base: 2, md: 4, lg: 5 }}
                    spacing={5}
                ></SimpleGrid>
                <Text fontSize="2xl" fontWeight="bold" mt={10}>
                    Databases
                </Text>
                <SimpleGrid
                    columns={{ base: 2, md: 4, lg: 5 }}
                    spacing={5}
                ></SimpleGrid> */}
            </Flex>
        </Flex>
    )
}

export default Skills
