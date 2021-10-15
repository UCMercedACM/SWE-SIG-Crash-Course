export const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date();
  console.log(method, url, time);
  next();
};

export const serverError = (err, req, res, next) => {
  if (err.status) {
    console.error(err.stack);
  }
  res
    .status(err.status || 500)
    .json({ message: err.message || 'Internal Server Error' });
};

export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (err, req, res) => {
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};
