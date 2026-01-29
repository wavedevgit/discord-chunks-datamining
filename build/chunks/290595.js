/** Chunk was on 2827 **/
/** chunk id: 290595, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => c,
  U: () => d
}), require("./65821.js");
var Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function a(e) {
  return null != e && null != e.body && i.h.dispatch({
    type: "UPDATE_CONSENTS",
    consents: function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, e.body)
  }), e.body
}

function o(e) {
  throw Error(e.status >= 500 && e.status <= 599 ? s.intl.string(s.t.cvJdtg) : null != e && null != e.body && null != e.body.message ? e.body.message : s.intl.string(s.t.cvJdtg))
}

function c() {
  return r.Bo.get({
    url: l.Rsh.SETTINGS_CONSENT,
    oldFormErrors: true,
    rejectWithError: false
  }).then(a, e => Promise.reject(Error(e.body.message)))
}

function d(e, t) {
  return r.Bo.post({
    url: l.Rsh.SETTINGS_CONSENT,
    body: {
      grant: e,
      revoke: t
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(a, o)
}