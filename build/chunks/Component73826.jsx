/** Chunk was on 22979 **/
/** chunk id: 73826, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk81239 = require("./81239.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk49436 = require("./49436.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk444134 = require("./444134.jsx"),
  Chunk526188 = require("./526188.jsx"),
  Chunk617889 = require("./617889.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk964907 = require("./964907.js");
let g = e => {
  let {
    isFullyExpanded: t,
    partnerBranding: n
  } = e, i = (0, f.qe)().label, g = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), {
    quest: v
  } = r.useContext(h.A), {
    expansionSpring: j
  } = r.useContext(p.xo), y = i ? false : 6;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.animated.div, {
      className: x.rewardTileContainer,
      style: {
        transform: (0, s.to)([j.to({
          range: [0, 1],
          output: [0, 0]
        }), j.to({
          range: [0, 1],
          output: [0, 82]
        }), j.to({
          range: [0, 1],
          output: [1, 64 / 48]
        })], (e, t, n) => "translate(".concat(e, "px, ").concat(t, "px) scale(").concat(n, ")"))
      },
      children: (0, a.jsx)(m.Z, {
        learnMoreStyle: "text",
        learnMoreFontSize: t ? 9 : true,
        quest: v,
        questContent: u.jn.QUEST_BAR_V2,
        autoplay: t && !g,
        sourceQuestContent: u.jn.QUEST_BAR_V2,
        style: {
          width: 48,
          height: 48,
          marginRight: 8,
          borderRadius: 6
        }
      })
    }), (0, a.jsxs)(s.animated.div, {
      className: l()(x.rewardHighlightLogoCTA, {
        [x.rewardHighlightLogoCTALabel]: i
      }),
      style: {
        transform: (0, s.to)([j.to({
          range: [0, 1],
          output: [0, false]
        }), j.to({
          range: [0, 1],
          output: [0, y]
        })], (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"))
      },
      children: [(0, a.jsx)("div", {
        className: l()({
          [x.partnerBranding]: !i
        }),
        children: n
      }), (0, a.jsx)(s.animated.div, {
        className: l()(x.rewardHighlightCTA, {
          [x.rewardHighlightCTALabel]: i
        }),
        style: {
          opacity: j.to({
            range: [0, 1],
            output: [i ? 1 : .7, 0]
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