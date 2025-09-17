/** Chunk was on 45620 **/
/** chunk id: 963278, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk709999 = require("./709999.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310582 = require("./310582.js");
let p = e => {
  let {
    shelf: t,
    handleTransition: n,
    tab: l
  } = e, p = (0, o.e7)([i.default], () => i.default.getCurrentUser());
  return null == p ? null : (0, r.jsxs)("div", {
    className: a()(f.shelfBlockContainer, f.centeredSection),
    children: [(0, r.jsxs)("div", {
      className: f.blockHeader,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-lg/semibold",
        children: t.name
      }), (0, r.jsx)(s.zxk, {
        variant: "secondary",
        text: g.intl.formatToPlainString(g.t.bc9RBA, {
          category_name: t.name
        }),
        onClick: () => n("shelf block see all", t.categorySkuId)
      })]
    }), (0, r.jsx)("div", {
      className: f.feed,
      children: (0, r.jsx)(r.Fragment, {
        children: t.rankedSkuIds.map((e, n) => {
          let a = u.Z.getCategoryForProduct(e),
            o = u.Z.getProduct(e);
          return null == a || null == o ? null : (0, r.jsx)(c.k0, {
            newValue: {
              tilePosition: n,
              pageSection: t.name,
              categoryPosition: 2
            },
            children: (0, r.jsx)(d.Z, {
              product: o,
              category: a,
              user: p,
              tab: l
            }, e)
          }, e)
        })
      })
    })]
  })
}