/** Chunk was on 88499 **/
/** chunk id: 73826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk49436 = require("./49436.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk617889 = require("./617889.js"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk905952 = require("./905952.js");
let h = e => {
  let {
    quest: t,
    expansionSpring: n,
    isFullyExpanded: r,
    partnerBranding: h,
    useReducedMotion: x
  } = e, f = (0, d.qe)().label, g = f ? false : 6;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.animated.div, {
      className: p.rewardTileContainer,
      style: {
        transform: (0, l.to)([n.to({
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
      children: (0, a.jsx)(c.Z, {
        learnMoreStyle: "text",
        learnMoreFontSize: r ? 9 : true,
        quest: t,
        questContent: o.jn.QUEST_BAR_V2,
        location: u.dr.QUESTS_BAR,
        autoplay: r && !x,
        sourceQuestContent: o.jn.QUEST_BAR_V2,
        style: {
          width: 48,
          height: 48,
          marginRight: 8,
          borderRadius: 6
        }
      })
    }), (0, a.jsxs)(l.animated.div, {
      className: i()(p.rewardHighlightLogoCTA, {
        [p.rewardHighlightLogoCTALabel]: f
      }),
      style: {
        transform: (0, l.to)([n.to({
          range: [0, 1],
          output: [0, false]
        }), n.to({
          range: [0, 1],
          output: [0, g]
        })], (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"))
      },
      children: [(0, a.jsx)("div", {
        className: i()({
          [p.partnerBranding]: !f
        }),
        children: h
      }), (0, a.jsx)(l.animated.div, {
        className: i()(p.rewardHighlightCTA, {
          [p.rewardHighlightCTALabel]: f
        }),
        style: {
          opacity: n.to({
            range: [0, 1],
            output: [f ? 1 : .7, 0]
          })
        },
        children: (0, a.jsx)(s.Text, {
          color: "always-white",
          lineClamp: 1,
          variant: "text-xs/medium",
          children: m.intl.string(m.t["3mgEQf"])
        })
      })]
    })]
  })
}