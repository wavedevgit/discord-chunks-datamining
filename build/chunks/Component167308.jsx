/** Chunk was on 23736 **/
/** chunk id: 167308, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk49436 = require("./49436.js"),
  Chunk373370 = require("./373370.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk444134 = require("./444134.jsx"),
  Chunk836831 = require("./836831.jsx"),
  Chunk526188 = require("./526188.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk674293 = require("./674293.js");
let h = e => {
  let {
    isExpanded: t,
    contentLocation: n,
    progressBarRef: h,
    percentComplete: f,
    activeScreen: x,
    popoutTargetElementRef: b
  } = e, {
    quest: g,
    onGameSheetOpen: v,
    onGameSheetClose: j
  } = r.useContext(u.A), y = (0, s.eQ)(g), C = (0, s.vf)({
    quest: g,
    isExpanded: t,
    activeScreen: x,
    sourceQuestContent: l.jn.QUEST_BAR_V2,
    popoutTargetElementRef: b,
    onGameSheetOpened: v,
    onGameSheetClosed: j
  });
  return (0, a.jsxs)("div", {
    className: p.questProgressWrapper,
    children: [(0, a.jsx)(c.JC, {
      inState: n,
      id: "progress-bar",
      ref: h,
      children: e => (0, a.jsx)(d.Z, {
        ref: e,
        quest: g,
        percentComplete: f,
        size: 42,
        strokeWidth: 3,
        children: (0, a.jsx)(o.Z, {
          className: p.questProgressRewardTile,
          quest: g,
          questContent: l.jn.QUEST_BAR_V2,
          autoplay: false,
          location: m.dr.QUESTS_BAR,
          sourceQuestContent: l.jn.QUEST_BAR_V2
        })
      })
    }), (0, a.jsxs)("div", {
      className: p.questProgressCopy,
      children: [(0, a.jsx)(c.JC, {
        inState: n,
        id: "progress-title",
        children: e => (0, a.jsx)(i.Text, {
          ref: e,
          className: p.questProgressHint,
          color: "text-strong",
          variant: "text-sm/semibold",
          children: y
        })
      }), (0, a.jsx)(c.JC, {
        inState: n,
        id: "progress-subtitle",
        isTextTransition: true,
        children: e => (0, a.jsx)(i.Text, {
          ref: e,
          className: p.questProgressHint,
          color: "text-muted",
          variant: "text-xs/normal",
          children: C
        })
      })]
    })]
  })
}