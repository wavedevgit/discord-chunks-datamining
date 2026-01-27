/** Chunk was on web.js **/
/** chunk id: 761365, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk359701 = require("./359701.jsx"),
  Chunk550111 = require("./550111.jsx"),
  Chunk488189 = require("./488189.js");
let l = Chunk64700.memo(function(e) {
  let {
    user: t,
    nameplate: n,
    isHighlighted: i,
    size: l = "default"
  } = e, c = "small" === l ? 62 : 94, u = "small" === l ? 72 : 110;
  return (0, r.jsx)("div", {
    className: s.Dz,
    children: (0, r.jsxs)("div", {
      className: s.ur,
      children: [(0, r.jsx)(a._, {
        showStatus: true,
        width: c,
        opacity: .7,
        size: l
      }), (0, r.jsx)(a._, {
        showStatus: true,
        width: u,
        opacity: .85,
        size: l
      }), (0, r.jsx)(o.A, {
        user: t,
        nameplate: n,
        className: s.tZ,
        isHighlighted: i,
        showPlaceholderUser: !i,
        showStatus: true,
        nameplatePreviewSize: "small" === l ? "small" : "default"
      }), (0, r.jsx)(a._, {
        showStatus: true,
        width: u,
        opacity: .85,
        size: l
      }), (0, r.jsx)(a._, {
        showStatus: true,
        width: c,
        opacity: .7,
        size: l
      })]
    })
  })
})