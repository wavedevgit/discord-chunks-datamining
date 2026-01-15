/** Chunk was on web.js **/
/** chunk id: 706678, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./388685.js"), require("./415506.js"), require("./35282.js"), require("./781311.js");
var Chunk579092 = require("./579092.js");
require("./433517.js");
let i = new Chunk579092.Yd("useStateFromStores"),
  a = o();

function o() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 6e4;
  return e
}
let s = l();

function l() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 10;
  return e
}
let c = u();

function u() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 1e3;
  return e
}
let d = f();

function f() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "";
  return e
}
let p = h(),
  _ = null;

function h() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  return e
}
p && (_ = setInterval(b, a));
let m = new Map;

function g(e) {
  return "anonymous" !== e.name && ("" === d || e.name === d) && (e.execCount > c || e.execTime > s)
}

function E() {
  for (let [e, t] of m)
    if (g(t)) returntrue;
  returnfalse
}

function b() {
  for (let [e, t] of(E() || "" !== d ? y() : i.log("No violators found"), m)) t.warned = false, t.execTime = 0, t.execCount = 0
}
let y = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 34,
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 20,
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 20,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : e + t + n + 6;
  for (let [a, o] of(i.log("|".padEnd(r, "-") + "|"), i.log("| Consumers of `useStateFromStores` exceeding warning thresholds:".padEnd(r, " ") + "|"), i.log("|".padEnd(r, "-") + "|"), i.log("| ".concat("Function/Component Name".padEnd(e, " ")) + "| ".concat("Total Exec Time".padEnd(t, " ")) + "| ".concat("Total Exec Count".padEnd(n, " "), "|")), i.log("|".padEnd(r, "-") + "|"), m))("" !== d && a === d || g(o)) && i.log("| ".concat(a.padEnd(e, " ")) + "| ".concat((o.execTime.toFixed(2) + "ms").padEnd(t, " ")) + "| ".concat(o.execCount.toString().padEnd(n, " "), "|"));
  i.log("|".padEnd(r, "-") + "|")
}