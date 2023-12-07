import { addListings, styleElement} from "./addlistings.js";
import { allProduct, allProductStyle } from "./viewlistings.js";

let main = (contents) =>{
    let main= `
        <header>
            <div id="nav-bar">
                <i id="extra-menu" class="fa-solid fa-bars"></i>
            </div>

            <div id="logo">
                <a href=""><img src=".//Css/logo.png" alt=""></a>
                
            </div>
            <ul>
                <li><a href="">Services</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Team</a></li>
                <li id="jobListings">Upload listings</li>
            </ul>
        </header>

        <div id="extra-menu-bar">
            <ul>
                <li>Orders</li>
                <li>Comment</li>
                <li>Community</li>
                <li>List of Engineers</li>
                <li id="add">All Product Listings</li>
            </ul>
        </div>
`
    document.body.innerHTML = main;

    let add = document.getElementById("add")

    add.addEventListener('click', ()=>{
        allProduct()
        allProductStyle()

    });

    let addlist = document.getElementById("jobListings")
    addlist.addEventListener('click',()=>{
        addListings()
        styleElement()
        
    })
    let menu = document.getElementById("extra-menu")
    let sidebar = document.getElementById("extra-menu-bar")
    let count = 0;
    menu.addEventListener('click', ()=>{
      if(count<1){
          sidebar.style.transitionDuration = "1s"
          sidebar.style.margin = '0 0 0 -1%'
      }
          count++;
      if(count > 1){
          sidebar.style.margin = '0 0 0 -15%'
      console.log("count")
      count = 0;
      }
    })
}

function styleElement1(){
  let styleElement  = document.createElement("style")
  
  let styles = `
    body{
        margin: -0.1%;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        /* background-color: black; */
    }
    header{
        position: relative;
        position:sticky;
        top: 0;
        background-color: rgb(1, 6, 118);
        display: grid;
        grid-template-columns: 4.5% 30.5% 65% ;
    }
    header div img{
        width: 35%;
        margin: 4.36% 0 0 0;
    }
    header ul{
        margin: 3.5% 3.5% 3.5% 51%;
        right: 10px;
    }
    header ul li{
        list-style-type: none;
        display: inline;
        padding: 1%;
        text-align: center;
        
    }
    header ul li a{
        text-decoration: none;
        color: white;
        font-size: 100%;

    }
    #jobListings{
        font-size: 90%;
        text-decoration: none;
        color: white;
        background-color: orangered;
        padding: 3%;
        margin-left: 5%;
        border-radius: 10px;

    
    }
    #jobListings:hover{
        cursor: pointer;
    }
    #nav-bar{
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        padding-left: 5%;

    }
    #extra-menu{
        font-size: 150%;
        font-weigth: bold;
        margin-left: 20%;
        color: white;
    }
    #extra-menu-bar{
        position: fixed;
        font-size: 90%;
        font-weight: normal;
        height: 90vh;
        padding: 2%;
        background-color: rgb(1, 6, 118);
        width: fit-content;
        transition-duration: 1s;
        margin-left: -15%;
        color: white;
    }
    #extra-menu-bar ul{
        list-style-type: none;
        display: grid;
        grid-template-columns: 100%;
        row-gap: 40px;
        margin-left: -23%;

    }
    #extra-menu-bar ul li{
        color: white;
    }


  `;
 
  styleElement.appendChild(document.createTextNode(styles))
  document.head.appendChild(styleElement)
}
export{main, styleElement1}
