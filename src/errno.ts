const Response = {
  OK: { code: 0, message: "OK", data: null },
  InternalServerError: { code: 10001, message: "Internal server error" },
};

function ResponseSuccess(data: any): object {
  let res = Response.OK;
  res.data = data;
  return res;
}

function ResponseFail(err: Error): object {
  let res = Response.InternalServerError;
  res.message = err.message;
  return res;
}

export { Response, ResponseSuccess, ResponseFail };
