/** Chunk was on 37082 **/
/** chunk id: 439826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => D
}), require("./784620.js"), require("./973216.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
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
  Chunk508936 = require("./508936.js");

function B(e) {
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

function k(e, t) {
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

function I(e) {
  var t;
  let {
    quest: n,
    errorHints: o,
    warningHints: a,
    isDarkTheme: l,
    sourceQuestContent: p
  } = e, {
    ref: g,
    height: f = 0
  } = (0, d.ZP)([o]), x = (null == (t = n.userStatus) ? true : t.completedAt) != null, j = (0, h.z)(n), {
    type: _,
    hints: b
  } = s.useMemo(() => x || j ? {
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
  }, [o, x, j, a]), v = 2 !== _, y = (0, u.q_F)({
    opacity: +!!v,
    height: v ? f : 0,
    config: P.Y
  }), O = 0 === _ ? u.Mgn : u.d3s, E = (0, m.Lq)(N.Ilk.RED_345), S = 0 === _ ? E : l ? u.TVs.colors.TEXT_DEFAULT : u.TVs.colors.WHITE;
  return (0, r.jsx)(i.animated.div, {
    style: y,
    children: (0, r.jsxs)("div", {
      ref: g,
      className: R.hints,
      children: [(0, r.jsxs)("div", {
        className: R.hintsContainer,
        children: [(0, r.jsx)(O, {
          size: "xs",
          color: S
        }), (0, r.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: l ? "text-muted" : "always-white",
          children: b.at(0)
        })]
      }), 0 === _ && (0, r.jsx)(c.zx, {
        onClick: () => (0, C.y)({
          questId: n.id,
          errorHints: o,
          sourceQuestContent: p
        }),
        size: c.Ph.MIN,
        look: c.iL.LINK,
        color: c.Tt.CUSTOM,
        style: {
          color: (0, m.Lq)(N.Ilk.BLUE_345)
        },
        children: "See Details"
      })]
    })
  })
}

function q(e) {
  let {
    quest: t,
    isHovering: n,
    showAssets: o
  } = e, a = s.useMemo(() => (0, b.fh)(t, b.eC.HERO_IMAGE), [t]), i = s.useMemo(() => (0, b.fh)(t, b.eC.HERO_VIDEO), [t]), l = (0, _.h)(t, w.dr.QUEST_HOME_DESKTOP), {
    onAssetLoadComplete: c
  } = s.useContext(S.k);
  return (0, r.jsx)("div", {
    className: R.heroAssetCont,
    children: o && (0, r.jsx)(v.K, {
      imageAsset: null != a ? {
        asset: a,
        assetId: "QuestTileBanner",
        alt: A.intl.string(A.t.jnijW1),
        className: R.heroAsset
      } : true,
      videoAsset: null != i ? {
        asset: i,
        assetId: "QuestTileBanner_heroAnimated",
        className: R.heroAssetVideo
      } : true,
      videoActive: !l && n,
      imageDimensions: {
        width: 1320,
        height: 370
      },
      onLoadComplete: c
    })
  })
}

function D(e) {
  var t, n, o, i, c;
  let {
    quest: d,
    isHovering: m,
    errorHints: _,
    warningHints: b,
    isVisibleInViewport: v,
    onCtxMenuClose: C,
    onCtxMenuOpen: w,
    onCtxMenuSelect: P,
    sourceQuestContent: D
  } = e, Q = (0, f.PB)(d), V = (0, p.ZP)(), L = ((0, l.wj)(V) ? N.BRd.DARK : N.BRd.LIGHT) === N.BRd.DARK, M = (0, h.tP)(d), Z = (null == (t = d.userStatus) ? true : t.claimedAt) != null, W = (0, h.B6)(d.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), U = (null == (n = d.userStatus) ? true : n.enrolledAt) != null, H = (null == (o = d.userStatus) ? true : o.completedAt) != null, {
    onAssetLoadComplete: z
  } = s.useContext(S.k), F = s.useCallback(() => {
    Q && ((0, f.zi)(d) || U || (0, x.AH)(d.id, {
      questContent: j.jn.QUEST_HOME_DESKTOP,
      questContentCTA: g.jZ.ACCEPT_QUEST,
      sourceQuestContent: D
    }), (0, O.openVideoQuestModal)({
      quest: d,
      questContent: j.jn.QUEST_HOME_DESKTOP,
      sourceQuestContent: D,
      sourceQuestContentCTA: g.jZ.QUEST_HOME_TILE_HEADER_WATCH_VIDEO
    }))
  }, [Q, d, U, D]);
  return (0, r.jsxs)("div", {
    className: R.container,
    children: [(0, r.jsx)("div", {
      className: R.heroAssetWrapper,
      children: (0, r.jsx)(q, {
        quest: d,
        isHovering: m,
        showAssets: v
      })
    }), (0, r.jsx)("div", {
      className: a()(R.overlay, {
        [R.darkThemeGradient]: L,
        [R.lightThemeGradient]: !L
      })
    }), (0, r.jsxs)("div", {
      className: R.positionContentOverBackground,
      children: [(0, r.jsxs)("div", {
        className: R.contents,
        children: [(0, r.jsxs)("div", {
          className: R.topRow,
          children: [d.preview && (0, r.jsx)("div", {
            className: R.pill,
            children: (0, r.jsx)(u.Text, {
              variant: "eyebrow",
              color: "always-white",
              className: R.eyebrowText,
              children: A.intl.string(A.t.SKNnqq)
            })
          }), Q && (0, r.jsx)(u.ua7, {
            text: H ? A.intl.string(A.t.YsCuyM) : U ? A.intl.string(A.t["74Kqra"]) : (0, f.zi)(d) ? A.intl.string(A.t["I6JG4+"]) : A.intl.string(A.t.umdNio),
            children: e => (0, r.jsx)(u.P3F, k(B({}, e), {
              className: R.utilButtonWrapper,
              "aria-label": A.intl.string(A.t.RscU7O),
              onClick: F,
              children: (0, r.jsx)(u.o1U, {
                color: "currentColor",
                className: R.utilButtonIcon
              })
            }))
          }), (0, r.jsx)(E.r, {
            onOpen: w,
            onClose: C,
            onSelect: P,
            questContent: j.jn.QUEST_HOME_DESKTOP,
            quest: d,
            hideLearnMore: true,
            shouldShowDisclosure: true,
            showShareLink: true,
            sourceQuestContent: D,
            children: e => (0, r.jsx)(u.P3F, k(B({}, e), {
              className: R.utilButtonWrapper,
              "aria-label": A.intl.string(A.t.DEoVWV),
              children: (0, r.jsx)(u.xhG, {
                size: "md",
                color: "currentColor",
                className: R.utilButtonIcon
              })
            }))
          })]
        }), (0, r.jsx)(T.E, {
          showPlaceholder: !v,
          width: 100,
          height: 30,
          className: R.partnerBranding,
          children: (0, r.jsx)(y.ZP, {
            className: R.partnerBranding,
            logotypeClassName: R.partnerLogotypes,
            quest: d,
            separatorSpacing: y.US.MEDIUM,
            withGameTile: false,
            onLoadComplete: z
          })
        }), (0, r.jsxs)("div", {
          className: R.bottomRow,
          children: [(0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: L ? "text-muted" : "always-white",
            children: A.intl.format(A.t.buEvBw, {
              brandName: null != (c = null == (i = d.config.cosponsorMetadata) ? true : i.name) ? c : d.config.messages.gamePublisher
            })
          }), M || Z ? null : (0, r.jsx)(u.Text, {
            variant: "text-sm/medium",
            color: L ? "text-muted" : "always-white",
            children: A.intl.format(A.t["7D8r4O"], {
              expiryDate: W
            })
          })]
        })]
      }), (0, r.jsx)(I, {
        quest: d,
        errorHints: _,
        warningHints: b,
        isDarkTheme: L,
        sourceQuestContent: D
      })]
    })]
  })
}