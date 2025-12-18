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
  } = e, S = (0, o.sp)(), _ = l.useMemo(() => i.Z.getCategoryForProduct(n.rewardSkuId), [n.rewardSkuId]), x = (0, a.e7)([c.Z], () => c.Z.getPurchase(n.rewardSkuId)), {
    products: O
  } = ((e, t, n) => {
    let r = (0, m.Z)(),
      s = (0, a.e7)([i.Z], () => i.Z.products),
      o = l.useMemo(() => e ? [] : s.size > 0 ? r(t.rankedSkuIds).filter(e => e.skuId !== t.rewardSkuId || null != n) : [], [e, r, t.rankedSkuIds, s, n, t.rewardSkuId]),
      c = (0, u.a)()(o),
      f = (0, d.l)(c);
    return {
      products: (0, h.St)(f)
    }
  })(t, n, x), y = l.useMemo(() => !t && 0 !== n.rankedSkuIds.length && !(O.length > 0) && n.rankedSkuIds.every(e => {
    var t;
    return (null == (t = i.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
  }), [t, n.rankedSkuIds, O.length]), k = t || y, {
    readyToClaim: T
  } = (0, C.q)(_, n.rewardSkuId), j = null == x && null != n.rewardSkuId && null != _;
  return (0, r.jsx)(s.Z, {
    gap: "xl",
    children: k ? (0, r.jsx)(r.Fragment, {
      children: [true, true, true, true, true].map((e, t) => (0, r.jsx)(b.Z, {}, t))
    }) : (0, r.jsxs)(r.Fragment, {
      children: [j && T && (0, r.jsx)(o.k0, {
        newValue: {
          tilePosition: 0,
          pageSection: "top 4",
          categoryPosition: 0
        },
        children: (0, r.jsx)(p.Z, {
          category: _,
          rewardSkuId: n.rewardSkuId
        })
      }, n.rewardSkuId), O.map((e, t) => {
        let n = i.Z.getCategoryForProduct(e.skuId);
        return null == e || null == n ? null : (0, r.jsx)(o.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "top 4",
            categoryPosition: 0
          },
          children: (0, r.jsx)(f.Z, {
            skuId: null == e ? true : e.skuId,
            prioritizedCurrency: v === E.AW.ORBS ? g.tA.ORBS : true,
            onClickAnalytics: (0, g.wO)(e, v, S)
          }, e.skuId)
        }, null == e ? true : e.skuId)
      })]
    })
  })
}