import {connectFireBase} from "../connection.js"
// alert(1)
var database = connectFireBase();

async function loadData(){
    let data = await database.ref("Phone").get("value");
    return data.val();
}

function createProduct(image, name, price){

    let div = document.createElement("div");
    div.setAttribute("class", "product");


    let imageProduct = document.createElement("img");
    if (image == "") {
        imageProduct.src = "https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png"

    } else {
        imageProduct.src = imageProduct;
    }
    
    imageProduct.alt = "image " + name;

    let nameProduct = document.createElement("p");
    nameProduct.setAttribute("id", "nameProduct")
    nameProduct.innerText = name;

    let priceProduct = document.createElement("p");
    priceProduct.innerHTML = price + " VND";

    div.appendChild(imageProduct);
    div.appendChild(nameProduct);
    div.appendChild(priceProduct);

    return div;
}

window.onload = () => {
    loadData().then(list=>{
        console.log(list);
        for (let o in list){
            document.getElementById("display-product").append(createProduct("", list[o].name, list[o].price))
        }
    })
}