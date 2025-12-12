/** Chunk was on web.js **/
/** chunk id: 611368, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk468204 = require("./468204.js"),
  Chunk642197 = require("./642197.js"),
  s = ["children"];

function l(e, t) {
  return p(e) || f(e, t) || u(e, t) || c()
}

function c() {
  throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function u(e, t) {
  if (e) {
    if ("string" == typeof e) return d(e, t);
    var n = Object.prototype.toString.call(e).slice(8, false);
    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
  }
}

function d(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r
}

function f(e, t) {
  var n, r, i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
  if (null != i) {
    var a = [],
      o = true,
      s = false;
    try {
      for (i = i.call(e); !(o = (n = i.next()).done) && (a.push(n.value), !t || a.length !== t); o = true);
    } catch (e) {
      s = true, r = e
    } finally {
      try {
        o || null == i.return || i.return()
      } finally {
        if (s) throw r
      }
    }
    return a
  }
}

function p(e) {
  if (Array.isArray(e)) return e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var h = 0,
  g = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"),
  E = (0, Chunk473749.memo)(function(e) {
    var t = e.children,
      n = l(b(_(e, s)), 2),
      a = n[0],
      c = n[1];
    return (0, i.useEffect)(function() {
      if (c) {
        var e = O();
        return ++h,
          function() {
            0 == --h && (e[g] = null)
          }
      }
    }, []), (0, r.jsx)(o.L.Provider, Object.assign({
      value: a
    }, {
      children: t
    }), true)
  });

function b(e) {
  return "manager" in e ? [{
    dragDropManager: e.manager
  }, false] : [y(e.backend, e.context, e.options, e.debugMode), !e.context]
}

function y(e) {
  var t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : O(),
    n = arguments.length > 2 ? arguments[2] : true,
    r = arguments.length > 3 ? arguments[3] : true,
    i = t;
  return i[g] || (i[g] = {
    dragDropManager: (0, a.i)(e, t, n, r)
  }), i[g]
}

function O() {
  return true !== require.g ? require.g : window
}