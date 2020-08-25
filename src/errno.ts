const ResponseError = {
  OK: { code: 0, message: "OK", data: null },
  InternalServerError: { code: 10001, message: "Internal server error" },
};

function ResponseSuccess(data: any): object {
  let res = ResponseError.OK;
  res.data = data;
  return res;
}

function ResponseFail(err: Error): object {
  let res = ResponseError.InternalServerError;
  res.message = err.message;
  return res;
}

function SendResp(err: Error, data: any): void {
  if (err != null) {
  }
}

export { ResponseError, ResponseSuccess, ResponseFail, SendResp };
