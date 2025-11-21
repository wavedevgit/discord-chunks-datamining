/** Chunk was on 54400 **/
/** chunk id: 396728, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk956748 = require("./956748.jsx"),
  Chunk566697 = require("./566697.jsx"),
  Chunk346284 = require("./346284.js");
let s = Chunk473749.memo(function(e) {
  let {
    user: t,
    nameplate: n,
    isHighlighted: l,
    isPurchased: s,
    size: d = "default"
  } = e, c = "small" === d ? 62 : 94, u = "small" === d ? 72 : 110;
  return (0, r.jsx)("div", {
    className: o.nameplatePreviewContainer,
    children: (0, r.jsxs)("div", {
      className: o.nameplatePreviewList,
      children: [(0, r.jsx)(a.G, {
        showStatus: true,
        width: c,
        opacity: .7,
        size: d
      }), (0, r.jsx)(a.G, {
        showStatus: true,
        width: u,
        opacity: .85,
        size: d
      }), (0, r.jsx)(i.Z, {
        user: t,
        nameplate: n,
        className: o.nameplatePreviewSampleItem,
        isHighlighted: l,
        showPlaceholderUser: !l,
        showStatus: true,
        isPurchased: s,
        nameplatePreviewSize: "small" === d ? "small" : "default"
      }), (0, r.jsx)(a.G, {
        showStatus: true,
        width: u,
        opacity: .85,
        size: d
      }), (0, r.jsx)(a.G, {
        showStatus: true,
        width: c,
        opacity: .7,
        size: d
      })]
    })
  })
})