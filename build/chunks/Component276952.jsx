/** Chunk was on web.js **/
/** chunk id: 276952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk509442 = require("./509442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434271 = require("./434271.js");
let c = Object.freeze({
    tension: 400,
    friction: 30
  }),
  u = Object.freeze({
    opacity: 0,
    height: 8,
    transform: "translateX(-4px) translateZ(0)"
  });

function d(e) {
  let {
    selected: t = false,
    hovered: n = false,
    unread: i = false,
    disabled: d = false,
    className: f
  } = e;
  t = !d && t, n = !d && n, i = !d && i;
  let _ = {
      opacity: 1,
      height: t ? 40 : n ? 20 : 8,
      transform: "translateX(0) translateZ(0)"
    },
    p = (0, s.Yzy)(t || n || i, {
      config: c,
      keys: e => e ? "pill" : "empty",
      initial: t || n || i ? _ : null,
      from: u,
      leave: u,
      enter: _,
      update: _
    }, n || document.hasFocus() ? "animate-always" : "animate-never");
  return (0, r.jsx)("div", {
    className: a()(f, l.wrapper),
    "aria-hidden": true,
    children: p((e, t) => t && (0, r.jsx)(o.animated.span, {
      className: l.item,
      style: e
    }))
  })
}