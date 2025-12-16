/** Chunk was on 29725 **/
/** chunk id: 73826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk236726 = require("./236726.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk49436 = require("./49436.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk444134 = require("./444134.jsx"),
  Chunk526188 = require("./526188.jsx"),
  Chunk617889 = require("./617889.js"),
  Chunk324805 = require("./324805.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk964907 = require("./964907.js");
let v = e => {
  let {
    isFullyExpanded: t,
    partnerBranding: n
  } = e, l = (0, f.qe)().label, v = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), {
    quest: j
  } = r.useContext(h.A), {
    expansionSpring: y
  } = r.useContext(p.xo), C = l ? false : 6;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.animated.div, {
      className: g.rewardTileContainer,
      style: {
        transform: (0, s.to)([y.to({
          range: [0, 1],
          output: [0, 0]
        }), y.to({
          range: [0, 1],
          output: [0, 82]
        }), y.to({
          range: [0, 1],
          output: [1, 64 / 48]
        })], (e, t, n) => "translate(".concat(e, "px, ").concat(t, "px) scale(").concat(n, ")"))
      },
      children: (0, a.jsx)(m.Z, {
        learnMoreStyle: "text",
        learnMoreFontSize: t ? 9 : true,
        quest: j,
        questContent: u.jn.QUEST_BAR_V2,
        location: x.dr.QUESTS_BAR,
        autoplay: t && !v,
        sourceQuestContent: u.jn.QUEST_BAR_V2,
        style: {
          width: 48,
          height: 48,
          marginRight: 8,
          borderRadius: 6
        }
      })
    }), (0, a.jsxs)(s.animated.div, {
      className: i()(g.rewardHighlightLogoCTA, {
        [g.rewardHighlightLogoCTALabel]: l
      }),
      style: {
        transform: (0, s.to)([y.to({
          range: [0, 1],
          output: [0, false]
        }), y.to({
          range: [0, 1],
          output: [0, C]
        })], (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"))
      },
      children: [(0, a.jsx)("div", {
        className: i()({
          [g.partnerBranding]: !l
        }),
        children: n
      }), (0, a.jsx)(s.animated.div, {
        className: i()(g.rewardHighlightCTA, {
          [g.rewardHighlightCTALabel]: l
        }),
        style: {
          opacity: y.to({
            range: [0, 1],
            output: [l ? 1 : .7, 0]
          })
        },
        children: (0, a.jsx)(c.Text, {
          color: "always-white",
          lineClamp: 1,
          variant: "text-xs/medium",
          children: b.intl.string(b.t["3mgEQf"])
        })
      })]
    })]
  })
}