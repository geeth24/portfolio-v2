import {
    useColorModeValue,
    chakra,
    Flex,
    HStack,
    Button,
    IconButton,
    useColorMode,
} from "@chakra-ui/react"
import React from "react"
import { BsMoon, BsSun } from "react-icons/bs"
import { Link } from "react-scroll"

function Navbar() {
    const bg = useColorModeValue("#ffffffb8", "#1a202cb8")
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <React.Fragment>
            <chakra.header
                bg={bg}
                w="full"
                px={{ base: 2, sm: 4 }}
                py={4}
                shadow="md"
                display={{ base: "none", md: "block" }}
                position="fixed"
                top="0"
                zIndex="999"
                style={{
                    backdropFilter: "saturate(180%) blur(50px)",
                    WebkitBackdropFilter: "saturate(180%) blur(50px)",
                }}
            >
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mx="auto"
                    maxW="5xl"
                >
                    <Flex>
                        <chakra.h1
                            as={Link}
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            fontSize="xl"
                            fontWeight="bold"
                            ml="2"
                            style={{
                                cursor: "pointer",
                            }}
                            color={colorMode === "light" ? "blue.500" : "white"}
                        >
                            Geeth
                        </chakra.h1>
                    </Flex>
                    <Flex>
                        <HStack spacing={4} mr={1} color="blue.500">
                            <Button
                                as={Link}
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                width={100}
                                variant="ghost"
                                fontSize="md"
                                cursor="pointer"
                            >
                                Home
                            </Button>
                            <Button
                                as={Link}
                                to="timeline"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                width={100}
                                variant="ghost"
                                fontSize="md"
                                cursor="pointer"
                            >
                                Timeline
                            </Button>
                            <Button
                                as={Link}
                                to="skills"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                width={100}
                                variant="ghost"
                                fontSize="md"
                                cursor="pointer"
                            >
                                Skills
                            </Button>
                            <Button
                                as={Link}
                                to="projects"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                width={100}
                                variant="ghost"
                                fontSize="md"
                                cursor="pointer"
                            >
                                Projects
                            </Button>
                        </HStack>
                    </Flex>
                    <Flex>
                        <Button
                            as={Link}
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            width={100}
                            variant="solid"
                            fontSize="md"
                            cursor="pointer"
                            color={colorMode === "light" ? "blue.500" : "white"}
                        >
                            Contact
                        </Button>
                        <IconButton
                            aria-label="Toggle Dark Switch"
                            mt={-18}
                            mr={6}
                            onClick={toggleColorMode}
                            color={colorMode === "light" ? "blue.500" : "white"}
                            width={10}
                        >
                            {colorMode === "light" ? <BsMoon /> : <BsSun />}
                        </IconButton>
                    </Flex>
                </Flex>
            </chakra.header>
        </React.Fragment>
    )
}

export default Navbar
