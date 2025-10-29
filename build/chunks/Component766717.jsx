/** Chunk was on 91053 **/
/** chunk id: 766717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239990 = require("./239990.js");

function s(e) {
  let {
    onCardClick: t,
    tooltipText: n,
    shouldScalePreview: s = true,
    renderPreview: o,
    moreCount: c,
    isSingleCard: d = false
  } = e, u = s ? a.cardPreview : a.cardPreviewNoScale, h = d ? a.cardSingle : a.card;
  return (0, r.jsx)(i.u, {
    text: n,
    position: "top",
    children: (0, r.jsxs)(l.P3F, {
      onClick: t,
      className: h,
      "aria-label": n,
      children: [(0, r.jsx)("div", {
        className: u,
        children: o()
      }), null != c && c > 0 && (0, r.jsx)("div", {
        className: a.moreOverlay,
        children: (0, r.jsxs)(l.Text, {
          variant: "text-xs/medium",
          color: "always-white",
          children: ["+", c]
        })
      })]
    })
  })
}