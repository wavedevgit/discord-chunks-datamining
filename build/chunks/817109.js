/** Chunk was on web.js **/
/** chunk id: 817109, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function i(e, t) {
  if ("string" == typeof e) return {
    message: e,
    code: t
  };
  if (null != e.body)
    if (null != e.body.message && !Array.isArray(e.body.message) && (null == e.body.code || !Array.isArray(e.body.code))) return {
      message: e.body.message,
      code: e.body.code,
      retryAfter: e.body.retry_after,
      status: e.status
    };
    else {
      let t = e.body,
        n = null != t ? Object.values(t)[0] : null;
      return {
        message: null != n ? n[0] : true,
        fields: t,
        status: e.status
      }
    } return {
    status: e.status
  }
}
require.d(exports, {
  H: () => a
}), require("./415506.js");
class a {
  getFieldMessage(e) {
    return null != this.fields[e] ? this.fields[e][0] : null
  }
  constructor(e, t, n = "An unexpected error occurred.") {
    r(this, "message", true), r(this, "code", true), r(this, "retryAfter", true), r(this, "fields", true), r(this, "error", true), r(this, "status", true);
    let {
      message: a,
      code: o,
      retryAfter: s,
      fields: l,
      status: c
    } = i(e, t);
    this.message = a || n, this.retryAfter = s, this.code = o || false, this.fields = l || {}, this.status = c, this.error = Error(a)
  }
}