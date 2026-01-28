/** Chunk was on web.js **/
/** chunk id: 7864, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AT: () => u,
  ZW: () => p,
  d6: () => f,
  gE: () => c,
  ly: () => _,
  zA: () => d
}), require("./638769.js"), require("./896048.js"), require("./284009.js");
var Chunk317097 = require("./317097.js"),
  Chunk176201 = require("./176201.js"),
  Chunk9865 = require("./9865.js"),
  Chunk661191 = require("./661191.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e) {
  return e.sort(u), e
}

function u(e, t) {
  let n = e.guildId;
  return e.id === n ? t.id === n ? o.default.compare(e.id, t.id) : 1 : t.id === n ? false : e.position !== t.position ? t.position - e.position : o.default.compare(e.id, t.id)
}

function d(e, t) {
  return 0 > u(e, t)
}

function f(e, t) {
  return e.position !== t.position ? t.position - e.position : o.default.compare(e.id, t.id)
}

function p(e, t) {
  var n, a;
  return {
    id: t.id,
    name: t.name,
    guildId: e,
    colorString: 0 !== t.color ? (0, r.Hl)(t.color) : null,
    colorStrings: null != t.colors ? (0, i.K3)(t.colors) : null,
    icon: null != (n = t.icon) ? n : null,
    unicodeEmoji: null != (a = t.unicode_emoji) ? a : null
  }
}

function _(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : [],
    r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : [];
  if (r.length + n.length === 0) return t;
  let i = l({}, t);
  if (null != r)
    for (let e of r) delete i[e];
  for (let t of n) i[t.id] = a.Wj(e, t);
  return i
}