const body = $('body')
let products = $('#products')
let categories = $('#main-category')
const loginForm = $('#myForm')
let loginBut = $('#login')
let logoutBut = $('#logout')
let flag = true;
let content = $('#content')
let navbar = $('#navbar')
let userEmail = $('#userEmail')
let cartIcon = $('#icon')
let userCart = $('#userCart')
let cart = []
userCart.hide();


let mainCategory = [{ src: "./images/c0.jpg", title: "Coffee", description: " delicious roasted and ground coffee specially designed for our dear customers " },
{ src: "./images/n2.jpg", title: "Nuts", description: "high quality nuts, tasty every time from Aladdin roastery to all parts of Germany" },
{ src: "./images/pro.jpg", title: "Chocolate", description: "made from the best and finest raw chocolate to draw a smile on your face" }]

// let allItems = []
let Chocolate = [{ type: "Chocolate", price: "19", src: "./images/13.jpeg", title: "Pistachio", description: "discretion" },
{ type: "Chocolate", price: "19", src: "./images/t1.jpeg", title: "Rocher", description: "Rocher & pistachio" },
{ type: "Chocolate", price: "17", src: "./images/15.jpeg", title: "Man & Salwa", description: "Man & Salwa" },
{ type: "Chocolate", price: "20", src: "./images/14.jpeg", title: "Rose", description: "discretion" },
{ type: "Chocolate", price: "15", src: "./images/t2.jpeg", title: "Wafer", description: "Wafer & pistachio" },
{ type: "Chocolate", price: "25", src: "./images/5.jpeg", title: "Baby set", description: "Baby set" },
{ type: "Chocolate", price: "25", src: "./images/ms.jpg", title: "Gifts", description: "Gifts" }]

let Nuts = [{ type: "Nuts", price: "17", src: "./images/p.jpg", title: "Pistachio", description: "Ppistachio" },
{ type: "Nuts", price: "18", src: "./images/k.jpg", title: "Cashew", description: "Cashew" },
{ type: "Nuts", price: "15", src: "./images/mix.jpg", title: "Mix nuts", description: "Mix nuts" },
{ type: "Nuts", price: "14", src: "./images/l.jpg", title: "Almonds", description: "Almonds" },]

let Coffee = [{ type: "Coffee", price: "12", src: "./images/c1.jpg", title: "Coffee with cardamom", description: "Coffee beans with cardamom" },
            { type: "Coffee", price: "12", src: "./images/a.jpg", title: "Arabic coffee", description: "discretion" }]

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
                                <button onclick="addToCart('${ele.type}',${i})">Add to cart</button>
                            <div>
                        </div>`)
            console.log("card ", card);
            card.appendTo(products);
        });
    }
}

let callLogin = () => {
    loginForm.html('');
    const form = $(` <div class="form-container">
                            <h1>Login</h1>
                            <label for="email"><b>Email</b></label>
                            <input id="email" type="text" placeholder="Enter Email" name="email" required>
                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required>
                            <button  class="btn" onclick="setUser()">Login</button>
                    </div>`)
    form.appendTo(loginForm)
}

loginBut.on("click", function () {
    console.log("login");
    if (flag) {
        callLogin()
        // loginForm.fadeIn("slow");
        loginBut.text("Logout")
        $('#userEmail').text(localStorage.getItem('userEmail'));
        navbar.hide()
        content.hide()
        flag = false;
    } else {
        // loginForm.fadeOut("slow");
        localStorage.removeItem('userEmail')
        flag = true;
        loginBut.text("Login")
        location.reload();
    }
});

let setUser = () => {
    // e.preventDefault()
    console.log("setUser")
    content.fadeIn("slow");
    localStorage.setItem('userEmail', $("#email").val());
    userEmail.text($("#email").val())
    loginForm.hide()
    navbar.show();
    content.show();
    
}
// $("#userEmail").text(localStorage.getItem('userEmail'));

let addToCart = (type, i) => {
    console.log("Add", i)
    cart.push({ type, i })
    // cart.push(i)
    console.log("......>", cart)
}

let openCart = () => {
    if (flag) {
        console.log("open cart")
        userCart.show();
        flag = false;
    } else {
        userCart.hide();
        flag = true;
    }
}

let closeCart = () => {
    userCart.hide();
}

let buy = () => {
    console.log("")
}





// let users = {}