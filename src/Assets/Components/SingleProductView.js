import React from "react";
import "../Styles/textStyles.css"
import "../Styles/SingleProductPage.css"
import Select from "./Select";
import Carousel from "./Carousel";
import CarouselProductCard from "./CarouselProductCard";
export default function SingleProductView({product}){

    const files = [
        'QmabwwMDTAvKNvcapqWgnRDkMqXuMSkpK5Q8oopMhT7wAU.png',
        'QmadJd1GgsSgXn7RtrcL8FePionDyf4eQEsREcvdqh6eQe.png',
        'QmadJMqL3WWr7SdtXzNUEvusy9o3uxedTbCuXNFHQxpsNZ.png',
        'QmapGf8z7u7f1SQv7P9r1LhjZh9B2BmmmCUS68kBjR8Fsa.png',
        'QmaqC65aSD9Hffp4EGMnB1JiPBeCERBVUewNFMMVKYgc2A.png',
        'QmaZLhanFj41yfXY3Ux1JNv6ZAnzsWXfbJmo7qbJzZjh4s.png',
        'QmbcWzteFsAvdwiaZyC1YJVNsApDaPRmqkQDyrYAvP4u48.png',
        'QmbUzseZbeM3nU6SUTQm979q7FGCMNWEqDKSZvaNUTodDk.png',
        'QmcaEumnTbujyzzV55DXK536Q5gVZ1S2rCooDkU9wixY5H.png',
        'QmcgoedsGRM4tzEZnSQX3RQ2SWTggATqUKQq1gfhhkzpfs.png'
    ]

    const sellers = [
        'Ape Industries', 'Apechella', 'GuccApe'
    ]

    const carouselContents = files.map((current, i) => {
        return (
            <CarouselProductCard 
                key = {i}
                sellerName={sellers[Math.floor(Math.random() * sellers.length)]}
                imageUrl={`${process.env.PUBLIC_URL}/Images/BoredApes/${current}`}
                price={`$${Math.floor(Math.random() * 500)}`}
                productName={`Bored Ape #${Math.floor(Math.random() * 50)}`}
            />
        )
    })


    return(
        <div>
            <div className="productColumns">
                <div><img className="productColumnMainImage" src = {`${process.env.PUBLIC_URL}Images/BoredApes/QmaqC65aSD9Hffp4EGMnB1JiPBeCERBVUewNFMMVKYgc2A.png`}/></div>
                <div>
                    <div style={{marginBottom:"0"}}className="title-text">{"GuccApe"}</div>
                    <div style={{fontSize:"1.2em"}} className="title-text">{"Bored Ape #1"}</div>
                    <div className="basic-text">{"This NFT is a must have for anyone looking to grow their collection! The whole image is clear and crisp, and has a new sheen of consummate boredom that really gives this ape a big boost."}</div>
                    <div style={{marginBottom:"0"}} className="basic-text">{"QTY"}</div>
                    <Select initialText={"1"} options={[1,2,3]}/>
                    <div style={{marginTop:"15%"}} className="submit-button">{"Add to cart"}</div>
                </div>
            </div>

            <div style={{fontSize:"1.4em"}} className="title-text">{"You might also like"}</div>
            <Carousel carouselContents={carouselContents}/>
            
        </div>
    )
}