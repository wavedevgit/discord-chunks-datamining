/** Chunk was on 21046 **/
/** chunk id: 303385, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk815061 = require("./815061.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497505 = require("./497505.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk895758 = require("./895758.js");
let u = e => {
  let {
    quest: t,
    expansionSpring: n,
    isFullyExpanded: u,
    partnerBranding: p,
    useReducedMotion: m
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: d.rewardTileSpacer
    }), (0, r.jsx)(s.animated.div, {
      className: d.rewardTileContainer,
      style: {
        transform: (0, s.to)([n.to({
          range: [0, 1],
          output: [false, 0]
        }), n.to({
          range: [0, 1],
          output: [0, 92]
        }), n.to({
          range: [1, 0],
          output: [1, .75]
        })], (e, t, n) => "translate(".concat(e, "px, ").concat(t, "px) scale(").concat(n, ")"))
      },
      children: (0, r.jsx)(i.Z, {
        learnMoreStyle: "text",
        quest: t,
        questContent: a.jn.QUEST_BAR_V2,
        location: l.dr.QUESTS_BAR,
        autoplay: u && !m,
        sourceQuestContent: a.jn.QUEST_BAR_V2
      })
    }), (0, r.jsxs)(s.animated.div, {
      className: d.rewardHighlightLogoCTA,
      style: {
        transform: (0, s.to)([n.to({
          range: [0, 1],
          output: [0, false]
        }), n.to({
          range: [0, 1],
          output: [0, 8]
        })], (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"))
      },
      children: [(0, r.jsx)("div", {
        className: d.partnerBranding,
        children: p
      }), (0, r.jsx)(s.animated.div, {
        className: d.rewardHighlightCTA,
        style: {
          opacity: n.to({
            range: [0, 1],
            output: [.7, 0]
          })
        },
        children: (0, r.jsx)(o.Text, {
          color: "always-white",
          variant: "text-xs/medium",
          children: c.intl.string(c.t["1Wvve3"])
        })
      })]
    })]
  })
}