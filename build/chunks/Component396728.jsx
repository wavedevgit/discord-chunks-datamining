/** Chunk was on 23242 **/
/** chunk id: 396728, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk956748 = require("./956748.jsx"),
  Chunk566697 = require("./566697.jsx"),
  Chunk415878 = require("./415878.js");
let o = Chunk473749.memo(function(e) {
  let {
    user: t,
    nameplate: n,
    isHighlighted: l,
    isPurchased: o,
    size: u = "default"
  } = e, c = "small" === u ? 62 : 94, d = "small" === u ? 72 : 110;
  return (0, r.jsx)("div", {
    className: s.nameplatePreviewContainer,
    children: (0, r.jsxs)("div", {
      className: s.nameplatePreviewList,
      children: [(0, r.jsx)(i.G, {
        showStatus: true,
        width: c,
        opacity: .7,
        size: u
      }), (0, r.jsx)(i.G, {
        showStatus: true,
        width: d,
        opacity: .85,
        size: u
      }), (0, r.jsx)(a.Z, {
        user: t,
        nameplate: n,
        className: s.nameplatePreviewSampleItem,
        isHighlighted: l,
        showPlaceholderUser: !l,
        showStatus: true,
        isPurchased: o,
        nameplatePreviewSize: "small" === u ? "small" : "default"
      }), (0, r.jsx)(i.G, {
        showStatus: true,
        width: d,
        opacity: .85,
        size: u
      }), (0, r.jsx)(i.G, {
        showStatus: true,
        width: c,
        opacity: .7,
        size: u
      })]
    })
  })
})