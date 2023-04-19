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
            if(currentIndex ===1){
                setCurrentIndex(0)
            }else{
                setCurrentIndex(currentIndex +1)

            }
          
        }, 4000)
        return ()=> clearInterval(interval)
      
    })

    return(
        <section className=" h-screen ">
            <div className="w-full pt-20 flex justify-center">
                <p className="flex text-5xl transition-all duration-700 mb-4 shadow-sm hover:scale-125 border-4 bg-[#0e0e58] border-[#f0f0ff] rounded-lg p-2 text-2xl sm:text-6xl text-white ">Projects</p>
            
            </div>
        <section id="Projects" className=" flex flex-row aling-center w-full">
        
        <div className={` h-[600px] w-full m-auto   group `}>
           
            <div style={{backgroundImage: `url(${data[currentIndex].url})`}} className={"h-[500px] rounded-2x bg-center bg-cover duration-500"}></div>
           { /*Left Arrow*/}
           <div className="hidden relative group-hover:block w-12 bottom-60 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30}/></div>
           { /*Right Arrow*/}
           <div className="hidden relative group-hover:block w-12 bottom-72 left-[97%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div> 
            <div className={`flex z-20 relative justify-center py-2 bottom-36`}>
               
            <BsArrowUpRightSquare onClick={()=>{window.open(`${data[currentIndex].link}`)}}
             className=" z-10 relative hidden group-hover:block  bottom-12 left-[600px] text-6xl right-28 text-sky-400 active:bg-slate-300"/>
                    
              
                {data.map((slide, slideindex)=>(
                    <div key={slideindex} onClick={() => goToSlide(slideindex)} className="text-2xl flex cursor-pointer">
                        <RxDotFilled className="hidden group-hover:block text-sky-400 hover:scale-150"/>
                    
                    </div>
))}
            </div>
        
        </div>
</section>
      
<div className="box-border w-full h-20 sm:h-48 flex justify-between">
                <img className="h-50 transition-all duration-500 hover:scale-125" src={cloud} alt="cloud" />
                <img className="h-50 transition-all duration-500 hover:scale-125"src={cloud} alt="cloud" />
                <img className="h-50 transition-all duration-500 hover:scale-125" src={cloud} alt="cloud" />
                <img className="h-50 transition-all duration-500 hover:scale-125" src={cloud} alt="cloud" />
                <img className="h-50 transition-all duration-500 hover:scale-125" src={cloud} alt="cloud" />
            </div>
        </section>


    
    )
}
export default SectionProject;