/** Chunk was on 50433 **/
/** chunk id: 439826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => B
}), require("./784620.js"), require("./973216.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442748 = require("./442748.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk410030 = require("./410030.js"),
  Chunk44315 = require("./44315.js"),
  Chunk22095 = require("./22095.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk111131 = require("./111131.js"),
  Chunk623249 = require("./623249.jsx"),
  Chunk477005 = require("./477005.jsx"),
  Chunk685613 = require("./685613.jsx"),
  Chunk110560 = require("./110560.jsx"),
  Chunk670638 = require("./670638.jsx"),
  Chunk251360 = require("./251360.js"),
  Chunk19148 = require("./19148.jsx"),
  Chunk46140 = require("./46140.js"),
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
    height: g = 0
  } = (0, u.ZP)([o]), f = (null == (t = n.userStatus) ? true : t.completedAt) != null, h = (0, x.z)(n), {
    type: b,
    hints: _
  } = s.useMemo(() => f || h ? {
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
  }, [o, f, h, a]), v = 2 !== b, C = (0, d.q_F)({
    opacity: +!!v,
    height: v ? g : 0,
    config: w.Y
  }), y = 0 === b ? d.Mgn : d.d3s, E = (0, m.Lq)(P.Ilk.RED_345), O = 0 === b ? E : l ? d.TVs.colors.TEXT_DEFAULT : d.TVs.colors.WHITE;
  return (0, r.jsx)(i.animated.div, {
    style: C,
    children: (0, r.jsxs)("div", {
      ref: p,
      className: A.hints,
      children: [(0, r.jsxs)("div", {
        className: A.hintsContainer,
        children: [(0, r.jsx)(y, {
          size: "xs",
          color: O
        }), (0, r.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: l ? "text-muted" : "always-white",
          children: _.at(0)
        })]
      }), 0 === b && (0, r.jsx)(d.Avr, {
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
    quest: m,
    isHovering: j,
    errorHints: w,
    warningHints: B,
    isVisibleInViewport: k,
    onCtxMenuClose: I,
    onCtxMenuOpen: D,
    onCtxMenuSelect: q,
    sourceQuestContent: L
  } = e, Q = (0, h.PB)(m), V = (0, p.ZP)(), M = ((0, c.wj)(V) ? P.BRd.DARK : P.BRd.LIGHT) === P.BRd.DARK, Z = (0, x.tP)(m), W = (null == (t = m.userStatus) ? true : t.claimedAt) != null, U = (0, x.B6)(m.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), H = (null == (n = m.userStatus) ? true : n.enrolledAt) != null, F = (null == (o = m.userStatus) ? true : o.completedAt) != null, {
    onAssetLoadComplete: z
  } = s.useContext(O.k), G = s.useCallback(async () => {
    Q && ((0, h.zi)(m) || H ? (0, y.openVideoQuestModal)({
      quest: m,
      questContent: b.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: L,
      sourceQuestContentCTA: f.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    }) : (0, _.R)(T.dr.QUEST_HOME_DESKTOP) ? await (0, y.enrollAndStartVideoQuestWithErrorHandling)(m, {
      questContent: b.jn.QUEST_HOME_DESKTOP,
      questContentCTA: f.jZ.ACCEPT_QUEST,
      sourceQuestContent: L,
      sourceQuestContentCTA: f.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    }) : ((0, g.AH)(m.id, {
      questContent: b.jn.QUEST_HOME_DESKTOP,
      questContentCTA: f.jZ.ACCEPT_QUEST,
      sourceQuestContent: L
    }), (0, y.openVideoQuestModal)({
      quest: m,
      questContent: b.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: L,
      sourceQuestContentCTA: f.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    })))
  }, [Q, m, H, L]);
  return (0, r.jsxs)("div", {
    className: A.container,
    children: [(0, r.jsx)("div", {
      className: A.heroAssetWrapper,
      children: (0, r.jsx)(v.Z, {
        quest: m,
        isInteracting: j,
        hideAssets: !k,
        imageSize: {
          width: 1320,
          height: 370
        },
        containerClassName: A.heroAssetCont
      })
    }), (0, r.jsx)("div", {
      className: a()(A.overlay, {
        [A.darkThemeGradient]: M,
        [A.lightThemeGradient]: !M
      })
    }), (0, r.jsxs)("div", {
      className: A.positionContentOverBackground,
      children: [(0, r.jsxs)("div", {
        className: A.contents,
        children: [(0, r.jsxs)("div", {
          className: A.topRow,
          children: [m.preview && (0, r.jsx)("div", {
            className: A.pill,
            children: (0, r.jsx)(d.Text, {
              variant: "eyebrow",
              color: "always-white",
              className: A.eyebrowText,
              children: N.intl.string(N.t.SKNnqq)
            })
          }), Q && (0, r.jsx)(l.u, {
            text: F ? N.intl.string(N.t.YsCuyF) : H ? N.intl.string(N.t["74KqrR"]) : (0, h.zi)(m) ? N.intl.string(N.t.I6JG46) : N.intl.string(N.t.umdNin),
            asContainer: true,
            tag: "span",
            children: (0, r.jsx)(d.P3F, {
              className: A.utilButtonWrapper,
              "aria-label": N.intl.string(N.t.RscU7I),
              onClick: G,
              children: (0, r.jsx)(d.o1U, {
                color: "currentColor",
                className: A.utilButtonIcon
              })
            })
          }), (0, r.jsx)(E.r, {
            onOpen: D,
            onClose: I,
            onSelect: q,
            questContent: b.jn.QUEST_HOME_DESKTOP,
            quest: m,
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
                className: A.utilButtonWrapper,
                "aria-label": N.intl.string(N.t.DEoVWZ),
                children: (0, r.jsx)(d.xhG, {
                  size: "md",
                  color: "currentColor",
                  className: A.utilButtonIcon
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
          showPlaceholder: !k,
          width: 100,
          height: 30,
          className: A.partnerBranding,
          children: (0, r.jsx)(C.ZP, {
            className: A.partnerBranding,
            logotypeClassName: A.partnerLogotypes,
            quest: m,
            separatorSpacing: C.US.MEDIUM,
            withGameTile: false,
            onLoadComplete: z
          })
        }), (0, r.jsxs)("div", {
          className: A.bottomRow,
          children: [(0, r.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: M ? "text-muted" : "always-white",
            children: N.intl.format(N.t.buEvBw, {
              brandName: null != (u = null == (i = m.config.cosponsorMetadata) ? true : i.name) ? u : m.config.messages.gamePublisher
            })
          }), Z || W ? null : (0, r.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: M ? "text-muted" : "always-white",
            children: N.intl.format(N.t["7D8r4F"], {
              expiryDate: U
            })
          })]
        })]
      }), (0, r.jsx)(R, {
        quest: m,
        errorHints: w,
        warningHints: B,
        isDarkTheme: M,
        sourceQuestContent: L
      })]
    })]
  })
}