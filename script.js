const input = document.getElementById("email"); 
const result = document.getElementById("result");
const btn = document.getElementById("SubmitBtn");

btn.addEventListener("click", async () => {
  const phone = input.value.trim();

  const res = await fetch("/.netlify/functions/check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone })
  });

  const data = await res.json();

  if (data.approved) {
    result.innerHTML = `✅ تم التحقق بنجاح <br>
      <a href="https://chat.whatsapp.com/DTJSxREAvEDE3Bhi5kFhMZ" target="_blank">اضغط هنا للرابط</a>`;
  } else {
    result.innerHTML = "❌ الرقم غير معتمد";
  }
});