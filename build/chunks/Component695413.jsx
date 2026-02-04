/** Chunk was on 59275 **/
/** chunk id: 695413, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk720462 = require("./720462.jsx"),
  Chunk440938 = require("./440938.jsx"),
  Chunk590180 = require("./590180.js"),
  Chunk4227 = require("./4227.js"),
  Chunk511265 = require("./511265.js"),
  Chunk313276 = require("./313276.js"),
  Chunk206077 = require("./206077.js"),
  Chunk751304 = require("./751304.jsx"),
  Chunk561769 = require("./561769.js"),
  Chunk484469 = require("./484469.jsx"),
  Chunk661623 = require("./661623.jsx"),
  Chunk940622 = require("./940622.js"),
  Chunk357704 = require("./357704.js"),
  Chunk758836 = require("./758836.js");
let v = e => {
  let t, n, v, C, {
      isBlockLoading: A = false,
      heroBlock: x,
      tab: S
    } = e,
    O = (0, i.uM)(),
    y = l.useMemo(() => o.A.getCategoryForProduct(x.rewardSkuId), [x.rewardSkuId]),
    j = (0, s.bG)([c.A], () => c.A.getPurchase(x.rewardSkuId)),
    {
      products: L
    } = (t = (0, d.A)(), n = l.useMemo(() => A ? [] : t(x.rankedSkuIds).filter(e => e.skuId !== x.rewardSkuId || null != j), [A, t, x.rankedSkuIds, j, x.rewardSkuId]), v = (0, u.p)()(n), C = (0, g.X)(v), {
      products: (0, h.od)(C)
    }),
    T = l.useMemo(() => !A && 0 !== x.rankedSkuIds.length && !(L.length > 0) && x.rankedSkuIds.every(e => {
      var t;
      return (null == (t = o.A.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
    }), [A, x.rankedSkuIds, L.length]),
    I = A || T,
    {
      readyToClaim: k
    } = (0, _.K)(y, x.rewardSkuId),
    N = null == j && null != x.rewardSkuId && null != y;
  return (0, r.jsx)(a.A, {
    gap: "xl",
    children: I ? (0, r.jsx)(r.Fragment, {
      children: [true, true, true, true, true].map((e, t) => (0, r.jsx)(f.A, {}, t))
    }) : (0, r.jsxs)(r.Fragment, {
      children: [N && k && (0, r.jsx)(i.R9, {
        newValue: {
          tilePosition: 0,
          pageSection: "top 4",
          categoryPosition: 0
        },
        children: (0, r.jsx)(b.A, {
          category: y,
          rewardSkuId: x.rewardSkuId
        })
      }, x.rewardSkuId), L.map((e, t) => {
        let n = o.A.getCategoryForProduct(e.skuId);
        return null == e || null == n ? null : (0, r.jsx)(i.R9, {
          newValue: {
            tilePosition: t,
            pageSection: "top 4",
            categoryPosition: 0
          },
          children: (0, r.jsx)(p.A, {
            skuId: null == e ? true : e.skuId,
            prioritizedCurrency: S === E.G2.ORBS ? m.Hi.ORBS : true,
            onClickAnalytics: (0, m.UU)(e, S, O)
          }, e.skuId)
        }, null == e ? true : e.skuId)
      })]
    })
  })
}