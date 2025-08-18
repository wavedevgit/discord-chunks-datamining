/** Chunk was on 37447 **/
/** chunk id: 206044, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk815061 = require("./815061.js"),
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

function T(e) {
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

function S(e, t) {
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
let P = (0, Chunk815061.animated)(Chunk481060.CJ0),
  w = e => {
    var t;
    let {
      isQuestExpired: n,
      quest: r,
      location: w,
      size: R,
      expansionSpring: M,
      isAnimating: _,
      isExpanded: D,
      contentPosition: Q,
      toggleExpanded: A,
      sourceQuestContent: L
    } = e, {
      ref: B,
      height: k
    } = (0, c.ZP)(), [I, Z] = o.useState(null), [U, W] = o.useState(null), G = (0, m.Z)(e => {
      let t = e.target;
      Z(t.offsetWidth), W(t.scrollWidth)
    }), F = (0, d.y)(G), H = (0, v.uq)(w), X = w === g.jn.QUESTS_EMBED, Y = (0, h.t5)(r, N.dr.QUESTS_CARD, w, L), z = (null == (t = r.userStatus) ? true : t.completedAt) != null, V = (0, p.O5)(), J = (0, h.B6)(r.config.expiresAt), K = (0, h.B6)(x.r.build(r.config).rewardsExpireAt), $ = o.useMemo(() => null != r.config.cosponsorMetadata, [r]), ee = e => {
      e.stopPropagation(), e.currentTarget.blur(), A(), V({
        questId: r.id,
        questContent: w,
        questContentCTA: D ? p.jZ.COLLAPSE : p.jZ.EXPAND,
        questContentPosition: Q,
        sourceQuestContent: L
      })
    }, et = (0, s.jsx)(C.ZP, {
      className: E.partnerBranding,
      logotypeClassName: $ ? E.partnerBrandingLogotypes : true,
      gameTileSize: C.fF.MEDIUM,
      quest: r,
      separatorSpacing: C.US.MEDIUM,
      theme: O.BR.DARK,
      withGameTile: !X || null == r.config.cosponsorMetadata
    });
    return (0, s.jsxs)("div", {
      className: i()(E.outerContainer, {
        [E.outerContainerGiftInventory]: H,
        [E.outerContainerEmbed]: X,
        [E.outerContainerXs]: "xs" === R
      }),
      "aria-label": q.intl.string(q.t.dcl9MT),
      style: {
        height: H ? k : true
      },
      children: [(0, s.jsx)(b.Z, {
        quest: r,
        dimensions: {
          width: 660,
          height: 185
        },
        className: E.questSplash
      }), (0, s.jsxs)("div", {
        className: E.header,
        "aria-expanded": D,
        children: [(0, s.jsxs)(a.animated.div, {
          className: i()(E.headerContent, {
            [E.headerContentEmbed]: X
          }),
          style: {
            y: H ? M.to({
              range: [0, 1],
              output: [v.DJ, 0]
            }) : true
          },
          children: [H && (0, s.jsx)(a.animated.div, {
            className: E.headerCollapsedContent,
            style: {
              opacity: M.to({
                range: [0, 1],
                output: [1, 0]
              }),
              visibility: _ || !D ? "inherit" : "hidden"
            },
            "aria-hidden": !_ && D,
            children: (0, s.jsxs)(u.kL8, {
              "aria-label": q.intl.string(q.t.dcl9MT),
              onClick: ee,
              className: E.headerCollapsedClickableContainer,
              children: [(0, s.jsx)("div", {
                className: E.headerCollapsedContentRewardWrapper,
                children: (0, s.jsx)(f.Z, {
                  quest: r,
                  questContent: w,
                  className: E.headerCollapsedRewardTile,
                  location: N.dr.QUESTS_CARD,
                  sourceQuestContent: L
                })
              }), (0, s.jsxs)("div", {
                className: E.headerCollapsedContentCopyWrapper,
                children: [(0, s.jsxs)("div", {
                  className: E.headerCollapsedContentCopyLogos,
                  children: [et, (0, s.jsx)(j.Z, {
                    color: "always-white"
                  })]
                }), (0, s.jsx)(u.Text, {
                  variant: "text-xs/medium",
                  children: Y
                })]
              })]
            })
          }), (0, s.jsx)(a.animated.div, {
            ref: e => {
              B.current = e
            },
            className: i()(E.headerExpandedContent, {
              [E.outerContainerGiftInventory]: H,
              [E.outerContainerEmbed]: X
            }),
            style: {
              opacity: M.to({
                range: [0, 1],
                output: [0, 1]
              }),
              visibility: _ || D ? "inherit" : "hidden"
            },
            "aria-hidden": !_ && !D,
            children: (0, s.jsxs)("div", {
              className: E.headerExpandedWrapper,
              children: [(0, s.jsxs)("div", {
                className: E.iconLogotypeContainer,
                children: [et, X ? null : (0, s.jsx)(j.Z, {
                  color: "always-white"
                })]
              }), (0, s.jsxs)("div", {
                className: E.questInfo,
                children: [(0, s.jsx)(u.ua7, {
                  text: r.config.messages.questName,
                  shouldShow: null != I && null != U && I < U,
                  children: e => (0, s.jsx)(u.X6q, S(T({
                    ref: F,
                    variant: "lg" === R ? "heading-xxl/bold" : "sm" === R ? "heading-xl/bold" : "heading-lg/bold",
                    className: E.heading,
                    color: "always-white"
                  }, e), {
                    children: q.intl.format(q.t.EAYZAg, {
                      questName: r.config.messages.questName
                    })
                  }))
                }), (0, s.jsx)(u.Text, {
                  variant: "text-xs/normal",
                  color: "always-white",
                  children: z ? q.intl.formatToPlainString(q.t.APddvL, {
                    expirationDate: K
                  }) : n ? q.intl.formatToPlainString(q.t.v7xMw8, {
                    expirationDate: J
                  }) : q.intl.formatToPlainString(q.t["pX+fmp"], {
                    expirationDate: J
                  })
                })]
              })]
            })
          })]
        }), (0, s.jsxs)(a.animated.div, {
          className: E.iconsContainer,
          style: {
            top: H ? M.to({
              range: [0, 1],
              output: [v.DJ / 2 - v.Z$ / 2, v.jc]
            }) : v.jc
          },
          children: [(0, s.jsx)(y.r, {
            questContent: w,
            quest: r,
            questContentPosition: Q,
            shouldShowDisclosure: true,
            hideLearnMore: H,
            showShareLink: !n && X,
            sourceQuestContent: L,
            children: e => (0, s.jsx)(a.animated.div, {
              style: {
                opacity: M,
                visibility: _ || D ? "inherit" : "hidden"
              },
              "aria-hidden": !_ && !D,
              children: (0, s.jsx)(u.P3F, S(T({}, e), {
                className: E.iconWrapper,
                "aria-label": q.intl.string(q.t.DEoVWV),
                children: (0, s.jsx)(u.xhG, {
                  size: "md",
                  color: l.Z.WHITE
                })
              }))
            })
          }), !(0, v.W_)(w) && (0, s.jsx)(u.P3F, {
            onClick: ee,
            className: E.iconWrapper,
            "aria-label": D ? q.intl.string(q.t.iTcumZ) : q.intl.string(q.t.dcl9MT),
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