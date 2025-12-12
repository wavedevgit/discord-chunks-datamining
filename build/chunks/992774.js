/** Chunk was on web.js **/
/** chunk id: 992774, original params: e,t,n (module,exports,re quire) **/
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
  Zh: () => s,
  eJ: () => l,
  f3: () => o,
  p8: () => c,
  zS: () => u
}), require("./415506.js")