const body = $('body')
let products = $('#products')
let categories = $('#main-category')
const loginForm = $('#myForm')
let loginBut = $("#login")
let flag = true;
let content = $('#content')
let navbar = $('#navbar')



let mainCategory = [{ src: "./images/c0.jpg", title: "Coffee", description: " delicious roasted and ground coffee specially designed for our dear customers " },
{ src: "./images/n2.jpg", title: "Nuts", description: "high quality nuts, tasty every time from Aladdin roastery to all parts of Germany" },
{ src: "./images/cc.jpg", title: "Chocolate", description: "made from the best and finest raw chocolate to draw a smile on your face" }]

// let items = ["./images/13.jpeg","./images/14.jpeg","./images/15.jpeg"]
let Chocolate = [{ type: "Chocolate", src: "./images/13.jpeg", title: "Pistachio", description: "discretion" },
{ type: "Chocolate", src: "./images/t1.jpeg", title: "Rocher", description: "Rocher & pistachio" },
{ type: "Chocolate", src: "./images/15.jpeg", title: "Man & Salwa", description: "Man & Salwa" },
{ type: "Chocolate", src: "./images/14.jpeg", title: "Rose", description: "discretion" },
{ type: "Chocolate", src: "./images/t2.jpeg", title: "Wafer", description: "Wafer & pistachio" },
{ type: "Chocolate", src: "./images/5.jpeg", title: "Baby set", description: "Baby set" },
{ type: "Chocolate", src: "./images/ms.jpg", title: "Gift", description: "Gift" }]

let Nuts = [{ type: "Nuts", src: "./images/p.jpg", title: "Pistachio", description: "Ppistachio" },
{ type: "Nuts", src: "./images/k.jpg", title: "Cashew", description: "Cashew" },
{ type: "Nuts", src: "./images/mix.jpg", title: "Mix nuts", description: "Mix nuts" },
{ type: "Nuts", src: "./images/l.jpg", title: "Almonds", description: "Almonds" },]

let Coffee = [{ type: "Coffee", src: "./images/c1.jpg", title: "Arabic coffee", description: "discretion" }]

// render main Category part1
let renderMainCategory = () => {
    mainCategory.forEach((ele, i) => {
        console.log("render list of Categories");
        const card = $(`<div id=${i} class="card">
                            <div class="image">
                                <img src="${ele.src}" alt="${ele.title}" onClick="renderItems(${ele.title},${i})" > 
                            </div>
                            <div class="title">
                                <h3>${ele.title}</h3>
                            </div>
                            <div class="deception">
                                <p>${ele.description}</p>
                            </div>
                        </div>`);
        card.appendTo(categories);
    });
}
renderMainCategory()

// render list of products part2
let renderItems = (category, index) => {
    products.empty()
    if (category) {
        $('#sub-category').text(mainCategory[index]?.title)
        category.forEach((ele, i) => {
            console.log("render list of items");
            const card = $(`<div id=${i} class="item-card">
                            <div class="image">
                                <img src="${ele.src}">
                            </div>
                            <div class="title">
                                <h3>${ele.title}</h3>
                            </div>
                            <div class="description">
                                <button onclick="addToCart()">Add to cart</button>
                            <div>
                        </div>`)
            console.log("card ", card);
            card.appendTo(products);
        });
    }
}
renderItems()

let login = () => {
    loginForm.empty();
    const form = $(` <form action="#products" class="form-container">
                            <h1>Login</h1>
                        
                            <label for="email"><b>Email</b></label>
                            <input id="email" type="text" placeholder="Enter Email" name="email" required>
                        
                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required>
                        
                            <button type="submit" class="btn" onclick="setUser()">Login</button>
                    </form>`)
    form.appendTo(loginForm)
}

// let logout = () => {

// }

loginBut.on("click", function () {
    console.log("login");
    if (flag) {
        login()
        loginForm.fadeIn("slow");
        content.hide()
        navbar.hide()
        flag = false;
    } else {
        loginForm.fadeOut("slow");
        flag = true;
    }
});

let setUser = () =>{

    console.log("setUser")
    content.fadeIn("slow");
    localStorage.setItem('userEmail', $("#email").val());

}
$("#userEmail").text(localStorage.getItem('userEmail'));





// let cart = []

// const addToCart = ()=>{
//     console.log("Add")
//     if(Chocolate){
//         cart.push(Chocolate[i].title)
//         console.log("......>",cart)
//     }
// }
// let users = {}