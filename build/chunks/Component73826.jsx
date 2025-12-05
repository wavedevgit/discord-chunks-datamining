/** Chunk was on 83615 **/
/** chunk id: 73826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
  Chunk481060 = require("./481060.js"),
  Chunk49436 = require("./49436.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk617889 = require("./617889.js"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk905952 = require("./905952.js");
let f = e => {
  let {
    quest: t,
    expansionSpring: n,
    isFullyExpanded: s,
    partnerBranding: f,
    useReducedMotion: g
  } = e, x = (0, u.qe)().label, h = x ? false : 6;
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
          output: [1, 64 / 48]
        })], (e, t, n) => "translate(".concat(e, "px, ").concat(t, "px) scale(").concat(n, ")"))
      },
      children: (0, r.jsx)(c.Z, {
        learnMoreStyle: "text",
        learnMoreFontSize: s ? 9 : true,
        quest: t,
        questContent: l.jn.QUEST_BAR_V2,
        location: d.dr.QUESTS_BAR,
        autoplay: s && !g,
        sourceQuestContent: l.jn.QUEST_BAR_V2,
        style: {
          width: 48,
          height: 48,
          marginRight: 8,
          borderRadius: 6
        }
      })
    }), (0, r.jsxs)(a.animated.div, {
      className: o()(m.rewardHighlightLogoCTA, {
        [m.rewardHighlightLogoCTALabel]: x
      }),
      style: {
        transform: (0, a.to)([n.to({
          range: [0, 1],
          output: [0, false]
        }), n.to({
          range: [0, 1],
          output: [0, h]
        })], (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"))
      },
      children: [(0, r.jsx)("div", {
        className: o()({
          [m.partnerBranding]: !x
        }),
        children: f
      }), (0, r.jsx)(a.animated.div, {
        className: o()(m.rewardHighlightCTA, {
          [m.rewardHighlightCTALabel]: x
        }),
        style: {
          opacity: n.to({
            range: [0, 1],
            output: [x ? 1 : .7, 0]
          })
        },
        children: (0, r.jsx)(i.Text, {
          color: "always-white",
          lineClamp: 1,
          variant: "text-xs/medium",
          children: p.intl.string(p.t["3mgEQf"])
        })
      })]
    })]
  })
}