/** Chunk was on 76418 **/
/** chunk id: 434717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk319245 = require("./319245.js"),
  Chunk793030 = require("./793030.js"),
  Chunk410030 = require("./410030.js"),
  Chunk624138 = require("./624138.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk475595 = require("./475595.js"),
  Chunk566078 = require("./566078.js"),
  Chunk477005 = require("./477005.jsx"),
  Chunk78826 = require("./78826.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk834586 = require("./834586.js");

function N(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    onLoadComplete: N
  } = e, y = (0, o.ZP)(), b = (0, s.wjy)(y) ? _.BR.DARK : _.BR.LIGHT, w = (0, m.ly)(t), T = (0, d.aM)(), P = a.useMemo(() => {
    var e;
    let n = null == (e = t.config.ctaConfig) ? true : e.subtitle;
    if (null != n) return n;
    let r = x.r.build(t.config),
      a = r.defaultWatchVideoTask,
      s = null == a ? true : a.messages.videoEndCtaSubtitle;
    return (0, l.Ew)(s) ? r.questType !== i.W.GAMEPLAY || t.config.features.includes(h.S7.NON_GAMING_PLAY_QUEST) || (0, u.Pb)(t) ? j.intl.string(j.t.y8Xf3k) : j.intl.string(j.t["wirwN+"]) : s
  }, [t]), {
    isLoading: A
  } = (0, g.d7)();
  return a.useEffect(() => {
    A || N()
  }, [A, N]), (0, r.jsxs)("div", {
    className: v.container,
    children: [(0, r.jsx)(g.Fl, {
      id: "hero-display",
      children: e => (0, r.jsx)(C.Z, {
        quest: t,
        imageSize: {
          width: 908,
          height: 380
        },
        containerClassName: v.heroDisplayContainer,
        isInteracting: true,
        assetRef: e
      })
    }), (0, r.jsx)("div", {
      className: v.partnerLogotypeContainer,
      children: (0, r.jsx)(g.Fl, {
        id: "partner-logotype",
        children: e => (0, r.jsx)("img", {
          ref: e,
          className: v.partnerLogotype,
          alt: j.intl.formatToPlainString(j.t.rtm15P, {
            name: t.config.messages.gameTitle
          }),
          src: (0, f.fh)(t, f.eC.LOGO_TYPE, b).url
        })
      })
    }), (0, r.jsxs)("div", {
      className: v.partnerContentContainer,
      children: [(0, r.jsxs)("div", {
        className: v.partnerCopyContainer,
        children: [(0, r.jsx)(s.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          className: v.partnerTitle,
          children: t.config.messages.questName
        }), (0, r.jsx)(s.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: P
        })]
      }), (0, r.jsx)(g.Fl, {
        id: "partner-game-tile",
        children: e => (0, r.jsx)("img", {
          ref: e,
          className: v.partnerGameTile,
          alt: j.intl.formatToPlainString(j.t.rtm15P, {
            name: t.config.messages.gameTitle
          }),
          src: (0, f.fh)(t, f.eC.GAME_TILE, b).url
        })
      })]
    }), (0, r.jsx)("div", {
      className: v.partnerCtaContainer,
      children: (0, r.jsx)(s.zxk, {
        variant: "primary",
        size: "sm",
        text: w,
        onClick: () => {
          (0, u.nc)(t, {
            content: p.jn.REWARD_MODAL,
            ctaContent: c.jZ.OPEN_GAME_LINK,
            impressionId: T,
            sourceQuestContent: n
          })
        },
        fullWidth: true,
        icon: s.zFc,
        iconPosition: "end"
      })
    })]
  })
}

function y(e) {
  let {
    quest: t,
    location: n
  } = e;
  return (0, r.jsx)(g.p, {
    source: n,
    questId: t.id,
    isPreview: t.preview,
    children: (0, r.jsx)(N, function(e) {
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
    }({}, e))
  })
}