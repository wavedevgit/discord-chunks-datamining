/** Chunk was on 45620 **/
/** chunk id: 963278, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  } = e, v = (0, s.e7)([c.default], () => c.default.getCurrentUser()), E = g.Z.useConfig({
    location: "ShelfBlock"
  }).showCardsV2, x = (0, u.sp)(), O = l.useMemo(() => t.rankedSkuIds.map(e => d.Z.getProduct(e)).filter(e => null != e), [t.rankedSkuIds]), S = (0, p.l)(O).slice(0, 4);
  return null == v ? null : (0, r.jsxs)("div", {
    className: a()(b.shelfBlockContainer, b.centeredSection),
    children: [(0, r.jsxs)("div", {
      className: b.blockHeader,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        children: t.name
      }), (0, r.jsx)(o.Button, {
        variant: "secondary",
        text: m.intl.formatToPlainString(m.t.bc9RBE, {
          category_name: t.name
        }),
        onClick: () => n("shelf block see all", t.categorySkuId, true, true)
      })]
    }), (0, r.jsx)("div", {
      className: b.feed,
      children: (0, r.jsx)(r.Fragment, {
        children: S.map((e, n) => {
          let l = d.Z.getCategoryForProduct(e.skuId);
          if (null == l || null == e) return null;
          let a = e.skuId;
          return (0, r.jsx)(u.k0, {
            newValue: {
              tilePosition: n,
              pageSection: t.name,
              categoryPosition: 2
            },
            children: E ? (0, r.jsx)(h.Z, {
              skuId: a,
              prioritizedCurrency: i === _.AW.ORBS ? C.tA.ORBS : true,
              onClickAnalytics: (0, C.wO)(e, i, x)
            }, a) : (0, r.jsx)(f.Z, {
              product: e,
              category: l,
              user: v,
              tab: i
            }, a)
          }, a)
        })
      })
    })]
  })
}