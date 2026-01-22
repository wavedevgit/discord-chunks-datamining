/** Chunk was on web.js **/
/** chunk id: 351638, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk3026 = require("./3026.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk996988 = require("./996988.js"),
  Chunk380297 = require("./380297.js");

function d(e) {
  let {
    text: t,
    textId: n,
    tags: i,
    platformIcon: d,
    contextMenu: f
  } = e, {
    themeType: p
  } = (0, l.E)();
  return (null == t || "" === t) && null == f ? null : null == t || "" === t ? (0, r.jsx)("div", {
    className: a()(u.Si, u.ys),
    children: f
  }) : (0, r.jsxs)("div", {
    className: u.wx,
    children: [(0, r.jsxs)(o.Text, {
      className: u.TK,
      variant: p === c.d.SIDEBAR ? "text-xs/semibold" : "text-xs/medium",
      color: "text-strong",
      id: n,
      children: [(0, r.jsx)(s.A, {
        children: t
      }), null != d && (0, r.jsx)("div", {
        className: u.tV,
        style: {
          maskImage: "url(".concat(d.whiteSVG, ")"),
          WebkitMaskImage: "url(".concat(d.whiteSVG, ")")
        }
      }), i]
    }), null != f && (0, r.jsx)("div", {
      className: u.Si,
      children: f
    })]
  })
}