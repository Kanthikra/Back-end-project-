import express from "express";
import * as Sentry from "@sentry/node";
import loggingMiddleware from "./middleware/loggingMiddleware.js";
import propertyRoutes from "./routes/properties.js";
import bookingRoutes from "./routes/bookings.js";
import amenitiesRoutes from "./routes/amenities.js";
import hostRoutes from "./routes/hosts.js";
import reviewRoutes from "./routes/reviews.js";
import userRoutes from "./routes/users.js";
import logRoutes from "./routes/login.js";

Sentry.init({
  dsn: "https://e2237908aa059a1670bc3a99afca3e64@o4508342625566720.ingest.de.sentry.io/4508342634807376",
});

const app = express();

app.use(express.json());
app.use(loggingMiddleware);

app.use(Sentry.Handlers.requestHandler());

app.use("/properties", propertyRoutes);
app.use("/bookings", bookingRoutes);
app.use("/amenities", amenitiesRoutes);
app.use("/hosts", hostRoutes);
app.use("/reviews", reviewRoutes);
app.use("/users", userRoutes);
app.use("/login", logRoutes);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use(function (err, req, res, next) {
  console.log(err);

  res.status(500).json({
    message:
      "An error occurred on the server, please double-check your request!",
  });
});

app.use(Sentry.Handlers.errorHandler());

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
