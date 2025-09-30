/** Chunk was on 17013 **/
/** chunk id: 303385, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk488290 = require("./488290.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497505 = require("./497505.js"),
  Chunk685138 = require("./685138.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk895758 = require("./895758.js");
let g = (0, Chunk488290.animated)(Chunk481060.izJ),
  f = e => {
    let {
      quest: t,
      expansionSpring: n,
      isFullyExpanded: s,
      partnerBranding: f,
      useReducedMotion: h
    } = e, {
      status: x
    } = (0, c.n)({
      location: u.dr.QUESTS_BAR,
      questConfig: t.config
    }), _ = null == x ? true : x.progressBlur, b = (null == x ? true : x.label1) || (null == x ? true : x.label2), j = null == x ? true : x.shineWipe, v = _ ? 70 : 48, C = _ ? 12 : 8, y = _ ? false : false, O = _ ? 0 : b ? false : 6;
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
            output: [1, 64 / v]
          })], (e, t, n) => "translate(".concat(e, "px, ").concat(t, "px) scale(").concat(n, ")"))
        },
        children: (0, r.jsx)(d.Z, {
          learnMoreStyle: "text",
          learnMoreFontSize: s ? v / 64 * 12 : true,
          quest: t,
          questContent: l.jn.QUEST_BAR_V2,
          location: u.dr.QUESTS_BAR,
          autoplay: s && !h,
          sourceQuestContent: l.jn.QUEST_BAR_V2,
          showShine: !j,
          style: {
            width: v,
            height: v,
            marginRight: C,
            borderRadius: v / 64 * 8
          }
        })
      }), (0, r.jsxs)(a.animated.div, {
        className: o()(m.rewardHighlightLogoCTA, {
          [m.rewardHighlightLogoCTAHeightBoost]: _,
          [m.rewardHighlightLogoCTALabel]: b
        }),
        style: {
          height: _ ? v : true,
          transform: (0, a.to)([n.to({
            range: [0, 1],
            output: [0, y]
          }), n.to({
            range: [0, 1],
            output: [0, O]
          })], (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"))
        },
        children: [(0, r.jsx)("div", {
          className: o()({
            [m.partnerBranding]: !_ && !b
          }),
          children: f
        }), _ && (0, r.jsx)(g, {
          className: m.rewardHighlightLogoCTADivider,
          style: {
            opacity: n.to({
              range: [0, 1],
              output: [.1, 0]
            })
          }
        }), (0, r.jsx)(a.animated.div, {
          className: o()(m.rewardHighlightCTA, {
            [m.rewardHighlightCTALabel]: b
          }),
          style: {
            opacity: n.to({
              range: [0, 1],
              output: [b ? 1 : .7, 0]
            })
          },
          children: (0, r.jsx)(i.Text, {
            color: "always-white",
            lineClamp: 1,
            variant: "text-xs/medium",
            children: p.intl.string((null == x ? true : x.label2) ? p.t["3mgEQU"] : p.t["1Wvve3"])
          })
        })]
      })]
    })
  }