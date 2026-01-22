/** Chunk was on 59275 **/
/** chunk id: 695413, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk408238 = require("./408238.jsx"),
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
let A = e => {
  let t, l, A, x, {
      isBlockLoading: S = false,
      heroBlock: C,
      tab: O
    } = e,
    _ = (0, i.uM)(),
    y = r.useMemo(() => o.A.getCategoryForProduct(C.rewardSkuId), [C.rewardSkuId]),
    j = (0, s.bG)([c.A], () => c.A.getPurchase(C.rewardSkuId)),
    {
      products: L
    } = (t = (0, d.A)(), l = r.useMemo(() => S ? [] : t(C.rankedSkuIds).filter(e => e.skuId !== C.rewardSkuId || null != j), [S, t, C.rankedSkuIds, j, C.rewardSkuId]), A = (0, u.p)()(l), x = (0, f.X)(A), {
      products: (0, h.od)(x)
    }),
    T = r.useMemo(() => !S && 0 !== C.rankedSkuIds.length && !(L.length > 0) && C.rankedSkuIds.every(e => {
      var t;
      return (null == (t = o.A.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
    }), [S, C.rankedSkuIds, L.length]),
    I = S || T,
    {
      readyToClaim: N
    } = (0, E.K)(y, C.rewardSkuId),
    k = null == j && null != C.rewardSkuId && null != y;
  return (0, n.jsx)(a.A, {
    gap: "xl",
    children: I ? (0, n.jsx)(n.Fragment, {
      children: [true, true, true, true, true].map((e, t) => (0, n.jsx)(p.A, {}, t))
    }) : (0, n.jsxs)(n.Fragment, {
      children: [k && N && (0, n.jsx)(i.R9, {
        newValue: {
          tilePosition: 0,
          pageSection: "top 4",
          categoryPosition: 0
        },
        children: (0, n.jsx)(m.A, {
          category: y,
          rewardSkuId: C.rewardSkuId
        })
      }, C.rewardSkuId), L.map((e, t) => {
        let l = o.A.getCategoryForProduct(e.skuId);
        return null == e || null == l ? null : (0, n.jsx)(i.R9, {
          newValue: {
            tilePosition: t,
            pageSection: "top 4",
            categoryPosition: 0
          },
          children: (0, n.jsx)(b.A, {
            skuId: null == e ? true : e.skuId,
            prioritizedCurrency: O === v.G2.ORBS ? g.Hi.ORBS : true,
            onClickAnalytics: (0, g.UU)(e, O, _)
          }, e.skuId)
        }, null == e ? true : e.skuId)
      })]
    })
  })
}