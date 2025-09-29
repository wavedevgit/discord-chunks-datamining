/** Chunk was on 96861 **/
/** chunk id: 434717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
  Chunk968435 = require("./968435.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk834586 = require("./834586.js");

function x(e) {
  let {
    quest: t,
    sourceQuestContent: n
  } = e, x = (0, s.ZP)(), _ = (0, o.wjy)(x) ? j.BR.DARK : j.BR.LIGHT, b = (0, m.ly)(t), w = (0, u.aM)(), O = a.useMemo(() => {
    let e = f.r.build(t.config),
      n = e.defaultWatchVideoTask,
      r = null == n ? true : n.messages.videoEndCtaSubtitle;
    return (0, l.Ew)(r) ? e.questType !== i.W.GAMEPLAY || t.config.features.includes(y.S7.NON_GAMING_PLAY_QUEST) || (0, d.Pb)(t) ? v.intl.string(v.t.y8Xf3t) : v.intl.string(v.t.wirwNz) : r
  }, [t]);
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)(h.Z, {
      quest: t,
      dimensions: {
        width: 908,
        height: 380
      },
      className: g.heroDisplayContainer
    }), (0, r.jsx)("div", {
      className: g.partnerLogotypeContainer,
      children: (0, r.jsx)("img", {
        className: g.partnerLogotype,
        alt: v.intl.formatToPlainString(v.t.rtm15O, {
          name: t.config.messages.gameTitle
        }),
        src: (0, C.fh)(t, C.eC.LOGO_TYPE, _).url
      })
    }), (0, r.jsxs)("div", {
      className: g.partnerContentContainer,
      children: [(0, r.jsxs)("div", {
        className: g.partnerCopyContainer,
        children: [(0, r.jsx)(o.X6q, {
          variant: "heading-lg/bold",
          color: "header-primary",
          className: g.partnerTitle,
          children: t.config.messages.questName
        }), (0, r.jsx)(o.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: O
        })]
      }), (0, r.jsx)("img", {
        className: g.partnerGameTile,
        alt: v.intl.formatToPlainString(v.t.rtm15O, {
          name: t.config.messages.gameTitle
        }),
        src: (0, C.fh)(t, C.eC.GAME_TILE, _).url
      })]
    }), (0, r.jsx)("div", {
      className: g.partnerCtaContainer,
      children: (0, r.jsx)(o.zxk, {
        variant: "primary",
        size: "sm",
        text: b,
        onClick: () => {
          (0, d.nc)(t, {
            content: p.jn.REWARD_MODAL,
            ctaContent: c.jZ.OPEN_GAME_LINK,
            impressionId: w,
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