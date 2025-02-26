/** Chunk was on 55697 **/
n.d(t, {
  m$: () => f,
  wV: () => u,
  zU: () => d
});
var r = n(442837),
  i = n(569545),
  l = n(314897),
  o = n(19780),
  a = n(98369),
  s = n(277642),
  c = n(441894);

function u(e) {
  let {
    userId: t,
    channelId: n,
    location: i
  } = e, s = (0, c.J)({
    channelId: n,
    location: i
  });
  return (0, r.e7)([a.Z, l.default, o.Z], () => null != t && s && o.Z.isUserConnected(t) && l.default.getId() !== t && a.Z.isUserVerified(t), [s, t])
}

function d(e) {
  let {
    streamKey: t,
    channelId: n,
    location: o
  } = e, u = (0, c.J)({
    channelId: n,
    location: o
  }), d = (0, s.t)(t);
  return (0, r.e7)([a.Z, l.default], () => {
    if (!u || d || null == t) return !1;
    let e = l.default.getId(),
      {
        ownerId: n
      } = (0, i.my)(t);
    return n !== e && a.Z.isStreamVerified(t)
  }, [d, u, t])
}

function f(e) {
  let {
    channelId: t,
    location: n
  } = e, i = (0, c.J)({
    channelId: t,
    location: n
  }), l = (0, s.r)();
  return (0, r.e7)([a.Z], () => !!i && !l && a.Z.isCallVerified(), [l, i])
}