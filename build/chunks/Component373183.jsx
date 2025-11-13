/** Chunk was on 45620 **/
/** chunk id: 373183, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk104505 = require("./104505.js"),
  Chunk1870 = require("./1870.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk290181 = require("./290181.js"),
  Chunk655603 = require("./655603.js");
let f = Chunk647438.memo(function(e) {
  let {
    category: t,
    rewardSkuId: n
  } = e, i = l.useRef(null), {
    isHoveringOrFocusing: f
  } = (0, c.Z)(i), h = l.useMemo(() => t.products.filter(e => e.skuId !== n).map(e => e.skuId), [t.products, n]), C = (0, s.e7)([u.Z], () => u.Z.getPurchases(h));
  return (0, r.jsx)(o.kL8, {
    ref: i,
    className: a()(g.productCardContainer, {
      [g.hovered]: f
    }),
    "aria-label": d.intl.formatToPlainString(d.t.Ez6aHE, {
      category: t.name
    }),
    onClick: () => {},
    children: (0, r.jsxs)("div", {
      className: g.productCardContentContainer,
      children: [(0, r.jsx)("div", {
        className: g.productPreviewContainer,
        children: (0, r.jsx)("img", {
          alt: "Reward Bow",
          src: p.Z
        })
      }), (0, r.jsx)("div", {
        className: g.footerContainer,
        children: (0, r.jsxs)("div", {
          className: g.footerContent,
          children: [(0, r.jsxs)("div", {
            className: g.footerInfoContainer,
            children: [(0, r.jsx)("div", {
              className: g.footerInfoLeft,
              children: (0, r.jsx)(o.xvT, {
                variant: "text-lg/bold",
                color: "text-primary",
                children: d.intl.string(d.t["0mDmg/"])
              })
            }), (0, r.jsx)("div", {
              className: g.progressContainer,
              children: (0, r.jsx)(o.xvT, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: d.intl.formatToPlainString(d.t["5TwASM"], {
                  collectedCount: null == C ? true : C.length,
                  totalCount: h.length
                })
              })
            })]
          }), (0, r.jsx)("div", {
            className: g.footerButtonContainer,
            children: (0, r.jsx)(o.hE2, {
              wrap: false,
              fullWidth: true,
              children: (0, r.jsx)(o.zxk, {
                variant: "primary",
                onClick: e => {
                  e.stopPropagation()
                },
                text: d.intl.string(d.t.VnVTNc),
                fullWidth: true
              })
            })
          })]
        })
      })]
    })
  })
})