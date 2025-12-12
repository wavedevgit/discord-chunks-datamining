/** Chunk was on web.js **/
/** chunk id: 85707, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => f
});
var Chunk473749 = require("./473749.js"),
  Chunk7128 = require("./7128.js"),
  Chunk941059 = require("./941059.js");

function a(e, t) {
  return d(e) || u(e, t) || l(e, t) || s()
}

function s() {
  throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function l(e, t) {
  if (e) {
    if ("string" == typeof e) return c(e, t);
    var n = Object.prototype.toString.call(e).slice(8, false);
    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
  }
}

function c(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r
}

function u(e, t) {
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

function d(e) {
  if (Array.isArray(e)) return e
}

function f(e) {
  var t = (0, i.N)().getMonitor(),
    n = a((0, o.r)(t, e), 2),
    s = n[0],
    l = n[1];
  return (0, r.useEffect)(function() {
    return t.subscribeToOffsetChange(l)
  }), (0, r.useEffect)(function() {
    return t.subscribeToStateChange(l)
  }), s
}