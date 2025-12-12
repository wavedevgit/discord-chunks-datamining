/** Chunk was on 19919 **/
/** chunk id: 825868, original params: e,l,a (module,exports,require) **/
require.d(exports, {
  default: () => j
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
let j = e => {
  let {
    analyticsLocations: l,
    transitionState: a,
    onClose: j
  } = e, v = (0, o.IT)("CollectiblesRentalsModal"), g = r.useMemo(() => p.Hl.map(e => c.Z.getProduct(e)).filter(e => null != e), []), k = (0, u.R)(g);
  return (0, s.jsx)(i.Gt, {
    value: l,
    children: (0, s.jsx)(d.IX, {
      size: "xl",
      onClose: j,
      transitionState: a,
      children: (0, s.jsxs)("div", {
        className: m.modal,
        children: [(0, s.jsxs)("div", {
          className: m.header,
          children: [(0, s.jsx)(n.Heading, {
            variant: "heading-xl/bold",
            children: x.intl.string(x.t.bfXHLB)
          }), (0, s.jsx)("button", {
            className: m.closeButton,
            onClick: j,
            "aria-label": x.intl.string(x.t.cpT0Cq),
            children: (0, s.jsx)(t.D, {})
          })]
        }), (0, s.jsx)(n.Den, {
          className: m.scroller,
          children: (0, s.jsx)("div", {
            className: m.grid,
            children: (0, s.jsx)(h.zp.Provider, {
              value: {
                rentalDuration: v,
                flattenProductVariants: true
              },
              children: k.map(e => (0, s.jsx)(b.Z, {
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