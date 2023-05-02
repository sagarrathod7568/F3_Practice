// var arr=[1,2,3,4,5,6, "Sagar", "Saajan", 'A'];

// console.log(arr[0]);
// arr.push("Rohit");
// console.log(arr);
// arr.pop();
// arr.shift();
// arr.unshift();
// console.log(arr);
// arr.forEach(function(i){
// console.log(i);
// })

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// document.write("I am Sagar");
// console.log("Sagar");

// var marks ={
//     sagar:23,
//     saajan:23
// }
// console.log(marks);

// function avg(a, b){
//     c=(a+b)/2;
//     return c;
// }
// var d=avg(5,15);
// console.log(d);

// arr.forEach(function(i){
//     console.log(i);
// })

// var i=arr.length;
// while(i>=0){
//     console.log(arr[i]);
//     i-=1;
// }

// function test(a , b){
//     if(a<=b){
//         for(let i=a;i<=b;i++){
//             // return i;
//             // console.log(i);
//         }
//     }
//     else{
//         for(let j=b;j<=a;j++){
//             // return j;
//             // console.log(j);
//         }
//     }
// }
// var ans = test(19, 9);
// console.log(ans);

// function btn1(){
//         console.log("Class 1 worked");
// }
// let temp = document.getElementsByClassName("class1")
// temp[0].classList.add("EmptyClass");

// let temp1 = document.getElementsByClassName("class2")
// temp1[1].classList.add("EmptyClass");

// let temp2 = document.getElementsByClassName("class2")
// temp2[0].style.background="Yellow";

// let h11 = document.getElementsByTagName("h1");
// h1[0].classList.add("EmptyClass1");

// let text = document.getElementById("btn2");
// console.log(text.innerText);
// console.log(text.innerHTML);

// let text = document.getElementsByClassName("class2");
// console.log(text[1].innerText);
// console.log(text[1].innerHTML);

// console.log(document.getElementsByClassName("class2")[0].innerHTML);

// console.log(document.getElementsByTagName('h1')[1].innerHTML);
// cls1 = document.getElementsByTagName('div')
// para = document.createElement('p');
// para.innerText="This is Click me1 Paragraph";
// cls1[0].appendChild(para);

// cls2 = document.getElementsByTagName('div')
// para2 = document.createElement('b');
// para2.innerText="This is bold Click me1 Paragraph";
// cls2[0].replaceChild(para2, para);

// function Clicked1() {
// // document.getElementsByClassName("class1")[0].style.background="green";
// document.getElementById("classid1").style.background="green";
// document.getElementsByTagName("p")[0].style.background="red";
//   cls1 = document.getElementsByTagName("div");
//   para = document.createElement("p");
//   para.innerText = "You Clicked on 1st Button ";
//   cls1[0].appendChild(para);
//   console.log("The Button 1 was Clicked");
// }
// function Clicked2() {
//     document.getElementsByClassName("class2")[0].style.background="Green"
//     document.getElementsByTagName("p")[1].style.background="red";
//     cant = document.getElementsByTagName('div');
//     textval=document.createElement('p');
//     textval.innerText="You Clicked on 2nd Button";
//     cant[1].appendChild(textval);

//   console.log("The Button 2 was Clicked");
// }
// function Clicked3() {
//     document.getElementsByClassName("class2")[1].style.background="Green"
//     document.getElementsByTagName("p")[2].style.background="red";
//     cant = document.getElementsByTagName('div');
//     textval=document.createElement('p');
//     textval.innerText="You Clicked on 3rd Button";
//     cant[2].appendChild(textval);

//   console.log("The Button 3 was Clicked");
// }

// classid1.addEventListener('click', function(){
//   console.log("You Clicked on ID1");
// })

// classid2.addEventListener('click', function(){
//   console.log("You Clicked on ID2")
// })

// classid3.addEventListener('click', function(){
  
//   console.log("You Clicked on ID3")
// })

// classid1.addEventListener('mouseover', function(){
//   console.log("Mouse on ID1");
// })
// classid1.addEventListener('mouseout',function(){
//   console.log("Mouse out ID1")
// })

// id4.addEventListener('mouseover', function(){
//   console.log("mouse on of ID4");
// })
// id4.addEventListener('click', function(){
//   console.log("mouse out of ID4");
// })
// let befor =  document.querySelectorAll('.class1')[0].innerHTM;
// classid1.addEventListener('mouseup', function(){
//   document.querySelectorAll('.class1')[0].innerHTML= befor ;
// })
// classid1.addEventListener('mousedown', function(){
//   document.querySelectorAll('.class1')[0].innerHTML= "I am Sagar" ;
// })

// sum=(a,b)=>{
//   return a+b;
// }

// avg=(a,b)=>{
//   return (a+b)/2;
// }

// sagar=()=>{
//   console.log("I am Sagar");
// }

// setTimeout(sagar, 3000);

// stop = setInterval(sagar, 2000);





roh=()=>{
  console.log("I am Rohit");
}
sag=()=>{
  console.log("I am Sagar");
}

setTimeout(roh, 4000);
stop = setInterval(sag, 4000);