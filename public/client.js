const socket = io()



let name;
// let footer = document.querySelector('#footer')
// let form = document.querySelector('.form')
// let input = document.querySelector('input')
// let button = document.querySelector('.input')
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message_area')

do {
   Name = prompt('Please enter your name: ')
} while(!Name)


textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        sendMessage(e.target.value)
    }
})



function sendMessage(message) {
    let msg = {
        user: Name,
        message: message.trim()
    }
    

    appendMessage(msg, 'outgoing')
    textarea.value = ''

    socket.emit('message', msg)
}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')


    let markup = `
    <h4>${msg.user}</h4>
    <p>${msg.message}</p>
    `
    
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
    
}


socket.on('message', (msg) => {
    // console.log(msg)
    appendMessage(msg, 'incoming')

})





