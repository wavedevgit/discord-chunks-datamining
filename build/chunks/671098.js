/** Chunk was on 59104 **/
t.d(a, {
  n: () => l
});
var n = t(835913),
  r = t(570140),
  o = t(675478),
  c = t(626135),
  i = t(981631);
async function l(e, a) {
  await (0, o.PS)(e, e => (e.guildRecentsDismissedAt = n.E.fromDate(new Date), !0), o.fy.INFREQUENT_USER_ACTION), r.Z.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: a
  }), c.default.track(i.rMx.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}