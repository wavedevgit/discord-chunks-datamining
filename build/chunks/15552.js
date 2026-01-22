/** Chunk was on web.js **/
/** chunk id: 15552, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  let t = {};
  if (t.error_code = e.code, null != e.errors) {
    for (let n of Object.keys(e.errors)) t[n] = [e.getFirstFieldErrorMessage(n)];
    return t
  }
  return t.message = e.message, null != e.retryAfter && (t.retry_after = e.retryAfter), t
}

function i(e) {
  if (Object.keys(e.fields).length > 0) return e.fields;
  let t = {
    message: e.message
  };
  return null != e.retryAfter && (t.retry_after = e.retryAfter), t
}
require.d(exports, {
  W: () => r,
  p: () => i
}), require("./896048.js")