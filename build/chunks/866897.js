/** Chunk was on 67564 **/
/** chunk id: 866897, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
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
  Chunk696451 = require("./696451.js"),
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
let T = function(e, t, n) {
  let T = r.useRef(n);
  return T.current = n, r.useCallback(n => {
    if (!T.current || n.target !== n.currentTarget) return;
    let r = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
      P = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
      w = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
      R = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
      D = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
      M = y.A.getMessage(t, e),
      L = g.A.getChannel(t);
    if (null == M || null == L) return;
    let k = f.default.getId();
    switch (n.key.toLowerCase()) {
      case "backspace":
        r && (_.A.can(N.xBc.MANAGE_MESSAGES, L) || M.canDeleteOwnMessage(k)) && (n.preventDefault(), (0, I.RC)(L, M, n));
        break;
      case "c":
        ((0, v.isMac)() ? R : w) && O.p5 && (n.preventDefault(), (0, O.C)(M.content));
        break;
      case "e":
        r && !L.isSystemDM() && (0, E.A)(M, k) && (n.preventDefault(), (0, I.u_)(L, M));
        break;
      case "p":
        (r || D) && (0, C.A)(M, L) && (n.preventDefault(), (0, I.rS)(L, M, n));
        break;
      case "+":
        (r || D) && function(e) {
          let t = null == e.guild_id || A.A.canChatInGuild(e.guild_id),
            n = h.jW.getSetting(),
            {
              disableReactionCreates: r
            } = (0, S.A)({
              channel: e,
              canChat: t,
              renderReactions: n,
              canAddNewReactions: t && _.A.can(N.xBc.ADD_REACTIONS, e),
              isLurking: null != e.guild_id && a.A.isLurking(e.guild_id),
              isGuest: null != e.guild_id && b.Ay.isCurrentUserGuest(e.guild_id),
              isActiveChannelOrUnarchivableThread: (0, c.jr)(e)
            });
          return !r && n
        }(L) && (n.preventDefault(), j._.dispatchKeyed(N.zOV.TOGGLE_REACTION_POPOUT, M.id, {
          emojiPicker: true
        }));
        break;
      case "r":
        (r || D) && (0, o.r)(L, M) && (n.preventDefault(), (0, I.$b)(L, M, n));
        break;
      case "f":
        (r || D) && (0, i.p)(M) && (n.preventDefault(), (0, s.fO)({
          message: M,
          source: "keyboard-shortcut"
        }));
        break;
      case "s":
        r && "" !== M.content && (n.preventDefault(), n.stopPropagation(), p.A.isSpeakingMessage(t, e) ? (0, d.pr)() : (0, d.kP)(L, M));
        break;
      case "t":
        if (r && (0, c.D1)(L, M)) n.preventDefault(), (0, u.Tv)(L, M, "Message Shortcut");
        else if (M.hasFlag(N.pr7.HAS_THREAD)) {
          let e = g.A.getChannel(x.default.castMessageIdAsChannelId(M.id));
          null != e && (r || D) && (n.preventDefault(), (0, u.JA)(e, D))
        }
        break;
      case "enter":
        P && (n.preventDefault(), (0, I.cl)(L, M));
        break;
      case "escape":
        m.A.isEditing(L.id, M.id) ? l.A.endEditMessage(L.id) : j._.dispatch(N.jej.TEXTAREA_FOCUS)
    }
  }, [e, t])
}