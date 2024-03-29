import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import { Link } from 'react-router-dom'
import HighlightText from '../component/core/Homepage/HighlightText'
import CTAButton from "../component/core/Homepage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../component/core/Homepage/CodeBlocks'
import TimeLineSection from '../component/core/Homepage/TimeLineSection'
import LearningLanguageSection from '../component/core/Homepage/LearningLangugeSection'
// import ReviewSlider from '../component/core/Common/ReviewSlider'
import Footer from '../component/common/Footer'
import InstructorSection from '../component/core/Homepage/InstructorSection'
import ExploreMore from '../component/core/Homepage/ExploreMore'
const Home = () => {
    return (
        <div>
            {/* {secction 1} */} 
            <div className='relative max-w-maxContent mx-auto flex flex-col w-11/12 items-center text-white justify-between'>
                <Link to={"/signup"}>
                    <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transistion-all duration-200hover:scale-95 w-fit'>
                        <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] translate-all duration-200 group-hover:bg-richblack-900 '>
                            <p>Become an Instructor </p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>
                <div className='text-center text-4xl font-semibold mt-7'>
                    Empower Your Future with
                    <HighlightText text={"coding skills"} />
                </div>
                <div className="mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
                    With our online coding courses, you can learn at your own pace, from
                    anywhere in the world, and get access to a wealth of resources,
                    including hands-on projects, quizzes, and personalized feedback from
                    instructors.
                </div>
                <div className='flex flex-row gap-7 mt-8'>
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>
                    <CTAButton active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAButton>
                </div>
                {/* video */}
                <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
                    <video
                        className="shadow-[20px_20px_rgba(255,255,255)]"
                        muted
                        loop
                        autoPlay
                    >
                        <source src={Banner} type='video/mp4' />
                    </video>
                </div>
                {/* {code section 1} */}
                <div>
                    <CodeBlocks
                        position={"lg:flex-row"}
                        heading={<div className='text-4xl font-semibold'>
                            Unlock Your
                            <HighlightText text={"coding courses"} />
                            with our online courses
                        </div>
                        }
                        subheading={
                            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        }
                        ctabtn1={{
                            btnText: "try it yourself",
                            linkto: "/signup",
                            active: true,
                        }}
                        ctabtn2={{
                            btnText: "learn more",
                            linkto: "/login",
                            active: false,
                        }}
                        codeColor={"text-yellow-25"}
                        codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                        backgroundGradient={<div className="codeblock1 absolute"></div>}
                    />
                </div>
                {/* {code section 2} */}
                <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

                <ExploreMore/>
            </div>

            {/* {secction 2} */}
            <div className='bg-pure-greys-5 text-richblack-700'>
                <div className='homepage_bg h-[310px'>
                    <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                        <div className='h-[150px]'>
                        </div>
                        <div className='flex flex-row gap-7 text-white'>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className='flex items-center gap-3'>
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>
                            </CTAButton>
                            <CTAButton active={false} linkto={"/signup"}>
                                <div>
                                    Learn More
                                </div>
                            </CTAButton>
                        </div>
                    </div>
                </div>
                <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
                    <div className='flex flex-row gap-5 mb-10 mt-[150px] ml-10'>
                        <div className='text-4xl font-semibold w-[45%]'>
                            Get the skill you need for a job
                            <HighlightText text={"Job that is in demand"} />
                        </div>
                        <div className='flex flex-col gap-10 w-[40%] items-start'>
                            <div className='text-[16px]'>
                                The Modern TechLearn is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                            </div>
                            <CTAButton active={true}>
                                <div>
                                    Learn More
                                </div>
                            </CTAButton>
                        </div>
                    </div>
                    <TimeLineSection />
                    <LearningLanguageSection />
                </div>


            </div>
            {/* {secction 3} */}
            <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
                {/* Become a instructor section */}
                <InstructorSection />

                {/* Reviws from Other Learner */}
                <h1 className="text-center text-4xl font-semibold mt-8">
                    Reviews from other learners
                </h1>
                {/* <ReviewSlider /> */}
            </div>

            {/* {Footer} */}
            <Footer />
        </div>
    )
}

export default Home