/** Chunk was on 45620 **/
/** chunk id: 963278, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk709999 = require("./709999.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk253032 = require("./253032.js");
let f = e => {
  let {
    shelf: t,
    handleTransition: r,
    tab: l
  } = e, f = (0, i.e7)([s.default], () => s.default.getCurrentUser());
  return null == f ? null : (0, n.jsxs)("div", {
    className: a()(g.shelfBlockContainer, g.centeredSection),
    children: [(0, n.jsxs)("div", {
      className: g.blockHeader,
      children: [(0, n.jsx)(o.X6q, {
        variant: "heading-lg/semibold",
        children: t.name
      }), (0, n.jsx)(o.zxk, {
        variant: "secondary",
        text: p.intl.formatToPlainString(p.t.bc9RBA, {
          category_name: t.name
        }),
        onClick: () => r("shelf block see all", t.categorySkuId)
      })]
    }), (0, n.jsx)("div", {
      className: g.feed,
      children: (0, n.jsx)(n.Fragment, {
        children: t.rankedSkuIds.map((e, r) => {
          let a = u.Z.getCategoryForProduct(e),
            i = u.Z.getProduct(e);
          return null == a || null == i ? null : (0, n.jsx)(c.k0, {
            newValue: {
              tilePosition: r,
              pageSection: t.name,
              categoryPosition: 2
            },
            children: (0, n.jsx)(d.Z, {
              product: i,
              category: a,
              user: f,
              tab: l
            }, e)
          }, e)
        })
      })
    })]
  })
}