/** Chunk was on web.js **/
/** chunk id: 661824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk38068 = require("./38068.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk201478 = require("./201478.js");
let u = Chunk73800.forwardRef(function(e, t) {
  let {
    className: n,
    contentClassName: i,
    isUnread: o,
    children: u,
    id: d,
    role: f,
    "aria-label": _
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(n, {
      [c.divider]: true,
      [c.isUnread]: o,
      [c.hasContent]: null != u
    }),
    ref: t,
    id: d,
    role: f,
    "aria-label": _,
    children: [null != u ? (0, r.jsx)("span", {
      className: a()(c.content, i),
      children: u
    }) : null, o ? (0, r.jsxs)("span", {
      className: c.unreadPill,
      children: [(0, r.jsx)(s.Z, {
        foreground: c.unreadPillCapStroke,
        className: c.unreadPillCap
      }), l.intl.string(l.t.y2b7CA)]
    }) : null]
  })
})