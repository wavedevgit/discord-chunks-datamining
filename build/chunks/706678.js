/** Chunk was on web.js **/
/** chunk id: 706678, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require("./388685.js"), require("./415506.js"), require("./35282.js"), require("./781311.js");
var Chunk579092 = require("./579092.js");
require("./433517.js");
let o = new Chunk579092.Yd("useStateFromStores"),
  a = s();

function s() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 6e4;
  return module
}
let l = c();

function c() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 10;
  return module
}
let u = d();

function d() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 1e3;
  return module
}
let f = _();

function _() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "";
  return module
}(function e() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  return module
})() && (r = setInterval(g, a));
let p = new Map;

function h(e) {
  return "anonymous" !== e.name && ("" === f || e.name === f) && (e.execCount > u || e.execTime > l)
}

function m() {
  for (let [e, t] of p)
    if (h(exports)) returntrue;
  returnfalse
}

function g() {
  for (let [e, t] of(m() || "" !== f ? E() : o.log("No violators found"), p)) exports.warned = false, exports.execTime = 0, exports.execCount = 0
}
let E = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 34,
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 20,
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 20,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : module + exports + require + 6;
  for (let [i, a] of(o.log("|".padEnd(r, "-") + "|"), o.log("| Consumers of `useStateFromStores` exceeding warning thresholds:".padEnd(r, " ") + "|"), o.log("|".padEnd(r, "-") + "|"), o.log("| ".concat("Function/Component Name".padEnd(module, " ")) + "| ".concat("Total Exec Time".padEnd(exports, " ")) + "| ".concat("Total Exec Count".padEnd(require, " "), "|")), o.log("|".padEnd(r, "-") + "|"), p))("" !== f && Chunk579092 === f || h(a)) && o.log("| ".concat(Chunk579092.padEnd(module, " ")) + "| ".concat((a.execTime.toFixed(2) + "ms").padEnd(exports, " ")) + "| ".concat(a.execCount.toString().padEnd(require, " "), "|"));
  o.log("|".padEnd(r, "-") + "|")
}