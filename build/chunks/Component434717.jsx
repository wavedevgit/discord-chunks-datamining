/** Chunk was on 96861 **/
/** chunk id: 434717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk319245 = require("./319245.js"),
  Chunk793030 = require("./793030.js"),
  Chunk681715 = require("./681715.js"),
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

function w(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    onLoadComplete: w
  } = e, O = (0, l.ZP)(), P = (0, o.wjy)(O) ? v.BR.DARK : v.BR.LIGHT, N = (0, p.ly)(t), E = (0, u.aM)(), T = (0, m.vB)(t.config), D = a.useMemo(() => {
    var e;
    let n = null == (e = t.config.ctaConfig) ? true : e.subtitle;
    if (null != n) return n;
    let r = h.r.build(t.config),
      a = r.defaultWatchVideoTask,
      o = null == a ? true : a.messages.videoEndCtaSubtitle;
    return (0, c.Ew)(o) ? r.questType !== i.W.GAMEPLAY || t.config.features.includes(g.S7.NON_GAMING_PLAY_QUEST) || (0, m.Pb)(t) ? b.intl.string(b.t.y8Xf3k) : b.intl.string(b.t["wirwN+"]) : o
  }, [t]), {
    isLoading: I
  } = (0, x.d7)();
  a.useEffect(() => {
    I || w()
  }, [I, w]);
  let A = (0, y.yc)({
    isShareable: T,
    questId: t.id,
    trackingCtx: a.useMemo(() => ({
      content: C.jn.REWARD_MODAL,
      ctaContent: d.jZ.REWARD_MODAL_COPY_LINK,
      impressionId: E,
      sourceQuestContent: n
    }), [E, n])
  });
  return (0, r.jsxs)("div", {
    className: _.container,
    children: [(0, r.jsx)(x.Fl, {
      id: "hero-display",
      children: e => (0, r.jsx)(j.Z, {
        quest: t,
        imageSize: {
          width: 908,
          height: 380
        },
        containerClassName: _.heroDisplayContainer,
        isInteracting: true,
        assetRef: e
      })
    }), (0, r.jsx)("div", {
      className: _.partnerLogotypeContainer,
      children: (0, r.jsx)(x.Fl, {
        id: "partner-logotype",
        children: e => (0, r.jsx)("img", {
          ref: e,
          className: _.partnerLogotype,
          alt: b.intl.formatToPlainString(b.t.rtm15P, {
            name: t.config.messages.gameTitle
          }),
          src: (0, f.fh)(t, f.eC.LOGO_TYPE, P).url
        })
      })
    }), (0, r.jsxs)("div", {
      className: _.partnerContentContainer,
      children: [(0, r.jsxs)("div", {
        className: _.partnerCopyContainer,
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          className: _.partnerTitle,
          children: t.config.messages.questName
        }), (0, r.jsx)(o.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: D
        })]
      }), (0, r.jsx)(x.Fl, {
        id: "partner-game-tile",
        children: e => (0, r.jsx)("img", {
          ref: e,
          className: _.partnerGameTile,
          alt: b.intl.formatToPlainString(b.t.rtm15P, {
            name: t.config.messages.gameTitle
          }),
          src: (0, f.fh)(t, f.eC.GAME_TILE, P).url
        })
      })]
    }), (0, r.jsx)("div", {
      className: _.bottomContainer,
      children: (0, r.jsxs)(o.hE2, {
        size: "sm",
        direction: "horizontal",
        fullWidth: true,
        fullWidthContainer: true,
        children: [T && (0, r.jsx)(s.u, {
          text: b.intl.string(b.t.WmfZHZ),
          children: (0, r.jsx)(o.hU, {
            icon: o.xPt,
            onClick: A,
            "aria-label": b.intl.string(b.t.WmfZHZ),
            variant: "secondary"
          })
        }), (0, r.jsx)(o.zxk, {
          variant: "primary",
          text: N,
          onClick: () => {
            (0, m.nc)(t, {
              content: C.jn.REWARD_MODAL,
              ctaContent: d.jZ.OPEN_GAME_LINK,
              impressionId: E,
              sourceQuestContent: n
            })
          },
          fullWidth: true,
          icon: o.zFc,
          iconPosition: "end"
        })]
      })
    })]
  })
}

function O(e) {
  let {
    quest: t,
    location: n
  } = e;
  return (0, r.jsx)(x.p, {
    source: n,
    questId: t.id,
    isPreview: t.preview,
    children: (0, r.jsx)(w, function(e) {
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