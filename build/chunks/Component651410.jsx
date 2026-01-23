/** Chunk was on 83855 **/
/** chunk id: 651410, original params: e,l,s (module,exports,require) **/
require.d(exports, {
  default: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk789645 = require("./789645.jsx"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk590180 = require("./590180.js"),
  Chunk379177 = require("./379177.js"),
  Chunk102666 = require("./102666.js"),
  Chunk751304 = require("./751304.jsx"),
  Chunk561769 = require("./561769.js"),
  Chunk758836 = require("./758836.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk477920 = require("./477920.js");
let j = e => {
  let {
    analyticsLocations: l,
    transitionState: s,
    onClose: j
  } = e, m = (0, o.eJ)("CollectiblesRentalsModal"), g = a.useMemo(() => b.Vk.map(e => c.A.getProduct(e)).filter(e => null != e), []), v = (0, u.m)(g);
  return (0, t.jsx)(d.f5, {
    value: l,
    children: (0, t.jsx)(i.dWK, {
      size: "xl",
      onClose: j,
      transitionState: s,
      children: (0, t.jsxs)("div", {
        className: p.yl,
        children: [(0, t.jsxs)("div", {
          className: p.wx,
          children: [(0, t.jsxs)("div", {
            className: p.gn,
            children: [(0, t.jsx)(n.Heading, {
              variant: "heading-xl/bold",
              children: _.intl.string(_.t.bfXHLB)
            }), (0, t.jsx)(n.LpS, {
              text: _.intl.string(_.t.oW0eUd),
              disableColor: true
            })]
          }), (0, t.jsx)("button", {
            className: p.b,
            onClick: j,
            "aria-label": _.intl.string(_.t.cpT0Cq),
            children: (0, t.jsx)(r.P, {})
          })]
        }), (0, t.jsx)(n.T7Y, {
          className: p.XG,
          children: (0, t.jsx)("div", {
            className: p.Vg,
            children: (0, t.jsx)(h.v3.Provider, {
              value: {
                rentalDuration: m,
                flattenProductVariants: true
              },
              children: v.map(e => (0, t.jsx)(x.A, {
                skuId: null == e ? true : e.skuId,
                prioritizedCurrency: h.Hi.ORBS
              }, "rental_inner_".concat(e.skuId)))
            })
          })
        })]
      })
    })
  })
}