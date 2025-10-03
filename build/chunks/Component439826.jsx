/** Chunk was on 17013 **/
/** chunk id: 439826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./784620.js"), require("./973216.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk137317 = require("./137317.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk410030 = require("./410030.js"),
  Chunk44315 = require("./44315.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk272008 = require("./272008.js"),
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

function A(e, t) {
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

function B(e) {
  var t;
  let {
    quest: n,
    errorHints: o,
    warningHints: a,
    isDarkTheme: l,
    sourceQuestContent: u
  } = e, {
    ref: m,
    height: g = 0
  } = (0, d.ZP)([o]), f = (null == (t = n.userStatus) ? true : t.completedAt) != null, x = (0, h.z)(n), {
    type: _,
    hints: j
  } = s.useMemo(() => f || x ? {
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
  }, [o, f, x, a]), v = 2 !== _, C = (0, c.q_F)({
    opacity: +!!v,
    height: v ? g : 0,
    config: T.Y
  }), y = 0 === _ ? c.Mgn : c.d3s, E = (0, p.Lq)(w.Ilk.RED_345), O = 0 === _ ? E : l ? c.TVs.colors.TEXT_DEFAULT : c.TVs.colors.WHITE;
  return (0, r.jsx)(i.animated.div, {
    style: C,
    children: (0, r.jsxs)("div", {
      ref: m,
      className: N.hints,
      children: [(0, r.jsxs)("div", {
        className: N.hintsContainer,
        children: [(0, r.jsx)(y, {
          size: "xs",
          color: O
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: l ? "text-muted" : "always-white",
          children: j.at(0)
        })]
      }), 0 === _ && (0, r.jsx)(c.Avr, {
        text: P.intl.string(P.t["yKJi+/"]),
        onClick: () => (0, b.y)({
          quest: n,
          errorHints: o,
          sourceQuestContent: u
        }),
        variant: "always-white",
        textVariant: "text-sm/semibold"
      })]
    })
  })
}

function k(e) {
  var t, n, o, i, d;
  let {
    quest: p,
    isHovering: b,
    errorHints: T,
    warningHints: k,
    isVisibleInViewport: I,
    onCtxMenuClose: q,
    onCtxMenuOpen: D,
    onCtxMenuSelect: L,
    sourceQuestContent: V
  } = e, Q = (0, g.PB)(p), M = (0, u.ZP)(), W = ((0, l.wj)(M) ? w.BRd.DARK : w.BRd.LIGHT) === w.BRd.DARK, Z = (0, h.tP)(p), U = (null == (t = p.userStatus) ? true : t.claimedAt) != null, H = (0, h.B6)(p.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), F = (null == (n = p.userStatus) ? true : n.enrolledAt) != null, X = (null == (o = p.userStatus) ? true : o.completedAt) != null, {
    onAssetLoadComplete: z
  } = s.useContext(E.k), G = s.useCallback(async () => {
    Q && ((0, g.zi)(p) || F ? (0, C.openVideoQuestModal)({
      quest: p,
      questContent: x.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: V,
      sourceQuestContentCTA: m.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    }) : (0, _.R)(S.dr.QUEST_HOME_DESKTOP) ? await (0, C.enrollAndStartVideoQuestWithErrorHandling)(p, {
      questContent: x.jn.QUEST_HOME_DESKTOP,
      questContentCTA: m.jZ.ACCEPT_QUEST,
      sourceQuestContent: V,
      sourceQuestContentCTA: m.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    }) : ((0, f.AH)(p.id, {
      questContent: x.jn.QUEST_HOME_DESKTOP,
      questContentCTA: m.jZ.ACCEPT_QUEST,
      sourceQuestContent: V
    }), (0, C.openVideoQuestModal)({
      quest: p,
      questContent: x.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: V,
      sourceQuestContentCTA: m.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    })))
  }, [Q, p, F, V]);
  return (0, r.jsxs)("div", {
    className: N.container,
    children: [(0, r.jsx)("div", {
      className: N.heroAssetWrapper,
      children: (0, r.jsx)(j.Z, {
        quest: p,
        isInteracting: b,
        hideAssets: !I,
        imageSize: {
          width: 1320,
          height: 370
        },
        containerClassName: N.heroAssetCont
      })
    }), (0, r.jsx)("div", {
      className: a()(N.overlay, {
        [N.darkThemeGradient]: W,
        [N.lightThemeGradient]: !W
      })
    }), (0, r.jsxs)("div", {
      className: N.positionContentOverBackground,
      children: [(0, r.jsxs)("div", {
        className: N.contents,
        children: [(0, r.jsxs)("div", {
          className: N.topRow,
          children: [p.preview && (0, r.jsx)("div", {
            className: N.pill,
            children: (0, r.jsx)(c.Text, {
              variant: "eyebrow",
              color: "always-white",
              className: N.eyebrowText,
              children: P.intl.string(P.t.SKNnqq)
            })
          }), Q && (0, r.jsx)(c.ua7, {
            text: X ? P.intl.string(P.t.YsCuyM) : F ? P.intl.string(P.t["74Kqra"]) : (0, g.zi)(p) ? P.intl.string(P.t["I6JG4+"]) : P.intl.string(P.t.umdNio),
            children: e => (0, r.jsx)(c.P3F, A(R({}, e), {
              className: N.utilButtonWrapper,
              "aria-label": P.intl.string(P.t.RscU7O),
              onClick: G,
              children: (0, r.jsx)(c.o1U, {
                color: "currentColor",
                className: N.utilButtonIcon
              })
            }))
          }), (0, r.jsx)(y.r, {
            onOpen: D,
            onClose: q,
            onSelect: L,
            questContent: x.jn.QUEST_HOME_DESKTOP,
            quest: p,
            hideLearnMore: true,
            shouldShowDisclosure: true,
            showShareLink: true,
            sourceQuestContent: V,
            children: e => (0, r.jsx)(c.P3F, A(R({}, e), {
              className: N.utilButtonWrapper,
              "aria-label": P.intl.string(P.t.DEoVWV),
              children: (0, r.jsx)(c.xhG, {
                size: "md",
                color: "currentColor",
                className: N.utilButtonIcon
              })
            }))
          })]
        }), (0, r.jsx)(O.E, {
          showPlaceholder: !I,
          width: 100,
          height: 30,
          className: N.partnerBranding,
          children: (0, r.jsx)(v.ZP, {
            className: N.partnerBranding,
            logotypeClassName: N.partnerLogotypes,
            quest: p,
            separatorSpacing: v.US.MEDIUM,
            withGameTile: false,
            onLoadComplete: z
          })
        }), (0, r.jsxs)("div", {
          className: N.bottomRow,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: W ? "text-muted" : "always-white",
            children: P.intl.format(P.t.buEvBw, {
              brandName: null != (d = null == (i = p.config.cosponsorMetadata) ? true : i.name) ? d : p.config.messages.gamePublisher
            })
          }), Z || U ? null : (0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: W ? "text-muted" : "always-white",
            children: P.intl.format(P.t["7D8r4O"], {
              expiryDate: H
            })
          })]
        })]
      }), (0, r.jsx)(B, {
        quest: p,
        errorHints: T,
        warningHints: k,
        isDarkTheme: W,
        sourceQuestContent: V
      })]
    })]
  })
}