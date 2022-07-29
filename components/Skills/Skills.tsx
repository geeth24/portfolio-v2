import {
    Box,
    Flex,
    VStack,
    SimpleGrid,
    Text,
    useColorModeValue,
} from "@chakra-ui/react"
import React from "react"
import {
    SiCss3,
    SiFirebase,
    SiHtml5,
    SiJava,
    SiJavascript,
    SiNextdotjs,
    SiPython,
    SiReact,
    SiSwift,
    SiTypescript,
} from "react-icons/si"

function Skills() {
    const bgColor = useColorModeValue("gray.100", "gray.700")
    const cardBg = useColorModeValue("#ffffff", "gray.800")
    const nextDotJsColor = useColorModeValue("#000", "#fff")
    const color = useColorModeValue("brand.500", "brand.200")
    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            height={{ base: "100%", md: "100vh" }}
            bg={bgColor}
            margin="0 auto"
            id="skills"
            pb={{base: "10", md: "0"}}
        >
            <Flex align="flex-start" justify="center" direction="column" p={5}>
                <Text fontSize="6xl" fontWeight="bold" mb={5}>
                    Skills
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                    What I know
                </Text>
                <SimpleGrid columns={{ base: 2, md: 4, lg: 5 }} spacing={5}>
                    <Box
                        marginTop="1rem"
                        p={10}
                        borderRadius="lg"
                        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.252)"
                        backgroundColor={cardBg}
                        _hover={{
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.252)",
                            transform: "scale(1.1)",
                            transition: "all 0.5s ease-in-out",
                        }}
                        transition="all 0.5s ease-in-out"
                        borderColor={color}
                        borderWidth="3px"
                        borderStyle="solid"
                    >
                        <VStack spacing={4}>
                            <SiJavascript size="3rem" color="#F0DB4F" />
                            <Text
                                fontSize={["sm", "md", "lg"]}
                                fontWeight="bold"
                                color={color}
                            >
                                JavaScript
                            </Text>
                        </VStack>
                    </Box>
                    <Box
                        marginTop="1rem"
                        p={10}
                        borderRadius="lg"
                        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.252)"
                        backgroundColor={cardBg}
                        _hover={{
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.252)",
                            transform: "scale(1.1)",
                            transition: "all 0.5s ease-in-out",
                        }}
                        transition="all 0.5s ease-in-out"
                        borderColor={color}
                        borderWidth="3px"
                        borderStyle="solid"
                    >
                        <VStack spacing={4}>
                            <SiTypescript size="3rem" color="#007acc" />
                            <Text
                                fontSize={["sm", "md", "lg"]}
                                fontWeight="bold"
                                color={color}
                            >
                                TypeScript
                            </Text>
                        </VStack>
                    </Box>
                    <Box
                        marginTop="1rem"
                        p={10}
                        borderRadius="lg"
                        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.252)"
                        backgroundColor={cardBg}
                        _hover={{
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.252)",
                            transform: "scale(1.1)",
                            transition: "all 0.5s ease-in-out",
                        }}
                        transition="all 0.5s ease-in-out"
                        borderColor={color}
                        borderWidth="3px"
                        borderStyle="solid"
                    >
                        <VStack spacing={4}>
                            <SiSwift size="3rem" color="#F05138" />
                            <Text
                                fontSize={["sm", "md", "lg"]}
                                fontWeight="bold"
                                color={color}
                            >
                                Swift{" "}
                            </Text>
                        </VStack>
                    </Box>
                    <Box
                        marginTop="1rem"
                        p={10}
                        borderRadius="lg"
                        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.252)"
                        backgroundColor={cardBg}
                        _hover={{
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.252)",
                            transform: "scale(1.1)",
                            transition: "all 0.5s ease-in-out",
                        }}
                        transition="all 0.5s ease-in-out"
                        borderColor={color}
                        borderWidth="3px"
                        borderStyle="solid"
                    >
                        <VStack spacing={4}>
                            <SiHtml5 size="3rem" color="#e34c26" />
                            <Text
                                fontSize={["sm", "md", "lg"]}
                                fontWeight="bold"
                                color={color}
                            >
                                HTML
                            </Text>
                        </VStack>
                    </Box>
                    <Box
                        marginTop="1rem"
                        p={10}
                        borderRadius="lg"
                        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.252)"
                        backgroundColor={cardBg}
                        _hover={{
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.252)",
                            transform: "scale(1.1)",
                            transition: "all 0.5s ease-in-out",
                        }}
                        transition="all 0.5s ease-in-out"
                        borderColor={color}
                        borderWidth="3px"
                        borderStyle="solid"
                    >
                        <VStack spacing={4}>
                            <SiCss3 size="3rem" color="#3C99DC" />
                            <Text
                                fontSize={["sm", "md", "lg"]}
                                fontWeight="bold"
                                color={color}
                            >
                                CSS
                            </Text>
                        </VStack>
                    </Box>
                    <Box
                        marginTop="1rem"
                        p={10}
                        borderRadius="lg"
                        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.252)"
                        backgroundColor={cardBg}
                        _hover={{
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.252)",
                            transform: "scale(1.1)",
                            transition: "all 0.5s ease-in-out",
                        }}
                        transition="all 0.5s ease-in-out"
                        borderColor={color}
                        borderWidth="3px"
                        borderStyle="solid"
                    >
                        <VStack spacing={4}>
                            <SiPython size="3rem" color="#FFE873" />
                            <Text
                                fontSize={["sm", "md", "lg"]}
                                fontWeight="bold"
                                color={color}
                            >
                                Python
                            </Text>
                        </VStack>
                    </Box>
                    <Box
                        marginTop="1rem"
                        p={10}
                        borderRadius="lg"
                        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.252)"
                        backgroundColor={cardBg}
                        _hover={{
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.252)",
                            transform: "scale(1.1)",
                            transition: "all 0.5s ease-in-out",
                        }}
                        transition="all 0.5s ease-in-out"
                        borderColor={color}
                        borderWidth="3px"
                        borderStyle="solid"
                    >
                        <VStack spacing={4}>
                            <SiJava size="3rem" color="#f89820" />
                            <Text
                                fontSize={["sm", "md", "lg"]}
                                fontWeight="bold"
                                color={color}
                            >
                                Java
                            </Text>
                        </VStack>
                    </Box>
                    <Box
                        marginTop="1rem"
                        p={10}
                        borderRadius="lg"
                        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.252)"
                        backgroundColor={cardBg}
                        _hover={{
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.252)",
                            transform: "scale(1.1)",
                            transition: "all 0.5s ease-in-out",
                        }}
                        transition="all 0.5s ease-in-out"
                        borderColor={color}
                        borderWidth="3px"
                        borderStyle="solid"
                    >
                        <VStack spacing={4}>
                            <SiReact size="3rem" color="#61dbfb" />
                            <Text
                                fontSize={["sm", "md", "lg"]}
                                fontWeight="bold"
                                color={color}
                            >
                                React.js
                            </Text>
                        </VStack>
                    </Box>
                    <Box
                        marginTop="1rem"
                        p={10}
                        borderRadius="lg"
                        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.252)"
                        backgroundColor={cardBg}
                        _hover={{
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.252)",
                            transform: "scale(1.1)",
                            transition: "all 0.5s ease-in-out",
                        }}
                        transition="all 0.5s ease-in-out"
                        borderColor={color}
                        borderWidth="3px"
                        borderStyle="solid"
                    >
                        <VStack spacing={4}>
                            <SiNextdotjs size="3rem" color={nextDotJsColor} />
                            <Text
                                fontSize={["sm", "md", "lg"]}
                                fontWeight="bold"
                                color={color}
                            >
                                Next.js
                            </Text>
                        </VStack>
                    </Box>
                    <Box
                        marginTop="1rem"
                        p={10}
                        borderRadius="lg"
                        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.252)"
                        backgroundColor={cardBg}
                        _hover={{
                            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.252)",
                            transform: "scale(1.1)",
                            transition: "all 0.5s ease-in-out",
                        }}
                        transition="all 0.5s ease-in-out"
                        borderColor={color}
                        borderWidth="3px"
                        borderStyle="solid"
                    >
                        <VStack spacing={4}>
                            <SiFirebase size="3rem" color="#FFA000" />
                            <Text
                                fontSize={["sm", "md", "lg"]}
                                fontWeight="bold"
                                color={color}
                            >
                                Firebase
                            </Text>
                        </VStack>
                    </Box>
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
