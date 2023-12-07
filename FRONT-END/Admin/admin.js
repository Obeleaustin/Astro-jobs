// import {addListings,styleElement} from "../Admin/addlistings.js";
import { main,styleElement1 } from "../Admin/welcomePage.js";
// import { allProduct } from "../Admin/viewlistings.js";


const authentication = () =>{

    let createAccount = () =>{
        /*step 1 sumbit form details to the back end for dev 
        lead account creation
        step 2 request authorization ID 
        step 3 await response 
        step 4 get and store authorization ID in local storage 
         */

    }
    let logIn =()=>{
        /*step 1 collect log in data from dev lead
        step 2 submit login details to the back end
        step 3 make a request to the back end and get response 
        step 4 check response for matching log in info
        (if yes redirect to dashboard, else invalid log in details )
        */
    }
    let devTeam = () =>{
        /* step 1 sumbit form details to the back end for dev 
        team member account creation
        step 2 make a request to the baxk end to generate an employer ID
        */
        
    }

}
let updateJoblistings = () =>{

        main()
        styleElement1()
}
updateJoblistings()

let viewListings = () =>{
    
}
viewListings()
let notification = (notificationId) =>{
    let orderNotication = (Id) =>{
        /*step 1 make a request to the back end to get all newly placed order Id
        step 2 await respponse
        step 3 get all new order ID of the user from the back end
        step 4 align all placed order based on the time it was placed
        */
       
    }
    let communityNotification = () => {
         /*step 1 make a request to the back end to get all new community alert
        step 2 await respponse
        step 3 get all new community alert from the back end
        step 4 align all community alert based on the time it was placed
        */
    }
    let chatNotification = () => {
        //get all newly inputted chat object from the back end
    }

}
let order = () => {

    let checkOrder = () =>{
        /*step 1 check for newly gotten order  from order notification
        */
    }
    let displayOrders = () => {
        /*step 1 get all newly fetched order details via their order ID
        step 2 display details of the order
        */
    }
    let displaySingleOrders = () =>{
        /*step 1 get the ID of the precise order
        step 2 make a request to the back end for the details of the ID order
        step 3 await response
        step 4 display all detail of that order*/
    }
    let assigning = () =>{
        /*step 1 making a request to the back end to get the employee ID
        step 2 await response 
        step 3 get employee ID from back end
        step 4 add description of dev preference to detail order
        step 5 send detals and dedscription to employee ID
        */  
    }
}

let allTask = () => {
    let checkTask = () =>{
        /* check status of the given order via order ID*/
    }
    let displayTask = () =>{
        /*step 1 Get task object from back end in batches of 8
        step 2 get order status of the task object from the back end
        step 3 get all employee ID 
        step 4 send details and description to percified employee ID
        step 5 
        */
    }
    let updateTask = ()=>{
         //updating task progress 
        /*step 1 submit request to the back end to get job status
        step 2 await response 
        step 3 get job status 
        step 4 send relatively new job status to the back end

        adding finished task to the porfolio
        step 1 send detail of finished work to the back end
        */
      
       
    }
}
let community = () => {
    let checkcommunity = () =>{
        /*step 1 check for newly gotten community notification from notificaton function
        */
    }
    let singleNotification = () =>{
        /*step 1 get ID of the precise community notification 
        step 2 make request to the back end for details of community ID 
        step 3 await response 
        step 4 display details
        */

    }
}
let testimonial = () => {
    let displayComments = () =>{
        /*step 1 make a request to the back end to get details of new comments
        step 2 await response
        step 3 check response (if yes display details of all details of comment)
        else display no new comment made 
        */
        //displaying all new comment and ratings
    }
    let displaySingleComment = () =>{
        //displaying all individual comments and ratings
        //update the comment as a testimonial to the dashboard 
    }
}
let engineersList = () =>{
    //show all enginners added in the community 
    //showing their current status (free, occupied, really occupied)
}
