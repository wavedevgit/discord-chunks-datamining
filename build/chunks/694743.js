/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  E: () => p
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(692547),
  l = n(599676);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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
      percent: o,
      size: c = "small",
      foregroundColor: d = s.Z.unsafe_rawColors.BRAND_500.css,
      backgroundColor: p = "var(--background-modifier-active)",
      foregroundGradientColor: _,
      animate: h = !0
    } = e,
    m = null != o ? o : 0;
  return t = null != _ ? {
    background: "linear-gradient(to right, ".concat(_[0], ", ").concat(_[1], ")")
  } : {
    backgroundColor: d
  }, (0, r.jsx)("div", {
    className: a()(n, l.progress, l[c]),
    style: {
      backgroundColor: p
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
p.Sizes = d, p.INDETERMINATE = f