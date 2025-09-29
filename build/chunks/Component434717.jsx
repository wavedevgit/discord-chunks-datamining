/** Chunk was on 76418 **/
/** chunk id: 434717, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => j
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

function j(e) {
  let {
    quest: n,
    sourceQuestContent: t
  } = e, j = (0, o.ZP)(), N = (0, s.wjy)(j) ? _.BR.DARK : _.BR.LIGHT, y = (0, m.ly)(n), T = (0, d.aM)(), b = r.useMemo(() => {
    let e = f.r.build(n.config),
      t = e.defaultWatchVideoTask,
      a = null == t ? true : t.messages.videoEndCtaSubtitle;
    return (0, l.Ew)(a) ? e.questType !== i.W.GAMEPLAY || n.config.features.includes(x.S7.NON_GAMING_PLAY_QUEST) || (0, u.Pb)(n) ? g.intl.string(g.t.y8Xf3t) : g.intl.string(g.t.wirwNz) : a
  }, [n]);
  return (0, a.jsxs)("div", {
    className: v.container,
    children: [(0, a.jsx)(h.Z, {
      quest: n,
      dimensions: {
        width: 908,
        height: 380
      },
      className: v.heroDisplayContainer
    }), (0, a.jsx)("div", {
      className: v.partnerLogotypeContainer,
      children: (0, a.jsx)("img", {
        className: v.partnerLogotype,
        alt: g.intl.formatToPlainString(g.t.rtm15O, {
          name: n.config.messages.gameTitle
        }),
        src: (0, C.fh)(n, C.eC.LOGO_TYPE, N).url
      })
    }), (0, a.jsxs)("div", {
      className: v.partnerContentContainer,
      children: [(0, a.jsxs)("div", {
        className: v.partnerCopyContainer,
        children: [(0, a.jsx)(s.X6q, {
          variant: "heading-lg/bold",
          color: "header-primary",
          className: v.partnerTitle,
          children: n.config.messages.questName
        }), (0, a.jsx)(s.xvT, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: b
        })]
      }), (0, a.jsx)("img", {
        className: v.partnerGameTile,
        alt: g.intl.formatToPlainString(g.t.rtm15O, {
          name: n.config.messages.gameTitle
        }),
        src: (0, C.fh)(n, C.eC.GAME_TILE, N).url
      })]
    }), (0, a.jsx)("div", {
      className: v.partnerCtaContainer,
      children: (0, a.jsx)(s.zxk, {
        variant: "primary",
        size: "sm",
        text: y,
        onClick: () => {
          (0, u.nc)(n, {
            content: p.jn.REWARD_MODAL,
            ctaContent: c.jZ.OPEN_GAME_LINK,
            impressionId: T,
            sourceQuestContent: t
          })
        },
        fullWidth: true,
        icon: s.zFc,
        iconPosition: "end"
      })
    })]
  })
}