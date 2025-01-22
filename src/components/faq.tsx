
'use client'

import { Minus, Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
const faqs = [
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 2,
        question: "What's the best thing?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 3,
        question: "What's about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 4,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {

        id: 5,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
]

export default function Faq() {
    return (
        <div className="bg-transparent z-20 relative w-full">
            <div className="mx-auto max-w-full px-8 py-24 sm:py-32 lg:px-10 lg:py-32 relative">
                <div
                    className="absolute left-0 top-44 h-56 w-[90%] opacity-10 overflow-x-hidden bg-[#9560EB] bg-opacity-40 blur-[337.4px]"
                    style={{ transform: "rotate(-30deg)" }}
                />
                <div className="mx-auto max-w-4xl divide-y  divide-white/5">
                    <p className="mt-8 max-w-2xl mx-auto  font-geist text-center text-5xl font-normal tracking-tight text-gray-800 dark:text-gray-200">
                        Frequently Asked Questions.
                    </p>
                    <p className="mt-4 max-w-xl mx-auto pt-4 text-lg text-center tracking-tight text-black/60 dark:text-gray-400">
                        Design assets, icon teardowns, and a community of fellow icon
                        designers where you can ask questions.
                    </p>

                    <dl className="mt-10 space-y-6 divide-y divide-white/10">
                        {faqs.map((faq, indx) => (

                        <FaqEach key={indx} question={faq.question} answer={faq.answer} />


                        ))}
                    </dl>
                </div>
            </div >
        </div >
    )
}


const FaqEach = ({ answer, question }: { answer: string, question: string }) => {
    const [opened, setOpened] = useState(false)
    return (
        <>
            <div key={question} className="pt-6">

                <span className="cursor-pointer flex w-full items-start justify-between text-left text-black dark:text-white">
                    <span className="text-base relative cursor-pointer font-semibold leading-7" onClick={() => {
                        setOpened((prev) => !prev)
                    }}>{question}</span>
                    <span className="ml-6 flex h-7 items-center" onClick={() => setOpened((prev) => !prev)}>
                        {(opened) ? (
                            <Minus className="h-6 w-6" />
                        ) : (
                            <Plus className="h-6 w-6" />
                        )}
                    </span>
                </span>
                <AnimatePresence>
                    {opened && (

                        <motion.div
                            className='text-base leading-7 text-gray-600 dark:text-gray-300'
                            transition={{
                                ease: 'linear'
                            }}
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: '10px' }}
                            exit={{ opacity: 0, height: 0, marginTop: 0, transition: { duration: 0.15, ease: "linear" } }}

                        >
                            {answer}
                        </motion.div>
                    )}
                </AnimatePresence>


            </div>

        </>
    )
}