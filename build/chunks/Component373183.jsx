/** Chunk was on 45620 **/
/** chunk id: 373183, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => T
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
  Chunk213301 = require("./213301.js"),
  Chunk290181 = require("./290181.js"),
  Chunk250967 = require("./250967.js"),
  Chunk182975 = require("./182975.js"),
  Chunk655603 = require("./655603.js");
let T = Chunk473749.memo(function(e) {
  let {
    category: t,
    rewardSkuId: n
  } = e, {
    handleCardVisibilityChange: i
  } = (0, h.E)(n), T = l.useRef(null), {
    isHoveringOrFocusing: j
  } = (0, g.Z)(T), {
    readyToClaim: k,
    collectibleProductSkuIds: I,
    collectedSkuIds: L
  } = (0, b.q)(t, n), B = (0, a.e7)([C.Z], () => C.Z.isClaiming === n);
  return (0, r.jsx)(c.$, {
    onChange: i,
    threshold: 0,
    innerRef: T,
    children: (0, r.jsx)("div", {
      ref: T,
      className: s()(v.productCardContainer, S.defaultCursor, {
        [v.hovered]: j
      }),
      "aria-label": E.intl.formatToPlainString(E.t.Ez6aHE, {
        category: t.name
      }),
      children: (0, r.jsxs)("div", {
        className: v.productCardContentContainer,
        children: [(0, r.jsx)("img", {
          alt: "Reward Bow",
          src: y.Z,
          className: S.rewardImage
        }), (0, r.jsx)("div", {
          className: v.headerContainer,
          children: (0, r.jsx)(d.IGR, {
            text: E.intl.string(E.t.rykAJ9),
            disableColor: true,
            className: S.unlockRewardBadge
          })
        }), (0, r.jsxs)("div", {
          className: v.footerContainer,
          children: [(0, r.jsxs)("div", {
            className: S.footerInfoContainer,
            children: [(0, r.jsxs)("div", {
              className: S.footerInfo,
              children: [(0, r.jsx)(d.Heading, {
                variant: "heading-md/medium",
                color: "text-strong",
                lineClamp: 1,
                className: v.productName,
                children: E.intl.string(E.t["0mDmg/"])
              }), (0, r.jsx)(u.u, {
                text: k ? E.intl.string(E.t.cKH3tk) : E.intl.formatToPlainString(E.t["8aMDPc"], {
                  totalCount: I.length
                }),
                align: "right",
                caretConfig: {
                  position: "bottom",
                  align: "end"
                },
                position: "top",
                children: (0, r.jsx)("span", {
                  className: S.questionIconContainer,
                  children: (0, r.jsx)(o.idN, {
                    size: "xs"
                  })
                })
              })]
            }), (0, r.jsx)("div", {
              className: v.footerInfoShrinkOnHover,
              "aria-hidden": true,
              children: (0, r.jsxs)("div", {
                className: S.progressContainer,
                children: [(0, r.jsx)(f.Z, {
                  variant: f.y.BLUE,
                  progress: L.length,
                  maximum: I.length
                }), (0, r.jsxs)("div", {
                  className: s()(S.progressTextContainer, {
                    [S.readyToClaimText]: k
                  }),
                  children: [k ? (0, r.jsx)(o.kmB, {
                    size: "xs",
                    color: "currentColor"
                  }) : null, (0, r.jsx)(o.xvT, {
                    variant: "text-xs/medium",
                    color: "currentColor",
                    children: E.intl.formatToPlainString(E.t["5TwASM"], {
                      collectedCount: L.length,
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
                  e.stopPropagation(), k && (0, p.wW)(t.skuId, n).then(() => {
                    let e = m.Z.getProduct(n);
                    null != e && (0, _.Z)({
                      product: e,
                      analyticsLocations: [],
                      overrideGraphic: {
                        type: "video",
                        src: x.Z,
                        fallbackImageSrc: O.Z,
                        loop: true,
                        loopAt: 6,
                        aspectRatio: "16/9"
                      }
                    })
                  }).catch(() => {
                    (0, d.ZDy)(() => Promise.resolve(e => (0, r.jsx)(o.Modal, {
                      transitionState: e.transitionState,
                      onClose: e.onClose,
                      size: "sm",
                      title: E.intl.string(E.t.SRTlyA),
                      actions: [{
                        text: E.intl.string(E.t.TyCVIq),
                        onClick: e.onClose,
                        variant: "primary"
                      }],
                      children: (0, r.jsx)("div", {
                        children: E.intl.string(E.t["0YpIF/"])
                      })
                    })))
                  })
                },
                text: E.intl.string(E.t.VnVTNc),
                fullWidth: true,
                disabled: !k,
                loading: B
              })
            })
          })]
        })]
      })
    })
  })
})