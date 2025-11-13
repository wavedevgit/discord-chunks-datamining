/** Chunk was on 45620 **/
/** chunk id: 373183, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  c = (require("./481060.js"), require("./104505.js")),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk832149 = require("./832149.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk290181 = require("./290181.js"),
  Chunk250967 = require("./250967.js"),
  Chunk182975 = require("./182975.js"),
  Chunk655603 = require("./655603.js");
let _ = Chunk647438.memo(function(e) {
  var t;
  let {
    category: n,
    rewardSkuId: i
  } = e, _ = l.useRef(null), {
    isHoveringOrFocusing: b
  } = (0, c.Z)(_), v = l.useMemo(() => n.products.filter(e => e.skuId !== i).map(e => e.skuId), [n.products, i]), x = (0, s.e7)([d.Z], () => d.Z.getPurchases(v)), E = e => {
    e.stopPropagation();
    {
      let e = u.Z.getProduct(i);
      null != e && (0, p.Z)({
        product: e,
        analyticsLocations: [],
        overrideGraphic: {
          type: "video",
          src: C.Z,
          fallbackImageSrc: h.Z,
          loop: false,
          aspectRatio: "16/9"
        }
      })
    }
  };
  return (0, r.jsx)(o.kL8, {
    ref: _,
    className: a()(f.productCardContainer, {
      [f.hovered]: b
    }),
    "aria-label": g.intl.formatToPlainString(g.t.Ez6aHE, {
      category: n.name
    }),
    onClick: e => {
      E(e)
    },
    children: (0, r.jsxs)("div", {
      className: f.productCardContentContainer,
      children: [(0, r.jsx)("div", {
        className: f.productPreviewContainer,
        children: (0, r.jsx)("img", {
          alt: "Reward Bow",
          src: m.Z
        })
      }), (0, r.jsx)("div", {
        className: f.footerContainer,
        children: (0, r.jsxs)("div", {
          className: f.footerContent,
          children: [(0, r.jsxs)("div", {
            className: f.footerInfoContainer,
            children: [(0, r.jsx)("div", {
              className: f.footerInfoLeft,
              children: (0, r.jsx)(o.xvT, {
                variant: "text-lg/bold",
                color: "text-primary",
                children: g.intl.string(g.t["0mDmg/"])
              })
            }), (0, r.jsx)("div", {
              className: f.progressContainer,
              children: (0, r.jsx)(o.xvT, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: g.intl.formatToPlainString(g.t["5TwASM"], {
                  collectedCount: null != (t = null == x ? true : x.length) ? t : 0,
                  totalCount: v.length
                })
              })
            })]
          }), (0, r.jsx)("div", {
            className: f.footerButtonContainer,
            children: (0, r.jsx)(o.hE2, {
              wrap: false,
              fullWidth: true,
              children: (0, r.jsx)(o.zxk, {
                variant: "primary",
                onClick: E,
                text: g.intl.string(g.t.VnVTNc),
                fullWidth: true
              })
            })
          })]
        })
      })]
    })
  })
})