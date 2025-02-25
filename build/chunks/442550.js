/** Chunk was on web.js **/
"use strict";
n.d(t, {
  f: () => g
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(780384),
  l = n(481060),
  c = n(410030),
  u = n(388032),
  d = n(961493);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  let {
    src: t,
    size: n,
    constrain: o = "height",
    className: f,
    alt: p,
    fallbackSrc: g,
    "aria-hidden": m,
    showTooltip: E = !1
  } = e, v = (0, c.ZP)(), b = "".concat(n, "px"), [y, O] = i.useState(!1), [S, I] = i.useState(!1), T = null == g || S;
  if (null == t || y && T) return (0, r.jsx)(l.IMN, {
    size: "custom",
    width: "100%",
    height: "100%",
    color: (0, s.wj)(v) ? l.TVs.colors.WHITE : l.TVs.colors.BLACK,
    style: {
      maxWidth: b
    },
    className: a()(d.contentImage, f)
  });
  let N = "height" === o ? {
    maxWidth: b,
    height: b
  } : {
    maxWidth: b,
    minHeight: b
  };
  return (0, r.jsx)(l.ua7, {
    "aria-label": p,
    text: p,
    shouldShow: E,
    children: e => (0, r.jsx)("img", h(_({}, e), {
      style: N,
      className: a()(d.contentImage, f),
      src: y && null != g ? g : t,
      "aria-hidden": m,
      alt: null != p ? p : m ? void 0 : u.NW.string(u.t["2B/phI"]),
      onError: e => y ? I(!0) : O(!0)
    }))
  }, "content-image")
}