const {
  isArmstrong,
  isPrime,
  isPerfect,
  getFunFact,
} = require("../helper/mathProperties");

const classifyNumber = async (req, res) => {
  const { number } = req.query;

  if (!number || isNaN(number)) {
    return res.status(400).json({ number, error: true });
  }

  const num = parseInt(number);
  const properties = [];

  if (isArmstrong(num)) {
    properties.push("armstrong");
    properties.push(num % 2 === 0 ? "even" : "odd");
  }

  return res.json({
    number: num,
    is_prime: isPrime(num),
    is_perfect: isPerfect(num),
    properties,
    digit_sum: num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0),
    fun_fact: getFunFact,
  });
};

module.exports = { classifyNumber };
