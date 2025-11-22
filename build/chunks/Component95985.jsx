/** Chunk was on 83615 **/
/** chunk id: 95985, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk313481 = require("./313481.js"),
  Chunk49436 = require("./49436.js"),
  Chunk644646 = require("./644646.jsx"),
  Chunk613087 = require("./613087.jsx"),
  Chunk472144 = require("./472144.jsx"),
  Chunk324805 = require("./324805.js"),
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
    onGameSheetClosed: _
  } = e, b = (0, o.eQ)(n), j = (0, o.vf)({
    quest: n,
    isExpanded: m,
    activeScreen: f,
    sourceQuestContent: a.jn.QUEST_BAR_V2,
    popoutTargetElementRef: h,
    onGameSheetOpened: x,
    onGameSheetClosed: _
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
          children: b
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
          children: j
        })
      })]
    })]
  })
}