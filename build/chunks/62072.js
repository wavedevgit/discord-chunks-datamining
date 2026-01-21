/** Chunk was on 82124 **/
/** chunk id: 62072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk473749 = require("./473749.js"),
  Chunk904245 = require("./904245.js"),
  Chunk868643 = require("./868643.js"),
  Chunk912332 = require("./912332.jsx"),
  Chunk41776 = require("./41776.js"),
  Chunk280845 = require("./280845.js"),
  Chunk665906 = require("./665906.js"),
  Chunk488131 = require("./488131.js"),
  Chunk196051 = require("./196051.js"),
  Chunk441729 = require("./441729.js"),
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
let N = function(e, t, n) {
  let N = r.useRef(n);
  return N.current = n, r.useCallback(n => {
    if (!N.current || n.target !== n.currentTarget) return;
    let r = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
      T = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
      A = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
      w = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
      R = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
      D = v.Z.getMessage(t, e),
      M = g.Z.getChannel(t);
    if (null == D || null == M) return;
    let k = h.default.getId();
    switch (n.key.toLowerCase()) {
      case "backspace":
        r && (O.Z.can(Z.Plq.MANAGE_MESSAGES, M) || D.canDeleteOwnMessage(k)) && (n.preventDefault(), (0, P.$Z)(M, D, n));
        break;
      case "c":
        ((0, C.isMac)() ? w : A) && j.wS && (n.preventDefault(), (0, j.JG)(D.content));
        break;
      case "e":
        r && !M.isSystemDM() && (0, S.Z)(D, k) && (n.preventDefault(), (0, P.Hd)(M, D));
        break;
      case "p":
        (r || R) && (0, _.Z)(D, M) && (n.preventDefault(), (0, P.rY)(M, D, n));
        break;
      case "+":
        (r || R) && function(e) {
          let t = null == e.guild_id || y.Z.canChatInGuild(e.guild_id),
            n = f.nc.getSetting(),
            {
              disableReactionCreates: r
            } = (0, I.Z)({
              channel: e,
              canChat: t,
              renderReactions: n,
              canAddNewReactions: t && O.Z.can(Z.Plq.ADD_REACTIONS, e),
              isLurking: null != e.guild_id && o.Z.isLurking(e.guild_id),
              isGuest: null != e.guild_id && b.ZP.isCurrentUserGuest(e.guild_id),
              isActiveChannelOrUnarchivableThread: (0, c.RG)(e)
            });
          return !r && n
        }(M) && (n.preventDefault(), x.S.dispatchKeyed(Z.LPv.TOGGLE_REACTION_POPOUT, D.id, {
          emojiPicker: true
        }));
        break;
      case "r":
        (r || R) && (0, s.o)(M, D) && (n.preventDefault(), (0, P.HH)(M, D, n));
        break;
      case "f":
        (r || R) && (0, l.h)(D) && (n.preventDefault(), (0, a.l8)({
          message: D,
          source: "keyboard-shortcut"
        }));
        break;
      case "s":
        r && "" !== D.content && (n.preventDefault(), n.stopPropagation(), p.Z.isSpeakingMessage(t, e) ? (0, d.NB)() : (0, d.LA)(M, D));
        break;
      case "t":
        if (r && (0, c.ki)(M, D)) n.preventDefault(), (0, u.R6)(M, D, "Message Shortcut");
        else if (D.hasFlag(Z.iLy.HAS_THREAD)) {
          let e = g.Z.getChannel(E.default.castMessageIdAsChannelId(D.id));
          null != e && (r || R) && (n.preventDefault(), (0, u.ok)(e, R))
        }
        break;
      case "enter":
        T && (n.preventDefault(), (0, P.B8)(M, D));
        break;
      case "escape":
        m.Z.isEditing(M.id, D.id) ? i.Z.endEditMessage(M.id) : x.S.dispatch(Z.CkL.TEXTAREA_FOCUS)
    }
  }, [e, t])
}