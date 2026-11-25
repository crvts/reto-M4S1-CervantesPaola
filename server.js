require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const nombreAlumno = process.env.NOMBRE_ALUMNO || "Estudiante";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/informacion", (req, res) => {
    res.json({
        mensaje: "¡Mi organizador de actividades está funcionando!",
        alumno: nombreAlumno
    });
});

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});