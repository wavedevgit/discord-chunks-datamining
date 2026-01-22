/** Chunk was on web.js **/
/** chunk id: 813516, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk580679 = require("./580679.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk647162 = require("./647162.js");
let u = Chunk64700.forwardRef(function(e, t) {
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
    className: s()(n, {
      [c.yF]: true,
      [c.KJ]: a,
      [c.ov]: null != u
    }),
    ref: t,
    id: d,
    role: f,
    "aria-label": p,
    children: [null != u ? (0, r.jsx)("span", {
      className: s()(c.Qs, i),
      children: u
    }) : null, a ? (0, r.jsxs)("span", {
      className: c.dM,
      children: [(0, r.jsx)(o.A, {
        foreground: c.BH,
        className: c.fE
      }), l.intl.string(l.t.y2b7CA)]
    }) : null]
  })
})