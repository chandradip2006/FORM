document.getElementById("userForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = document.getElementById("age").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formMessage");

  const response = await fetch("/submit-form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, age, message })
  });

  const result = await response.text();
  status.style.color = response.ok ? "green" : "red";
  status.textContent = result;

  if (response.ok) {
    document.getElementById("userForm").reset();
  }
});
