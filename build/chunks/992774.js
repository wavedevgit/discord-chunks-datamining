/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
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
n.d(t, {
  Zh: () => s,
  eJ: () => l,
  f3: () => a,
  p8: () => c,
  zS: () => u
}), n(411104)