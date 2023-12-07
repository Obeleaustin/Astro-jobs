import { fetchProduct } from "./welcome.js";

fetchProduct()
function sample(pId){
    console.log(pId)
    }
let chat = () =>{

    //open chat features
}
let allListing = () =>{
    let listings = () =>{
        /*step 1 send request to back end to get all new listings
        step 2 await response from back end 
        step 3 if yes get all resently added listings
        else display no job listing available*/

    }
    let detailedlisting = (Id) =>{
        /* step 1 get the Id of the precise listing
        step 2 make a request to the back end for the details of the Id listing
        step 3 await response
        step 4 display all detail on that listing */
    }
}
allListing()
let order = (token) =>{
    
    let placeOrder = () =>{
        /*step 1 sumbit listing ID to the back end
        step 2 submit staus of payment*/
    }
    let cancelOrder = () =>{
        /*redirect back to listing page
        */
    }
    let payment = () =>{
    /* step 1 connect to pay stack API
    step 2 await for response
    step 3 if successful then continue 
    else break and report error*/

    }
    let orderId = () =>{
        /*step 1 send a request to the back end to generate a unique ID
        step 2 await reponse
        step 3 display unique ID as order ID
        */
    }
}
let trackId = () =>{
    //track order id 
    let checkValidity = () =>{
        /*step 1 collect tracking ID from user 
        step 2 submit trackin ID to back end 
        step 3 get response from back end 
        step 4 check response (if payment successful redirect to temporary dashboard)
        else check for if order is within a time frame of 24 hours
        (if yes redirect to payment page) else display order invalid
        */

    }
}
let temporaryDashboard = () => {
    let viewProgress = (trackingId) =>{
        /*step 1 get job details from back end via tracking ID
        step 2 display already gotten job detail on the front end via tracking ID
      */
    }
    let placeAnotherOrder = () => {
        /*step 1 send request to back end to get listings
        step 2 await response from back end 
        step 3 display listings */
    }
}
let testimonial = () =>{
    let placeComment = () =>{
        /*step 1 open a text area for comment
        step 2 submit comment to back end with email address*/
    }

    let rating = () =>{
        /*submit figure of rating to the back end*/
    }
}
