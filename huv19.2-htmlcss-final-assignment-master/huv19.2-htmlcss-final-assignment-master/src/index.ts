const data=require("./mock.json");//importing json file
//var totalcartval=0;
//export default totalcartval;
import {object} from "./app";
let chc=0;
let totalcartval=object.totalcart;

const img1=require("../icons/Rectangle 36.svg");
const img2=require("../icons/Path 28-1.svg");
const img3=require("../icons/Path 20-1.svg");

//Course Detail Page fetch data from json
const CourseDetail=(i:number):String=>{
    let price=data.courses[i].price-data.courses[i].discount;
    let content:String=`<div class="left-detail">
    <img class="img-1" src="${img1}" height:80%>
    <div class="left-subdetail">
        <strong>${data.courses[i].title}</strong>
        <div id="left-subbutton">
            <button class="left-btn" type="button">${data.courses[i].tags[0]}</button>
            <button class="left-btn" type="button">${data.courses[i].tags[1]}</button>
        </div>
    </div>
    <p id="author">${data.courses[i].course_creator}</p>
    <img class="img-2"  src="${img2}" height=30px>
    <strong id="final-price" >Rs ${price}/-</strong>
   <div class="sub-inner"> <del class="dis" style="padding:30px;">Rs ${data.courses[i].price}/-</del></div>
   <button class="left-btn-1" id="left-btn-1" type="button">Add To Cart</button>
   <img  class="img-3" src="${img3}" height=30px>
</div>`;

return content;
}



let detailcourse:string=' ';
for(let i=0;i<data.courses.length;i++)
{
    detailcourse+=CourseDetail(i);

}
document.getElementById("l-detail")!.innerHTML=detailcourse;




//Add Action event for adding courses on cart
for(let i=0;i<data.courses.length;i++){
    var course=document.getElementsByClassName("left-btn-1");
  course[i]!.addEventListener('click',function(){
    
    let price=data.courses[i].price-data.courses[i].discount;
    totalcartval+=price;
    object.totalcart=totalcartval;
  console.log(object.totalcart);
    let inner:string=` <div id="cartcontent">
    <img class="img-1" src="${img1}" height:100%>
   
    <div id="text">
    <p>${data.courses[i].title}</p>
    <strong class="str" style=" margin-left:155px;margin-top:-50px;">Rs ${price}/-</strong>
    </div>
    </div>
    <div id="line1"">
                    
                </div>
    `;

    let checkout:string=`<div id="check">
    GO TO CHECKOUT
    </div>`;
if(chc===0){
document.getElementById("cart-inner")!.innerHTML=inner;
chc=1;
}
else{
    document.getElementById("cart-inner")!.innerHTML+=inner;
}
    detailcart=cartdetail();
    detailcart+=checkout;
    document.getElementById("cart-price")!.innerHTML=detailcart;
  });
  }






  let cartdetail=():String=>{
    let cart:String=` <div>
       
        
        <strong >Rs ${totalcartval}/-</strong>
        
    </div>`;
    return cart;
    };

    

let innercart=():String=>{
    let inner:string=` <br>
    <br>
    <em >
        Your cart is empty right now.Please add courses in your cart from the list.
    </em>
    `;
    return inner;
};






let innercartvar:string=' ';
innercartvar+=innercart();
document.getElementById("cart-inner")!.innerHTML=innercartvar;


let detailcart:string=' ';
detailcart+=cartdetail();
document.getElementById("cart-price")!.innerHTML=detailcart;




//Overlay Content

document.getElementById("ham-img")!.addEventListener('click',function(){
    document.getElementById("myNav")!.style.width = "65%";
});
document.getElementById("close")!.addEventListener('click',function(){
    document.getElementById("myNav")!.style.width = "0%";
})


