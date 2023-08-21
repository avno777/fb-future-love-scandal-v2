import axios from "axios";
const db_url = "/db/comment-data.json";
function generateRandomId() {
  const characters = "0123456789";
  const length = 10;
  let randomId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
}
