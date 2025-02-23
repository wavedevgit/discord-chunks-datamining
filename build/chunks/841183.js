/** Chunk was on 55849 (652d4451a3f605fc.js) **/
n.d(t, {
  Z: () => u
});
var r = n(192379),
  a = n(442837),
  l = n(481060),
  i = n(442552),
  o = n(314897),
  s = n(643879),
  c = n(27367);

function u(e) {
  let {
    avatarId: t,
    storageHash: n
  } = e, {
    onMouseEnter: u,
    onMouseLeave: d,
    shouldAnimate: f
  } = (0, i.Z)(), p = (0, a.e7)([o.default], () => o.default.getId());
  return {
    avatarSrc: r.useMemo(() => (0, s.fD)({
      userId: p,
      avatarId: t,
      storageHash: n,
      canAnimate: f,
      size: (0, l.pxk)(c.m)
    }), [p, t, n, f]),
    isAvatarAnimating: f,
    eventHandlers: {
      onMouseEnter: u,
      onMouseLeave: d
    }
  }
}