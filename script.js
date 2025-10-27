document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(data),
  })
  .then(() => alert("✅ Message sent successfully!"))
  .catch((err) => alert("❌ Error: " + err.message));
});
