/** Chunk was on web.js **/
/** chunk id: 301076, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk562129 = require("./562129.js"),
  Chunk871499 = require("./871499.js");

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

function l(e, t) {
  if (null == e) return {};
  var n, r, i = c(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function u(e) {
  var {
    isActivityActive: t,
    onMouseEnter: n,
    onMouseLeave: a,
    onClick: c
  } = e, u = l(e, ["isActivityActive", "onMouseEnter", "onMouseLeave", "onClick"]);
  let {
    Component: d,
    events: f,
    play: _
  } = (0, i.Z)("ActivityButton");
  return <o.d{...s({
    isTrayButton: true,
    isActive: t,
    color: t ? "green" : true,
    iconComponent: d,
    onMouseEnter: e => {
      null == n || n(e), f.onMouseEnter()
    },
    onMouseLeave: e => {
      null == a || a(e), f.onMouseLeave()
    },
    onClick: e => {
      null == c || c(e), _()
    }
  }, u)} />
}