/** Chunk was on 20447 **/
n.d(t, {
  f: () => v
});
var r = n(475179),
  i = n(904245),
  s = n(45114),
  a = n(40851),
  l = n(358221),
  o = n(623292),
  c = n(807092),
  d = n(6025),
  u = n(897473),
  m = n(913663),
  g = n(268350),
  p = n(433355),
  h = n(592125),
  f = n(703558),
  N = n(323873),
  b = n(375954),
  x = n(306680),
  _ = n(944486),
  E = n(914010),
  j = n(574254),
  O = n(451478),
  C = n(585483),
  S = n(981631);
let v = {
  binds: ["esc", "shift+pagedown"],
  comboKeysBindGlobal: !0,
  action(e) {
    if (O.Z.isElementFullScreen()) return !1;
    if (C.S.hasSubscribers(S.CkL.CALL_DECLINE)) return C.S.dispatch(S.CkL.CALL_DECLINE), !1;
    if (j.Z.close()) return !1;
    if (C.S.hasSubscribers(S.CkL.MEDIA_MODAL_CLOSE)) return C.S.dispatch(S.CkL.MEDIA_MODAL_CLOSE), !1;
    let t = (0, a.AN)(e);
    if (null == t ? void 0 : t.hasSubscribers(S.CkL.POPOUT_CLOSE)) return t.dispatch(S.CkL.POPOUT_CLOSE), !1;
    if (C.S.hasSubscribers(S.CkL.CLOSE_GIF_PICKER)) return C.S.dispatch(S.CkL.CLOSE_GIF_PICKER), !1;
    if (C.S.hasSubscribers(S.CkL.MODAL_CLOSE)) return C.S.dispatch(S.CkL.MODAL_CLOSE), !1;
    if (C.S.hasSubscribers(S.CkL.SEARCH_RESULTS_CLOSE)) return C.S.dispatch(S.CkL.SEARCH_RESULTS_CLOSE), !1;
    if (null == t ? void 0 : t.hasSubscribers(S.CkL.POPOUT_CLOSE_AFTER_MODALS)) return t.dispatch(S.CkL.POPOUT_CLOSE_AFTER_MODALS), !1;
    let n = E.Z.getGuildId(),
      i = _.Z.getChannelId(n),
      s = h.Z.getChannel(i),
      o = p.ZP.getSection(i, null == s ? void 0 : s.isDM()) === S.ULH.SIDEBAR_CHAT ? p.ZP.getSidebarState(i) : null,
      c = (null == o ? void 0 : o.type) === u.tI.VIEW_THREAD || (null == o ? void 0 : o.type) === u.tI.VIEW_CHANNEL ? o.channelId : null;
    if (!1 === T(i) || !1 === T(c)) return !1;
    if (null != i && (null == o ? void 0 : o.type) === u.tI.CREATE_THREAD) return d.Z.closeChannelSidebar(i), !1;
    let m = I(i),
      g = I(c);
    return null == i || m || g || null == o ? null != i && !m && l.Z.getChatOpen(i) ? r.Z.updateChatOpen(i, !1) : C.S.dispatch(S.CkL.SCROLLTO_PRESENT) : d.Z.closeChannelSidebar(i), !1
  }
};

function T(e) {
  if (null != e) {
    if (N.Z.isEditingAny(e)) return i.Z.endEditMessage(e), !1;
    if (null != c.Z.getPendingReply(e)) return (0, o.A6)(e), !1;
    if (null != m.Z.getStickerPreview(e, f.d.ChannelMessage)) return (0, g.qB)(e, f.d.ChannelMessage), !1
  }
}

function I(e) {
  if (null == e) return !1;
  let t = !1;
  return b.Z.getMessages(e).hasMoreAfter && (i.Z.jumpToPresent(e, S.AQB), t = !0), x.ZP.hasUnread(e) && ((0, s.In)(e), t = !0), (0, s.iV)(e), t
}