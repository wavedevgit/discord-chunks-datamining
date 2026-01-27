/** Chunk was on web.js **/
/** chunk id: 150934, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => _,
  S: () => p
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk460890 = require("./460890.jsx"),
  Chunk834730 = require("./834730.jsx"),
  Chunk568385 = require("./568385.jsx"),
  Chunk27192 = require("./27192.jsx");

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
  var t, n;
  let o = i.useContext(a.VO);
  return (null == o || null == (n = o.experiments) || null == (t = n.enabledExperiments) ? true : t.includes("mana-toggle-inputs")) ? (0, r.jsx)(s.J, u({}, e)) : (0, r.jsx)(_, u({}, e))
}

function _(e) {
  let {
    label: t,
    checked: n,
    onChange: a,
    labelType: s = "primary",
    description: c,
    leadingIcon: d
  } = e, p = null != t && "" !== t ? (0, r.jsxs)("div", {
    children: [(0, r.jsxs)("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "8px"
      },
      children: [null != d && i.createElement(d, {
        size: "sm",
        color: "currentColor",
        "aria-hidden": true,
        focusable: false
      }), (0, r.jsx)(o.E, {
        variant: "text-md/normal",
        color: "primary" === s ? "text-strong" : "text-subtle",
        children: t
      })]
    }), null != c && "" !== c && (0, r.jsx)(o.E, {
      variant: "text-sm/normal",
      color: "text-subtle",
      style: {
        marginTop: "4px"
      },
      children: c
    })]
  }) : null;
  return (0, r.jsx)(l.Kj, f(u({}, e), {
    value: n,
    onChange: (e, t) => null == a ? true : a(t),
    children: p
  }))
}