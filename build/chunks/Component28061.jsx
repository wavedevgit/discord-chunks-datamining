/** Chunk was on web.js **/
/** chunk id: 28061, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk518950 = require("./518950.js"),
  Chunk871952 = require("./871952.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e) {
  var t;
  let {
    user: n,
    checked: i,
    onChange: c,
    disabled: d
  } = e, {
    avatarSrc: f,
    eventHandlers: _
  } = (0, s.Z)({
    userId: null == n ? true : n.id,
    size: a.EFr.SIZE_32
  }), p = null != (t = n.globalName) ? t : n.username;
  return (0, r.jsxs)("div", {
    className: l.container,
    children: [(0, r.jsx)("div", {
      className: l.userAvatar,
      children: (0, r.jsx)(a.qEK, u({
        className: o()({
          [l.muted]: d
        }),
        src: f,
        "aria-label": p,
        size: a.EFr.SIZE_32
      }, _))
    }), (0, r.jsxs)("div", {
      className: l.usernameContainer,
      children: [(0, r.jsx)(a.Text, {
        className: l.userName,
        color: d ? "text-muted" : "text-default",
        variant: "text-md/semibold",
        children: n.username
      }), (0, r.jsx)(a.Text, {
        className: l.userName,
        color: d ? "text-muted" : "text-secondary",
        variant: "text-xs/normal",
        children: "@".concat(p)
      })]
    }), (0, r.jsx)("div", {
      className: l.checkbox,
      children: (0, r.jsx)(a.XZJ, {
        disabled: d,
        value: i,
        onChange: (e, t) => c(n, t)
      })
    })]
  })
}