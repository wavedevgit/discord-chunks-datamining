/** Chunk was on web.js **/
/** chunk id: 975146, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk871499 = require("./871499.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk59213 = require("./59213.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function p(e) {
  let {
    className: t,
    count: n
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(c.root, c.comboIcon, t),
    children: [(0, r.jsx)(o.BFJ, {
      size: "md",
      color: "currentColor",
      className: c.icon
    }), null != n && (0, r.jsx)(o.Text, {
      color: "none",
      className: c.count,
      variant: "text-md/normal",
      children: n
    })]
  })
}

function h(e) {
  var {
    count: t
  } = e, n = f(e, ["count"]);
  return (0, r.jsx)(s.Z, d({
    label: l.intl.string(l.t["jNqDh/"]),
    iconComponent: e => {
      let {
        className: n
      } = e;
      return (0, r.jsx)(p, {
        className: n,
        count: t
      })
    },
    tooltipPosition: "bottom"
  }, n))
}