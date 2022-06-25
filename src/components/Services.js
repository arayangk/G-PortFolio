
const Services = ({logo, service,text}) =>{

    return(
        <>
  
  
  
    <div
      className="flex bg-white dark:bg-gray-800 dark:bg-opacity-70 rounded-lg 2xl:rounded-xl p-5 aos-init aos-animate"
      data-aos="fade-up"
    >
      <i
        className={`fa ${logo}
            text-xl lg:text-2xl text-main-color lg:mb-2`}
      />
      <div className="ml-4">
        <h2
          data-aos="fade-up"
          className="mb-4 font-bold xl:text-xl aos-init aos-animate"
        >
          {service}
        </h2>
        <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 dark:text-opacity-80">
          {text}
        </p>
      </div>
    </div>
    
    
  
    </>
    )
};

export default Services;