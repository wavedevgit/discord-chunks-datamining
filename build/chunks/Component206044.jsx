/** Chunk was on 37447 **/
/** chunk id: 206044, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk815061 = require("./815061.js"),
  Chunk722770 = require("./722770.js"),
  Chunk846519 = require("./846519.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk572004 = require("./572004.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
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

function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = (0, Chunk815061.animated)(Chunk481060.CJ0),
  M = e => {
    var {
      quest: t,
      location: n,
      questContentPosition: o,
      sourceQuestContent: i
    } = e, a = function(e, t) {
      if (null == e) return {};
      var n, r, s = function(e, t) {
        if (null == e) return {};
        var n, r, s = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
        return s
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n])
      }
      return s
    }(e, ["quest", "location", "questContentPosition", "sourceQuestContent"]);
    let [l, m] = s.useState(false), p = s.useRef(new c.V7), g = (0, x.O5)();
    s.useEffect(() => {
      let e = p.current;
      return function() {
        e.stop()
      }
    }, []);
    let C = () => {
      g({
        questId: t.id,
        questContent: n,
        questContentCTA: x.jZ.COPY_QUEST_URL,
        questContentPosition: o,
        sourceQuestContent: i
      }), (0, h.JG)((0, j.Rs)(t.id), () => {
        m(true), p.current.start(1e3, () => m(false))
      })
    };
    return (0, r.jsx)(d.ua7, {
      forceOpen: l,
      shouldShow: l,
      color: d.ua7.Colors.GREEN,
      text: P.intl.string(P.t.MSaeTU),
      children: () => (0, r.jsx)(u.zx, _(R({}, a), {
        className: w.shareButton,
        color: u.zx.Colors.PRIMARY,
        size: u.zx.Sizes.SMALL,
        onClick: C,
        children: P.intl.string(P.t["5Z6rz8"])
      }))
    })
  },
  D = e => {
    var t;
    let {
      isQuestExpired: n,
      quest: o,
      location: c,
      size: u,
      expansionSpring: h,
      isAnimating: j,
      isExpanded: D,
      contentPosition: A,
      toggleExpanded: Q,
      sourceQuestContent: Z
    } = e, {
      ref: L,
      height: B
    } = (0, m.ZP)(), [k, U] = s.useState(null), [G, W] = s.useState(null), F = (0, g.Z)(e => {
      let t = e.target;
      U(t.offsetWidth), W(t.scrollWidth)
    }), z = (0, p.y)(F), X = (0, T.uq)(c), H = c === f.jn.QUESTS_EMBED, Y = (0, C.t5)(o, q.dr.QUESTS_CARD, c, Z), V = (null == (t = o.userStatus) ? true : t.completedAt) != null, J = (0, x.O5)(), K = (0, C.B6)(o.config.expiresAt), $ = (0, C.B6)(b.r.build(o.config).rewardsExpireAt), ee = s.useMemo(() => null != o.config.cosponsorMetadata, [o]), et = e => {
      e.stopPropagation(), e.currentTarget.blur(), Q(), J({
        questId: o.id,
        questContent: c,
        questContentCTA: D ? x.jZ.COLLAPSE : x.jZ.EXPAND,
        questContentPosition: A,
        sourceQuestContent: Z
      })
    }, en = (0, r.jsx)(v.ZP, {
      className: w.partnerBranding,
      logotypeClassName: ee ? w.partnerBrandingLogotypes : true,
      gameTileSize: v.fF.MEDIUM,
      quest: o,
      separatorSpacing: v.US.MEDIUM,
      theme: S.BR.DARK,
      withGameTile: !H || null == o.config.cosponsorMetadata
    });
    return (0, r.jsxs)("div", {
      className: i()(w.outerContainer, {
        [w.outerContainerGiftInventory]: X,
        [w.outerContainerEmbed]: H,
        [w.outerContainerXs]: "xs" === u
      }),
      "aria-label": P.intl.string(P.t.dcl9MT),
      style: {
        height: X ? B : true
      },
      children: [(0, r.jsx)(N.Z, {
        quest: o,
        dimensions: {
          width: 660,
          height: 185
        },
        className: w.questSplash
      }), (0, r.jsxs)("div", {
        className: w.header,
        "aria-expanded": D,
        children: [(0, r.jsxs)(a.animated.div, {
          className: i()(w.headerContent, {
            [w.headerContentEmbed]: H
          }),
          style: {
            y: X ? h.to({
              range: [0, 1],
              output: [T.DJ, 0]
            }) : true
          },
          children: [X && (0, r.jsx)(a.animated.div, {
            className: w.headerCollapsedContent,
            style: {
              opacity: h.to({
                range: [0, 1],
                output: [1, 0]
              }),
              visibility: j || !D ? "inherit" : "hidden"
            },
            "aria-hidden": !j && D,
            children: (0, r.jsxs)(d.kL8, {
              "aria-label": P.intl.string(P.t.dcl9MT),
              onClick: et,
              className: w.headerCollapsedClickableContainer,
              children: [(0, r.jsx)("div", {
                className: w.headerCollapsedContentRewardWrapper,
                children: (0, r.jsx)(O.Z, {
                  quest: o,
                  questContent: c,
                  className: w.headerCollapsedRewardTile,
                  location: q.dr.QUESTS_CARD,
                  sourceQuestContent: Z
                })
              }), (0, r.jsxs)("div", {
                className: w.headerCollapsedContentCopyWrapper,
                children: [(0, r.jsxs)("div", {
                  className: w.headerCollapsedContentCopyLogos,
                  children: [en, (0, r.jsx)(y.Z, {
                    color: "always-white"
                  })]
                }), (0, r.jsx)(d.Text, {
                  variant: "text-xs/medium",
                  children: Y
                })]
              })]
            })
          }), (0, r.jsxs)(a.animated.div, {
            ref: e => {
              L.current = e
            },
            className: i()(w.headerExpandedContent, {
              [w.outerContainerGiftInventory]: X,
              [w.outerContainerEmbed]: H
            }),
            style: {
              opacity: h.to({
                range: [0, 1],
                output: [0, 1]
              }),
              visibility: j || D ? "inherit" : "hidden"
            },
            "aria-hidden": !j && !D,
            children: [(0, r.jsxs)("div", {
              className: w.headerExpandedWrapper,
              children: [(0, r.jsxs)("div", {
                className: w.iconLogotypeContainer,
                children: [en, H ? null : (0, r.jsx)(y.Z, {
                  color: "always-white"
                })]
              }), (0, r.jsxs)("div", {
                className: w.questInfo,
                children: [(0, r.jsx)(d.ua7, {
                  text: o.config.messages.questName,
                  shouldShow: null != k && null != G && k < G,
                  children: e => (0, r.jsx)(d.X6q, _(R({
                    ref: z,
                    variant: "lg" === u ? "heading-xxl/bold" : "sm" === u ? "heading-xl/bold" : "heading-lg/bold",
                    className: w.heading,
                    color: "always-white"
                  }, e), {
                    children: P.intl.format(P.t.EAYZAg, {
                      questName: o.config.messages.questName
                    })
                  }))
                }), (0, r.jsx)(d.Text, {
                  variant: "text-xs/normal",
                  color: "always-white",
                  children: V ? P.intl.formatToPlainString(P.t.APddvL, {
                    expirationDate: $
                  }) : n ? P.intl.formatToPlainString(P.t.v7xMw8, {
                    expirationDate: K
                  }) : P.intl.formatToPlainString(P.t["pX+fmp"], {
                    expirationDate: K
                  })
                })]
              })]
            }), !n && X && (0, r.jsx)(M, {
              quest: o,
              location: c,
              questContentPosition: A,
              sourceQuestContent: Z
            })]
          })]
        }), (0, r.jsxs)(a.animated.div, {
          className: w.iconsContainer,
          style: {
            top: X ? h.to({
              range: [0, 1],
              output: [T.DJ / 2 - T.Z$ / 2, T.jc]
            }) : T.jc
          },
          children: [(0, r.jsx)(E.r, {
            questContent: c,
            quest: o,
            questContentPosition: A,
            shouldShowDisclosure: true,
            hideLearnMore: X,
            showShareLink: !n && H,
            sourceQuestContent: Z,
            children: e => (0, r.jsx)(a.animated.div, {
              style: {
                opacity: h,
                visibility: j || D ? "inherit" : "hidden"
              },
              "aria-hidden": !j && !D,
              children: (0, r.jsx)(d.P3F, _(R({}, e), {
                className: w.iconWrapper,
                "aria-label": P.intl.string(P.t.DEoVWV),
                children: (0, r.jsx)(d.xhG, {
                  size: "md",
                  color: l.Z.WHITE
                })
              }))
            })
          }), !(0, T.W_)(c) && (0, r.jsx)(d.P3F, {
            onClick: et,
            className: w.iconWrapper,
            "aria-label": D ? P.intl.string(P.t.iTcumZ) : P.intl.string(P.t.dcl9MT),
            children: (0, r.jsx)(I, {
              style: {
                rotate: h.to({
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