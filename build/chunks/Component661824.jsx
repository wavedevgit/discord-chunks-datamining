/** Chunk was on web.js **/
/** chunk id: 661824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk38068 = require("./38068.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk586495 = require("./586495.js");
let u = Chunk647438.forwardRef(function(e, t) {
  let {
    className: n,
    contentClassName: i,
    isUnread: a,
    children: u,
    id: d,
    role: f,
    "aria-label": _
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(n, {
      [c.divider]: true,
      [c.isUnread]: a,
      [c.hasContent]: null != u
    }),
    ref: t,
    id: d,
    role: f,
    "aria-label": _,
    children: [null != u ? (0, r.jsx)("span", {
      className: o()(c.content, i),
      children: u
    }) : null, a ? (0, r.jsxs)("span", {
      className: c.unreadPill,
      children: [(0, r.jsx)(s.Z, {
        foreground: c.unreadPillCapStroke,
        className: c.unreadPillCap
      }), l.intl.string(l.t.y2b7CA)]
    }) : null]
  })
})