/** Chunk was on web.js **/
/** chunk id: 877109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk705262 = require("./705262.jsx"),
  Chunk272008 = require("./272008.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk415104 = require("./415104.jsx"),
  Chunk134483 = require("./134483.jsx"),
  Chunk993369 = require("./993369.jsx"),
  Chunk881199 = require("./881199.jsx"),
  Chunk688695 = require("./688695.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk818923 = require("./818923.js"),
  Chunk726927 = require("./726927.js");
let b = function(e) {
  let {
    questId: t
  } = e, n = (0, a.e7)([c.Z], () => null != t && c.Z.isFetchingQuestPreview(t), [t]), b = (0, a.e7)([c.Z], () => null != t ? c.Z.getQuest(t) : true, [t]), y = i.useRef(false);
  i.useEffect(() => {
    null == t || y.current || (y.current = true, (0, l.MG)(t))
  }, [t]);
  let O = () => {
    null != t && (0, l.MG)(t)
  };
  return null == b ? (0, r.jsxs)("div", {
    className: g.previewPage,
    children: [(0, r.jsx)(o.Mgn, {
      className: g.errorIcon
    }), (0, r.jsx)(o.X6q, {
      variant: "heading-lg/semibold",
      children: "Welcome to the Ad preview Tool"
    }), (0, r.jsx)(o.Zbd, {
      className: g.messageWrapper,
      children: (0, r.jsx)("code", {
        className: g.message,
        children: "Unable to load Quest"
      })
    })]
  }) : (0, r.jsxs)("div", {
    className: g.previewPage,
    children: [(0, r.jsx)(o.qDn, {
      className: g.questsIcon
    }), (0, r.jsx)(o.X6q, {
      variant: "heading-lg/semibold",
      children: "Welcome to the Ad preview Tool"
    }), (0, r.jsxs)("div", {
      className: g.menu,
      children: [(0, r.jsx)(o.Zbd, {
        className: g.messageWrapper,
        children: (0, r.jsx)("code", {
          className: g.message,
          children: b.config.messages.questName
        })
      }), (0, r.jsx)("div", {
        className: g.messageButton,
        children: (0, r.jsx)(o.hU, {
          onClick: O,
          "aria-label": m.intl.string(m.t.wzzjk5),
          icon: o.DuK,
          loading: n
        })
      })]
    }), (0, r.jsxs)(o.Zbd, {
      className: g.previewCard,
      children: [(0, r.jsx)(o.X6q, {
        className: g.heading,
        variant: "heading-lg/semibold",
        children: "Discovery Card"
      }), (0, r.jsx)(d.Z, {
        className: g.questTile,
        quest: b,
        questContent: u.jn.QUEST_HOME_DESKTOP,
        contentPosition: 0,
        rowIndex: 0,
        sourceQuestContent: u.jn.INTERNAL_PREVIEW_TOOL
      })]
    }), (0, r.jsxs)(o.Zbd, {
      className: g.previewCard,
      children: [(0, r.jsx)(o.X6q, {
        className: g.heading,
        variant: "heading-lg/semibold",
        children: "Channel Call Header"
      }), (0, r.jsx)("div", {
        className: g.questChannelCallHeaderWrapper,
        children: (0, r.jsx)(f.Z, {
          channelId: "preview-channel-id",
          previewQuest: b,
          isParticipatingOverride: false
        })
      })]
    }), (0, r.jsx)(p.Z, {
      questId: b.id
    }), (0, r.jsx)(_.Z, {
      quest: b
    }), (0, r.jsx)(h.Z, {
      quest: b
    }), (0, r.jsx)("div", {
      className: E.themes,
      children: (0, r.jsx)(s.ZP, {
        type: s.yH.SETTINGS,
        children: (0, r.jsx)(s.ZP.Basic, {
          className: E.themeSelectionGroup
        })
      })
    })]
  })
}