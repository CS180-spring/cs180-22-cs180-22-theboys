import React from "react"
import '../Styles/CarouselStyles.css'


export default function Carousel({carouselContents})
{
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const carouselItems = [0,1,2,3,4,5,6,7,8,9].map((current, i) => {
        return (
            <div 
                className="carousel-item"
                key = {i}
                style= {{
                    transform: `translate(${-220 * currentIndex}px)`
                }}
            ></div>
        )
    })

    //Get the number of carousel items visible in the container (4 by default)
    const GetCarouselViewportCount = ()=> {
        return 4;
    }

    const ClampCarouselIndex = (index)=> {
        let carouselWidth = GetCarouselViewportCount();
        if(index > carouselItems.length - carouselWidth)
        {
            return carouselItems.length - carouselWidth;
        }
        if(index < 0)
        {
            return 0;
        }
        return index;
    }

    const IncrementCarousel = (index)=> {
        index  =ClampCarouselIndex(index);
        setCurrentIndex(index);
    }

    return(
        <div className="carousel">
            <img 
                src= {`${process.env.PUBLIC_URL}/Images/Left-Arrow-Circled-Icon.png`} 
                className= {currentIndex === 0 ? "carousel-arrow-inactive" : "carousel-arrow"}
                onClick={() => {IncrementCarousel(currentIndex - 1)}}
            />
            <div className="carousel-viewport">
                <div className="carousel-index-viewer">
                    <div className="title-text">{`${currentIndex} / ${carouselItems.length - GetCarouselViewportCount()}`}</div>
                </div>
                {carouselItems}
            </div>
            <img 
                src= {`${process.env.PUBLIC_URL}/Images/Right-Arrow-Circled-Icon.png`} 
                className= {currentIndex === carouselItems.length - GetCarouselViewportCount() ? "carousel-arrow-inactive" : "carousel-arrow"}
                onClick={() => {IncrementCarousel(currentIndex + 1)}}
            />
            
        </div>
    )




}