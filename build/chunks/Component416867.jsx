/** Chunk was on 81498 **/
/** chunk id: 416867, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  B: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk192635 = require("./192635.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk818235 = require("./818235.js");

function c(e) {
  let {
    transitionState: t,
    Icon: n,
    title: c,
    body: d,
    onClose: h
  } = e, p = (0, l.Dt)();
  return (0, i.jsxs)(s.Y0X, {
    className: u.container,
    transitionState: t,
    "aria-labelledby": p,
    parentComponent: "ActionCompletedSuccessModal",
    children: [(0, i.jsxs)(s.hzk, {
      children: [(0, i.jsx)(o.Z, {
        Icon: n
      }), (0, i.jsx)(s.LZC, {
        size: 24
      }), (0, i.jsx)(s.X6q, {
        id: p,
        className: u.__invalid_title,
        variant: "heading-xl/semibold",
        children: c
      }), (0, i.jsx)(s.LZC, {
        size: 8
      }), (0, i.jsx)(s.Text, {
        className: u.body,
        variant: "text-sm/normal",
        children: d
      })]
    }), (0, i.jsx)(s.LZC, {
      size: 24
    }), (0, i.jsx)(r.zx, {
      size: r.zx.Sizes.MEDIUM,
      grow: false,
      onClick: h,
      children: a.intl.string(a.t["NX+WJC"])
    })]
  })
}

function d(e) {
  (0, s.h7j)(t => (0, i.jsx)(c, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = i
      })
    }
    return e
  }({}, t, e)))
}