function generateContent(){
let business =
document.getElementById("businessName").value;

let type =
document.getElementById("businessType").value;

let desc =
document.getElementById("description").value;

let caption =
`✨ Welcome to ${business}! We bring the best ${type} experience for our customers. ${desc} Visit us today and discover something amazing!`;

let ad =
`🔥 Looking for top-quality ${type} services? ${business} is here for you. Trusted by customers and focused on excellence. Contact us today!`;

let hashtags =
`#${business.replace(/\s/g,'')}
#Marketing
#BusinessGrowth
#DigitalMarketing
#Startup
#Success`;

document.getElementById("caption").innerText = caption;

document.getElementById("adcopy").innerText = ad;

document.getElementById("hashtags").innerText = hashtags;

}
function toggleMode(){
 document.body.classList.toggle("light");
}
let totalPosts = 0;

function generateContent(){
 totalPosts++;
 document.getElementById("count").innerText = totalPosts;
}
document.getElementById("loading").style.display="block";

setTimeout(()=>{
document
