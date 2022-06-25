import {gnews,gmoviespage,gnotes} from '../img'

const Projects = () =>{

    return(
        <section id="projects">
  <div className="flex items-center justify-center py-10 md:py-14 lg:py-16 mt-12">
    <div className="block w-1/2 h-px bg-gray-300 dark:bg-gray-800" />
    <h1 className="whitespace-nowrap mx-3 uppercase font-bold text-xl md:text-2xl xl:text-3xl">
      <span className="text-main-color font-bold mr-3">03.</span>
      <strong>Projects</strong>
    </h1>
    <div className="block w-1/2 h-px bg-gray-300 dark:bg-gray-800" />
  </div>
  <div className="xl:grid gap-10 2xl:grid-cols-3">
    <article
      data-aos="fade-up"
      className="mb-10 md:mb-10 xl:mb-16 2xl:mb-5 last:mb-0 aos-init aos-animate"
    >
      <figure className="grid md:grid-cols-2 2xl:grid-cols-1 md:gap-4 lg:gap-7">
        <div className="relative">
          <img
            className="w-full rounded-xl"
            src={gnews}
            alt="Daily News React App"
            loading="lazy"
          />
          <div className="absolute top-1 left-1 bg-white px-2 rounded-full">
            <a
              className="text-gray-800 text-xs first:mr-4"
              href="https://github.com/arayangk/G-News"
              aria-label="Code source"
              target='_blank'
              rel="noreferrer"
            >
              <i className="fa fa-code" />
            </a>
            <a
              className="text-gray-800 text-xs first:mr-4"
              href="https://g-news.vercel.app/"
              target='_blank'
              rel="noreferrer"
              aria-label="Demo link"
            >
              <i className="fa fa-external-link-alt" />
            </a>
          </div>
        </div>
        <figcaption className="mt-3 md:mt-0 z-10">
          <h2 className="text-2xl xl:text-4xl 2xl:text-2xl font-bold mb-3 xl:mb-6 2xl:mb-3">
            Daily News React App
          </h2>
          <div className="rounded-lg mb-3 md:bg-white dark:md:bg-gray-800 dark:md:bg-opacity-60 md:p-5 dark:shadow-2xl">
            <p className="leading-relaxed text-left text-gray-500 dark:text-gray-400 text-sm xl:text-base">
              It's an Indian Daily news React App, Used Tailwind Css to design this also added Dark & Light Theme. & Used a news api Provided By "Sumit Kolhe".
            </p>
          </div>
          <ul className="flex mt-5">
            <li className="text-xs lg:text-base text-main-color rounded-full mr-7 last:mr-0">
              react
            </li>
            <li className="text-xs lg:text-base text-main-color rounded-full mr-7 last:mr-0">
            tailwind
            </li>
            <li className="text-xs lg:text-base text-main-color rounded-full mr-7 last:mr-0">
              news_api
            </li>
            
          </ul>
        </figcaption>
      </figure>
    </article>
    <article
      data-aos="fade-up"
      className="mb-10 md:mb-10 xl:mb-16 2xl:mb-5 last:mb-0 aos-init aos-animate"
    >
      <figure className="grid md:grid-cols-2 2xl:grid-cols-1 md:gap-4 lg:gap-7">
        <div className="relative">
          <img
            className="w-full rounded-xl"
            src={gmoviespage}
            alt="Movies Discover React App"
            loading="lazy"
          />
          <div className="absolute top-1 left-1 bg-white px-2 rounded-full">
            <a
              className="text-gray-800 text-xs first:mr-4"
              href="https://github.com/arayangk/g-movies"
              target='_blank'
              rel="noreferrer"
              aria-label="Code source"
            >
              <i className="fa fa-code" />
            </a>
            <a
              className="text-gray-800 text-xs first:mr-4"
              href="https://g-moviez.vercel.app/"
              target='_blank'
              rel="noreferrer"
              aria-label="Demo link"
            >
              <i className="fa fa-external-link-alt" />
            </a>
          </div>
        </div>
        <figcaption className="mt-3 md:mt-0 z-10">
          <h2 className="text-2xl xl:text-4xl 2xl:text-2xl font-bold mb-3 xl:mb-6 2xl:mb-3">
            Movies Discover React App
          </h2>
          <div className="rounded-lg mb-3 md:bg-white dark:md:bg-gray-800 dark:md:bg-opacity-60 md:p-5 dark:shadow-2xl">
            <p className="leading-relaxed text-left text-gray-500 dark:text-gray-400 text-sm xl:text-base">
              Its a Movies discovery site like IMDB, I have added many functionality like search any movie, dark-light mode, by genres,movies by cast name, by genre name etc..
            </p>
          </div>
          <ul className="flex mt-5">
            <li className="text-xs lg:text-base text-main-color rounded-full mr-7 last:mr-0">
              react
            </li>
            <li className="text-xs lg:text-base text-main-color rounded-full mr-7 last:mr-0">
              css
            </li>
            <li className="text-xs lg:text-base text-main-color rounded-full mr-7 last:mr-0">
              tmdb_api
            </li>
           
          </ul>
        </figcaption>
      </figure>
    </article>
    <article
      data-aos="fade-up"
      className="mb-10 md:mb-10 xl:mb-16 2xl:mb-5 last:mb-0 aos-init aos-animate"
    >
      <figure className="grid md:grid-cols-2 2xl:grid-cols-1 md:gap-4 lg:gap-7">
        <div className="relative">
          <img
            className="w-full rounded-xl"
            src={gnotes}
            alt="Simple Note MERN App"
            loading="lazy"
          />
          <div className="absolute top-1 left-1 bg-white px-2 rounded-full">
            <a
              className="text-gray-800 text-xs first:mr-4"
              href="https://github.com/arayangk/G-Notes"
              target='_blank'
              rel="noreferrer"
              aria-label="Code source"
            >
              <i className="fa fa-code" />
            </a>
            <a
              className="text-gray-800 text-xs first:mr-4"
              href="https://gs-notes.netlify.app/"
              target='_blank'
              rel="noreferrer"
              aria-label="Demo link"
            >
              <i className="fa fa-external-link-alt" />
            </a>
          </div>
        </div>
        <figcaption className="mt-3 md:mt-0 z-10">
          <h2 className="text-2xl xl:text-4xl 2xl:text-2xl font-bold mb-3 xl:mb-6 2xl:mb-3">
            Simple Note MERN App
          </h2>
          <div className="rounded-lg mb-3 md:bg-white dark:md:bg-gray-800 dark:md:bg-opacity-60 md:p-5 dark:shadow-2xl">
            <p className="leading-relaxed text-left text-gray-500 dark:text-gray-400 text-sm xl:text-base">
            It's a Simple Note MERN App With JWT User Authentication, User can signup & login to their account with jwt token based Authentication, and can add, view, delete, edit their notes,
            </p>
          </div>
          <ul className="flex mt-5">
            <li className="text-xs lg:text-base text-main-color rounded-full mr-7 last:mr-0">
              mern
            </li>
            <li className="text-xs lg:text-base text-main-color rounded-full mr-7 last:mr-0">
              bootstrap
            </li>
            <li className="text-xs lg:text-base text-main-color rounded-full mr-7 last:mr-0">
              express
            </li>
            <li className="text-xs lg:text-base text-main-color rounded-full mr-7 last:mr-0">
              react
            </li>
          </ul>
        </figcaption>
      </figure>
    </article>
    
  </div>
  <a
    className="text-sm border border-main-color hover:text-gray-800 hover:dark:text-gray-200 w-max block mx-auto mt-16 xl:mt-10 py-2 px-3 text-main-color rounded-full"
    role="button"
    href="https://github.com/arayangk"
    target='_blank'
    rel="noreferrer"
  >
    <i className="fab fa-github mr-2" />
    <span>See more on Github</span>
  </a>
</section>

    )
};

export default Projects;