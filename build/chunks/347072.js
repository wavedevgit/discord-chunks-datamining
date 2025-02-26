/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => m
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(481060),
  s = n(357156),
  l = n(343747),
  c = n(388032),
  u = n(676709);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = g(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e) {
  var {
    guild: t,
    focused: n,
    onSelectItem: i,
    refreshEnabled: d
  } = e, _ = h(e, ["guild", "focused", "onSelectItem", "refreshEnabled"]);
  let {
    canCreateExpressions: g
  } = (0, s.XJ)(t);
  return (0, r.jsx)(a.ua7, {
    text: c.NW.string(c.t["fHo+z8"]),
    shouldShow: !g,
    children: e => (0, r.jsx)("li", p(f({
      className: u.soundButtonWrapper
    }, e), {
      children: (0, r.jsx)(a.kL8, p(f({}, _), {
        "aria-label": c.NW.formatToPlainString(c.t.c1qVYm, {
          guildName: t.name
        }),
        className: o()(d ? u.soundAddButtonRefresh : u.soundAddButton, {
          [u.focused]: n,
          [u.disabled]: !g
        }),
        onClick: () => null != i ? i() : (0, l.Z)(t.id),
        children: d ? (0, r.jsxs)("div", {
          className: u.soundAddInfoRefresh,
          children: [(0, r.jsx)(a.oFk, {
            size: "md",
            color: "currentColor",
            className: u.soundAddIconRefresh
          }), (0, r.jsx)(a.Text, {
            variant: "text-xs/medium",
            color: g ? void 0 : "text-muted",
            className: u.soundAddTextRefresh,
            children: c.NW.string(c.t["8Fu/S0"])
          })]
        }) : (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.qJs, {
            size: "md",
            color: "currentColor",
            className: u.soundAddIcon
          }), (0, r.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: g ? "header-primary" : "text-muted",
            children: c.NW.string(c.t["8Fu/S0"])
          })]
        })
      }))
    }))
  })
}