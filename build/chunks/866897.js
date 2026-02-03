/** Chunk was on 61344 **/
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
  let T = l.useRef(n);
  return T.current = n, l.useCallback(n => {
    if (!T.current || n.target !== n.currentTarget) return;
    let l = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
      N = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
      P = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
      w = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
      R = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
      D = b.A.getMessage(t, e),
      M = m.A.getChannel(t);
    if (null == D || null == M) return;
    let L = f.default.getId();
    switch (n.key.toLowerCase()) {
      case "backspace":
        l && (_.A.can(I.xBc.MANAGE_MESSAGES, M) || D.canDeleteOwnMessage(L)) && (n.preventDefault(), (0, j.RC)(M, D, n));
        break;
      case "c":
        ((0, E.isMac)() ? w : P) && y.p5 && (n.preventDefault(), (0, y.C)(D.content));
        break;
      case "e":
        l && !M.isSystemDM() && (0, C.A)(D, L) && (n.preventDefault(), (0, j.u_)(M, D));
        break;
      case "p":
        (l || R) && (0, S.A)(D, M) && (n.preventDefault(), (0, j.rS)(M, D, n));
        break;
      case "+":
        (l || R) && function(e) {
          let t = null == e.guild_id || A.A.canChatInGuild(e.guild_id),
            n = p.jW.getSetting(),
            {
              disableReactionCreates: l
            } = (0, x.A)({
              channel: e,
              canChat: t,
              renderReactions: n,
              canAddNewReactions: t && _.A.can(I.xBc.ADD_REACTIONS, e),
              isLurking: null != e.guild_id && s.A.isLurking(e.guild_id),
              isActiveChannelOrUnarchivableThread: (0, c.jr)(e)
            });
          return !l && n
        }(M) && (n.preventDefault(), v._.dispatchKeyed(I.zOV.TOGGLE_REACTION_POPOUT, D.id, {
          emojiPicker: true
        }));
        break;
      case "r":
        (l || R) && (0, o.r)(M, D) && (n.preventDefault(), (0, j.$b)(M, D, n));
        break;
      case "f":
        (l || R) && (0, i.p)(D) && (n.preventDefault(), (0, a.fO)({
          message: D,
          source: "keyboard-shortcut"
        }));
        break;
      case "s":
        l && "" !== D.content && (n.preventDefault(), n.stopPropagation(), h.A.isSpeakingMessage(t, e) ? (0, d.pr)() : (0, d.kP)(M, D));
        break;
      case "t":
        if (l && (0, c.D1)(M, D)) n.preventDefault(), (0, u.Tv)(M, D, "Message Shortcut");
        else if (D.hasFlag(I.pr7.HAS_THREAD)) {
          let e = m.A.getChannel(O.default.castMessageIdAsChannelId(D.id));
          null != e && (l || R) && (n.preventDefault(), (0, u.JA)(e, R))
        }
        break;
      case "enter":
        N && (n.preventDefault(), (0, j.cl)(M, D));
        break;
      case "escape":
        g.A.isEditing(M.id, D.id) ? r.A.endEditMessage(M.id) : v._.dispatch(I.jej.TEXTAREA_FOCUS)
    }
  }, [e, t])
}