/** Chunk was on 87918 **/
n.d(t, {
  n: () => u
});
var i = n(835913),
  l = n(570140),
  a = n(675478),
  r = n(626135),
  o = n(981631);
async function u(e, t) {
  await (0, a.PS)(e, e => (e.guildRecentsDismissedAt = i.E.fromDate(new Date), !0), a.fy.INFREQUENT_USER_ACTION), l.Z.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), r.default.track(o.rMx.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}