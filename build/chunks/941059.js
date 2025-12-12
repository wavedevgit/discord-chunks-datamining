/** Chunk was on web.js **/
/** chunk id: 941059, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => p
});
var Chunk595490 = require("./595490.js"),
  i = require.n(Chunk595490),
  Chunk473749 = require("./473749.js"),
  Chunk689023 = require("./689023.js");

function s(e, t) {
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
  var n, r, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
  if (null != i) {
    var o = [],
      a = true,
      s = false;
    try {
      for (i = i.call(e); !(a = (n = i.next()).done) && (o.push(n.value), !t || o.length !== t); a = true);
    } catch (e) {
      s = true, r = e
    } finally {
      try {
        a || null == i.return || i.return()
      } finally {
        if (s) throw r
      }
    }
    return o
  }
}

function f(e) {
  if (Array.isArray(e)) return e
}

function p(e, t, n) {
  var r = s((0, o.useState)(function() {
      return t(e)
    }), 2),
    l = r[0],
    c = r[1],
    u = (0, o.useCallback)(function() {
      var r = t(e);
      !i()(l, r) && (c(r), n && n())
    }, [l, e, n]);
  return (0, a.L)(u), [l, u]
}