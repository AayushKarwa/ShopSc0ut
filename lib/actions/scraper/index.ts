import axios from 'axios'
import * as cheerio from 'cheerio'
export async function scrapeAmazonProduct(url:string){
    if(!url) return;

    // curl -i --proxy brd.superproxy.io:33335 --proxy-user brd-customer-hl_290c1e25-zone-shopscout:0nb9yxt8qiuo -k "https://geo.brdtest.com/welcome.txt?product=unlocker&method=native"

    //BRIGHT DATA USER CONFIGURATION
    const username = String(process.env.BRIGHT_DATA_USERNAME)
    const password = String(process.env.BRIGHT_DATA_PASSWORD)
    const port = 33335
    const session_id = (100000 * Math.random()) |0;

    const options={
        auth:{
            username:`${username}-session-${session_id}`,
            password:`${password}`
        },
        host:'brd.superproxy.io',
        port,
        rejectUnauthorized:false,
    }

    try{
        //fetch the product page
    const response = await axios.get(url,options)
    console.log(response.data)

    }catch(error){
        throw new Error(`failed to scrape the product: ${error}`)
    }
}