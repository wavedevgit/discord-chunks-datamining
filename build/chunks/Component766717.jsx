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
    showMoreOverlay: c = false,
    moreCount: d = 0
  } = e, u = s ? a.cardPreview : a.cardPreviewNoScale;
  return (0, r.jsx)(i.u, {
    text: n,
    position: "top",
    children: (0, r.jsx)(l.P3F, {
      onClick: t,
      className: a.card,
      "aria-label": n,
      children: (0, r.jsxs)("div", {
        className: a.cardContent,
        children: [(0, r.jsx)("div", {
          className: a.cardPreviewWrapper,
          children: (0, r.jsx)("div", {
            className: u,
            children: o()
          })
        }), c && (0, r.jsx)("div", {
          className: a.moreOverlay,
          children: (0, r.jsxs)(l.Text, {
            variant: "text-xs/medium",
            color: "always-white",
            children: ["+", d]
          })
        })]
      })
    })
  })
}