/** Chunk was on 79465 **/
a.d(t, {
  n: () => l
});
var n = a(835913),
  r = a(570140),
  c = a(675478),
  o = a(626135),
  i = a(981631);
async function l(e, t) {
  await (0, c.PS)(e, e => (e.guildRecentsDismissedAt = n.E.fromDate(new Date), !0), c.fy.INFREQUENT_USER_ACTION), r.Z.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), o.default.track(i.rMx.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}