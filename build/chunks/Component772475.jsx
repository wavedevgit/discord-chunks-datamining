/** Chunk was on web.js **/
/** chunk id: 772475, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk709562 = require("./709562.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk380519 = require("./380519.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = p(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function _(e) {
  let {
    className: t,
    count: n
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(c.zr, c.Yd, t),
    children: [(0, r.jsx)(s.nFg, {
      size: "md",
      color: "currentColor",
      className: c.Kk
    }), null != n && (0, r.jsx)(s.Text, {
      color: "none",
      className: c.U9,
      variant: "text-md/normal",
      children: n
    })]
  })
}

function h(e) {
  let {
    count: t
  } = e, n = f(e, ["count"]);
  return (0, r.jsx)(o.A, d({
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