/** Chunk was on 59256 **/
n.d(t, {
  Z: () => c
}), n(539854), n(388685);
var r = n(73800),
  o = n(442837),
  l = n(999382),
  a = n(905128),
  s = n(901005),
  i = n(131085);

function c() {
  let e = (0, o.e7)([l.Z], () => l.Z.getGuild()),
    t = (0, o.e7)([a.Z], () => {
      var t;
      return null == (t = a.Z.getStateForGuild(null == e ? void 0 : e.id)) ? void 0 : t.allPowerups
    }),
    n = (0, s.i)(null == e ? void 0 : e.id, "GuildSettingsTags");
  return (0, r.useMemo)(() => {
    let r = i.QV.map(e => ({
        kind: e
      })),
      o = [];
    return n && (null == e ? void 0 : e.features) != null && Object.keys(i.Ct).forEach(n => {
      let l = i.Ct[n],
        a = i.AC[n],
        s = null == t ? void 0 : t[a],
        c = null == s ? void 0 : s.title,
        u = l.map(e => ({
          kind: e,
          packName: c
        }));
      e.features.has(n) ? r.push(...u) : o.push(...u)
    }), {
      unlockedBadges: r,
      lockedBadges: o
    }
  }, [null == e ? void 0 : e.features, n, t])
}