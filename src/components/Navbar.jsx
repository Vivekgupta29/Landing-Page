import React from 'react';
import { motion } from "framer-motion";

function Navbar({ activeSection, setActiveSection }) {
    const menuItems = ["Home", "About", "Projects", "Blogs", "Contact"];
    return (
        <div className='z-[99] fixed top-5 left-[50%] -translate-x-[50%] bg-black bg-opacity-80 backdrop-blur-sm text-white text-lg px-6 py-2 rounded-full flex justify-center items-center font-matter cursor-pointer'>
            <div className='flex'>
                {menuItems.map((item, index) => (
                    <motion.div
                        className={`relative flex items-center px-8 py-2 hover:text-zinc-300 duration-500 ease-in-out transition-all 
                        ${activeSection === item.toLowerCase() ? "bg-slate-900 rounded-full backdrop-blur-lg" : ""}
                        `}
                        key={index}
                        onClick={() => setActiveSection(item.toLowerCase())}
                        layout
                    >
                        {activeSection === item.toLowerCase() && (
                            <motion.div
                                layoutId="highlight"
                                className="absolute inset-0 bg-slate-900 rounded-full z-[-1]"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        )}
                        {item}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
