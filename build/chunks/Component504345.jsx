/** Chunk was on web.js **/
/** chunk id: 504345, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cK: () => l,
  hN: () => u,
  xW: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk652215 = require("./652215.js");

function s(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = o(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function o(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let l = Chunk64700.createContext({
  titleId: true,
  errorId: true,
  error: true,
  isFocused: true,
  setIsFocused: Chunk652215.tEg,
  hasValue: true,
  setHasValue: Chunk652215.tEg
});

function c() {
  return i.useContext(l)
}

function u(e) {
  let {
    children: t
  } = e, n = s(e, ["children"]);
  return (0, r.jsx)(l.Provider, {
    "data-migration-pending": true,
    value: n,
    children: t
  })
}