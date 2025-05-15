/** Chunk was on 62423 **/
n.d(t, {
  a: () => o
});
var r = n(442837),
  i = n(566620),
  l = n(317381);
let a = e => null == e || new Date(e).getTime() < Date.now() - 432e5,
  o = e => {
    let {
      surface: t,
      skipFetchingShelf: n = !0
    } = e;
    return (0, r.e7)([l.ZP], () => (a(l.ZP.getState().lastCheckedForBadgeableActivities) && !n && (0, i.w1)({
      guildId: null
    }), l.ZP.getState().surfacesToShowNewActivityIndicator.has(t)))
  }