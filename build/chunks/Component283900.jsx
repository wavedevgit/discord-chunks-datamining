/** Chunk was on web.js **/
/** chunk id: 283900, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m,
  H: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk854627 = require("./854627.js"),
  Chunk837921 = require("./837921.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk241938 = require("./241938.js");

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
let _ = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk397927.euF,
  h = e => {
    let {
      user: t,
      avatarSize: n = i._3J.SIZE_48
    } = e, {
      avatarSrc: s,
      avatarDecorationSrc: c,
      eventHandlers: u
    } = (0, a.A)({
      userId: null == t ? true : t.id,
      size: n
    });
    return (0, r.jsx)("div", p(d({}, u), {
      children: (0, r.jsx)(_, {
        src: s,
        avatarDecoration: c,
        size: n,
        "aria-label": l.intl.formatToPlainString(o.default.kFj4h1, {
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
      className: c.b,
      children: (0, r.jsxs)("div", {
        className: c.M,
        children: [(0, r.jsx)(h, {
          user: t
        }), i, (0, r.jsx)(h, {
          user: n
        })]
      })
    })
  }