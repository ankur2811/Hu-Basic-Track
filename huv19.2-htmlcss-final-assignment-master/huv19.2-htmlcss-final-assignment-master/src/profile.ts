let innercart=():String=>{
    let inner:string=` <p>How much of experience you have?</p>
    <input type="radio"  name="radio">
    <label class="container-radio">0-5
        
        <span class="checkmark-radio"></span>
      </label>
      <input type="radio" name="radio">
      <label class="container-radio">5-10
        
        <span class="checkmark-radio"></span>
      </label>

      <input type="radio" name="radio">
      <label class="container-radio">10 & Above
        
        <span class="checkmark-radio"></span>
      </label>

      <p>What is your expertise?</p>
      <input type="text" id="expertise">
</div>`;
    return inner;
};

let profession:string=' ';
profession+=innercart();

//Milestone 5 ,display expertise on click professor as profession
document.getElementById("checkradio").addEventListener("change",function(){
document.getElementById("radio-1")!.innerHTML=profession;
});