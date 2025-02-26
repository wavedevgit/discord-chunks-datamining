/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => _
}), n(47120), n(977457);
var r = n(192379),
  i = n(392711),
  o = n(442837),
  a = n(881052),
  s = n(699682),
  l = n(81897),
  c = n(752048),
  u = n(771845),
  d = n(621853),
  f = n(484459);

function _(e) {
  let {
    fetch: t,
    type: n
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
    fetch: !1
  }, [_, p, h] = (0, o.Wu)([d.Z], () => [d.Z.getMutualFriends(e.id), d.Z.getMutualGuilds(e.id), d.Z.isFetchingProfile(e.id)]), g = (0, l.Z)(), [m, E] = (0, r.useState)(null), v = t && null == m && !h, b = !e.bot && null == _, y = null == p, O = v && (b || y);
  (0, r.useEffect)(() => {
    O && (async () => {
      try {
        await (0, f.Z)(e.id, void 0, {
          withMutualFriends: !e.bot,
          withMutualGuilds: !0,
          type: n,
          abortSignal: g
        })
      } catch (e) {
        E(new a.Hx(e))
      }
    })()
  }, [O, e.id, e.bot, n, g]);
  let S = (0, o.e7)([c.Z], () => c.Z.getUserAffinitiesMap()),
    I = (0, o.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()),
    T = (0, r.useMemo)(() => null == _ || _.length < 2 ? _ : (0, i.sortBy)(_, e => {
      var t, n;
      let {
        user: r
      } = e;
      return -((null !== (n = null === (t = S.get(r.id)) || void 0 === t ? void 0 : t.communicationProbability) && void 0 !== n ? n : -1) * 1)
    }), [_, S]),
    N = (0, r.useMemo)(() => {
      if (null == p || p.length < 2) return p;
      let e = Object.fromEntries(I.map((e, t) => [e, t]));
      return (0, i.sortBy)(p, t => {
        var n;
        let {
          guild: r
        } = t;
        return null !== (n = e[r.id]) && void 0 !== n ? n : I.length
      })
    }, [p, I]),
    A = (0, s.Z)(T),
    C = (0, s.Z)(N);
  return {
    mutualFriends: null != T ? T : A,
    mutualGuilds: null != N ? N : C,
    isFetching: h
  }
}