/** Chunk was on 33397 **/
r.d(t, {
  m$: () => f,
  wV: () => c,
  zU: () => d
});
var n = r(442837),
  l = r(569545),
  i = r(314897),
  u = r(19780),
  a = r(98369),
  s = r(277642),
  o = r(441894);

function c(e) {
  let {
    userId: t,
    channelId: r
  } = e, l = (0, o.J)({
    channelId: r
  });
  return (0, n.e7)([a.Z, i.default, u.Z], () => null != t && l && u.Z.isUserConnected(t) && i.default.getId() !== t && a.Z.isUserVerified(t), [l, t])
}

function d(e) {
  let {
    streamKey: t,
    channelId: r
  } = e, u = (0, o.J)({
    channelId: r
  }), c = (0, s.t)(t);
  return (0, n.e7)([a.Z, i.default], () => {
    if (!u || c || null == t) return !1;
    let e = i.default.getId(),
      {
        ownerId: r
      } = (0, l.my)(t);
    return r !== e && a.Z.isStreamVerified(t)
  }, [c, u, t])
}

function f(e) {
  let {
    channelId: t
  } = e, r = (0, o.J)({
    channelId: t
  }), l = (0, s.r)();
  return (0, n.e7)([a.Z], () => !!r && !l && a.Z.isCallVerified(), [l, r])
}