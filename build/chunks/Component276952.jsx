/** Chunk was on web.js **/
/** chunk id: 276952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
  Chunk481060 = require("./481060.js"),
  Chunk82364 = require("./82364.js");
let c = Object.freeze({
    tension: 400,
    friction: 30
  }),
  u = Object.freeze({
    opacity: 0,
    height: 8,
    x: false
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
      x: 0
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
    className: o()(f, l.wrapper),
    "aria-hidden": true,
    children: p((e, t) => t && (0, r.jsx)(a.animated.span, {
      className: l.item,
      style: e
    }))
  })
}