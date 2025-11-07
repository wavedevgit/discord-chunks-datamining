/** Chunk was on 10150 **/
/** chunk id: 303385, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk509442 = require("./509442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497505 = require("./497505.js"),
  Chunk685138 = require("./685138.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk895758 = require("./895758.js");
let g = e => {
  let {
    quest: t,
    expansionSpring: n,
    isFullyExpanded: s,
    partnerBranding: g,
    useReducedMotion: f
  } = e, {
    status: h
  } = (0, c.n)({
    location: u.dr.QUESTS_BAR,
    questConfig: t.config
  }), x = null == h ? true : h.progressBlur, j = (null == h ? true : h.label1) || (null == h ? true : h.label2), b = null == h ? true : h.shineWipe, _ = x ? 70 : 48, v = x ? 12 : 8, C = x ? false : false, y = x ? 0 : j ? false : 6;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.animated.div, {
      className: m.rewardTileContainer,
      style: {
        transform: (0, a.to)([n.to({
          range: [0, 1],
          output: [0, 0]
        }), n.to({
          range: [0, 1],
          output: [0, 82]
        }), n.to({
          range: [0, 1],
          output: [1, 64 / _]
        })], (e, t, n) => "translate(".concat(e, "px, ").concat(t, "px) scale(").concat(n, ")"))
      },
      children: (0, r.jsx)(d.Z, {
        learnMoreStyle: "text",
        learnMoreFontSize: s ? _ / 64 * 12 : true,
        quest: t,
        questContent: l.jn.QUEST_BAR_V2,
        location: u.dr.QUESTS_BAR,
        autoplay: s && !f,
        sourceQuestContent: l.jn.QUEST_BAR_V2,
        showShine: !b,
        style: {
          width: _,
          height: _,
          marginRight: v,
          borderRadius: _ / 64 * 8
        }
      })
    }), (0, r.jsxs)(a.animated.div, {
      className: o()(m.rewardHighlightLogoCTA, {
        [m.rewardHighlightLogoCTAHeightBoost]: x,
        [m.rewardHighlightLogoCTALabel]: j
      }),
      style: {
        height: x ? _ : true,
        transform: (0, a.to)([n.to({
          range: [0, 1],
          output: [0, C]
        }), n.to({
          range: [0, 1],
          output: [0, y]
        })], (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"))
      },
      children: [(0, r.jsx)("div", {
        className: o()({
          [m.partnerBranding]: !x && !j
        }),
        children: g
      }), x && (0, r.jsx)(a.animated.div, {
        className: m.rewardHighlightLogoCTADivider,
        style: {
          opacity: n.to({
            range: [0, 1],
            output: [.1, 0]
          })
        }
      }), (0, r.jsx)(a.animated.div, {
        className: o()(m.rewardHighlightCTA, {
          [m.rewardHighlightCTALabel]: j
        }),
        style: {
          opacity: n.to({
            range: [0, 1],
            output: [j ? 1 : .7, 0]
          })
        },
        children: (0, r.jsx)(i.Text, {
          color: "always-white",
          lineClamp: 1,
          variant: "text-xs/medium",
          children: p.intl.string((null == h ? true : h.label2) ? p.t["3mgEQf"] : p.t["1Wvve2"])
        })
      })]
    })]
  })
}