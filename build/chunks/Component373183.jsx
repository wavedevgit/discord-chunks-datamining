/** Chunk was on 45620 **/
/** chunk id: 373183, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk104505 = require("./104505.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk832149 = require("./832149.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk290181 = require("./290181.js"),
  Chunk250967 = require("./250967.js"),
  Chunk182975 = require("./182975.js"),
  Chunk655603 = require("./655603.js");
let v = Chunk647438.memo(function(e) {
  let {
    category: t,
    rewardSkuId: n
  } = e, i = l.useRef(null), {
    isHoveringOrFocusing: v
  } = (0, d.Z)(i), x = l.useMemo(() => t.products.filter(e => e.skuId !== n).map(e => e.skuId), [t.products, n]), E = (0, s.e7)([g.Z], () => g.Z.getPurchases(x)), O = e => {
    e.stopPropagation();
    {
      let e = p.Z.getProduct(n);
      null != e && (0, f.Z)({
        product: e,
        analyticsLocations: [],
        overrideGraphic: {
          type: "video",
          src: _.Z,
          fallbackImageSrc: m.Z,
          loop: false,
          aspectRatio: "16/9"
        }
      })
    }
  }, S = l.useMemo(() => E.length === x.length, [E, x]);
  return (0, r.jsx)(o.kL8, {
    ref: i,
    className: a()(C.productCardContainer, {
      [C.hovered]: v
    }),
    "aria-label": h.intl.formatToPlainString(h.t.Ez6aHE, {
      category: t.name
    }),
    onClick: e => {
      O(e)
    },
    children: (0, r.jsxs)("div", {
      className: C.productCardContentContainer,
      children: [(0, r.jsx)("div", {
        className: C.productPreviewContainer,
        children: (0, r.jsx)("img", {
          alt: "Reward Bow",
          src: b.Z
        })
      }), (0, r.jsx)("div", {
        className: C.headerContainer,
        children: (0, r.jsx)(u.IGR, {
          text: h.intl.string(h.t.rykAJ9),
          disableColor: true,
          className: C.unlockRewardBadge
        })
      }), (0, r.jsx)("div", {
        className: C.footerContainer,
        children: (0, r.jsxs)("div", {
          className: C.footerContent,
          children: [(0, r.jsxs)("div", {
            className: C.footerInfoContainer,
            children: [(0, r.jsxs)("div", {
              className: C.footerInfo,
              children: [(0, r.jsx)(o.xvT, {
                variant: "text-lg/bold",
                color: "text-primary",
                children: h.intl.string(h.t["0mDmg/"])
              }), (0, r.jsx)(c.u, {
                text: S ? h.intl.string(h.t.cKH3tk) : h.intl.formatToPlainString(h.t["8aMDPc"], {
                  totalCount: x.length
                }),
                align: "right",
                caretConfig: {
                  position: "bottom",
                  align: "end"
                },
                position: "top",
                children: (0, r.jsx)("span", {
                  className: C.questionIconContainer,
                  children: (0, r.jsx)(o.idN, {
                    size: "xs"
                  })
                })
              })]
            }), (0, r.jsx)("div", {
              className: C.progressContainer,
              children: (0, r.jsx)(o.xvT, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: h.intl.formatToPlainString(h.t["5TwASM"], {
                  collectedCount: E.length,
                  totalCount: x.length
                })
              })
            })]
          }), (0, r.jsx)("div", {
            className: C.footerButtonContainer,
            children: (0, r.jsx)(o.hE2, {
              wrap: false,
              fullWidth: true,
              children: (0, r.jsx)(o.zxk, {
                variant: "primary",
                onClick: O,
                text: h.intl.string(h.t.VnVTNc),
                fullWidth: true,
                disabled: !S
              })
            })
          })]
        })
      })]
    })
  })
})