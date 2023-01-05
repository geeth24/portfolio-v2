import {
    Box,
    chakra,
    Container,
    HStack,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from "@chakra-ui/react"
import { ReactNode } from "react"
import Image from "next/image"
import {
    SiChakraui,
    SiInstagram,
    SiLinkedin,
    SiNextdotjs,
    SiTwitter,
    SiFramer,
    SiGithub,
} from "react-icons/si"
import { RiPagesLine } from "react-icons/ri"
import { animateScroll } from "react-scroll"
const Logo = () => {
    const scrolToTop = () => {
        animateScroll.scrollToTop()
    }

    return (
        <>
            <div
                onClick={scrolToTop}
                style={{
                    cursor: "pointer",
                }}
            >
                <Image
                    src="/CircleGGUTD.png"
                    alt="Geeth"
                    width={75}
                    height={75}
                />
            </div>
        </>
    )
}

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode
    label: string
    href: string
}) => {
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue("gray.200", "gray.900")}
            color={useColorModeValue("blue.500", "blue.200")}
        >
            <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                spacing={4}
                justify={"center"}
                align={"center"}
            >
                <Logo />

                <HStack>
                    <Text>Built with</Text>{" "}
                    <Link isExternal href="https://nextjs.org">
                        <SiNextdotjs />
                    </Link>
                    <Link isExternal href="https://chakra-ui.com">
                        <SiChakraui />
                    </Link>
                    <Link isExternal href="https://www.framer.com/motion/">
                        <SiFramer />
                    </Link>
                </HStack>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.300", "gray.700")}
            >
                <Container
                    as={Stack}
                    maxW={"6xl"}
                    py={4}
                    direction={{ base: "column", md: "row" }}
                    spacing={4}
                    justify={{ base: "center", md: "space-between" }}
                    align={{ base: "center", md: "center" }}
                >
                    <Text>© {new Date().getFullYear()} Geeth Gunnampalli</Text>
                    <Stack direction={"row"} spacing={6}>
                        <SocialButton
                            label={"GitHub"}
                            href={"https://github.com/thetechie7"}
                        >
                            <SiGithub />
                        </SocialButton>
                        <SocialButton
                            label={"Twitter"}
                            href={"https://twitter.com/GGunnampalli"}
                        >
                            <SiTwitter />
                        </SocialButton>
                        <SocialButton
                            label={"Linkedin"}
                            href={
                                "https://www.linkedin.com/in/geethgunnampalli"
                            }
                        >
                            <SiLinkedin />
                        </SocialButton>
                        <SocialButton
                            label={"Instagram"}
                            href={"https://instagram.com/geeth.tsx/"}
                        >
                            <SiInstagram />
                        </SocialButton>
                        <SocialButton
                            label={"Resume"}
                            href={"/Geeth Gunnampalli.pdf"}
                        >
                            <RiPagesLine />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}
