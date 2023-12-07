import { main, styleElement1  } from "./welcomePage.js";

const addListings = () =>{
   let pop =`
   

   <form id="form">
   <i id="cross" class="fa-solid fa-xmark"></i>

   <h2 id="text"> ADD TO LISTINGS </h2>

   
          <input id="productName" type="text" name="productName" placeholder="Product Name"><br>

          <input id="price" type="text" name="price" placeholder="Add Price"><br>

          <input id="category" type="text" name="category" placeholder="Category"><br>

          <input id="description" type="text" name="description" placeholder="Description"><br>

        <div>
          <label id="features">Features</label><br>
          <textarea id="textarea"> </textarea>
        </div>



          <input id="submit" type="button" value="Add to list">
      </form>
   `;
   document.body.innerHTML = pop;
   let cross = document.getElementById('cross');
   cross.addEventListener('click',()=>{
      main()
      styleElement1()
   })

   let submit = document.getElementById("submit")
   
   submit.addEventListener('click', ()=>{
     let productName = document.getElementById("productName").value
     let price = document.getElementById("price").value
    let category = document.getElementById("category").value
    let description = document.getElementById("description").value
    let textarea = document.getElementById("textarea").value
    // let finalTextAreaOutput = null;
    // if(textarea.indexOf(",")){
    //   finalTextAreaOutput = textarea.split(",");
    // }

    let sendingObject = {
      productName : productName,
      price: price,
      category: category,
      description: description,
      feature1 : textarea

    };
    $.ajax({
      type: "post",
      url: "https://astrojobs.onrender.com/api/v1/admin/addProducts",
      data: JSON.stringify(sendingObject),
      dataType: "json",
      contentType: "application/json; charset = utf-8",
      CORS: true,
      secure: true,
      headers:{
        'Access-Control-Allow-Origin':'*',
      },

      beforeSend: function(){
        console.log("processing")
      },
      error: function(err){
        console.log("failed to submit" + err)
        console.log(error)
      },
      success: function(data){
        console.log(data)
      }
    });
  });
}

function styleElement(){
     let styleElement  = document.createElement("style")
     
     let styles = `
     body{
      background-color: white;
     }
    #form{
      position: relative;
      background-color: white;
      width: 30%;
      display: grid;
      grid-template-columns: auto;
      row-gap: 5px;
      padding: 1% 5% 2% 5%; 
      margin: 2% 30% 0 30%;
      box-shadow: 0px 0px 40px 2px lightgray;
     
    }
     .fa-solid{
      position: absolute;
      top: 4%;
      right: 4%;
      font-size: 150%;
      font-weigth: lighter;
      color: lightgrey;
  
     

     }
    #text{
      font-family: arial black;
      text-align: center;
      font-weight: bold;
      color: #0095ff;
    }
    input{
      padding: 4% 0 4% 0;
      color: black;
      width: 100%;
      background-color: white;
      border: none;
      outline: none;
      border-bottom: 1px solid lightgray;
    }
    input[type=text]::placeholder{
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;;
    }
    #features{
      color: grey;
      font-size: 80%;
      }

    #textarea{
      width: 100%;
      outline: none;
      border: none;
      resize: none;
      background-color: white;
      border-bottom: 1px solid lightgray;
      margin-bottom: 3%;

    }
    #submit{
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      border: none;
      color: white;
      width: 70%;
      margin: 0px auto;
      border-radius: 40px;
      background : linear-gradient(to left, red, orangered )
    }
   
     `;
     styleElement.appendChild(document.createTextNode(styles))
     document.head.appendChild(styleElement)
}

export{addListings,styleElement }