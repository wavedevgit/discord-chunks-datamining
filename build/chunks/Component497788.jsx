/** Chunk was on 45620 **/
/** chunk id: 497788, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
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
let x = e => {
  let {
    isBlockLoading: t = false,
    heroBlock: n,
    tab: x
  } = e, E = (0, a.sp)(), {
    hasPromoUpsell: O
  } = u.Z.useConfig({
    location: "RewardHeroBlockCards"
  }), S = l.useMemo(() => s.Z.getCategoryForProduct(n.rewardSkuId), [n.rewardSkuId]), y = (0, i.e7)([c.Z], () => c.Z.getPurchase(n.rewardSkuId)), {
    products: j
  } = ((e, t, n) => {
    let r = (0, C.Z)(),
      o = (0, i.e7)([s.Z], () => s.Z.products),
      a = l.useMemo(() => e ? [] : o.size > 0 ? r(t.rankedSkuIds).filter(e => e.skuId !== t.rewardSkuId || null != n) : [], [e, r, t.rankedSkuIds, o, n, t.rewardSkuId]),
      c = (0, d.a)()(a),
      u = (0, f.l)(c);
    return {
      products: (0, _.St)(u)
    }
  })(t, n, y), I = l.useMemo(() => !t && 0 !== n.rankedSkuIds.length && !(j.length > 0) && n.rankedSkuIds.every(e => {
    var t;
    return (null == (t = s.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
  }), [t, n.rankedSkuIds, j.length]), k = t || I, {
    readyToClaim: T
  } = (0, b.q)(S, n.rewardSkuId), L = null == y && null != n.rewardSkuId && null != S;
  return (0, r.jsx)(o.Z, {
    gap: "xl",
    children: k ? (0, r.jsx)(r.Fragment, {
      children: [true, true, true, true, true].map((e, t) => (0, r.jsx)(m.Z, {}, t))
    }) : (0, r.jsxs)(r.Fragment, {
      children: [L && !!(O || T) && (0, r.jsx)(a.k0, {
        newValue: {
          tilePosition: 0,
          pageSection: "top 4",
          categoryPosition: 0
        },
        children: (0, r.jsx)(h.Z, {
          category: S,
          rewardSkuId: n.rewardSkuId
        })
      }, n.rewardSkuId), j.map((e, t) => {
        let n = s.Z.getCategoryForProduct(e.skuId);
        return null == e || null == n ? null : (0, r.jsx)(a.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "top 4",
            categoryPosition: 0
          },
          children: (0, r.jsx)(g.Z, {
            skuId: null == e ? true : e.skuId,
            prioritizedCurrency: x === v.AW.ORBS ? p.tA.ORBS : true,
            onClickAnalytics: (0, p.wO)(e, x, E)
          }, e.skuId)
        }, null == e ? true : e.skuId)
      })]
    })
  })
}