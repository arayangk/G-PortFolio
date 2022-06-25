
const Footer = () => {

    return(
        <section id="contact" className="mt-20 py-10 md:py-14 lg:py-16">
  <div className="mb-8">
    <img
      className="mx-auto"
      src="https://img.icons8.com/fluency-systems-regular/48/000000/circled-g.png"
      alt="Gias Sk Logo"
    />
    <h1 className="text-center mt-5 leading-relaxed md:w-3/4 lg:w-1/2 mx-auto text-gray-600 dark:text-gray-400">
      {" "}
      Connect me on......{" "}
    </h1>
  </div>
  <ul className="flex mt-5 w-max mx-auto">
    <li className="group w-9 h-9 text-sm border border-main-color rounded-full center-element mr-3 transition-all hover:bg-main-color">
      <a
        aria-label="Send Mail"
        target='_blank'
        rel="noreferrer"
        href="mailto:giassk2012@gmail.com"
        className="text-main-color group-hover:text-white group-hover:dark:text-gray-800"
      >
        <i className="far fa-envelope" />
      </a>
    </li>
    <li className="group w-9 h-9 text-sm border border-main-color rounded-full center-element mr-3 last:mr-0 transition-all hover:bg-main-color">
      <a
        className="text-main-color group-hover:text-white group-hover:dark:text-gray-800"
        href="https://facebook.com/gias.sk.5"
        target='_blank'
        rel="noreferrer"
        aria-label="facebook-f logo"
      >
        <i className="fab fa-facebook-f" />
      </a>
    </li>
    <li className="group w-9 h-9 text-sm border border-main-color rounded-full center-element mr-3 last:mr-0 transition-all hover:bg-main-color">
      <a
        className="text-main-color group-hover:text-white group-hover:dark:text-gray-800"
        href="https://twitter.com/giassk009"
        target='_blank'
        rel="noreferrer"
        aria-label="twitter logo"
      >
        <i className="fab fa-twitter" />
      </a>
    </li>
    <li className="group w-9 h-9 text-sm border border-main-color rounded-full center-element mr-3 last:mr-0 transition-all hover:bg-main-color">
      <a
        className="text-main-color group-hover:text-white group-hover:dark:text-gray-800"
        href="https://instagram.com/giassk009"
        target='_blank'
        rel="noreferrer"
        aria-label="instagram logo"
      >
        <i className="fab fa-instagram" />
      </a>
    </li>
    <li className="group w-9 h-9 text-sm border border-main-color rounded-full center-element mr-3 last:mr-0 transition-all hover:bg-main-color">
      <a
        className="text-main-color group-hover:text-white group-hover:dark:text-gray-800"
        href="https://www.linkedin.com/in/giasuddin-sk-09b38a17b"
        target='_blank'
        rel="noreferrer"
        aria-label="linkedin-in logo"
      >
        <i className="fab fa-linkedin-in" />
      </a>
    </li>
  </ul>
</section>

    )
};

export default Footer;