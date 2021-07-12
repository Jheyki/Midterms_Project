
// created an object ot as "text" and chose a querySelector then locate the fancy class
const text = document.querySelector(".call")
// created an object to convert the "text" container value that is read by the .textContent
const strText = text.textContent;
// calling the "strText" value if the conversion is succesfull.
//console.log(strText)

// created an object to convert the string value to split and contain in the char value to a array 
const splitText = strText.split("")
//checking of the split Text
//console.log(splitText)

text.textContent=""; // set the "textContent" value to be empty 

for(let i=0; i < splitText.length; i++) {
    text.innerHTML += "<span>"+splitText[i]+"</span>";
}
let char = 0;
let timer = setInterval(onTick,50);

function onTick(){
    const span = text.querySelectorAll("span")[char];
    span.classList.add('fade');
    char++

    if(char === splitText.length){
        complete();
        return
    }
}
