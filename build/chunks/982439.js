/** Chunk was on web.js **/
/** chunk id: 982439, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => d
});
var Chunk569545 = require("./569545.js"),
  Chunk199902 = require("./199902.js"),
  Chunk858340 = require("./858340.js"),
  Chunk458725 = require("./458725.js"),
  Chunk442741 = require("./442741.js"),
  Chunk981631 = require("./981631.js");

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
    let e = Chunk199902.Z.getCurrentUserActiveStream();
    return null != module && null != Chunk858340.Z.getHookError(Chunk981631.K3D.SOUND) ? [u({
      type: Chunk458725.u.STREAM_SOUNDSHARE_FAILED
    }, (0, Chunk442741.rT)((0, Chunk569545.V9)(module)))] : true
  },
  makeErrorContextKey: e => "".concat(e.streamKey, ":").concat(e.mediaSessionId)
}