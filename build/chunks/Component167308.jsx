/** Chunk was on 88499 **/
/** chunk id: 167308, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk49436 = require("./49436.js"),
  Chunk373370 = require("./373370.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk444134 = require("./444134.jsx"),
  Chunk836831 = require("./836831.jsx"),
  Chunk324805 = require("./324805.js"),
  Chunk835343 = require("./835343.js");
let m = e => {
  let {
    contentLocation: t,
    quest: n,
    progressBarRef: m,
    isExpanded: p,
    percentComplete: h,
    activeScreen: x,
    popoutTargetElementRef: f,
    onGameSheetOpened: g,
    onGameSheetClosed: b
  } = e, v = (0, l.eQ)(n), j = (0, l.vf)({
    quest: n,
    isExpanded: p,
    activeScreen: x,
    sourceQuestContent: i.jn.QUEST_BAR_V2,
    popoutTargetElementRef: f,
    onGameSheetOpened: g,
    onGameSheetClosed: b
  });
  return (0, a.jsxs)("div", {
    className: u.questProgressWrapper,
    children: [(0, a.jsx)(o.JC, {
      inState: t,
      id: "progress-bar",
      ref: m,
      children: e => (0, a.jsx)(c.Z, {
        ref: e,
        quest: n,
        percentComplete: h,
        size: 42,
        strokeWidth: 3,
        children: (0, a.jsx)(s.Z, {
          className: u.questProgressRewardTile,
          quest: n,
          questContent: i.jn.QUEST_BAR_V2,
          autoplay: false,
          location: d.dr.QUESTS_BAR,
          sourceQuestContent: i.jn.QUEST_BAR_V2
        })
      })
    }), (0, a.jsxs)("div", {
      className: u.questProgressCopy,
      children: [(0, a.jsx)(o.JC, {
        inState: t,
        id: "progress-title",
        children: e => (0, a.jsx)(r.Text, {
          ref: e,
          className: u.questProgressHint,
          color: "text-strong",
          variant: "text-sm/semibold",
          children: v
        })
      }), (0, a.jsx)(o.JC, {
        inState: t,
        id: "progress-subtitle",
        isTextTransition: true,
        children: e => (0, a.jsx)(r.Text, {
          ref: e,
          className: u.questProgressHint,
          color: "text-muted",
          variant: "text-xs/normal",
          children: j
        })
      })]
    })]
  })
}