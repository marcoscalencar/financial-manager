import setupRoutes from "@/main/config/routes";
import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());
setupRoutes(app);

app.listen(process.env.PORT, () =>
  console.log(`Server running on host http://localhost:${process.env.PORT}`)
);
