/** Chunk was on web.js **/
/** chunk id: 564107, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => c,
  X: () => l
}), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js");

function a(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = s(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function s(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let o = Chunk64700.createContext(null);

function l() {
  let e = i.useContext(o);
  if (null == e) throw Error("Could not find context for useMessageAccessoriesComponentContext.");
  return e
}

function c(e) {
  let {
    children: t
  } = e, n = a(e, ["children"]);
  return (0, r.jsx)(o.Provider, {
    value: n,
    children: t
  })
}