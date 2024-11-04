import express from "express";
import bodyParser from "body-parser";

const port = 8888;
const app = express();

app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.send("GET huselt");
});

app.post("/", (request, response) => {
  console.log(request.body);
  response.send(`Body huselt`);
});

app.delete("/users", (request, response) => {
  const { id } = request.body;
  console.log(id);

  const filteredUser = users.filter((user) => user.id !== id);
  response.json(filteredUser);
});

app.listen(port, () => {
  console.log(`server ajillaj bn http://localhost:${port}`);
});
