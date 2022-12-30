const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const server = require("./server");

// http://localhost:8080/sneaker/get-products

server();
app.use(express.json());
app.use(cors());

app.use(express.json({ limit: "5mb" }))
app.use(express.urlencoded({ limit: "5mb", extended: true }))

app.use("/sneaker", require("./Routes/sneaker"));
app.use("/inventory", require("./Routes/inventory"));
app.get('/', (req, res) => res.send('Hellow!!!'))

app.listen(PORT, () => {
  console.log("Your server is running at the port", PORT);
});
