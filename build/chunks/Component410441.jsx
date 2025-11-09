/** Chunk was on web.js **/
/** chunk id: 410441, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk634662 = require("./634662.js");

function s(e) {
  let {
    onClick: t,
    Icon: n,
    "aria-label": s
  } = e, l = (0, a.dQu)(a.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY), c = (0, r.jsx)(n, {
    color: l.hex(),
    size: "custom",
    width: 16,
    height: 16
  });
  return null == t ? (0, r.jsx)("div", {
    className: o.container,
    "aria-label": s,
    children: c
  }) : (0, r.jsx)(i.u, {
    asContainer: true,
    text: s,
    children: (0, r.jsx)(a.P3F, {
      className: o.container,
      onClick: t,
      children: c
    })
  })
}