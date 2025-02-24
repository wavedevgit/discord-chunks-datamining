/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";

function r(e) {
  throw Error("Unhandled value: ".concat(e))
}

function i(e) {
  return null != e
}

function o(e, t) {
  return e.size === t.size && (0 === e.size && 0 === t.size || Array.from(e).every(e => t.has(e)))
}

function a(e, t) {
  return t.includes(e)
}
n.d(t, {
  Hi: () => a,
  OL: () => o,
  lm: () => i,
  vE: () => r
}), n(411104)