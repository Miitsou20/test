// var prompt = require("prompt");
// prompt.start();
// console.log("I will now ask you for your name.");
// prompt.get(["name"], function(ess,res){
// console.log("Hello "+ res.name + ". How are you");
// });
// console.time(5);
// prompt.start();
// console.log("age");
// prompt.get("age", function(ess,res){
//     console.log("T'as" + res.age +"ans");
//});

a = 1
cb = function() {
    a = 2
}
cb()
setTimeout(function() {
    console.log('callback 1')
    setTimeout(function() {
        console.log('callback 2')
        setTimeout(function() {
            console.log('callback 3')
        }, 0)
        console.log('après callback 2')
    }, 0)
    console.log('après callback 1')
}, 0)
setTimeout(function() {
    console.log('-- callback 1')
    setTimeout(function() {
        console.log('-- callback 2')
        setTimeout(function() {
            console.log('-- callback 3')
        }, 0)
        console.log('-- après callback 2')
    }, 0)
    console.log('-- après callback 1')
}, 0)
console.log(a)


/*console.log("I will now ask you for your name.");
//process.stdin.setEncoding('utf8');
var name;
process.stdin.on('readable', function() {
    name = process.stdin.read();
    if (name !== null) {
        console.log("Hello ".concat(name, ". How are you"));
        process.exit();
    }
});*/