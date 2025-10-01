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
  Chunk137317 = require("./137317.js"),
  Chunk793030 = require("./793030.js"),
  Chunk558452 = require("./558452.js"),
  Chunk481060 = require("./481060.js"),
  Chunk336088 = require("./336088.js");

function d(e) {
  return e !== c.fCB.TOP_RADIAL && e !== c.fCB.SUBTLE && e !== c.fCB.BLUR
}

function f(e) {
  let {
    variant: t = "default",
    animationVariant: n = "default",
    onClick: i,
    isVisible: c,
    disabled: d = false,
    disablePointerEvents: f = false
  } = e;
  return (0, l.Y)(c, {
    keys: e => e ? "scrim" : "empty",
    config: s.Pxu,
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