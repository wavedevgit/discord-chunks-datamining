/** Chunk was on 96861 **/
/** chunk id: 434717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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
  Chunk509212 = require("./509212.js"),
  Chunk475595 = require("./475595.js"),
  Chunk455357 = require("./455357.jsx"),
  Chunk477005 = require("./477005.jsx"),
  Chunk659302 = require("./659302.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk985952 = require("./985952.js");

function v(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    onLoadComplete: v
  } = e, b = (0, l.ZP)(), _ = (0, o.wjy)(b) ? x.BR.DARK : x.BR.LIGHT, w = (0, m.V_)(t.config), O = (0, u.aM)(), N = (0, m.vB)(t.config), P = a.useMemo(() => {
    var e;
    let n = null == (e = t.config.ctaConfig) ? true : e.subtitle;
    return null != n ? n : (0, m.BI)(t.config) !== i.W.GAMEPLAY || t.config.features.includes(j.S7.NON_GAMING_PLAY_QUEST) || (0, m.Pb)(t) ? y.intl.string(y.t.y8Xf3k) : y.intl.string(y.t["wirwN+"])
  }, [t]), {
    isLoading: E
  } = (0, C.kC)();
  a.useEffect(() => {
    E || v()
  }, [E, v]);
  let T = (0, h.yc)({
    isShareable: N,
    questId: t.id,
    trackingCtx: a.useMemo(() => ({
      content: d.jn.REWARD_MODAL,
      ctaContent: c.jZ.REWARD_MODAL_COPY_LINK,
      impressionId: O,
      sourceQuestContent: n
    }), [O, n])
  });
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)(C.Fl, {
      id: "hero-display",
      children: e => (0, r.jsx)(f.Z, {
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
      children: (0, r.jsx)(C.Fl, {
        id: "partner-logotype",
        children: e => (0, r.jsx)("img", {
          ref: e,
          className: g.partnerLogotype,
          alt: y.intl.formatToPlainString(y.t.rtm15P, {
            name: t.config.messages.gameTitle
          }),
          src: (0, p.fh)(t, p.eC.LOGO_TYPE, _).url
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
          children: y.intl.format(y.t.EAYZAr, {
            questName: t.config.messages.questName
          })
        }), (0, r.jsx)(o.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: P
        })]
      }), (0, r.jsx)(C.Fl, {
        id: "partner-game-tile",
        children: e => (0, r.jsx)("img", {
          ref: e,
          className: g.partnerGameTile,
          alt: y.intl.formatToPlainString(y.t.rtm15P, {
            name: t.config.messages.gameTitle
          }),
          src: (0, p.fh)(t, p.eC.GAME_TILE, _).url
        })
      })]
    }), (0, r.jsx)("div", {
      className: g.bottomContainer,
      children: (0, r.jsxs)(o.hE2, {
        size: "sm",
        direction: "horizontal",
        fullWidth: true,
        fullWidthContainer: true,
        children: [N && (0, r.jsx)(s.u, {
          text: y.intl.string(y.t.WmfZHZ),
          children: (0, r.jsx)(o.hU, {
            icon: o.xPt,
            onClick: T,
            "aria-label": y.intl.string(y.t.WmfZHZ),
            variant: "secondary"
          })
        }), (0, r.jsx)(o.zxk, {
          variant: "primary",
          text: w,
          onClick: () => {
            (0, m.nc)(t, {
              content: d.jn.REWARD_MODAL,
              ctaContent: c.jZ.OPEN_GAME_LINK,
              impressionId: O,
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

function b(e) {
  let {
    quest: t,
    location: n
  } = e;
  return (0, r.jsx)(C.x8, {
    source: n,
    questId: t.id,
    isPreview: t.preview,
    children: (0, r.jsx)(v, function(e) {
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