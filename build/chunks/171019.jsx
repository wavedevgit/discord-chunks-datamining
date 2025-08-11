/** Chunk was on web.js **/
/** chunk id: 171019, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk831209 = require("./831209.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk597688 = require("./597688.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.js"),
  Chunk697490 = require("./697490.js");
let d = e => {
  let {
    isPurchaseSection: t,
    isPremiumSection: n,
    canUsePremiumCollectibles: d,
    skuId: f
  } = e, _ = (0, l.Yq)(f), p = (0, o.e7)([s.Z], () => {
    let e = s.Z.getProduct(f);
    return (0, l.G1)(e)
  });
  return t || n && d ? null : _ ? <a.lBU className={u.newBadge} text={(0, r.jsxs)("div", {
      className: u.newBadgeText,
      children: [(0, r.jsx)(a.mBM, {
        size: "xxs",
        color: "currentColor"
      }), c.intl.string(c.t.y2b7CA)]
    })} /> : <a.G2e icon={p ? () => (0, r.jsx)(a.SrA, {
      size: "custom",
      color: "currentColor",
      width: 14,
      height: 14
    }) : () => (0, r.jsx)(a.mBM, {
      size: "xxs",
      color: "currentColor"
    })} color={i.Z.BACKGROUND_ACCENT} className={u.iconBadge} />
}