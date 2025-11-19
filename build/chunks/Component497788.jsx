/** Chunk was on 45620 **/
/** chunk id: 497788, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
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
  Chunk215023 = require("./215023.js");
let b = e => {
  let {
    isBlockLoading: t = false,
    heroBlock: n,
    tab: b
  } = e, v = (0, s.sp)(), x = l.useMemo(() => o.Z.getCategoryForProduct(n.rewardSkuId), [n.rewardSkuId]), E = (0, i.e7)([c.Z], () => c.Z.getPurchase(n.rewardSkuId)), {
    products: O
  } = ((e, t, n) => {
    let r = (0, h.Z)(),
      a = (0, i.e7)([o.Z], () => o.Z.products),
      s = l.useMemo(() => e ? [] : a.size > 0 ? r(t.rankedSkuIds).filter(e => e.skuId !== t.rewardSkuId || null != n) : [], [e, r, t.rankedSkuIds, a, n, t.rewardSkuId]),
      c = (0, u.a)()(s),
      f = (0, d.l)(c);
    return {
      products: (0, C.St)(f)
    }
  })(t, n, E), S = l.useMemo(() => !t && 0 !== n.rankedSkuIds.length && !(O.length > 0) && n.rankedSkuIds.every(e => {
    var t;
    return (null == (t = o.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
  }), [t, n.rankedSkuIds, O.length]), y = t || S;
  return (0, r.jsx)(a.Z, {
    gap: "xl",
    children: y ? (0, r.jsx)(r.Fragment, {
      children: [true, true, true, true, true].map((e, t) => (0, r.jsx)(p.Z, {}, t))
    }) : (0, r.jsxs)(r.Fragment, {
      children: [null == E && null != n.rewardSkuId && null != x && (0, r.jsx)(s.k0, {
        newValue: {
          tilePosition: 0,
          pageSection: "top 4",
          categoryPosition: 0
        },
        children: (0, r.jsx)(m.Z, {
          category: x,
          rewardSkuId: n.rewardSkuId
        })
      }, n.rewardSkuId), O.map((e, t) => {
        let n = o.Z.getCategoryForProduct(e.skuId);
        return null == e || null == n ? null : (0, r.jsx)(s.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "top 4",
            categoryPosition: 0
          },
          children: (0, r.jsx)(f.Z, {
            skuId: null == e ? true : e.skuId,
            prioritizedCurrency: b === _.AW.ORBS ? g.tA.ORBS : true,
            onClickAnalytics: (0, g.wO)(e, b, v)
          }, e.skuId)
        }, null == e ? true : e.skuId)
      })]
    })
  })
}