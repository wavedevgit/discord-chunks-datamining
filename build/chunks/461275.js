/** Chunk was on web.js **/
/** chunk id: 461275, original params: e,t,n (module,exports,re quire) **/
"use strict";
require("./896048.js"), require("./65821.js"), require("./747238.js"), require("./733351.js");
var Chunk118356 = require("./118356.js");
require("./506774.js");
let i = new Chunk118356.Vy("useStateFromStores"),
  a = s();

function s() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 6e4;
  return e
}
let o = l();

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
p && (_ = setInterval(y, a));
let m = new Map;

function g(e) {
  return "anonymous" !== e.name && ("" === d || e.name === d) && (e.execCount > c || e.execTime > o)
}

function E() {
  for (let [e, t] of m)
    if (g(t)) returntrue;
  returnfalse
}

function y() {
  for (let [e, t] of(E() || "" !== d ? b() : i.log("No violators found"), m)) t.warned = false, t.execTime = 0, t.execCount = 0
}
let b = function() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 34,
    t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 20,
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 20,
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : e + t + n + 6;
  for (let [a, s] of(i.log("|".padEnd(r, "-") + "|"), i.log("| Consumers of `useStateFromStores` exceeding warning thresholds:".padEnd(r, " ") + "|"), i.log("|".padEnd(r, "-") + "|"), i.log("| ".concat("Function/Component Name".padEnd(e, " ")) + "| ".concat("Total Exec Time".padEnd(t, " ")) + "| ".concat("Total Exec Count".padEnd(n, " "), "|")), i.log("|".padEnd(r, "-") + "|"), m))("" !== d && a === d || g(s)) && i.log("| ".concat(a.padEnd(e, " ")) + "| ".concat((s.execTime.toFixed(2) + "ms").padEnd(t, " ")) + "| ".concat(s.execCount.toString().padEnd(n, " "), "|"));
  i.log("|".padEnd(r, "-") + "|")
}