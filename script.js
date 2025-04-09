// FAQ toggle
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });
  
  // Chat toggle
  function toggleChat() {
    const chatBox = document.getElementById("chat-box");
    chatBox.style.display = chatBox.style.display === "block" ? "none" : "block";
  }
  
  // Message sending
  function sendMessage() {
    const input = document.getElementById("chat-input");
    const messages = document.getElementById("chat-messages");
    const text = input.value.trim();
    if (text) {
      const msg = document.createElement("div");
      msg.textContent = "Сіз: " + text;
      messages.appendChild(msg);
      input.value = "";
      messages.scrollTop = messages.scrollHeight;
    }
  }
  