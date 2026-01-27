/** Chunk was on web.js **/
/** chunk id: 53943, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  As: () => u,
  IU: () => l,
  z8: () => s
}), require("./321073.js"), require("./65821.js"), require("./457529.js"), require("./896048.js"), require("./264879.js");
var Chunk677623 = require("./677623.js"),
  i = require.n(Chunk677623);
let a = 5e3,
  o = new(i())(a);

function s(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  let i = c(n);
  for ("string" == typeof e ? o.push({
      time: Date.now(),
      category: e,
      message: i
    }) : o.push({
      time: Date.now(),
      category: e.name,
      timing: e.timing,
      message: i
    }); o.length > a;) o.shift()
}

function l() {
  o.clear()
}

function c(e) {
  let t = "";
  for (let n of e) {
    let e = typeof n;
    "string" === e || "number" === e || "boolean" === e ? t += n + " " : n instanceof Error ? t += n.message + "\n" + n.stack + " " : t += JSON.stringify(n) + " "
  }
  return t
}

function u(e) {
  return o.toArray().filter(t => null == e || e.includes(t.category)).map(e => {
    let t = [];
    return t.push(new Date(e.time).toISOString()), null != e.timing && t.push(e.timing), t.push(e.category, e.message), t.join(" -> ")
  }).join("\n")
}