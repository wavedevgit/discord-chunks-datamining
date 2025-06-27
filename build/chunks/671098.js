/** Chunk was on 43730 **/
n.d(t, {
  n: () => c
});
var a = n(835913),
  i = n(570140),
  r = n(675478),
  l = n(626135),
  o = n(981631);
async function c(e, t) {
  await (0, r.PS)(e, e => (e.guildRecentsDismissedAt = a.E.fromDate(new Date), !0), r.fy.INFREQUENT_USER_ACTION), i.Z.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), l.default.track(o.rMx.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}