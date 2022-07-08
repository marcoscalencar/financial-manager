require("module-alias/register");
import setupRoutes from "@/main/config/routes";
// import * as Sentry from "@sentry/node";
import "dotenv/config";
import express from "express";

// Sentry.init({
//   dsn: "https://16843aed427a4b33b40535ba49dad188@o1308509.ingest.sentry.io/6553876",
// });

const app = express();
// app.use(Sentry.Handlers.requestHandler());
// app.use(Sentry.Handlers.errorHandler());
// app.use(function onError(err, req, res, next) {
//   // The error id is attached to `res.sentry` to be returned
//   // and optionally displayed to the user for support.
//   res.statusCode = 500;
//   res.end(res.sentry + "\n");
// });

app.use(express.json());
setupRoutes(app);

app.listen(process.env.PORT, () =>
  console.log(`Server running on host http://localhost:${process.env.PORT}`)
);
