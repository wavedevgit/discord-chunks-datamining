/** Chunk was on 59275 **/
/** chunk id: 661623, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk230109 = require("./230109.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk713517 = require("./713517.js"),
  Chunk613566 = require("./613566.jsx"),
  Chunk979286 = require("./979286.js"),
  Chunk590180 = require("./590180.js"),
  Chunk4227 = require("./4227.js"),
  Chunk597783 = require("./597783.js"),
  Chunk61750 = require("./61750.jsx"),
  Chunk357704 = require("./357704.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk514294 = require("./514294.js"),
  Chunk620399 = require("./620399.js"),
  Chunk68465 = require("./68465.js"),
  Chunk165530 = require("./165530.js"),
  Chunk871237 = require("./871237.js");
let y = Chunk64700.memo(function(e) {
  let {
    category: t,
    rewardSkuId: n
  } = e, {
    handleCardVisibilityChange: s
  } = (0, b.Z)(n), y = l.useRef(null), {
    isHoveringOrFocusing: j
  } = (0, g.A)(y), {
    readyToClaim: T,
    collectibleProductSkuIds: L,
    collectedSkuIds: I
  } = (0, E.K)(t, n), k = (0, o.bG)([_.A], () => _.A.isClaiming === n);
  return (0, r.jsx)(c.L, {
    onChange: s,
    threshold: 0,
    innerRef: y,
    children: (0, r.jsx)("div", {
      ref: y,
      className: a()(C.ty, A.Q3, {
        [C.yo]: j
      }),
      "aria-label": v.intl.formatToPlainString(v.t.Ez6aHE, {
        category: t.name
      }),
      children: (0, r.jsxs)("div", {
        className: C.qt,
        children: [(0, r.jsx)("img", {
          alt: "Reward Bow",
          src: O.A,
          className: A.L8
        }), (0, r.jsx)("div", {
          className: C.N1,
          children: (0, r.jsx)(d.LpS, {
            text: v.intl.string(v.t.rykAJ9),
            disableColor: true,
            className: A.HZ
          })
        }), (0, r.jsxs)("div", {
          className: C.xQ,
          children: [(0, r.jsxs)("div", {
            className: A.xE,
            children: [(0, r.jsxs)("div", {
              className: A.cs,
              children: [(0, r.jsx)(d.Heading, {
                variant: "heading-md/medium",
                color: "text-strong",
                lineClamp: 1,
                className: C.tZ,
                children: v.intl.string(v.t["0mDmg/"])
              }), (0, r.jsx)(u.m, {
                text: T ? v.intl.string(v.t.cKH3tk) : v.intl.formatToPlainString(v.t["8aMDPc"], {
                  totalCount: L.length
                }),
                align: "right",
                caretConfig: {
                  position: "bottom",
                  align: "end"
                },
                position: "top",
                children: (0, r.jsx)("span", {
                  className: A.ZB,
                  children: (0, r.jsx)(i.cBN, {
                    size: "xs"
                  })
                })
              })]
            }), (0, r.jsx)("div", {
              className: C.oh,
              "aria-hidden": true,
              children: (0, r.jsxs)("div", {
                className: A.L$,
                children: [(0, r.jsx)(f.Ay, {
                  variant: f.qP.BLUE,
                  progress: I.length,
                  maximum: L.length
                }), (0, r.jsxs)("div", {
                  className: a()(A.__, {
                    [A.gF]: T
                  }),
                  children: [T ? (0, r.jsx)(i.Uzd, {
                    size: "xs",
                    color: "currentColor"
                  }) : null, (0, r.jsx)(i.EYj, {
                    variant: "text-xs/medium",
                    color: "currentColor",
                    children: v.intl.formatToPlainString(v.t["5TwASM"], {
                      collectedCount: I.length,
                      totalCount: L.length
                    })
                  })]
                })]
              })
            })]
          }), (0, r.jsx)("div", {
            className: C.Vs,
            children: (0, r.jsx)(i.e2v, {
              wrap: false,
              className: C.Ld,
              fullWidth: true,
              children: (0, r.jsx)(i.$nd, {
                variant: "primary",
                onClick: e => {
                  e.stopPropagation(), T && (0, m.BX)(t.skuId, n).then(() => {
                    let e = p.A.getProduct(n);
                    null != e && (0, h.A)({
                      product: e,
                      analyticsLocations: [],
                      overrideGraphic: {
                        type: "video",
                        src: S.A,
                        fallbackImageSrc: x.A,
                        loop: true,
                        loopAt: 6,
                        aspectRatio: "16/9"
                      }
                    })
                  }).catch(() => {
                    (0, d.mMO)(() => Promise.resolve(e => (0, r.jsx)(i.Modal, {
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
                loading: k
              })
            })
          })]
        })]
      })
    })
  })
})