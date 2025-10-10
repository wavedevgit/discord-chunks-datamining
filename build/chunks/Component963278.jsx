/** Chunk was on 45620 **/
/** chunk id: 963278, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
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
  Chunk786040 = require("./786040.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let m = e => {
  let {
    shelf: t,
    handleTransition: n,
    tab: l
  } = e, m = (0, s.e7)([a.default], () => a.default.getCurrentUser()), b = d.Z.useConfig({
    location: "ShelfBlock"
  }).showCardsV2;
  return null == m ? null : (0, r.jsxs)("div", {
    className: i()(_.shelfBlockContainer, _.centeredSection),
    children: [(0, r.jsxs)("div", {
      className: _.blockHeader,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        children: t.name
      }), (0, r.jsx)(o.Button, {
        variant: "secondary",
        text: h.intl.formatToPlainString(h.t.bc9RBA, {
          category_name: t.name
        }),
        onClick: () => n("shelf block see all", t.categorySkuId)
      })]
    }), (0, r.jsx)("div", {
      className: _.feed,
      children: (0, r.jsx)(r.Fragment, {
        children: t.rankedSkuIds.map((e, n) => {
          let i = u.Z.getCategoryForProduct(e),
            s = u.Z.getProduct(e);
          return null == i || null == s ? null : (0, r.jsx)(c.k0, {
            newValue: {
              tilePosition: n,
              pageSection: t.name,
              categoryPosition: 2
            },
            children: b ? (0, r.jsx)(f.Z, {
              skuId: e,
              prioritizedCurrency: l === C.AW.ORBS ? p.tA.ORBS : true
            }, e) : (0, r.jsx)(g.Z, {
              product: s,
              category: i,
              user: m,
              tab: l
            }, e)
          }, e)
        })
      })
    })]
  })
}