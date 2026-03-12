const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");
const table = document.querySelector("table");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userMessage = input.value.trim();
  if (userMessage === "") return;

  // User message
  const userRow = document.createElement("tr");
  userRow.innerHTML = `
    <td align="right"><b>Jerry:</b> ${userMessage}</td>
  `;
  table.appendChild(userRow);

  input.value = "";

  // Bot reply
  setTimeout(() => {
    const botRow = document.createElement("tr");
    botRow.innerHTML = `
      <td><b>Tom:</b> ${getBotReply(userMessage)}</td>
    `;
    table.appendChild(botRow);
  }, 600);
});

function getBotReply(msg) {
  msg = msg.toLowerCase().trim();

  // ❤️ Emotional replies (GLOBAL)
  if (msg.includes("i love u") || msg.includes("i love you")) {
    return "I love you too ❤️ I will be with you in every point and situation and make you happy.";
  }

  if (msg.includes("i miss u") || msg.includes("i miss you")) {
    return "I miss you too babe 💖";
  }

  if (msg.includes("how are you") || msg.includes("how are u")) {
    return "I am fine 😊";
  }

  if (msg.includes("am i beautiful") || msg.includes("do i look beautiful")) {
    return "You are the most beautiful person I know in this world ✨";
  }

  if (msg.includes("i feel alone") || msg.includes("i am alone")) {
    return "Don't worry 💕 I am always there for you.";
  }

  // 🛠 Normal chatbot replies
  if (msg.includes("hi") || msg.includes("hello")) {
    return "Hi 👋 How can I help you today?";
  }

  if (msg.includes("editing")) {
    return "Interesting! What kind of editing are you interested in?";
  }

  if (msg.includes("apps")) {
    return "You can try CapCut, VN Editor, InShot, and Adobe Premiere Rush.";
  }

  if (msg.includes("thank")) {
    return "You're welcome 😊";
  }

  // 🔒 Always return something
  return "Sure! Can you please explain more?";
}
