import {gsk,javascript,nodejs,mongodb,git, tailwind, react, resume} from '../img/index'

const IntroSection = () =>{
  

    return(
        <section
  id="intro"
  className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center pt-24 xl:pt-32 2xl:pt-44"
>
  <div className="order-2 md:order-1 mt-10 md:mt-0">
    <div className="relative">
      
      <span
        data-aos="fade-up"
        className="text-main-color font-semibold text-lg"
      >
        {" "}
        Hi 👋, my name is{" "}
      </span>
      <h1
        data-aos="fade-up"
        data-aos-delay={50}
        className="text-3xl lg:text-4xl xl:text-5xl font-bold"
      >
        Gias Sk
      </h1>
      <div
        data-aos="fade-up"
        data-aos-delay={150}
        className="w-24 h-1 bg-main-color bg-opacity-70 my-8"
      >
        <div className="w-10 h-1 bg-main-color" />
      </div>
      <p
        data-aos="fade-up"
        data-aos-delay={200}
        className="text-gray-400 xl:w-3/4 2xl:text-xl leading-relaxed"
      >
        I’m a Full Stack Web developer, Usually with MERN Stack. "I code simple things and I love what i do..."
      </p>
    </div>
    <div
      className="mt-12 flex"
      data-aos="fade-up"
      data-aos-delay={250}
    >
      <a
        download
        role="button"
        aria-label="Download cv"
        href={resume}
        className="flex items-center px-3 text-sm bg-main-color hover:bg-opacity-80 text-white dark:text-gray-800 rounded-md"
      >
        <i className="fas fa-download mr-2" />
        <span>Download Cv</span>
      </a>
      <a
        role="button"
        target="_blank"
        rel="noreferrer"
        aria-label="github account"
        href="https://github.com/arayangk"
        className="center-element ml-2 w-9 h-9 rounded-md bg-white dark:bg-gray-700 dark:bg-opacity-50"
      >
        <i className="fab fa-github text-lg" />
      </a>
      {/* <a
        role="button"
        target="_blank"
        aria-label="codepen account"
        href="https://codepen.com/username"
        className="center-element ml-2 w-9 h-9 rounded-md bg-white dark:bg-gray-700 dark:bg-opacity-50"
      >
        <i className="fab fa-codepen text-lg" />
      </a> */}
    </div>
  </div>
  <div
    className="relative rounded-full border-gray-300 order-1 dark:border-gray-700 dark:border-opacity-50 border p-4 lg:p-7 xl:p-9"
    data-v-5e096964
  >
    <div
      className="relative rounded-full border-gray-300 dark:border-gray-700 dark:border-opacity-50 border p-4 lg:p-7 xl:p-9"
      data-v-5e096964
    >
      <img
        className="w-full rounded-full"
        alt="Gias Sk"
        src={gsk}
        data-aos="fade-up"
        data-aos-delay={150}
        loading="lazy"
        data-v-5e096964
      />
    </div>
    <ul
      className="absolute top-0 left-0 w-full h-full rounded-full"
      data-v-5e096964
    >
      <li
        className="skill flex items-center justify-center absolute bg-white bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-40 backdrop-filter backdrop-blur rounded-full shadow-2xl"
        title="Node JS"
        data-aos="fade-up"
        data-aos-delay={50}
        data-v-5e096964
      >
        <img
          src={nodejs}
          alt="Node logo"
          loading="lazy"
          data-v-5e096964
        />
      </li>
      <li
        className="skill flex items-center justify-center absolute bg-white bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-40 backdrop-filter backdrop-blur rounded-full shadow-2xl"
        title="MongoDB"
        data-aos="fade-up"
        data-aos-delay={50}
        data-v-5e096964
      >
        <img
          src={mongodb}
          alt="Mongodb logo"
          loading="lazy"
          data-v-5e096964
        />
      </li>
      <li
        className="skill flex items-center justify-center absolute bg-white bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-40 backdrop-filter backdrop-blur rounded-full shadow-2xl"
        title="react"
        data-aos="fade-up"
        data-aos-delay={100}
        data-v-5e096964
      >
        <img
          src={react}
          alt="react logo"
          loading="lazy"
          data-v-5e096964
        />
      </li>
      <li
        className="skill flex items-center justify-center absolute bg-white bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-40 backdrop-filter backdrop-blur rounded-full shadow-2xl"
        title="Java Script"
        data-aos="fade-up"
        data-aos-delay={150}
        data-v-5e096964
      >
        <img
          src={javascript}
          alt="JS logo"
          
          loading="lazy"
          data-v-5e096964
        />
      </li>
      <li
        className="skill flex items-center justify-center absolute bg-white bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-40 backdrop-filter backdrop-blur rounded-full shadow-2xl"
        title="Git"
        data-aos="fade-up"
        data-aos-delay={100}
        data-v-5e096964
      >
        <img
          src={git}
          alt="Git logo"
          loading="lazy"
          data-v-5e096964
        />
      </li>
      <li
        className="skill flex items-center justify-center absolute bg-white bg-opacity-70 dark:bg-gray-700 dark:bg-opacity-40 backdrop-filter backdrop-blur rounded-full shadow-2xl"
        title="tailwind"
        data-aos="fade-up"
        data-aos-delay={150}
        data-v-5e096964
      >
        <img
          src={tailwind}
          alt="tailwind logo"
          loading="lazy"
          data-v-5e096964
        />
      </li>
    </ul>
  </div>
</section>

    )
};

export default IntroSection;