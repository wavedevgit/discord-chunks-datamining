/** Chunk was on 45620 **/
/** chunk id: 373183, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => O
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
let O = Chunk473749.memo(function(e) {
  let {
    category: t,
    rewardSkuId: n
  } = e, i = l.useRef(null), {
    isHoveringOrFocusing: O
  } = (0, d.Z)(i), {
    readyToClaim: S,
    collectibleProductSkuIds: y,
    collectedSkuIds: j
  } = (0, m.q)(t, n), k = (0, s.e7)([f.Z], () => f.Z.isClaiming === n);
  return (0, r.jsx)("div", {
    ref: i,
    className: a()(_.productCardContainer, b.defaultCursor, {
      [_.hovered]: O
    }),
    "aria-label": C.intl.formatToPlainString(C.t.Ez6aHE, {
      category: t.name
    }),
    children: (0, r.jsxs)("div", {
      className: _.productCardContentContainer,
      children: [(0, r.jsx)("img", {
        alt: "Reward Bow",
        src: E.Z,
        className: b.rewardImage
      }), (0, r.jsx)("div", {
        className: _.headerContainer,
        children: (0, r.jsx)(u.IGR, {
          text: C.intl.string(C.t.rykAJ9),
          disableColor: true,
          className: b.unlockRewardBadge
        })
      }), (0, r.jsxs)("div", {
        className: _.footerContainer,
        children: [(0, r.jsxs)("div", {
          className: b.footerInfoContainer,
          children: [(0, r.jsxs)("div", {
            className: b.footerInfo,
            children: [(0, r.jsx)(u.Heading, {
              variant: "heading-md/medium",
              color: "text-primary",
              lineClamp: 1,
              className: _.productName,
              children: C.intl.string(C.t["0mDmg/"])
            }), (0, r.jsx)(c.u, {
              text: S ? C.intl.string(C.t.cKH3tk) : C.intl.formatToPlainString(C.t["8aMDPc"], {
                totalCount: y.length
              }),
              align: "right",
              caretConfig: {
                position: "bottom",
                align: "end"
              },
              position: "top",
              children: (0, r.jsx)("span", {
                className: b.questionIconContainer,
                children: (0, r.jsx)(o.idN, {
                  size: "xs"
                })
              })
            })]
          }), (0, r.jsx)("div", {
            className: _.footerInfoShrinkOnHover,
            children: (0, r.jsxs)("div", {
              className: a()(b.progressTextContainer, {
                [b.readyToClaimText]: S
              }),
              children: [S ? (0, r.jsx)(o.kmB, {
                size: "xs",
                color: "currentColor"
              }) : null, (0, r.jsx)(o.xvT, {
                variant: "text-xs/medium",
                color: "currentColor",
                children: C.intl.formatToPlainString(C.t["5TwASM"], {
                  collectedCount: j.length,
                  totalCount: y.length
                })
              })]
            })
          })]
        }), (0, r.jsx)("div", {
          className: _.footerButtonContainer,
          children: (0, r.jsx)(o.hE2, {
            wrap: false,
            className: _.footerButtonGroup,
            fullWidth: true,
            children: (0, r.jsx)(o.zxk, {
              variant: "primary",
              onClick: e => {
                e.stopPropagation(), S && (0, p.wW)(t.skuId, n).then(() => {
                  let e = g.Z.getProduct(n);
                  null != e && (0, h.Z)({
                    product: e,
                    analyticsLocations: [],
                    overrideGraphic: {
                      type: "video",
                      src: x.Z,
                      fallbackImageSrc: v.Z,
                      loop: false,
                      aspectRatio: "16/9"
                    }
                  })
                }).catch(() => {
                  (0, u.ZDy)(() => Promise.resolve(e => (0, r.jsx)(o.Modal, {
                    transitionState: e.transitionState,
                    onClose: e.onClose,
                    size: "sm",
                    title: C.intl.string(C.t.SRTlyA),
                    actions: [{
                      text: C.intl.string(C.t.TyCVIq),
                      onClick: e.onClose,
                      variant: "primary"
                    }],
                    children: (0, r.jsx)("div", {
                      children: C.intl.string(C.t["0YpIF/"])
                    })
                  })))
                })
              },
              text: C.intl.string(C.t.VnVTNc),
              fullWidth: true,
              disabled: !S,
              loading: k
            })
          })
        })]
      })]
    })
  })
})