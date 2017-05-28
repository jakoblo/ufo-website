function mailto() {
  var user = "naitsabes";
  var website = "krow.flovv";

  window.location.href =
    "mailto:" +
    user.split("").reverse().join("") +
    "@" +
    website.split("").reverse().join("");
}
