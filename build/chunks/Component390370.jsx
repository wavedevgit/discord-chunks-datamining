/** Chunk was on web.js **/
/** chunk id: 390370, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk854627 = require("./854627.js"),
  Chunk837921 = require("./837921.js"),
  Chunk834981 = require("./834981.js"),
  Chunk475833 = require("./475833.jsx"),
  Chunk694164 = require("./694164.js");

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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk397927.euF;

function h(e) {
  let {
    otherUser: t,
    status: n
  } = e, s = (0, o.XC)(t.id, n), {
    avatarSrc: u,
    avatarDecorationSrc: f,
    eventHandlers: h
  } = (0, a.A)({
    userId: t.id,
    size: i._3J.SIZE_40,
    animateOnHover: true
  });
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", p(d({}, h), {
      children: (0, r.jsx)(_, {
        className: c.my,
        src: u,
        avatarDecoration: f,
        size: i._3J.SIZE_40,
        "aria-label": t.username
      })
    })), (0, r.jsxs)("div", {
      className: c.yt,
      children: [(0, r.jsx)("div", {
        className: c.Vx,
        children: (0, r.jsx)(l.A, {
          user: t
        })
      }), (0, r.jsx)(i.Text, {
        color: "text-muted",
        variant: "text-xs/normal",
        children: s
      })]
    })]
  })
}