import { connectFireBase } from "./connection.js"

const body = document.getElementById("top-deal-smartphone");

var database = connectFireBase();

function createPanelProduct(imageProduct, nameProduct, priceProduct) {

    let panel = document.createElement("div");
    panel.setAttribute("class", "product");

    let image = document.createElement("img");
    if (imageProduct == "") {
        image.src = "https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png"

    } else {
        image.src = imageProduct;
    }

    image.alt = "image " + nameProduct;
    panel.appendChild(image);

    let name = document.createElement("h4");
    name.innerText = nameProduct;
    panel.appendChild(name)

    let price = document.createElement("h5");
    price.innerText = priceProduct;
    panel.appendChild(price)

    body.appendChild(panel)
}

async function getAllData() {
    let d = await database.ref("Phone").get("value");
    return d.val();
}

let data = getAllData();
data.then(list => {
    for (let o in list) {
        console.log(list[o]);
        createPanelProduct("", list[o].name, list[o].price)
    }
})
