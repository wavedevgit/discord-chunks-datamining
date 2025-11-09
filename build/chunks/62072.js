/** Chunk was on 50642 **/
/** chunk id: 62072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk647438 = require("./647438.js"),
  Chunk904245 = require("./904245.js"),
  Chunk868643 = require("./868643.js"),
  Chunk912332 = require("./912332.jsx"),
  Chunk41776 = require("./41776.js"),
  Chunk280845 = require("./280845.js"),
  Chunk665906 = require("./665906.js"),
  Chunk488131 = require("./488131.js"),
  Chunk695346 = require("./695346.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk323873 = require("./323873.js"),
  Chunk271383 = require("./271383.js"),
  Chunk607744 = require("./607744.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk572004 = require("./572004.js"),
  Chunk585483 = require("./585483.js"),
  Chunk358085 = require("./358085.js"),
  Chunk709054 = require("./709054.js"),
  Chunk418476 = require("./418476.js"),
  Chunk151007 = require("./151007.js"),
  Chunk432376 = require("./432376.js"),
  Chunk996861 = require("./996861.js"),
  Chunk981631 = require("./981631.js");
let I = function(e, t, n) {
  let I = i.useRef(n);
  return I.current = n, i.useCallback(n => {
    if (!I.current || n.target !== n.currentTarget) return;
    let i = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
      Z = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
      T = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
      N = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
      A = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
      w = b.Z.getMessage(t, e),
      M = h.Z.getChannel(t);
    if (null == w || null == M) return;
    let R = p.default.getId();
    switch (n.key.toLowerCase()) {
      case "backspace":
        i && (y.Z.can(P.Plq.MANAGE_MESSAGES, M) || w.canDeleteOwnMessage(R)) && (n.preventDefault(), (0, S.$Z)(M, w, n));
        break;
      case "c":
        ((0, _.isMac)() ? N : T) && C.wS && (n.preventDefault(), (0, C.JG)(w.content));
        break;
      case "e":
        i && !M.isSystemDM() && (0, O.Z)(w, R) && (n.preventDefault(), (0, S.Hd)(M, w));
        break;
      case "p":
        (i || A) && (0, j.Z)(w, M) && (n.preventDefault(), (0, S.rY)(M, w, n));
        break;
      case "+":
        (i || A) && function(e) {
          let t = null == e.guild_id || g.Z.canChatInGuild(e.guild_id),
            n = d.nc.getSetting(),
            {
              disableReactionCreates: i
            } = (0, E.Z)({
              channel: e,
              canChat: t,
              renderReactions: n,
              canAddNewReactions: t && y.Z.can(P.Plq.ADD_REACTIONS, e),
              isLurking: null != e.guild_id && o.Z.isLurking(e.guild_id),
              isGuest: null != e.guild_id && m.ZP.isCurrentUserGuest(e.guild_id),
              isActiveChannelOrUnarchivableThread: (0, c.RG)(e)
            });
          return !i && n
        }(M) && (n.preventDefault(), v.S.dispatchKeyed(P.LPv.TOGGLE_REACTION_POPOUT, w.id, {
          emojiPicker: true
        }));
        break;
      case "r":
        (i || A) && (0, s.o)(M, w) && (n.preventDefault(), (0, S.HH)(M, w, n));
        break;
      case "f":
        (i || A) && (0, l.h)(w) && (n.preventDefault(), (0, a.l8)({
          message: w,
          source: "keyboard-shortcut"
        }));
        break;
      case "t":
        if (i && (0, c.ki)(M, w)) n.preventDefault(), (0, u.R6)(M, w, "Message Shortcut");
        else if (w.hasFlag(P.iLy.HAS_THREAD)) {
          let e = h.Z.getChannel(x.default.castMessageIdAsChannelId(w.id));
          null != e && (i || A) && (n.preventDefault(), (0, u.ok)(e, A))
        }
        break;
      case "enter":
        Z && (n.preventDefault(), (0, S.B8)(M, w));
        break;
      case "escape":
        f.Z.isEditing(M.id, w.id) ? r.Z.endEditMessage(M.id) : v.S.dispatch(P.CkL.TEXTAREA_FOCUS)
    }
  }, [e, t])
}