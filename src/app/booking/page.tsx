'use client'
import DatePicker from "@/components/DateReserve";
import { TextField,Select,MenuItem,InputLabel } from "@mui/material";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";

// import { getServerSession } from "next-auth"
// import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
// import getUserProfile from "@/libs/getUserProfile"
 
export default function Booking() {
    // const session = await getServerSession(authOptions)
    // if(!session||!session.user.token) return null

    // const profile = await getUserProfile(session.user.token)
    // var createdAt = new Date(profile.data.createdAt)
    const urlParams = useSearchParams()
    const vid=urlParams.get('id')
    const name=urlParams.get('name')

    const [contactName, setContactName] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [Venue, setVenue] = useState('')
    const[bookDate, setBookDate] = useState<Dayjs|null>(null)

    const dispatch = useDispatch<AppDispatch>()

    const makeBooking = ()=>{
        if(Venue&&contactName&&contactNumber&&bookDate){
            const item:BookingItem = {
                nameLastname: contactName,
                tel: contactNumber,
                venue: Venue,
                bookDate: dayjs(bookDate).format("YYYY/MM/DD")
            }
            dispatch(addBooking(item))
        }
    }

    return (
        <main className="w-[100%] flex flex-col items-center space-y-5">
            {/* <div>{profile.data.name}</div>
            <div>{profile.data.email}</div>
            <div>{profile.data.tel}</div>
            <div>{createdAt.toString()}</div> */}
            <div className="text-xl font-bold">New Reservation</div>
            <div className="text-lg font-semibold text-cyan-700">Venue : {name} </div>

            <div className="w-fit space-y-2 flex flex-col">
                <TextField id="Name-Lastname" label="Name-Lastname" name="Name-Lastname" variant="standard" 
                value={contactName} onChange={(e)=>{setContactName(e.target.value)}}/>
                <TextField id="Contact-Number" label="Contact-Number" name="Contact-Number" variant="standard"
                value={contactNumber} onChange={(e)=>{setContactNumber(e.target.value)}}/>
                <InputLabel id="venue-label">Select Venue</InputLabel>
                <Select id="venue" variant="standard" name="venue" label="Venue"
                value={Venue} onChange={(e)=>{setVenue(e.target.value)}}>
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>
                <DatePicker onDateChange={(value:Dayjs)=>(setBookDate(value))}/>
                <button className="rounded-md bg-red-500 hover:bg-red-700 px-4 py-2 text-white" onClick={makeBooking}>
                    Book Venue
                </button>
            </div>

        </main>
    );
}