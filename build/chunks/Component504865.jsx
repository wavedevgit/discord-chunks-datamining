/** Chunk was on web.js **/
/** chunk id: 504865, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk509545 = require("./509545.js"),
  Chunk74538 = require("./74538.js"),
  Chunk474936 = require("./474936.js"),
  Chunk283102 = require("./283102.js");
let _ = function(e) {
  let {
    subscriptionTier: t,
    interval: n = f.rV.MONTH,
    className: i,
    isGift: _ = false,
    variant: m,
    priceOptions: h,
    isApplicationHome: g,
    enablePremiumBrandRefresh: E
  } = e, b = (0, o.e7)([u.Z], () => u.Z.isLoadedForSKUs([t])), y = (0, s.ap)((0, c.ZP)());
  if (!b) return (0, r.jsx)(l.$jN, {
    type: l.$jN.Type.PULSING_ELLIPSIS,
    className: p.priceSpinner
  });
  let O = u.Z.getForSkuAndInterval((0, d.Wz)(t), n),
    v = null != O ? (0, d.gy)(O, h, false, _) : null;
  if (E) {
    let e = n === f.rV.YEAR,
      t = e ? "text-muted" : y ? "text-strong" : "always-white";
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
        children: ["/", (0, d.eP)(n)]
      })]
    })
  }
  return (0, r.jsx)(l.Heading, {
    color: g ? "none" : "always-white",
    variant: null != m ? m : "heading-md/medium",
    className: a()(p.pricePerInterval, i),
    children: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("span", {
        className: g ? true : p.price,
        children: v
      }), " / ", (0, d.eP)(n)]
    })
  })
}