import pfp from '../imgs/pfp.png'
import brown1 from '../imgs/brown1.png'
import rome from '../imgs/Rome.png'





export function AboutPage() {

    return (
        <div className= 'flex flex-col items-center mx-[50px] md:mx-[110px] mb-[60px] space-y-10'>
            <div className= 'flex flex-col space-y-10 md:w-[680px] md:flex-row md:space-x-10 md:space-y-0 md:items-end'>
                <img src={pfp} className='h-[360px] object-contain'/>
                <div className= 'flex flex-col space-y-10'>
                    <div>
                        <h1 className= 'text-2xl font-chivo font-black mb-3'>
                            Hi, I'm Luke!
                        </h1>
                        <div>
                        <h1 className= 'font-sans text-2xl'>I'm a developer and designer studying
                        <span className= 'text-2xl font-chivo font-black'> Computer Science and Design Engineering @ Brown University</span>. 
                        </h1>
                        
                        </div>
                    </div>
                    <div className='space-y-3 font-sans'>
                        <div>
                            <h1 className='font-chivo text-base'>CURRENTLY LEARNING</h1>
                            <p classname='text-2xl'>Blender, How to Bake, and Mobility Exercises</p>
                        </div>
                        <div>
                            <h1 className= 'font-chivo text-base'>CURRENTLY READING</h1>
                            <h1 classname= 'text-2xl'>When We Cease to Understand the World by Benjamin Labatut</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='w-full '  >
                <div className= 'mb-4'>
                <h1 className= 'font-chivo font-bold text-base py-2 border-b-[1px] border-black mb-2'>
                @ SCHOOL
                </h1>
                </div>
                <div className= 'flex flex-col mb-10 space-y-10 items-center md:items-start md:flex-row md:space-x-10 md:space-y-0'>
                    <div className= 'w-full font-sans text-xl space-y-3'>
                        <p>Outside of class I'm...</p>
                        <p>
                            <span className= 'font-chivo font-black'>
                            the Outreach Team Lead and an Advertising and Branding Consultant for <span className='underline'><a href="https://www.brownentrepreneurship.com/" target="_blank">Brown Entrepreneurship Program</a></span>
                            </span>
                            , where my job is to grow the size and network of Brown’s entrepreneurship ecosystem by collaborating with alumni, executives, other schools, and more. 
                        </p>
                        <p>
                            <span className= 'font-chivo font-black'>
                            a developer and lead designer for <span className='underline'><a href="https://carta-beta.stanford.edu/" target="_blank">Full Stack at Brown</a></span>
                            </span>
                            , Brown’s web development organization.
                        </p>
                       
                        <p>
                            a member of 
                            <span className='font-chivo font-black underline ml-[5px]'><a href="https://www.brownmedicalentrepreneurshipsociety.org/" target="_blank">Brown Medical Entrepreneurship Society</a></span>, 
                            <span className='font-chivo font-black underline ml-[5px]'><a href="https://browninvestmentgroup.co/" target="_blank">Brown Investment Group</a></span>,
                            <span className='font-chivo font-black ml-[5px]'>Brown Club Lacrosse</span>, 
                            and 
                            <span className='font-chivo font-black ml-[5px]'>Brown Poker Club</span>.                        </p>
                    </div>
                    <div className= ''>
                        <img src={rome} className='max-h-[400px] items-center object-contain'/>
                    </div>
                </div>
                <div className='font-sans mb-10 flex flex-col space-y-10 items-center md:items-start md:flex-row md:space-x-10 md:space-y-0 md:justify-between'>
                    <div className='flex flex-col space-y-4 leading-6 text-[16px]'>
                        <div>
                            <h1 className='font-chivo font-bold text-base'>CURRENT COURSEWORK</h1>
                            <p classname='text-2xl'>CSCI 1430: Computer Vision</p>
                            <p classname='text-2xl'>CSCI 1300: User Interfaces and User Experience</p>
                            <p classname='text-2xl'>MATH 0180: Multivariable Calculus</p>
                            <p classname='text-2xl'>PHIL 1561: Ethics, Economics, and the Future</p>
                            <p classname='text-2xl'>VISA 0100: Studio Foundation</p>

                        </div>
                        <div>
                            <h1 className='font-chivo font-bold font text-base'>PAST COURSEWORK</h1>
                            <p classname='text-2xl'>CSCI 0200: Data Structures and Algorithms</p>
                            <p classname='text-2xl'>CSCI 0150: Object Oriented Programming</p>
                            <p classname='text-2xl'>MATH 0540: Honors Linear Algebra</p>
                            <p classname='text-2xl'>ENGN 0032: Engineering Design</p>                                
                            <p classname='text-2xl'>APMA 1650: Statistical Inference</p>
                            <p classname='text-2xl'>CHEM 0330: General Chemistry</p>
                            <p classname='text-2xl'>ECON 0110: Principles of Economics</p>
                            <p classname='text-2xl'>LITR 0710: Writers on Writing Seminar</p>
                            <p classname='text-2xl'>CHIN 450: Heritage Chinese Second Semester</p>
                            <p classname='text-2xl'>CHIN 350: Heritage Chinese First Semester</p>





                        </div>
                    </div>
                    <div className= ''>
                        <img src={brown1} className='max-h-[400px] items-center object-contain'/>
                    </div>
                </div> 
                <div className= ''>
                    <h1 className= 'mb-4 font-chivo text-base py-2 border-b-[1px] border-black'>
                    @ HOME
                    </h1>
                    <div className= 'flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-10 mb-10'>
                        <div className='space-y-3 font-sans'>
                            <div>
                                <h1 className='font-chivo text-base'>HOME</h1>
                                <p classname='text-2xl'>Saint Louis, Missouri</p>
                            </div>
                            <div>
                                <h1 className= 'font-chivo text-base'>HOBBIES</h1>
                                <h1 classname= 'text-2xl'>Any Sport, Cooking, Art</h1>
                            </div>
                        </div>
                        <div className= 'font-sans text-xl space-y-3'>
                        <p>I’m someone who always loves to learn and be challenged. Whether it's on the golf course or the basketball court or in the kitchen or studio, I find excitement in grappling with problems.
                        </p>
                        
                        <p>2024 Goals: Hit the fairway on my tee shots, stretch consistently, bake a cake, read and write more, and spend more time with friends and family.
                        </p>
                        

                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}