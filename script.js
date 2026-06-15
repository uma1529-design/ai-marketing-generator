document
.getElementById("description")
.addEventListener("input",function(){

document.getElementById("count")
.innerText =
this.value.length + " Characters";

});
function generateContent(){

let business =
document.getElementById(
"businessName"
).value;

let type =
document.getElementById(
"businessType"
).value;

let desc =
document.getElementById(
"description"
).value;
let platform =
document.getElementById(
"platform"
).value;
if(
business === "" ||
desc === ""
){
alert("Fill all fields");
return;
}
let content = `
📱 Platform : ${platform}
📢 Marketing Caption

✨ Welcome to ${business}!

We provide top-quality ${type} services.

${desc}

🔥 Ad Copy

Looking for the best ${type}?

Choose ${business} today and experience excellence.

#Marketing
#BusinessGrowth
#DigitalMarketing
#${business.replace(/\s/g,'')}
`;

document.getElementById(
"output"
).innerText = content;

document.getElementById(
"result"
).style.display = "block";
}

function copyContent(){

let text =
document.getElementById(
"output"
).innerText;

navigator.clipboard.writeText(
text
);

alert("Content Copied!");
}
function downloadContent() {

let text =
document.getElementById("output").innerText;

if(text === ""){
alert("Generate content first!");
return;
}

let blob =
new Blob([text], {type: "text/plain"});

let link =
document.createElement("a");

link.href =
URL.createObjectURL(blob);

link.download =
"marketing-content.txt";

link.click();

}
function toggleDarkMode(){
document.body.classList.toggle("dark-mode");
}
