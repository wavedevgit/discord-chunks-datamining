/** Chunk was on 94678 **/
/** chunk id: 61748, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk308227 = require("./308227.js"),
  Chunk175380 = require("./175380.js"),
  Chunk512008 = require("./512008.js"),
  Chunk226775 = require("./226775.js"),
  Chunk875746 = require("./875746.js"),
  Chunk524011 = require("./524011.js"),
  a = Chunk308227.Symbol,
  f = Chunk175380("wks"),
  p = Chunk524011 ? a.for || a : a && a.withoutSetter || Chunk226775;
module.exports = function(t) {
  return s(f, t) || (f[t] = u && s(a, t) ? a[t] : p("Symbol." + t)), f[t]
}