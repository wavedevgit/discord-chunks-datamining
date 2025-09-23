/** Chunk was on web.js **/
/** chunk id: 206044, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk401393 = require("./401393.js"),
  Chunk722770 = require("./722770.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk617136 = require("./617136.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk566078 = require("./566078.js"),
  Chunk477005 = require("./477005.jsx"),
  Chunk685613 = require("./685613.jsx"),
  Chunk611855 = require("./611855.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk670638 = require("./670638.jsx"),
  Chunk87894 = require("./87894.js"),
  Chunk46140 = require("./46140.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk74576 = require("./74576.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
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

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = (0, Chunk401393.animated)(Chunk481060.CJ0),
  D = e => {
    var t;
    let {
      isQuestExpired: n,
      quest: a,
      location: C,
      size: R,
      expansionSpring: D,
      isAnimating: x,
      isExpanded: L,
      isInteracting: j,
      contentPosition: M,
      toggleExpanded: k,
      sourceQuestContent: U
    } = e, {
      ref: G,
      height: B
    } = (0, u.ZP)(), [Z, F] = i.useState(null), [V, H] = i.useState(null), Y = (0, f.Z)(e => {
      let t = e.target;
      F(t.offsetWidth), H(t.scrollWidth)
    }), W = (0, d.y)(Y), K = (0, v.uq)(C), z = C === h.jn.QUESTS_EMBED, q = (0, p.t5)(a, I.dr.QUESTS_CARD, C, U), X = (null == (t = a.userStatus) ? true : t.completedAt) != null, Q = (0, _.O5)(), J = (0, p.B6)(a.config.expiresAt), $ = (0, p.B6)(m.r.build(a.config).rewardsExpireAt), ee = i.useMemo(() => null != a.config.cosponsorMetadata, [a]), et = e => {
      e.stopPropagation(), e.currentTarget.blur(), k(), Q({
        questId: a.id,
        questContent: C,
        questContentCTA: L ? _.jZ.COLLAPSE : _.jZ.EXPAND,
        questContentPosition: M,
        sourceQuestContent: U
      })
    }, en = () => null != Z && null != V && Z < V, er = (0, r.jsx)(E.ZP, {
      className: A.partnerBranding,
      logotypeClassName: ee ? A.partnerBrandingLogotypes : true,
      gameTileSize: E.fF.MEDIUM,
      quest: a,
      separatorSpacing: E.US.MEDIUM,
      theme: T.BR.DARK,
      withGameTile: !z || null == a.config.cosponsorMetadata
    });
    return (0, r.jsxs)("div", {
      className: o()(A.outerContainer, {
        [A.outerContainerGiftInventory]: K,
        [A.outerContainerEmbed]: z,
        [A.outerContainerXs]: "xs" === R
      }),
      "aria-label": S.intl.string(S.t.dcl9MT),
      style: {
        height: K ? B : true
      },
      children: [(0, r.jsx)(g.Z, {
        quest: a,
        isInteracting: j,
        containerClassName: A.questSplashContainer,
        imageSize: {
          width: 660,
          height: 185
        },
        imageClassName: A.questSplashImage
      }), (0, r.jsxs)("div", {
        className: A.header,
        "aria-expanded": L,
        children: [(0, r.jsxs)(s.animated.div, {
          className: o()(A.headerContent, {
            [A.headerContentEmbed]: z
          }),
          style: {
            y: K ? D.to({
              range: [0, 1],
              output: [v.DJ, 0]
            }) : true
          },
          children: [K && (0, r.jsx)(s.animated.div, {
            className: A.headerCollapsedContent,
            style: {
              opacity: D.to({
                range: [0, 1],
                output: [1, 0]
              }),
              visibility: x || !L ? "inherit" : "hidden"
            },
            "aria-hidden": !x && L,
            children: (0, r.jsxs)(c.kL8, {
              "aria-label": S.intl.string(S.t.dcl9MT),
              onClick: et,
              className: A.headerCollapsedClickableContainer,
              children: [(0, r.jsx)("div", {
                className: A.headerCollapsedContentRewardWrapper,
                children: (0, r.jsx)(y.Z, {
                  quest: a,
                  questContent: C,
                  className: A.headerCollapsedRewardTile,
                  location: I.dr.QUESTS_CARD,
                  sourceQuestContent: U
                })
              }), (0, r.jsxs)("div", {
                className: A.headerCollapsedContentCopyWrapper,
                children: [(0, r.jsxs)("div", {
                  className: A.headerCollapsedContentCopyLogos,
                  children: [er, (0, r.jsx)(b.Z, {
                    color: "always-white"
                  })]
                }), (0, r.jsx)(c.Text, {
                  variant: "text-xs/medium",
                  children: q
                })]
              })]
            })
          }), (0, r.jsx)(s.animated.div, {
            ref: e => {
              G.current = e
            },
            className: o()(A.headerExpandedContent, {
              [A.outerContainerGiftInventory]: K,
              [A.outerContainerEmbed]: z
            }),
            style: {
              opacity: D.to({
                range: [0, 1],
                output: [0, 1]
              }),
              visibility: x || L ? "inherit" : "hidden"
            },
            "aria-hidden": !x && !L,
            children: (0, r.jsxs)("div", {
              className: A.headerExpandedWrapper,
              children: [(0, r.jsxs)("div", {
                className: A.iconLogotypeContainer,
                children: [er, z ? null : (0, r.jsx)(b.Z, {
                  color: "always-white"
                })]
              }), (0, r.jsxs)("div", {
                className: A.questInfo,
                children: [(0, r.jsx)(c.ua7, {
                  text: a.config.messages.questName,
                  shouldShow: en(),
                  children: e => (0, r.jsx)(c.X6q, P(N({
                    ref: W,
                    variant: "lg" === R ? "heading-xxl/bold" : "sm" === R ? "heading-xl/bold" : "heading-lg/bold",
                    className: A.heading,
                    color: "always-white"
                  }, e), {
                    children: S.intl.format(S.t.EAYZAg, {
                      questName: a.config.messages.questName
                    })
                  }))
                }), (0, r.jsx)(c.Text, {
                  variant: "text-xs/normal",
                  color: "always-white",
                  children: X ? S.intl.formatToPlainString(S.t.APddvL, {
                    expirationDate: $
                  }) : n ? S.intl.formatToPlainString(S.t.v7xMw8, {
                    expirationDate: J
                  }) : S.intl.formatToPlainString(S.t["pX+fmp"], {
                    expirationDate: J
                  })
                })]
              })]
            })
          })]
        }), (0, r.jsxs)(s.animated.div, {
          className: A.iconsContainer,
          style: {
            top: K ? D.to({
              range: [0, 1],
              output: [v.DJ / 2 - v.Z$ / 2, v.jc]
            }) : v.jc
          },
          children: [(0, r.jsx)(O.r, {
            questContent: C,
            quest: a,
            questContentPosition: M,
            shouldShowDisclosure: true,
            hideLearnMore: K,
            showShareLink: !n && z,
            sourceQuestContent: U,
            children: e => (0, r.jsx)(s.animated.div, {
              style: {
                opacity: D,
                visibility: x || L ? "inherit" : "hidden"
              },
              "aria-hidden": !x && !L,
              children: (0, r.jsx)(c.P3F, P(N({}, e), {
                className: A.iconWrapper,
                "aria-label": S.intl.string(S.t.DEoVWV),
                children: (0, r.jsx)(c.xhG, {
                  size: "md",
                  color: l.Z.WHITE
                })
              }))
            })
          }), !(0, v.W_)(C) && (0, r.jsx)(c.P3F, {
            onClick: et,
            className: A.iconWrapper,
            "aria-label": L ? S.intl.string(S.t.iTcumZ) : S.intl.string(S.t.dcl9MT),
            children: (0, r.jsx)(w, {
              style: {
                rotate: D.to({
                  range: [0, 1],
                  output: [0, 180]
                })
              },
              color: l.Z.WHITE
            })
          })]
        })]
      })]
    })
  }