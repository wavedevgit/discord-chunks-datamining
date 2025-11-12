/** Chunk was on 99904 **/
/** chunk id: 396728, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk956748 = require("./956748.jsx"),
  Chunk566697 = require("./566697.jsx"),
  Chunk346284 = require("./346284.js");
let o = Chunk647438.memo(function(e) {
  let {
    user: t,
    nameplate: n,
    isHighlighted: i,
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
      }), (0, a.jsx)(l.Z, {
        user: t,
        nameplate: n,
        className: s.nameplatePreviewSampleItem,
        isHighlighted: i,
        showPlaceholderUser: !i,
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