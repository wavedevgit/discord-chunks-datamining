/** Chunk was on web.js **/
/** chunk id: 18282, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk785620 = require("./785620.js");

function o(e) {
  let {
    onClick: t,
    Icon: n,
    "aria-label": o
  } = e, l = (0, a.rdh)(a.LU0.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY), c = (0, r.jsx)(n, {
    color: l.hex(),
    size: "custom",
    width: 16,
    height: 16
  });
  return null == t ? (0, r.jsx)("div", {
    className: s.k,
    "aria-label": o,
    children: c
  }) : (0, r.jsx)(i.m, {
    asContainer: true,
    text: o,
    children: (0, r.jsx)(a.DUT, {
      className: s.k,
      onClick: t,
      children: c
    })
  })
}