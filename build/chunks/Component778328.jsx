/** Chunk was on web.js **/
/** chunk id: 778328, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk868903 = require("./868903.js"),
  Chunk650682 = require("./650682.js"),
  Chunk827734 = require("./827734.js"),
  Chunk789645 = require("./789645.jsx"),
  Chunk834730 = require("./834730.jsx"),
  Chunk444806 = require("./444806.jsx"),
  Chunk46751 = require("./46751.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = m(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function g(e) {
  let {
    label: t,
    layout: n,
    isDisabled: d,
    icon: p,
    accessibilityHint: m
  } = e, g = h(e, ["label", "layout", "isDisabled", "icon", "accessibilityHint"]), E = [t, m].filter(Boolean).join(", ");
  return (0, r.jsx)(i.vw, _(f({}, g), {
    className: u.Tc,
    textValue: E,
    isDisabled: d,
    children: e => {
      let {
        allowsRemoving: i
      } = e;
      return (0, r.jsxs)(r.Fragment, {
        children: [null != p && (0, r.jsx)(c.P, {
          graphic: p,
          layout: n
        }), (0, r.jsx)(l.E, {
          variant: "inline" === n ? "text-sm/normal" : "text-md/normal",
          children: t
        }), i && (0, r.jsx)(a.$, {
          slot: "remove",
          children: (0, r.jsx)(s.P, {
            size: "inline" === n ? "xs" : "sm",
            color: o.A.colors.ICON_DEFAULT
          })
        })]
      })
    }
  }))
}