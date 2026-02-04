/** Chunk was on 59275 **/
/** chunk id: 251191, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk590180 = require("./590180.js"),
  Chunk206077 = require("./206077.js"),
  Chunk751304 = require("./751304.jsx"),
  Chunk561769 = require("./561769.js"),
  Chunk758836 = require("./758836.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk201073 = require("./201073.js");
let _ = e => {
  let {
    shelf: t,
    handleTransition: n,
    tab: s
  } = e, _ = (0, i.bG)([c.default], () => c.default.getCurrentUser()), E = (0, i.bG)([d.A], () => d.A.getCategory(t.categorySkuId)), v = (0, u.uM)(), C = l.useMemo(() => t.rankedSkuIds.map(e => d.A.getProduct(e)).filter(e => null != e), [t.rankedSkuIds]), A = (0, g.X)(C).slice(0, 4);
  return null == _ ? null : (0, r.jsxs)("div", {
    className: a()(b.Vp, b.YB),
    children: [(0, r.jsxs)("div", {
      className: b.$6,
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
            isOrbsExclusive: (null == E ? true : E.isOrbsExclusive) && s !== p.G2.ORBS
          })
        }
      })]
    }), (0, r.jsx)("div", {
      className: b.hm,
      children: (0, r.jsx)(r.Fragment, {
        children: A.map((e, n) => {
          if (null == d.A.getCategoryForProduct(e.skuId) || null == e) return null;
          let l = e.skuId;
          return (0, r.jsx)(u.R9, {
            newValue: {
              tilePosition: n,
              pageSection: t.name,
              categoryPosition: 2
            },
            children: (0, r.jsx)(f.A, {
              skuId: l,
              prioritizedCurrency: s === p.G2.ORBS ? m.Hi.ORBS : true,
              onClickAnalytics: (0, m.UU)(e, s, v)
            }, l)
          }, l)
        })
      })
    })]
  })
}