const express = require("express");
const path = require("path");
//const ejs = require("ejs");
//express tiene compatibilidad con ejs por defecto, no es necesario importarlo

//Initialization
const app = express();

//Settings
app.set("port", 5000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Middlewares
app.use(require("./middleware/uploadFiles"));

//Routes
app.use(require("./routes/index.routes"));

//Static files
app.use(express.static(path.join(__dirname, "public"))); //esta ruta podra ser visitada desde el cliente gracias a express.static()

//Listen
app.listen(app.get("port"), () => {
  console.log(`Server running in port ${app.get("port")}`);
});
