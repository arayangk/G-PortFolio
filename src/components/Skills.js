
const Skills = () =>{

    return(
        <section>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
    <div>
      <h2 className="text-main-color font-bold mb-5"> Hello, Dear Readers </h2>
      <p
        data-aos="fade-left"
        className="leading-relaxed mb-4 last:mb-0 text-gray-500 dark:text-gray-400 aos-init aos-animate"
      >
        Welcome to my mini Portfolio. 
      </p>
      <p
        data-aos="fade-left"
        className="leading-relaxed mb-4 last:mb-0 text-gray-500 dark:text-gray-400 aos-init aos-animate"
      >
        Programming and Coding have been my passion since the days I started working with computers/mobiles but I found myself into web design/development since 2020. I enjoy creating beautifully designed, intuitive and functional websites.
      </p>
    </div>
    <div className="relative">
      
      <h2 className="text-main-color font-bold mb-5"> My Skills </h2>
      <ul className="mt-5 grid md:grid-cols-2 gap-8">
        <li data-aos="fade-right" className="aos-init aos-animate">
          <h3 className="capitalize flex">
            <span className="text-sm font-bold">Java Script</span>
            <span className="ml-auto text-sm font-light">95%</span>
          </h3>
          <div className="h-1 mt-2 bg-gray-500 dark:bg-gray-800 relative">
            <div
              className="h-1 bg-main-color absolute"
              style={{ width: "95%" }}
            />
          </div>
        </li>
        <li data-aos="fade-right" className="aos-init aos-animate">
          <h3 className="capitalize flex">
            <span className="text-sm font-bold">React</span>
            <span className="ml-auto text-sm font-light">80%</span>
          </h3>
          <div className="h-1 mt-2 bg-gray-500 dark:bg-gray-800 relative">
            <div
              className="h-1 bg-main-color absolute"
              style={{ width: "80%" }}
            />
          </div>
        </li>
        <li data-aos="fade-right" className="aos-init aos-animate">
          <h3 className="capitalize flex">
            <span className="text-sm font-bold">Express</span>
            <span className="ml-auto text-sm font-light">75%</span>
          </h3>
          <div className="h-1 mt-2 bg-gray-500 dark:bg-gray-800 relative">
            <div
              className="h-1 bg-main-color absolute"
              style={{ width: "75%" }}
            />
          </div>
        </li>
        <li data-aos="fade-right" className="aos-init aos-animate">
          <h3 className="capitalize flex">
            <span className="text-sm font-bold">Mongo DB</span>
            <span className="ml-auto text-sm font-light">85%</span>
          </h3>
          <div className="h-1 mt-2 bg-gray-500 dark:bg-gray-800 relative">
            <div
              className="h-1 bg-main-color absolute"
              style={{ width: "85%" }}
            />
          </div>
        </li>
        <li data-aos="fade-right" className="aos-init aos-animate">
          <h3 className="capitalize flex">
            <span className="text-sm font-bold">Tailwind</span>
            <span className="ml-auto text-sm font-light">70%</span>
          </h3>
          <div className="h-1 mt-2 bg-gray-500 dark:bg-gray-800 relative">
            <div
              className="h-1 bg-main-color absolute"
              style={{ width: "70%" }}
            />
          </div>
        </li>
        <li data-aos="fade-right" className="aos-init aos-animate">
          <h3 className="capitalize flex">
            <span className="text-sm font-bold">Git</span>
            <span className="ml-auto text-sm font-light">90%</span>
          </h3>
          <div className="h-1 mt-2 bg-gray-500 dark:bg-gray-800 relative">
            <div
              className="h-1 bg-main-color absolute"
              style={{ width: "90%" }}
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>

    )
};

export default Skills;