/** Chunk was on web.js **/
/** chunk id: 69589, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk99690 = require("./99690.jsx"),
  Chunk473188 = require("./473188.jsx"),
  Chunk780616 = require("./780616.js"),
  Chunk191420 = require("./191420.js"),
  Chunk774621 = require("./774621.js"),
  Chunk49274 = require("./49274.js"),
  Chunk904141 = require("./904141.js");

function f(e) {
  let {
    user: t,
    rank: n,
    rankBadgeVisibility: f = "visible",
    avatarClassName: _,
    avatarSize: p = i.EFr.SIZE_40
  } = e, h = 1 === n ? l : 2 === n ? c : 3 === n ? u : d, m = (0, i.pxk)(p);
  return (0, r.jsxs)("div", {
    className: s.container,
    style: {
      width: "".concat(m, "px"),
      height: "".concat(m, "px")
    },
    children: [(0, r.jsx)("img", {
      className: s.frame,
      src: h,
      style: {
        width: m + 8,
        height: m + 8
      },
      alt: ""
    }), (0, r.jsx)(o.Z, {
      className: _,
      user: t,
      size: p
    }), "hidden" !== f && (0, r.jsx)("div", {
      className: s.rankBadge,
      children: (0, r.jsx)(a._, {
        rank: n,
        hideInnerBorder: "visibleWithoutBorder" === f
      })
    })]
  })
}