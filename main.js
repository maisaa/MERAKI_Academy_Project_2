const body = $('body')
let products = $('#products')
let categories = $('#main-category')

let mainCategory = [{src:"./images/c0.jpg", title:"Coffee",discretion:" delicious roasted and ground coffee, specially designed for our dear customers "},
                    {src:"./images/n2.jpg", title:"Nuts",discretion:"high quality nuts, tasty every time from Aladdin Roastery to all parts of Germany"},
                    {src:"./images/cc.jpg", title:"Chocolate",discretion:" made from the finest cocoa beans and the highest European health and quality standards"}]

// let items = ["./images/13.jpeg","./images/14.jpeg","./images/15.jpeg"]
let Chocolate =    [{type:"Chocolate",src:"./images/13.jpeg", title:"Pistachio",discretion:"discretion"},
                        {type:"Chocolate",src:"./images/t1.jpeg", title:"Rocher",discretion:"Rocher & pistachio"},
                        {type:"Chocolate",src:"./images/15.jpeg", title:"Man & Salwa",discretion:"Man & Salwa"},
                        {type:"Chocolate",src:"./images/14.jpeg", title:"Rose",discretion:"discretion"},
                        {type:"Chocolate",src:"./images/t2.jpeg", title:"Wafer",discretion:"Wafer & pistachio"},
                        {type:"Chocolate",src:"./images/5.jpeg", title:"Baby set",discretion:"Baby set"},
                        {type:"Chocolate",src:"./images/ms.jpg", title:"Gift",discretion:"Gift"}]

let Nuts = [{type:"Nuts",src:"./images/p.jpg", title:"Pistachio",discretion:"Ppistachio"},
            {type:"Nuts",src:"./images/k.jpg", title:"Cashew",discretion:"Cashew"},
            {type:"Nuts",src:"./images/mix.jpg", title:"Mix nuts",discretion:"Mix nuts"},
            {type:"Nuts",src:"./images/l.jpg", title:"Almonds",discretion:"Almonds"},]  

let Coffee = [{type:"Coffee",src:"./images/c1.jpg", title:"Arabic coffee",discretion:"discretion"}] 

// render main Category part1
let renderMainCategory = () =>{
    mainCategory.forEach((ele,i) => {
        console.log("render list of Categories");
        // let sub = $('#sub-category').text(ele.title)
        const card = $ (`<div id=${i} class="card">
                            <div class="image">
                                <img src="${ele.src}" alt="${ele.title}" onClick="renderItems(${ele.title},${i})" > 
                            </div>
                            <div class="title">
                                <h3>${ele.title}</h3>
                            </div>
                            <div class="deception">
                                <p>${ele.discretion}</p>
                            </div>
                        </div>`);
        card.appendTo(categories); 
        // console.log("titel   el",ele.title);   
    });
    
}
renderMainCategory()

// render list of products part2
let renderItems =(category,index)=>{
    
    console.log("eee",mainCategory[index]?.title);
    products.empty()
    if( category )
        {
            $('#sub-category').text(mainCategory[index]?.title)
            category.forEach( (ele,i) => {
        
            console.log("render list of items");
            const card =$( `<div id=${i} class="item-card">
                            <div class="image">
                                <img src="${ele.src}">
                            </div>
                            <div class="title">
                                <h3>${ele.title}</h3>
                            </div>
                            <div class="deception">
                                <button>Add to cart</button>
                            <div>
                        </div>`)
            console.log("card ", card);
            card.appendTo(products);               
    });
}
}
renderItems()


// const loginForm = $('#myForm')
// let loginBut = $("#login")

// // let login = () =>{

// // }
// // $('#myForm').show();

// let flag = true;



// $("#login").on("click", function () {
//     console.log("login");
//   if (flag) {
//     loginForm.fadeIn("slow");
//     flag = false;
//   } else {
//     loginForm.fadeOut("slow");
//     flag = true;
//   }
// });

// hide and show

// const nuts = $("#category-1-")

// $(document).ready(function(){
//     $("#category-1-1").click(function(){
//         $(this).hide();
//     });
// });

// let flag = true;

// $("#category-1").on("click", function () {
//   if (flag) {
//     nuts.fadeIn("slow");
//     flag = false;
//   } else {
//     nuts.fadeOut("slow");
//     flag = true;
//   }
// });
