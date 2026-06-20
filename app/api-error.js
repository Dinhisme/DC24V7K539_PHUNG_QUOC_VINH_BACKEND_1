class ApiError extends Error {
  constructor(satusCode, massage) {
    super();
    this.statusCode = statusCode;
    this.massage = massagel;
  }
}

module.exports = ApiError;
