/** Chunk was on web.js **/
/** chunk id: 924628, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => d,
  g: () => f
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function s(e, t, n) {
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
      s(e, t, n[t])
    })
  }
  return e
}

function c(e) {
  return null != e && null != e.body && i.Z.dispatch({
    type: "UPDATE_CONSENTS",
    consents: l({}, e.body)
  }), e.body
}

function u(e) {
  let t;
  throw Error(t = e.status >= 500 && e.status <= 599 ? o.intl.string(o.t.cvJdtg) : null != e && null != e.body && null != e.body.message ? e.body.message : o.intl.string(o.t.cvJdtg))
}

function d() {
  return Chunk544891.tn.get({
    url: Chunk981631.ANM.SETTINGS_CONSENT,
    oldFormErrors: true,
    rejectWithError: false
  }).then(c, e => Promise.reject(Error(e.body.message)))
}

function f(e, t) {
  return r.tn.post({
    url: a.ANM.SETTINGS_CONSENT,
    body: {
      grant: e,
      revoke: t
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(c, u)
}