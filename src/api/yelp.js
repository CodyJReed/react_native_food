export const yelpGet = async (term) => {
    try{
        const results = await fetch(`${process.env.BASE_URL}/search?${term}&location=reno`, {
            headers: {
                'Authorization': `Bearer ${process.env.YELP_API_KEY}`
            }
        })
        console.log(results)
    } catch(e) {
        if (e instanceof Error) {
            console.log(e.message)
            return []
        }

        return 'something went wrong!'
    }
}