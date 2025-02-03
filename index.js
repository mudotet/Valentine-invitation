const yes_button = document.getElementById('yes_button');
const no_button = document.getElementById('no_button');

const messages = [
    "Bae có chắc không?",
    "Thật sự chắc chắn chứ??",
    "EM BÉ làm ơn...",
    "Hãy suy nghĩ về điều đó!",
    "Nếu em nói không, anh sẽ rất buồn...",
    "Anh sẽ rất buồn đấy :((",
    "Anh sẽ rất rất rất buồn...",
    "Được rồi, anh sẽ ko đòi hỏi...",
    "Đùa thôi, làm ơn nói có đi!"
];

yes_button.addEventListener('click', () => {
  window.location.href = './yes_page.html';
});

let messageIndex = Math.floor(Math.random() * messages.length);
no_button.addEventListener('click', () => {
    no_button.textContent = messages[messageIndex];
    messageIndex++;
    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }
    let cur_fontSize = parseFloat(window.getComputedStyle(yes_button).fontSize);
    yes_button.style.fontSize = (cur_fontSize * 2) + `px`;
});
