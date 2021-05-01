const body = $('body')
let products = $('#products')
let categories = $('#main-category')

let mainCategory = [{src:"./images/c0.jpg", title:"Coffee",discretion:" delicious roasted and ground coffee, specially designed for our dear customers "},
                    {src:"./images/n2.jpg", title:"Nuts",discretion:"high quality nuts, tasty every time from Aladdin Roastery to all parts of Germany"},
                    {src:"./images/cc.jpg", title:"Chocolate",discretion:" made from the finest cocoa beans and the highest European health and quality standards"}]

// let items = ["./images/13.jpeg","./images/14.jpeg","./images/15.jpeg"]
let Chocolate =    [{src:"./images/13.jpeg", title:"Pistachio",discretion:"discretion"},
                        {src:"./images/t1.jpeg", title:"Rocher",discretion:"Rocher & pistachio"},
                        {src:"./images/15.jpeg", title:"Man & Salwa",discretion:"Man & Salwa"},
                        {src:"./images/14.jpeg", title:"Rose",discretion:"discretion"},
                        {src:"./images/t2.jpeg", title:"Wafer",discretion:"Wafer & pistachio"},
                        {src:"./images/5.jpeg", title:"Baby set",discretion:"Baby set"},
                        {src:"./images/ms.jpg", title:"Gift",discretion:"Gift"}]

let Nuts = [{src:"./images/p.jpg", title:"Pistachio",discretion:"Ppistachio"},
            {src:"./images/k.jpg", title:"Cashew",discretion:"Cashew"},
            {src:"./images/mix.jpg", title:"Mix nuts",discretion:"Mix nuts"},
            {src:"./images/l.jpg", title:"Almonds",discretion:"Almonds"},]  

let Coffee = [{src:"./images/c1.jpg", title:"Arabic coffee",discretion:"discretion"}] 

// render main Category part1
let renderMainCategory = () =>{
    mainCategory.forEach((ele,i) => {
        console.log("render list of Categories");
        const card = $ (`<div id=${i} class="card">
                            <div class="image">
                                <img src="${ele.src}" alt="${ele.title}" onClick="renderItems(${ele.title})" > 
                            </div>
                            <div class="title">
                                <h3>${ele.title}</h3>
                            </div>
                            <div class="deception">
                                <p>${ele.discretion}</p>
                            </div>
                        </div>`);
        card.appendTo(categories);    
    });

}
renderMainCategory()

// render list of products part2
let renderItems =(category)=>{
    products.empty()
    category.forEach( (ele,i) => {
        // if( category === undefined)
        // {
        //     console.log("first time");
        // }
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
        card.appendTo(products)            
    });
}
renderItems()


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
