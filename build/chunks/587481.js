/** Chunk was on web.js **/
/** chunk id: 587481, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ls: () => s,
  uj: () => o,
  v1: () => a,
  y5: () => l
});
var Chunk506774 = require("./506774.js");
let i = "MediaPlayerVolume";

function a() {
  var e;
  let {
    volume: t
  } = null != (e = r.w.get(i)) ? e : {};
  return "number" != typeof t && (t = 1), t = Math.min(1, Math.max(0, t))
}

function s(e) {
  r.w.set(i, {
    volume: e,
    muted: o()
  })
}

function o() {
  var e;
  let {
    muted: t
  } = null != (e = r.w.get(i)) ? e : {};
  return "boolean" != typeof t && (t = false), t
}

function l(e) {
  r.w.set(i, {
    volume: a(),
    muted: e
  })
}