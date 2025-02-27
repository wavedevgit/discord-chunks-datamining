/** Chunk was on 99245 **/
t.d(n, {
  Z: () => g
});
var i = t(200651);
t(192379);
var l = t(442837),
  r = t(481060),
  u = t(430824),
  a = t(594174),
  o = t(979651),
  d = t(471253),
  c = t(200498),
  s = t(88751),
  _ = t(267980),
  E = t(623633),
  f = t(388032);

function g(e) {
  var n;
  let t = (0, E.Z)(),
    g = null == t ? void 0 : t.id,
    A = null == t ? void 0 : t.guild_id,
    v = (0, l.e7)([u.Z], () => u.Z.getGuild(A), [A]),
    h = (0, l.e7)([o.Z], () => null != g ? o.Z.getVoiceStateForChannel(g, e.id) : null, [g, e.id]),
    T = (null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) === e.id,
    b = (0, _.Z)(),
    O = (0, l.e7)([s.ZP], () => s.ZP.getPermissionsForUser(e.id, g), [g, e.id]),
    S = (0, c.B)(g);
  if (null == t || null == v || null == h || O.speaker) return null;
  let y = () => {
    T ? (0, d.RK)(t, !1) : (0, d._0)(t, e.id)
  };
  return S ? (0, i.jsx)(r.sNh, {
    id: "invite-speaker",
    label: T ? f.NW.string(f.t["W6c/VV"]) : f.NW.string(f.t.VUCWcH),
    action: y
  }) : b && T ? (0, i.jsx)(r.sNh, {
    id: "invite-speaker",
    label: f.NW.string(f.t["W6c/VV"]),
    action: y
  }) : null
}