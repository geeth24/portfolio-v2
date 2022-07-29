import { useColorModeValue, Button, Link } from "@chakra-ui/react"
import React from "react"
import { MdOutlineWork, MdSchool } from "react-icons/md"
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component"
import timelineElements from "./timelineElements"
import "react-vertical-timeline-component/style.min.css"

function Timeline() {
    const bg = useColorModeValue("#fff", "#171923")
    const color = useColorModeValue("#347fdb", "#7fafe8")
    let workIconStyles = { background: "#347fdb", color: "#fff" }
    let schoolIconStyles = { background: "#7fafe8", color: "#fff" }

    return (
        <div id="timeline">
            <VerticalTimeline animate={false} lineColor={color}>
                {timelineElements.map((element) => {
                    let isWorkIcon = element.icon === "work"
                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== ""

                    return (
                        <VerticalTimelineElement
                            //@ts-ignore

                            id={`${element.id}`}
                            key={element.id}
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
                                    colorScheme="brand"
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
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )
}

export default Timeline