/** Chunk was on 59275 **/
/** chunk id: 661623, original params: e,t,l (module,exports,require) **/
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
    rewardSkuId: l
  } = e, {
    handleCardVisibilityChange: s
  } = (0, h.Z)(l), y = r.useRef(null), {
    isHoveringOrFocusing: j
  } = (0, f.A)(y), {
    readyToClaim: L,
    collectibleProductSkuIds: T,
    collectedSkuIds: I
  } = (0, v.K)(t, l), N = (0, o.bG)([m.A], () => m.A.isClaiming === l);
  return (0, n.jsx)(c.L, {
    onChange: s,
    threshold: 0,
    innerRef: y,
    children: (0, n.jsx)("div", {
      ref: y,
      className: a()(x.ty, S.Q3, {
        [x.yo]: j
      }),
      "aria-label": A.intl.formatToPlainString(A.t.Ez6aHE, {
        category: t.name
      }),
      children: (0, n.jsxs)("div", {
        className: x.qt,
        children: [(0, n.jsx)("img", {
          alt: "Reward Bow",
          src: _.A,
          className: S.L8
        }), (0, n.jsx)("div", {
          className: x.N1,
          children: (0, n.jsx)(d.LpS, {
            text: A.intl.string(A.t.rykAJ9),
            disableColor: true,
            className: S.HZ
          })
        }), (0, n.jsxs)("div", {
          className: x.xQ,
          children: [(0, n.jsxs)("div", {
            className: S.xE,
            children: [(0, n.jsxs)("div", {
              className: S.cs,
              children: [(0, n.jsx)(d.Heading, {
                variant: "heading-md/medium",
                color: "text-strong",
                lineClamp: 1,
                className: x.tZ,
                children: A.intl.string(A.t["0mDmg/"])
              }), (0, n.jsx)(u.m, {
                text: L ? A.intl.string(A.t.cKH3tk) : A.intl.formatToPlainString(A.t["8aMDPc"], {
                  totalCount: T.length
                }),
                align: "right",
                caretConfig: {
                  position: "bottom",
                  align: "end"
                },
                position: "top",
                children: (0, n.jsx)("span", {
                  className: S.ZB,
                  children: (0, n.jsx)(i.cBN, {
                    size: "xs"
                  })
                })
              })]
            }), (0, n.jsx)("div", {
              className: x.oh,
              "aria-hidden": true,
              children: (0, n.jsxs)("div", {
                className: S.L$,
                children: [(0, n.jsx)(b.Ay, {
                  variant: b.qP.BLUE,
                  progress: I.length,
                  maximum: T.length
                }), (0, n.jsxs)("div", {
                  className: a()(S.__, {
                    [S.gF]: L
                  }),
                  children: [L ? (0, n.jsx)(i.Uzd, {
                    size: "xs",
                    color: "currentColor"
                  }) : null, (0, n.jsx)(i.EYj, {
                    variant: "text-xs/medium",
                    color: "currentColor",
                    children: A.intl.formatToPlainString(A.t["5TwASM"], {
                      collectedCount: I.length,
                      totalCount: T.length
                    })
                  })]
                })]
              })
            })]
          }), (0, n.jsx)("div", {
            className: x.Vs,
            children: (0, n.jsx)(i.e2v, {
              wrap: false,
              className: x.Ld,
              fullWidth: true,
              children: (0, n.jsx)(i.$nd, {
                variant: "primary",
                onClick: e => {
                  e.stopPropagation(), L && (0, g.BX)(t.skuId, l).then(() => {
                    let e = p.A.getProduct(l);
                    null != e && (0, E.A)({
                      product: e,
                      analyticsLocations: [],
                      overrideGraphic: {
                        type: "video",
                        src: O.A,
                        fallbackImageSrc: C.A,
                        loop: true,
                        loopAt: 6,
                        aspectRatio: "16/9"
                      }
                    })
                  }).catch(() => {
                    (0, d.mMO)(() => Promise.resolve(e => (0, n.jsx)(i.Modal, {
                      transitionState: e.transitionState,
                      onClose: e.onClose,
                      size: "sm",
                      title: A.intl.string(A.t.SRTlyA),
                      actions: [{
                        text: A.intl.string(A.t.TyCVIq),
                        onClick: e.onClose,
                        variant: "primary"
                      }],
                      children: (0, n.jsx)("div", {
                        children: A.intl.string(A.t["0YpIF/"])
                      })
                    })))
                  })
                },
                text: A.intl.string(A.t.VnVTNc),
                fullWidth: true,
                disabled: !L,
                loading: N
              })
            })
          })]
        })]
      })
    })
  })
})