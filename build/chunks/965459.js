/** Chunk was on web.js **/
/** chunk id: 965459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => d
});
var Chunk652896 = require("./652896.js"),
  Chunk616356 = require("./616356.js"),
  Chunk877717 = require("./877717.js"),
  Chunk487329 = require("./487329.js"),
  Chunk601900 = require("./601900.js"),
  Chunk652215 = require("./652215.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}
let d = {
  getActiveErrors: () => {
    let e = i.A.getCurrentUserActiveStream();
    return null != e && null != a.A.getHookError(l.LU7.SOUND) ? [u({
      type: o.iy.STREAM_SOUNDSHARE_FAILED
    }, (0, s.id)((0, r._z)(e)))] : true
  },
  makeErrorContextKey: e => "".concat(e.streamKey, ":").concat(e.mediaSessionId)
}