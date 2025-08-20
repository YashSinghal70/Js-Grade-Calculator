// let eng=document.querySelector("#eng");
// let phy=document.querySelector("#phy");
// let chem=document.querySelector("#chem");
// let math=document.querySelector("#math");
// let comp=document.querySelector("#comp");

// let sum=document.querySelector("#sum");
// let per=document.querySelector("#per");
let remark=document.querySelector("#remark");
  
function Calculate(){
let eng=document.querySelector("#eng").value;
let phy=document.querySelector("#phy").value;
let chem=document.querySelector("#chem").value;
let math=document.querySelector("#math").value;
let comp=document.querySelector("#comp").value;
// why it odes not use
// let per=document.querySelector("#per");

// why it odes not use
let sum=document.querySelector("#sum").value;
// let remark=document.querySelector("#remark");
  console.log("hello")
  console.log(eng);
  //   why give error
    sum =Number(eng)+Number(phy)+Number(chem)+Number(math)+Number(comp)


//   document.querySelector("#sum").value =Number(eng)+Number(phy)+Number(chem)+Number(math)+Number(comp);
//   why give error
  document.querySelector("#per").value=(Number(eng)+Number(phy)+Number(chem)+Number(math)+Number(comp)) *100;

// document.querySelector("#per").value=(document.querySelector("#sum").value  / 500) *100;


}