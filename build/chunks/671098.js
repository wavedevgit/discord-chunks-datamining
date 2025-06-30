/** Chunk was on 61840 **/
n.d(t, {
  n: () => c
});
var a = n(835913),
  i = n(570140),
  o = n(675478),
  r = n(626135),
  l = n(981631);
async function c(e, t) {
  await (0, o.PS)(e, e => (e.guildRecentsDismissedAt = a.E.fromDate(new Date), !0), o.fy.INFREQUENT_USER_ACTION), i.Z.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), r.default.track(l.rMx.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}