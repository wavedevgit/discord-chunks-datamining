/** Chunk was on 1113 **/
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
      L = y.A.getMessage(t, e),
      M = f.A.getChannel(t);
    if (null == L || null == M) return;
    let k = g.default.getId();
    switch (n.key.toLowerCase()) {
      case "backspace":
        r && (O.A.can(N.xBc.MANAGE_MESSAGES, M) || L.canDeleteOwnMessage(k)) && (n.preventDefault(), (0, I.RC)(M, L, n));
        break;
      case "c":
        ((0, j.isMac)() ? R : w) && _.p5 && (n.preventDefault(), (0, _.C)(L.content));
        break;
      case "e":
        r && !M.isSystemDM() && (0, E.A)(L, k) && (n.preventDefault(), (0, I.u_)(M, L));
        break;
      case "p":
        (r || D) && (0, C.A)(L, M) && (n.preventDefault(), (0, I.rS)(M, L, n));
        break;
      case "+":
        (r || D) && function(e) {
          let t = null == e.guild_id || A.A.canChatInGuild(e.guild_id),
            n = p.jW.getSetting(),
            {
              disableReactionCreates: r
            } = (0, S.A)({
              channel: e,
              canChat: t,
              renderReactions: n,
              canAddNewReactions: t && O.A.can(N.xBc.ADD_REACTIONS, e),
              isLurking: null != e.guild_id && a.A.isLurking(e.guild_id),
              isGuest: null != e.guild_id && b.Ay.isCurrentUserGuest(e.guild_id),
              isActiveChannelOrUnarchivableThread: (0, c.jr)(e)
            });
          return !r && n
        }(M) && (n.preventDefault(), x._.dispatchKeyed(N.zOV.TOGGLE_REACTION_POPOUT, L.id, {
          emojiPicker: true
        }));
        break;
      case "r":
        (r || D) && (0, o.r)(M, L) && (n.preventDefault(), (0, I.$b)(M, L, n));
        break;
      case "f":
        (r || D) && (0, i.p)(L) && (n.preventDefault(), (0, s.fO)({
          message: L,
          source: "keyboard-shortcut"
        }));
        break;
      case "s":
        r && "" !== L.content && (n.preventDefault(), n.stopPropagation(), h.A.isSpeakingMessage(t, e) ? (0, d.pr)() : (0, d.kP)(M, L));
        break;
      case "t":
        if (r && (0, c.D1)(M, L)) n.preventDefault(), (0, u.Tv)(M, L, "Message Shortcut");
        else if (L.hasFlag(N.pr7.HAS_THREAD)) {
          let e = f.A.getChannel(v.default.castMessageIdAsChannelId(L.id));
          null != e && (r || D) && (n.preventDefault(), (0, u.JA)(e, D))
        }
        break;
      case "enter":
        P && (n.preventDefault(), (0, I.cl)(M, L));
        break;
      case "escape":
        m.A.isEditing(M.id, L.id) ? l.A.endEditMessage(M.id) : x._.dispatch(N.jej.TEXTAREA_FOCUS)
    }
  }, [e, t])
}