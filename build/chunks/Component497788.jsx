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
  Chunk155066 = require("./155066.js"),
  Chunk937510 = require("./937510.js"),
  Chunk653126 = require("./653126.jsx"),
  Chunk786040 = require("./786040.js"),
  Chunk401975 = require("./401975.jsx"),
  Chunk373183 = require("./373183.jsx"),
  Chunk619899 = require("./619899.js"),
  Chunk911390 = require("./911390.js"),
  Chunk215023 = require("./215023.js");
let v = e => {
  let {
    isBlockLoading: t = false,
    heroBlock: n,
    tab: v
  } = e, S = (0, i.sp)(), x = l.useMemo(() => o.Z.getCategoryForProduct(n.rewardSkuId), [n.rewardSkuId]), O = (0, a.e7)([c.Z], () => c.Z.getPurchase(n.rewardSkuId)), {
    products: _
  } = ((e, t, n) => {
    let r = (0, d.Z)(),
      a = l.useMemo(() => e ? [] : r(t.rankedSkuIds).filter(e => e.skuId !== t.rewardSkuId || null != n), [e, r, t.rankedSkuIds, n, t.rewardSkuId]),
      s = (0, u.a)()(a),
      i = (0, f.l)(s);
    return {
      products: (0, h.St)(i)
    }
  })(t, n, O), y = l.useMemo(() => !t && 0 !== n.rankedSkuIds.length && !(_.length > 0) && n.rankedSkuIds.every(e => {
    var t;
    return (null == (t = o.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
  }), [t, n.rankedSkuIds, _.length]), j = t || y, {
    readyToClaim: k
  } = (0, C.q)(x, n.rewardSkuId), T = null == O && null != n.rewardSkuId && null != x;
  return (0, r.jsx)(s.Z, {
    gap: "xl",
    children: j ? (0, r.jsx)(r.Fragment, {
      children: [true, true, true, true, true].map((e, t) => (0, r.jsx)(p.Z, {}, t))
    }) : (0, r.jsxs)(r.Fragment, {
      children: [T && k && (0, r.jsx)(i.k0, {
        newValue: {
          tilePosition: 0,
          pageSection: "top 4",
          categoryPosition: 0
        },
        children: (0, r.jsx)(m.Z, {
          category: x,
          rewardSkuId: n.rewardSkuId
        })
      }, n.rewardSkuId), _.map((e, t) => {
        let n = o.Z.getCategoryForProduct(e.skuId);
        return null == e || null == n ? null : (0, r.jsx)(i.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "top 4",
            categoryPosition: 0
          },
          children: (0, r.jsx)(g.Z, {
            skuId: null == e ? true : e.skuId,
            prioritizedCurrency: v === E.AW.ORBS ? b.tA.ORBS : true,
            onClickAnalytics: (0, b.wO)(e, v, S)
          }, e.skuId)
        }, null == e ? true : e.skuId)
      })]
    })
  })
}