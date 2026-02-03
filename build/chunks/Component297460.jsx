/** Chunk was on 77927 **/
/** chunk id: 297460, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk589051 = require("./589051.js"),
  Chunk145567 = require("./145567.js"),
  Chunk187667 = require("./187667.js"),
  Chunk34307 = require("./34307.js"),
  Chunk652215 = require("./652215.js"),
  Chunk895867 = require("./895867.js"),
  Chunk985018 = require("./985018.jsx");

function y(e, t) {
  let {
    hasChat: n
  } = (0, c.M8)("useOverlayTextChatToggleMenuItem"), y = "DM_USER" === e.kind ? e.userId : null, v = (0, i.bG)([u.A], () => {
    var e;
    return null != y && null != (e = u.A.getDMFromUserId(y)) ? e : null
  }, [y]), E = "CHANNEL" === e.kind ? e.channel.id : v, O = (0, i.bG)([d.A], () => {
    if (null == E) returnfalse;
    let [e] = d.A.getSessionEntries();
    for (let t of e)
      if (t.channelId === E) returntrue;
    return d.A.getSelectedChannelId() === E
  }, [E]), h = "CHANNEL" === e.kind ? e.channel : null, p = (0, i.bG)([o.A], () => !!(null == h || h.isDM() || h.isMultiUserDM() || h.isPrivate()) || o.A.can(A.xBc.READ_MESSAGE_HISTORY, h), [h]);
  return O && null != E ? (0, r.jsx)(l.Drp, {
    id: "close-chat",
    label: g.intl.string(b.default.ERApc4),
    action: () => {
      (0, s.lu)({
        channelId: E,
        widgetType: t,
        secondaryValue: "context_menu_close_chat"
      }), (0, a.Z_)()
    }
  }) : n && p ? (0, r.jsx)(l.Drp, {
    id: "open-chat",
    label: g.intl.string(b.default.KWrMk5),
    action: () => {
      switch (e.kind) {
        case "CHANNEL":
          (0, s.D$)({
            target: {
              kind: s.bB.CHANNEL,
              channelId: e.channel.id,
              guildId: e.guildId,
              messageId: null
            },
            source: f.B.MANUAL,
            widgetType: t
          });
          break;
        case "DM_USER":
          if (null != e.onOpenOverride) {
            try {
              e.onOpenOverride(e.userId)
            } finally {
              (0, a.Z_)()
            }
            return
          }(async () => {
            try {
              await (0, s.D$)({
                target: {
                  kind: s.bB.DM_USER,
                  userId: e.userId,
                  messageId: null,
                  existingChannelId: v
                },
                source: f.B.MANUAL,
                widgetType: t
              })
            } catch (e) {} finally {
              (0, a.Z_)()
            }
          })();
          break;
        default:
          return e
      }
    }
  }) : null
}