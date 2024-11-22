import * as Sentry from "@sentry/node";

const errorHandler = (err, req, res, next) => {
  Sentry.captureException(err);

  console.error(err);

  res.status(500).json({ message: "Something went wrong!" });
};

export default errorHandler;
