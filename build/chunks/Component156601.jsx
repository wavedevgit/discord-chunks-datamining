/** Chunk was on web.js **/
/** chunk id: 156601, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk97352 = require("./97352.js"),
  Chunk927578 = require("./927578.js"),
  Chunk788868 = require("./788868.js"),
  Chunk696389 = require("./696389.js");
let _ = function(e) {
  let {
    subscriptionTier: t,
    interval: n = f.WT.MONTH,
    className: i,
    isGift: _ = false,
    variant: h,
    priceOptions: m,
    isApplicationHome: g,
    enablePremiumBrandRefresh: E
  } = e, y = (0, s.bG)([u.A], () => u.A.isLoadedForSKUs([t])), b = (0, o.qB)((0, c.Ay)());
  if (!y) return (0, r.jsx)(l.y$y, {
    type: l.y$y.Type.PULSING_ELLIPSIS,
    className: p.xB
  });
  let O = u.A.getForSkuAndInterval((0, d.mH)(t), n),
    v = null != O ? (0, d.sS)(O, m, false, _) : null;
  if (E) {
    let e = n === f.WT.YEAR,
      t = e ? "text-muted" : b ? "text-strong" : "always-white";
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)(l.Text, {
        variant: e ? "heading-md/semibold" : "heading-xxl/extrabold",
        color: t,
        tag: "span",
        children: (0, r.jsx)("span", {
          children: v
        })
      }), (0, r.jsxs)(l.Text, {
        variant: "text-xs/medium",
        tag: "span",
        color: "text-muted",
        children: ["/", (0, d.FJ)(n)]
      })]
    })
  }
  return (0, r.jsx)(l.Heading, {
    color: g ? "none" : "always-white",
    variant: null != h ? h : "heading-md/medium",
    className: a()(p.SW, i),
    children: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("span", {
        className: g ? true : p.q9,
        children: v
      }), " / ", (0, d.FJ)(n)]
    })
  })
}