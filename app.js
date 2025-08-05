const PASSWORD = "3006";

function login() {
  const pw = document.getElementById("password").value;
  if (pw === PASSWORD) {
    document.getElementById("login-screen").classList.remove("active");
    document.getElementById("main-screen").classList.add("active");
    loadPlantCards();
  } else {
    document.getElementById("login-error").textContent = "비밀번호가 틀렸습니다.";
  }
}

function logout() {
  document.getElementById("main-screen").classList.remove("active");
  document.getElementById("login-screen").classList.add("active");
}

function backToMain() {
  document.getElementById("detail-screen").classList.remove("active");
  document.getElementById("main-screen").classList.add("active");
}

function loadPlantCards() {
  const container = document.getElementById("plant-cards");
  container.innerHTML = `
    <div class="card" onclick="viewDetail('먼나무')">
      <img src="images/tree-icon.png" alt="tree" />
      <h4>먼나무</h4>
      <p>1주 / H4.5×W4.0</p>
    </div>
    <div class="card" onclick="viewDetail('은엽아카시아')">
      <img src="images/tree-icon.png" alt="tree" />
      <h4>은엽아카시아</h4>
      <p>3주 / H2.0×W1.0</p>
    </div>
  `;
}

function viewDetail(name) {
  document.getElementById("main-screen").classList.remove("active");
  document.getElementById("detail-screen").classList.add("active");
  document.getElementById("plant-name").textContent = name;
  document.getElementById("install-date").textContent = "2025-08-01";
  document.getElementById("installer").textContent = "서안조경";

  // Placeholder history data
  document.getElementById("pest-history").textContent = "병충해 이력 없음";
  document.getElementById("replace-history").textContent = "교체 이력 없음";
  document.getElementById("notes").textContent = "특이사항 없음";
}
