/** Chunk was on web.js **/
/** chunk id: 877109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
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
  Chunk993369 = require("./993369.jsx"),
  Chunk881199 = require("./881199.jsx"),
  Chunk688695 = require("./688695.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk818923 = require("./818923.js");
let g = function(e) {
  let {
    questId: t
  } = e, n = (0, a.e7)([l.Z], () => null != t && l.Z.isFetchingQuestPreview(t), [t]), g = (0, a.e7)([l.Z], () => null != t ? l.Z.getQuest(t) : true, [t]), E = i.useRef(false);
  i.useEffect(() => {
    null == t || E.current || (E.current = true, (0, s.MG)(t))
  }, [t]);
  let b = () => {
    null != t && (0, s.MG)(t)
  };
  return null == g ? (0, r.jsxs)("div", {
    className: m.previewPage,
    children: [(0, r.jsx)(o.Mgn, {
      className: m.errorIcon
    }), (0, r.jsx)(o.X6q, {
      variant: "heading-lg/semibold",
      children: "Welcome to the Ad preview Tool"
    }), (0, r.jsx)(o.Zbd, {
      className: m.messageWrapper,
      children: (0, r.jsx)("code", {
        className: m.message,
        children: "Unable to load Quest"
      })
    })]
  }) : (0, r.jsxs)("div", {
    className: m.previewPage,
    children: [(0, r.jsx)(o.qDn, {
      className: m.questsIcon
    }), (0, r.jsx)(o.X6q, {
      variant: "heading-lg/semibold",
      children: "Welcome to the Ad preview Tool"
    }), (0, r.jsxs)("div", {
      className: m.menu,
      children: [(0, r.jsx)(o.Zbd, {
        className: m.messageWrapper,
        children: (0, r.jsx)("code", {
          className: m.message,
          children: g.config.messages.questName
        })
      }), (0, r.jsx)("div", {
        className: m.messageButton,
        children: (0, r.jsx)(o.hU, {
          onClick: b,
          "aria-label": h.intl.string(h.t.wzzjk5),
          icon: o.DuK,
          loading: n
        })
      })]
    }), (0, r.jsxs)(o.Zbd, {
      className: m.previewCard,
      children: [(0, r.jsx)(o.X6q, {
        className: m.heading,
        variant: "heading-lg/semibold",
        children: "Discovery Card"
      }), (0, r.jsx)(u.Z, {
        className: m.questTile,
        quest: g,
        questContent: c.jn.QUEST_HOME_DESKTOP,
        contentPosition: 0,
        rowIndex: 0,
        sourceQuestContent: c.jn.INTERNAL_PREVIEW_TOOL
      })]
    }), (0, r.jsxs)(o.Zbd, {
      className: m.previewCard,
      children: [(0, r.jsx)(o.X6q, {
        className: m.heading,
        variant: "heading-lg/semibold",
        children: "Channel Call Header"
      }), (0, r.jsx)("div", {
        className: m.questChannelCallHeaderWrapper,
        children: (0, r.jsx)(d.Z, {
          channelId: "preview-channel-id",
          previewQuest: g,
          isParticipatingOverride: false
        })
      })]
    }), (0, r.jsx)(_.Z, {
      questId: g.id
    }), (0, r.jsx)(f.Z, {
      quest: g
    }), (0, r.jsx)(p.Z, {
      quest: g
    })]
  })
}