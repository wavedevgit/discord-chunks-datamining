/** Chunk was on web.js **/
/** chunk id: 175724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => A
});
var Chunk475179 = require("./475179.js"),
  Chunk904245 = require("./904245.js"),
  Chunk45114 = require("./45114.js"),
  Chunk358221 = require("./358221.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk623292 = require("./623292.js"),
  Chunk807092 = require("./807092.js"),
  Chunk6025 = require("./6025.js"),
  Chunk897473 = require("./897473.js"),
  Chunk913663 = require("./913663.js"),
  Chunk268350 = require("./268350.js"),
  Chunk433355 = require("./433355.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk323873 = require("./323873.js"),
  Chunk375954 = require("./375954.js"),
  Chunk306680 = require("./306680.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk574254 = require("./574254.js"),
  Chunk451478 = require("./451478.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js");
let A = {
  binds: ["esc", "shift+pagedown"],
  comboKeysBindGlobal: true,
  action(e) {
    if (I.Z.isElementFullScreen()) returnfalse;
    if (S.S.hasSubscribers(T.CkL.CALL_DECLINE)) return S.S.dispatch(T.CkL.CALL_DECLINE), false;
    if (v.Z.close()) returnfalse;
    if (S.S.hasSubscribers(T.CkL.MEDIA_MODAL_CLOSE)) return S.S.dispatch(T.CkL.MEDIA_MODAL_CLOSE), false;
    let t = (0, s.AN)(e);
    if (null == t ? true : t.hasSubscribers(T.CkL.POPOUT_CLOSE)) return t.dispatch(T.CkL.POPOUT_CLOSE), false;
    if (S.S.hasSubscribers(T.CkL.CLOSE_GIF_PICKER)) return S.S.dispatch(T.CkL.CLOSE_GIF_PICKER), false;
    if (S.S.hasSubscribers(T.CkL.MODAL_CLOSE)) return S.S.dispatch(T.CkL.MODAL_CLOSE), false;
    if (S.S.hasSubscribers(T.CkL.SEARCH_RESULTS_CLOSE)) return S.S.dispatch(T.CkL.SEARCH_RESULTS_CLOSE), false;
    if (null == t ? true : t.hasSubscribers(T.CkL.POPOUT_CLOSE_AFTER_MODALS)) return t.dispatch(T.CkL.POPOUT_CLOSE_AFTER_MODALS), false;
    let n = O.Z.getGuildId(),
      i = y.Z.getChannelId(n),
      a = h.Z.getChannel(i),
      l = p.ZP.getSection(i, null == a ? true : a.isDM()) === T.ULH.SIDEBAR_CHAT ? p.ZP.getSidebarState(i) : null,
      c = (null == l ? true : l.type) === d.tI.VIEW_THREAD || (null == l ? true : l.type) === d.tI.VIEW_CHANNEL ? l.channelId : null;
    if (false === C(i) || false === C(c)) returnfalse;
    if (null != i && (null == l ? true : l.type) === d.tI.CREATE_THREAD) return u.Z.closeChannelSidebar(i), false;
    let f = N(i),
      _ = N(c);
    return null == i || f || _ || null == l ? null != i && !f && o.Z.getChatOpen(i) ? r.Z.updateChatOpen(i, false) : S.S.dispatch(T.CkL.SCROLLTO_PRESENT) : u.Z.closeChannelSidebar(i), false
  }
};

function C(e) {
  if (null != e) {
    if (g.Z.isEditingAny(e)) return i.Z.endEditMessage(e), false;
    if (null != c.Z.getPendingReply(e)) return (0, l.A6)(e), false;
    if (null != f.Z.getStickerPreview(e, m.d.ChannelMessage)) return (0, _.qB)(e, m.d.ChannelMessage), false
  }
}

function N(e) {
  if (null == e) returnfalse;
  let t = false;
  return E.Z.getMessages(e).hasMoreAfter && (i.Z.jumpToPresent(e, T.AQB), t = true), b.ZP.hasUnread(e) && ((0, a.ack)(e, {
    object: T.qAy.MARK_CHANNEL_AS_READ_KEYBIND,
    objectType: T.AnalyticsObjectTypes.ACK_MANUAL
  }), t = true), (0, a.iV)(e), t
}