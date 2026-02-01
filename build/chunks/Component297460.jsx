/** Chunk was on 77927 **/
/** chunk id: 297460, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk442433 = require("./442433.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk145567 = require("./145567.js"),
  Chunk187667 = require("./187667.js"),
  Chunk34307 = require("./34307.js"),
  Chunk652215 = require("./652215.js"),
  Chunk895867 = require("./895867.js"),
  Chunk985018 = require("./985018.jsx");

function g(e, t) {
  let n = "DM_USER" === e.kind ? e.userId : null,
    g = (0, i.bG)([o.A], () => {
      var e;
      return null != n && null != (e = o.A.getDMFromUserId(n)) ? e : null
    }, [n]),
    v = "CHANNEL" === e.kind ? e.channel.id : g,
    E = "CHANNEL" === e.kind ? e.channel : null,
    O = (0, i.bG)([c.A], () => !!(null == E || E.isDM() || E.isMultiUserDM() || E.isPrivate()) || c.A.can(A.xBc.READ_MESSAGE_HISTORY, E), [E]);
  return (0, i.bG)([s.A], () => {
    if (null == v) returnfalse;
    let [e] = s.A.getSessionEntries();
    for (let t of e)
      if (t.channelId === v) returntrue;
    return s.A.getSelectedChannelId() === v
  }, [v]) && null != v ? (0, r.jsx)(l.Drp, {
    id: "close-chat",
    label: y.intl.string(b.default.ERApc4),
    action: () => {
      (0, d.lu)({
        channelId: v,
        widgetType: t,
        secondaryValue: "context_menu_close_chat"
      }), (0, u.Z_)()
    }
  }) : O ? (0, r.jsx)(l.Drp, {
    id: "open-chat",
    label: y.intl.string(b.default.KWrMk5),
    action: () => {
      switch (e.kind) {
        case "CHANNEL":
          (0, d.D$)({
            channelId: e.channel.id,
            source: f.B.MANUAL,
            guildId: e.guildId,
            messageId: null,
            widgetType: t
          });
          break;
        case "DM_USER":
          if (null != e.onOpenOverride) {
            try {
              e.onOpenOverride(e.userId)
            } finally {
              (0, u.Z_)()
            }
            return
          }(async () => {
            try {
              let n = null != g ? g : await a.A.getOrEnsurePrivateChannel(e.userId);
              (0, d.D$)({
                channelId: n,
                source: f.B.MANUAL,
                guildId: null,
                messageId: null,
                widgetType: t
              })
            } catch (e) {} finally {
              (0, u.Z_)()
            }
          })();
          break;
        default:
          return e
      }
    }
  }) : null
}