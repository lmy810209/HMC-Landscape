const PASSWORD = "3006";

function login() {
  const pw = document.getElementById("password").value;
  if (pw === PASSWORD) {
    document.getElementById("login-screen").classList.remove("active");
    document.getElementById("planter-screen").classList.add("active");
  } else {
    document.getElementById("login-error").textContent = "비밀번호가 틀렸습니다.";
  }
}

function logout() {
  document.getElementById("planter-screen").classList.remove("active");
  document.getElementById("login-screen").classList.add("active");
}

// 아래 기능들은 나중에 Google Sheet 연동 후 작성 예정
function addPestHistory() {
  alert("병충해 이력 저장 (데모)");
}

function addReplaceHistory() {
  alert("교체 이력 저장 (데모)");
}

function addNote() {
  alert("특이사항 저장 (데모)");
}
