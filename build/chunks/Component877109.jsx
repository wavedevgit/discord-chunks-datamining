/** Chunk was on web.js **/
/** chunk id: 877109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk272008 = require("./272008.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk415104 = require("./415104.jsx"),
  Chunk216074 = require("./216074.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk818923 = require("./818923.js");
let p = function(e) {
  let {
    questId: t
  } = e, n = (0, a.e7)([l.Z], () => null != t && l.Z.isFetchingQuestPreview(t), [t]), p = (0, a.e7)([l.Z], () => null != t ? l.Z.getQuest(t) : true, [t]), h = i.useRef(false);
  i.useEffect(() => {
    null == t || h.current || (h.current = true, (0, s.MG)(t))
  }, [t]);
  let m = () => {
    null != t && (0, s.MG)(t)
  };
  return null == p ? (0, r.jsxs)("div", {
    className: _.previewPage,
    children: [(0, r.jsx)(o.Mgn, {
      className: _.errorIcon
    }), (0, r.jsx)(o.X6q, {
      variant: "heading-lg/semibold",
      children: "Welcome to the Ad preview Tool"
    }), (0, r.jsx)(o.Zbd, {
      className: _.messageWrapper,
      children: (0, r.jsx)("code", {
        className: _.message,
        children: "Unable to load Quest"
      })
    })]
  }) : (0, r.jsxs)("div", {
    className: _.previewPage,
    children: [(0, r.jsx)(o.qDn, {
      className: _.questsIcon
    }), (0, r.jsx)(o.X6q, {
      variant: "heading-lg/semibold",
      children: "Welcome to the Ad preview Tool"
    }), (0, r.jsxs)("div", {
      className: _.menu,
      children: [(0, r.jsx)(o.Zbd, {
        className: _.messageWrapper,
        children: (0, r.jsx)("code", {
          className: _.message,
          children: p.config.messages.questName
        })
      }), (0, r.jsx)("div", {
        className: _.messageButton,
        children: (0, r.jsx)(o.hU, {
          onClick: m,
          "aria-label": f.intl.string(f.t.wzzjk5),
          icon: o.DuK,
          loading: n
        })
      })]
    }), (0, r.jsxs)(o.Zbd, {
      className: _.previewCard,
      children: [(0, r.jsx)(o.X6q, {
        className: _.heading,
        variant: "heading-lg/semibold",
        children: "Discovery Card"
      }), (0, r.jsx)(u.Z, {
        className: _.questTile,
        quest: p,
        questContent: c.jn.QUEST_HOME_DESKTOP,
        contentPosition: 0,
        rowIndex: 0,
        sourceQuestContent: c.jn.INTERNAL_PREVIEW_TOOL
      })]
    }), (0, r.jsx)(d.Z, {
      questId: p.id
    })]
  })
}