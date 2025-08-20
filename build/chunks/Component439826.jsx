/** Chunk was on web.js **/
/** chunk id: 439826, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./784620.js"), require("./973216.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk803948 = require("./803948.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
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
    errorHints: a,
    warningHints: o,
    isDarkTheme: l,
    sourceQuestContent: f
  } = e, {
    ref: p,
    height: h = 0
  } = (0, d.ZP)([a]), m = (null == (t = n.userStatus) ? true : t.completedAt) != null, E = (0, g.z)(n), {
    type: b,
    hints: y
  } = i.useMemo(() => m || E ? {
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
  }, [a, m, E, o]), O = 2 !== b, I = (0, u.q_F)({
    opacity: +!!O,
    height: O ? h : 0,
    config: R.Y
  }), T = 0 === b ? u.Mgn : u.d3s, S = (0, _.Lq)(P.Ilk.RED_345), A = 0 === b ? S : l ? u.TVs.colors.TEXT_DEFAULT : u.TVs.colors.WHITE;
  return (0, r.jsx)(s.animated.div, {
    style: I,
    children: (0, r.jsxs)("div", {
      ref: p,
      className: D.hints,
      children: [(0, r.jsxs)("div", {
        className: D.hintsContainer,
        children: [(0, r.jsx)(T, {
          size: "xs",
          color: A
        }), (0, r.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: l ? "text-muted" : "always-white",
          children: y.at(0)
        })]
      }), 0 === b && (0, r.jsx)(c.zx, {
        onClick: () => (0, v.y)({
          questId: n.id,
          errorHints: a,
          sourceQuestContent: f
        }),
        size: c.Ph.MIN,
        look: c.iL.LINK,
        color: c.Tt.CUSTOM,
        style: {
          color: (0, _.Lq)(P.Ilk.BLUE_345)
        },
        children: "See Details"
      })]
    })
  })
}

function U(e) {
  let {
    quest: t,
    isHovering: n,
    showAssets: a
  } = e, o = i.useMemo(() => (0, y.fh)(t, y.eC.HERO_IMAGE), [t]), s = i.useMemo(() => (0, y.fh)(t, y.eC.HERO_VIDEO), [t]), l = (0, b.h)(t, N.dr.QUEST_HOME_DESKTOP), {
    onAssetLoadComplete: c
  } = i.useContext(A.k), u = !l && n;
  return (0, r.jsx)("div", {
    className: D.heroAssetCont,
    children: a && (0, r.jsx)(O.K, {
      imageAsset: null != o ? {
        asset: o,
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
  var t, n, a, s, c;
  let {
    quest: d,
    isHovering: _,
    errorHints: b,
    warningHints: y,
    isVisibleInViewport: O,
    onCtxMenuClose: v,
    onCtxMenuOpen: N,
    onCtxMenuSelect: R,
    sourceQuestContent: x
  } = e, j = (0, h.PB)(d), G = (0, f.ZP)(), B = ((0, l.wj)(G) ? P.BRd.DARK : P.BRd.LIGHT) === P.BRd.DARK, Z = (0, g.tP)(d), V = (null == (t = d.userStatus) ? true : t.claimedAt) != null, F = (0, g.B6)(d.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), H = (null == (n = d.userStatus) ? true : n.enrolledAt) != null, Y = (null == (a = d.userStatus) ? true : a.completedAt) != null, {
    onAssetLoadComplete: W
  } = i.useContext(A.k), K = i.useCallback(() => {
    j && ((0, h.zi)(d) || H || (0, m.AH)(d.id, {
      questContent: E.jn.QUEST_HOME_DESKTOP,
      questContentCTA: p.jZ.ACCEPT_QUEST,
      sourceQuestContent: x
    }), (0, T.openVideoQuestModal)({
      quest: d,
      questContent: E.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: x,
      sourceQuestContentCTA: p.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    }))
  }, [j, d, H, x]);
  return (0, r.jsxs)("div", {
    className: D.container,
    children: [(0, r.jsx)("div", {
      className: D.heroAssetWrapper,
      children: (0, r.jsx)(U, {
        quest: d,
        isHovering: _,
        showAssets: O
      })
    }), (0, r.jsx)("div", {
      className: o()(D.overlay, {
        [D.darkThemeGradient]: B,
        [D.lightThemeGradient]: !B
      })
    }), (0, r.jsxs)("div", {
      className: D.positionContentOverBackground,
      children: [(0, r.jsxs)("div", {
        className: D.contents,
        children: [(0, r.jsxs)("div", {
          className: D.topRow,
          children: [d.preview && (0, r.jsx)("div", {
            className: D.pill,
            children: (0, r.jsx)(u.Text, {
              variant: "eyebrow",
              color: "always-white",
              className: D.eyebrowText,
              children: w.intl.string(w.t.SKNnqq)
            })
          }), j && (0, r.jsx)(u.ua7, {
            text: Y ? w.intl.string(w.t.YsCuyM) : H ? w.intl.string(w.t["74Kqra"]) : (0, h.zi)(d) ? w.intl.string(w.t["I6JG4+"]) : w.intl.string(w.t.umdNio),
            children: e => (0, r.jsx)(u.P3F, M(L({}, e), {
              className: D.utilButtonWrapper,
              "aria-label": w.intl.string(w.t.RscU7O),
              onClick: K,
              children: (0, r.jsx)(u.o1U, {
                color: "currentColor",
                className: D.utilButtonIcon
              })
            }))
          }), (0, r.jsx)(S.r, {
            onOpen: N,
            onClose: v,
            onSelect: R,
            questContent: E.jn.QUEST_HOME_DESKTOP,
            quest: d,
            hideLearnMore: true,
            shouldShowDisclosure: true,
            showShareLink: true,
            sourceQuestContent: x,
            children: e => (0, r.jsx)(u.P3F, M(L({}, e), {
              className: D.utilButtonWrapper,
              "aria-label": w.intl.string(w.t.DEoVWV),
              children: (0, r.jsx)(u.xhG, {
                size: "md",
                color: "currentColor",
                className: D.utilButtonIcon
              })
            }))
          })]
        }), (0, r.jsx)(C.E, {
          showPlaceholder: !O,
          width: 100,
          height: 30,
          className: D.partnerBranding,
          children: (0, r.jsx)(I.ZP, {
            className: D.partnerBranding,
            logotypeClassName: D.partnerLogotypes,
            quest: d,
            separatorSpacing: I.US.MEDIUM,
            withGameTile: false,
            onLoadComplete: W
          })
        }), (0, r.jsxs)("div", {
          className: D.bottomRow,
          children: [(0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: B ? "text-muted" : "always-white",
            children: w.intl.format(w.t.buEvBw, {
              brandName: null != (c = null == (s = d.config.cosponsorMetadata) ? true : s.name) ? c : d.config.messages.gamePublisher
            })
          }), Z || V ? null : (0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: B ? "text-muted" : "always-white",
            children: w.intl.format(w.t["7D8r4O"], {
              expiryDate: F
            })
          })]
        })]
      }), (0, r.jsx)(k, {
        quest: d,
        errorHints: b,
        warningHints: y,
        isDarkTheme: B,
        sourceQuestContent: x
      })]
    })]
  })
}