module.exports = (err, req, res, next) => {
  console.log(err);
  if (err.name === 'UnauthorizedError') {
    res
      .status(401)
      .json({ unauthorized: 'You need a token to access that resource.' });
  } else {
    res.status(500).json(err);
  }
};
