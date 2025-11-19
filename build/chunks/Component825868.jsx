/** Chunk was on 19919 **/
/** chunk id: 825868, original params: e,l,n (module,exports,require) **/
require.d(exports, {
  default: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk597688 = require("./597688.js"),
  Chunk763941 = require("./763941.js"),
  Chunk937510 = require("./937510.js"),
  Chunk653126 = require("./653126.jsx"),
  Chunk786040 = require("./786040.js"),
  Chunk215023 = require("./215023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk369645 = require("./369645.js");
let j = e => {
  let {
    analyticsLocations: l,
    transitionState: n,
    onClose: j
  } = e, _ = (0, c.IT)("CollectiblesRentalsModal"), b = t.useMemo(() => h.Hl.map(e => a.Z.getProduct(e)).filter(e => null != e), []), k = (0, d.l)(b);
  return (0, s.jsx)(i.Gt, {
    value: l,
    children: (0, s.jsxs)(r.Y0X, {
      parentComponent: "CollectiblesRentalsModal",
      transitionState: n,
      size: r.CgR.LARGE,
      children: [(0, s.jsxs)(r.xBx, {
        separator: false,
        children: [(0, s.jsx)(r.Heading, {
          variant: "heading-xl/bold",
          children: p.intl.string(p.t.bfXHLB)
        }), (0, s.jsx)(r.olH, {
          onClick: j
        })]
      }), (0, s.jsx)(r.hzk, {
        className: x.content,
        children: (0, s.jsx)(r.Den, {
          className: x.scroller,
          children: (0, s.jsx)("div", {
            className: x.grid,
            children: (0, s.jsx)(u.zp.Provider, {
              value: {
                isRental: true,
                rentalDuration: _
              },
              children: k.map(e => (0, s.jsx)(o.Z, {
                skuId: null == e ? true : e.skuId,
                prioritizedCurrency: u.tA.ORBS
              }, "rental_inner_".concat(e.skuId)))
            })
          })
        })
      })]
    })
  })
}