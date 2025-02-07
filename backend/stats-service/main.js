const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5006;
const AZURE_FUNCTION_URL = process.env.AZURE_FUNCTION_URL || "https://myStatsFunction.azurewebsites.net/api/GetCourseStats";

app.get("/stats", async (req, res) => {
    try {
        const response = await axios.get(AZURE_FUNCTION_URL);
        res.json(response.data);
    } catch (error) {
        console.error("Eroare la apelarea funcției FaaS:", error);
        res.status(500).json({ error: "Eroare la obținerea numărului de cursuri" });
    }
});

app.listen(PORT, () => {
    console.log(`📊 Stats-Service rulează pe http://localhost:${PORT}`);
});
