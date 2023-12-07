let forward = document.getElementById('forward')
let backward = document.getElementById('backward')
let heroImage = document.getElementById('heroImage')
let myImage = document.getElementById('my-image') 
let myImage1 = document.getElementById('my-image1') 
let myImage2 = document.getElementById('my-image2') 
let myImage3 = document.getElementById('my-image3') 
let div = document.getElementById('our-listings')

 let imageUrls = ["Css/53d08daffd5311b4eba7b65ffbbd3250.png", "Css/form-design-best-practices-use-singles-column-form.jpg"];
 let images = [myImage, myImage1]
// let image2 = myImagmye2.setAttribute('src', 'Css/form-design-best-practices-use-singles-column-form.jpg')
// let image3 = myImage3.setAttribute('src', 'Css/form-design-best-practices-use-singles-column-form.jpg')
 
let allImage = [`<img src = 'Css/main dev team welcome page.jpg' />`, `<img src = 'Css/form-design-best-practices-use-singles-column-form.jpg' />`]

let hero = () =>{
    let count = 0;
      let _d = document;

    setInterval(() => {
        _d.querySelector("#hero ul").style.marginLeft = "-"+count+"%";
        if(count == 300){
            count = 0;
        }else{
            count += 100;
        }
    }, 3000);


    
}
hero()
let fetchProduct = async() =>{
    try{
        let product = await fetch('https://astrojobs.onrender.com/api/v1/admin/products')

        let data = await product.json()
        let allProduct = data.data
        console.log(allProduct) 
 
        allProduct.forEach(item=>{
                let productId = item.productId
            console.log(item.productName)
            let content = `
                <div class="customerProducts">
                    <h1> ${item.productName}</h1>
                    <p>${item.price}</p>
                    <p> ${item.description}</p>
                    <p>${item.category}</p>

                    <p>
                    <input class="order" id="order" 
                    type="button" value="Place Order" onclick="(function(){
                        console.log('${productId}')                        
                    }) ()"></p>
                </div>
            `;    
              div.innerHTML += content
           
        })    
    }
    catch{

    }
    finally{

    }
}


export{fetchProduct}