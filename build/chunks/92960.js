/** Chunk was on web.js **/
/** chunk id: 92960, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => T
});
var Chunk367513 = require("./367513.js"),
  Chunk843472 = require("./843472.js"),
  Chunk334738 = require("./334738.js"),
  Chunk313961 = require("./313961.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk118517 = require("./118517.js"),
  Chunk853145 = require("./853145.js"),
  Chunk138298 = require("./138298.js"),
  Chunk940382 = require("./940382.js"),
  Chunk931664 = require("./931664.js"),
  Chunk631576 = require("./631576.js"),
  Chunk761640 = require("./761640.js"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk580745 = require("./580745.js"),
  Chunk320501 = require("./320501.js"),
  Chunk222823 = require("./222823.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk712687 = require("./712687.js"),
  Chunk531685 = require("./531685.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");
let T = {
  binds: ["esc", "shift+pagedown"],
  comboKeysBindGlobal: true,
  action(e) {
    if (A.A.isElementFullScreen()) returnfalse;
    if (I._.hasSubscribers(S.jej.CALL_DECLINE)) return I._.dispatch(S.jej.CALL_DECLINE), false;
    if (v.A.close()) returnfalse;
    if (I._.hasSubscribers(S.jej.MEDIA_MODAL_CLOSE)) return I._.dispatch(S.jej.MEDIA_MODAL_CLOSE), false;
    let t = (0, s.wp)(e);
    if (null == t ? true : t.hasSubscribers(S.jej.POPOUT_CLOSE)) return t.dispatch(S.jej.POPOUT_CLOSE), false;
    if (I._.hasSubscribers(S.jej.CLOSE_GIF_PICKER)) return I._.dispatch(S.jej.CLOSE_GIF_PICKER), false;
    if (I._.hasSubscribers(S.jej.MODAL_CLOSE)) return I._.dispatch(S.jej.MODAL_CLOSE), false;
    if (I._.hasSubscribers(S.jej.SEARCH_RESULTS_CLOSE)) return I._.dispatch(S.jej.SEARCH_RESULTS_CLOSE), false;
    if (null == t ? true : t.hasSubscribers(S.jej.POPOUT_CLOSE_AFTER_MODALS)) return t.dispatch(S.jej.POPOUT_CLOSE_AFTER_MODALS), false;
    let n = O.A.getGuildId(),
      i = b.A.getChannelId(n),
      a = h.A.getChannel(i),
      l = _.Ay.getSection(i, null == a ? true : a.isDM()) === S.YvQ.SIDEBAR_CHAT ? _.Ay.getSidebarState(i) : null,
      c = (null == l ? true : l.type) === d.PE.VIEW_THREAD || (null == l ? true : l.type) === d.PE.VIEW_CHANNEL ? l.channelId : null;
    if (false === C(i) || false === C(c)) returnfalse;
    if (null != i && (null == l ? true : l.type) === d.PE.CREATE_THREAD) return u.A.closeChannelSidebar(i), false;
    let f = N(i),
      p = N(c);
    return null == i || f || p || null == l ? null != i && !f && o.A.getChatOpen(i) ? r.A.updateChatOpen(i, false, "esc keybind") : I._.dispatch(S.jej.SCROLLTO_PRESENT) : u.A.closeChannelSidebar(i), false
  }
};

function C(e) {
  if (null != e) {
    if (g.A.isEditingAny(e)) return i.A.endEditMessage(e), false;
    if (null != c.A.getPendingReply(e)) return (0, l.Jx)(e), false;
    if (null != f.A.getStickerPreview(e, m.C.ChannelMessage)) return (0, p.x5)(e, m.C.ChannelMessage), false
  }
}

function N(e) {
  if (null == e) returnfalse;
  let t = false;
  return E.A.getMessages(e).hasMoreAfter && (i.A.jumpToPresent(e, S.EMb), t = true), y.Ay.hasUnread(e) && ((0, a.ack)(e, {
    object: S.ZSU.MARK_CHANNEL_AS_READ_KEYBIND,
    objectType: S.AnalyticsObjectTypes.ACK_MANUAL
  }), t = true), (0, a.fb)(e), t
}