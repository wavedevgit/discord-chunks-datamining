/** Chunk was on 65599 **/
/** chunk id: 761365, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk359701 = require("./359701.jsx"),
  Chunk550111 = require("./550111.jsx"),
  Chunk488189 = require("./488189.js");
let o = Chunk64700.memo(function(e) {
  let {
    user: t,
    nameplate: n,
    isHighlighted: l,
    size: o = "default"
  } = e, c = "small" === o ? 62 : 94, d = "small" === o ? 72 : 110;
  return (0, a.jsx)("div", {
    className: s.Dz,
    children: (0, a.jsxs)("div", {
      className: s.ur,
      children: [(0, a.jsx)(r._, {
        showStatus: true,
        width: c,
        opacity: .7,
        size: o
      }), (0, a.jsx)(r._, {
        showStatus: true,
        width: d,
        opacity: .85,
        size: o
      }), (0, a.jsx)(i.A, {
        user: t,
        nameplate: n,
        className: s.tZ,
        isHighlighted: l,
        showPlaceholderUser: !l,
        showStatus: true,
        nameplatePreviewSize: "small" === o ? "small" : "default"
      }), (0, a.jsx)(r._, {
        showStatus: true,
        width: d,
        opacity: .85,
        size: o
      }), (0, a.jsx)(r._, {
        showStatus: true,
        width: c,
        opacity: .7,
        size: o
      })]
    })
  })
})