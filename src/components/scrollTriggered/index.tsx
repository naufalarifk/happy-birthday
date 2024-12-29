import * as motion from "motion/react-client"
import type { Variants } from "motion/react"

export default function ScrollTriggered() {
    return (
        <div style={container}>
            {words.map(([emoji, background], i) => (
                <Card i={i} emoji={emoji} bg={background} key={emoji} />
            ))}
        </div>
    )
}

interface CardProps {
    emoji: string
    bg: string
    i: number
}

function Card({ emoji, bg, i }: CardProps) {

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background: bg }}  />
            <motion.div style={card} variants={cardVariants} className="card">
                {emoji}
            </motion.div>
        </motion.div>
    )
}

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}



/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    margin: "0 auto",
    maxWidth: 500,
    minWidth: 500,
    paddingBottom: 100,
    width: "100%",
    gap: "600px",
    display: "grid",
}

const cardContainer: React.CSSProperties = {
    minWidth: 500,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
}

const splash: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card: React.CSSProperties = {
    fontSize: 24,
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
}

/**
 * ==============   Data   ================
 */

const words: [string, string][] = [

    ["Haiii", "aquamarine"],
    ["Test", "lightcoral"],
    ["Coba", "#7D7ABC"],
    ["Kamu", "#6457A6"],
    ["Cantik", "mustard"],
    ["Banget", "mustard"],
    ["Deh", "mustard"],
    ["Gila", "mustard"],

]