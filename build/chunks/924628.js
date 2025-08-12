/** Chunk was on 20501 **/
/** chunk id: 924628, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => c,
  g: () => d
}), require("./415506.js");
var Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  return null != e && null != e.body && r.Z.dispatch({
    type: "UPDATE_CONSENTS",
    consents: function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({}, e.body)
  }), e.body
}

function o(e) {
  let t;
  throw Error(e.status >= 500 && e.status <= 599 ? a.intl.string(a.t.cvJdtr) : null != e && null != e.body && null != e.body.message ? e.body.message : a.intl.string(a.t.cvJdtr))
}

function c() {
  return Chunk544891.tn.get({
    url: Chunk981631.ANM.SETTINGS_CONSENT,
    oldFormErrors: true,
    rejectWithError: false
  }).then(l, e => Promise.reject(Error(e.body.message)))
}

function d(e, t) {
  return i.tn.post({
    url: s.ANM.SETTINGS_CONSENT,
    body: {
      grant: e,
      revoke: t
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(l, o)
}