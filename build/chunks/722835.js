/** Chunk was on 1272 **/
n.d(t, {
  Z: () => N
});
var r = n(209739),
  i = n.n(r),
  l = n(872810),
  o = n(579806),
  a = n(594190),
  s = n(199902),
  c = n(592125),
  u = n(430824),
  d = n(131951),
  p = n(496675),
  h = n(944486),
  g = n(449224),
  f = n(358085),
  m = n(102172),
  b = n(74299),
  _ = n(299570),
  E = n(989941),
  O = n(70722);

function N() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  if (!(0, b.Z)(d.Z) || null != s.Z.getCurrentUserActiveStream()) return !1;
  let t = h.Z.getVoiceChannelId(),
    n = c.Z.getChannel(t);
  if (null == n) return !1;
  let r = n.getGuildId();
  if (!(0, m.JL)(n, u.Z, p.Z, !1)) return !1;
  if (d.Z.getUseSystemScreensharePicker())(0, f.isMac)() && i().satisfies(null === o.Z || void 0 === o.Z ? void 0 : o.Z.os.release, O.jR) ? (0, _.T)() : (0, _.T)("window");
  else {
    let t = (0, E.Z)(a.ZP, g.Z);
    if (null == t || t.isLauncher && !e) return !1;
    (0, l.WH)(r, n.id, {
      pid: t.pid
    })
  }
  return !0
}