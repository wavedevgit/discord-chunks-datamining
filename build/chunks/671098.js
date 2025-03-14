/** Chunk was on 94289 **/
n.d(t, {
  n: () => o
});
var r = n(835913),
  l = n(570140),
  a = n(675478),
  i = n(626135),
  s = n(981631);
async function o(e, t) {
  await (0, a.PS)(e, e => (e.guildRecentsDismissedAt = r.E.fromDate(new Date), !0), a.fy.INFREQUENT_USER_ACTION), l.Z.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), i.default.track(s.rMx.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}