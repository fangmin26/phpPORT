const btn = document.querySelector(".submitBTN");
const inputs = document.querySelector("form");
btn.addEventListener("click", () => {
  Email.send({
    Host: "smtp.mailtrap.io",
    Username: "c765dc485b835c",
    Password: "8e5064afeebfd8",
    To: "fangimin226@gmail.com",
    From: inputs.elements["email"].value,
    Subject: "Contact Me Form",
    Body:
      inputs.elements["message"].value +
      "<br>" +
      inputs.elements["name"].value +
      "<br>" +
      inputs.elements["email"].value +
      "<br>" +
      inputs.elements["phone"].value,
  }).then((msg) => alert("The email successfully sent"));
});
