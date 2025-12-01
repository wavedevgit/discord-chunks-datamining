/** Chunk was on web.js **/
/** chunk id: 661824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk38068 = require("./38068.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk201478 = require("./201478.js");
let u = Chunk473749.forwardRef(function(e, t) {
  let {
    className: n,
    contentClassName: i,
    isUnread: a,
    children: u,
    id: d,
    role: f,
    "aria-label": p
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
    "aria-label": p,
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