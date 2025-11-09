/** Chunk was on web.js **/
/** chunk id: 194811, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk194983 = require("./194983.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk663907 = require("./663907.js");

function d(e) {
  let {
    text: t,
    textId: n,
    tags: i,
    platformIcon: d,
    contextMenu: f
  } = e, {
    themeType: _
  } = (0, l.z)();
  return (null == t || "" === t) && null == f ? null : null == t || "" === t ? (0, r.jsx)("div", {
    className: a()(u.headerContextMenu, u.absolute),
    children: f
  }) : (0, r.jsxs)("div", {
    className: u.header,
    children: [(0, r.jsxs)(s.Text, {
      className: u.headerText,
      variant: _ === c.l.SIDEBAR ? "text-xs/semibold" : "text-xs/medium",
      color: "header-primary",
      id: n,
      children: [(0, r.jsx)(o.Z, {
        children: t
      }), null != d && (0, r.jsx)("div", {
        className: u.platformIcon,
        style: {
          maskImage: "url(".concat(d.whiteSVG, ")"),
          WebkitMaskImage: "url(".concat(d.whiteSVG, ")")
        }
      }), i]
    }), null != f && (0, r.jsx)("div", {
      className: u.headerContextMenu,
      children: f
    })]
  })
}