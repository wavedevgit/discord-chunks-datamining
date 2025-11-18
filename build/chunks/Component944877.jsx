/** Chunk was on web.js **/
/** chunk id: 944877, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk689079 = require("./689079.js"),
  Chunk599444 = require("./599444.js");

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
  if (null == e) return {};
  var n, r, i = f(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let _ = e => {
  switch (e.id) {
    case s.bi.BUILT_IN:
      return o.SsZ;
    case s.bi.FRECENCY:
      return o.T39;
    default:
      return
  }
};

function p(e) {
  var {
    section: t,
    className: n,
    width: i,
    height: o,
    padding: s,
    isSelected: c,
    selectable: f = false
  } = e, p = d(e, ["section", "className", "width", "height", "padding", "isSelected", "selectable"]);
  let h = _(t);
  return (0, r.jsx)("div", {
    className: a()(l.wrapper, n, {
      [l.selectable]: f,
      [l.selected]: f && c
    }),
    style: {
      width: i,
      height: o,
      padding: null != s ? s : 0
    },
    children: null != h ? (0, r.jsx)(h, u({
      className: l.icon,
      color: "currentColor",
      size: "custom",
      width: i,
      height: o
    }, p)) : null
  })
}