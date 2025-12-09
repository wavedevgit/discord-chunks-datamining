/** Chunk was on 75393 **/
/** chunk id: 439826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./784620.js"), require("./973216.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk410030 = require("./410030.js"),
  Chunk297700 = require("./297700.jsx"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk49436 = require("./49436.js"),
  Chunk111131 = require("./111131.js"),
  Chunk968843 = require("./968843.js"),
  Chunk862657 = require("./862657.js"),
  Chunk254579 = require("./254579.js"),
  Chunk623249 = require("./623249.jsx"),
  Chunk477005 = require("./477005.jsx"),
  Chunk698716 = require("./698716.jsx"),
  Chunk685613 = require("./685613.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk251360 = require("./251360.js"),
  Chunk19148 = require("./19148.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk642145 = require("./642145.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk518388 = require("./518388.js");

function R(e) {
  var t;
  let {
    quest: n,
    errorHints: i,
    warningHints: l,
    isDarkTheme: o,
    sourceQuestContent: c
  } = e, {
    ref: m,
    height: p = 0
  } = (0, u.ZP)([i]), h = (null == (t = n.userStatus) ? true : t.completedAt) != null, x = (0, b.z)(n), {
    type: f,
    hints: g
  } = r.useMemo(() => h || x ? {
    type: 2,
    hints: []
  } : i.length > 0 ? {
    type: 0,
    hints: i.map(e => e.message)
  } : l.length > 0 ? {
    type: 1,
    hints: l
  } : {
    type: 2,
    hints: []
  }, [i, h, x, l]), v = 2 !== f, j = (0, d.q_F)({
    opacity: +!!v,
    height: v ? p : 0,
    config: P.Y
  }), y = 0 === f ? d.Mgn : d.d3s, C = d.TVs.unsafe_rawColors.RED_345.css, S = 0 === f ? C : o ? d.TVs.colors.TEXT_DEFAULT : d.TVs.colors.WHITE;
  return (0, a.jsx)(s.animated.div, {
    style: j,
    children: (0, a.jsxs)("div", {
      ref: m,
      className: k.hints,
      children: [(0, a.jsxs)("div", {
        className: k.hintsContainer,
        children: [(0, a.jsx)(y, {
          size: "xs",
          color: S
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: o ? "text-muted" : "always-white",
          children: g.at(0)
        })]
      }), 0 === f && (0, a.jsx)(d.Avr, {
        text: I.intl.string(I.t["yKJi+/"]),
        onClick: () => (0, _.y)({
          quest: n,
          errorHints: i,
          sourceQuestContent: c
        }),
        variant: "always-white",
        textVariant: "text-sm/semibold"
      })]
    })
  })
}

function A(e) {
  var t, n, i, s, u;
  let {
    quest: _,
    isHovering: P,
    errorHints: A,
    warningHints: D,
    isVisibleInViewport: Z,
    onCtxMenuClose: L,
    onCtxMenuOpen: M,
    onCtxMenuSelect: U,
    sourceQuestContent: B
  } = e, F = (0, j.PB)(_), G = (0, m.ZP)(), V = ((0, c.wj)(G) ? w.BRd.DARK : w.BRd.LIGHT) === w.BRd.DARK, H = (0, b.tP)(_), W = (null == (t = _.userStatus) ? true : t.claimedAt) != null, z = (0, b.B6)(_.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), K = (null == (n = _.userStatus) ? true : n.enrolledAt) != null, q = (null == (i = _.userStatus) ? true : i.completedAt) != null, {
    onAssetLoadComplete: Q
  } = r.useContext(O.k), Y = V ? "text-muted" : "always-white", X = r.useCallback(async () => {
    F && ((0, v.zi)(_) || K ? (0, E.openVideoQuestModal)({
      quest: _,
      questContent: f.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: B,
      sourceQuestContentCTA: x.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    }) : (0, g.R)(N.dr.QUEST_HOME_DESKTOP) ? await (0, E.enrollAndStartVideoQuestWithErrorHandling)(_, {
      questContent: f.jn.QUEST_HOME_DESKTOP,
      questContentCTA: x.jZ.ACCEPT_QUEST,
      sourceQuestContent: B,
      sourceQuestContentCTA: x.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    }) : ((0, h.AH)(_.id, {
      questContent: f.jn.QUEST_HOME_DESKTOP,
      questContentCTA: x.jZ.ACCEPT_QUEST,
      sourceQuestContent: B
    }), (0, E.openVideoQuestModal)({
      quest: _,
      questContent: f.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: B,
      sourceQuestContentCTA: x.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    })))
  }, [F, _, K, B]);
  return (0, a.jsxs)("div", {
    className: k.container,
    children: [(0, a.jsx)("div", {
      className: k.heroAssetWrapper,
      children: (0, a.jsx)(y.Z, {
        quest: _,
        isInteracting: P,
        hideAssets: !Z,
        imageSize: {
          width: 1320,
          height: 370
        },
        containerClassName: k.heroAssetCont
      })
    }), (0, a.jsx)("div", {
      className: l()(k.overlay, {
        [k.lightThemeGradient]: G === w.BRd.LIGHT,
        [k.darkThemeGradient]: G === w.BRd.DARK,
        [k.darkerThemeGradient]: G === w.BRd.DARKER,
        [k.midnightThemeGradient]: G === w.BRd.MIDNIGHT
      })
    }), (0, a.jsxs)("div", {
      className: k.positionContentOverBackground,
      children: [(0, a.jsxs)("div", {
        className: k.contents,
        children: [(0, a.jsxs)("div", {
          className: k.topRow,
          children: [_.preview && (0, a.jsx)("div", {
            className: k.pill,
            children: (0, a.jsx)(d.Text, {
              variant: "eyebrow",
              color: "always-white",
              className: k.eyebrowText,
              children: I.intl.string(I.t.SKNnqq)
            })
          }), F && (0, a.jsx)(o.u, {
            text: q ? I.intl.string(I.t.YsCuyF) : K ? I.intl.string(I.t["74KqrR"]) : (0, v.zi)(_) ? I.intl.string(I.t.I6JG46) : I.intl.string(I.t.umdNin),
            asContainer: true,
            tag: "span",
            children: (0, a.jsx)(d.P3F, {
              className: k.utilButtonWrapper,
              "aria-label": I.intl.string(I.t.RscU7I),
              onClick: X,
              children: (0, a.jsx)(d.o1U, {
                color: "currentColor",
                className: k.utilButtonIcon
              })
            })
          }), (0, a.jsx)(C.i, {
            onOpen: M,
            onClose: L,
            onSelect: U,
            questContent: f.jn.QUEST_HOME_DESKTOP,
            quest: _,
            hideLearnMore: true,
            shouldShowDisclosure: true,
            showShareLink: true,
            sourceQuestContent: B,
            children: e => {
              var t, n;
              return (0, a.jsx)(d.P3F, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    a = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), a.forEach(function(t) {
                    var a;
                    a = n[t], t in e ? Object.defineProperty(e, t, {
                      value: a,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = a
                  })
                }
                return e
              }({}, e), n = n = {
                className: k.utilButtonWrapper,
                "aria-label": I.intl.string(I.t.DEoVWZ),
                children: (0, a.jsx)(d.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: k.utilButtonIcon
                })
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, a)
                }
                return n
              })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              }), t))
            }
          })]
        }), (0, a.jsx)(T.E, {
          showPlaceholder: !Z,
          width: 100,
          height: 30,
          className: k.partnerBranding,
          children: (0, a.jsx)(S.ZP, {
            className: k.partnerBranding,
            logotypeClassName: k.partnerLogotypes,
            quest: _,
            separatorSpacing: S.US.MEDIUM,
            withGameTile: false,
            onLoadComplete: Q
          })
        }), (0, a.jsxs)("div", {
          className: k.bottomRow,
          children: [(0, a.jsxs)("span", {
            className: k.promotedByRow,
            children: [(0, a.jsx)(d.Text, {
              variant: "text-sm/medium",
              color: Y,
              children: I.intl.string(I.t.VAbKhK)
            }), (0, a.jsx)(p.Z, {
              className: k.verifiedIcon,
              size: 16,
              color: d.TVs.unsafe_rawColors.GREEN_360.css,
              allowFullSizedIcon: true,
              children: (0, a.jsx)(d.kSu, {
                color: d.TVs.unsafe_rawColors.WHITE_500.css,
                size: "custom",
                width: 13,
                height: 13
              })
            }), (0, a.jsx)(d.Text, {
              variant: "text-sm/medium",
              color: "always-white",
              children: null != (u = null == (s = _.config.cosponsorMetadata) ? true : s.name) ? u : _.config.messages.gamePublisher
            })]
          }), H || W ? null : (0, a.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: Y,
            children: I.intl.format(I.t["7D8r4F"], {
              expiryDate: z
            })
          })]
        })]
      }), (0, a.jsx)(R, {
        quest: _,
        errorHints: A,
        warningHints: D,
        isDarkTheme: V,
        sourceQuestContent: B
      })]
    })]
  })
}