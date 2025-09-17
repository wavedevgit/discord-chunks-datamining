/** Chunk was on web.js **/
/** chunk id: 877109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk272008 = require("./272008.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk415104 = require("./415104.jsx"),
  Chunk134483 = require("./134483.jsx"),
  Chunk216074 = require("./216074.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk818923 = require("./818923.js");
let h = function(e) {
  let {
    questId: t
  } = e, n = (0, a.e7)([l.Z], () => null != t && l.Z.isFetchingQuestPreview(t), [t]), h = (0, a.e7)([l.Z], () => null != t ? l.Z.getQuest(t) : true, [t]), m = i.useRef(false);
  i.useEffect(() => {
    null == t || m.current || (m.current = true, (0, s.MG)(t))
  }, [t]);
  let g = () => {
    null != t && (0, s.MG)(t)
  };
  return null == h ? (0, r.jsxs)("div", {
    className: p.previewPage,
    children: [(0, r.jsx)(o.Mgn, {
      className: p.errorIcon
    }), (0, r.jsx)(o.X6q, {
      variant: "heading-lg/semibold",
      children: "Welcome to the Ad preview Tool"
    }), (0, r.jsx)(o.Zbd, {
      className: p.messageWrapper,
      children: (0, r.jsx)("code", {
        className: p.message,
        children: "Unable to load Quest"
      })
    })]
  }) : (0, r.jsxs)("div", {
    className: p.previewPage,
    children: [(0, r.jsx)(o.qDn, {
      className: p.questsIcon
    }), (0, r.jsx)(o.X6q, {
      variant: "heading-lg/semibold",
      children: "Welcome to the Ad preview Tool"
    }), (0, r.jsxs)("div", {
      className: p.menu,
      children: [(0, r.jsx)(o.Zbd, {
        className: p.messageWrapper,
        children: (0, r.jsx)("code", {
          className: p.message,
          children: h.config.messages.questName
        })
      }), (0, r.jsx)("div", {
        className: p.messageButton,
        children: (0, r.jsx)(o.hU, {
          onClick: g,
          "aria-label": _.intl.string(_.t.wzzjk5),
          icon: o.DuK,
          loading: n
        })
      })]
    }), (0, r.jsxs)(o.Zbd, {
      className: p.previewCard,
      children: [(0, r.jsx)(o.X6q, {
        className: p.heading,
        variant: "heading-lg/semibold",
        children: "Discovery Card"
      }), (0, r.jsx)(u.Z, {
        className: p.questTile,
        quest: h,
        questContent: c.jn.QUEST_HOME_DESKTOP,
        contentPosition: 0,
        rowIndex: 0,
        sourceQuestContent: c.jn.INTERNAL_PREVIEW_TOOL
      })]
    }), (0, r.jsxs)(o.Zbd, {
      className: p.previewCard,
      children: [(0, r.jsx)(o.X6q, {
        className: p.heading,
        variant: "heading-lg/semibold",
        children: "Channel Call Header"
      }), (0, r.jsx)("div", {
        className: p.questChannelCallHeaderWrapper,
        children: (0, r.jsx)(d.Z, {
          channelId: "preview-channel-id",
          previewQuest: h,
          isParticipatingOverride: false
        })
      })]
    }), (0, r.jsx)(f.Z, {
      questId: h.id
    })]
  })
}