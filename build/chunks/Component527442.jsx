/** Chunk was on web.js **/
/** chunk id: 527442, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk931991 = require("./931991.js"),
  Chunk797179 = require("./797179.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk125049 = require("./125049.js"),
  Chunk113112 = require("./113112.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = E(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function b(e) {
  let {
    guild: t,
    focused: n,
    onSelectItem: i
  } = e, p = g(e, ["guild", "focused", "onSelectItem"]), {
    canCreateExpressions: h
  } = (0, l.nr)(t);
  return (0, r.jsx)(s.m, {
    text: u.intl.string(u.t["fHo+z1"]),
    shouldShow: !h,
    children: (0, r.jsx)("li", {
      className: d.H,
      children: (0, r.jsxs)(o.sqX, m(_({}, p), {
        "aria-label": u.intl.formatToPlainString(u.t.c1qVYh, {
          guildName: t.name
        }),
        className: a()(f.n4, {
          [f.in]: n,
          [f.r9]: !h
        }),
        onClick: () => null != i ? i() : (0, c.A)(t.id),
        children: [(0, r.jsx)(o.j96, {
          size: "sm",
          color: "currentColor"
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/semibold",
          color: h ? "currentColor" : "text-muted",
          children: u.intl.string(u.t["8Fu/S7"])
        })]
      }))
    })
  })
}