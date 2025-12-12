/** Chunk was on web.js **/
/** chunk id: 160062, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Kl: () => a,
  Wv: () => l,
  cT: () => o,
  l1: () => s,
  xg: () => c
});
var Chunk174212 = require("./174212.js"),
  Chunk689079 = require("./689079.js");

function a(e) {
  let t = e.toLowerCase() === i.WO.toLowerCase(),
    n = e.toLowerCase() === i.Lu.toLowerCase();
  if (t || n) return t
}

function o(e, t) {
  var n;
  let r = null == e || null == (n = e.find(e => e.displayName === t)) ? true : n.value;
  if ("string" == typeof r) return r
}

function s(e, t) {
  var n;
  let r = null == e || null == (n = e.find(e => e.displayName === t)) ? true : n.value;
  if ("number" == typeof r) return r
}

function l(e, t, n) {
  return o(r.Z.getAutocompleteLastChoices(e, t), n)
}

function c(e, t, n) {
  return s(r.Z.getAutocompleteLastChoices(e, t), n)
}