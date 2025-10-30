/** Chunk was on 95017 **/
/** chunk id: 396728, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk956748 = require("./956748.jsx"),
  Chunk566697 = require("./566697.jsx"),
  Chunk346284 = require("./346284.js");
let s = Chunk647438.memo(function(e) {
  let {
    user: t,
    nameplate: n,
    isHighlighted: r,
    isPurchased: s
  } = e;
  return (0, a.jsx)("div", {
    className: o.nameplatePreviewContainer,
    children: (0, a.jsxs)("div", {
      className: o.nameplatePreviewList,
      children: [(0, a.jsx)(l.G, {
        showStatus: true,
        width: 94,
        opacity: .7
      }), (0, a.jsx)(l.G, {
        showStatus: true,
        width: 110,
        opacity: .85
      }), (0, a.jsx)(i.Z, {
        user: t,
        nameplate: n,
        className: o.nameplatePreviewSampleItem,
        isHighlighted: r,
        showPlaceholderUser: !r,
        showStatus: true,
        isPurchased: s
      }), (0, a.jsx)(l.G, {
        showStatus: true,
        width: 110,
        opacity: .85
      }), (0, a.jsx)(l.G, {
        showStatus: true,
        width: 94,
        opacity: .7
      })]
    })
  })
})