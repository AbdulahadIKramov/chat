const chatInput = document.querySelector(".chat-input textarea")
const sendChatBtn = document.querySelector(".chat-input span")
const chatbox = document.querySelector(".chatbox")


let userMassage;

const createCharLi = (massge, className) => {
    const chatLi = document.createElement('li');
    chatLi.classList.add('chat', className);
    let chatContent = className === "outgoing" ? `<p>${massge}</p>` : `<span class="material-symbols-outlined">smart_toy</span> <p>${massge}</p>`
    chatLi.innerHTML = chatContent;
    return chatLi
}

const hadleChat = () => {
    userMassage = chatInput.value.trim();
   if(!userMassage) return;

   chatbox.append(createCharLi(userMassage, 'outgoing'))

   setTimeout(() => {
    chatbox.append(createCharLi('Thinkibg...', 'incoming'))
}, 600)
}



sendChatBtn.addEventListener("click", hadleChat)

function num(a) {
    console.log(Number(a));
    console.log(a);
}

num("Salom")