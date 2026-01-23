/** Chunk was on web.js **/
/** chunk id: 256937, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk797686 = require("./797686.js"),
  i = /\./,
  a = /\|\|/,
  s = /\s+\-\s+/,
  o = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
  l = /^(\d*)(.*)/;

function c(e, t) {
  var n = e.split(a);
  return n.length > 1 ? n.some(function(e) {
    return T.contains(e, t)
  }) : u(e = n[0].trim(), t)
}

function u(e, t) {
  var n = e.split(s);
  if (n.length > 0 && n.length <= 2 || r(false), 1 === n.length) return d(n[0], t);
  var i = n[0],
    a = n[1];
  return b(i) && b(a) || r(false), d(">=" + i, t) && d("<=" + a, t)
}

function d(e, t) {
  if ("" === (e = e.trim())) returntrue;
  var n = t.split(i),
    r = E(e),
    a = r.modifier,
    s = r.rangeComponents;
  switch (a) {
    case "<":
      return f(n, s);
    case "<=":
      return p(n, s);
    case ">=":
      return h(n, s);
    case ">":
      return m(n, s);
    case "~":
    case "~>":
      return g(n, s);
    default:
      return _(n, s)
  }
}

function f(e, t) {
  return false === S(e, t)
}

function p(e, t) {
  var n = S(e, t);
  return false === n || 0 === n
}

function _(e, t) {
  return 0 === S(e, t)
}

function h(e, t) {
  var n = S(e, t);
  return 1 === n || 0 === n
}

function m(e, t) {
  return 1 === S(e, t)
}

function g(e, t) {
  var n = t.slice(),
    r = t.slice();
  r.length > 1 && r.pop();
  var i = r.length - 1,
    a = parseInt(r[i], 10);
  return y(a) && (r[i] = a + 1 + ""), h(e, n) && f(e, r)
}

function E(e) {
  var t = e.split(i),
    n = t[0].match(o);
  return n || r(false), {
    modifier: n[1],
    rangeComponents: [n[2]].concat(t.slice(1))
  }
}

function y(e) {
  return !isNaN(e) && isFinite(e)
}

function b(e) {
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

function A(e, t) {
  var n = e.match(l)[1],
    r = t.match(l)[1],
    i = parseInt(n, 10),
    a = parseInt(r, 10);
  return y(i) && y(a) && i !== a ? I(i, a) : I(e, t)
}

function I(e, t) {
  return (typeof e != typeof t && r(false), e > t) ? 1 : e < t ? false : 0
}

function S(e, t) {
  for (var n = v(e, t), r = n[0], i = n[1], a = 0; a < i.length; a++) {
    var s = A(r[a], i[a]);
    if (s) return s
  }
  return 0
}
var T = {
  contains: function(e, t) {
    return c(e.trim(), t.trim())
  }
};
module.exports = T