/** Chunk was on web.js **/
/** chunk id: 877109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk415104 = require("./415104.jsx"),
  Chunk818923 = require("./818923.js");
let u = function(e) {
  let {
    questId: t
  } = e, n = (0, i.e7)([o.Z], () => null != t ? o.Z.getQuest(t) : true, [t]);
  return null == n ? (0, r.jsxs)("div", {
    className: c.errorBoundary,
    children: [(0, r.jsx)(a.Mgn, {
      className: c.errorBoundaryIcon
    }), (0, r.jsx)(a.X6q, {
      variant: "heading-lg/semibold",
      children: "Welcome to the Ad preview Tool"
    }), (0, r.jsx)(a.Zbd, {
      className: c.errorMessageWrapper,
      children: (0, r.jsx)("code", {
        className: c.errorMessage,
        children: "Unable to load Quest"
      })
    })]
  }) : (0, r.jsxs)("div", {
    className: c.errorBoundary,
    children: [(0, r.jsx)(a.qDn, {
      className: c.questsIcon
    }), (0, r.jsx)(a.X6q, {
      variant: "heading-lg/semibold",
      children: "Welcome to the Ad preview Tool"
    }), (0, r.jsx)(a.Zbd, {
      className: c.errorMessageWrapper,
      children: (0, r.jsx)("code", {
        className: c.errorMessage,
        children: n.config.messages.questName
      })
    }), (0, r.jsxs)(a.Zbd, {
      className: c.previewCard,
      children: [(0, r.jsx)(a.X6q, {
        className: c.heading,
        variant: "heading-lg/semibold",
        children: "Discovery Card"
      }), (0, r.jsx)(l.Z, {
        className: c.questTile,
        quest: n,
        questContent: s.jn.QUEST_HOME_DESKTOP,
        contentPosition: 0,
        rowIndex: 0,
        sourceQuestContent: s.jn.INTERNAL_PREVIEW_TOOL
      })]
    })]
  })
}