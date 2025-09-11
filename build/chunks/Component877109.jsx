/** Chunk was on web.js **/
/** chunk id: 877109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk272008 = require("./272008.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk415104 = require("./415104.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk818923 = require("./818923.js");
let _ = function(e) {
  let {
    questId: t
  } = e, n = (0, a.e7)([l.Z], () => null != t && l.Z.isFetchingQuestPreview(t), [t]), _ = (0, a.e7)([l.Z], () => null != t ? l.Z.getQuest(t) : true, [t]), p = i.useRef(false);
  i.useEffect(() => {
    null == t || p.current || (p.current = true, (0, s.MG)(t))
  }, [t]);
  let h = () => {
    null != t && (0, s.MG)(t)
  };
  return null == _ ? (0, r.jsxs)("div", {
    className: f.previewPage,
    children: [(0, r.jsx)(o.Mgn, {
      className: f.errorIcon
    }), (0, r.jsx)(o.X6q, {
      variant: "heading-lg/semibold",
      children: "Welcome to the Ad preview Tool"
    }), (0, r.jsx)(o.Zbd, {
      className: f.messageWrapper,
      children: (0, r.jsx)("code", {
        className: f.message,
        children: "Unable to load Quest"
      })
    })]
  }) : (0, r.jsxs)("div", {
    className: f.previewPage,
    children: [(0, r.jsx)(o.qDn, {
      className: f.questsIcon
    }), (0, r.jsx)(o.X6q, {
      variant: "heading-lg/semibold",
      children: "Welcome to the Ad preview Tool"
    }), (0, r.jsxs)("div", {
      className: f.menu,
      children: [(0, r.jsx)(o.Zbd, {
        className: f.messageWrapper,
        children: (0, r.jsx)("code", {
          className: f.message,
          children: _.config.messages.questName
        })
      }), (0, r.jsx)("div", {
        className: f.messageButton,
        children: (0, r.jsx)(o.hU, {
          onClick: h,
          "aria-label": d.intl.string(d.t.wzzjk5),
          icon: o.DuK,
          loading: n
        })
      })]
    }), (0, r.jsxs)(o.Zbd, {
      className: f.previewCard,
      children: [(0, r.jsx)(o.X6q, {
        className: f.heading,
        variant: "heading-lg/semibold",
        children: "Discovery Card"
      }), (0, r.jsx)(u.Z, {
        className: f.questTile,
        quest: _,
        questContent: c.jn.QUEST_HOME_DESKTOP,
        contentPosition: 0,
        rowIndex: 0,
        sourceQuestContent: c.jn.INTERNAL_PREVIEW_TOOL
      })]
    })]
  })
}