/** Chunk was on 10150 **/
/** chunk id: 95985, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk613087 = require("./613087.jsx"),
  Chunk472144 = require("./472144.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk245565 = require("./245565.js");
let p = e => {
  let {
    contentLocation: t,
    quest: n,
    progressBarRef: p,
    isExpanded: m,
    percentComplete: g,
    activeScreen: f,
    popoutTargetElementRef: h,
    onGameSheetOpened: x,
    onGameSheetClosed: j
  } = e, _ = (0, o.eQ)(n), b = (0, o.vf)({
    quest: n,
    isExpanded: m,
    activeScreen: f,
    sourceQuestContent: a.jn.QUEST_BAR_V2,
    popoutTargetElementRef: h,
    onGameSheetOpened: x,
    onGameSheetClosed: j
  });
  return (0, r.jsxs)("div", {
    className: u.questProgressWrapper,
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
          className: u.questProgressRewardTile,
          quest: n,
          questContent: a.jn.QUEST_BAR_V2,
          autoplay: false,
          location: d.dr.QUESTS_BAR,
          sourceQuestContent: a.jn.QUEST_BAR_V2
        })
      })
    }), (0, r.jsxs)("div", {
      className: u.questProgressCopy,
      children: [(0, r.jsx)(l.l7, {
        inState: t,
        id: "progress-title",
        children: e => (0, r.jsx)(s.Text, {
          ref: e,
          className: u.questProgressHint,
          color: "header-primary",
          variant: "text-sm/semibold",
          children: _
        })
      }), (0, r.jsx)(l.l7, {
        inState: t,
        id: "progress-subtitle",
        isTextTransition: true,
        children: e => (0, r.jsx)(s.Text, {
          ref: e,
          className: u.questProgressHint,
          color: "text-muted",
          variant: "text-xs/normal",
          children: b
        })
      })]
    })]
  })
}