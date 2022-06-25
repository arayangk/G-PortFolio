
import { useState } from 'react';
import Border from './components/Border';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
    class={`${
      darkMode && "dark"
    }`}
  >
    <div className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-200 w-[100vw] " data-aos-easing="ease" data-aos-duration="400" data-aos-delay="500" >
    <div id="app" className="overflow-x-hidden" data-v-app>


      
      <Header darkmode={darkMode} setdarkmode ={setDarkMode}/>
      <main className="container mx-auto px-5 md:px-9 lg:px-16 xl:px-36 2xl:px-52">
      <IntroSection/>
      <div id="about">
      <Border title={'About Me'} num={'01.'}/></div>
      <Skills/>
      <div id="services">
      <Border title={'Services'} num={'02.'}/></div>
          <section className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 z-20">
            <Services logo = {'fa-gem'} service = {'User Interface'} text={'User friendly UI using Custom Css & Tailwind Css'}/>
            <Services logo = {'fa-code'} service = {'Web developemnt'} text={'Full Stack Web Development, especially using MERN'}/>
            <Services logo = {'fa-mobile'} service = {'App developemnt'} text={'Cross Platform App Development with React Native'}/>
          </div>
          </section>

      {/* <Border title={'Experiences'} num={'03.'}/> */}
      <Projects/>

      <Footer/>
      
      </main>
      <Footer2/>
      </div></div></div>
      
  );
}

export default App;
