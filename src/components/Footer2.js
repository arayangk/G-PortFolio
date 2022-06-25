
const Footer2 = () => {

    return(
        <footer className="flex justify-center relative py-5 bg-white dark:bg-gray-800 bg-opacity-70">
  <a
    className="center-element rounded-full mx-auto absolute -top-5 w-10 h-10 border-2 bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-900"
    role="button"
    href="#intro"
    aria-label="Go to top"
  >
    <i className="fa fa-arrow-up" />
  </a>
  <div>
    <p className="text-gray-500 dark:text-gray-400 text-sm mt-5">
      <strong>Gias Sk</strong> © 2022 {" "} Made with React & Tailwind
    </p>
  </div>
</footer>

    )
};

export default Footer2;