/** Chunk was on 83615 **/
/** chunk id: 167308, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
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
let p = e => {
  let {
    contentLocation: t,
    quest: n,
    progressBarRef: p,
    isExpanded: m,
    percentComplete: f,
    activeScreen: g,
    popoutTargetElementRef: x,
    onGameSheetOpened: h,
    onGameSheetClosed: _
  } = e, b = (0, a.eQ)(n), j = (0, a.vf)({
    quest: n,
    isExpanded: m,
    activeScreen: g,
    sourceQuestContent: o.jn.QUEST_BAR_V2,
    popoutTargetElementRef: x,
    onGameSheetOpened: h,
    onGameSheetClosed: _
  });
  return (0, r.jsxs)("div", {
    className: d.questProgressWrapper,
    children: [(0, r.jsx)(l.JC, {
      inState: t,
      id: "progress-bar",
      ref: p,
      children: e => (0, r.jsx)(c.Z, {
        ref: e,
        quest: n,
        percentComplete: f,
        size: 42,
        strokeWidth: 3,
        children: (0, r.jsx)(i.Z, {
          className: d.questProgressRewardTile,
          quest: n,
          questContent: o.jn.QUEST_BAR_V2,
          autoplay: false,
          location: u.dr.QUESTS_BAR,
          sourceQuestContent: o.jn.QUEST_BAR_V2
        })
      })
    }), (0, r.jsxs)("div", {
      className: d.questProgressCopy,
      children: [(0, r.jsx)(l.JC, {
        inState: t,
        id: "progress-title",
        children: e => (0, r.jsx)(s.Text, {
          ref: e,
          className: d.questProgressHint,
          color: "header-primary",
          variant: "text-sm/semibold",
          children: b
        })
      }), (0, r.jsx)(l.JC, {
        inState: t,
        id: "progress-subtitle",
        isTextTransition: true,
        children: e => (0, r.jsx)(s.Text, {
          ref: e,
          className: d.questProgressHint,
          color: "text-muted",
          variant: "text-xs/normal",
          children: j
        })
      })]
    })]
  })
}