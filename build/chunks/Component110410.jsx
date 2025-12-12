/** Chunk was on 97158 **/
/** chunk id: 110410, original params: e,t,n (module,exports,require) **/
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
  Chunk578852 = require("./578852.js");

function y(e) {
  let {
    quest: t,
    sourceQuestContent: n,
    onLoadComplete: y
  } = e, b = (0, l.ZP)(), w = (0, o.wjy)(b) ? j.BR.DARK : j.BR.LIGHT, A = (0, f.V_)(t), T = (0, d.aM)(), P = (0, p.VB)(t.config), D = i.useMemo(() => {
    var e;
    let n = null == (e = t.config.ctaConfig) ? true : e.subtitle;
    return null != n ? n : (0, p.BI)(t.config) !== a.W.GAMEPLAY || t.config.features.includes(_.S7.NON_GAMING_PLAY_QUEST) || (0, p.Pb)(t) ? v.intl.string(v.t.y8Xf3k) : v.intl.string(v.t["wirwN+"])
  }, [t]), {
    isLoading: E
  } = (0, C.kC)();
  i.useEffect(() => {
    E || y()
  }, [E, y]);
  let L = (0, h.yc)({
    isShareable: P,
    questId: t.id,
    trackingCtx: i.useMemo(() => ({
      content: u.jn.REWARD_MODAL,
      ctaContent: c.jZ.REWARD_MODAL_COPY_LINK,
      impressionId: T,
      sourceQuestContent: n
    }), [T, n])
  });
  return (0, r.jsxs)("div", {
    className: N.container,
    children: [(0, r.jsx)(C.Fl, {
      id: "hero-display",
      children: e => (0, r.jsx)(g.Z, {
        quest: t,
        imageSize: {
          width: 908,
          height: 380
        },
        containerClassName: N.heroDisplayContainer,
        isInteracting: true,
        assetRef: e
      })
    }), (0, r.jsx)("div", {
      className: N.partnerLogotypeContainer,
      children: (0, r.jsx)(C.Fl, {
        id: "partner-logotype",
        children: e => (0, r.jsx)("img", {
          ref: e,
          className: N.partnerLogotype,
          alt: v.intl.formatToPlainString(v.t.rtm15P, {
            name: t.config.messages.gameTitle
          }),
          src: (0, m.fh)(t, m.eC.LOGO_TYPE, w).url
        })
      })
    }), (0, r.jsxs)("div", {
      className: N.partnerContentContainer,
      children: [(0, r.jsxs)("div", {
        className: N.partnerCopyContainer,
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-md/semibold",
          color: "text-strong",
          className: N.partnerTitle,
          children: v.intl.format(v.t.EAYZAr, {
            questName: t.config.messages.questName
          })
        }), (0, r.jsx)(o.xvT, {
          variant: "text-sm/medium",
          color: "text-subtle",
          children: D
        })]
      }), (0, r.jsx)(C.Fl, {
        id: "partner-game-tile",
        children: e => (0, r.jsx)("img", {
          ref: e,
          className: N.partnerGameTile,
          alt: v.intl.formatToPlainString(v.t.rtm15P, {
            name: t.config.messages.gameTitle
          }),
          src: (0, m.fh)(t, m.eC.GAME_TILE, w).url
        })
      })]
    }), (0, r.jsx)("div", {
      className: N.bottomContainer,
      children: (0, r.jsxs)(o.hE2, {
        size: "sm",
        direction: "horizontal",
        fullWidth: true,
        fullWidthContainer: true,
        children: [P && (0, r.jsx)(s.u, {
          text: v.intl.string(v.t.WmfZHZ),
          children: (0, r.jsx)(o.hU, {
            icon: o.xPt,
            onClick: L,
            "aria-label": v.intl.string(v.t.WmfZHZ),
            variant: "secondary"
          })
        }), (0, r.jsx)(o.zxk, {
          variant: "primary",
          text: A,
          onClick: () => {
            (0, x.nc)(t, {
              content: u.jn.REWARD_MODAL,
              ctaContent: c.jZ.OPEN_GAME_LINK,
              impressionId: T,
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
    children: (0, r.jsx)(y, function(e) {
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