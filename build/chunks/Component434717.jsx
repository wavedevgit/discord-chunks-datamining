/** Chunk was on 96861 **/
/** chunk id: 434717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
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
  Chunk985952 = require("./985952.js");

function _(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    onLoadComplete: _
  } = e, w = (0, l.ZP)(), O = (0, o.wjy)(w) ? y.BR.DARK : y.BR.LIGHT, N = (0, p.V_)(t), P = (0, u.aM)(), E = (0, f.VB)(t.config), T = a.useMemo(() => {
    var e;
    let n = null == (e = t.config.ctaConfig) ? true : e.subtitle;
    return null != n ? n : (0, f.BI)(t.config) !== i.W.GAMEPLAY || t.config.features.includes(g.S7.NON_GAMING_PLAY_QUEST) || (0, f.Pb)(t) ? v.intl.string(v.t.y8Xf3k) : v.intl.string(v.t["wirwN+"])
  }, [t]), {
    isLoading: A
  } = (0, h.kC)();
  a.useEffect(() => {
    A || _()
  }, [A, _]);
  let I = (0, x.yc)({
    isShareable: E,
    questId: t.id,
    trackingCtx: a.useMemo(() => ({
      content: d.jn.REWARD_MODAL,
      ctaContent: c.jZ.REWARD_MODAL_COPY_LINK,
      impressionId: P,
      sourceQuestContent: n
    }), [P, n])
  });
  return (0, r.jsxs)("div", {
    className: b.container,
    children: [(0, r.jsx)(h.Fl, {
      id: "hero-display",
      children: e => (0, r.jsx)(j.Z, {
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
      children: (0, r.jsx)(h.Fl, {
        id: "partner-logotype",
        children: e => (0, r.jsx)("img", {
          ref: e,
          className: b.partnerLogotype,
          alt: v.intl.formatToPlainString(v.t.rtm15P, {
            name: t.config.messages.gameTitle
          }),
          src: (0, m.fh)(t, m.eC.LOGO_TYPE, O).url
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
          children: v.intl.format(v.t.EAYZAr, {
            questName: t.config.messages.questName
          })
        }), (0, r.jsx)(o.xvT, {
          variant: "text-sm/medium",
          color: "text-subtle",
          children: T
        })]
      }), (0, r.jsx)(h.Fl, {
        id: "partner-game-tile",
        children: e => (0, r.jsx)("img", {
          ref: e,
          className: b.partnerGameTile,
          alt: v.intl.formatToPlainString(v.t.rtm15P, {
            name: t.config.messages.gameTitle
          }),
          src: (0, m.fh)(t, m.eC.GAME_TILE, O).url
        })
      })]
    }), (0, r.jsx)("div", {
      className: b.bottomContainer,
      children: (0, r.jsxs)(o.hE2, {
        size: "sm",
        direction: "horizontal",
        fullWidth: true,
        fullWidthContainer: true,
        children: [E && (0, r.jsx)(s.u, {
          text: v.intl.string(v.t.WmfZHZ),
          children: (0, r.jsx)(o.hU, {
            icon: o.xPt,
            onClick: I,
            "aria-label": v.intl.string(v.t.WmfZHZ),
            variant: "secondary"
          })
        }), (0, r.jsx)(o.zxk, {
          variant: "primary",
          text: N,
          onClick: () => {
            (0, C.nc)(t, {
              content: d.jn.REWARD_MODAL,
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

function w(e) {
  let {
    quest: t,
    location: n
  } = e;
  return (0, r.jsx)(h.x8, {
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