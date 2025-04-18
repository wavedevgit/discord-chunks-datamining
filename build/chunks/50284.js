/** Chunk was on 40419 **/
n.d(t, {
  Z: () => N
}), n(642613), n(583741);
var r = n(544891),
  i = n(710845),
  l = n(569471),
  o = n(346479),
  a = n(592125),
  s = n(375954),
  c = n(306680),
  u = n(594174),
  E = n(709054),
  d = n(981631);
let _ = new i.Z("markUnread");
async function N(e, t) {
  let n = u.default.getCurrentUser();
  if (null == n) return;
  let i = s.Z.getMessages(e),
    N = i.toArray().filter(e => 0 > E.default.compare(e.id, t)).sort((e, t) => E.default.compare(e.id, t.id)).reverse()[0],
    I = null == N ? E.default.atPreviousMillisecond(t) : N.id,
    O = 0;
  i.forAll(e => {
    E.default.compare(e.id, I) > 0 && (0, c.Ex)(e, n) && O++
  });
  let T = a.Z.getChannel(e);
  null != T && T.isThread() && (T.isArchivedThread() && await o.Z.unarchiveThread(T, !1), l.Z.hasJoined(e) || await o.Z.joinThread(T, "Mark Unread")), _.log("Marking unread", {
    channelId: e,
    messageId: t
  }), r.tn.post({
    url: d.ANM.MESSAGE_ACK(e, I),
    body: {
      manual: !0,
      mention_count: O
    },
    oldFormErrors: !0,
    rejectWithError: !0
  })
}