/** Chunk was on 45620 **/
/** chunk id: 373183, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk595868 = require("./595868.js"),
  Chunk436755 = require("./436755.js"),
  Chunk339574 = require("./339574.js"),
  Chunk446991 = require("./446991.js"),
  Chunk383898 = require("./383898.js");
let j = Chunk473749.memo(function(e) {
  let {
    category: t,
    rewardSkuId: n
  } = e, {
    handleCardVisibilityChange: a
  } = (0, h.E)(n), j = l.useRef(null), {
    isHoveringOrFocusing: k
  } = (0, f.Z)(j), {
    readyToClaim: T,
    collectibleProductSkuIds: I,
    collectedSkuIds: L
  } = (0, E.q)(t, n), A = (0, o.e7)([m.Z], () => m.Z.isClaiming === n);
  return (0, r.jsx)(c.$, {
    onChange: a,
    threshold: 0,
    innerRef: j,
    children: (0, r.jsx)("div", {
      ref: j,
      className: s()(S.productCardContainer, x.defaultCursor, {
        [S.hovered]: k
      }),
      "aria-label": v.intl.formatToPlainString(v.t.Ez6aHE, {
        category: t.name
      }),
      children: (0, r.jsxs)("div", {
        className: S.productCardContentContainer,
        children: [(0, r.jsx)("img", {
          alt: "Reward Bow",
          src: y.Z,
          className: x.rewardImage
        }), (0, r.jsx)("div", {
          className: S.headerContainer,
          children: (0, r.jsx)(d.IGR, {
            text: v.intl.string(v.t.rykAJ9),
            disableColor: true,
            className: x.unlockRewardBadge
          })
        }), (0, r.jsxs)("div", {
          className: S.footerContainer,
          children: [(0, r.jsxs)("div", {
            className: x.footerInfoContainer,
            children: [(0, r.jsxs)("div", {
              className: x.footerInfo,
              children: [(0, r.jsx)(d.Heading, {
                variant: "heading-md/medium",
                color: "text-strong",
                lineClamp: 1,
                className: S.productName,
                children: v.intl.string(v.t["0mDmg/"])
              }), (0, r.jsx)(u.u, {
                text: T ? v.intl.string(v.t.cKH3tk) : v.intl.formatToPlainString(v.t["8aMDPc"], {
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
                  children: (0, r.jsx)(i.idN, {
                    size: "xs"
                  })
                })
              })]
            }), (0, r.jsx)("div", {
              className: S.footerInfoShrinkOnHover,
              "aria-hidden": true,
              children: (0, r.jsxs)("div", {
                className: x.progressContainer,
                children: [(0, r.jsx)(g.ZP, {
                  variant: g.yB.BLUE,
                  progress: L.length,
                  maximum: I.length
                }), (0, r.jsxs)("div", {
                  className: s()(x.progressTextContainer, {
                    [x.readyToClaimText]: T
                  }),
                  children: [T ? (0, r.jsx)(i.kmB, {
                    size: "xs",
                    color: "currentColor"
                  }) : null, (0, r.jsx)(i.xvT, {
                    variant: "text-xs/medium",
                    color: "currentColor",
                    children: v.intl.formatToPlainString(v.t["5TwASM"], {
                      collectedCount: L.length,
                      totalCount: I.length
                    })
                  })]
                })]
              })
            })]
          }), (0, r.jsx)("div", {
            className: S.footerButtonContainer,
            children: (0, r.jsx)(i.hE2, {
              wrap: false,
              className: S.footerButtonGroup,
              fullWidth: true,
              children: (0, r.jsx)(i.zxk, {
                variant: "primary",
                onClick: e => {
                  e.stopPropagation(), T && (0, b.wW)(t.skuId, n).then(() => {
                    let e = p.Z.getProduct(n);
                    null != e && (0, C.Z)({
                      product: e,
                      analyticsLocations: [],
                      overrideGraphic: {
                        type: "video",
                        src: _.Z,
                        fallbackImageSrc: O.Z,
                        loop: true,
                        loopAt: 6,
                        aspectRatio: "16/9"
                      }
                    })
                  }).catch(() => {
                    (0, d.ZDy)(() => Promise.resolve(e => (0, r.jsx)(i.Modal, {
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
                disabled: !T,
                loading: A
              })
            })
          })]
        })]
      })
    })
  })
})