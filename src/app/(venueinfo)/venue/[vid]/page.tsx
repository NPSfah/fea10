import Image from "next/image";
import getVenue from "@/libs/getVenue";
import Link from "next/link";


export default async function VenueDetailPage({params}:{params:{vid:string}}){
    const venueDetail = await getVenue(params.vid)

    //mock data
    // const mockVenueRepo = new Map([
    //     ["001",{name:"The Bloom Pavilion", img:"/img/bloom.jpg"}],
    //     ["002",{name:"Spark Space", img:"/img/sparkspace.jpg"}],
    //     ["003",{name:"The Grand Table", img:"/img/grandtable.jpg"}]
    // ]);

    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">{venueDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src={venueDetail.data.picture}
                    alt='venue img'
                    width={100}
                    height={100}
                    sizes="100vw"
                    className="rounded-lg w-[30%]"/>
                    <div className="flex flex-col text-md m-1 ml-5 text-left">
                        <div>Name : {venueDetail.data.name}</div>
                        <div>Address : {venueDetail.data.address}</div>
                        <div>District : {venueDetail.data.district}</div>
                        <div>Province : {venueDetail.data.province}</div>
                        <div>Postal Code : {venueDetail.data.postalcode}</div>
                        <div>Tel : {venueDetail.data.tel}</div>
                        <div>Daily Rate : {venueDetail.data.dailyrate}</div>
                        <Link href={`/booking?id=$${params.vid}&name=${venueDetail.data.name}`}>
                            <button className="rounded-md bg-red-500 hover:bg-red-700 px-4 py-2 text-white">
                                Book Venue
                            </button>
                        </Link>
                    </div>
                </div>
        </main>
    )
}

export async function generateStaticParams() {
    return [{cid:'001'},{cid:'002'},{cid:'003'}]
}