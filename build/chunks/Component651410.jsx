/** Chunk was on 83855 **/
/** chunk id: 651410, original params: e,s,l (module,exports,require) **/
require.d(exports, {
  default: () => f
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
let f = e => {
  let {
    analyticsLocations: s,
    transitionState: l,
    onClose: f
  } = e, m = (0, u.eJ)("CollectiblesRentalsModal"), v = a.useMemo(() => b.Vk.map(e => c.A.getProduct(e)).filter(e => null != e), []), g = (0, o.m)(v);
  return (0, t.jsx)(n.f5, {
    value: s,
    children: (0, t.jsx)(d.dWK, {
      size: "xl",
      onClose: f,
      transitionState: l,
      children: (0, t.jsxs)("div", {
        className: j.yl,
        children: [(0, t.jsxs)("div", {
          className: j.wx,
          children: [(0, t.jsxs)("div", {
            className: j.gn,
            children: [(0, t.jsx)(r.Heading, {
              variant: "heading-xl/bold",
              children: p.intl.string(p.t.bfXHLB)
            }), (0, t.jsx)(r.LpS, {
              text: p.intl.string(p.t.oW0eUd),
              disableColor: true
            })]
          }), (0, t.jsx)("button", {
            className: j.b,
            onClick: f,
            "aria-label": p.intl.string(p.t.cpT0Cq),
            children: (0, t.jsx)(i.P, {})
          })]
        }), (0, t.jsx)(r.T7Y, {
          className: j.XG,
          children: (0, t.jsx)("div", {
            className: j.Vg,
            children: (0, t.jsx)(h.v3.Provider, {
              value: {
                rentalDuration: m,
                flattenProductVariants: true
              },
              children: g.map(e => (0, t.jsx)(x.A, {
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