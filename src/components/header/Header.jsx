import { useContext } from "react";
import "./Header.css";
import{BiSolidCoffeeBean} from 'react-icons/bi';
import {CiCoffeeBean} from 'react-icons/ci';
import {} from "react-icons/fa"
import Slider from "../../utils/slider/Slider";
import { MyContext } from "../../context/AppContext";

const contentData = [
  {
    letter: "Ha",
    title: "q1",
    textq: "abebe beso bela",
  },
  {
    letter: "Le",
    title: "q2",
    textq: "chala ",
  },
  {
    letter: "Hameru Ha",
    title: "q3",
    textq: "yene tolo tolo bet",
  },
];

const Header = () => {

  const { activeSlideIndex } = useContext(MyContext);

  const handleClass = (activeSlideIndex) => {
    const { letter, textq } = contentData[activeSlideIndex] || {};

    if (letter && textq) {
      return (
        <div>
          <h1 className="text-[40px] text-white font-Montserrat font[50] leading-[40px]">
           <br />
            <span className={`letter ${letter}`} data-letter={letter}>
              {letter}
            </span>
            </h1>
            <div className="text-[30px] text-white font-Montserrat font[50]">
            <p className={`textq ${textq}`} data-textq={textq} >
              {textq}
            </p>
            </div>
        
        </div>
      );
    }

    return null;
  };

  const classChange = handleClass(activeSlideIndex);

  return (
    <div className="flex items-center mt-[40px]">
        {/*text contet */}
      <div className="w-1/2 pl-[140px]">
        
        {classChange}
        
        <div className="mt-[100px] flex gap-12">
            

                 <BiSolidCoffeeBean className="text-brown text-[40px] "/>
                
                
        </div>
  </div>



      <div className="w-1/2 flex flex-col items-end justify-end relative">

        <div>
          <Slider/>
        </div>

        <div>
          Socila icons here
        </div>

      </div>
    </div>
  );
};

export default Header;
