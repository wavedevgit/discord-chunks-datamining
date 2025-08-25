/** Chunk was on web.js **/
/** chunk id: 439826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./784620.js"), require("./973216.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk202841 = require("./202841.js"),
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
  Chunk974390 = require("./974390.js"),
  Chunk111131 = require("./111131.js"),
  Chunk475595 = require("./475595.js"),
  Chunk18578 = require("./18578.jsx"),
  Chunk623249 = require("./623249.jsx"),
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

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function k(e) {
  var t;
  let {
    quest: n,
    errorHints: o,
    warningHints: a,
    isDarkTheme: l,
    sourceQuestContent: d
  } = e, {
    ref: _,
    height: p = 0
  } = (0, u.ZP)([o]), h = (null == (t = n.userStatus) ? true : t.completedAt) != null, g = (0, m.z)(n), {
    type: E,
    hints: b
  } = i.useMemo(() => h || g ? {
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
  }, [o, h, g, a]), y = 2 !== E, O = (0, c.q_F)({
    opacity: +!!y,
    height: y ? p : 0,
    config: R.Y
  }), I = 0 === E ? c.Mgn : c.d3s, T = (0, f.Lq)(P.Ilk.RED_345), S = 0 === E ? T : l ? c.TVs.colors.TEXT_DEFAULT : c.TVs.colors.WHITE;
  return (0, r.jsx)(s.animated.div, {
    style: O,
    children: (0, r.jsxs)("div", {
      ref: _,
      className: D.hints,
      children: [(0, r.jsxs)("div", {
        className: D.hintsContainer,
        children: [(0, r.jsx)(I, {
          size: "xs",
          color: S
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: l ? "text-muted" : "always-white",
          children: b.at(0)
        })]
      }), 0 === E && (0, r.jsx)(c.Avr, {
        text: w.intl.string(w.t["yKJi+/"]),
        onClick: () => (0, v.y)({
          quest: n,
          errorHints: o,
          sourceQuestContent: d
        }),
        variant: "always-white",
        textVariant: "text-sm/semibold"
      })]
    })
  })
}

function U(e) {
  let {
    quest: t,
    isHovering: n,
    showAssets: o
  } = e, a = i.useMemo(() => (0, y.fh)(t, y.eC.HERO_IMAGE), [t]), s = i.useMemo(() => (0, y.fh)(t, y.eC.HERO_VIDEO), [t]), l = (0, E.h)(t, N.dr.QUEST_HOME_DESKTOP), {
    onAssetLoadComplete: c
  } = i.useContext(A.k), u = !l && n;
  return (0, r.jsx)("div", {
    className: D.heroAssetCont,
    children: o && (0, r.jsx)(O.K, {
      imageAsset: null != a ? {
        asset: a,
        assetId: "QuestTileBanner",
        alt: w.intl.string(w.t.jnijW1),
        className: D.heroAsset
      } : true,
      videoAsset: null != s ? {
        asset: s,
        assetId: "QuestTileBanner_heroAnimated",
        className: D.heroAssetVideo
      } : true,
      videoActive: u,
      imageDimensions: {
        width: 1320,
        height: 370
      },
      onLoadComplete: c
    })
  })
}

function G(e) {
  var t, n, o, s, u;
  let {
    quest: f,
    isHovering: E,
    errorHints: y,
    warningHints: O,
    isVisibleInViewport: v,
    onCtxMenuClose: R,
    onCtxMenuOpen: x,
    onCtxMenuSelect: j,
    sourceQuestContent: G
  } = e, B = (0, p.PB)(f), Z = (0, d.ZP)(), F = ((0, l.wj)(Z) ? P.BRd.DARK : P.BRd.LIGHT) === P.BRd.DARK, V = (0, m.tP)(f), H = (null == (t = f.userStatus) ? true : t.claimedAt) != null, Y = (0, m.B6)(f.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), W = (null == (n = f.userStatus) ? true : n.enrolledAt) != null, K = (null == (o = f.userStatus) ? true : o.completedAt) != null, {
    onAssetLoadComplete: z
  } = i.useContext(A.k), q = i.useCallback(async () => {
    B && ((0, p.zi)(f) || W ? (0, T.openVideoQuestModal)({
      quest: f,
      questContent: g.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: G,
      sourceQuestContentCTA: _.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    }) : (0, b.R)(N.dr.QUEST_HOME_DESKTOP) ? await (0, T.enrollAndStartVideoQuestWithErrorHandling)(f, {
      questContent: g.jn.QUEST_HOME_DESKTOP,
      questContentCTA: _.jZ.ACCEPT_QUEST,
      sourceQuestContent: G,
      sourceQuestContentCTA: _.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    }) : ((0, h.AH)(f.id, {
      questContent: g.jn.QUEST_HOME_DESKTOP,
      questContentCTA: _.jZ.ACCEPT_QUEST,
      sourceQuestContent: G
    }), (0, T.openVideoQuestModal)({
      quest: f,
      questContent: g.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: G,
      sourceQuestContentCTA: _.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    })))
  }, [B, f, W, G]);
  return (0, r.jsxs)("div", {
    className: D.container,
    children: [(0, r.jsx)("div", {
      className: D.heroAssetWrapper,
      children: (0, r.jsx)(U, {
        quest: f,
        isHovering: E,
        showAssets: v
      })
    }), (0, r.jsx)("div", {
      className: a()(D.overlay, {
        [D.darkThemeGradient]: F,
        [D.lightThemeGradient]: !F
      })
    }), (0, r.jsxs)("div", {
      className: D.positionContentOverBackground,
      children: [(0, r.jsxs)("div", {
        className: D.contents,
        children: [(0, r.jsxs)("div", {
          className: D.topRow,
          children: [f.preview && (0, r.jsx)("div", {
            className: D.pill,
            children: (0, r.jsx)(c.Text, {
              variant: "eyebrow",
              color: "always-white",
              className: D.eyebrowText,
              children: w.intl.string(w.t.SKNnqq)
            })
          }), B && (0, r.jsx)(c.ua7, {
            text: K ? w.intl.string(w.t.YsCuyM) : W ? w.intl.string(w.t["74Kqra"]) : (0, p.zi)(f) ? w.intl.string(w.t["I6JG4+"]) : w.intl.string(w.t.umdNio),
            children: e => (0, r.jsx)(c.P3F, M(L({}, e), {
              className: D.utilButtonWrapper,
              "aria-label": w.intl.string(w.t.RscU7O),
              onClick: q,
              children: (0, r.jsx)(c.o1U, {
                color: "currentColor",
                className: D.utilButtonIcon
              })
            }))
          }), (0, r.jsx)(S.r, {
            onOpen: x,
            onClose: R,
            onSelect: j,
            questContent: g.jn.QUEST_HOME_DESKTOP,
            quest: f,
            hideLearnMore: true,
            shouldShowDisclosure: true,
            showShareLink: true,
            sourceQuestContent: G,
            children: e => (0, r.jsx)(c.P3F, M(L({}, e), {
              className: D.utilButtonWrapper,
              "aria-label": w.intl.string(w.t.DEoVWV),
              children: (0, r.jsx)(c.xhG, {
                size: "md",
                color: "currentColor",
                className: D.utilButtonIcon
              })
            }))
          })]
        }), (0, r.jsx)(C.E, {
          showPlaceholder: !v,
          width: 100,
          height: 30,
          className: D.partnerBranding,
          children: (0, r.jsx)(I.ZP, {
            className: D.partnerBranding,
            logotypeClassName: D.partnerLogotypes,
            quest: f,
            separatorSpacing: I.US.MEDIUM,
            withGameTile: false,
            onLoadComplete: z
          })
        }), (0, r.jsxs)("div", {
          className: D.bottomRow,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: F ? "text-muted" : "always-white",
            children: w.intl.format(w.t.buEvBw, {
              brandName: null != (u = null == (s = f.config.cosponsorMetadata) ? true : s.name) ? u : f.config.messages.gamePublisher
            })
          }), V || H ? null : (0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: F ? "text-muted" : "always-white",
            children: w.intl.format(w.t["7D8r4O"], {
              expiryDate: Y
            })
          })]
        })]
      }), (0, r.jsx)(k, {
        quest: f,
        errorHints: y,
        warningHints: O,
        isDarkTheme: F,
        sourceQuestContent: G
      })]
    })]
  })
}