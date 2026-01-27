/** Chunk was on web.js **/
/** chunk id: 664929, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Rg: () => s,
  Yn: () => c,
  a8: () => l
}), require("./747238.js"), require("./183875.js");
var Chunk392054 = require("./392054.js"),
  Chunk991023 = require("./991023.jsx"),
  Chunk834968 = require("./834968.jsx"),
  Chunk73510 = require("./73510.js");
let s = e => e.type === r.Hf.BUILT_IN ? a.A : i.A;

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
  let a = t.split(" ", o.uA + 1);
  return a.length > o.uA && (r = true, a.pop()), t = a.join(" "), (n.length > t.length || t.endsWith(" ")) && (r = true, t = t.trimEnd()), {
    text: t,
    parts: a,
    hasSpaceTerminator: r
  }
}