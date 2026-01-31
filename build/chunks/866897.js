/** Chunk was on 17534 **/
/** chunk id: 866897, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
});
var Chunk64700 = require("./64700.js"),
  Chunk843472 = require("./843472.js"),
  Chunk843626 = require("./843626.js"),
  Chunk294454 = require("./294454.jsx"),
  Chunk857071 = require("./857071.js"),
  Chunk517997 = require("./517997.js"),
  Chunk406704 = require("./406704.js"),
  Chunk747926 = require("./747926.js"),
  Chunk54570 = require("./54570.js"),
  Chunk8880 = require("./8880.js"),
  Chunk253932 = require("./253932.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk580745 = require("./580745.js"),
  Chunk834942 = require("./834942.js"),
  Chunk320501 = require("./320501.js"),
  Chunk576705 = require("./576705.js"),
  Chunk957565 = require("./957565.js"),
  Chunk203982 = require("./203982.js"),
  Chunk723702 = require("./723702.js"),
  Chunk661191 = require("./661191.js"),
  Chunk697470 = require("./697470.js"),
  Chunk492841 = require("./492841.js"),
  Chunk707985 = require("./707985.js"),
  Chunk519222 = require("./519222.js"),
  Chunk652215 = require("./652215.js");
let N = function(e, t, n) {
  let N = r.useRef(n);
  return N.current = n, r.useCallback(n => {
    if (!N.current || n.target !== n.currentTarget) return;
    let r = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
      T = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
      P = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
      w = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
      R = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
      D = A.A.getMessage(t, e),
      L = f.A.getChannel(t);
    if (null == D || null == L) return;
    let M = g.default.getId();
    switch (n.key.toLowerCase()) {
      case "backspace":
        r && (y.A.can(I.xBc.MANAGE_MESSAGES, L) || D.canDeleteOwnMessage(M)) && (n.preventDefault(), (0, S.RC)(L, D, n));
        break;
      case "c":
        ((0, j.isMac)() ? w : P) && O.p5 && (n.preventDefault(), (0, O.C)(D.content));
        break;
      case "e":
        r && !L.isSystemDM() && (0, v.A)(D, M) && (n.preventDefault(), (0, S.u_)(L, D));
        break;
      case "p":
        (r || R) && (0, E.A)(D, L) && (n.preventDefault(), (0, S.rS)(L, D, n));
        break;
      case "+":
        (r || R) && function(e) {
          let t = null == e.guild_id || b.A.canChatInGuild(e.guild_id),
            n = p.jW.getSetting(),
            {
              disableReactionCreates: r
            } = (0, C.A)({
              channel: e,
              canChat: t,
              renderReactions: n,
              canAddNewReactions: t && y.A.can(I.xBc.ADD_REACTIONS, e),
              isLurking: null != e.guild_id && a.A.isLurking(e.guild_id),
              isActiveChannelOrUnarchivableThread: (0, c.jr)(e)
            });
          return !r && n
        }(L) && (n.preventDefault(), _._.dispatchKeyed(I.zOV.TOGGLE_REACTION_POPOUT, D.id, {
          emojiPicker: true
        }));
        break;
      case "r":
        (r || R) && (0, o.r)(L, D) && (n.preventDefault(), (0, S.$b)(L, D, n));
        break;
      case "f":
        (r || R) && (0, i.p)(D) && (n.preventDefault(), (0, s.fO)({
          message: D,
          source: "keyboard-shortcut"
        }));
        break;
      case "s":
        r && "" !== D.content && (n.preventDefault(), n.stopPropagation(), h.A.isSpeakingMessage(t, e) ? (0, d.pr)() : (0, d.kP)(L, D));
        break;
      case "t":
        if (r && (0, c.D1)(L, D)) n.preventDefault(), (0, u.Tv)(L, D, "Message Shortcut");
        else if (D.hasFlag(I.pr7.HAS_THREAD)) {
          let e = f.A.getChannel(x.default.castMessageIdAsChannelId(D.id));
          null != e && (r || R) && (n.preventDefault(), (0, u.JA)(e, R))
        }
        break;
      case "enter":
        T && (n.preventDefault(), (0, S.cl)(L, D));
        break;
      case "escape":
        m.A.isEditing(L.id, D.id) ? l.A.endEditMessage(L.id) : _._.dispatch(I.jej.TEXTAREA_FOCUS)
    }
  }, [e, t])
}