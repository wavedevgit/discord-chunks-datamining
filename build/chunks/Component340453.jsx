/** Chunk was on web.js **/
/** chunk id: 340453, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk998502 = require("./998502.js"),
  Chunk631885 = require("./631885.js"),
  Chunk329242 = require("./329242.jsx"),
  Chunk390493 = require("./390493.js");

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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK;

function h(e) {
  let {
    otherUser: t,
    status: n
  } = e, o = (0, s.j_)(t.id, n), {
    avatarSrc: u,
    avatarDecorationSrc: f,
    eventHandlers: h
  } = (0, a.Z)({
    userId: t.id,
    size: i.EFr.SIZE_40,
    animateOnHover: true
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", _(d({}, h), {
      children: (0, r.jsx)(p, {
        className: c.avatar,
        src: u,
        avatarDecoration: f,
        size: i.EFr.SIZE_40,
        "aria-label": t.username
      })
    })), (0, r.jsxs)("div", {
      className: c.userPreview,
      children: [(0, r.jsx)("div", {
        className: c.userContainerWithTimestamp,
        children: (0, r.jsx)(l.Z, {
          user: t
        })
      }), (0, r.jsx)(i.Text, {
        color: "text-muted",
        variant: "text-xs/normal",
        children: o
      })]
    })]
  })
}