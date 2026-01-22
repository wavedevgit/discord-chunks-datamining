/** Chunk was on web.js **/
/** chunk id: 469177, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DQ: () => u,
  L7: () => d,
  qr: () => p,
  uG: () => f
}), require("./896048.js"), require("./638769.js"), require("./167789.js"), require("./954571.js"), require("./652215.js");
let r = ["COLD_START"],
  i = "NO_REASONS",
  a = true,
  s = new Map;

function o(e) {
  var t;
  let n = null != (t = s.get(e)) ? t : 0;
  s.set(e, n + 1)
}

function l(e) {
  var t;
  let n = (null != (t = s.get(e)) ? t : 0) - 1;
  n <= 0 ? s.delete(e) : s.set(e, n)
}

function c(e) {
  return "BRIDGE:".concat(e)
}

function u() {
  return s.size > 0 || a
}

function d() {
  let e = [...a ? r : [], ...s.keys()].sort();
  return e.length > 0 ? e.join(",") : i
}

function f(e) {
  _(() => {
    o(e), l(c(e))
  })
}

function p(e) {
  _(() => l(e))
}

function _(e) {
  u(), a = false, e(), u()
}