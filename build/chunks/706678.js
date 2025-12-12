/** Chunk was on web.js **/
/** chunk id: 706678, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./388685.js"), require("./415506.js"), require("./35282.js"), require("./781311.js");
var Chunk579092 = require("./579092.js");
require("./433517.js");
let i = new Chunk579092.Yd("useStateFromStores"),
  o = a();

function a() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 6e4;
  return module
}
let s = l();

function l() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 10;
  return module
}
let c = u();

function u() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 1e3;
  return module
}
let d = f();

function f() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "";
  return module
}
let p = m(),
  _ = null;

function m() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  return module
}
p && (_ = setInterval(b, o));
let h = new Map;

function g(e) {
  return "anonymous" !== e.name && ("" === d || e.name === d) && (e.execCount > c || e.execTime > s)
}

function E() {
  for (let [e, t] of h)
    if (g(exports)) returntrue;
  returnfalse
}

function b() {
  for (let [e, t] of(E() || "" !== d ? y() : i.log("No violators found"), h)) exports.warned = false, exports.execTime = 0, exports.execCount = 0
}
let y = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 34,
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 20,
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 20,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : module + exports + require + 6;
  for (let [o, a] of(i.log("|".padEnd(Chunk579092, "-") + "|"), i.log("| Consumers of `useStateFromStores` exceeding warning thresholds:".padEnd(Chunk579092, " ") + "|"), i.log("|".padEnd(Chunk579092, "-") + "|"), i.log("| ".concat("Function/Component Name".padEnd(module, " ")) + "| ".concat("Total Exec Time".padEnd(exports, " ")) + "| ".concat("Total Exec Count".padEnd(require, " "), "|")), i.log("|".padEnd(Chunk579092, "-") + "|"), h))("" !== d && o === d || g(a)) && i.log("| ".concat(o.padEnd(module, " ")) + "| ".concat((a.execTime.toFixed(2) + "ms").padEnd(exports, " ")) + "| ".concat(a.execCount.toString().padEnd(require, " "), "|"));
  i.log("|".padEnd(Chunk579092, "-") + "|")
}