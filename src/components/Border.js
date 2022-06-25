
const Border = ({title, num}) => {

    return (
        <div className="flex items-center justify-center py-10 md:py-14 lg:py-16 mt-12">
    <div className="block w-1/2 h-px bg-gray-300 dark:bg-gray-800" />
    <h1 className="whitespace-nowrap mx-3 uppercase font-bold text-xl md:text-2xl xl:text-3xl">
      <span className="text-main-color font-bold mr-3">{num}</span>
      <strong>{title}</strong>
    </h1>
    <div className="block w-1/2 h-px bg-gray-300 dark:bg-gray-800" />
  </div>
    )
};

export default Border;