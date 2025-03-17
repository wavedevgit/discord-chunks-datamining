/** Chunk was on 98783 **/
n.d(t, {
  B: () => f
});
var l = n(200651),
  i = n(192379),
  r = n(442837),
  a = n(481060),
  o = n(40851),
  s = n(352954),
  u = n(630759),
  c = n(441894),
  d = n(314897),
  g = n(388032);

function f(e) {
  let {
    userId: t,
    channelId: n,
    guildId: f,
    location: b,
    simplified: Z = !1
  } = e, N = (0, c.J)({
    channelId: n,
    location: b
  }), m = (0, r.e7)([d.default], () => d.default.getId() === t), v = (0, o.bp)(), p = i.useCallback(() => {
    s.Z.openSecureFramesUserVerificationModal(t, n, () => (0, u.fz)({
      userId: t,
      channelId: n,
      guildId: f
    }), v)
  }, [v, n, f, t]);
  return !N || m ? null : (0, l.jsx)(a.sNh, {
    id: "secure-frames-user-verification",
    label: g.NW.string(g.t["8ErYvb"]),
    action: p,
    icon: Z ? a._uN : null
  })
}