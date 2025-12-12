/** Chunk was on web.js **/
/** chunk id: 975146, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function _(e) {
  let {
    className: t,
    count: n
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(c.root, c.comboIcon, t),
    children: [(0, r.jsx)(a.BFJ, {
      size: "md",
      color: "currentColor",
      className: c.icon
    }), null != n && (0, r.jsx)(a.Text, {
      color: "none",
      className: c.count,
      variant: "text-md/normal",
      children: n
    })]
  })
}

function m(e) {
  var {
    count: t
  } = e, n = f(e, ["count"]);
  return (0, r.jsx)(s.Z, d({
    label: l.intl.string(l.t["jNqDh/"]),
    iconComponent: e => {
      let {
        className: n
      } = e;
      return (0, r.jsx)(_, {
        className: n,
        count: t
      })
    },
    tooltipPosition: "bottom"
  }, n))
}