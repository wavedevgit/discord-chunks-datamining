/** Chunk was on web.js **/
/** chunk id: 64863, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk273611 = require("./273611.js");

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
var d = function(e) {
  return e.XXSMALL = "xxsmall", e.XSMALL = "xsmall", e.SMALL = "small", e.LARGE = "large", e
}(d || {});
let f = "indeterminate";

function p(e) {
  let t, {
      className: n,
      percent: a,
      size: c = "small",
      foregroundColor: d = s.A.unsafe_rawColors.BRAND_500.css,
      backgroundColor: p = "var(--interactive-background-active)",
      foregroundGradientColor: _,
      animate: h = true
    } = e,
    m = null != a ? a : 0;
  return t = null != _ ? {
    background: "linear-gradient(to right, ".concat(_[0], ", ").concat(_[1], ")")
  } : {
    backgroundColor: d
  }, (0, r.jsx)("div", {
    className: o()(n, l.progress, l[c]),
    style: {
      backgroundColor: p
    },
    children: m !== f && "number" == typeof m ? (0, r.jsx)("div", {
      className: o()(l.progressBar, l[c], {
        [l.animating]: h
      }),
      style: u({
        transform: "translate3d(".concat(Math.min(Math.max(0, m), 100) - 100, "%, 0, 0)")
      }, t)
    }) : (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)("div", {
        className: o()(l.indeterminateBar1, l[c], {
          [l.animating]: h
        }),
        style: t
      }), (0, r.jsx)("div", {
        className: o()(l.indeterminateBar2, l[c], {
          [l.animating]: h
        }),
        style: t
      })]
    })
  })
}
p.Sizes = d, p.INDETERMINATE = f