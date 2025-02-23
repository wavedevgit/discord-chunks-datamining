/** Chunk was on 84335 (8a7781247bbfeb16.js) **/
n.d(t, {
  Z: () => a
}), n(230036);
var r = n(192379),
  i = n(835473),
  l = n(823379);

function a(e) {
  let t = e.gameActivity,
    n = function(e) {
      let t = (0, i.Z)(e.gameApplicationIds);
      return r.useMemo(() => t.filter(l.lm), [t])
    }(e),
    a = r.useMemo(() => (n.sort((e, n) => {
      var r, i, l, a;
      let o = null !== (l = null === (r = t[e.id]) || void 0 === r ? void 0 : r.score) && void 0 !== l ? l : 0,
        s = null !== (a = null === (i = t[n.id]) || void 0 === i ? void 0 : i.score) && void 0 !== a ? a : 0;
      return o !== s ? s - o : 0
    }), n), [n, t]),
    o = r.useMemo(() => a.slice(0, 5), [a]);
  return {
    gamesToDisplay: o,
    lastGameToDisplay: r.useMemo(() => {
      var e;
      return null !== (e = a[5]) && void 0 !== e ? e : null
    }, [a]),
    remainingGames: r.useMemo(() => a.slice(5), [a])
  }
}