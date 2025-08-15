/** Chunk was on 9885 **/
/** chunk id: 453217, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
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
    isExpansionAnimationComplete: j,
    quest: b,
    useReducedMotion: _
  } = e, v = (null == (t = b.userStatus) ? true : t.enrolledAt) != null, {
    percentComplete: C
  } = (0, l.Rf)(b), y = (0, l.Jf)(b), E = null != y ? y.percentComplete > 0 : C > 0;
  return (0, r.jsxs)(a.animated.div, {
    "aria-hidden": h && j,
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
      quest: b,
      useReducedMotion: _
    }), (0, r.jsx)("div", {
      className: x.contentCollapsedWrapper,
      children: v ? (0, r.jsxs)("div", {
        className: x.questProgressWrapper,
        children: [(0, r.jsx)(p.Z, {
          className: x.questProgressRewardTile,
          quest: b,
          questContent: c.jn.QUEST_BAR,
          autoplay: false,
          location: g.dr.QUESTS_BAR,
          sourceQuestContent: c.jn.QUEST_BAR
        }), E ? (0, r.jsx)(d.Z, {
          className: x.questProgressBar,
          quest: b
        }) : (0, r.jsx)(i.Text, {
          className: x.questProgressHint,
          color: "always-white",
          variant: "text-sm/semibold",
          children: f.intl.string(f.t["7e5k7O"])
        })]
      }) : (0, r.jsxs)("div", {
        className: x.brandingWrapper,
        children: [(0, r.jsx)(u.ZP, {
          className: x.partnerBranding,
          quest: b
        }), (0, r.jsx)(i.X6q, {
          color: "always-white",
          variant: "heading-sm/medium",
          className: x.questName,
          children: f.intl.format(f.t.EAYZAg, {
            questName: b.config.messages.questName
          })
        })]
      })
    })]
  })
}