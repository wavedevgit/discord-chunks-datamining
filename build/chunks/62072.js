/** Chunk was on 81985 **/
/** chunk id: 62072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk473749 = require("./473749.js"),
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
let P = function(e, t, n) {
  let P = r.useRef(n);
  return P.current = n, r.useCallback(n => {
    if (!P.current || n.target !== n.currentTarget) return;
    let r = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
      Z = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
      N = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
      T = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
      A = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
      w = b.Z.getMessage(t, e),
      R = f.Z.getChannel(t);
    if (null == w || null == R) return;
    let D = p.default.getId();
    switch (n.key.toLowerCase()) {
      case "backspace":
        r && (y.Z.can(I.Plq.MANAGE_MESSAGES, R) || w.canDeleteOwnMessage(D)) && (n.preventDefault(), (0, _.$Z)(R, w, n));
        break;
      case "c":
        ((0, j.isMac)() ? T : N) && v.wS && (n.preventDefault(), (0, v.JG)(w.content));
        break;
      case "e":
        r && !R.isSystemDM() && (0, C.Z)(w, D) && (n.preventDefault(), (0, _.Hd)(R, w));
        break;
      case "p":
        (r || A) && (0, E.Z)(w, R) && (n.preventDefault(), (0, _.rY)(R, w, n));
        break;
      case "+":
        (r || A) && function(e) {
          let t = null == e.guild_id || m.Z.canChatInGuild(e.guild_id),
            n = d.nc.getSetting(),
            {
              disableReactionCreates: r
            } = (0, S.Z)({
              channel: e,
              canChat: t,
              renderReactions: n,
              canAddNewReactions: t && y.Z.can(I.Plq.ADD_REACTIONS, e),
              isLurking: null != e.guild_id && o.Z.isLurking(e.guild_id),
              isGuest: null != e.guild_id && g.ZP.isCurrentUserGuest(e.guild_id),
              isActiveChannelOrUnarchivableThread: (0, c.RG)(e)
            });
          return !r && n
        }(R) && (n.preventDefault(), O.S.dispatchKeyed(I.LPv.TOGGLE_REACTION_POPOUT, w.id, {
          emojiPicker: true
        }));
        break;
      case "r":
        (r || A) && (0, s.o)(R, w) && (n.preventDefault(), (0, _.HH)(R, w, n));
        break;
      case "f":
        (r || A) && (0, l.h)(w) && (n.preventDefault(), (0, a.l8)({
          message: w,
          source: "keyboard-shortcut"
        }));
        break;
      case "t":
        if (r && (0, c.ki)(R, w)) n.preventDefault(), (0, u.R6)(R, w, "Message Shortcut");
        else if (w.hasFlag(I.iLy.HAS_THREAD)) {
          let e = f.Z.getChannel(x.default.castMessageIdAsChannelId(w.id));
          null != e && (r || A) && (n.preventDefault(), (0, u.ok)(e, A))
        }
        break;
      case "enter":
        Z && (n.preventDefault(), (0, _.B8)(R, w));
        break;
      case "escape":
        h.Z.isEditing(R.id, w.id) ? i.Z.endEditMessage(R.id) : O.S.dispatch(I.CkL.TEXTAREA_FOCUS)
    }
  }, [e, t])
}