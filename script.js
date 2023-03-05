// var listOfChats = document.querySelector("[data-testid=chat-list]");
// var isBlurred = listOfChats.classList.contains("custom_blur");
// var myVar = document.querySelectorAll('img')
// console.log("myVar =>", myVar[0])
// console.log("listOfChats => " , listOfChats)
var isBlurred = false;
if(isBlurred){
    // listOfChats.classList.remove("custom_blur");
    // listOfChats.style.filter = "blur(0px)";
    isBlurred = true
    Array.from(document.querySelectorAll("img"))
    .forEach(function(val) {
        // val.style.display = 'block';
        val.style.filter = "blur(0px)";
});
    
}else{
    // listOfChats.classList.add("custom_blur");
    // listOfChats.style.filter =  "blur(4px)";
    isBlurred = false
    Array.from(document.querySelectorAll("img"))
    .forEach(function(val) {
        // val.style.display = 'none';
        val.style.filter = "blur(4px)";
});
}
