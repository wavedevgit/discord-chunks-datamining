/** Chunk was on 45620 **/
/** chunk id: 719075, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk994587 = require("./994587.jsx"),
  Chunk884697 = require("./884697.js"),
  Chunk290175 = require("./290175.js"),
  Chunk724994 = require("./724994.js"),
  Chunk409116 = require("./409116.jsx"),
  Chunk786040 = require("./786040.jsx"),
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk997033 = require("./997033.js");
let E = e => {
    let {
      product: t
    } = e, n = (0, c.Nd)(), p = null == n ? true : n.tab, E = (0, s.e7)([a.default], () => a.default.getCurrentUser()), v = o.ZP.canUseCollectibles(E), {
      isDisabled: S
    } = (0, d.G)(t.skuId), {
      isPurchased: x,
      isPartiallyOwnedBundle: O
    } = (0, g.L)(t), y = (0, u.G1)(t), j = (0, u.rN)(t), k = l.useMemo(() => (0, u.BH)(t, v), [t, v]), T = (0, C.Iw)(t), {
      displayPrices: L,
      hasSufficientOrbs: I
    } = (0, h.Ip)({
      product: t,
      isPremiumUser: v,
      tab: p,
      hasDiscountOffer: null != T
    }), P = y && !v;
    return S ? (0, r.jsx)(i.Text, {
      variant: "text-md/semibold",
      color: "header-muted",
      children: m.intl.string(m.t.wu4gyc)
    }) : O ? (0, r.jsx)(i.Text, {
      variant: "text-md/semibold",
      children: m.intl.string(m.t.BEjTio)
    }) : x && !P ? (0, r.jsx)(i.Text, {
      variant: "text-md/semibold",
      children: m.intl.string(m.t["6cfuDg"])
    }) : j ? (0, r.jsx)(i.Text, {
      variant: "text-md/semibold",
      children: m.intl.string(m.t.nBtvYG)
    }) : y ? (0, r.jsx)(i.Text, {
      variant: "text-md/semibold",
      children: m.intl.string(m.t.rt69oq)
    }) : 0 === L.length ? null : (0, r.jsx)(f.F, {
      price: L[0],
      discount: k,
      nitroIconType: v ? "default" : true,
      nitroIconSize: "sm",
      discountOfferAmount: T,
      className: L[0].currency !== _.pK.DISCORD_ORB || I ? true : b.insufficientOrbs
    })
  },
  v = e => {
    let {
      skuId: t
    } = e, n = (0, p.LJ)(t);
    return null == n ? null : (0, r.jsx)(E, {
      product: n
    })
  }