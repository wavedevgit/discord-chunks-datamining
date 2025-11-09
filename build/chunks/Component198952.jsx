/** Chunk was on web.js **/
/** chunk id: 198952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m,
  r: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk998502 = require("./998502.js"),
  Chunk382402 = require("./382402.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk689446 = require("./689446.js");

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
let p = Chunk998502.ZP.getEnableHardwareAcceleration() ? Chunk481060.Xo$ : Chunk481060.qEK,
  h = e => {
    let {
      user: t,
      avatarSize: n = i.EFr.SIZE_48
    } = e, {
      avatarSrc: o,
      avatarDecorationSrc: c,
      eventHandlers: u
    } = (0, a.Z)({
      userId: null == t ? true : t.id,
      size: n
    });
    return (0, r.jsx)("div", _(d({}, u), {
      children: (0, r.jsx)(p, {
        src: o,
        avatarDecoration: c,
        size: n,
        "aria-label": l.intl.formatToPlainString(s.default.kFj4h1, {
          name: t.username
        })
      })
    }))
  },
  m = e => {
    let {
      currentUser: t,
      otherUser: n,
      children: i
    } = e;
    return (0, r.jsx)("div", {
      className: c.avatarPairContainer,
      children: (0, r.jsxs)("div", {
        className: c.avatarPair,
        children: [(0, r.jsx)(h, {
          user: t
        }), i, (0, r.jsx)(h, {
          user: n
        })]
      })
    })
  }