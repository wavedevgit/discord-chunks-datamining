/** Chunk was on 59256 **/
n.d(t, {
  Z: () => i
}), n(388685), n(539854);
var r = n(73800),
  o = n(442837),
  l = n(999382),
  s = n(901005),
  a = n(131085);

function i() {
  let e = (0, o.e7)([l.Z], () => l.Z.getGuild()),
    t = (0, s.i)(null == e ? void 0 : e.id, "GuildSettingsTags");
  return (0, r.useMemo)(() => {
    let n = [...a.QV],
      r = [];
    return t && (null == e ? void 0 : e.features) != null && Object.keys(a.Ct).forEach(t => {
      let o = a.Ct[t];
      e.features.has(t) ? n.push(...o) : r.push(...o)
    }), {
      unlockedBadges: n,
      lockedBadges: r
    }
  }, [null == e ? void 0 : e.features, t])
}