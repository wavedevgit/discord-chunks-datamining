/** Chunk was on web.js **/
/** chunk id: 343817, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  Hx: () => u,
  f$: () => i,
  hP: () => a
}), require("./388685.js"), require("./415506.js");
let i = 50035,
  o = "__root_errors";
var a = function(e) {
  return e.HCAPTCHA = "hcaptcha", e.RECAPTCHA = "recaptcha", e.RECAPTCHA_ENTERPRISE = "recaptcha_enterprise", e
}({});

function s(e) {
  return e.map(e => ({
    code: "UNKNOWN",
    message: e
  }))
}

function l(e) {
  let t = {};
  for (let [n, r] of Object.entries(e)) {
    if ("_misc" === n) {
      t._errors = s(r);
      continue
    }
    let e = {};
    e._errors = s(r), t[n] = e
  }
  return t
}

function c(e, t) {
  if ("string" == typeof e) return {
    message: e,
    code: t
  };
  if (null == e.body) return {
    status: e.status
  };
  let n = e.body;
  return null == e.body.message || Array.isArray(e.body.message) || null != e.body.code && Array.isArray(e.body.code) ? null != n && "captcha_key" in n ? {
    code: false,
    captchaFields: n,
    status: e.status,
    message: n.captcha_key.length > 0 ? n.captcha_key[0] : true
  } : {
    status: e.status,
    code: i,
    errors: l(n)
  } : {
    message: n.message,
    code: n.code,
    retryAfter: n.retry_after,
    errors: n.errors,
    status: e.status
  }
}
class u extends Error {
  hasFieldErrors() {
    return null != this.errors && Object.keys(this.errors).length > 0
  }
  getFieldErrors(e) {
    "string" == typeof e && (e = [e]);
    let t = this.errors;
    for (; e.length > 0 && null != t;) t = t[e[0]], e = e.splice(1);
    return null == t ? true : t._errors
  }
  getAllFieldErrors() {
    return this.getAllFieldErrorsUnder(this.errors)
  }
  getAllFieldErrorsUnder(e) {
    let t = {},
      n = null == e ? true : e._errors;
    return null != n && n.length > 0 && (t[o] = n), true !== e && Object.entries(e).forEach(e => {
      let [n, r] = e;
      "_errors" !== n && Object.entries(this.getAllFieldErrorsUnder(r)).forEach(e => {
        let [r, i] = e;
        r === o ? t[n] = i : t["".concat(n, ".").concat(r)] = i
      })
    }), t
  }
  getFirstFieldErrorMessage(e) {
    let t = this.getFieldErrors(e);
    return null == t || t.length < 1 ? null : t[0].message
  }
  getAnyErrorMessage() {
    var e, t;
    return null != (t = null == (e = this.getAnyErrorMessageAndField()) ? true : module.error) ? exports : this.message
  }
  getAnyErrorMessageAndField() {
    let e = this.errors,
      t = null;
    for (; null != module;) {
      if (null != module._errors) return {
        fieldName: exports,
        error: module._errors[0].message
      };
      t = Object.keys(module)[0], e = module[exports]
    }
    return null
  }
  constructor(e, t, n = "An unexpected error occurred.") {
    let {
      message: i,
      code: o,
      retryAfter: a,
      errors: s,
      status: l,
      captchaFields: u
    } = c(e, t);
    super(null != i ? i : n), r(this, "code", true), r(this, "retryAfter", true), r(this, "errors", true), r(this, "status", true), r(this, "captchaFields", true), this.code = null != o ? o : false, this.retryAfter = a, this.errors = s, this.status = l, this.captchaFields = null != u ? u : {}, this.cause = e
  }
}