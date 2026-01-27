/** Chunk was on web.js **/
/** chunk id: 823598, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;

function a() {
  if (null == r) throw Error("Native dependencies have not been injected.")
}

function o(e) {
  r = e
}

function s() {
  return a(), r.supported()
}

function l(e) {
  return a(), r.supportsFeature(e)
}

function c(e) {
  a(), r.setProcessPriority(e)
}

function u() {
  return a(), null != i ? i : i = r.getVoiceEngine()
}
require.d(exports, {
  $b: () => l,
  $j: () => s,
  WQ: () => o,
  i0: () => c,
  lE: () => u
}), require("./65821.js")