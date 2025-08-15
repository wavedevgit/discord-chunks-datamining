/** Chunk was on web.js **/
/** chunk id: 569611, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hj: () => s,
  Pz: () => u,
  ZH: () => l
}), require("./539854.js"), require("./415506.js"), require("./49124.js"), require("./388685.js"), require("./583741.js");
var Chunk427786 = require("./427786.js"),
  i = require.n(Chunk427786);
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