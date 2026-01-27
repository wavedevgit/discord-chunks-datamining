/** Chunk was on 2292 **/
/** chunk id: 156601, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk97352 = require("./97352.js"),
  Chunk927578 = require("./927578.js"),
  Chunk788868 = require("./788868.js"),
  Chunk696389 = require("./696389.js");
let g = function(e) {
  let {
    subscriptionTier: t,
    interval: r = m.WT.MONTH,
    className: i,
    isGift: g = false,
    variant: x,
    priceOptions: C,
    isApplicationHome: f,
    enablePremiumBrandRefresh: T
  } = e, h = (0, a.bG)([u.A], () => u.A.isLoadedForSKUs([t])), v = (0, s.qB)((0, c.Ay)());
  if (!h) return (0, n.jsx)(o.y$y, {
    type: o.y$y.Type.PULSING_ELLIPSIS,
    className: p.xB
  });
  let j = u.A.getForSkuAndInterval((0, d.mH)(t), r),
    I = null != j ? (0, d.sS)(j, C, false, g) : null;
  if (T) {
    let e = r === m.WT.YEAR;
    return (0, n.jsxs)("div", {
      children: [(0, n.jsx)(o.Text, {
        variant: e ? "heading-md/semibold" : "heading-xxl/extrabold",
        color: e ? "text-muted" : v ? "text-strong" : "always-white",
        tag: "span",
        children: (0, n.jsx)("span", {
          children: I
        })
      }), (0, n.jsxs)(o.Text, {
        variant: "text-xs/medium",
        tag: "span",
        color: "text-muted",
        children: ["/", (0, d.FJ)(r)]
      })]
    })
  }
  return (0, n.jsx)(o.Heading, {
    color: f ? "none" : "always-white",
    variant: null != x ? x : "heading-md/medium",
    className: l()(p.SW, i),
    children: (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("span", {
        className: f ? true : p.q9,
        children: I
      }), " / ", (0, d.FJ)(r)]
    })
  })
}