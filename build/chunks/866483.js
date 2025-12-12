/** Chunk was on web.js **/
/** chunk id: 866483, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HY: () => p,
  Pf: () => d,
  RZ: () => u,
  m$: () => f
}), require("./388685.js"), require("./642613.js"), require("./761699.js"), require("./626135.js"), require("./981631.js");
let r = ["COLD_START"],
  i = "NO_REASONS",
  o = true,
  a = new Map;

function s(e) {
  var t;
  let n = null != (t = a.get(e)) ? t : 0;
  a.set(e, n + 1)
}

function l(e) {
  var t;
  let n = (null != (t = a.get(e)) ? t : 0) - 1;
  n <= 0 ? a.delete(e) : a.set(e, n)
}

function c(e) {
  return "BRIDGE:".concat(e)
}

function u() {
  return a.size > 0 || o
}

function d() {
  let e = [...o ? r : [], ...a.keys()].sort();
  return module.length > 0 ? module.join(",") : i
}

function f(e) {
  _(() => {
    s(e), l(c(e))
  })
}

function p(e) {
  _(() => l(e))
}

function _(e) {
  u(), o = false, e(), u()
}