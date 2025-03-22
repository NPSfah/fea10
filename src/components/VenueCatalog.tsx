import Link from "next/link";
import ProductCard from "./Card";
// import { VenueItem,VenueJson } from "interface"

export default async function VenueCatalog({venuesJson}:{venuesJson:Promise<VenueJson>}) {
    const venuesJsonReady = await venuesJson
    return(
        <>
        Explore {venuesJsonReady.count} venues in our catalog
        <div style={{margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent:"space-around", alignContent: "space-around"}}>
                {
                    venuesJsonReady.data.map((venueItem:VenueItem)=>(
                        <Link href={`/venue/${venueItem.id}`} className="w-1/5">
                            <ProductCard venueName={venueItem.name} imgSrc={venueItem.picture} 
                            rating={0}
                            />
                        </Link>
                    ))
                }
            </div> 
        </>
    )
}