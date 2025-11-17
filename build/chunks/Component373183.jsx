/** Chunk was on 45620 **/
/** chunk id: 373183, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
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
  Chunk290181 = require("./290181.js"),
  Chunk250967 = require("./250967.js"),
  Chunk182975 = require("./182975.js"),
  Chunk655603 = require("./655603.js");
let E = Chunk473749.memo(function(e) {
  let {
    category: t,
    rewardSkuId: n
  } = e, i = l.useRef(null), {
    isHoveringOrFocusing: E
  } = (0, d.Z)(i), {
    readyToClaim: O,
    collectibleProductSkuIds: S,
    collectedSkuIds: y
  } = (0, C.q)(t, n), j = (0, s.e7)([f.Z], () => f.Z.isClaiming === n);
  return (0, r.jsx)("div", {
    ref: i,
    className: a()(_.productCardContainer, {
      [_.hovered]: E
    }),
    "aria-label": m.intl.formatToPlainString(m.t.Ez6aHE, {
      category: t.name
    }),
    children: (0, r.jsxs)("div", {
      className: _.productCardContentContainer,
      children: [(0, r.jsx)("div", {
        className: _.productPreviewContainer,
        children: (0, r.jsx)("img", {
          alt: "Reward Bow",
          src: x.Z
        })
      }), (0, r.jsx)("div", {
        className: _.headerContainer,
        children: (0, r.jsx)(u.IGR, {
          text: m.intl.string(m.t.rykAJ9),
          disableColor: true,
          className: _.unlockRewardBadge
        })
      }), (0, r.jsx)("div", {
        className: _.footerContainer,
        children: (0, r.jsxs)("div", {
          className: _.footerContent,
          children: [(0, r.jsxs)("div", {
            className: _.footerInfoContainer,
            children: [(0, r.jsxs)("div", {
              className: _.footerInfo,
              children: [(0, r.jsx)(o.xvT, {
                variant: "text-lg/bold",
                color: "text-primary",
                children: m.intl.string(m.t["0mDmg/"])
              }), (0, r.jsx)(c.u, {
                text: O ? m.intl.string(m.t.cKH3tk) : m.intl.formatToPlainString(m.t["8aMDPc"], {
                  totalCount: S.length
                }),
                align: "right",
                caretConfig: {
                  position: "bottom",
                  align: "end"
                },
                position: "top",
                children: (0, r.jsx)("span", {
                  className: _.questionIconContainer,
                  children: (0, r.jsx)(o.idN, {
                    size: "xs"
                  })
                })
              })]
            }), (0, r.jsx)("div", {
              className: _.progressContainer,
              children: (0, r.jsx)(o.xvT, {
                variant: "text-sm/normal",
                color: "text-secondary",
                children: m.intl.formatToPlainString(m.t["5TwASM"], {
                  collectedCount: y.length,
                  totalCount: S.length
                })
              })
            })]
          }), (0, r.jsx)("div", {
            className: _.footerButtonContainer,
            children: (0, r.jsx)(o.hE2, {
              wrap: false,
              fullWidth: true,
              children: (0, r.jsx)(o.zxk, {
                variant: "primary",
                onClick: e => {
                  e.stopPropagation(), O && (0, p.wW)(t.skuId, n).then(() => {
                    let e = g.Z.getProduct(n);
                    null != e && (0, h.Z)({
                      product: e,
                      analyticsLocations: [],
                      overrideGraphic: {
                        type: "video",
                        src: v.Z,
                        fallbackImageSrc: b.Z,
                        loop: false,
                        aspectRatio: "16/9"
                      }
                    })
                  }).catch(() => {
                    (0, u.ZDy)(() => Promise.resolve(e => (0, r.jsx)(o.Modal, {
                      transitionState: e.transitionState,
                      onClose: e.onClose,
                      size: "sm",
                      title: m.intl.string(m.t.SRTlyA),
                      actions: [{
                        text: m.intl.string(m.t.TyCVIq),
                        onClick: e.onClose,
                        variant: "primary"
                      }],
                      children: (0, r.jsx)("div", {
                        children: m.intl.string(m.t["0YpIF/"])
                      })
                    })))
                  })
                },
                text: m.intl.string(m.t.VnVTNc),
                fullWidth: true,
                disabled: !O,
                loading: j
              })
            })
          })]
        })
      })]
    })
  })
})