import VenueCatalog from "@/components/VenueCatalog"
import getVenues from "@/libs/getVenues"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import CardPanel from "@/components/CardPanel"

export default function Venue() {
    const venues = getVenues()

    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select your Venue</h1>
            <Suspense fallback={<p>loading... <LinearProgress/></p>}>
                <VenueCatalog venuesJson={venues}/>
            </Suspense>

            <hr className="my-10"/>
            <h1>**TRY Client side Venue Panel**</h1>
            <CardPanel/>
        </main>
    )
}