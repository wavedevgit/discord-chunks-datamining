/** Chunk was on web.js **/
/** chunk id: 254854, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk570140 = require("./570140.js");

function i(e, t, n) {
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
      i(e, t, n[t])
    })
  }
  return e
}
let a = {
  show(e, t, n, i, o) {
    r.Z.dispatch({
      type: "NOTICE_SHOW",
      notice: {
        id: o,
        type: e,
        message: t,
        buttonText: n,
        callback: i
      }
    })
  },
  dismiss(e) {
    r.Z.dispatch(o({
      type: "NOTICE_DISMISS"
    }, e))
  }
}