/** Chunk was on web.js **/
/** chunk id: 150588, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk617136 = require("./617136.js"),
  Chunk49436 = require("./49436.js"),
  Chunk373370 = require("./373370.js"),
  Chunk968843 = require("./968843.js"),
  Chunk477005 = require("./477005.jsx"),
  Chunk698716 = require("./698716.jsx"),
  Chunk685613 = require("./685613.jsx"),
  Chunk611855 = require("./611855.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk231919 = require("./231919.js"),
  Chunk324805 = require("./324805.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk451882 = require("./451882.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let D = (0, Chunk205120.animated)(Chunk481060.CJ0),
  x = e => {
    var t;
    let {
      isQuestExpired: n,
      quest: a,
      location: N,
      size: R,
      expansionSpring: x,
      isAnimating: L,
      isExpanded: j,
      isInteracting: M,
      contentPosition: k,
      toggleExpanded: U,
      sourceQuestContent: G
    } = e, {
      ref: Z,
      height: B
    } = (0, d.ZP)(), [F, V] = i.useState(null), [H, Y] = i.useState(null), W = (0, p.Z)(e => {
      let t = e.target;
      V(t.offsetWidth), Y(t.scrollWidth)
    }), K = (0, f.y)(W), z = (0, S.uq)(N), q = N === m.jn.QUESTS_EMBED, Q = (0, h.t5)(a, I.dr.QUESTS_CARD, N, G), X = (null == (t = a.userStatus) ? true : t.completedAt) != null, J = (0, _.O5)(), $ = (0, g.B6)(a.config.expiresAt), ee = (0, g.B6)(a.config.rewardsConfig.rewardsExpireAt), et = i.useMemo(() => null != a.config.cosponsorMetadata, [a]), en = e => {
      e.stopPropagation(), e.currentTarget.blur(), U(), J({
        questId: a.id,
        questContent: N,
        questContentCTA: j ? _.jZ.COLLAPSE : _.jZ.EXPAND,
        questContentPosition: k,
        sourceQuestContent: G
      })
    }, er = () => null != F && null != H && F < H, ei = (0, r.jsx)(y.ZP, {
      className: C.partnerBranding,
      logotypeClassName: et ? C.partnerBrandingLogotypes : true,
      gameTileSize: y.fF.MEDIUM,
      quest: a,
      separatorSpacing: y.US.MEDIUM,
      theme: T.BR.DARK,
      withGameTile: !q || null == a.config.cosponsorMetadata
    });
    return (0, r.jsxs)("div", {
      className: o()(C.outerContainer, {
        [C.outerContainerGiftInventory]: z,
        [C.outerContainerEmbed]: q,
        [C.outerContainerXs]: "xs" === R
      }),
      "aria-label": A.intl.string(A.t.dcl9MQ),
      style: {
        height: z ? B : true
      },
      children: [(0, r.jsx)(E.Z, {
        quest: a,
        isInteracting: M,
        containerClassName: C.questSplashContainer,
        imageSize: {
          width: 660,
          height: 185
        },
        imageClassName: C.questSplashImage
      }), (0, r.jsxs)("div", {
        className: C.header,
        "aria-expanded": j,
        children: [(0, r.jsxs)(s.animated.div, {
          className: o()(C.headerContent, {
            [C.headerContentEmbed]: q
          }),
          style: {
            y: z ? x.to({
              range: [0, 1],
              output: [S.DJ, 0]
            }) : true
          },
          children: [z && (0, r.jsx)(s.animated.div, {
            className: C.headerCollapsedContent,
            style: {
              opacity: x.to({
                range: [0, 1],
                output: [1, 0]
              }),
              visibility: L || !j ? "inherit" : "hidden"
            },
            "aria-hidden": !L && j,
            children: (0, r.jsxs)(u.kL8, {
              "aria-label": A.intl.string(A.t.dcl9MQ),
              onClick: en,
              className: C.headerCollapsedClickableContainer,
              children: [(0, r.jsx)("div", {
                className: C.headerCollapsedContentRewardWrapper,
                children: (0, r.jsx)(v.Z, {
                  quest: a,
                  questContent: N,
                  className: C.headerCollapsedRewardTile,
                  location: I.dr.QUESTS_CARD,
                  sourceQuestContent: G
                })
              }), (0, r.jsxs)("div", {
                className: C.headerCollapsedContentCopyWrapper,
                children: [(0, r.jsxs)("div", {
                  className: C.headerCollapsedContentCopyLogos,
                  children: [ei, (0, r.jsx)(O.Z, {
                    color: "always-white"
                  })]
                }), (0, r.jsx)(u.Text, {
                  variant: "text-xs/medium",
                  children: Q
                })]
              })]
            })
          }), (0, r.jsx)(s.animated.div, {
            ref: e => {
              Z.current = e
            },
            className: o()(C.headerExpandedContent, {
              [C.outerContainerGiftInventory]: z,
              [C.outerContainerEmbed]: q
            }),
            style: {
              opacity: x.to({
                range: [0, 1],
                output: [0, 1]
              }),
              visibility: L || j ? "inherit" : "hidden"
            },
            "aria-hidden": !L && !j,
            children: (0, r.jsxs)("div", {
              className: C.headerExpandedWrapper,
              children: [(0, r.jsxs)("div", {
                className: C.iconLogotypeContainer,
                children: [ei, q ? null : (0, r.jsx)(O.Z, {
                  color: "always-white"
                })]
              }), (0, r.jsxs)("div", {
                className: C.questInfo,
                children: [(0, r.jsx)(c.u, {
                  __unsupportedReactNodeAsText: a.config.messages.questName,
                  shouldShow: er(),
                  children: (0, r.jsx)(u.Heading, {
                    ref: K,
                    variant: "lg" === R ? "heading-xxl/bold" : "sm" === R ? "heading-xl/bold" : "heading-lg/bold",
                    className: C.heading,
                    color: "always-white",
                    children: A.intl.format(A.t.EAYZAr, {
                      questName: a.config.messages.questName
                    })
                  })
                }), (0, r.jsx)(u.Text, {
                  variant: "text-xs/normal",
                  color: "always-white",
                  children: X ? A.intl.formatToPlainString(A.t.APddvF, {
                    expirationDate: ee
                  }) : n ? A.intl.formatToPlainString(A.t.v7xMw7, {
                    expirationDate: $
                  }) : A.intl.formatToPlainString(A.t["pX+fmn"], {
                    expirationDate: $
                  })
                })]
              })]
            })
          })]
        }), (0, r.jsxs)(s.animated.div, {
          className: C.iconsContainer,
          style: {
            top: z ? x.to({
              range: [0, 1],
              output: [S.DJ / 2 - S.Z$ / 2, S.jc]
            }) : S.jc
          },
          children: [(0, r.jsx)(b.i, {
            questContent: N,
            quest: a,
            questContentPosition: k,
            shouldShowDisclosure: true,
            hideLearnMore: z,
            showShareLink: !n && q,
            sourceQuestContent: G,
            children: e => (0, r.jsx)(s.animated.div, {
              style: {
                opacity: x,
                visibility: L || j ? "inherit" : "hidden"
              },
              "aria-hidden": !L && !j,
              children: (0, r.jsx)(u.P3F, w(P({}, e), {
                className: C.iconWrapper,
                "aria-label": A.intl.string(A.t.DEoVWZ),
                children: (0, r.jsx)(u.xhG, {
                  size: "md",
                  color: l.Z.colors.WHITE
                })
              }))
            })
          }), !(0, S.W_)(N) && (0, r.jsx)(u.P3F, {
            onClick: en,
            className: C.iconWrapper,
            "aria-label": j ? A.intl.string(A.t.iTcuma) : A.intl.string(A.t.dcl9MQ),
            children: (0, r.jsx)(D, {
              style: {
                rotate: x.to({
                  range: [0, 1],
                  output: [0, 180]
                })
              },
              color: l.Z.colors.WHITE
            })
          })]
        })]
      })]
    })
  }