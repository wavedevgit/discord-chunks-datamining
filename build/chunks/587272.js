/** Chunk was on web.js **/
/** chunk id: 587272, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Am: () => s,
  MW: () => u,
  Mf: () => c,
  Or: () => i,
  Wv: () => o,
  ko: () => l
}), require("./35282.js"), require("./73800.js");
let r = ["gif", "webp", "png", "apng"];

function i(e) {
  return "type" in e && "image" === e.type && "string" == typeof e.src
}

function a(e) {
  if (!i(e) || null == e.src) returnfalse;
  let t = e.src.toLowerCase().split(".").pop();
  return null != t && r.includes(t)
}

function o(e) {
  return "type" in e && "video" === e.type && "string" == typeof e.src
}

function s(e) {
  return "type" in e && "lottie" === e.type && "function" == typeof e.lottie
}

function l(e) {
  return "type" in e && "rive" === e.type && "function" == typeof e.rive
}

function c(e) {
  return "type" in e && "dynamic" === e.type && "number" == typeof e.component
}

function u(e) {
  return null != e && (a(e) || o(e) || s(e) || l(e))
}