/** Chunk was on web.js **/
/** chunk id: 601993, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Gb: () => s,
  RD: () => h,
  Rs: () => p,
  WA: () => f,
  _2: () => _,
  f5: () => d,
  fG: () => u,
  gL: () => c
});
var Chunk579806 = require("./579806.js"),
  Chunk405826 = require("./405826.js"),
  Chunk358085 = require("./358085.js");

function o() {
  return (null === r.Z || true === r.Z ? true : r.Z.spellCheck) != null
}

function s() {
  return (0, a.isDesktop)() && o()
}
let l = s() ? (0, Chunk405826.N)() : null;
async function c(e) {
  let t = await l;
  null != t && (t.enabled = e)
}
async function u(e) {
  let t = await l;
  null != t && t.setLearnedWords(e)
}
async function d(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = await l;
  return null != n && n.isMisspelled(e, t)
}
async function f(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 5,
    r = await l;
  return null == r ? [] : r.getCorrectionsForMisspelling(e, t).slice(0, n)
}
async function p(e) {
  let t = await l;
  null != t && t.replaceMisspelling(e)
}
async function _(e) {
  let t = await l;
  null != t && t.setAppLocale(e)
}

function h(e) {
  if (!o()) return () => {};
  let t = r.Z.spellCheck.on("spellcheck-result", e);
  return null != t ? t : () => {}
}