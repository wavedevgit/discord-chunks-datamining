/** Chunk was on 45620 **/
/** chunk id: 963278, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk128922 = require("./128922.js"),
  Chunk709999 = require("./709999.jsx"),
  Chunk653126 = require("./653126.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let C = e => {
  let {
    shelf: t,
    handleTransition: n,
    tab: l
  } = e, C = (0, a.e7)([o.default], () => o.default.getCurrentUser()), _ = d.Z.useConfig({
    location: "ShelfBlock"
  }).showCardsV2;
  return null == C ? null : (0, r.jsxs)("div", {
    className: i()(h.shelfBlockContainer, h.centeredSection),
    children: [(0, r.jsxs)("div", {
      className: h.blockHeader,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-lg/semibold",
        children: t.name
      }), (0, r.jsx)(s.zxk, {
        variant: "secondary",
        text: f.intl.formatToPlainString(f.t.bc9RBA, {
          category_name: t.name
        }),
        onClick: () => n("shelf block see all", t.categorySkuId)
      })]
    }), (0, r.jsx)("div", {
      className: h.feed,
      children: (0, r.jsx)(r.Fragment, {
        children: t.rankedSkuIds.map((e, n) => {
          let i = u.Z.getCategoryForProduct(e),
            a = u.Z.getProduct(e);
          return null == i || null == a ? null : (0, r.jsx)(c.k0, {
            newValue: {
              tilePosition: n,
              pageSection: t.name,
              categoryPosition: 2
            },
            children: _ ? (0, r.jsx)(p.Z, {
              skuId: e
            }, e) : (0, r.jsx)(g.Z, {
              product: a,
              category: i,
              user: C,
              tab: l
            }, e)
          }, e)
        })
      })
    })]
  })
}