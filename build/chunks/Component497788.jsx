/** Chunk was on 45620 **/
/** chunk id: 497788, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk370039 = require("./370039.js"),
  Chunk937510 = require("./937510.js"),
  Chunk653126 = require("./653126.jsx"),
  Chunk786040 = require("./786040.js"),
  Chunk401975 = require("./401975.jsx"),
  Chunk373183 = require("./373183.jsx"),
  Chunk934760 = require("./934760.js"),
  Chunk619899 = require("./619899.js"),
  Chunk215023 = require("./215023.js"),
  Chunk310582 = require("./310582.js");
(0, Chunk884697.IC)(90);
let y = e => {
  let {
    isBlockLoading: t = false,
    heroBlock: n,
    tab: i
  } = e, f = (0, d.sp)(), y = l.useMemo(() => p.Z.getCategoryForProduct(n.rewardSkuId), [n.rewardSkuId]), j = (0, s.e7)([g.Z], () => g.Z.getPurchase(n.rewardSkuId)), {
    cardContainerRef: k,
    totalCards: I
  } = (e => {
    let [t, n] = l.useState(1), r = (0, o.dQu)(o.TVs.space.SPACE_XL), i = (0, u.Z)(() => {
      (null == a ? true : a.current) != null && n(Math.max(1, Math.floor((a.current.offsetWidth + r) / (246 + r))))
    }), a = (0, c.y)(i, [r, e], {
      fireOnMount: true,
      fireOnDepsChange: true,
      enabled: e
    });
    return {
      cardContainerRef: l.useCallback(t => {
        a.current = t, null != t && e && i()
      }, [i, a, e]),
      totalCards: e ? t : true
    }
  })(i !== O.AW.ORBS), {
    products: T
  } = ((e, t, n, r) => {
    let i = (0, x.Z)(),
      a = (0, s.e7)([p.Z], () => p.Z.products),
      o = l.useMemo(() => e ? [] : a.size > 0 ? i(t.rankedSkuIds).filter(e => e.skuId !== t.rewardSkuId || null != r) : [], [e, i, t.rankedSkuIds, a, r, t.rewardSkuId]),
      c = (0, h.a)()(o),
      u = (0, m.l)(c).slice(0, n);
    return {
      products: (0, E.St)(u)
    }
  })(t, n, I, j), L = l.useMemo(() => !t && 0 !== n.rankedSkuIds.length && !(T.length > 0) && n.rankedSkuIds.every(e => {
    var t;
    return (null == (t = p.Z.getProduct(e)) ? true : t.variantGroupStoreListingId) != null
  }), [t, n.rankedSkuIds, T.length]), B = t || L;
  return (0, r.jsx)("div", {
    className: a()({
      [S.row]: i === O.AW.HOME,
      [S.feed]: i === O.AW.ORBS
    }),
    ref: k,
    children: B ? (0, r.jsx)(r.Fragment, {
      children: [...Array(null != I ? I : 4)].map((e, t) => (0, r.jsx)(b.Z, {}, t))
    }) : (0, r.jsxs)(r.Fragment, {
      children: [null == j && null != n.rewardSkuId && null != y && (0, r.jsx)(d.k0, {
        newValue: {
          tilePosition: 0,
          pageSection: "top 4",
          categoryPosition: 0
        },
        children: (0, r.jsx)(v.Z, {
          category: y,
          rewardSkuId: n.rewardSkuId
        })
      }, n.rewardSkuId), T.map((e, t) => {
        let n = p.Z.getCategoryForProduct(e.skuId);
        return null == e || null == n ? null : (0, r.jsx)(d.k0, {
          newValue: {
            tilePosition: t,
            pageSection: "top 4",
            categoryPosition: 0
          },
          children: (0, r.jsx)(C.Z, {
            skuId: null == e ? true : e.skuId,
            prioritizedCurrency: i === O.AW.ORBS ? _.tA.ORBS : true,
            onClickAnalytics: (0, _.wO)(e, i, f)
          }, e.skuId)
        }, null == e ? true : e.skuId)
      })]
    })
  })
}