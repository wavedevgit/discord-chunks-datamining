/** Chunk was on 11814 (fd05d34d70cdbd56.js) **/
n.d(t, {
  Z: () => f
}), n(230036), n(978209);
var r = n(544891),
  i = n(710845),
  a = n(569471),
  o = n(346479),
  l = n(592125),
  s = n(375954),
  c = n(306680),
  d = n(594174),
  u = n(709054),
  p = n(981631);
let m = new i.Z("markUnread");
async function f(e, t) {
  let n = d.default.getCurrentUser();
  if (null == n) return;
  let i = s.Z.getMessages(e),
    f = i.toArray().filter(e => 0 > u.default.compare(e.id, t)).sort((e, t) => u.default.compare(e.id, t.id)).reverse()[0],
    h = null == f ? u.default.atPreviousMillisecond(t) : f.id,
    g = 0;
  i.forAll(e => {
    u.default.compare(e.id, h) > 0 && (0, c.Ex)(e, n) && g++
  });
  let _ = l.Z.getChannel(e);
  null != _ && _.isThread() && (_.isArchivedThread() && await o.Z.unarchiveThread(_, !1), a.Z.hasJoined(e) || await o.Z.joinThread(_, "Mark Unread")), m.log("Marking unread", {
    channelId: e,
    messageId: t
  }), r.tn.post({
    url: p.ANM.MESSAGE_ACK(e, h),
    body: {
      manual: !0,
      mention_count: g
    },
    oldFormErrors: !0,
    rejectWithError: !0
  })
}