/** Chunk was on web.js **/
/** chunk id: 7864, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AT: () => l,
  gE: () => o,
  ly: () => u,
  zA: () => c
}), require("./638769.js"), require("./896048.js"), require("./284009.js");
var Chunk9865 = require("./9865.js"),
  Chunk661191 = require("./661191.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function o(e) {
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
  let a = s({}, t);
  if (null != i)
    for (let e of i) delete a[e];
  for (let t of n) a[t.id] = r.Wj(e, t);
  return a
}