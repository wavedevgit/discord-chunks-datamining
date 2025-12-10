/** Chunk was on 19919 **/
/** chunk id: 825868, original params: e,l,s (module,exports,require) **/
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
  Chunk369645 = require("./369645.js");
let m = e => {
  let {
    analyticsLocations: l,
    transitionState: s,
    onClose: m
  } = e, j = (0, o.IT)("CollectiblesRentalsModal"), v = t.useMemo(() => x.Hl.map(e => c.Z.getProduct(e)).filter(e => null != e), []), g = (0, u.R)(v);
  return (0, r.jsx)(d.Gt, {
    value: l,
    children: (0, r.jsx)(n.IX, {
      size: "xl",
      onClose: m,
      transitionState: s,
      children: (0, r.jsxs)("div", {
        className: b.modal,
        children: [(0, r.jsxs)("div", {
          className: b.header,
          children: [(0, r.jsx)(i.Heading, {
            variant: "heading-xl/bold",
            children: _.intl.string(_.t.bfXHLB)
          }), (0, r.jsx)("button", {
            className: b.closeButton,
            onClick: m,
            "aria-label": _.intl.string(_.t.cpT0Cq),
            children: (0, r.jsx)(a.D, {})
          })]
        }), (0, r.jsx)(i.Den, {
          className: b.scroller,
          children: (0, r.jsx)("div", {
            className: b.grid,
            children: (0, r.jsx)(p.zp.Provider, {
              value: {
                rentalDuration: j,
                flattenProductVariants: true
              },
              children: g.map(e => (0, r.jsx)(h.Z, {
                skuId: null == e ? true : e.skuId,
                prioritizedCurrency: p.tA.ORBS
              }, "rental_inner_".concat(e.skuId)))
            })
          })
        })]
      })
    })
  })
}