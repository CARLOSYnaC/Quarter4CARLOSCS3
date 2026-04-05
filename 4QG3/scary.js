let signUp = JSON.parse(localStorage.getItem("signUp")) || {};

function showStudents(){
  const list = document.getElementById("clubList");
  list.innerHTML = "";
  for (let key in signUp) {
    const char = signUp[key];
    const div = document.createElement("div");
  }
}

