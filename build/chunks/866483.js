/** Chunk was on web.js **/
/** chunk id: 866483, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HY: () => _,
  Pf: () => d,
  RZ: () => u,
  m$: () => f
}), require("./388685.js"), require("./642613.js"), require("./570833.js"), require("./626135.js"), require("./981631.js");
let r = ["COLD_START"],
  i = "NO_REASONS",
  a = true,
  o = new Map;

function s(e) {
  var t;
  let n = null != (t = o.get(e)) ? t : 0;
  o.set(e, n + 1)
}

function l(e) {
  var t;
  let n = (null != (t = o.get(e)) ? t : 0) - 1;
  n <= 0 ? o.delete(e) : o.set(e, n)
}

function c(e) {
  return "BRIDGE:".concat(e)
}

function u() {
  return o.size > 0 || a
}

function d() {
  let e = [...a ? r : [], ...o.keys()].sort();
  return module.length > 0 ? module.join(",") : i
}

function f(e) {
  p(() => {
    s(e), l(c(e))
  })
}

function _(e) {
  p(() => l(e))
}

function p(e) {
  u(), a = false, e(), u()
}