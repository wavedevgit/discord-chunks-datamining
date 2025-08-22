/** Chunk was on web.js **/
/** chunk id: 439826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./784620.js"), require("./973216.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
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

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e) {
  var t;
  let {
    quest: n,
    errorHints: a,
    warningHints: o,
    isDarkTheme: l,
    sourceQuestContent: d
  } = e, {
    ref: _,
    height: p = 0
  } = (0, u.ZP)([a]), h = (null == (t = n.userStatus) ? true : t.completedAt) != null, g = (0, m.z)(n), {
    type: E,
    hints: b
  } = i.useMemo(() => h || g ? {
    type: 2,
    hints: []
  } : a.length > 0 ? {
    type: 0,
    hints: a.map(e => e.message)
  } : o.length > 0 ? {
    type: 1,
    hints: o
  } : {
    type: 2,
    hints: []
  }, [a, h, g, o]), y = 2 !== E, v = (0, c.q_F)({
    opacity: +!!y,
    height: y ? p : 0,
    config: N.Y
  }), I = 0 === E ? c.Mgn : c.d3s, T = (0, f.Lq)(R.Ilk.RED_345), S = 0 === E ? T : l ? c.TVs.colors.TEXT_DEFAULT : c.TVs.colors.WHITE;
  return (0, r.jsx)(s.animated.div, {
    style: v,
    children: (0, r.jsxs)("div", {
      ref: _,
      className: w.hints,
      children: [(0, r.jsxs)("div", {
        className: w.hintsContainer,
        children: [(0, r.jsx)(I, {
          size: "xs",
          color: S
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: l ? "text-muted" : "always-white",
          children: b.at(0)
        })]
      }), 0 === E && (0, r.jsx)(c.Avr, {
        text: P.intl.string(P.t["yKJi+/"]),
        onClick: () => (0, O.y)({
          quest: n,
          errorHints: a,
          sourceQuestContent: d
        }),
        variant: "always-white",
        textVariant: "text-sm/semibold"
      })]
    })
  })
}

function k(e) {
  let {
    quest: t,
    isHovering: n,
    showAssets: a
  } = e, o = i.useMemo(() => (0, b.fh)(t, b.eC.HERO_IMAGE), [t]), s = i.useMemo(() => (0, b.fh)(t, b.eC.HERO_VIDEO), [t]), l = (0, E.h)(t, C.dr.QUEST_HOME_DESKTOP), {
    onAssetLoadComplete: c
  } = i.useContext(S.k), u = !l && n;
  return (0, r.jsx)("div", {
    className: w.heroAssetCont,
    children: a && (0, r.jsx)(y.K, {
      imageAsset: null != o ? {
        asset: o,
        assetId: "QuestTileBanner",
        alt: P.intl.string(P.t.jnijW1),
        className: w.heroAsset
      } : true,
      videoAsset: null != s ? {
        asset: s,
        assetId: "QuestTileBanner_heroAnimated",
        className: w.heroAssetVideo
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

function U(e) {
  var t, n, a, s, u;
  let {
    quest: f,
    isHovering: E,
    errorHints: b,
    warningHints: y,
    isVisibleInViewport: O,
    onCtxMenuClose: C,
    onCtxMenuOpen: N,
    onCtxMenuSelect: D,
    sourceQuestContent: L
  } = e, U = (0, p.PB)(f), G = (0, d.ZP)(), B = ((0, l.wj)(G) ? R.BRd.DARK : R.BRd.LIGHT) === R.BRd.DARK, Z = (0, m.tP)(f), V = (null == (t = f.userStatus) ? true : t.claimedAt) != null, F = (0, m.B6)(f.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), H = (null == (n = f.userStatus) ? true : n.enrolledAt) != null, Y = (null == (a = f.userStatus) ? true : a.completedAt) != null, {
    onAssetLoadComplete: W
  } = i.useContext(S.k), K = i.useCallback(() => {
    U && ((0, p.zi)(f) || H || (0, h.AH)(f.id, {
      questContent: g.jn.QUEST_HOME_DESKTOP,
      questContentCTA: _.jZ.ACCEPT_QUEST,
      sourceQuestContent: L
    }), (0, I.openVideoQuestModal)({
      quest: f,
      questContent: g.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: L,
      sourceQuestContentCTA: _.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    }))
  }, [U, f, H, L]);
  return (0, r.jsxs)("div", {
    className: w.container,
    children: [(0, r.jsx)("div", {
      className: w.heroAssetWrapper,
      children: (0, r.jsx)(k, {
        quest: f,
        isHovering: E,
        showAssets: O
      })
    }), (0, r.jsx)("div", {
      className: o()(w.overlay, {
        [w.darkThemeGradient]: B,
        [w.lightThemeGradient]: !B
      })
    }), (0, r.jsxs)("div", {
      className: w.positionContentOverBackground,
      children: [(0, r.jsxs)("div", {
        className: w.contents,
        children: [(0, r.jsxs)("div", {
          className: w.topRow,
          children: [f.preview && (0, r.jsx)("div", {
            className: w.pill,
            children: (0, r.jsx)(c.Text, {
              variant: "eyebrow",
              color: "always-white",
              className: w.eyebrowText,
              children: P.intl.string(P.t.SKNnqq)
            })
          }), U && (0, r.jsx)(c.ua7, {
            text: Y ? P.intl.string(P.t.YsCuyM) : H ? P.intl.string(P.t["74Kqra"]) : (0, p.zi)(f) ? P.intl.string(P.t["I6JG4+"]) : P.intl.string(P.t.umdNio),
            children: e => (0, r.jsx)(c.P3F, j(x({}, e), {
              className: w.utilButtonWrapper,
              "aria-label": P.intl.string(P.t.RscU7O),
              onClick: K,
              children: (0, r.jsx)(c.o1U, {
                color: "currentColor",
                className: w.utilButtonIcon
              })
            }))
          }), (0, r.jsx)(T.r, {
            onOpen: N,
            onClose: C,
            onSelect: D,
            questContent: g.jn.QUEST_HOME_DESKTOP,
            quest: f,
            hideLearnMore: true,
            shouldShowDisclosure: true,
            showShareLink: true,
            sourceQuestContent: L,
            children: e => (0, r.jsx)(c.P3F, j(x({}, e), {
              className: w.utilButtonWrapper,
              "aria-label": P.intl.string(P.t.DEoVWV),
              children: (0, r.jsx)(c.xhG, {
                size: "md",
                color: "currentColor",
                className: w.utilButtonIcon
              })
            }))
          })]
        }), (0, r.jsx)(A.E, {
          showPlaceholder: !O,
          width: 100,
          height: 30,
          className: w.partnerBranding,
          children: (0, r.jsx)(v.ZP, {
            className: w.partnerBranding,
            logotypeClassName: w.partnerLogotypes,
            quest: f,
            separatorSpacing: v.US.MEDIUM,
            withGameTile: false,
            onLoadComplete: W
          })
        }), (0, r.jsxs)("div", {
          className: w.bottomRow,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: B ? "text-muted" : "always-white",
            children: P.intl.format(P.t.buEvBw, {
              brandName: null != (u = null == (s = f.config.cosponsorMetadata) ? true : s.name) ? u : f.config.messages.gamePublisher
            })
          }), Z || V ? null : (0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: B ? "text-muted" : "always-white",
            children: P.intl.format(P.t["7D8r4O"], {
              expiryDate: F
            })
          })]
        })]
      }), (0, r.jsx)(M, {
        quest: f,
        errorHints: b,
        warningHints: y,
        isDarkTheme: B,
        sourceQuestContent: L
      })]
    })]
  })
}