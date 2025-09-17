/** Chunk was on web.js **/
/** chunk id: 303385, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk938288 = require("./938288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497505 = require("./497505.js"),
  Chunk685138 = require("./685138.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk96656 = require("./96656.js");
let p = 64,
  h = 8,
  m = (0, Chunk938288.animated)(Chunk481060.$i$),
  g = e => {
    let {
      quest: t,
      expansionSpring: n,
      isFullyExpanded: i,
      partnerBranding: g,
      useReducedMotion: E
    } = e, {
      status: b
    } = (0, c.n)({
      location: d.dr.QUESTS_BAR,
      questConfig: t.config
    }), y = null == b ? true : b.progressBlur, O = (null == b ? true : b.label1) || (null == b ? true : b.label2), v = null == b ? true : b.shineWipe, I = y ? 70 : 48, T = y ? 12 : 8, S = y ? false : false, A = y ? 0 : O ? false : 6, C = 12;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.animated.div, {
        className: _.rewardTileContainer,
        style: {
          transform: (0, o.to)([n.to({
            range: [0, 1],
            output: [0, 0]
          }), n.to({
            range: [0, 1],
            output: [0, 82]
          }), n.to({
            range: [0, 1],
            output: [1, p / I]
          })], (e, t, n) => "translate(".concat(e, "px, ").concat(t, "px) scale(").concat(n, ")"))
        },
        children: (0, r.jsx)(u.Z, {
          learnMoreStyle: "text",
          learnMoreFontSize: i ? I / p * C : true,
          quest: t,
          questContent: l.jn.QUEST_BAR_V2,
          location: d.dr.QUESTS_BAR,
          autoplay: i && !E,
          sourceQuestContent: l.jn.QUEST_BAR_V2,
          showShine: !v,
          style: {
            width: I,
            height: I,
            marginRight: T,
            borderRadius: I / p * h
          }
        })
      }), (0, r.jsxs)(o.animated.div, {
        className: a()(_.rewardHighlightLogoCTA, {
          [_.rewardHighlightLogoCTAHeightBoost]: y,
          [_.rewardHighlightLogoCTALabel]: O
        }),
        style: {
          height: y ? I : true,
          transform: (0, o.to)([n.to({
            range: [0, 1],
            output: [0, S]
          }), n.to({
            range: [0, 1],
            output: [0, A]
          })], (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"))
        },
        children: [(0, r.jsx)("div", {
          className: a()({
            [_.partnerBranding]: !y && !O
          }),
          children: g
        }), y && (0, r.jsx)(m, {
          className: _.rewardHighlightLogoCTADivider,
          style: {
            opacity: n.to({
              range: [0, 1],
              output: [.1, 0]
            })
          }
        }), (0, r.jsx)(o.animated.div, {
          className: a()(_.rewardHighlightCTA, {
            [_.rewardHighlightCTALabel]: O
          }),
          style: {
            opacity: n.to({
              range: [0, 1],
              output: [O ? 1 : .7, 0]
            })
          },
          children: (0, r.jsx)(s.Text, {
            color: "always-white",
            lineClamp: 1,
            variant: "text-xs/medium",
            children: f.intl.string((null == b ? true : b.label2) ? f.t["3mgEQU"] : f.t["1Wvve3"])
          })
        })]
      })]
    })
  }