import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"

const About = () => {
  return (
    <div className='border-b border-neutral-900  pt-0 pb-3'>

      <h1 className="my-20 text-center text-5xl font-bold pt-0">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:p-8">
        <div className="flex items-center justify-center">
          <img className="rounded-lg shadow-2xl" src={aboutImg} alt="about" />

        </div>
        </div>
        <div className="w-full lg:w-1/2">
        <div className="flex justify-center lg:justify-start">
          <p className="my-2 max-w-xl py-6 text-xl">{ABOUT_TEXT}</p>


        </div>

      </div>
      
    </div>

    </div>

  )
}

export default About
