/** Chunk was on web.js **/
/** chunk id: 866711, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk868903 = require("./868903.js"),
  Chunk15626 = require("./15626.js"),
  Chunk778328 = require("./778328.jsx"),
  Chunk46751 = require("./46751.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e) {
  let {
    listRef: t,
    label: n,
    disabledKeys: c,
    selectionMode: d = "none",
    layout: p = "default",
    items: _,
    onRemove: h,
    children: m
  } = e, [g, E] = i.useState(() => new Set), b = i.useContext(s._);
  return (0, r.jsxs)(a.CR, {
    "aria-label": n,
    id: null == b ? true : b.controlId,
    "aria-describedby": null == b ? true : b.describedById,
    "data-layout": p,
    className: l.WD,
    selectionMode: d,
    selectedKeys: g,
    onSelectionChange: E,
    disabledKeys: c,
    onRemove: h,
    children: [(0, r.jsx)(a.LY, {
      ref: t,
      className: l.Tw,
      children: _.map(e => (0, i.createElement)(o.v, f(u({}, e), {
        key: e.id,
        layout: p,
        accessibilityHint: e.accessibilityHint
      })))
    }), m]
  })
}