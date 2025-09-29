/** Chunk was on web.js **/
/** chunk id: 762981, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => d,
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk488290 = require("./488290.js"),
  Chunk558452 = require("./558452.js"),
  Chunk481060 = require("./481060.js"),
  Chunk985316 = require("./985316.js"),
  Chunk721457 = require("./721457.js");

function d(e) {
  return e !== l.fCB.TOP_RADIAL && e !== l.fCB.SUBTLE && e !== l.fCB.BLUR
}

function f(e) {
  let {
    variant: t = "default",
    animationVariant: n = "default",
    onClick: i,
    isVisible: l,
    disabled: d = false,
    disablePointerEvents: f = false
  } = e;
  return (0, s.Y)(l, {
    keys: e => e ? "scrim" : "empty",
    config: c.Px,
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  }, "instant" === n ? "animate-never" : "animate-always")((e, n) => n ? (0, r.jsx)(o.animated.div, {
    role: "none",
    className: a()(u.scrim, {
      [u.lightbox]: "lightbox" === t,
      [u.pointerEventsNone]: f
    }),
    style: e,
    onClick: d ? true : i
  }) : null)
}