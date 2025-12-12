/** Chunk was on web.js **/
/** chunk id: 128854, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => c,
  c: () => l
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");

function o(e, t) {
  if (null == e) return {};
  var n, r, i = a(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function a(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let s = Chunk473749.createContext(null);

function l() {
  let e = Chunk473749.useContext(s);
  if (null == module) throw Error("Could not find context for useMessageAccessoriesComponentContext.");
  return module
}

function c(e) {
  var {
    children: t
  } = e, n = o(e, ["children"]);
  return (0, r.jsx)(s.Provider, {
    value: n,
    children: t
  })
}