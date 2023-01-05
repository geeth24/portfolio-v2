import { useColorModeValue, VStack, Box, Text, Icon } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React from "react"

interface SkillCardProps {
    title: string
    icon: any
    iconColor?: string
    customColorLight?: string
    customColorDark?: string
}

function SkillCard({
    title,
    icon,
    customColorLight,
    customColorDark,
    iconColor,
}: SkillCardProps) {
    const cardBg = useColorModeValue("#ffffff", "gray.800")
    const custom = useColorModeValue(customColorLight, customColorDark)
    const color = useColorModeValue("blue.500", "blue.200")

    return (
        <Box
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
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
                <Icon
                    as={icon}
                    color={customColorLight !== undefined ? custom : iconColor}
                    w={10}
                    h={10}
                />
                <Text
                    fontSize={["sm", "md", "lg"]}
                    fontWeight="bold"
                    color={color}
                >
                    {title}
                </Text>
            </VStack>
        </Box>
    )
}

export default SkillCard
