function display(){
    for (let i = 0; i < 5; i++) {
        console.log("HELLO");
    }
}

var count = 45;
var status = false;
var name = "Amartya";
var product = {
    "company": "TSystem",
    "title": "IMEDONE",
    "version": 2020
};

count++;

if (status) {
    console.log("Product is live on production");
} else {
    console.log("PRODUCT IS UNDER DEVELOPMENT"); // Fixed typo "Console" to "console"
}

console.log("WELCOME TO OUR SYSTEM");
display();
