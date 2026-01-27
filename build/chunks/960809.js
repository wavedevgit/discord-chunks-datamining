/** Chunk was on web.js **/
/** chunk id: 960809, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => l
});
var Chunk961350 = require("./961350.js"),
  Chunk803301 = require("./803301.js"),
  Chunk487329 = require("./487329.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
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
let l = {
  getActiveErrors: () => Object.values(i.A.getTimedoutVideos()).filter(e => {
    let {
      userId: t,
      videoStreamId: n
    } = e;
    return r.default.getId() === t && null == n
  }).map(e => s({
    type: a.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM
  }, e)),
  makeErrorContextKey: e => "".concat(e.mediaContext, ":").concat(e.userId)
}