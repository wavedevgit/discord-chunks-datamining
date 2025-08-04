/** Chunk was on 99665 **/
n.d(t, {
  Z: () => g
});
var r = n(255367);
n(73800);
var l = n(442837),
  i = n(481060),
  u = n(430824),
  o = n(594174),
  a = n(979651),
  c = n(471253),
  d = n(200498),
  s = n(88751),
  _ = n(267980),
  f = n(623633),
  E = n(388032);

function g(e) {
  var t;
  let n = (0, f.Z)(),
    g = null == n ? void 0 : n.id,
    b = null == n ? void 0 : n.guild_id,
    O = (0, l.e7)([u.Z], () => u.Z.getGuild(b), [b]),
    h = (0, l.e7)([a.Z], () => null != g ? a.Z.getVoiceStateForChannel(g, e.id) : null, [g, e.id]),
    A = (null == (t = o.default.getCurrentUser()) ? void 0 : t.id) === e.id,
    p = (0, _.Z)(),
    v = (0, l.e7)([s.ZP], () => s.ZP.getPermissionsForUser(e.id, g), [g, e.id]),
    y = (0, d.B)(g);
  if (null == n || null == O || null == h || v.speaker) return null;
  let S = () => {
    A ? (0, c.RK)(n, !1) : (0, c._0)(n, e.id)
  };
  return y ? (0, r.jsx)(i.sNh, {
    id: "invite-speaker",
    label: A ? E.intl.string(E.t["W6c/VV"]) : E.intl.string(E.t.VUCWcH),
    action: S
  }) : p && A ? (0, r.jsx)(i.sNh, {
    id: "invite-speaker",
    label: E.intl.string(E.t["W6c/VV"]),
    action: S
  }) : null
}