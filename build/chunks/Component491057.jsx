/** Chunk was on web.js **/
/** chunk id: 491057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qt: () => l,
  cG: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js");

function i(e, t) {
  if (null == e) return {};
  var n, r, i, s = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
    return s
  }
  if (s = a(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
  return s
}

function a(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
require("./64700.js");
let [s, o] = (0, require("./786300.jsx").A)();

function l(e) {
  let {
    children: t
  } = e, n = i(e, ["children"]);
  return (0, r.jsx)(s.Provider, {
    value: n,
    children: t
  })
}