
//import {totalcartval} from "./app";
import {object} from "./app";
let totalcartval=object.totalcart;
console.log(object.totalcart);

let cartprice=():String=>{
    let prc:String=` <div>
       
        
        <strong >Rs ${totalcartval} /-</strong>
        
    </div>`;
    return prc;
    };

    let cartprc:string=' ';
cartprc+=cartprice();


document.getElementById("pricecartpage")!.innerHTML=cartprc;