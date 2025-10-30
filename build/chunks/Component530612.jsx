/** Chunk was on web.js **/
/** chunk id: 530612, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk897868 = require("./897868.js");

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

function f(e) {
  var t;
  let {
    user: n,
    checked: i,
    onChange: u,
    disabled: f
  } = e, {
    avatarSrc: _,
    eventHandlers: p
  } = (0, l.Z)({
    userId: null == n ? true : n.id,
    size: s.EFr.SIZE_32
  }), h = null != (t = n.globalName) ? t : n.username;
  return (0, r.jsxs)("div", {
    className: c.container,
    children: [(0, r.jsx)("div", {
      className: c.userAvatar,
      children: (0, r.jsx)(s.qEK, d({
        className: a()({
          [c.muted]: f
        }),
        src: _,
        "aria-label": h,
        size: s.EFr.SIZE_32
      }, p))
    }), (0, r.jsxs)("div", {
      className: c.usernameContainer,
      children: [(0, r.jsx)(s.Text, {
        className: c.userName,
        color: f ? "text-muted" : "text-default",
        variant: "text-md/semibold",
        children: n.username
      }), (0, r.jsx)(s.Text, {
        className: c.userName,
        color: f ? "text-muted" : "text-secondary",
        variant: "text-xs/normal",
        children: "@".concat(h)
      })]
    }), (0, r.jsx)("div", {
      className: c.checkbox,
      children: (0, r.jsx)(o.$q, {
        disabled: f,
        value: i,
        onChange: (e, t) => u(n, t)
      })
    })]
  })
}