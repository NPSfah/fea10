export default async function getVenues() {

    // await new Promise( (resolve)=> setTimeout(resolve, 5000))

    const response = await fetch("https://a08-venue-explorer-backend.vercel.app/api/v1/venues")
    if(!response.ok){
        throw new Error("failed to fetch venues")
    }
    // console.log(await response.json())
    return await response.json()
}