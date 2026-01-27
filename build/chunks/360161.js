/** Chunk was on web.js **/
/** chunk id: 360161, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $7: () => o,
  Bk: () => s,
  Xf: () => l,
  a5: () => a,
  lM: () => c
});
var Chunk166862 = require("./166862.js"),
  Chunk73510 = require("./73510.js");

function a(e) {
  let t = e.toLowerCase() === i.NH.toLowerCase(),
    n = e.toLowerCase() === i.oW.toLowerCase();
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
  return o(r.A.getAutocompleteLastChoices(e, t), n)
}

function c(e, t, n) {
  return s(r.A.getAutocompleteLastChoices(e, t), n)
}