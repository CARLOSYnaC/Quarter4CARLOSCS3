const form = document.getElementById("signupForm");
const clubList = document.getElementById("clubList");

window.onload = function () {
  displayData();
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const studentID = document.getElementById("studentID").value;
  const fullName = document.getElementById("fullName").value;
  const birthDate = document.getElementById("birthDate").value;
  const email = document.getElementById("eMail").value;
  const phone = document.getElementById("phoneNum").value;
  const club = document.getElementById("club").value;
  const reason = document.getElementById("tArea").value;

  const livingType = document.querySelector(
    'input[name="livingtype"]:checked'
  )?.value;

  const newEntry = {
    studentID,
    fullName,
    birthDate,
    email,
    phone,
    livingType,
    club,
    reason
  };

  let data = JSON.parse(localStorage.getItem("clubData")) || [];

  data.push(newEntry);

  localStorage.setItem("clubData", JSON.stringify(data));

  displayData();

  form.reset();
});

function displayData() {
  const data = JSON.parse(localStorage.getItem("clubData")) || [];

  clubList.innerHTML = "";

  data.forEach((entry) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${entry.fullName}</h3>
      <p>ID: ${entry.studentID}</p>
      <p>Club: ${entry.club}</p>
      <p>Type: ${entry.livingType}</p>
      <p>Reason: ${entry.reason}</p>
      <hr>
    `;

    clubList.appendChild(div);
  });
}
