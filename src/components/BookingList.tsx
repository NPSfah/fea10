'use client'

import { removeBooking } from "@/redux/features/bookSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch, UseDispatch } from "react-redux"

export default function BookingList (){
    const bookingItems = useAppSelector((state)=>state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()
    if(!bookingItems.length) return(
        <div className="text-2xl text-center p-5 font-extrabold">No Venue Booking</div>
    )
    return(
        <>
        {bookingItems.map((bookingItem)=>(
            <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={`${bookingItem.nameLastname}-${bookingItem.tel}-${bookingItem.venue}-${bookingItem.bookDate}`}>
                <div className="text-xl">{bookingItem.nameLastname}</div>
                <div className="text-lg">{bookingItem.tel}</div>
                <div className="text-lg">{bookingItem.venue}</div>
                <div className="text-lg">{bookingItem.bookDate}</div>
                <button className="rounded-md bg-red-500 hover:bg-red-700 px-4 py-2 text-white" onClick={()=>dispatch(removeBooking(bookingItem))}>
                    Remove Booking
                </button>
            </div>
        ))}
        </>
    )
}