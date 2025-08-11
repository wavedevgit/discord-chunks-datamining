/** Chunk was on web.js **/
/** chunk id: 206044, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
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
  Chunk491821 = require("./491821.js");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      w(e, t, n[t])
    })
  }
  return e
}

function L(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e, t) {
  if (null == e) return {};
  var n, r, i = k(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function k(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let j = 1e3,
  U = (0, Chunk126663.animated)(Chunk481060.CJ0),
  G = e => {
    var {
      quest: t,
      location: n,
      questContentPosition: o,
      sourceQuestContent: a
    } = e, s = M(e, ["quest", "location", "questContentPosition", "sourceQuestContent"]);
    let [l, f] = i.useState(false), _ = i.useRef(new c.V7), p = (0, m.O5)();
    i.useEffect(() => {
      let e = _.current;
      return function() {
        e.stop()
      }
    }, []);
    let E = () => {
      p({
        questId: t.id,
        questContent: n,
        questContentCTA: m.jZ.COPY_QUEST_URL,
        questContentPosition: o,
        sourceQuestContent: a
      }), (0, h.JG)((0, g.Rs)(t.id), () => {
        f(true), _.current.start(j, () => f(false))
      })
    };
    return (0, r.jsx)(d.ua7, {
      forceOpen: l,
      shouldShow: l,
      color: d.ua7.Colors.GREEN,
      text: R.intl.string(R.t.MSaeTU),
      children: () => (0, r.jsx)(u.zx, x(D({}, s), {
        className: P.shareButton,
        color: u.zx.Colors.PRIMARY,
        size: u.zx.Sizes.SMALL,
        onClick: E,
        children: R.intl.string(R.t["5Z6rz8"])
      }))
    })
  },
  B = e => {
    var t;
    let {
      isQuestExpired: n,
      quest: o,
      location: c,
      size: u,
      expansionSpring: h,
      isAnimating: g,
      isExpanded: w,
      contentPosition: L,
      toggleExpanded: M,
      sourceQuestContent: k
    } = e, {
      ref: j,
      height: B
    } = (0, f.ZP)(), [Z, F] = i.useState(null), [V, H] = i.useState(null), Y = (0, p.Z)(e => {
      let t = e.target;
      F(t.offsetWidth), H(t.scrollWidth)
    }), W = (0, _.y)(Y), K = (0, A.uq)(c), z = c === b.jn.QUESTS_EMBED, q = (0, E.t5)(o, N.dr.QUESTS_CARD, c, k), X = (null == (t = o.userStatus) ? true : t.completedAt) != null, Q = (0, m.O5)(), J = (0, E.B6)(o.config.expiresAt), $ = (0, E.B6)(y.r.build(o.config).rewardsExpireAt), ee = i.useMemo(() => null != o.config.cosponsorMetadata, [o]), et = e => {
      e.stopPropagation(), e.currentTarget.blur(), M(), Q({
        questId: o.id,
        questContent: c,
        questContentCTA: w ? m.jZ.COLLAPSE : m.jZ.EXPAND,
        questContentPosition: L,
        sourceQuestContent: k
      })
    }, en = () => null != Z && null != V && Z < V, er = (0, r.jsx)(O.ZP, {
      className: P.partnerBranding,
      logotypeClassName: ee ? P.partnerBrandingLogotypes : true,
      gameTileSize: O.fF.MEDIUM,
      quest: o,
      separatorSpacing: O.US.MEDIUM,
      theme: C.BR.DARK,
      withGameTile: !z || null == o.config.cosponsorMetadata
    });
    return (0, r.jsxs)("div", {
      className: a()(P.outerContainer, {
        [P.outerContainerGiftInventory]: K,
        [P.outerContainerEmbed]: z,
        [P.outerContainerXs]: "xs" === u
      }),
      "aria-label": R.intl.string(R.t.dcl9MT),
      style: {
        height: K ? B : true
      },
      children: [(0, r.jsx)(T.Z, {
        quest: o,
        dimensions: {
          width: 660,
          height: 185
        },
        className: P.questSplash
      }), (0, r.jsxs)("div", {
        className: P.header,
        "aria-expanded": w,
        children: [(0, r.jsxs)(s.animated.div, {
          className: a()(P.headerContent, {
            [P.headerContentEmbed]: z
          }),
          style: {
            y: K ? h.to({
              range: [0, 1],
              output: [A.DJ, 0]
            }) : true
          },
          children: [K && (0, r.jsx)(s.animated.div, {
            className: P.headerCollapsedContent,
            style: {
              opacity: h.to({
                range: [0, 1],
                output: [1, 0]
              }),
              visibility: g || !w ? "inherit" : "hidden"
            },
            "aria-hidden": !g && w,
            children: (0, r.jsxs)(d.kL8, {
              "aria-label": R.intl.string(R.t.dcl9MT),
              onClick: et,
              className: P.headerCollapsedClickableContainer,
              children: [(0, r.jsx)("div", {
                className: P.headerCollapsedContentRewardWrapper,
                children: (0, r.jsx)(I.Z, {
                  quest: o,
                  questContent: c,
                  className: P.headerCollapsedRewardTile,
                  location: N.dr.QUESTS_CARD,
                  sourceQuestContent: k
                })
              }), (0, r.jsxs)("div", {
                className: P.headerCollapsedContentCopyWrapper,
                children: [(0, r.jsxs)("div", {
                  className: P.headerCollapsedContentCopyLogos,
                  children: [er, (0, r.jsx)(v.Z, {
                    color: "always-white"
                  })]
                }), (0, r.jsx)(d.Text, {
                  variant: "text-xs/medium",
                  children: q
                })]
              })]
            })
          }), (0, r.jsxs)(s.animated.div, {
            ref: e => {
              j.current = e
            },
            className: a()(P.headerExpandedContent, {
              [P.outerContainerGiftInventory]: K,
              [P.outerContainerEmbed]: z
            }),
            style: {
              opacity: h.to({
                range: [0, 1],
                output: [0, 1]
              }),
              visibility: g || w ? "inherit" : "hidden"
            },
            "aria-hidden": !g && !w,
            children: [(0, r.jsxs)("div", {
              className: P.headerExpandedWrapper,
              children: [(0, r.jsxs)("div", {
                className: P.iconLogotypeContainer,
                children: [er, z ? null : (0, r.jsx)(v.Z, {
                  color: "always-white"
                })]
              }), (0, r.jsxs)("div", {
                className: P.questInfo,
                children: [(0, r.jsx)(d.ua7, {
                  text: o.config.messages.questName,
                  shouldShow: en(),
                  children: e => (0, r.jsx)(d.X6q, x(D({
                    ref: W,
                    variant: "lg" === u ? "heading-xxl/bold" : "sm" === u ? "heading-xl/bold" : "heading-lg/bold",
                    className: P.heading,
                    color: "always-white"
                  }, e), {
                    children: R.intl.format(R.t.EAYZAg, {
                      questName: o.config.messages.questName
                    })
                  }))
                }), (0, r.jsx)(d.Text, {
                  variant: "text-xs/normal",
                  color: "always-white",
                  children: X ? R.intl.formatToPlainString(R.t.APddvL, {
                    expirationDate: $
                  }) : n ? R.intl.formatToPlainString(R.t.v7xMw8, {
                    expirationDate: J
                  }) : R.intl.formatToPlainString(R.t["pX+fmp"], {
                    expirationDate: J
                  })
                })]
              })]
            }), !n && K && (0, r.jsx)(G, {
              quest: o,
              location: c,
              questContentPosition: L,
              sourceQuestContent: k
            })]
          })]
        }), (0, r.jsxs)(s.animated.div, {
          className: P.iconsContainer,
          style: {
            top: K ? h.to({
              range: [0, 1],
              output: [A.DJ / 2 - A.Z$ / 2, A.jc]
            }) : A.jc
          },
          children: [(0, r.jsx)(S.r, {
            questContent: c,
            quest: o,
            questContentPosition: L,
            shouldShowDisclosure: true,
            hideLearnMore: K,
            showShareLink: !n && z,
            sourceQuestContent: k,
            children: e => (0, r.jsx)(s.animated.div, {
              style: {
                opacity: h,
                visibility: g || w ? "inherit" : "hidden"
              },
              "aria-hidden": !g && !w,
              children: (0, r.jsx)(d.P3F, x(D({}, e), {
                className: P.iconWrapper,
                "aria-label": R.intl.string(R.t.DEoVWV),
                children: (0, r.jsx)(d.xhG, {
                  size: "md",
                  color: l.Z.WHITE
                })
              }))
            })
          }), !(0, A.W_)(c) && (0, r.jsx)(d.P3F, {
            onClick: et,
            className: P.iconWrapper,
            "aria-label": w ? R.intl.string(R.t.iTcumZ) : R.intl.string(R.t.dcl9MT),
            children: (0, r.jsx)(U, {
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