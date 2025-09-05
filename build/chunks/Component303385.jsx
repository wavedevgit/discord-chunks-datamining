/** Chunk was on web.js **/
/** chunk id: 303385, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk261616 = require("./261616.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497505 = require("./497505.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk96656 = require("./96656.js");
let d = 48,
  f = e => {
    let {
      quest: t,
      expansionSpring: n,
      isFullyExpanded: f,
      partnerBranding: _,
      useReducedMotion: p
    } = e;
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: u.rewardTileSpacer
      }), (0, r.jsx)(i.animated.div, {
        className: u.rewardTileContainer,
        style: {
          transform: (0, i.to)([n.to({
            range: [0, 1],
            output: [false, 0]
          }), n.to({
            range: [0, 1],
            output: [0, 92]
          }), n.to({
            range: [1, 0],
            output: [1, d / 64]
          })], (e, t, n) => "translate(".concat(e, "px, ").concat(t, "px) scale(").concat(n, ")"))
        },
        children: (0, r.jsx)(s.Z, {
          learnMoreStyle: "text",
          quest: t,
          questContent: o.jn.QUEST_BAR_V2,
          location: l.dr.QUESTS_BAR,
          autoplay: f && !p,
          sourceQuestContent: o.jn.QUEST_BAR_V2
        })
      }), (0, r.jsxs)(i.animated.div, {
        className: u.rewardHighlightLogoCTA,
        style: {
          transform: (0, i.to)([n.to({
            range: [0, 1],
            output: [0, false]
          }), n.to({
            range: [0, 1],
            output: [0, 8]
          })], (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"))
        },
        children: [(0, r.jsx)("div", {
          className: u.partnerBranding,
          children: _
        }), (0, r.jsx)(i.animated.div, {
          className: u.rewardHighlightCTA,
          style: {
            opacity: n.to({
              range: [0, 1],
              output: [.7, 0]
            })
          },
          children: (0, r.jsx)(a.Text, {
            color: "always-white",
            variant: "text-xs/medium",
            children: c.intl.string(c.t["1Wvve3"])
          })
        })]
      })]
    })
  }