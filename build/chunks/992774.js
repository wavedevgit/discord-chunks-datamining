/** Chunk was on web.js **/
/** chunk id: 992774, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r, i;

function o() {
  if (null == r) throw Error("Native dependencies have not been injected.")
}

function a(e) {
  r = e
}

function s() {
  return o(), r.supported()
}

function l(e) {
  return o(), r.supportsFeature(e)
}

function c(e) {
  o(), r.setProcessPriority(e)
}

function u() {
  return o(), null != i ? i : i = r.getVoiceEngine()
}
require.d(exports, {
  Zh: () => s,
  eJ: () => l,
  f3: () => a,
  p8: () => c,
  zS: () => u
}), require("./415506.js")