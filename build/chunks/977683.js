/** Chunk was on 83379 **/
n.d(t, {
  Z: () => u
});
var r = n(192379),
  i = n(410030),
  a = n(695346),
  o = n(798628),
  l = n(275344),
  s = n(918088),
  c = n(562293);

function u(e, t) {
  var n;
  let u = (0, l.v)(e),
    d = (0, o.cE)(u.getChannelId())[u.id],
    p = (0, c.Z)(null === (n = u.poll) || void 0 === n ? void 0 : n.expiry),
    m = a.Yk.useSetting(),
    f = (0, i.ZP)(),
    h = null != t ? t : f;
  return r.useMemo(() => (0, s.ZP)(u, d, {
    animateEmoji: m,
    theme: h,
    formattedExpirationLabel: p
  }), [m, u, d, p, h])
}