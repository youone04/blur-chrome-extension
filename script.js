var listOfChats = document.querySelector("[data-testid=chat-list]");
var isBlurred = listOfChats.classList.contains("custom_blur");

if(isBlurred){
    listOfChats.classList.remove("custom_blur");
    listOfChats.style.filter = "blur(0px)";
}else{
    listOfChats.classList.add("custom_blur");
    listOfChats.style.filter =  "blur(4px)";
}