/** Chunk was on 94136 **/
/** chunk id: 504865, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js"),
  Chunk274065 = require("./274065.js");
let p = function(e) {
  let {
    subscriptionTier: t,
    interval: i = m.rV.MONTH,
    className: r,
    isGift: p = false,
    variant: g,
    priceOptions: x,
    isApplicationHome: f,
    enablePremiumBrandRefresh: h
  } = e, v = (0, a.e7)([u.Z], () => u.Z.isLoadedForSKUs([t])), I = (0, s.ap)((0, c.ZP)());
  if (!v) return (0, n.jsx)(o.$jN, {
    type: o.$jN.Type.PULSING_ELLIPSIS,
    className: C.priceSpinner
  });
  let T = u.Z.getForSkuAndInterval((0, d.Wz)(t), i),
    j = null != T ? (0, d.gy)(T, x, false, p) : null;
  if (h) {
    let e = i === m.rV.YEAR;
    return (0, n.jsxs)("div", {
      children: [(0, n.jsx)(o.Text, {
        variant: e ? "heading-md/semibold" : "heading-xxl/extrabold",
        color: e ? "text-muted" : I ? "header-primary" : "always-white",
        tag: "span",
        children: (0, n.jsx)("span", {
          children: j
        })
      }), (0, n.jsxs)(o.Text, {
        variant: "text-xs/medium",
        tag: "span",
        color: "text-muted",
        children: ["/", (0, d.eP)(i)]
      })]
    })
  }
  return (0, n.jsx)(o.X6q, {
    color: f ? "none" : "always-white",
    variant: null != g ? g : "heading-md/medium",
    className: l()(C.pricePerInterval, r),
    children: (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("span", {
        className: f ? true : C.price,
        children: j
      }), " / ", (0, d.eP)(i)]
    })
  })
}