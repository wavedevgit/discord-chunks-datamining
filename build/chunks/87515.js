/** Chunk was on web.js **/
/** chunk id: 87515, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => p
});
var Chunk707040 = require("./707040.js"),
  i = require.n(Chunk707040),
  Chunk64700 = require("./64700.js"),
  Chunk218436 = require("./218436.js");

function o(e, t) {
  return f(e) || d(e, t) || c(e, t) || l()
}

function l() {
  throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function c(e, t) {
  if (e) {
    if ("string" == typeof e) return u(e, t);
    var n = Object.prototype.toString.call(e).slice(8, false);
    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
  }
}

function u(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r
}

function d(e, t) {
  var n, r, i = null == e ? null : "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
  if (null != i) {
    var a = [],
      s = true,
      o = false;
    try {
      for (i = i.call(e); !(s = (n = i.next()).done) && (a.push(n.value), !t || a.length !== t); s = true);
    } catch (e) {
      o = true, r = e
    } finally {
      try {
        s || null == i.return || i.return()
      } finally {
        if (o) throw r
      }
    }
    return a
  }
}

function f(e) {
  if (Array.isArray(e)) return e
}

function p(e, t, n) {
  var r = o((0, a.useState)(function() {
      return t(e)
    }), 2),
    l = r[0],
    c = r[1],
    u = (0, a.useCallback)(function() {
      var r = t(e);
      !i()(l, r) && (c(r), n && n())
    }, [l, e, n]);
  return (0, s.E)(u), [l, u]
}