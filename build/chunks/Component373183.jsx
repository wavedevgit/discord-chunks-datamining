/** Chunk was on 45620 **/
/** chunk id: 373183, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk622535 = require("./622535.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk104505 = require("./104505.js"),
  Chunk527685 = require("./527685.jsx"),
  Chunk335131 = require("./335131.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk297651 = require("./297651.js"),
  Chunk832149 = require("./832149.jsx"),
  Chunk911390 = require("./911390.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk213301 = require("./213301.js"),
  Chunk290181 = require("./290181.js"),
  Chunk250967 = require("./250967.js"),
  Chunk182975 = require("./182975.js"),
  Chunk655603 = require("./655603.js");
let j = Chunk473749.memo(function(e) {
  let {
    category: t,
    rewardSkuId: n
  } = e, {
    handleCardVisibilityChange: i
  } = (0, C.E)(n), j = l.useRef(null), {
    isHoveringOrFocusing: I
  } = (0, f.Z)(j), {
    readyToClaim: k,
    collectibleProductSkuIds: T,
    collectedSkuIds: L
  } = (0, b.q)(t, n), P = (0, s.e7)([h.Z], () => h.Z.isClaiming === n);
  return (0, r.jsx)(c.$, {
    onChange: i,
    threshold: 0,
    innerRef: j,
    children: (0, r.jsx)("div", {
      ref: j,
      className: o()(x.productCardContainer, E.defaultCursor, {
        [x.hovered]: I
      }),
      "aria-label": v.intl.formatToPlainString(v.t.Ez6aHE, {
        category: t.name
      }),
      children: (0, r.jsxs)("div", {
        className: x.productCardContentContainer,
        children: [(0, r.jsx)("img", {
          alt: "Reward Bow",
          src: y.Z,
          className: E.rewardImage
        }), (0, r.jsx)("div", {
          className: x.headerContainer,
          children: (0, r.jsx)(d.IGR, {
            text: v.intl.string(v.t.rykAJ9),
            disableColor: true,
            className: E.unlockRewardBadge
          })
        }), (0, r.jsxs)("div", {
          className: x.footerContainer,
          children: [(0, r.jsxs)("div", {
            className: E.footerInfoContainer,
            children: [(0, r.jsxs)("div", {
              className: E.footerInfo,
              children: [(0, r.jsx)(d.Heading, {
                variant: "heading-md/medium",
                color: "text-primary",
                lineClamp: 1,
                className: x.productName,
                children: v.intl.string(v.t["0mDmg/"])
              }), (0, r.jsx)(u.u, {
                text: k ? v.intl.string(v.t.cKH3tk) : v.intl.formatToPlainString(v.t["8aMDPc"], {
                  totalCount: T.length
                }),
                align: "right",
                caretConfig: {
                  position: "bottom",
                  align: "end"
                },
                position: "top",
                children: (0, r.jsx)("span", {
                  className: E.questionIconContainer,
                  children: (0, r.jsx)(a.idN, {
                    size: "xs"
                  })
                })
              })]
            }), (0, r.jsx)("div", {
              className: x.footerInfoShrinkOnHover,
              "aria-hidden": true,
              children: (0, r.jsxs)("div", {
                className: E.progressContainer,
                children: [(0, r.jsx)(g.Z, {
                  variant: g.y.BLUE,
                  progress: L.length,
                  maximum: T.length
                }), (0, r.jsxs)("div", {
                  className: o()(E.progressTextContainer, {
                    [E.readyToClaimText]: k
                  }),
                  children: [k ? (0, r.jsx)(a.kmB, {
                    size: "xs",
                    color: "currentColor"
                  }) : null, (0, r.jsx)(a.xvT, {
                    variant: "text-xs/medium",
                    color: "currentColor",
                    children: v.intl.formatToPlainString(v.t["5TwASM"], {
                      collectedCount: L.length,
                      totalCount: T.length
                    })
                  })]
                })]
              })
            })]
          }), (0, r.jsx)("div", {
            className: x.footerButtonContainer,
            children: (0, r.jsx)(a.hE2, {
              wrap: false,
              className: x.footerButtonGroup,
              fullWidth: true,
              children: (0, r.jsx)(a.zxk, {
                variant: "primary",
                onClick: e => {
                  e.stopPropagation(), k && (0, p.wW)(t.skuId, n).then(() => {
                    let e = m.Z.getProduct(n);
                    null != e && (0, _.Z)({
                      product: e,
                      analyticsLocations: [],
                      overrideGraphic: {
                        type: "video",
                        src: S.Z,
                        fallbackImageSrc: O.Z,
                        loop: true,
                        loopAt: 6,
                        aspectRatio: "16/9"
                      }
                    })
                  }).catch(() => {
                    (0, d.ZDy)(() => Promise.resolve(e => (0, r.jsx)(a.Modal, {
                      transitionState: e.transitionState,
                      onClose: e.onClose,
                      size: "sm",
                      title: v.intl.string(v.t.SRTlyA),
                      actions: [{
                        text: v.intl.string(v.t.TyCVIq),
                        onClick: e.onClose,
                        variant: "primary"
                      }],
                      children: (0, r.jsx)("div", {
                        children: v.intl.string(v.t["0YpIF/"])
                      })
                    })))
                  })
                },
                text: v.intl.string(v.t.VnVTNc),
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
})