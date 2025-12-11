/** Chunk was on web.js **/
/** chunk id: 947707, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk199849 = require("./199849.jsx"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk249996 = require("./249996.jsx"),
  Chunk956229 = require("./956229.js");

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

function p(e) {
  let {
    title: t,
    value: n,
    onChange: a,
    options: c,
    isDisabled: u = false
  } = e;
  return (0, r.jsxs)("div", {
    className: l.selectItemRow,
    children: [(0, r.jsx)(o.Text, {
      variant: "text-md/medium",
      color: u ? "text-muted" : "text-strong",
      className: l.title,
      children: t
    }), (0, r.jsx)(i.y6, {
      variant: "text-only",
      className: l.select,
      options: c,
      value: n,
      onChange: e => a(e),
      renderOptionValue: e => {
        let [t] = e;
        return (0, r.jsx)(s.Z, {
          option: t
        })
      },
      renderOptionLabel: e => (0, r.jsx)(s.Z, {
        option: e
      }),
      isDisabled: u
    })]
  })
}

function _(e) {
  var {
    tooltipText: t
  } = e, n = d(e, ["tooltipText"]);
  return (0, r.jsx)(a.u, {
    text: t,
    asContainer: true,
    children: (0, r.jsx)(p, u({}, n))
  })
}

function m(e) {
  return "tooltipText" in e && null != e.tooltipText ? (0, r.jsx)(_, u({}, e)) : (0, r.jsx)(p, u({}, e))
}