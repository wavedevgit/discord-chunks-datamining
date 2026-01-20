/** Chunk was on 22979 **/
/** chunk id: 167308, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
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
  Chunk674293 = require("./674293.js");
let p = e => {
  let {
    isExpanded: t,
    contentLocation: n,
    progressBarRef: p,
    percentComplete: h,
    activeScreen: f,
    popoutTargetElementRef: b
  } = e, {
    quest: x,
    onGameSheetOpen: g,
    onGameSheetClose: v
  } = r.useContext(u.A), j = (0, s.eQ)(x), y = (0, s.vf)({
    quest: x,
    isExpanded: t,
    activeScreen: f,
    sourceQuestContent: l.jn.QUEST_BAR_V2,
    popoutTargetElementRef: b,
    onGameSheetOpened: g,
    onGameSheetClosed: v
  });
  return (0, a.jsxs)("div", {
    className: m.questProgressWrapper,
    children: [(0, a.jsx)(c.JC, {
      inState: n,
      id: "progress-bar",
      ref: p,
      children: e => (0, a.jsx)(d.Z, {
        ref: e,
        quest: x,
        percentComplete: h,
        size: 42,
        strokeWidth: 3,
        children: (0, a.jsx)(o.Z, {
          className: m.questProgressRewardTile,
          quest: x,
          questContent: l.jn.QUEST_BAR_V2,
          autoplay: false,
          sourceQuestContent: l.jn.QUEST_BAR_V2
        })
      })
    }), (0, a.jsxs)("div", {
      className: m.questProgressCopy,
      children: [(0, a.jsx)(c.JC, {
        inState: n,
        id: "progress-title",
        children: e => (0, a.jsx)(i.Text, {
          ref: e,
          className: m.questProgressHint,
          color: "text-strong",
          variant: "text-sm/semibold",
          children: j
        })
      }), (0, a.jsx)(c.JC, {
        inState: n,
        id: "progress-subtitle",
        isTextTransition: true,
        children: e => (0, a.jsx)(i.Text, {
          ref: e,
          className: m.questProgressHint,
          color: "text-muted",
          variant: "text-xs/normal",
          children: y
        })
      })]
    })]
  })
}