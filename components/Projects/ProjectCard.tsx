import {
    useColorModeValue,
    VStack,
    Box,
    Link,
    Image,
    Text,
    IconButton,
    HStack,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import React from "react"
import { SiApple, SiGithub } from "react-icons/si"
import { TbExternalLink } from "react-icons/tb"

interface ProjectCardProps {
    title: string
    link: string
    image: string
    github: string
    apple?: string
}

function ProjectCard({ title, link, image, github, apple }: ProjectCardProps) {
    const cardBg = useColorModeValue("#ffffff", "gray.800")

    const color = useColorModeValue("blue.500", "blue.300")
    const colorOnHover = useColorModeValue("white", "white")

    const bgOnHover = useColorModeValue("#3182CEac", "#90CDF4ac")

    const [projectCardIsVisible, setProjectCardIsVisible] =
        React.useState(false)

    const projectCardOver = () => {
        setProjectCardIsVisible(true)
    }

    const projectCardOut = () => {
        setProjectCardIsVisible(false)
    }

    return (
        <Box
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            marginTop="1rem"
            borderRadius="lg"
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.252)"
            backgroundColor={cardBg}
            _hover={{
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.252)",
                transform: "scale(1.05)",
                transition: "all 0.5s ease-in-out",
            }}
            transition="all 0.5s ease-in-out"
            borderColor={color}
            borderWidth="3px"
            borderStyle="solid"
            onMouseOver={projectCardOver}
            onMouseOut={projectCardOut}
            position="relative"
        >
            <Image src={image} alt={title} width="100%" maxW="500px" />
            <Box
                // display={projectCardIsVisible ? "block" : "none"}
                position="absolute"
                bottom="0"
                left="0"
                right="0"
                backgroundColor={bgOnHover}
                p={5}
                color={colorOnHover}
                fontSize="lg"
                fontWeight="bold"
                transition="all 0.2s ease-in-out"
                opacity={projectCardIsVisible ? 1 : 0}
                style={{
                    backdropFilter: "saturate(180%) blur(50px)",
                    WebkitBackdropFilter: "saturate(180%) blur(50px)",
                }}
                zIndex={0}
            >
                <Box mb={2}>
                    <VStack spacing={1} align="left">
                        <Text fontSize="2xl" fontWeight="bold">
                            {title}
                        </Text>
                        <HStack spacing={2}>
                            <IconButton
                                aria-label="Github"
                                icon={<TbExternalLink />}
                                size="sm"
                                as={Link}
                                href={link}
                                isExternal
                                color={colorOnHover}
                                variant="ghost"
                                transition="all 0.2s ease-in-out"
                                _hover={{
                                    backgroundColor: `${color}`,
                                    transform: "scale(1.2)",
                                    transition: "all 0.2s ease-in-out",
                                }}
                            />
                            <IconButton
                                aria-label={`${
                                    github !== "" ? "Github" : "Apple"
                                }`}
                                icon={
                                    github !== "" ? <SiGithub /> : <SiApple />
                                }
                                size="sm"
                                as={Link}
                                href={github !== "" ? github : apple}
                                isExternal
                                color={colorOnHover}
                                variant="ghost"
                                transition="all 0.2s ease-in-out"
                                _hover={{
                                    backgroundColor: `${color}`,
                                    transform: "scale(1.2)",
                                    transition: "all 0.2s ease-in-out",
                                }}
                            />
                        </HStack>
                    </VStack>
                </Box>
            </Box>
        </Box>
    )
}

export default ProjectCard
