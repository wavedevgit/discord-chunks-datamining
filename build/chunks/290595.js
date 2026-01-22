/** Chunk was on web.js **/
/** chunk id: 290595, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => d,
  U: () => f
}), require("./65821.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function c(e) {
  return null != e && null != e.body && i.h.dispatch({
    type: "UPDATE_CONSENTS",
    consents: l({}, e.body)
  }), e.body
}

function u(e) {
  let t;
  throw Error(t = e.status >= 500 && e.status <= 599 ? s.intl.string(s.t.cvJdtg) : null != e && null != e.body && null != e.body.message ? e.body.message : s.intl.string(s.t.cvJdtg))
}

function d() {
  return r.Bo.get({
    url: a.Rsh.SETTINGS_CONSENT,
    oldFormErrors: true,
    rejectWithError: false
  }).then(c, e => Promise.reject(Error(e.body.message)))
}

function f(e, t) {
  return r.Bo.post({
    url: a.Rsh.SETTINGS_CONSENT,
    body: {
      grant: e,
      revoke: t
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(c, u)
}