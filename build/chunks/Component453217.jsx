/** Chunk was on web.js **/
/** chunk id: 453217, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk803948 = require("./803948.js"),
  Chunk481060 = require("./481060.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk685613 = require("./685613.jsx"),
  Chunk340100 = require("./340100.jsx"),
  Chunk644646 = require("./644646.jsx"),
  Chunk788284 = require("./788284.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk785421 = require("./785421.js");
let g = function(e) {
  var t;
  let {
    className: n,
    expansionSpring: i,
    isExpanded: g,
    isExpansionAnimationComplete: E,
    quest: b,
    useReducedMotion: y
  } = e, O = (null == (t = b.userStatus) ? true : t.enrolledAt) != null, {
    percentComplete: v
  } = (0, l.Rf)(b), I = (0, l.Jf)(b), T = null != I ? I.percentComplete > 0 : v > 0;
  return (0, r.jsxs)(o.animated.div, {
    "aria-hidden": g && E,
    className: a()(n, m.contentCollapsed, {
      [m.contentCollapsedExpanded]: g,
      [m.contentCollapsedAccepted]: O
    }),
    style: {
      opacity: i.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [(0, r.jsx)(_.Z, {
      quest: b,
      useReducedMotion: y
    }), (0, r.jsx)("div", {
      className: m.contentCollapsedWrapper,
      children: O ? (0, r.jsxs)("div", {
        className: m.questProgressWrapper,
        children: [(0, r.jsx)(f.Z, {
          className: m.questProgressRewardTile,
          quest: b,
          questContent: c.jn.QUEST_BAR,
          autoplay: false,
          location: p.dr.QUESTS_BAR,
          sourceQuestContent: c.jn.QUEST_BAR
        }), T ? (0, r.jsx)(d.Z, {
          className: m.questProgressBar,
          quest: b
        }) : (0, r.jsx)(s.Text, {
          className: m.questProgressHint,
          color: "always-white",
          variant: "text-sm/semibold",
          children: h.intl.string(h.t["7e5k7O"])
        })]
      }) : (0, r.jsxs)("div", {
        className: m.brandingWrapper,
        children: [(0, r.jsx)(u.ZP, {
          className: m.partnerBranding,
          quest: b
        }), (0, r.jsx)(s.X6q, {
          color: "always-white",
          variant: "heading-sm/medium",
          className: m.questName,
          children: h.intl.format(h.t.EAYZAg, {
            questName: b.config.messages.questName
          })
        })]
      })
    })]
  })
}