/** Chunk was on 45620 **/
/** chunk id: 373183, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => S
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
  Chunk832149 = require("./832149.jsx"),
  Chunk911390 = require("./911390.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk213301 = require("./213301.js"),
  Chunk290181 = require("./290181.js"),
  Chunk250967 = require("./250967.js"),
  Chunk182975 = require("./182975.js"),
  Chunk655603 = require("./655603.js");
let S = Chunk473749.memo(function(e) {
  let {
    category: t,
    rewardSkuId: n
  } = e, i = l.useRef(null), {
    isHoveringOrFocusing: S
  } = (0, d.Z)(i), {
    readyToClaim: y,
    collectibleProductSkuIds: j,
    collectedSkuIds: k
  } = (0, C.q)(t, n), I = (0, o.e7)([m.Z], () => m.Z.isClaiming === n);
  return (0, r.jsx)("div", {
    ref: i,
    className: a()(b.productCardContainer, v.defaultCursor, {
      [b.hovered]: S
    }),
    "aria-label": _.intl.formatToPlainString(_.t.Ez6aHE, {
      category: t.name
    }),
    children: (0, r.jsxs)("div", {
      className: b.productCardContentContainer,
      children: [(0, r.jsx)("img", {
        alt: "Reward Bow",
        src: O.Z,
        className: v.rewardImage
      }), (0, r.jsx)("div", {
        className: b.headerContainer,
        children: (0, r.jsx)(u.IGR, {
          text: _.intl.string(_.t.rykAJ9),
          disableColor: true,
          className: v.unlockRewardBadge
        })
      }), (0, r.jsxs)("div", {
        className: b.footerContainer,
        children: [(0, r.jsxs)("div", {
          className: v.footerInfoContainer,
          children: [(0, r.jsxs)("div", {
            className: v.footerInfo,
            children: [(0, r.jsx)(u.Heading, {
              variant: "heading-md/medium",
              color: "text-primary",
              lineClamp: 1,
              className: b.productName,
              children: _.intl.string(_.t["0mDmg/"])
            }), (0, r.jsx)(c.u, {
              text: y ? _.intl.string(_.t.cKH3tk) : _.intl.formatToPlainString(_.t["8aMDPc"], {
                totalCount: j.length
              }),
              align: "right",
              caretConfig: {
                position: "bottom",
                align: "end"
              },
              position: "top",
              children: (0, r.jsx)("span", {
                className: v.questionIconContainer,
                children: (0, r.jsx)(s.idN, {
                  size: "xs"
                })
              })
            })]
          }), (0, r.jsx)("div", {
            className: b.footerInfoShrinkOnHover,
            children: (0, r.jsxs)("div", {
              children: [(0, r.jsx)(f.Z, {
                variant: f.y.BLUE,
                progress: k.length,
                maximum: j.length
              }), (0, r.jsxs)("div", {
                className: a()(v.progressTextContainer, {
                  [v.readyToClaimText]: y
                }),
                children: [y ? (0, r.jsx)(s.kmB, {
                  size: "xs",
                  color: "currentColor"
                }) : null, (0, r.jsx)(s.xvT, {
                  variant: "text-xs/medium",
                  color: "currentColor",
                  children: _.intl.formatToPlainString(_.t["5TwASM"], {
                    collectedCount: k.length,
                    totalCount: j.length
                  })
                })]
              })]
            })
          })]
        }), (0, r.jsx)("div", {
          className: b.footerButtonContainer,
          children: (0, r.jsx)(s.hE2, {
            wrap: false,
            className: b.footerButtonGroup,
            fullWidth: true,
            children: (0, r.jsx)(s.zxk, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), y && (0, g.wW)(t.skuId, n).then(() => {
                  let e = p.Z.getProduct(n);
                  null != e && (0, h.Z)({
                    product: e,
                    analyticsLocations: [],
                    overrideGraphic: {
                      type: "video",
                      src: E.Z,
                      fallbackImageSrc: x.Z,
                      loop: false,
                      aspectRatio: "16/9"
                    }
                  })
                }).catch(() => {
                  (0, u.ZDy)(() => Promise.resolve(e => (0, r.jsx)(s.Modal, {
                    transitionState: e.transitionState,
                    onClose: e.onClose,
                    size: "sm",
                    title: _.intl.string(_.t.SRTlyA),
                    actions: [{
                      text: _.intl.string(_.t.TyCVIq),
                      onClick: e.onClose,
                      variant: "primary"
                    }],
                    children: (0, r.jsx)("div", {
                      children: _.intl.string(_.t["0YpIF/"])
                    })
                  })))
                })
              },
              text: _.intl.string(_.t.VnVTNc),
              fullWidth: true,
              disabled: !y,
              loading: I
            })
          })
        })]
      })]
    })
  })
})