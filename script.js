document.getElementById("btn").addEventListener("click", () => {
  const Name = document.getElementById("name").value;
  const data = { player: Name };
  console.log(data);
  const val = fetch("/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  val
    .then((data) => data.json())
    .then((data) => {
      document.body.innerHTML = "";
      document.body.style.backgroundColor = "lightblue";
      document.body.innerHTML = `
      <div style="color:red;margin-left:20%;font-size:25px;font-weight: bold;">Đăng Ký thành công!</div>
      `;
    });
});
