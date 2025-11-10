/** Chunk was on 96861 **/
/** chunk id: 434717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
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
  Chunk667105 = require("./667105.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk985952 = require("./985952.js");

function _(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    onLoadComplete: _
  } = e, w = (0, s.ZP)(), O = (0, o.wjy)(w) ? v.BR.DARK : v.BR.LIGHT, N = (0, m.ly)(t), P = (0, d.aM)(), E = (0, u.vB)(t.config), T = a.useMemo(() => {
    var e;
    let n = null == (e = t.config.ctaConfig) ? true : e.subtitle;
    if (null != n) return n;
    let r = f.r.build(t.config),
      a = r.defaultWatchVideoTask,
      o = null == a ? true : a.messages.videoEndCtaSubtitle;
    return (0, l.Ew)(o) ? r.questType !== i.W.GAMEPLAY || t.config.features.includes(x.S7.NON_GAMING_PLAY_QUEST) || (0, u.Pb)(t) ? g.intl.string(g.t.y8Xf3k) : g.intl.string(g.t["wirwN+"]) : o
  }, [t]), {
    isLoading: D
  } = (0, j.d7)();
  a.useEffect(() => {
    D || _()
  }, [D, _]);
  let A = (0, y.yc)({
    isShareable: E,
    questId: t.id,
    trackingCtx: a.useMemo(() => ({
      content: p.jn.REWARD_MODAL,
      ctaContent: c.jZ.REWARD_MODAL_COPY_LINK,
      impressionId: P,
      sourceQuestContent: n
    }), [P, n])
  });
  return (0, r.jsxs)("div", {
    className: b.container,
    children: [(0, r.jsx)(j.Fl, {
      id: "hero-display",
      children: e => (0, r.jsx)(h.Z, {
        quest: t,
        imageSize: {
          width: 908,
          height: 380
        },
        containerClassName: b.heroDisplayContainer,
        isInteracting: true,
        assetRef: e
      })
    }), (0, r.jsx)("div", {
      className: b.partnerLogotypeContainer,
      children: (0, r.jsx)(j.Fl, {
        id: "partner-logotype",
        children: e => (0, r.jsx)("img", {
          ref: e,
          className: b.partnerLogotype,
          alt: g.intl.formatToPlainString(g.t.rtm15P, {
            name: t.config.messages.gameTitle
          }),
          src: (0, C.fh)(t, C.eC.LOGO_TYPE, O).url
        })
      })
    }), (0, r.jsxs)("div", {
      className: b.partnerContentContainer,
      children: [(0, r.jsxs)("div", {
        className: b.partnerCopyContainer,
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          className: b.partnerTitle,
          children: t.config.messages.questName
        }), (0, r.jsx)(o.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: T
        })]
      }), (0, r.jsx)(j.Fl, {
        id: "partner-game-tile",
        children: e => (0, r.jsx)("img", {
          ref: e,
          className: b.partnerGameTile,
          alt: g.intl.formatToPlainString(g.t.rtm15P, {
            name: t.config.messages.gameTitle
          }),
          src: (0, C.fh)(t, C.eC.GAME_TILE, O).url
        })
      })]
    }), (0, r.jsx)("div", {
      className: b.bottomContainer,
      children: (0, r.jsxs)(o.hE2, {
        size: "sm",
        direction: "horizontal",
        fullWidth: true,
        fullWidthContainer: true,
        children: [(0, r.jsx)(o.zxk, {
          variant: "primary",
          text: N,
          onClick: () => {
            (0, u.nc)(t, {
              content: p.jn.REWARD_MODAL,
              ctaContent: c.jZ.OPEN_GAME_LINK,
              impressionId: P,
              sourceQuestContent: n
            })
          },
          fullWidth: true,
          icon: o.zFc,
          iconPosition: "end"
        }), E && (0, r.jsx)(o.hU, {
          icon: o.aAc,
          onClick: A,
          "aria-label": g.intl.string(g.t.RDE0Sc),
          variant: "secondary"
        })]
      })
    })]
  })
}

function w(e) {
  let {
    quest: t,
    location: n
  } = e;
  return (0, r.jsx)(j.p, {
    source: n,
    questId: t.id,
    isPreview: t.preview,
    children: (0, r.jsx)(_, function(e) {
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