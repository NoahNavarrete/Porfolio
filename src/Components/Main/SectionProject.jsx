import {useState, useEffect} from "react";
import { data } from "./SectionProjectData"
import {BsChevronCompactLeft, BsChevronCompactRight, BsArrowUpRightSquare} from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"
import cloud from "../../assets/cloud.png"


const SectionProject = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? data.length -1 : currentIndex -1;
        setCurrentIndex(newIndex);

    }
    const nextSlide = () =>{
        const isLastSlide = currentIndex === data.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex)

    }
    const goToSlide = (slideindex) => {
        setCurrentIndex(slideindex)
    }
    useEffect(() => {
        const interval = setTimeout(()=>{
            if(currentIndex === data.length -1){
                setCurrentIndex(0)
            }else{
                setCurrentIndex(currentIndex +1)

            }
          
        }, 9000)
        return ()=> clearInterval(interval)
      
    })

    return(
        <section className=" h-auto box-border overflow-hidden">
            <div className="w-full  pt-10 flex justify-center">
                <p className="flex transition-all duration-700 mb-4 shadow-sm hover:scale-125 bg-sky-600/90 rounded-lg p-2 text-2xl sm:text-6xl text-white ">Projects</p>
            
            </div>
        <section id="Projects" className=" flex flex-col  aling-center w-full overflow-hidden">
        
        <div className=" group h-[218px]  sm:h-[430px] md:h-[550px] lg:h-[790px] overflow-hidden  ">
            <video src={data[currentIndex].url} autoPlay loop muted className="relative" />
           
           { /*Left Arrow*/}
           <div className="hidden relative group-hover:block w-12 bottom-32 sm:bottom-[240px] lg:bottom-[343px] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30}/></div>
           { /*Right Arrow*/}
           <div className="hidden relative group-hover:block w-12 bottom-[170px] sm:bottom-[300px]  lg:bottom-[398px] left-[90%] sm:left-[97%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div> 
            <div className={` flex  relative justify-center bottom-40 `}>
               
            <BsArrowUpRightSquare onClick={()=>{window.open(`${data[currentIndex].link}`)}}
             className=" z-10 hidden relative cursor-pointer group-hover:block sm:bottom-8 left-[210px] text-6xl right-28 bg-sky-200/20 text-sky-200 active:bg-slate-300"/>
                    
              
                {data.map((slide, slideindex)=>(
                    <div key={slideindex} onClick={() => goToSlide(slideindex)} className="text-2xl flex cursor-pointer">
                        <RxDotFilled className="hidden group-hover:block text-sky-200 hover:scale-150"/>
                    
                    </div>
))}
            </div>
        
        </div>
</section>
      
<div className="box-border sm:mb-4 mb-2 mt-4 flex-wrap w-full max-h-20 sm:h-48 flex justify-between">
                <img className=" max-h-10 sm:max-h-20 transition-all duration-500 hover:scale-125" src={cloud} alt="" />
                <img className=" max-h-10 sm:max-h-20 transition-all duration-500 hover:scale-125"src={cloud} alt="" />
                <img className=" max-h-10 sm:max-h-20 transition-all duration-500 hover:scale-125" src={cloud} alt="" />
                <img className=" max-h-10 sm:max-h-20 transition-all duration-500 hover:scale-125" src={cloud} alt="" />
                <img className=" max-h-10 sm:max-h-20 transition-all duration-500 hover:scale-125" src={cloud} alt="" />
            </div>
            
        </section>


    
    )
}
export default SectionProject;