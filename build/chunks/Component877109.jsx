/** Chunk was on web.js **/
/** chunk id: 877109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
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
  Chunk388032 = require("./388032.jsx"),
  Chunk818923 = require("./818923.js");
let m = function(e) {
  let {
    questId: t
  } = e, n = (0, a.e7)([l.Z], () => null != t && l.Z.isFetchingQuestPreview(t), [t]), m = (0, a.e7)([l.Z], () => null != t ? l.Z.getQuest(t) : true, [t]), g = i.useRef(false);
  i.useEffect(() => {
    null == t || g.current || (g.current = true, (0, s.MG)(t))
  }, [t]);
  let E = () => {
    null != t && (0, s.MG)(t)
  };
  return null == m ? (0, r.jsxs)("div", {
    className: h.previewPage,
    children: [(0, r.jsx)(o.Mgn, {
      className: h.errorIcon
    }), (0, r.jsx)(o.X6q, {
      variant: "heading-lg/semibold",
      children: "Welcome to the Ad preview Tool"
    }), (0, r.jsx)(o.Zbd, {
      className: h.messageWrapper,
      children: (0, r.jsx)("code", {
        className: h.message,
        children: "Unable to load Quest"
      })
    })]
  }) : (0, r.jsxs)("div", {
    className: h.previewPage,
    children: [(0, r.jsx)(o.qDn, {
      className: h.questsIcon
    }), (0, r.jsx)(o.X6q, {
      variant: "heading-lg/semibold",
      children: "Welcome to the Ad preview Tool"
    }), (0, r.jsxs)("div", {
      className: h.menu,
      children: [(0, r.jsx)(o.Zbd, {
        className: h.messageWrapper,
        children: (0, r.jsx)("code", {
          className: h.message,
          children: m.config.messages.questName
        })
      }), (0, r.jsx)("div", {
        className: h.messageButton,
        children: (0, r.jsx)(o.hU, {
          onClick: E,
          "aria-label": p.intl.string(p.t.wzzjk5),
          icon: o.DuK,
          loading: n
        })
      })]
    }), (0, r.jsxs)(o.Zbd, {
      className: h.previewCard,
      children: [(0, r.jsx)(o.X6q, {
        className: h.heading,
        variant: "heading-lg/semibold",
        children: "Discovery Card"
      }), (0, r.jsx)(u.Z, {
        className: h.questTile,
        quest: m,
        questContent: c.jn.QUEST_HOME_DESKTOP,
        contentPosition: 0,
        rowIndex: 0,
        sourceQuestContent: c.jn.INTERNAL_PREVIEW_TOOL
      })]
    }), (0, r.jsxs)(o.Zbd, {
      className: h.previewCard,
      children: [(0, r.jsx)(o.X6q, {
        className: h.heading,
        variant: "heading-lg/semibold",
        children: "Channel Call Header"
      }), (0, r.jsx)("div", {
        className: h.questChannelCallHeaderWrapper,
        children: (0, r.jsx)(d.Z, {
          channelId: "preview-channel-id",
          previewQuest: m,
          isParticipatingOverride: false
        })
      })]
    }), (0, r.jsx)(_.Z, {
      questId: m.id
    }), (0, r.jsx)(f.Z, {
      quest: m
    })]
  })
}