/** Chunk was on 21046 **/
/** chunk id: 453217, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk815061 = require("./815061.js"),
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
let h = function(e) {
  var t;
  let {
    className: n,
    expansionSpring: s,
    isExpanded: h,
    isExpansionAnimationComplete: b,
    quest: _,
    useReducedMotion: j
  } = e, v = (null == (t = _.userStatus) ? true : t.enrolledAt) != null, {
    percentComplete: C
  } = (0, l.Rf)(_), y = (0, l.Jf)(_), E = null != y ? y.percentComplete > 0 : C > 0;
  return (0, r.jsxs)(a.animated.div, {
    "aria-hidden": h && b,
    className: o()(n, x.contentCollapsed, {
      [x.contentCollapsedExpanded]: h,
      [x.contentCollapsedAccepted]: v
    }),
    style: {
      opacity: s.to({
        range: [0, 1],
        output: [1, 0]
      })
    },
    children: [(0, r.jsx)(m.Z, {
      quest: _,
      useReducedMotion: j
    }), (0, r.jsx)("div", {
      className: x.contentCollapsedWrapper,
      children: v ? (0, r.jsxs)("div", {
        className: x.questProgressWrapper,
        children: [(0, r.jsx)(p.Z, {
          className: x.questProgressRewardTile,
          quest: _,
          questContent: c.jn.QUEST_BAR,
          autoplay: false,
          location: f.dr.QUESTS_BAR,
          sourceQuestContent: c.jn.QUEST_BAR
        }), E ? (0, r.jsx)(u.Z, {
          className: x.questProgressBar,
          quest: _
        }) : (0, r.jsx)(i.Text, {
          className: x.questProgressHint,
          color: "always-white",
          variant: "text-sm/semibold",
          children: g.intl.string(g.t["7e5k7O"])
        })]
      }) : (0, r.jsxs)("div", {
        className: x.brandingWrapper,
        children: [(0, r.jsx)(d.ZP, {
          className: x.partnerBranding,
          quest: _
        }), (0, r.jsx)(i.X6q, {
          color: "always-white",
          variant: "heading-sm/medium",
          className: x.questName,
          children: g.intl.format(g.t.EAYZAg, {
            questName: _.config.messages.questName
          })
        })]
      })
    })]
  })
}