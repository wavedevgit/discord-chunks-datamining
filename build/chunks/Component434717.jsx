/** Chunk was on 96861 **/
/** chunk id: 434717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
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

function b(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    onLoadComplete: b
  } = e, _ = (0, s.ZP)(), w = (0, o.wjy)(_) ? x.BR.DARK : x.BR.LIGHT, O = (0, m.ly)(t), N = (0, u.aM)(), P = a.useMemo(() => {
    var e;
    let n = null == (e = t.config.ctaConfig) ? true : e.subtitle;
    if (null != n) return n;
    let r = f.r.build(t.config),
      a = r.defaultWatchVideoTask,
      o = null == a ? true : a.messages.videoEndCtaSubtitle;
    return (0, l.Ew)(o) ? r.questType !== i.W.GAMEPLAY || t.config.features.includes(y.S7.NON_GAMING_PLAY_QUEST) || (0, d.Pb)(t) ? v.intl.string(v.t.y8Xf3k) : v.intl.string(v.t["wirwN+"]) : o
  }, [t]), {
    isLoading: T
  } = (0, j.d7)();
  return a.useEffect(() => {
    T || b()
  }, [T, b]), (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)(j.Fl, {
      id: "hero-display",
      children: e => (0, r.jsx)(h.Z, {
        quest: t,
        imageSize: {
          width: 908,
          height: 380
        },
        containerClassName: g.heroDisplayContainer,
        isInteracting: true,
        assetRef: e
      })
    }), (0, r.jsx)("div", {
      className: g.partnerLogotypeContainer,
      children: (0, r.jsx)(j.Fl, {
        id: "partner-logotype",
        children: e => (0, r.jsx)("img", {
          ref: e,
          className: g.partnerLogotype,
          alt: v.intl.formatToPlainString(v.t.rtm15P, {
            name: t.config.messages.gameTitle
          }),
          src: (0, C.fh)(t, C.eC.LOGO_TYPE, w).url
        })
      })
    }), (0, r.jsxs)("div", {
      className: g.partnerContentContainer,
      children: [(0, r.jsxs)("div", {
        className: g.partnerCopyContainer,
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          className: g.partnerTitle,
          children: t.config.messages.questName
        }), (0, r.jsx)(o.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: P
        })]
      }), (0, r.jsx)(j.Fl, {
        id: "partner-game-tile",
        children: e => (0, r.jsx)("img", {
          ref: e,
          className: g.partnerGameTile,
          alt: v.intl.formatToPlainString(v.t.rtm15P, {
            name: t.config.messages.gameTitle
          }),
          src: (0, C.fh)(t, C.eC.GAME_TILE, w).url
        })
      })]
    }), (0, r.jsx)("div", {
      className: g.partnerCtaContainer,
      children: (0, r.jsx)(o.zxk, {
        variant: "primary",
        size: "sm",
        text: O,
        onClick: () => {
          (0, d.nc)(t, {
            content: p.jn.REWARD_MODAL,
            ctaContent: c.jZ.OPEN_GAME_LINK,
            impressionId: N,
            sourceQuestContent: n
          })
        },
        fullWidth: true,
        icon: o.zFc,
        iconPosition: "end"
      })
    })]
  })
}

function _(e) {
  let {
    quest: t,
    location: n
  } = e;
  return (0, r.jsx)(j.p, {
    source: n,
    questId: t.id,
    isPreview: t.preview,
    children: (0, r.jsx)(b, function(e) {
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