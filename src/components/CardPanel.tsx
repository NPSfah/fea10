'use client'
import { useReducer,useEffect, useState } from "react";
import Link from "next/link";

import ProductCard from "./Card"
import getVenues from "@/libs/getVenues";
import { CircularProgress } from "@mui/material";
// import {VenueItem,VenueJson} from "interface"

export default function CardPanel() {

    const [venueResponse, setVenueResponse] = useState<VenueJson | null>(null)

    useEffect(()=>{
        const fetchData = async()=>{
            const venues = await getVenues()
            setVenueResponse(venues)
        }
        fetchData(),[]
    })

    const compareReducer = (compareList:Map<string,number>, action:{type:string, venueName:string,rating:number })=>{
        switch(action.type){
            case 'add':{
                return new Map(compareList.set(action.venueName,action.rating))
            }
            case 'remove':{
                compareList.delete(action.venueName)
                return new Map( compareList )
            }
            default: return compareList
        }
    }

    const [compareList,dispatchCompare] = useReducer(compareReducer, new Map([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0]
    ]))

    // //mock data
    // const mockVenueRepo = [
    //     {vid:'001', name:"The Bloom Pavilion", img:"/img/bloom.jpg"},
    //     {vid:'002', name:"Spark Space", img:"/img/sparkspace.jpg"},
    //     {vid:'003', name:"The Grand Table", img:"/img/grandtable.jpg"}            
    // ]
 
    if(!venueResponse) return <div>
        <p>Venue Panel is loading... </p>
        <CircularProgress/>
    </div>

    return (
        <div>
            <div style={{margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent:"space-around", alignContent: "space-around"}}>
                {
                    venueResponse.data.map((venueItem:VenueItem)=>(
                        <Link href={`/venue/${venueItem.id}`} className="w-1/5">
                            <ProductCard venueName={venueItem.name} imgSrc={venueItem.picture} 
                            onRate={(venue:string,rate:number)=>dispatchCompare({type:'add',venueName:venue,rating:rate})}
                            rating={compareList.get(venueItem.name)||0}
                            />
                        </Link>
                    ))
                }
            </div> 
            <div className="text-lg font-bold">Venue List with Ratings : {compareList.size} </div>
            {Array.from(compareList.entries()).map(([venue, rate])=><div key={venue}
            onClick={()=>dispatchCompare({type:'remove', venueName:venue, rating:rate})}
            data-testid = {venue}>
                {venue} : {rate}</div>)}
        </div>
    )
}