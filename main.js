document.querySelector('.seven').addEventListener('click', function(){
    console.log(7)
    document.querySelector('.display').innerText += 7 
})

document.querySelector('.eight').addEventListener('click', function(){
    console.log(8)
    document.querySelector('.display').innerText += 8 
})

document.querySelector('.nine').addEventListener('click', function(){
    console.log(9)
    document.querySelector('.display').innerText += 9
})

document.querySelector('.four').addEventListener('click', function(){
    console.log(4)
    document.querySelector('.display').innerText += 4 
})

document.querySelector('.five').addEventListener('click', function(){
    console.log(5)
    document.querySelector('.display').innerText += 5 
})

document.querySelector('.six').addEventListener('click', function(){
    console.log(6)
    document.querySelector('.display').innerText += 6 
})

document.querySelector('.one').addEventListener('click', function(){
    console.log(1)
    document.querySelector('.display').innerText += 1 
})

document.querySelector('.two').addEventListener('click', function(){
    console.log(2)
    document.querySelector('.display').innerText += 2 
})

document.querySelector('.three').addEventListener('click', function(){
    console.log(3)
    document.querySelector('.display').innerText += 3 
})

document.querySelector('.zero').addEventListener('click', function(){
    console.log(0)
    document.querySelector('.display').innerText += 0 
})

document.getElementById('multiplyid').addEventListener('click', function(){
    console.log("*")
    document.querySelector('.display').innerText += "*" 
})

document.getElementById('divideid').addEventListener('click', function(){
    console.log("/")
    document.querySelector('.display').innerText += "/" 
})

document.getElementById('addid').addEventListener('click', function(){
    console.log("+")
    document.querySelector('.display').innerText += "+" 
})

document.getElementById('subtractid').addEventListener('click', function(){
    console.log("-")
    document.querySelector('.display').innerText += "-" 
})

document.getElementById('decimalid').addEventListener('click', function(){
    console.log(".")
    document.querySelector('.display').innerText += "." 
})

document.getElementById('clear').addEventListener('click', function(){
    console.log(" ")
    document.querySelector('.display').innerText = "" 
})

document.getElementById('equal').addEventListener('click', function(){
    console.log("=")
    document.querySelector('.display').innerText = eval(display.innerText)
})



