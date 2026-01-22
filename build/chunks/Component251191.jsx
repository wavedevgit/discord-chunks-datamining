/** Chunk was on 59275 **/
/** chunk id: 251191, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => E
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
let E = e => {
  let {
    shelf: t,
    handleTransition: l,
    tab: s
  } = e, E = (0, i.bG)([c.default], () => c.default.getCurrentUser()), v = (0, i.bG)([d.A], () => d.A.getCategory(t.categorySkuId)), A = (0, u.uM)(), x = r.useMemo(() => t.rankedSkuIds.map(e => d.A.getProduct(e)).filter(e => null != e), [t.rankedSkuIds]), S = (0, f.X)(x).slice(0, 4);
  return null == E ? null : (0, n.jsxs)("div", {
    className: a()(h.Vp, h.YB),
    children: [(0, n.jsxs)("div", {
      className: h.$6,
      children: [(0, n.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        children: t.name
      }), (0, n.jsx)(o.Button, {
        variant: "secondary",
        text: p.intl.formatToPlainString(p.t.bc9RBE, {
          category_name: t.name
        }),
        onClick: () => {
          l({
            sourceButton: "shelf block see all",
            categorySkuId: t.categorySkuId,
            isInternalShopDeeplink: true,
            isOrbsExclusive: (null == v ? true : v.isOrbsExclusive) && s !== m.G2.ORBS
          })
        }
      })]
    }), (0, n.jsx)("div", {
      className: h.hm,
      children: (0, n.jsx)(n.Fragment, {
        children: S.map((e, l) => {
          if (null == d.A.getCategoryForProduct(e.skuId) || null == e) return null;
          let r = e.skuId;
          return (0, n.jsx)(u.R9, {
            newValue: {
              tilePosition: l,
              pageSection: t.name,
              categoryPosition: 2
            },
            children: (0, n.jsx)(b.A, {
              skuId: r,
              prioritizedCurrency: s === m.G2.ORBS ? g.Hi.ORBS : true,
              onClickAnalytics: (0, g.UU)(e, s, A)
            }, r)
          }, r)
        })
      })
    })]
  })
}