/** Chunk was on web.js **/
/** chunk id: 625137, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BL: () => s,
  C$: () => c,
  EO: () => u,
  y2: () => l
}), require("./642613.js"), require("./388685.js"), require("./512722.js");
var Chunk539600 = require("./539600.js"),
  Chunk709054 = require("./709054.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function s(e) {
  return e.sort(l), e
}

function l(e, t) {
  let n = e.guildId;
  return e.id === n ? t.id === n ? i.default.compare(e.id, t.id) : 1 : t.id === n ? false : e.position !== t.position ? t.position - e.position : i.default.compare(e.id, t.id)
}

function c(e, t) {
  return 0 > l(e, t)
}

function u(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
    i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : [];
  if (i.length + n.length === 0) return t;
  let o = a({}, t);
  if (null != i)
    for (let e of i) delete o[e];
  for (let t of n) o[t.id] = r.wD(e, t);
  return o
}