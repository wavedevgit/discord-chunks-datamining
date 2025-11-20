/** Chunk was on 45620 **/
/** chunk id: 373183, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk104505 = require("./104505.js"),
  Chunk527685 = require("./527685.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk834943 = require("./834943.js"),
  Chunk832149 = require("./832149.jsx"),
  Chunk911390 = require("./911390.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk213301 = require("./213301.js"),
  Chunk290181 = require("./290181.js"),
  Chunk250967 = require("./250967.js"),
  Chunk182975 = require("./182975.js"),
  Chunk655603 = require("./655603.js");
let y = Chunk473749.memo(function(e) {
  let {
    category: t,
    rewardSkuId: n
  } = e, {
    hasPromoUpsell: i
  } = h.Z.useConfig({
    location: "RewardProductCard"
  }), y = l.useRef(null), {
    isHoveringOrFocusing: j
  } = (0, d.Z)(y), {
    readyToClaim: k,
    collectibleProductSkuIds: I,
    collectedSkuIds: T
  } = (0, _.q)(t, n), L = !(i || k), P = (0, s.e7)([m.Z], () => m.Z.isClaiming === n);
  return L ? null : (0, r.jsx)("div", {
    ref: y,
    className: a()(v.productCardContainer, x.defaultCursor, {
      [v.hovered]: j
    }),
    "aria-label": b.intl.formatToPlainString(b.t.Ez6aHE, {
      category: t.name
    }),
    children: (0, r.jsxs)("div", {
      className: v.productCardContentContainer,
      children: [(0, r.jsx)("img", {
        alt: "Reward Bow",
        src: S.Z,
        className: x.rewardImage
      }), (0, r.jsx)("div", {
        className: v.headerContainer,
        children: (0, r.jsx)(u.IGR, {
          text: b.intl.string(b.t.rykAJ9),
          disableColor: true,
          className: x.unlockRewardBadge
        })
      }), (0, r.jsxs)("div", {
        className: v.footerContainer,
        children: [(0, r.jsxs)("div", {
          className: x.footerInfoContainer,
          children: [(0, r.jsxs)("div", {
            className: x.footerInfo,
            children: [(0, r.jsx)(u.Heading, {
              variant: "heading-md/medium",
              color: "text-primary",
              lineClamp: 1,
              className: v.productName,
              children: b.intl.string(b.t["0mDmg/"])
            }), (0, r.jsx)(c.u, {
              text: k ? b.intl.string(b.t.cKH3tk) : b.intl.formatToPlainString(b.t["8aMDPc"], {
                totalCount: I.length
              }),
              align: "right",
              caretConfig: {
                position: "bottom",
                align: "end"
              },
              position: "top",
              children: (0, r.jsx)("span", {
                className: x.questionIconContainer,
                children: (0, r.jsx)(o.idN, {
                  size: "xs"
                })
              })
            })]
          }), (0, r.jsx)("div", {
            className: v.footerInfoShrinkOnHover,
            children: (0, r.jsxs)("div", {
              className: x.progressContainer,
              children: [(0, r.jsx)(f.Z, {
                variant: f.y.BLUE,
                progress: T.length,
                maximum: I.length
              }), (0, r.jsxs)("div", {
                className: a()(x.progressTextContainer, {
                  [x.readyToClaimText]: k
                }),
                children: [k ? (0, r.jsx)(o.kmB, {
                  size: "xs",
                  color: "currentColor"
                }) : null, (0, r.jsx)(o.xvT, {
                  variant: "text-xs/medium",
                  color: "currentColor",
                  children: b.intl.formatToPlainString(b.t["5TwASM"], {
                    collectedCount: T.length,
                    totalCount: I.length
                  })
                })]
              })]
            })
          })]
        }), (0, r.jsx)("div", {
          className: v.footerButtonContainer,
          children: (0, r.jsx)(o.hE2, {
            wrap: false,
            className: v.footerButtonGroup,
            fullWidth: true,
            children: (0, r.jsx)(o.zxk, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), k && (0, g.wW)(t.skuId, n).then(() => {
                  let e = p.Z.getProduct(n);
                  null != e && (0, C.Z)({
                    product: e,
                    analyticsLocations: [],
                    overrideGraphic: {
                      type: "video",
                      src: O.Z,
                      fallbackImageSrc: E.Z,
                      loop: true,
                      loopAt: 6,
                      aspectRatio: "16/9"
                    }
                  })
                }).catch(() => {
                  (0, u.ZDy)(() => Promise.resolve(e => (0, r.jsx)(o.Modal, {
                    transitionState: e.transitionState,
                    onClose: e.onClose,
                    size: "sm",
                    title: b.intl.string(b.t.SRTlyA),
                    actions: [{
                      text: b.intl.string(b.t.TyCVIq),
                      onClick: e.onClose,
                      variant: "primary"
                    }],
                    children: (0, r.jsx)("div", {
                      children: b.intl.string(b.t["0YpIF/"])
                    })
                  })))
                })
              },
              text: b.intl.string(b.t.VnVTNc),
              fullWidth: true,
              disabled: !k,
              loading: P
            })
          })
        })]
      })]
    })
  })
})