/** Chunk was on web.js **/
/** chunk id: 721141, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => l
});
var Chunk652896 = require("./652896.js"),
  Chunk487329 = require("./487329.js"),
  Chunk601900 = require("./601900.js");

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
let l = {
  getActiveErrors: e => {
    let {
      activeStreams: t
    } = e;
    return t.filter(e => null != e.errorCode).map(e => o({
      type: i.iy.SCREENSHARE_OS_ERROR,
      errorMessage: e.errorCode.toString()
    }, (0, a.id)((0, r._z)(e))))
  },
  makeErrorContextKey: e => "".concat(e.streamKey, ":").concat(e.mediaSessionId)
}