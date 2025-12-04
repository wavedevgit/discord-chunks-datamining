/** Chunk was on 83615 **/
/** chunk id: 439826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
}), require("./784620.js"), require("./973216.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk410030 = require("./410030.js"),
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

function A(e) {
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
  } = (0, u.ZP)([o]), g = (null == (t = n.userStatus) ? true : t.completedAt) != null, f = (0, x.z)(n), {
    type: h,
    hints: _
  } = s.useMemo(() => g || f ? {
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
  }, [o, g, f, a]), b = 2 !== h, v = (0, d.q_F)({
    opacity: +!!b,
    height: b ? m : 0,
    config: w.Y
  }), C = 0 === h ? d.Mgn : d.d3s, y = d.TVs.unsafe_rawColors.RED_345.css, E = 0 === h ? y : l ? d.TVs.colors.TEXT_DEFAULT : d.TVs.colors.WHITE;
  return (0, r.jsx)(i.animated.div, {
    style: v,
    children: (0, r.jsxs)("div", {
      ref: p,
      className: R.hints,
      children: [(0, r.jsxs)("div", {
        className: R.hintsContainer,
        children: [(0, r.jsx)(C, {
          size: "xs",
          color: E
        }), (0, r.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: l ? "text-muted" : "always-white",
          children: _.at(0)
        })]
      }), 0 === h && (0, r.jsx)(d.Avr, {
        text: N.intl.string(N.t["yKJi+/"]),
        onClick: () => (0, j.y)({
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

function B(e) {
  var t, n, o, i, u;
  let {
    quest: j,
    isHovering: w,
    errorHints: B,
    warningHints: k,
    isVisibleInViewport: I,
    onCtxMenuClose: D,
    onCtxMenuOpen: q,
    onCtxMenuSelect: L,
    sourceQuestContent: Q
  } = e, V = (0, b.PB)(j), M = (0, p.ZP)(), Z = ((0, c.wj)(M) ? P.BRd.DARK : P.BRd.LIGHT) === P.BRd.DARK, W = (0, x.tP)(j), H = (null == (t = j.userStatus) ? true : t.claimedAt) != null, U = (0, x.B6)(j.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), z = (null == (n = j.userStatus) ? true : n.enrolledAt) != null, F = (null == (o = j.userStatus) ? true : o.completedAt) != null, {
    onAssetLoadComplete: G
  } = s.useContext(O.k), K = s.useCallback(async () => {
    V && ((0, _.zi)(j) || z ? (0, E.openVideoQuestModal)({
      quest: j,
      questContent: f.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: Q,
      sourceQuestContentCTA: g.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    }) : (0, h.R)(T.dr.QUEST_HOME_DESKTOP) ? await (0, E.enrollAndStartVideoQuestWithErrorHandling)(j, {
      questContent: f.jn.QUEST_HOME_DESKTOP,
      questContentCTA: g.jZ.ACCEPT_QUEST,
      sourceQuestContent: Q,
      sourceQuestContentCTA: g.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    }) : ((0, m.AH)(j.id, {
      questContent: f.jn.QUEST_HOME_DESKTOP,
      questContentCTA: g.jZ.ACCEPT_QUEST,
      sourceQuestContent: Q
    }), (0, E.openVideoQuestModal)({
      quest: j,
      questContent: f.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: Q,
      sourceQuestContentCTA: g.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    })))
  }, [V, j, z, Q]);
  return (0, r.jsxs)("div", {
    className: R.container,
    children: [(0, r.jsx)("div", {
      className: R.heroAssetWrapper,
      children: (0, r.jsx)(v.Z, {
        quest: j,
        isInteracting: w,
        hideAssets: !I,
        imageSize: {
          width: 1320,
          height: 370
        },
        containerClassName: R.heroAssetCont
      })
    }), (0, r.jsx)("div", {
      className: a()(R.overlay, {
        [R.lightThemeGradient]: M === P.BRd.LIGHT,
        [R.darkThemeGradient]: M === P.BRd.DARK,
        [R.darkerThemeGradient]: M === P.BRd.DARKER,
        [R.midnightThemeGradient]: M === P.BRd.MIDNIGHT
      })
    }), (0, r.jsxs)("div", {
      className: R.positionContentOverBackground,
      children: [(0, r.jsxs)("div", {
        className: R.contents,
        children: [(0, r.jsxs)("div", {
          className: R.topRow,
          children: [j.preview && (0, r.jsx)("div", {
            className: R.pill,
            children: (0, r.jsx)(d.Text, {
              variant: "eyebrow",
              color: "always-white",
              className: R.eyebrowText,
              children: N.intl.string(N.t.SKNnqq)
            })
          }), V && (0, r.jsx)(l.u, {
            text: F ? N.intl.string(N.t.YsCuyF) : z ? N.intl.string(N.t["74KqrR"]) : (0, _.zi)(j) ? N.intl.string(N.t.I6JG46) : N.intl.string(N.t.umdNin),
            asContainer: true,
            tag: "span",
            children: (0, r.jsx)(d.P3F, {
              className: R.utilButtonWrapper,
              "aria-label": N.intl.string(N.t.RscU7I),
              onClick: K,
              children: (0, r.jsx)(d.o1U, {
                color: "currentColor",
                className: R.utilButtonIcon
              })
            })
          }), (0, r.jsx)(C.i, {
            onOpen: q,
            onClose: D,
            onSelect: L,
            questContent: f.jn.QUEST_HOME_DESKTOP,
            quest: j,
            hideLearnMore: true,
            shouldShowDisclosure: true,
            showShareLink: true,
            sourceQuestContent: Q,
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
                className: R.utilButtonWrapper,
                "aria-label": N.intl.string(N.t.DEoVWZ),
                children: (0, r.jsx)(d.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: R.utilButtonIcon
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
        }), (0, r.jsx)(S.E, {
          showPlaceholder: !I,
          width: 100,
          height: 30,
          className: R.partnerBranding,
          children: (0, r.jsx)(y.ZP, {
            className: R.partnerBranding,
            logotypeClassName: R.partnerLogotypes,
            quest: j,
            separatorSpacing: y.US.MEDIUM,
            withGameTile: false,
            onLoadComplete: G
          })
        }), (0, r.jsxs)("div", {
          className: R.bottomRow,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: Z ? "text-muted" : "always-white",
            children: N.intl.format(N.t.buEvBw, {
              brandName: null != (u = null == (i = j.config.cosponsorMetadata) ? true : i.name) ? u : j.config.messages.gamePublisher
            })
          }), W || H ? null : (0, r.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: Z ? "text-muted" : "always-white",
            children: N.intl.format(N.t["7D8r4F"], {
              expiryDate: U
            })
          })]
        })]
      }), (0, r.jsx)(A, {
        quest: j,
        errorHints: B,
        warningHints: k,
        isDarkTheme: Z,
        sourceQuestContent: Q
      })]
    })]
  })
}