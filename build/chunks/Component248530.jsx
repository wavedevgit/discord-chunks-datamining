/** Chunk was on web.js **/
/** chunk id: 248530, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => p
}), require("./896048.js"), require("./264879.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk575087 = require("./575087.js"),
  s = require.n(Chunk575087),
  Chunk827734 = require("./827734.js"),
  Chunk500804 = require("./500804.js");

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
var f = function(e) {
  return e.XSMALL = "xsmall", e.SMALL = "small", e.LARGE = "large", e
}(f || {});

function p(e) {
  let {
    className: t,
    percents: n,
    size: i = "small",
    foregroundColors: o = [l.A.unsafe_rawColors.BRAND_500.css],
    backgroundColor: u = "var(--interactive-background-active)",
    animate: f = true
  } = e, p = s()(null != n ? n : [], o).map((e, t) => {
    let n, [o, s] = e;
    return n = Array.isArray(s) ? {
      background: "linear-gradient(to right, ".concat(s[0], ", ").concat(s[1], ")")
    } : {
      backgroundColor: s
    }, (0, r.jsx)("div", {
      className: a()(c.progressBar, c[i], {
        [c.animating]: f
      }),
      style: d({
        transform: "translate3d(".concat(Math.min(Math.max(0, null != o ? o : 0), 100) - 100, "%, 0, 0)")
      }, n)
    }, t)
  }).reverse();
  return (0, r.jsx)("div", {
    className: a()(t, c.progress, c[i]),
    style: {
      backgroundColor: u
    },
    children: p
  })
}
p.Sizes = f