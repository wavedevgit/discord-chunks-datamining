/** Chunk was on 47284 **/
a.d(t, {
  n: () => l
});
var n = a(835913),
  i = a(570140),
  o = a(675478),
  r = a(626135),
  c = a(981631);
async function l(e, t) {
  await (0, o.PS)(e, e => (e.guildRecentsDismissedAt = n.E.fromDate(new Date), !0), o.fy.INFREQUENT_USER_ACTION), i.Z.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), r.default.track(c.rMx.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}