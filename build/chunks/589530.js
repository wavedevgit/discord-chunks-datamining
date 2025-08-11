/** Chunk was on web.js **/
/** chunk id: 589530, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FC: () => o,
  Zj: () => l,
  jA: () => a,
  rs: () => s
});
var Chunk433517 = require("./433517.js");
let i = "MediaPlayerVolume";

function o() {
  var e;
  let {
    volume: t
  } = null != (e = Chunk433517.K.get(i)) ? module : {};
  return "number" != typeof exports && (t = 1), t = Math.min(1, Math.max(0, exports))
}

function a(e) {
  r.K.set(i, {
    volume: e,
    muted: s()
  })
}

function s() {
  var e;
  let {
    muted: t
  } = null != (e = Chunk433517.K.get(i)) ? module : {};
  return "boolean" != typeof exports && (t = false), exports
}

function l(e) {
  r.K.set(i, {
    volume: o(),
    muted: e
  })
}