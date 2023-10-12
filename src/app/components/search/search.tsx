import { motion } from "framer-motion"
import './styles.css'

export default function Search(props: any) {

    return (
        <div id="header" className="flex justify-center items-center h-full text-center">
            <motion.div initial={{ width: 0 }} animate={{ width: 560 }} transition={{ delay: 1, duration: 1 }} id="container-search" className="flex justify-center items-center scale-x-65 scale-y-70 sm:scale-75 md:scale-90 lg:scale-100 md:scale transform-gpu">
                <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, ease: "linear" }} id='image-search' src="/search.svg" alt="" />
                <motion.input initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, ease: "linear" }} id="input-search" className="search-input" type="text" value={props.value} onChange={props.event} placeholder="Type your city here..."></motion.input>
            </motion.div>
        </div>
    )
}
