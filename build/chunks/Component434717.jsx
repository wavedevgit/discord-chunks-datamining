/** Chunk was on 96861 **/
/** chunk id: 434717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk319245 = require("./319245.js"),
  Chunk793030 = require("./793030.js"),
  Chunk681715 = require("./681715.js"),
  Chunk410030 = require("./410030.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk49436 = require("./49436.js"),
  Chunk475595 = require("./475595.js"),
  Chunk304696 = require("./304696.js"),
  Chunk387745 = require("./387745.js"),
  Chunk283689 = require("./283689.js"),
  Chunk455357 = require("./455357.jsx"),
  Chunk477005 = require("./477005.jsx"),
  Chunk659302 = require("./659302.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk563812 = require("./563812.js");

function w(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    onLoadComplete: w
  } = e, O = (0, l.ZP)(), N = (0, o.wjy)(O) ? g.BR.DARK : g.BR.LIGHT, _ = (0, p.V_)(t), P = (0, d.aM)(), E = (0, b.VB)(t.config), T = a.useMemo(() => {
    var e;
    let n = null == (e = t.config.ctaConfig) ? true : e.subtitle;
    return null != n ? n : (0, b.BI)(t.config) !== i.W.GAMEPLAY || t.config.features.includes(j.S7.NON_GAMING_PLAY_QUEST) || (0, b.Pb)(t) ? y.intl.string(y.t.y8Xf3k) : y.intl.string(y.t["wirwN+"])
  }, [t]), {
    isLoading: A
  } = (0, f.kC)();
  a.useEffect(() => {
    A || w()
  }, [A, w]);
  let I = (0, x.yc)({
    isShareable: E,
    questId: t.id,
    trackingCtx: a.useMemo(() => ({
      content: u.jn.REWARD_MODAL,
      ctaContent: c.jZ.REWARD_MODAL_COPY_LINK,
      impressionId: P,
      sourceQuestContent: n
    }), [P, n])
  });
  return (0, r.jsxs)("div", {
    className: v.container,
    children: [(0, r.jsx)(f.Fl, {
      id: "hero-display",
      children: e => (0, r.jsx)(h.Z, {
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
      children: (0, r.jsx)(f.Fl, {
        id: "partner-logotype",
        children: e => (0, r.jsx)("img", {
          ref: e,
          className: v.partnerLogotype,
          alt: y.intl.formatToPlainString(y.t.rtm15P, {
            name: t.config.messages.gameTitle
          }),
          src: (0, m.fh)(t, m.eC.LOGO_TYPE, N).url
        })
      })
    }), (0, r.jsxs)("div", {
      className: v.partnerContentContainer,
      children: [(0, r.jsxs)("div", {
        className: v.partnerCopyContainer,
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-md/semibold",
          color: "text-strong",
          className: v.partnerTitle,
          children: y.intl.format(y.t.EAYZAr, {
            questName: t.config.messages.questName
          })
        }), (0, r.jsx)(o.xvT, {
          variant: "text-sm/medium",
          color: "text-subtle",
          children: T
        })]
      }), (0, r.jsx)(f.Fl, {
        id: "partner-game-tile",
        children: e => (0, r.jsx)("img", {
          ref: e,
          className: v.partnerGameTile,
          alt: y.intl.formatToPlainString(y.t.rtm15P, {
            name: t.config.messages.gameTitle
          }),
          src: (0, m.fh)(t, m.eC.GAME_TILE, N).url
        })
      })]
    }), (0, r.jsx)("div", {
      className: v.bottomContainer,
      children: (0, r.jsxs)(o.hE2, {
        size: "sm",
        direction: "horizontal",
        fullWidth: true,
        fullWidthContainer: true,
        children: [E && (0, r.jsx)(s.u, {
          text: y.intl.string(y.t.WmfZHZ),
          children: (0, r.jsx)(o.hU, {
            icon: o.xPt,
            onClick: I,
            "aria-label": y.intl.string(y.t.WmfZHZ),
            variant: "secondary"
          })
        }), (0, r.jsx)(o.zxk, {
          variant: "primary",
          text: _,
          onClick: () => {
            (0, C.nc)(t, {
              content: u.jn.REWARD_MODAL,
              ctaContent: c.jZ.OPEN_GAME_LINK,
              impressionId: P,
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
  return (0, r.jsx)(f.x8, {
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