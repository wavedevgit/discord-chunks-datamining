/** Chunk was on 45620 **/
/** chunk id: 963278, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
let h = e => {
  let {
    shelf: t,
    handleTransition: n,
    tab: l
  } = e, h = (0, i.e7)([o.default], () => o.default.getCurrentUser()), _ = d.Z.useConfig({
    location: "ShelfBlock"
  }).showCardsV2;
  return null == h ? null : (0, r.jsxs)("div", {
    className: s()(C.shelfBlockContainer, C.centeredSection),
    children: [(0, r.jsxs)("div", {
      className: C.blockHeader,
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-lg/semibold",
        children: t.name
      }), (0, r.jsx)(a.zxk, {
        variant: "secondary",
        text: p.intl.formatToPlainString(p.t.bc9RBA, {
          category_name: t.name
        }),
        onClick: () => n("shelf block see all", t.categorySkuId)
      })]
    }), (0, r.jsx)("div", {
      className: C.feed,
      children: (0, r.jsx)(r.Fragment, {
        children: t.rankedSkuIds.map((e, n) => {
          let s = u.Z.getCategoryForProduct(e),
            i = u.Z.getProduct(e);
          return null == s || null == i ? null : (0, r.jsx)(c.k0, {
            newValue: {
              tilePosition: n,
              pageSection: t.name,
              categoryPosition: 2
            },
            children: _ ? (0, r.jsx)(f.Z, {
              skuId: e
            }, e) : (0, r.jsx)(g.Z, {
              product: i,
              category: s,
              user: h,
              tab: l
            }, e)
          }, e)
        })
      })
    })]
  })
}