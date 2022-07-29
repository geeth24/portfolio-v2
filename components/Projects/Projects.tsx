import {
    Box,
    Flex,
    SimpleGrid,
    Text,
    useColorModeValue,
    Image,
    Link,
    HStack,
    Button,
} from "@chakra-ui/react"
import React, { useState } from "react"

function Projects() {
    const cardBg = useColorModeValue("#ffffff", "gray.800")

    const color = useColorModeValue("brand.500", "brand.200")
    const colorOnHover = useColorModeValue("white", "white")

    const bgOnHover = useColorModeValue("#347fdbac", "#a8c8f0ac")

    const [pistaIsVisible, setPistaIsVisible] = useState(false)
    const [infinityIsVisible, setInfinityIsVisible] = useState(false)
    const [panchangaIsVisible, setPanchangaIsVisible] = useState(false)
    const [hsconnectIsVisible, setHsconnectIsVisible] = useState(false)
    const [palIsVisible, setPalIsVisible] = useState(false)
    const [coppellIsVisible, setCoppellIsVisible] = useState(false)

    function pistaOver() {
        setPistaIsVisible(true)
    }
    function pistaOut() {
        setPistaIsVisible(false)
    }
    function infinityOver() {
        setInfinityIsVisible(true)
    }
    function infinityOut() {
        setInfinityIsVisible(false)
    }
    function panchangaOver() {
        setPanchangaIsVisible(true)
    }
    function panchangaOut() {
        setPanchangaIsVisible(false)
    }
    function hsconnectOver() {
        setHsconnectIsVisible(true)
    }
    function hsconnectOut() {
        setHsconnectIsVisible(false)
    }
    function palOver() {
        setPalIsVisible(true)
    }
    function palOut() {
        setPalIsVisible(false)
    }
    function coppellOver() {
        setCoppellIsVisible(true)
    }
    function coppellOut() {
        setCoppellIsVisible(false)
    }

    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            height="100%"
            margin="0 auto"
            id="projects"
            maxW="5xl"
            pb={10}
        >
            <Flex align="flex-start" justify="center" direction="column" p={5}>
                <Text fontSize="6xl" fontWeight="bold" mb={5}>
                    Projects
                </Text>
                <Text fontSize="2xl" fontWeight="bold">
                    What I Built
                </Text>
                <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing={5}>
                    <Box
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
                        onMouseOver={pistaOver}
                        onMouseOut={pistaOut}
                        position="relative"
                    >
                        <Image
                            src="/projects/phi.png"
                            alt="phi"
                            boxSize="100%"
                            maxW="500px"
                        />
                        <Box
                            display={pistaIsVisible ? "block" : "none"}
                            position="absolute"
                            bottom="0"
                            left="0"
                            right="0"
                            backgroundColor={bgOnHover}
                            p={5}
                            color={colorOnHover}
                            fontSize="lg"
                            fontWeight="bold"
                            transition="all 0.5s ease-in-out"
                        >
                            <Box mb={2}>
                                <HStack spacing={5}>
                                    <Text fontSize="2xl" fontWeight="bold">
                                        Pista House Irving
                                    </Text>
                                    <Button
                                        as={Link}
                                        href="https://pistahouseirving.com"
                                        isExternal
                                        colorScheme="brand"
                                        size="sm"
                                    >
                                        Visit
                                    </Button>
                                </HStack>
                            </Box>
                        </Box>
                    </Box>
                    <Box
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
                        onMouseOver={infinityOver}
                        onMouseOut={infinityOut}
                        position="relative"
                    >
                        <Image
                            src="/projects/ilb.png"
                            alt="phi"
                            boxSize="100%"
                            maxW="500px"
                        />
                        <Box
                            display={infinityIsVisible ? "block" : "none"}
                            position="absolute"
                            bottom="0"
                            left="0"
                            right="0"
                            backgroundColor={bgOnHover}
                            p={5}
                            color={colorOnHover}
                            fontSize="lg"
                            fontWeight="bold"
                        >
                            <Box mb={2}>
                                <HStack spacing={5}>
                                    <Text fontSize="2xl" fontWeight="bold">
                                        Infinity Loops Bot
                                    </Text>
                                    <Button
                                        as={Link}
                                        href="https://github.com/thetechie7/InfinityLoopsBot"
                                        isExternal
                                        colorScheme="brand"
                                        size="sm"
                                    >
                                        Visit
                                    </Button>
                                </HStack>
                            </Box>
                        </Box>
                    </Box>
                    <Box
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
                        onMouseOver={panchangaOver}
                        onMouseOut={panchangaOut}
                        position="relative"
                    >
                        <Image
                            src="/projects/myp.png"
                            alt="phi"
                            boxSize="100%"
                            maxW="500px"
                        />
                        <Box
                            display={panchangaIsVisible ? "block" : "none"}
                            position="absolute"
                            bottom="0"
                            left="0"
                            right="0"
                            backgroundColor={bgOnHover}
                            p={5}
                            color={colorOnHover}
                            fontSize="lg"
                            fontWeight="bold"
                        >
                            <Box mb={2}>
                                <HStack spacing={5}>
                                    <Text fontSize="2xl" fontWeight="bold">
                                        MyPanchang
                                    </Text>
                                    <Button
                                        as={Link}
                                        href="https://mypanchang.app"
                                        isExternal
                                        colorScheme="brand"
                                        size="sm"
                                    >
                                        Visit
                                    </Button>
                                </HStack>
                            </Box>
                        </Box>
                    </Box>
                    <Box
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
                        onMouseOver={hsconnectOver}
                        onMouseOut={hsconnectOut}
                        position="relative"
                    >
                        <Image
                            src="/projects/hsc.png"
                            alt="phi"
                            boxSize="100%"
                            maxW="500px"
                        />
                        <Box
                            display={hsconnectIsVisible ? "block" : "none"}
                            position="absolute"
                            bottom="0"
                            left="0"
                            right="0"
                            backgroundColor={bgOnHover}
                            p={5}
                            color={colorOnHover}
                            fontSize="lg"
                            fontWeight="bold"
                        >
                            <Box mb={2}>
                                <HStack spacing={5}>
                                    <Text fontSize="2xl" fontWeight="bold">
                                        HS Connect
                                    </Text>
                                    <Button
                                        as={Link}
                                        href="https://hsc.geethg.com"
                                        isExternal
                                        colorScheme="brand"
                                        size="sm"
                                    >
                                        Visit
                                    </Button>
                                </HStack>
                            </Box>
                        </Box>
                    </Box>
                    <Box
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
                        onMouseOver={palOver}
                        onMouseOut={palOut}
                        position="relative"
                    >
                        <Image
                            src="/projects/pal.png"
                            alt="pal"
                            boxSize="100%"
                            maxW="500px"
                        />
                        <Box
                            display={palIsVisible ? "block" : "none"}
                            position="absolute"
                            bottom="0"
                            left="0"
                            right="0"
                            backgroundColor={bgOnHover}
                            p={5}
                            color={colorOnHover}
                            fontSize="lg"
                            fontWeight="bold"
                        >
                            <Box mb={2}>
                                <HStack spacing={5}>
                                    <Text fontSize="2xl" fontWeight="bold">
                                        PAL
                                    </Text>
                                    <Button
                                        as={Link}
                                        href="https://pal.geethg.com"
                                        isExternal
                                        colorScheme="brand"
                                        size="sm"
                                    >
                                        Visit
                                    </Button>
                                </HStack>
                            </Box>
                        </Box>
                    </Box>
                    <Box
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
                        onMouseOver={coppellOver}
                        onMouseOut={coppellOut}
                        position="relative"
                    >
                        <Image
                            src="/projects/cfy.png"
                            alt="cfy"
                            boxSize="100%"
                            maxW="500px"
                        />
                        <Box
                            display={coppellIsVisible ? "block" : "none"}
                            position="absolute"
                            bottom="0"
                            left="0"
                            right="0"
                            backgroundColor={bgOnHover}
                            p={5}
                            color={colorOnHover}
                            fontSize="lg"
                            fontWeight="bold"
                        >
                            <Box mb={2}>
                                <HStack spacing={5}>
                                    <Text fontSize="2xl" fontWeight="bold">
                                        Coppell For Youth
                                    </Text>
                                    <Button
                                        as={Link}
                                        href="https://coppellforyouth.vercel.app"
                                        isExternal
                                        colorScheme="brand"
                                        size="sm"
                                    >
                                        Visit
                                    </Button>
                                </HStack>
                            </Box>
                        </Box>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}

export default Projects