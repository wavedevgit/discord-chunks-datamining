/** Chunk was on 80723 **/
n.d(t, {
  n: () => c
});
var r = n(835913),
  i = n(570140),
  o = n(675478),
  l = n(626135),
  a = n(981631);
async function c(e, t) {
  await (0, o.PS)(e, e => (e.guildRecentsDismissedAt = r.E.fromDate(new Date), !0), o.fy.INFREQUENT_USER_ACTION), i.Z.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), l.default.track(a.rMx.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}