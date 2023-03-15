import React, {useState, useEffect} from "react";
import { data } from "./SectionProjectData"
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"

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
            if(currentIndex ===5){
                setCurrentIndex(0)
            }else{
                setCurrentIndex(currentIndex +1)

            }
          
        }, 4000)
        return ()=> clearInterval(interval)
      
    })

    return(
        <section className="h-screen bg-red-200 flex aling-center w-full">
        <div className={` h-[800px] w-full m-auto py-6 pt-40  group bg-red-300`}>
            <div style={{backgroundImage: `url(${data[currentIndex].url})`}} className={"h-[500px] rounded-2x bg-center bg-cover duration-500"}></div>
           { /*Left Arrow*/}
           <div className="hidden relative group-hover:block w-12 bottom-60 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30}/></div>
           { /*Right Arrow*/}
           <div className="hidden relative group-hover:block w-12 bottom-72 left-[97%] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div> 
            <div className={`flex z-20 relative justify-center py-2 bottom-36`}>
                {data.map((slide, slideindex)=>(
                    <div key={slideindex} onClick={() => goToSlide(slideindex)} className="text-2xl flex cursor-pointer">
                        <RxDotFilled className="hidden group-hover:block text-purple-500 hover:scale-150"/>
                    </div>

                ))}
            </div>
        
        </div>
        </section>


    
    )
}
export default SectionProject;