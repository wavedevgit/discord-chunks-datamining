/** Chunk was on 83615 **/
/** chunk id: 439826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./784620.js"), require("./973216.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk666917 = require("./666917.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk410030 = require("./410030.js"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk313481 = require("./313481.js"),
  Chunk49436 = require("./49436.js"),
  Chunk509212 = require("./509212.js"),
  Chunk111131 = require("./111131.js"),
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
    errorHints: o,
    warningHints: a,
    isDarkTheme: l,
    sourceQuestContent: c
  } = e, {
    ref: p,
    height: m = 0
  } = (0, u.ZP)([o]), g = (null == (t = n.userStatus) ? true : t.completedAt) != null, h = (0, f.z)(n), {
    type: x,
    hints: _
  } = s.useMemo(() => g || h ? {
    type: 2,
    hints: []
  } : o.length > 0 ? {
    type: 0,
    hints: o.map(e => e.message)
  } : a.length > 0 ? {
    type: 1,
    hints: a
  } : {
    type: 2,
    hints: []
  }, [o, g, h, a]), j = 2 !== x, v = (0, d.q_F)({
    opacity: +!!j,
    height: j ? m : 0,
    config: T.Y
  }), C = 0 === x ? d.Mgn : d.d3s, y = d.TVs.unsafe_rawColors.RED_345.css, E = 0 === x ? y : l ? d.TVs.colors.TEXT_DEFAULT : d.TVs.colors.WHITE;
  return (0, r.jsx)(i.animated.div, {
    style: v,
    children: (0, r.jsxs)("div", {
      ref: p,
      className: N.hints,
      children: [(0, r.jsxs)("div", {
        className: N.hintsContainer,
        children: [(0, r.jsx)(C, {
          size: "xs",
          color: E
        }), (0, r.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: l ? "text-muted" : "always-white",
          children: _.at(0)
        })]
      }), 0 === x && (0, r.jsx)(d.Avr, {
        text: P.intl.string(P.t["yKJi+/"]),
        onClick: () => (0, b.y)({
          quest: n,
          errorHints: o,
          sourceQuestContent: c
        }),
        variant: "always-white",
        textVariant: "text-sm/semibold"
      })]
    })
  })
}

function A(e) {
  var t, n, o, i, u;
  let {
    quest: b,
    isHovering: T,
    errorHints: A,
    warningHints: B,
    isVisibleInViewport: k,
    onCtxMenuClose: I,
    onCtxMenuOpen: D,
    onCtxMenuSelect: q,
    sourceQuestContent: L
  } = e, Q = (0, x.PB)(b), V = (0, p.ZP)(), M = ((0, c.wj)(V) ? w.BRd.DARK : w.BRd.LIGHT) === w.BRd.DARK, Z = (0, f.tP)(b), W = (null == (t = b.userStatus) ? true : t.claimedAt) != null, H = (0, f.B6)(b.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), U = (null == (n = b.userStatus) ? true : n.enrolledAt) != null, F = (null == (o = b.userStatus) ? true : o.completedAt) != null, {
    onAssetLoadComplete: z
  } = s.useContext(E.k), G = s.useCallback(async () => {
    Q && ((0, x.zi)(b) || U ? (0, y.openVideoQuestModal)({
      quest: b,
      questContent: h.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: L,
      sourceQuestContentCTA: g.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    }) : (0, _.R)(S.dr.QUEST_HOME_DESKTOP) ? await (0, y.enrollAndStartVideoQuestWithErrorHandling)(b, {
      questContent: h.jn.QUEST_HOME_DESKTOP,
      questContentCTA: g.jZ.ACCEPT_QUEST,
      sourceQuestContent: L,
      sourceQuestContentCTA: g.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    }) : ((0, m.AH)(b.id, {
      questContent: h.jn.QUEST_HOME_DESKTOP,
      questContentCTA: g.jZ.ACCEPT_QUEST,
      sourceQuestContent: L
    }), (0, y.openVideoQuestModal)({
      quest: b,
      questContent: h.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: L,
      sourceQuestContentCTA: g.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    })))
  }, [Q, b, U, L]);
  return (0, r.jsxs)("div", {
    className: N.container,
    children: [(0, r.jsx)("div", {
      className: N.heroAssetWrapper,
      children: (0, r.jsx)(j.Z, {
        quest: b,
        isInteracting: T,
        hideAssets: !k,
        imageSize: {
          width: 1320,
          height: 370
        },
        containerClassName: N.heroAssetCont
      })
    }), (0, r.jsx)("div", {
      className: a()(N.overlay, {
        [N.lightThemeGradient]: V === w.BRd.LIGHT,
        [N.darkThemeGradient]: V === w.BRd.DARK,
        [N.darkerThemeGradient]: V === w.BRd.DARKER,
        [N.midnightThemeGradient]: V === w.BRd.MIDNIGHT
      })
    }), (0, r.jsxs)("div", {
      className: N.positionContentOverBackground,
      children: [(0, r.jsxs)("div", {
        className: N.contents,
        children: [(0, r.jsxs)("div", {
          className: N.topRow,
          children: [b.preview && (0, r.jsx)("div", {
            className: N.pill,
            children: (0, r.jsx)(d.Text, {
              variant: "eyebrow",
              color: "always-white",
              className: N.eyebrowText,
              children: P.intl.string(P.t.SKNnqq)
            })
          }), Q && (0, r.jsx)(l.u, {
            text: F ? P.intl.string(P.t.YsCuyF) : U ? P.intl.string(P.t["74KqrR"]) : (0, x.zi)(b) ? P.intl.string(P.t.I6JG46) : P.intl.string(P.t.umdNin),
            asContainer: true,
            tag: "span",
            children: (0, r.jsx)(d.P3F, {
              className: N.utilButtonWrapper,
              "aria-label": P.intl.string(P.t.RscU7I),
              onClick: G,
              children: (0, r.jsx)(d.o1U, {
                color: "currentColor",
                className: N.utilButtonIcon
              })
            })
          }), (0, r.jsx)(v.i, {
            onOpen: D,
            onClose: I,
            onSelect: q,
            questContent: h.jn.QUEST_HOME_DESKTOP,
            quest: b,
            hideLearnMore: true,
            shouldShowDisclosure: true,
            showShareLink: true,
            sourceQuestContent: L,
            children: e => {
              var t, n;
              return (0, r.jsx)(d.P3F, (t = function(e) {
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
              }({}, e), n = n = {
                className: N.utilButtonWrapper,
                "aria-label": P.intl.string(P.t.DEoVWZ),
                children: (0, r.jsx)(d.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: N.utilButtonIcon
                })
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              }), t))
            }
          })]
        }), (0, r.jsx)(O.E, {
          showPlaceholder: !k,
          width: 100,
          height: 30,
          className: N.partnerBranding,
          children: (0, r.jsx)(C.ZP, {
            className: N.partnerBranding,
            logotypeClassName: N.partnerLogotypes,
            quest: b,
            separatorSpacing: C.US.MEDIUM,
            withGameTile: false,
            onLoadComplete: z
          })
        }), (0, r.jsxs)("div", {
          className: N.bottomRow,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: M ? "text-muted" : "always-white",
            children: P.intl.format(P.t.buEvBw, {
              brandName: null != (u = null == (i = b.config.cosponsorMetadata) ? true : i.name) ? u : b.config.messages.gamePublisher
            })
          }), Z || W ? null : (0, r.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: M ? "text-muted" : "always-white",
            children: P.intl.format(P.t["7D8r4F"], {
              expiryDate: H
            })
          })]
        })]
      }), (0, r.jsx)(R, {
        quest: b,
        errorHints: A,
        warningHints: B,
        isDarkTheme: M,
        sourceQuestContent: L
      })]
    })]
  })
}