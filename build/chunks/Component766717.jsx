/** Chunk was on 91053 **/
/** chunk id: 766717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk221292 = require("./221292.js"),
  Chunk239990 = require("./239990.js");

function o(e) {
  let {
    onCardClick: t,
    tooltipText: n,
    shouldScalePreview: o = true,
    renderPreview: c,
    moreCount: d,
    isSingleCard: u = false,
    analyticsLocations: h
  } = e, p = o ? s.cardPreview : s.cardPreviewNoScale, f = u ? s.cardSingle : s.card, g = null != d && d > 0;
  return (0, r.jsx)(i.u, {
    text: n,
    position: "top",
    children: (0, r.jsxs)(l.P3F, {
      onClick: () => {
        t(), (0, a.pQ)({
          action: g ? "PRESS_WISHLIST_BREADCRUMB_OVERFLOW_CARD" : "PRESS_WISHLIST_BREADCRUMB_CARD",
          analyticsLocations: h
        })
      },
      className: f,
      "aria-label": n,
      children: [(0, r.jsx)("div", {
        className: p,
        children: c()
      }), g && (0, r.jsx)("div", {
        className: s.moreOverlay,
        children: (0, r.jsxs)(l.Text, {
          variant: "text-xs/medium",
          color: "always-white",
          children: ["+", d]
        })
      })]
    })
  })
}