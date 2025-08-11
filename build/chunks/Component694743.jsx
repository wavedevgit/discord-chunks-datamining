/** Chunk was on web.js **/
/** chunk id: 694743, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk150923 = require("./150923.js");

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

function _(e) {
  let t, {
      className: n,
      percent: o,
      size: c = "small",
      foregroundColor: d = s.Z.unsafe_rawColors.BRAND_500.css,
      backgroundColor: _ = "var(--background-modifier-active)",
      foregroundGradientColor: p,
      animate: h = true
    } = e,
    m = null != o ? o : 0;
  return t = null != p ? {
    background: "linear-gradient(to right, ".concat(p[0], ", ").concat(p[1], ")")
  } : {
    backgroundColor: d
  }, (0, r.jsx)("div", {
    className: a()(n, l.progress, l[c]),
    style: {
      backgroundColor: _
    },
    children: m !== f && "number" == typeof m ? (0, r.jsx)("div", {
      className: a()(l.progressBar, l[c], {
        [l.animating]: h
      }),
      style: u({
        transform: "translate3d(".concat(Math.min(Math.max(0, m), 100) - 100, "%, 0, 0)")
      }, t)
    }) : (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)("div", {
        className: a()(l.indeterminateBar1, l[c], {
          [l.animating]: h
        }),
        style: t
      }), (0, r.jsx)("div", {
        className: a()(l.indeterminateBar2, l[c], {
          [l.animating]: h
        }),
        style: t
      })]
    })
  })
}
_.Sizes = d, _.INDETERMINATE = f