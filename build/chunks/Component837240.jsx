/** Chunk was on web.js **/
/** chunk id: 837240, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => d,
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk253179 = require("./253179.js"),
  Chunk971492 = require("./971492.js"),
  Chunk62134 = require("./62134.js"),
  Chunk635146 = require("./635146.js"),
  Chunk124777 = require("./124777.js");

function d(e) {
  return e !== l.f.TOP_RADIAL && e !== l.f.SUBTLE && e !== l.f.BLUR
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