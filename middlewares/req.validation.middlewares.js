const listNumberValidator = (req, res, next) => {
  const hasNotADigitRegExp = /\D/;
  const beginsFromZeroRegExp = /^0/;
  const { num } = req.params;
  if (num === undefined) {
    req.params.num = 1;
  } else {
    const hasNoNDigits = hasNotADigitRegExp.test(num);

    //number like 0123
    const isNumberBeginsFromZero =
      num.length > 1 && beginsFromZeroRegExp.test(num);

    if (hasNoNDigits || isNumberBeginsFromZero) {
      return res.status(404).json({ message: "Not found" });
    }
  }

  next();
};

const noteValidation = (req, res, next) => {
  const { firstName, lastName } = req.body.note;
  if (!firstName.trim() || !lastName.trim()) {
    res
      .status(400)
      .json({ message: "First Name & Last Name should not be empty" });
  }
  next();
};

module.exports = {
  listNumberValidator,
  noteValidation,
};
