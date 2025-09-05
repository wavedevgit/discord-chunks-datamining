/** Chunk was on web.js **/
/** chunk id: 416867, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk192635 = require("./192635.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk818235 = require("./818235.js");

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
  let {
    transitionState: t,
    Icon: n,
    title: u,
    body: d,
    onClose: f
  } = e, _ = (0, o.Dt)();
  return (0, r.jsxs)(a.Y0X, {
    className: c.container,
    transitionState: t,
    "aria-labelledby": _,
    parentComponent: "ActionCompletedSuccessModal",
    children: [(0, r.jsxs)(a.hzk, {
      children: [(0, r.jsx)(s.Z, {
        Icon: n
      }), (0, r.jsx)(a.LZC, {
        size: 24
      }), (0, r.jsx)(a.X6q, {
        id: _,
        className: c.__invalid_title,
        variant: "heading-xl/semibold",
        children: u
      }), (0, r.jsx)(a.LZC, {
        size: 8
      }), (0, r.jsx)(a.Text, {
        className: c.body,
        variant: "text-sm/normal",
        children: d
      })]
    }), (0, r.jsx)(a.LZC, {
      size: 24
    }), (0, r.jsx)(i.zx, {
      size: i.zx.Sizes.MEDIUM,
      grow: false,
      onClick: f,
      children: l.intl.string(l.t["NX+WJC"])
    })]
  })
}

function _(e) {
  (0, a.h7j)(t => (0, r.jsx)(f, d({}, t, e)))
}