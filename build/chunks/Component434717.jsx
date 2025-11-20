/** Chunk was on 96861 **/
/** chunk id: 434717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk319245 = require("./319245.js"),
  Chunk793030 = require("./793030.js"),
  Chunk681715 = require("./681715.js"),
  Chunk410030 = require("./410030.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.jsx"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk475595 = require("./475595.js"),
  Chunk477005 = require("./477005.jsx"),
  Chunk78826 = require("./78826.jsx"),
  Chunk667105 = require("./667105.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk985952 = require("./985952.js");

function b(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    onLoadComplete: b
  } = e, _ = (0, l.ZP)(), w = (0, o.wjy)(_) ? y.BR.DARK : y.BR.LIGHT, O = (0, m.ly)(t), N = (0, u.aM)(), P = (0, d.vB)(t.config), E = a.useMemo(() => {
    var e;
    let n = null == (e = t.config.ctaConfig) ? true : e.subtitle;
    return null != n ? n : (0, d.BI)(t.config) !== i.W.GAMEPLAY || t.config.features.includes(x.S7.NON_GAMING_PLAY_QUEST) || (0, d.Pb)(t) ? g.intl.string(g.t.y8Xf3k) : g.intl.string(g.t["wirwN+"])
  }, [t]), {
    isLoading: T
  } = (0, h.d7)();
  a.useEffect(() => {
    T || b()
  }, [T, b]);
  let A = (0, j.yc)({
    isShareable: P,
    questId: t.id,
    trackingCtx: a.useMemo(() => ({
      content: p.jn.REWARD_MODAL,
      ctaContent: c.jZ.REWARD_MODAL_COPY_LINK,
      impressionId: N,
      sourceQuestContent: n
    }), [N, n])
  });
  return (0, r.jsxs)("div", {
    className: v.container,
    children: [(0, r.jsx)(h.Fl, {
      id: "hero-display",
      children: e => (0, r.jsx)(f.Z, {
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
      children: (0, r.jsx)(h.Fl, {
        id: "partner-logotype",
        children: e => (0, r.jsx)("img", {
          ref: e,
          className: v.partnerLogotype,
          alt: g.intl.formatToPlainString(g.t.rtm15P, {
            name: t.config.messages.gameTitle
          }),
          src: (0, C.fh)(t, C.eC.LOGO_TYPE, w).url
        })
      })
    }), (0, r.jsxs)("div", {
      className: v.partnerContentContainer,
      children: [(0, r.jsxs)("div", {
        className: v.partnerCopyContainer,
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-md/semibold",
          color: "header-primary",
          className: v.partnerTitle,
          children: g.intl.format(g.t.EAYZAr, {
            questName: t.config.messages.questName
          })
        }), (0, r.jsx)(o.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: E
        })]
      }), (0, r.jsx)(h.Fl, {
        id: "partner-game-tile",
        children: e => (0, r.jsx)("img", {
          ref: e,
          className: v.partnerGameTile,
          alt: g.intl.formatToPlainString(g.t.rtm15P, {
            name: t.config.messages.gameTitle
          }),
          src: (0, C.fh)(t, C.eC.GAME_TILE, w).url
        })
      })]
    }), (0, r.jsx)("div", {
      className: v.bottomContainer,
      children: (0, r.jsxs)(o.hE2, {
        size: "sm",
        direction: "horizontal",
        fullWidth: true,
        fullWidthContainer: true,
        children: [P && (0, r.jsx)(s.u, {
          text: g.intl.string(g.t.WmfZHZ),
          children: (0, r.jsx)(o.hU, {
            icon: o.xPt,
            onClick: A,
            "aria-label": g.intl.string(g.t.WmfZHZ),
            variant: "secondary"
          })
        }), (0, r.jsx)(o.zxk, {
          variant: "primary",
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
        })]
      })
    })]
  })
}

function _(e) {
  let {
    quest: t,
    location: n
  } = e;
  return (0, r.jsx)(h.p, {
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