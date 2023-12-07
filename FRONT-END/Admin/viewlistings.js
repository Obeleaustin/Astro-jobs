import { main,styleElement1 } from "../Admin/welcomePage.js";

let allProduct = () =>{
    
    main()
    styleElement1()

    let products = `
        <div id="alllisting">

        </div>
    `
    document.body.innerHTML += products;

    let fetchProduct = async() =>{
        try{
            let product = await fetch('https://astrojobs.onrender.com/api/v1/admin/products', {offset:0})
    
            let data = await product.json()
            let allProduct = data.data
            console.log(allProduct) 
     
            allProduct.forEach(item=>{
    
                console.log(item.productName)
                let div = `
                
                    <div class="allProducts">
                        <p>Product Name: ${item.productName}</p>
                        <p>Price: ${item.price}</p>
                        <p>Description: ${item.description}</p>
                        <p>Category: ${item.category}</p>

                        <p><input class="edit" type="button" value="Edit" > &nbsp; <input class="delete" type="button" value="delete" ></p>
                    </div>
               
                
                `;    
                console.log(div)
                
                document.body.innerHTML += div;
    
            }) 
            for(i=0; i < allProduct.length; i++){
                console.log(allProduct[i])
            }     
        }
        catch{
    
        }
        finally{
    
        }
    }
    fetchProduct()
}
function allProductStyle(){
    let styleElement  = document.createElement("style")
    
    let styles = `
        #text{
            text-align: center;
        }
        div{
            margin: 0 0 4% 3%;
        }
        .allProducts{
            background-color: white;
            width: 80%;
            padding: 2%;
            margin: 0px auto;
            margin-bottom: 2%;
        }
   `
    styleElement.appendChild(document.createTextNode(styles))
    document.head.appendChild(styleElement)
  }
export{allProduct,allProductStyle }