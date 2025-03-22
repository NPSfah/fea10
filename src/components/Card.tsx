'use client'
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";
export default function ProductCard( {venueName, imgSrc, onRate, rating}: {venueName: string, imgSrc: string, onRate?:Function ,rating:number} ) {
    return (
        <InteractiveCard contentName={venueName}>
            <div className="w-full h-[70%] relative rounded-t-lg" >
                <Image
                    src={imgSrc}
                    alt='product pic'
                    fill={true}
                    className="object-cover rounded-t-lg "
                />
            </div>
            <div className="w-full h-[15%] p-[10px]">
                {venueName}
            </div>
            {
                onRate?
                    <Rating className="w-full h-[15%] p-2 justify-center"
                    id={`${venueName} Rating`}
                    name={`${venueName} Rating`}
                    data-testid={`${venueName} Rating`}
                    value={rating}
                    onChange={(e, newValue) => {
                        if(newValue!==null){
                            e.stopPropagation();
                            onRate(venueName,newValue);          
                        }
                    }}
                    onClick={(e)=>e.stopPropagation()}
                    /> : ''
            }
            {/* <button onClick={(e)=>{
                e.stopPropagation();
                alert("test")
            }} className="bg-red-900 rounded-3xl text-white mx-7">button</button> */}
        </InteractiveCard>
    );
}