/** Chunk was on web.js **/
/** chunk id: 770278, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m,
  f: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk593315 = require("./593315.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}
let _ = 8;
var p = function(e) {
  return e.DARK = "DARK", e.LIGHTBOX = "LIGHTBOX", e.IMMERSIVE = "IMMERSIVE", e.SUBTLE = "SUBTLE", e.BLUR = "BLUR", e.TOP_RADIAL = "TOP_RADIAL", e
}({});

function h() {
  let e = (0, Chunk481060.dQu)(Chunk481060.TVs.colors.BG_BACKDROP_NO_OPACITY).spring({
      opacity: .25
    }),
    t = (0, Chunk481060.dQu)(Chunk481060.TVs.colors.BG_BACKDROP).spring();
  return {
    SUBTLE: module,
    DARK: exports,
    BLUR: exports,
    IMMERSIVE: (0, Chunk481060.dQu)(Chunk481060.TVs.colors.BG_BACKDROP_IMMERSIVE).spring(),
    LIGHTBOX: (0, Chunk481060.dQu)(Chunk481060.TVs.colors.OVERLAY_BACKDROP_LIGHTBOX).spring(),
    TOP_RADIAL: exports
  }
}
let m = Chunk73800.forwardRef(function(e, t) {
  let {
    backdropStyle: n = "SUBTLE",
    backdropInstant: i = false,
    zIndexBoost: o = 0,
    LayerComponent: d,
    isVisible: p,
    onClose: m
  } = e, g = h()[n], E = (0, l.dQu)(l.TVs.colors.BG_BACKDROP_NO_OPACITY).spring({
    opacity: 0
  }), b = "BLUR" === n ? _ : 0, y = {
    background: E,
    backdropFilter: "blur(0px)"
  }, O = {
    background: g,
    backdropFilter: "blur(".concat(b, "px)")
  }, v = (0, c.Z)(i), I = (0, l.Yzy)(p, {
    keys: e => e ? "backdrop" : "empty",
    config: {
      duration: i || v ? 0 : 200
    },
    from: y,
    enter: O,
    leave: y
  }, "animate-always");
  if (null == d) {
    let e = {
      zIndex: 1e3 + o
    };
    return I((t, n) => n ? (0, r.jsx)(s.animated.div, {
      className: u.backdrop,
      style: f({}, t, e),
      onClick: m
    }) : null)
  }
  return (0, r.jsx)(d, {
    children: I((e, t) => t ? (0, r.jsx)(s.animated.div, {
      className: a()(u.backdrop, u.withLayer),
      style: "TOP_RADIAL" === n ? {
        background: "radial-gradient(96.68% 96.68% at 50.04% 3.32%, rgba(0, 0, 0, 0.52) 0%, rgba(0, 0, 0, 0.00) 100%)"
      } : e,
      onClick: m
    }) : null)
  })
})