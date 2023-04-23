import React from 'react';
import ProductDisplayCard from '../Components/ProducDisplayCard';


export default function useGetCards()
{
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
        'QmcgoedsGRM4tzEZnSQX3RQ2SWTggATqUKQq1gfhhkzpfs.png',
        'QmcJYkCKK7QPmYWjp4FD2e3Lv5WCGFuHNUByvGKBaytif4.png',
        'QmcLtC8ZEX5HvB6nCEPqFHCta9fQjpcqj5c7QRo41E9Xwb.png'
    ]


    let productCards = files.map((item, index) => {
        const itemImage = `${process.env.PUBLIC_URL}/Images/Bored Apes/${item}`;
        console.log(itemImage)
        return (
            <ProductDisplayCard 
                key={index}
                itemTitle={`Bored Ape #${index+1}`}
                itemPrice={10 + Math.trunc(Math.random() * 300)}
                itemImage={itemImage}
            />
        )
    })

    return(
        productCards
    )
}
