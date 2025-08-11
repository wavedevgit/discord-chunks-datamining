/** Chunk was on web.js **/
/** chunk id: 62072, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
});
var Chunk73800 = require("./73800.js"),
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

function C(e) {
  return E.Z.can(N.Plq.MANAGE_MESSAGES, e)
}

function R(e, t, n) {
  return !t.isSystemDM() && (0, I.Z)(n, e)
}

function P(e) {
  let t = null == e.guild_id || m.Z.canChatInGuild(e.guild_id),
    n = d.nc.getSetting(),
    {
      disableReactionCreates: r
    } = (0, S.Z)({
      channel: e,
      canChat: t,
      renderReactions: n,
      canAddNewReactions: t && E.Z.can(N.Plq.ADD_REACTIONS, e),
      isLurking: null != e.guild_id && s.Z.isLurking(e.guild_id),
      isGuest: null != e.guild_id && h.ZP.isCurrentUserGuest(e.guild_id),
      isActiveChannelOrUnarchivableThread: (0, c.RG)(e)
    });
  return !r && n
}
let w = function(e, t, n) {
  let s = r.useRef(n);
  return s.current = n, r.useCallback(n => {
    if (!s.current || n.target !== n.currentTarget) return;
    let r = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
      d = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
      h = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
      m = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
      E = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
      I = g.Z.getMessage(t, e),
      S = _.Z.getChannel(t);
    if (null == I || null == S) return;
    let w = f.default.getId();
    switch (n.key.toLowerCase()) {
      case "backspace":
        r && (C(S) || I.canDeleteOwnMessage(w)) && (n.preventDefault(), (0, A.$Z)(S, I, n));
        break;
      case "c":
        ((0, O.isMac)() ? m : h) && b.wS && (n.preventDefault(), (0, b.JG)(I.content));
        break;
      case "e":
        r && R(w, S, I) && (n.preventDefault(), (0, A.Hd)(S, I));
        break;
      case "p":
        (r || E) && (0, T.Z)(I, S) && (n.preventDefault(), (0, A.rY)(S, I, n));
        break;
      case "+":
        (r || E) && P(S) && (n.preventDefault(), y.S.dispatchKeyed(N.LPv.TOGGLE_REACTION_POPOUT, I.id, {
          emojiPicker: true
        }));
        break;
      case "r":
        (r || E) && (0, l.o)(S, I) && (n.preventDefault(), (0, A.HH)(S, I, n));
        break;
      case "f":
        (r || E) && (0, o.h)(I) && (n.preventDefault(), (0, a.l8)({
          message: I,
          source: "keyboard-shortcut"
        }));
        break;
      case "t":
        if (r && (0, c.ki)(S, I)) n.preventDefault(), (0, u.R6)(S, I, "Message Shortcut");
        else if (I.hasFlag(N.iLy.HAS_THREAD)) {
          let e = _.Z.getChannel(v.default.castMessageIdAsChannelId(I.id));
          null != e && (r || E) && (n.preventDefault(), (0, u.ok)(e, E))
        }
        break;
      case "enter":
        d && (n.preventDefault(), (0, A.B8)(S, I));
        break;
      case "escape":
        p.Z.isEditing(S.id, I.id) ? i.Z.endEditMessage(S.id) : y.S.dispatch(N.CkL.TEXTAREA_FOCUS)
    }
  }, [e, t])
}