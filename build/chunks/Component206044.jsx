/** Chunk was on 37447 **/
/** chunk id: 206044, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk803948 = require("./803948.js"),
  Chunk722770 = require("./722770.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk617136 = require("./617136.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk566078 = require("./566078.js"),
  Chunk685613 = require("./685613.jsx"),
  Chunk611855 = require("./611855.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk968435 = require("./968435.jsx"),
  Chunk670638 = require("./670638.jsx"),
  Chunk87894 = require("./87894.js"),
  Chunk46140 = require("./46140.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310696 = require("./310696.js");

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      s = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), s.forEach(function(t) {
      var s;
      s = n[t], t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = s
    })
  }
  return e
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      n.push.apply(n, s)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let P = (0, Chunk803948.animated)(Chunk481060.CJ0),
  w = e => {
    var t;
    let {
      isQuestExpired: n,
      quest: r,
      location: w,
      size: _,
      expansionSpring: M,
      isAnimating: R,
      isExpanded: D,
      contentPosition: k,
      toggleExpanded: Q,
      sourceQuestContent: L
    } = e, {
      ref: A,
      height: Z
    } = (0, c.ZP)(), [I, U] = o.useState(null), [B, W] = o.useState(null), G = (0, m.Z)(e => {
      let t = e.target;
      U(t.offsetWidth), W(t.scrollWidth)
    }), F = (0, d.y)(G), z = (0, v.uq)(w), H = w === g.jn.QUESTS_EMBED, X = (0, h.t5)(r, O.dr.QUESTS_CARD, w, L), Y = (null == (t = r.userStatus) ? true : t.completedAt) != null, V = (0, p.O5)(), J = (0, h.B6)(r.config.expiresAt), K = (0, h.B6)(x.r.build(r.config).rewardsExpireAt), $ = o.useMemo(() => null != r.config.cosponsorMetadata, [r]), ee = e => {
      e.stopPropagation(), e.currentTarget.blur(), Q(), V({
        questId: r.id,
        questContent: w,
        questContentCTA: D ? p.jZ.COLLAPSE : p.jZ.EXPAND,
        questContentPosition: k,
        sourceQuestContent: L
      })
    }, et = (0, s.jsx)(C.ZP, {
      className: q.partnerBranding,
      logotypeClassName: $ ? q.partnerBrandingLogotypes : true,
      gameTileSize: C.fF.MEDIUM,
      quest: r,
      separatorSpacing: C.US.MEDIUM,
      theme: E.BR.DARK,
      withGameTile: !H || null == r.config.cosponsorMetadata
    });
    return (0, s.jsxs)("div", {
      className: i()(q.outerContainer, {
        [q.outerContainerGiftInventory]: z,
        [q.outerContainerEmbed]: H,
        [q.outerContainerXs]: "xs" === _
      }),
      "aria-label": N.intl.string(N.t.dcl9MT),
      style: {
        height: z ? Z : true
      },
      children: [(0, s.jsx)(b.Z, {
        quest: r,
        dimensions: {
          width: 660,
          height: 185
        },
        className: q.questSplash
      }), (0, s.jsxs)("div", {
        className: q.header,
        "aria-expanded": D,
        children: [(0, s.jsxs)(a.animated.div, {
          className: i()(q.headerContent, {
            [q.headerContentEmbed]: H
          }),
          style: {
            y: z ? M.to({
              range: [0, 1],
              output: [v.DJ, 0]
            }) : true
          },
          children: [z && (0, s.jsx)(a.animated.div, {
            className: q.headerCollapsedContent,
            style: {
              opacity: M.to({
                range: [0, 1],
                output: [1, 0]
              }),
              visibility: R || !D ? "inherit" : "hidden"
            },
            "aria-hidden": !R && D,
            children: (0, s.jsxs)(u.kL8, {
              "aria-label": N.intl.string(N.t.dcl9MT),
              onClick: ee,
              className: q.headerCollapsedClickableContainer,
              children: [(0, s.jsx)("div", {
                className: q.headerCollapsedContentRewardWrapper,
                children: (0, s.jsx)(f.Z, {
                  quest: r,
                  questContent: w,
                  className: q.headerCollapsedRewardTile,
                  location: O.dr.QUESTS_CARD,
                  sourceQuestContent: L
                })
              }), (0, s.jsxs)("div", {
                className: q.headerCollapsedContentCopyWrapper,
                children: [(0, s.jsxs)("div", {
                  className: q.headerCollapsedContentCopyLogos,
                  children: [et, (0, s.jsx)(j.Z, {
                    color: "always-white"
                  })]
                }), (0, s.jsx)(u.Text, {
                  variant: "text-xs/medium",
                  children: X
                })]
              })]
            })
          }), (0, s.jsx)(a.animated.div, {
            ref: e => {
              A.current = e
            },
            className: i()(q.headerExpandedContent, {
              [q.outerContainerGiftInventory]: z,
              [q.outerContainerEmbed]: H
            }),
            style: {
              opacity: M.to({
                range: [0, 1],
                output: [0, 1]
              }),
              visibility: R || D ? "inherit" : "hidden"
            },
            "aria-hidden": !R && !D,
            children: (0, s.jsxs)("div", {
              className: q.headerExpandedWrapper,
              children: [(0, s.jsxs)("div", {
                className: q.iconLogotypeContainer,
                children: [et, H ? null : (0, s.jsx)(j.Z, {
                  color: "always-white"
                })]
              }), (0, s.jsxs)("div", {
                className: q.questInfo,
                children: [(0, s.jsx)(u.ua7, {
                  text: r.config.messages.questName,
                  shouldShow: null != I && null != B && I < B,
                  children: e => (0, s.jsx)(u.X6q, T(S({
                    ref: F,
                    variant: "lg" === _ ? "heading-xxl/bold" : "sm" === _ ? "heading-xl/bold" : "heading-lg/bold",
                    className: q.heading,
                    color: "always-white"
                  }, e), {
                    children: N.intl.format(N.t.EAYZAg, {
                      questName: r.config.messages.questName
                    })
                  }))
                }), (0, s.jsx)(u.Text, {
                  variant: "text-xs/normal",
                  color: "always-white",
                  children: Y ? N.intl.formatToPlainString(N.t.APddvL, {
                    expirationDate: K
                  }) : n ? N.intl.formatToPlainString(N.t.v7xMw8, {
                    expirationDate: J
                  }) : N.intl.formatToPlainString(N.t["pX+fmp"], {
                    expirationDate: J
                  })
                })]
              })]
            })
          })]
        }), (0, s.jsxs)(a.animated.div, {
          className: q.iconsContainer,
          style: {
            top: z ? M.to({
              range: [0, 1],
              output: [v.DJ / 2 - v.Z$ / 2, v.jc]
            }) : v.jc
          },
          children: [(0, s.jsx)(y.r, {
            questContent: w,
            quest: r,
            questContentPosition: k,
            shouldShowDisclosure: true,
            hideLearnMore: z,
            showShareLink: !n && H,
            sourceQuestContent: L,
            children: e => (0, s.jsx)(a.animated.div, {
              style: {
                opacity: M,
                visibility: R || D ? "inherit" : "hidden"
              },
              "aria-hidden": !R && !D,
              children: (0, s.jsx)(u.P3F, T(S({}, e), {
                className: q.iconWrapper,
                "aria-label": N.intl.string(N.t.DEoVWV),
                children: (0, s.jsx)(u.xhG, {
                  size: "md",
                  color: l.Z.WHITE
                })
              }))
            })
          }), !(0, v.W_)(w) && (0, s.jsx)(u.P3F, {
            onClick: ee,
            className: q.iconWrapper,
            "aria-label": D ? N.intl.string(N.t.iTcumZ) : N.intl.string(N.t.dcl9MT),
            children: (0, s.jsx)(P, {
              style: {
                rotate: M.to({
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