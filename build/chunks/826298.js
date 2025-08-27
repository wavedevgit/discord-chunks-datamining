/** Chunk was on web.js **/
/** chunk id: 826298, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q1: () => l,
  hV: () => c,
  ky: () => s
}), require("./35282.js"), require("./125548.js");
var Chunk895924 = require("./895924.js"),
  Chunk809090 = require("./809090.jsx"),
  Chunk944877 = require("./944877.jsx"),
  Chunk689079 = require("./689079.js");
let s = e => e.type === r.Qi.BUILT_IN ? a.Z : i.Z;

function l(e) {
  return "".concat(e / 16, "rem")
}

function c(e, t) {
  let n = t,
    r = false,
    i = t.indexOf(":");
  if (i >= 0) {
    let e = t.lastIndexOf(" ", i);
    e >= 0 ? (t = t.substring(0, e), r = true) : t = t.substring(0, i)
  } else t = t.substring(0, t.length);
  let a = t.split(" ", o.Vd + 1);
  return a.length > o.Vd && (r = true, a.pop()), t = a.join(" "), (n.length > t.length || t.endsWith(" ")) && (r = true, t = t.trimEnd()), {
    text: t,
    parts: a,
    hasSpaceTerminator: r
  }
}