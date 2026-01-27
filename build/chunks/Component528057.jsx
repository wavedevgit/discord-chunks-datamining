/** Chunk was on web.js **/
/** chunk id: 528057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk416696 = require("./416696.jsx"),
  Chunk709562 = require("./709562.jsx"),
  Chunk985018 = require("./985018.jsx");

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

function c(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = u(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function d(e) {
  return e ? o.intl.string(o.t.S5anIc) : o.intl.string(o.t.q3O3J8)
}

function f(e) {
  let {
    isSelfStream: t,
    centerButton: n = false,
    onMouseEnter: o,
    onMouseLeave: s
  } = e, u = c(e, ["isSelfStream", "centerButton", "onMouseEnter", "onMouseLeave"]), f = n ? a.l : a.A, {
    Component: p,
    events: _
  } = (0, i.c)("disable");
  return (0, r.jsx)(f, l({
    label: d(t),
    isTrayButton: false,
    iconComponent: p,
    onMouseEnter: e => {
      null == o || o(e), _.onMouseEnter()
    },
    onMouseLeave: e => {
      null == s || s(e), _.onMouseLeave()
    }
  }, u))
}