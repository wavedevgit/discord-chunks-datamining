/** Chunk was on 99277 **/
n.d(t, {
  Z: () => l
}), n(47120), n(653041);
var r = n(192379),
  i = n(442837),
  o = n(235587);

function l(e) {
  let {
    guildId: t,
    leaderboardId: n,
    intervalStart: l
  } = e, a = (0, i.Wu)([o.Z], () => {
    var e, r;
    return null !== (r = null === (e = o.Z.getPrevLeaderboardRanks(t, n, l)) || void 0 === e ? void 0 : e.ranks) && void 0 !== r ? r : []
  }, [t, l, n]), s = (0, i.Wu)([o.Z], () => {
    var e, r;
    return null !== (r = null === (e = o.Z.getCurrentLeaderboardRanks(t, n, l)) || void 0 === e ? void 0 : e.ranks) && void 0 !== r ? r : []
  }, [t, l, n]);
  return {
    rankChanges: r.useMemo(() => {
      let e = new Map;
      a.forEach((t, n) => {
        e.set(t, n + 1)
      });
      let t = [];
      return s.forEach((n, r) => {
        let i = r + 1,
          o = e.get(n);
        o !== i && t.push({
          userId: n,
          currentRank: i,
          previousRank: o
        })
      }), t
    }, [a, s])
  }
}