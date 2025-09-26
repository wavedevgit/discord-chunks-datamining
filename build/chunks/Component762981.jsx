/** Chunk was on web.js **/
/** chunk id: 762981, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => p,
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk488290 = require("./488290.js"),
  Chunk558452 = require("./558452.js"),
  Chunk481060 = require("./481060.js"),
  Chunk985316 = require("./985316.js"),
  Chunk336088 = require("./336088.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e) {
  return e !== c.fCB.TOP_RADIAL && e !== c.fCB.SUBTLE && e !== c.fCB.BLUR
}

function h(e) {
  let {
    variant: t = "default",
    animationVariant: n = "default",
    onClick: i,
    isVisible: a,
    disabled: c = false,
    disablePointerEvents: f = false
  } = e;
  return (0, l.Y)(a, {
    keys: e => e ? "scrim" : "empty",
    config: u.Px,
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
    className: o()(d.scrim, {
      [d.lightbox]: "lightbox" === t,
      [d.pointerEventsNone]: f
    }),
    style: e,
    onClick: c ? true : i
  }) : null)
}
let m = Chunk647438.forwardRef(function(e) {
  return (0, r.jsx)(h, _({}, e))
})