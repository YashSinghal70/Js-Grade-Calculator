
function Calculate(){
let eng=document.querySelector("#eng").value;
let phy=document.querySelector("#phy").value;
let chem=document.querySelector("#chem").value;
let math=document.querySelector("#mathbiomarks").value;
let comp=document.querySelector("#comphindimarks").value;

// sum =Number(eng)+Number(phy)+Number(chem)+Number(math)+Number(comp);

// Suer Cannot enetr any empty filed
if (eng ==='' || phy ==='' || chem ==='' || math ==='' || comp ==='') {
    alert("Please Fill Every Marks");
    return; // stop calculation
  }

// Marks betwwn 0 and 100
  if ((eng < 0 || eng > 100) || (phy < 0 || phy > 100) || (chem < 0 || chem > 100) ||  (math< 0 || math > 100) || (comp < 0 || comp > 100)) {
    alert("Each subject mark must be between 0 and 100!");
    return; // stop calculation
  }

//   document.querySelector("#sum").value =Number(eng)+Number(phy)+Number(chem)+Number(math)+Number(comp);
  let total= Number(eng)+Number(phy)+Number(chem)+Number(math)+Number(comp);
  document.querySelector("#sum").value =total;





  let Percentage =((total / 500) * 100).toFixed(2);

  document.querySelector("#per").value=Percentage;

  if(Percentage >=91 && Percentage <=100){
document.querySelector("#remark").value="Outstanding"
document.querySelector("#grade").value="A1"

  }

else if(Percentage >=81 && Percentage <=90){
 document.querySelector("#remark").value="Excellent"
 document.querySelector("#grade").value="A2"

}

else if(Percentage >=71 && Percentage <=80){
 document.querySelector("#remark").value="Very Good"
 document.querySelector("#grade").value="B1"

}
else if(Percentage >=61 && Percentage <=70){
 document.querySelector("#remark").value="Good"
 document.querySelector("#grade").value="B2"

}
else if(Percentage >=51 && Percentage <=60){
 document.querySelector("#remark").value="Above Average"
 document.querySelector("#grade").value="C1"

}
else if(Percentage >=41 && Percentage <=50){
 document.querySelector("#remark").value="Average"
 document.querySelector("#grade").value="C2"

}
else if(Percentage >=34 && Percentage <=40){
 document.querySelector("#remark").value="Pass"
 document.querySelector("#grade").value="D"

}
else if(Percentage >33 ){
 document.querySelector("#remark").value="Fail"
 document.querySelector("#grade").value="E"

}


}

// function ChangeSub() {
//     let marks=document.querySelector("#marks")
//     if(marks.placeholder === "math")
//     {
//         marks.setAttribute("placeholder", "biology");
//     }
//     else{
//      marks.setAttribute("placeholder", "math");
//     }
// }


// Change Subjects betwwn two with placeholder : Maths And Biology
function ChangeSub(){
        let marks=document.querySelector("#mathbiomarks");
        let Subject=document.querySelector("#subject").value;

     if (Subject === "math") {
        marks.placeholder = "Enter Maths Marks";
    }
     else if (Subject === "biology") {
        marks.placeholder = "Enter Biology Marks";
    }

}

// Change Subjects betwwn two with placeholder : Computer And hindi
function ChangeSubjectHindiComputer(){
        let marks=document.querySelector("#comphindimarks");
        let Subject=document.querySelector("#subject2").value;

     if (Subject === "computer") {
        marks.placeholder = "Enter Computer Marks";
    }
     else if (Subject === "hindi") {
        marks.placeholder = "Enter Hindi Marks";
    }

}


function ResetMarks(){
    location.href="index.html";
}