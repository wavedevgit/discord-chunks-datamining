/** Chunk was on 65347 **/
/** chunk id: 396728, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk956748 = require("./956748.jsx"),
  Chunk566697 = require("./566697.jsx"),
  Chunk788107 = require("./788107.js");
let o = Chunk473749.memo(function(e) {
  let {
    user: t,
    nameplate: n,
    isHighlighted: l,
    isPurchased: o,
    size: c = "default"
  } = e, d = "small" === c ? 62 : 94, u = "small" === c ? 72 : 110;
  return (0, a.jsx)("div", {
    className: s.nameplatePreviewContainer,
    children: (0, a.jsxs)("div", {
      className: s.nameplatePreviewList,
      children: [(0, a.jsx)(r.G, {
        showStatus: true,
        width: d,
        opacity: .7,
        size: c
      }), (0, a.jsx)(r.G, {
        showStatus: true,
        width: u,
        opacity: .85,
        size: c
      }), (0, a.jsx)(i.Z, {
        user: t,
        nameplate: n,
        className: s.nameplatePreviewSampleItem,
        isHighlighted: l,
        showPlaceholderUser: !l,
        showStatus: true,
        isPurchased: o,
        nameplatePreviewSize: "small" === c ? "small" : "default"
      }), (0, a.jsx)(r.G, {
        showStatus: true,
        width: u,
        opacity: .85,
        size: c
      }), (0, a.jsx)(r.G, {
        showStatus: true,
        width: d,
        opacity: .7,
        size: c
      })]
    })
  })
})