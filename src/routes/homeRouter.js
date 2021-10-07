const express = require('express');
const catchAsync = require('../../utils/catchAsync');

const router = express.Router();

router.all(
  '/',
  catchAsync(async (req, res, next) => {
    res.redirect(
      'https://documenter.getpostman.com/view/15594941/UUy1gT1t'
    );
  })
);
module.exports = router;