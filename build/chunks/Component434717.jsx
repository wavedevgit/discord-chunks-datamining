/** Chunk was on 76418 **/
/** chunk id: 434717, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
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

function N(e) {
  let {
    quest: t,
    sourceQuestContent: n
  } = e, N = (0, o.ZP)(), b = (0, s.wjy)(N) ? _.BR.DARK : _.BR.LIGHT, v = (0, m.ly)(t), y = (0, d.aM)(), T = r.useMemo(() => {
    let e = g.r.build(t.config),
      n = e.defaultWatchVideoTask,
      a = null == n ? true : n.messages.videoEndCtaSubtitle;
    return (0, l.Ew)(a) ? e.questType !== i.W.GAMEPLAY || t.config.features.includes(f.S7.NON_GAMING_PLAY_QUEST) || (0, u.Pb)(t) ? x.intl.string(x.t.y8Xf3t) : x.intl.string(x.t.wirwNz) : a
  }, [t]);
  return (0, a.jsxs)("div", {
    className: j.container,
    children: [(0, a.jsx)(h.Z, {
      quest: t,
      dimensions: {
        width: 908,
        height: 380
      },
      className: j.heroDisplayContainer
    }), (0, a.jsx)("div", {
      className: j.partnerLogotypeContainer,
      children: (0, a.jsx)("img", {
        className: j.partnerLogotype,
        alt: x.intl.formatToPlainString(x.t.rtm15O, {
          name: t.config.messages.gameTitle
        }),
        src: (0, C.fh)(t, C.eC.LOGO_TYPE, b).url
      })
    }), (0, a.jsxs)("div", {
      className: j.partnerContentContainer,
      children: [(0, a.jsxs)("div", {
        className: j.partnerCopyContainer,
        children: [(0, a.jsx)(s.X6q, {
          variant: "heading-lg/bold",
          color: "header-primary",
          className: j.partnerTitle,
          children: t.config.messages.questName
        }), (0, a.jsx)(s.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: T
        })]
      }), (0, a.jsx)("img", {
        className: j.partnerGameTile,
        alt: x.intl.formatToPlainString(x.t.rtm15O, {
          name: t.config.messages.gameTitle
        }),
        src: (0, C.fh)(t, C.eC.GAME_TILE, b).url
      })]
    }), (0, a.jsx)("div", {
      className: j.partnerCtaContainer,
      children: (0, a.jsx)(s.zxk, {
        variant: "primary",
        size: "sm",
        text: v,
        onClick: () => {
          (0, u.nc)(t, {
            content: p.jn.REWARD_MODAL,
            ctaContent: c.jZ.OPEN_GAME_LINK,
            impressionId: y,
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