/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  A: () => m,
  openUploadError: () => g
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(952265),
  s = n(466377),
  l = n(313201),
  c = n(355314),
  u = n(310752),
  d = n(731994),
  f = n(371100);

function p(e, t, n) {
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
      p(e, t, n[t])
    })
  }
  return e
}

function h(e) {
  let {
    title: t,
    help: n,
    showPremiumUpsell: i,
    transitionState: a,
    icons: p,
    fileSize: _,
    onClose: h
  } = e, m = (0, l.Dt)(), g = null != p ? p : d.J6;
  return i ? (0, r.jsx)(c.Z, {
    transitionState: a,
    onClose: h,
    fileSize: _
  }) : (0, r.jsx)(s.Y0, {
    size: s.Cg.DYNAMIC,
    "aria-labelledby": m,
    transitionState: a,
    children: (0, r.jsx)("div", {
      className: o()(f.uploadDropModal, f.error),
      children: (0, r.jsxs)("div", {
        className: f.inner,
        children: [(0, r.jsx)(u.Z, {
          icons: g
        }), (0, r.jsx)("div", {
          id: m,
          className: f.title,
          children: t
        }), (0, r.jsx)("div", {
          className: f.instructions,
          children: n
        })]
      })
    })
  })
}
let m = "UPLOAD_ERROR_MODAL_KEY";

function g(e) {
  (0, a.h7)(t => (0, r.jsx)(h, _({}, t, e)), {
    modalKey: m
  })
}