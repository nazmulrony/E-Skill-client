

import React from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import { AiFillCaretDown, } from 'react-icons/ai';


const FAQ = () => {
    return (
        <div className='min-h-[90vh] px-1 py-4 md:px-28 md:py-16 bg-secondary'>
            <h2 className='text-center text-3xl text-primary font-bold md:text-5xl mb-10'>Frequently Asked Questions</h2>
            <div>
                <Accordion>
                    <AccordionItem className='my-4'>
                        <AccordionItemHeading>
                            <AccordionItemButton className='bg-primary p-4 text-light flex text-xl justify-between rounded'>
                                <p>Who should take an Online Course?</p>
                                <AiFillCaretDown />
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className='px-4 text-gray-300 mt-1'>
                                Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. With online courses, you can-
                                <ul>
                                    <li>- Advance your skill-set or begin a career change.</li>
                                    <li>- Take the next step in your formal education.</li>
                                    <li>- Ease the transition before entering a full-time academic program.</li>
                                    <li>- Enjoy learning a new topic.</li>
                                </ul>
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem className='my-4'>
                        <AccordionItemHeading>
                            <AccordionItemButton className='bg-primary p-4 text-light flex text-xl justify-between rounded'>
                                <p>I am a high school student, can I join?</p>
                                <AiFillCaretDown />
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className='px-4 text-gray-300 mt-1'>
                                Courses are open to all students 18 years or older. If you are under 18 years old, please contact us (e-skills@edu.com) to discuss further.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className='my-4'>
                        <AccordionItemHeading>
                            <AccordionItemButton className='bg-primary p-4 text-light flex text-xl justify-between rounded'>
                                <p>Can I take more than one course at a time?</p>
                                <AiFillCaretDown />
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className='px-4 text-gray-300 mt-1'>
                                If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem className='my-4'>
                        <AccordionItemHeading>
                            <AccordionItemButton className='bg-primary p-4 text-light flex text-xl justify-between rounded'>
                                <p>What should I do if I need to start the course late?</p>
                                <AiFillCaretDown />
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className='px-4 text-gray-300 mt-1'>
                                It is recommended that you begin your course promptly. If you do need to start the course a few days late, contact your instructor as soon as possible after the course has opened to discuss your options. Registration closes on the Friday after the course begins.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>


                </Accordion>
            </div>


        </div>
    );
};

export default FAQ;