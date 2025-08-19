/** Chunk was on web.js **/
/** chunk id: 762981, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => h,
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk803948 = require("./803948.js"),
  Chunk558452 = require("./558452.js"),
  Chunk770278 = require("./770278.jsx"),
  Chunk724723 = require("./724723.js"),
  Chunk985316 = require("./985316.js"),
  Chunk336088 = require("./336088.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e) {
  return e !== c.f.TOP_RADIAL && e !== c.f.SUBTLE && e !== c.f.BLUR
}

function m(e) {
  let {
    variant: t = "default",
    animationVariant: n = "default",
    onClick: i,
    isVisible: a,
    disabled: c = false,
    disablePointerEvents: u = false
  } = e;
  return (0, l.Y)(a, {
    keys: e => e ? "scrim" : "empty",
    config: d.Px,
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  }, "instant" === n ? "animate-never" : "animate-always")((e, n) => n ? (0, r.jsx)(s.animated.div, {
    role: "none",
    className: o()(f.scrim, {
      [f.lightbox]: "lightbox" === t,
      [f.pointerEventsNone]: u
    }),
    style: e,
    onClick: c ? true : i
  }) : null)
}
let g = Chunk647438.forwardRef(function(e) {
  return (0, u.q)("Scrim") ? (0, r.jsx)(m, p({}, e)) : (0, r.jsx)(c.Z, {
    backdropStyle: "lightbox" === e.variant ? c.f.LIGHTBOX : c.f.DARK,
    onClose: e.onClick,
    isVisible: e.isVisible,
    backdropInstant: "instant" === e.animationVariant
  })
})