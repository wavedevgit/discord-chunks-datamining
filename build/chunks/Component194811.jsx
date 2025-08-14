/** Chunk was on web.js **/
/** chunk id: 194811, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk111028 = require("./111028.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk704543 = require("./704543.js");

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
    className: o()(u.headerContextMenu, u.absolute),
    children: f
  }) : (0, r.jsxs)("div", {
    className: u.header,
    children: [(0, r.jsxs)(a.Text, {
      className: u.headerText,
      variant: _ === c.lY.SIDEBAR ? "text-xs/semibold" : "text-xs/medium",
      color: "header-primary",
      id: n,
      children: [(0, r.jsx)(s.Z, {
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