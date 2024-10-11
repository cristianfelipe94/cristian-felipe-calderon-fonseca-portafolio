import * as React from "react"
import { SVGProps } from "react"
import { motion } from "framer-motion"

const sharedAnimationIcon = animationElement => {
    const sharedAnimationProperties = {
        transition: {
            times: [0, 1],
            duration: 5,
            repeat: Infinity,
            type: "keyframes",
            ease: "easeInOut",
        }
    }
    if (animationElement === "background-3") {
        return {
            ...sharedAnimationProperties,
            animate: {
                y: [0, -2, 0],
                rotate: [0, 10, 0],
            }
        }
    } else if (animationElement === "background-2") {
        return {
            ...sharedAnimationProperties,
            animate: {
                y: [0, -3, 0],
                x: [0, -2, 0],
                rotate: [0, -5, 0],
            }
        }
    } else if (animationElement === "background-4") {
        return {
            ...sharedAnimationProperties,
            animate: {
                y: [0, -5, 0],
                x: [0, 2, 0],
                rotate: [0, 10, 0],
            },

        }
    } else if (animationElement === "background-1") {
        return {
            ...sharedAnimationProperties,
            animate: {
                y: [0, -2, 0],
                x: [0, -3, 0],
                rotate: [0, -10, 0],
            }
        }
    } else if (animationElement === "background-cloud-star") {
        return {
            ...sharedAnimationProperties,
            animate: {
                y: [0, -1, 0],
                x: [0, -1, 1, 0]
            }
        }
    } else if (animationElement === "background-cloud") {
        return {
            ...sharedAnimationProperties,
            animate: {
                y: [0, -1, 0],
                x: [0, 2, 0],
                rotate: [0, -3, 0],
            }
        }
    }
}

export const CreativityIconSvg = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 101 99"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g id="creativity-icon">
            <g id="face-icon">
                <path
                    id="Line 434"
                    d="M29.959 51.5644C29.959 51.5644 30.959 57.0644 36.459 57.0644C42.4798 57.0644 42.959 51.5644 42.959 51.5644M33.459 69.0644C33.459 69.0644 32.4829 70.7038 29.959 71.0644C26.459 71.5644 23.9558 71.0644 23.9558 71.0644M25.959 42.5644L75.456 42.5627C75.456 42.5627 78.366 62.0069 74.4566 72.563C71.4914 80.5696 72.4559 85.5632 72.4559 95.5632C72.4559 95.5632 39.5762 95.5917 37.959 95.5632L37.959 88.0644L23.9559 86.5632L23.9559 63.7534L16.9559 58.0632L25.456 47.0632L25.959 42.5644Z"
                    stroke="#0e0e0e"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <motion.g id="background-4-icon" {...sharedAnimationIcon("background-4")}>
                <circle
                    id="Ellipse 15_3"
                    cx={4.5}
                    cy={4.5}
                    r={3}
                    transform="matrix(-0.823509 -0.567303 -0.567303 0.823509 89.7373 17.4677)"
                    stroke="#0e0e0e"
                    strokeWidth={2}
                />
                <path
                    id="Vector 4_3"
                    d="M80.2852 18.8493C80.2852 18.8493 76.9081 19.6124 75.2618 20.8531C72.7363 22.7564 71.1625 25.9223 71.1625 25.9223"
                    stroke="#0e0e0e"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </motion.g>
            <motion.g id="background-3-icon" {...sharedAnimationIcon("background-3")}>
                <circle
                    id="Ellipse 15"
                    cx={5.5}
                    cy={5.5}
                    r={4}
                    transform="matrix(-0.866025 0.5 0.5 0.866025 68.5479 2)"
                    stroke="#0e0e0e"
                    strokeWidth={2}
                />
                <path
                    id="Vector 4"
                    d="M63.0703 11.5131C63.0703 11.5131 61.2634 14.2532 60.459 16C59.7659 17.5049 59.459 21.5 59.459 21.5"
                    stroke="#0e0e0e"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </motion.g>
            <motion.g id="background-2-icon" {...sharedAnimationIcon("background-2")}>
                <circle
                    id="Ellipse 15_2"
                    cx={25.459}
                    cy={19.5}
                    r={3}
                    stroke="#0e0e0e"
                    strokeWidth={2}
                />
                <path
                    id="Vector 4_2"
                    d="M27.959 21.5C27.959 21.5 30.3071 24.0442 30.959 26C31.959 29 31.459 32.5 31.459 32.5"
                    stroke="#0e0e0e"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </motion.g>
            <motion.g id="background-1-icon" {...sharedAnimationIcon('background-1')}>
                <circle
                    id="Ellipse 15_4"
                    cx={15.459}
                    cy={32.5}
                    r={4}
                    stroke="#0e0e0e"
                    strokeWidth={2}
                />
                <path
                    id="Vector 4_4"
                    d="M19.459 32.5C19.459 32.5 22.8889 33.3895 24.459 34.5C25.8117 35.4568 26.959 37 26.959 37"
                    stroke="#0e0e0e"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </motion.g>
            <motion.g id="cloud-star-icon" {...sharedAnimationIcon('background-cloud-star')}>
                <path
                    id="Vector 2"
                    d="M44.959 25.5L42.459 20L39.959 25.5H34.959L37.959 30L36.959 35.5L42.459 32.5L47.959 35.5L46.959 30L49.959 25.5H44.959Z"
                    stroke="#0e0e0e"
                    strokeWidth={2}
                    strokeLinejoin="round"
                />
                <path
                    id="Vector 2_2"
                    d="M48.459 16H42.959H36.459C36.459 16 31.459 16 31.459 11C31.459 6.99999 36.459 6.99999 36.459 6.99999C36.459 6.99999 36.459 2 42.959 2C48.459 2 48.459 6.99999 48.459 6.99999C48.459 6.99999 53.459 6.99999 53.459 11C53.459 16 48.459 16 48.459 16Z"
                    stroke="#0e0e0e"
                    strokeWidth={2}
                    strokeLinejoin="round"
                />
                <path
                    id="Vector 3"
                    d="M36.959 16V24M47.959 16V24"
                    stroke="#0e0e0e"
                    strokeWidth={2}
                    strokeLinejoin="round"
                />
            </motion.g>
            <motion.g id="cloud-icon" {...sharedAnimationIcon('background-cloud')}>
                <path
                    id="Vector 1"
                    d="M92.959 49H87.459H80.959C80.959 49 75.959 49 75.959 44C75.959 40 80.959 40 80.959 40C80.959 40 80.959 35 87.459 35C92.959 35 92.959 40 92.959 40C92.959 40 97.959 40 97.959 44C97.959 49 92.959 49 92.959 49Z"
                    stroke="#0e0e0e"
                    strokeWidth={2}
                    strokeLinejoin="round"
                />
                <path
                    id="Ellipse 12"
                    d="M76.9101 41C77.5424 40.5 74.7777 37 70.5873 37C66.397 37 63 39.1863 63 42.5"
                    stroke="#0e0e0e"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    id="Ellipse 13"
                    d="M81.459 38C81.959 36.5 77.9905 31 70.5078 31C63.025 31 56.959 35.9249 56.959 42"
                    stroke="#0e0e0e"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    id="Ellipse 14"
                    d="M86.459 35C85.459 32.5 81.8095 26 70.8332 26C59.857 26 50.959 33.1634 50.959 42"
                    stroke="#0e0e0e"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </motion.g>
        </g>
    </svg>
)
export { CreativityIconSvg as ReactComponent }
