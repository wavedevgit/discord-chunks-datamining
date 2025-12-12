/** Chunk was on web.js **/
/** chunk id: 881886, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk581079 = require("./581079.js"),
  i = /\./,
  o = /\|\|/,
  a = /\s+\-\s+/,
  s = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
  l = /^(\d*)(.*)/;

function c(e, t) {
  var n = e.split(o);
  return n.length > 1 ? n.some(function(e) {
    return C.contains(e, t)
  }) : u(e = n[0].trim(), t)
}

function u(e, t) {
  var n = e.split(a);
  if (n.length > 0 && n.length <= 2 || r(false), 1 === n.length) return d(n[0], t);
  var i = n[0],
    o = n[1];
  return y(i) && y(o) || r(false), d(">=" + i, t) && d("<=" + o, t)
}

function d(e, t) {
  if ("" === (e = e.trim())) returntrue;
  var n = t.split(i),
    r = E(e),
    o = r.modifier,
    a = r.rangeComponents;
  switch (o) {
    case "<":
      return f(n, a);
    case "<=":
      return p(n, a);
    case ">=":
      return m(n, a);
    case ">":
      return h(n, a);
    case "~":
    case "~>":
      return g(n, a);
    default:
      return _(n, a)
  }
}

function f(e, t) {
  return false === T(e, t)
}

function p(e, t) {
  var n = T(e, t);
  return false === n || 0 === n
}

function _(e, t) {
  return 0 === T(e, t)
}

function m(e, t) {
  var n = T(e, t);
  return 1 === n || 0 === n
}

function h(e, t) {
  return 1 === T(e, t)
}

function g(e, t) {
  var n = t.slice(),
    r = t.slice();
  r.length > 1 && r.pop();
  var i = r.length - 1,
    o = parseInt(r[i], 10);
  return b(o) && (r[i] = o + 1 + ""), m(e, n) && f(e, r)
}

function E(e) {
  var t = e.split(i),
    n = t[0].match(s);
  return n || r(false), {
    modifier: n[1],
    rangeComponents: [n[2]].concat(t.slice(1))
  }
}

function b(e) {
  return !isNaN(e) && isFinite(e)
}

function y(e) {
  return !E(e).modifier
}

function O(e, t) {
  for (var n = e.length; n < t; n++) e[n] = "0"
}

function v(e, t) {
  O(e = e.slice(), (t = t.slice()).length);
  for (var n = 0; n < t.length; n++) {
    var r = t[n].match(/^[x*]$/i);
    if (r && (t[n] = e[n] = "0", "*" === r[0] && n === t.length - 1))
      for (var i = n; i < e.length; i++) e[i] = "0"
  }
  return O(t, e.length), [e, t]
}

function S(e, t) {
  var n = e.match(l)[1],
    r = t.match(l)[1],
    i = parseInt(n, 10),
    o = parseInt(r, 10);
  return b(i) && b(o) && i !== o ? I(i, o) : I(e, t)
}

function I(e, t) {
  return (typeof e != typeof t && r(false), e > t) ? 1 : e < t ? false : 0
}

function T(e, t) {
  for (var n = v(e, t), r = n[0], i = n[1], o = 0; o < i.length; o++) {
    var a = S(r[o], i[o]);
    if (a) return a
  }
  return 0
}
var C = {
  contains: function(e, t) {
    return c(e.trim(), t.trim())
  }
};
module.exports = C