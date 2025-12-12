/** Chunk was on web.js **/
/** chunk id: 128854, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => c,
  c: () => l
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js");

function a(e, t) {
  if (null == e) return {};
  var n, r, i = o(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function o(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
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
  } = e, n = a(e, ["children"]);
  return (0, r.jsx)(s.Provider, {
    value: n,
    children: t
  })
}