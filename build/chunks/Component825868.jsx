/** Chunk was on 19919 **/
/** chunk id: 825868, original params: e,a,l (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk197723 = require("./197723.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk763941 = require("./763941.js"),
  Chunk298505 = require("./298505.js"),
  Chunk653126 = require("./653126.jsx"),
  Chunk786040 = require("./786040.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk797991 = require("./797991.js");
let m = e => {
  let {
    analyticsLocations: a,
    transitionState: l,
    onClose: m
  } = e, v = (0, o.IT)("CollectiblesRentalsModal"), C = s.useMemo(() => x.Hl.map(e => c.Z.getProduct(e)).filter(e => null != e), []), g = (0, u.R)(C);
  return (0, t.jsx)(i.Gt, {
    value: a,
    children: (0, t.jsx)(d.IX, {
      size: "xl",
      onClose: m,
      transitionState: l,
      children: (0, t.jsxs)("div", {
        className: j.modal,
        children: [(0, t.jsxs)("div", {
          className: j.header,
          children: [(0, t.jsxs)("div", {
            className: j.titleContainer,
            children: [(0, t.jsx)(n.Heading, {
              variant: "heading-xl/bold",
              children: p.intl.string(p.t.bfXHLB)
            }), (0, t.jsx)(n.IGR, {
              text: p.intl.string(p.t.oW0eUd),
              disableColor: true
            })]
          }), (0, t.jsx)("button", {
            className: j.closeButton,
            onClick: m,
            "aria-label": p.intl.string(p.t.cpT0Cq),
            children: (0, t.jsx)(r.D, {})
          })]
        }), (0, t.jsx)(n.Den, {
          className: j.scroller,
          children: (0, t.jsx)("div", {
            className: j.grid,
            children: (0, t.jsx)(h.zp.Provider, {
              value: {
                rentalDuration: v,
                flattenProductVariants: true
              },
              children: g.map(e => (0, t.jsx)(b.Z, {
                skuId: null == e ? true : e.skuId,
                prioritizedCurrency: h.tA.ORBS
              }, "rental_inner_".concat(e.skuId)))
            })
          })
        })]
      })
    })
  })
}