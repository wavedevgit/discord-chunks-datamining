/** Chunk was on 45620 **/
/** chunk id: 497788, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk624968 = require("./624968.jsx"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk834943 = require("./834943.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk653126 = require("./653126.jsx"),
  Chunk786040 = require("./786040.js"),
  Chunk401975 = require("./401975.jsx"),
  Chunk373183 = require("./373183.jsx"),
  Chunk934760 = require("./934760.js"),
  Chunk619899 = require("./619899.js"),
  Chunk911390 = require("./911390.js"),
  Chunk215023 = require("./215023.js");
let v = e => {
  let {
    isBlockLoading: t = false,
    heroBlock: n,
    tab: v
  } = e, S = (0, o.sp)(), {
    hasPromoUpsell: x
  } = u.Z.useConfig({
    location: "RewardHeroBlockCards"
  }), O = l.useMemo(() => a.Z.getCategoryForProduct(n.rewardSkuId), [n.rewardSkuId]), y = (0, i.e7)([c.Z], () => c.Z.getPurchase(n.rewardSkuId)), {
    products: k
  } = ((e, t, n) => {
    let r = (0, h.Z)(),
      s = (0, i.e7)([a.Z], () => a.Z.products),
      o = l.useMemo(() => e ? [] : s.size > 0 ? r(t.rankedSkuIds).filter(e => e.skuId !== t.rewardSkuId || null != n) : [], [e, r, t.rankedSkuIds, s, n, t.rewardSkuId]),
      c = (0, d.a)()(o),
      u = (0, g.l)(c);
    return {
      products: (0, _.St)(u)
    }
  })(t, n, y), T = l.useMemo(() => !t && 0 !== n.rankedSkuIds.length && !(k.length > 0) && n.rankedSkuIds.every(e => {
    var t;
    return (null == (t = a.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
  }), [t, n.rankedSkuIds, k.length]), j = t || T, {
    readyToClaim: I
  } = (0, b.q)(O, n.rewardSkuId), L = null == y && null != n.rewardSkuId && null != O;
  return (0, r.jsx)(s.Z, {
    gap: "xl",
    children: j ? (0, r.jsx)(r.Fragment, {
      children: [true, true, true, true, true].map((e, t) => (0, r.jsx)(m.Z, {}, t))
    }) : (0, r.jsxs)(r.Fragment, {
      children: [L && !!(x || I) && (0, r.jsx)(o.k0, {
        newValue: {
          tilePosition: 0,
          pageSection: "top 4",
          categoryPosition: 0
        },
        children: (0, r.jsx)(C.Z, {
          category: O,
          rewardSkuId: n.rewardSkuId
        })
      }, n.rewardSkuId), k.map((e, t) => {
        let n = a.Z.getCategoryForProduct(e.skuId);
        return null == e || null == n ? null : (0, r.jsx)(o.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "top 4",
            categoryPosition: 0
          },
          children: (0, r.jsx)(f.Z, {
            skuId: null == e ? true : e.skuId,
            prioritizedCurrency: v === E.AW.ORBS ? p.tA.ORBS : true,
            onClickAnalytics: (0, p.wO)(e, v, S)
          }, e.skuId)
        }, null == e ? true : e.skuId)
      })]
    })
  })
}