const body = $('body')
let products = $('#products')
let categories = $('#main-category')

let mainCategory = [{src:"./images/c0.jpg", title:"Coffee",discretion:"Coffee"},
                    {src:"./images/n2.jpg", title:"Nuts",discretion:"Nuts"},
                    {src:"./images/cc.jpg", title:"Chocolate",discretion:"Chocolate"}]

// let items = ["./images/13.jpeg","./images/14.jpeg","./images/15.jpeg"]
let items =    [{src:"./images/13.jpeg", title:"title",discretion:"discretion"},
                {src:"./images/t1.jpeg", title:"title",discretion:"discretion"},
                {src:"./images/15.jpeg", title:"title",discretion:"discretion"},
                {src:"./images/14.jpeg", title:"title",discretion:"discretion"},
                {src:"./images/t2.jpeg", title:"title",discretion:"discretion"},
                {src:"./images/11.jpeg", title:"title",discretion:"discretion"}]


let renderMainCategory = () =>{
    mainCategory.forEach((ele,i) => {
        console.log("render list of Categories");
        const card = $ (`<div id=${i} class="card">
                            <div class="image">
                                <img src="${ele.src}" alt="${ele.title}">
                            </div>
                            <div class="title">
                                <h4>${ele.title}</h4>
                            </div>
                        </div>`);
        card.appendTo(categories);    
    });

}
renderMainCategory()

let renderItems =()=>{
    items.forEach( (ele,i) => {
        console.log("render list of items");
        const card =$( `<div id=${i} class="item-card">
                            <div class="image">
                                <img src="${ele.src}">
                            </div>
                            <div class="title">
                                <h1>${ele.title}</h1>
                            </div>    
                        </div>`)
            console.log("card ", card);
        card.appendTo(products)            
    });
}
renderItems()

// const nuts = $("#category-1-1")

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
