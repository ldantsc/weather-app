import { SyncLoader } from "react-spinners";
import { motion } from "framer-motion";

export default function Loader() {
    return (
        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1}} transition={{ delay: 0.5, duration: 2 }} className="flex justify-center">
            <SyncLoader size={8} color="#575757"/>
        </motion.div>
    )
}