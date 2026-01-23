/** Chunk was on 36054 **/
/** chunk id: 277928, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk341915 = require("./341915.js"),
  Chunk714510 = require("./714510.js"),
  Chunk646764 = require("./646764.jsx"),
  Chunk568329 = require("./568329.jsx"),
  Chunk453384 = require("./453384.jsx"),
  Chunk963713 = require("./963713.jsx"),
  Chunk128478 = require("./128478.js");
let p = e => {
  let {
    isExpanded: t,
    contentLocation: n,
    progressBarRef: p,
    percentComplete: h,
    activeScreen: x,
    popoutTargetElementRef: g
  } = e, {
    quest: f,
    onGameSheetOpen: b,
    onGameSheetClose: v
  } = l.useContext(u.T), j = (0, s.VX)(f), _ = (0, s.tH)({
    quest: f,
    isExpanded: t,
    activeScreen: x,
    sourceQuestContent: i.uF.QUEST_BAR_V2,
    popoutTargetElementRef: g,
    onGameSheetOpened: b,
    onGameSheetClosed: v
  });
  return (0, a.jsxs)("div", {
    className: m.Z0,
    children: [(0, a.jsx)(c.dN, {
      inState: n,
      id: "progress-bar",
      ref: p,
      children: e => (0, a.jsx)(d.A, {
        ref: e,
        quest: f,
        percentComplete: h,
        size: 42,
        strokeWidth: 3,
        children: (0, a.jsx)(o.A, {
          className: m.vt,
          quest: f,
          questContent: i.uF.QUEST_BAR_V2,
          autoplay: false,
          sourceQuestContent: i.uF.QUEST_BAR_V2
        })
      })
    }), (0, a.jsxs)("div", {
      className: m.NZ,
      children: [(0, a.jsx)(c.dN, {
        inState: n,
        id: "progress-title",
        children: e => (0, a.jsx)(r.Text, {
          ref: e,
          className: m.FZ,
          color: "text-strong",
          variant: "text-sm/semibold",
          children: j
        })
      }), (0, a.jsx)(c.dN, {
        inState: n,
        id: "progress-subtitle",
        isTextTransition: true,
        children: e => (0, a.jsx)(r.Text, {
          ref: e,
          className: m.FZ,
          color: "text-muted",
          variant: "text-xs/normal",
          children: _
        })
      })]
    })]
  })
}