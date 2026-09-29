const express = require("express");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const BACKEND = process.env.BACKEND_URL || "http://backend:5000";

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/send", async (req, res) => {
  try {
    const r = await fetch(BACKEND + "/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
      }),
    });
    const data = await r.json();
    if (!data.ok) {
      return res.status(400).send(page("Error", data.error || "Request failed", true));
    }
    return res.send(page("Done", "Data submitted successfully", false));
  } catch (e) {
    return res.status(500).send(page("Error", String(e), true));
  }
});

function page(title, msg, isErr) {
  const color = isErr ? "#a40000" : "#0a7a28";
  return `<!DOCTYPE html><html><body style="font-family:Arial;max-width:480px;margin:40px auto">
  <h2 style="color:${color}">${title}</h2>
  <p>${msg}</p>
  <p><a href="/">Back to form</a></p>
  </body></html>`;
}

app.listen(3000, "0.0.0.0", () => {
  console.log("frontend on 3000, backend", BACKEND);
});
