const chatForm = document.getElementById('chat-form');
const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-message');

chatForm.addEventListener('submit',function(e){
e.preventDefault();
const m = chatInput.value.trim()
const nm = document.createElement('div');
nm.className = "chat-text-u"
nm.innerHTML = `<strong>You:</strong> ${m}`
chatBox.appendChild(nm)
chatInput.value = ""
answer(m)

});

async function answer(question){
//fetch 
const res = await fetch('http://localhost:3005/getChat',{
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({message: question})
})

const data = await res.json();
//pop the response


const nm = document.createElement('div');
nm.className = "chat-text-v"
nm.innerHTML = `<strong>Veronica:</strong> ${data.message}`
chatBox.appendChild(nm)

}