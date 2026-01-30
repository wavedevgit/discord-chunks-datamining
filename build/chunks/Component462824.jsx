/** Chunk was on web.js **/
/** chunk id: 462824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => f,
  s: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk970984 = require("./970984.js"),
  Chunk866323 = require("./866323.js"),
  Chunk892491 = require("./892491.js"),
  Chunk150591 = require("./150591.js"),
  Chunk894198 = require("./894198.js");

function d(e) {
  return e !== l.F.TOP_RADIAL && e !== l.F.SUBTLE && e !== l.F.BLUR
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
  return (0, s.p)(l, {
    keys: e => e ? "scrim" : "empty",
    config: c.hP,
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
    className: a()(u.f5, {
      [u.Et]: "lightbox" === t,
      [u.RS]: f
    }),
    style: e,
    onClick: d ? true : i
  }) : null)
}