import { Flex, SimpleGrid, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React from "react"
import ProjectCard from "./ProjectCard"
import { ProjectsData } from "./ProjectsData"

function Projects() {
    const title = "Projects"
    const subtitle = "What I Built"

    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            h="100%"
            margin="0 auto"
            id="projects"
            maxW="5xl"
            pb={10}
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
                <SimpleGrid
                    columns={{ base: 1, sm: 1, md: 2 }}
                    spacing={5}
                    width="100%"
                    maxHeight="fit-content"
                >
                    {ProjectsData.map((project, index) => {
                        return (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                link={project.link}
                                image={project.image}
                                github={project.github}
                                apple={project.apple}
                            />
                        )
                    })}
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}

export default Projects
