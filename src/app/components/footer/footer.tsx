import { motion } from "framer-motion"

export default function Footer() {

    const effect = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },

    }

    return (
        <>
            <div id="footer" className="text-center">
                <motion.p initial="hidden" animate="visible" variants={effect} transition={{ delay: 1, duration: 1.5 }} className="text-xs text-gray-700">development by <a href="https://www.linkedin.com/in/dantsc/" target="_blank" className="font-bold underline">dants.dev</a></motion.p>
                <motion.p initial="hidden" animate="visible" variants={effect} transition={{ delay: 1.6, duration: 1.5 }} className="text-xs text-gray-600 my-1">API<a href="https://www.linkedin.com/in/dantsc/" target="_blank" className="font-bold p-1">OpenWeather</a></motion.p>
            </div>
        </>
    )
}