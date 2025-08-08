/** Chunk was on 39991 **/
n.d(t, {
  n: () => c
});
var i = n(835913),
  r = n(570140),
  o = n(675478),
  a = n(626135),
  l = n(981631);
async function c(e, t) {
  await (0, o.PS)(e, e => (e.guildRecentsDismissedAt = i.E.fromDate(new Date), !0), o.fy.INFREQUENT_USER_ACTION), r.Z.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), a.default.track(l.rMx.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}