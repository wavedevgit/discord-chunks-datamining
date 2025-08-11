/** Chunk was on 37082 **/
/** chunk id: 95985, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk613087 = require("./613087.jsx"),
  Chunk472144 = require("./472144.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk505939 = require("./505939.js");
let p = e => {
  let {
    contentLocation: t,
    quest: n,
    progressBarRef: p,
    isExpanded: m,
    percentComplete: g,
    activeScreen: f
  } = e, x = (0, o.eQ)(n), h = (0, o.vf)({
    quest: n,
    isExpanded: m,
    activeScreen: f,
    sourceQuestContent: a.jn.QUEST_BAR_V2
  });
  return (0, r.jsxs)("div", {
    className: d.questProgressWrapper,
    children: [(0, r.jsx)(l.l7, {
      inState: t,
      id: "progress-bar",
      ref: p,
      children: e => (0, r.jsx)(c.Z, {
        ref: e,
        quest: n,
        percentComplete: g,
        size: 42,
        strokeWidth: 3,
        children: (0, r.jsx)(i.Z, {
          className: d.questProgressRewardTile,
          quest: n,
          questContent: a.jn.QUEST_BAR_V2,
          autoplay: false,
          location: u.dr.QUESTS_BAR,
          sourceQuestContent: a.jn.QUEST_BAR_V2
        })
      })
    }), (0, r.jsxs)("div", {
      className: d.questProgressCopy,
      children: [(0, r.jsx)(l.l7, {
        inState: t,
        id: "progress-title",
        children: e => (0, r.jsx)(s.Text, {
          ref: e,
          className: d.questProgressHint,
          color: "header-primary",
          variant: "text-sm/semibold",
          children: x
        })
      }), (0, r.jsx)(l.l7, {
        inState: t,
        id: "progress-subtitle",
        isTextTransition: true,
        children: e => (0, r.jsx)(s.Text, {
          ref: e,
          className: d.questProgressHint,
          color: "text-muted",
          variant: "text-xs/normal",
          children: h
        })
      })]
    })]
  })
}