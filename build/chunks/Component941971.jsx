/** Chunk was on web.js **/
/** chunk id: 941971, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk92674 = require("./92674.js"),
  Chunk397927 = require("./397927.js"),
  Chunk94095 = require("./94095.js");
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
  let p = {
      opacity: 1,
      height: t ? 40 : n ? 20 : 8,
      transform: "translateX(0) translateZ(0)"
    },
    _ = (0, s.pnh)(t || n || i, {
      config: c,
      keys: e => e ? "pill" : "empty",
      initial: t || n || i ? p : null,
      from: u,
      leave: u,
      enter: p,
      update: p
    }, n || document.hasFocus() ? "animate-always" : "animate-never");
  return (0, r.jsx)("div", {
    className: a()(f, l.i),
    "aria-hidden": true,
    children: _((e, t) => t && (0, r.jsx)(o.animated.span, {
      className: l.A,
      style: e
    }))
  })
}