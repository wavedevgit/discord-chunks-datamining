/** Chunk was on web.js **/
/** chunk id: 212031, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk559868 = require("./559868.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
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

function l() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  !e && (0, i.ueM)() || (0, i.mMO)(async () => {
    let {
      default: e
    } = await n.e("50737").then(n.bind(n, 88872));
    return t => (0, r.jsx)(e, o({}, t))
  }, {
    modalKey: a.lb
  })
}