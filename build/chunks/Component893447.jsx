/** Chunk was on web.js **/
/** chunk id: 893447, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk536799 = require("./536799.js"),
  Chunk590154 = require("./590154.js"),
  Chunk179067 = require("./179067.jsx"),
  Chunk571527 = require("./571527.js");

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
    onRemove: m,
    children: h
  } = e, [g, E] = i.useState(() => new Set), b = i.useContext(a.z);
  return (0, r.jsxs)(o.QS, {
    "aria-label": n,
    id: null == b ? true : b.controlId,
    "aria-describedby": null == b ? true : b.describedById,
    "data-layout": p,
    className: l.tagGroup,
    selectionMode: d,
    selectedKeys: g,
    onSelectionChange: E,
    disabledKeys: c,
    onRemove: m,
    children: [(0, r.jsx)(o.PS, {
      ref: t,
      className: l.tagList,
      children: _.map(e => (0, i.createElement)(s.V, f(u({}, e), {
        key: e.id,
        layout: p,
        accessibilityHint: e.accessibilityHint
      })))
    }), h]
  })
}