import { useColorModeValue, Button, Link } from "@chakra-ui/react"
import React from "react"
import { MdOutlineWork, MdSchool } from "react-icons/md"
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component"
import timelineElements from "./timelineElements"
import "react-vertical-timeline-component/style.min.css"
import { motion } from "framer-motion"

function Timeline() {
    const bg = useColorModeValue("#fff", "#171923")
    const color = useColorModeValue("#3182CE", "#7fafe8")
    let workIconStyles = { background: "#3182CE", color: "#fff" }
    let schoolIconStyles = { background: "#7fafe8", color: "#fff" }

    return (
        <div
            id="timeline"
            style={{
                overflow: "hidden",
            }}
        >
            <VerticalTimeline animate={false} lineColor={color}>
                {timelineElements.map((element, index) => {
                    let isWorkIcon = element.icon === "work"
                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== ""

                    return (
                        <VerticalTimelineElement
                            //@ts-ignore

                            id={`${element.id}`}
                            key={index}
                            date={element.date}
                            dateClassName="date"
                            //@ts-ignore
                            dateStyle={{
                                color: color,
                            }}
                            iconStyle={
                                isWorkIcon ? workIconStyles : schoolIconStyles
                            }
                            icon={isWorkIcon ? <MdOutlineWork /> : <MdSchool />}
                            visible={true}
                            contentStyle={{
                                background: bg,
                                color: color,
                            }}
                            //add framer motion
                            contentArrowStyle={{
                                borderRight: `7px solid ${color}`,
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.8 }}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {element.title}
                                </h3>
                                <h5 className="vertical-timeline-element-subtitle">
                                    {element.location}
                                </h5>
                                <p id="description">{element.description}</p>
                                {showButton && (
                                    <Button
                                        colorScheme="blue"
                                        width="fit-content"
                                        as={Link}
                                        href={element.buttonLink}
                                        isExternal={true}
                                        variant="outline"
                                        size="sm"
                                        textDecoration="none"
                                    >
                                        {element.buttonText}
                                    </Button>
                                )}
                            </motion.div>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )
}

export default Timeline
