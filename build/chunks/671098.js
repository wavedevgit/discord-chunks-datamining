/** Chunk was on 65438 **/
r.d(t, {
  n: () => s
});
var n = r(835913),
  l = r(570140),
  i = r(675478),
  a = r(626135),
  o = r(981631);
async function s(e, t) {
  await (0, i.PS)(e, e => (e.guildRecentsDismissedAt = n.E.fromDate(new Date), !0), i.fy.INFREQUENT_USER_ACTION), l.Z.dispatch({
    type: "BULK_CLEAR_RECENTS",
    guildId: e,
    channelIds: t
  }), a.default.track(o.rMx.CHANNEL_LIST_UPDATED, {
    action_type: "recents_dismissed"
  })
}