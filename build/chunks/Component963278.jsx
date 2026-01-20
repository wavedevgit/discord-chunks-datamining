/** Chunk was on 45620 **/
/** chunk id: 963278, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk937510 = require("./937510.js"),
  Chunk653126 = require("./653126.jsx"),
  Chunk786040 = require("./786040.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk222194 = require("./222194.js");
let C = e => {
  let {
    shelf: t,
    handleTransition: n,
    tab: a
  } = e, C = (0, i.e7)([c.default], () => c.default.getCurrentUser()), E = (0, i.e7)([d.Z], () => d.Z.getCategory(t.categorySkuId)), v = (0, u.sp)(), x = l.useMemo(() => t.rankedSkuIds.map(e => d.Z.getProduct(e)).filter(e => null != e), [t.rankedSkuIds]), S = (0, f.l)(x).slice(0, 4);
  return null == C ? null : (0, r.jsxs)("div", {
    className: s()(m.shelfBlockContainer, m.centeredSection),
    children: [(0, r.jsxs)("div", {
      className: m.blockHeader,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        children: t.name
      }), (0, r.jsx)(o.Button, {
        variant: "secondary",
        text: h.intl.formatToPlainString(h.t.bc9RBE, {
          category_name: t.name
        }),
        onClick: () => {
          n({
            sourceButton: "shelf block see all",
            categorySkuId: t.categorySkuId,
            isInternalShopDeeplink: true,
            isOrbsExclusive: (null == E ? true : E.isOrbsExclusive) && a !== p.AW.ORBS
          })
        }
      })]
    }), (0, r.jsx)("div", {
      className: m.feed,
      children: (0, r.jsx)(r.Fragment, {
        children: S.map((e, n) => {
          if (null == d.Z.getCategoryForProduct(e.skuId) || null == e) return null;
          let l = e.skuId;
          return (0, r.jsx)(u.k0, {
            newValue: {
              tilePosition: n,
              pageSection: t.name,
              categoryPosition: 2
            },
            children: (0, r.jsx)(g.Z, {
              skuId: l,
              prioritizedCurrency: a === p.AW.ORBS ? b.tA.ORBS : true,
              onClickAnalytics: (0, b.wO)(e, a, v)
            }, l)
          }, l)
        })
      })
    })]
  })
}