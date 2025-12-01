/** Chunk was on web.js **/
/** chunk id: 947707, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk249996 = require("./249996.jsx"),
  Chunk467887 = require("./467887.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = d(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function f(e) {
  let {
    title: t,
    value: n,
    onChange: i,
    options: l,
    isDisabled: c = false
  } = e;
  return (0, r.jsxs)("div", {
    className: s.selectItemRow,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-md/medium",
      color: c ? "text-muted" : "text-primary",
      className: s.title,
      children: t
    }), (0, r.jsx)(a.q4e, {
      variant: "text-only",
      className: s.select,
      options: l,
      value: n,
      onChange: e => i(e),
      renderOptionValue: e => {
        let [t] = e;
        return (0, r.jsx)(o.Z, {
          option: t
        })
      },
      renderOptionLabel: e => (0, r.jsx)(o.Z, {
        option: e
      }),
      isDisabled: c
    })]
  })
}

function p(e) {
  var {
    tooltipText: t
  } = e, n = u(e, ["tooltipText"]);
  return (0, r.jsx)(i.u, {
    text: t,
    asContainer: true,
    children: (0, r.jsx)(f, c({}, n))
  })
}

function _(e) {
  return "tooltipText" in e && null != e.tooltipText ? (0, r.jsx)(p, c({}, e)) : (0, r.jsx)(f, c({}, e))
}