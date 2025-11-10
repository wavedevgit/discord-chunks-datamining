/** Chunk was on 45620 **/
/** chunk id: 963278, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk128922 = require("./128922.js"),
  Chunk937510 = require("./937510.js"),
  Chunk709999 = require("./709999.jsx"),
  Chunk653126 = require("./653126.jsx"),
  Chunk786040 = require("./786040.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let v = e => {
  let {
    shelf: t,
    handleTransition: n,
    tab: i
  } = e, v = (0, a.e7)([c.default], () => c.default.getCurrentUser()), E = (0, a.e7)([d.Z], () => d.Z.getCategory(t.categorySkuId)), x = p.Z.useConfig({
    location: "ShelfBlock"
  }).showCardsV2, O = (0, u.sp)(), S = l.useMemo(() => t.rankedSkuIds.map(e => d.Z.getProduct(e)).filter(e => null != e), [t.rankedSkuIds]), y = (0, g.l)(S).slice(0, 4);
  return null == v ? null : (0, r.jsxs)("div", {
    className: s()(b.shelfBlockContainer, b.centeredSection),
    children: [(0, r.jsxs)("div", {
      className: b.blockHeader,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        children: t.name
      }), (0, r.jsx)(o.Button, {
        variant: "secondary",
        text: _.intl.formatToPlainString(_.t.bc9RBE, {
          category_name: t.name
        }),
        onClick: () => {
          n({
            sourceButton: "shelf block see all",
            categorySkuId: t.categorySkuId,
            isInternalShopDeeplink: true,
            isOrbsExclusive: null == E ? true : E.isOrbsExclusive
          })
        }
      })]
    }), (0, r.jsx)("div", {
      className: b.feed,
      children: (0, r.jsx)(r.Fragment, {
        children: y.map((e, n) => {
          let l = d.Z.getCategoryForProduct(e.skuId);
          if (null == l || null == e) return null;
          let s = e.skuId;
          return (0, r.jsx)(u.k0, {
            newValue: {
              tilePosition: n,
              pageSection: t.name,
              categoryPosition: 2
            },
            children: x ? (0, r.jsx)(h.Z, {
              skuId: s,
              prioritizedCurrency: i === m.AW.ORBS ? C.tA.ORBS : true,
              onClickAnalytics: (0, C.wO)(e, i, O)
            }, s) : (0, r.jsx)(f.Z, {
              product: e,
              category: l,
              user: v,
              tab: i
            }, s)
          }, s)
        })
      })
    })]
  })
}