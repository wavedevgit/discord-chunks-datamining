/** Chunk was on 24389 **/
n.d(t, {
  Z: () => h
}), n(627341);
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  l = n(278074),
  a = n(780384),
  s = n(481060),
  c = n(410030),
  u = n(884697),
  d = n(388032),
  b = n(127328);
let h = e => {
  let {
    category: t,
    display: n,
    className: i
  } = e, h = (0, c.ZP)();
  if (null == t.unpublishedAt) return null;
  let p = (0, u.OT)(t.unpublishedAt);

  function f(e) {
    return (0, r.jsx)(s.IGR, {
      disableColor: !0,
      text: e,
      className: o()((0, a.wj)(h) ? b.badgeDark : b.badgeLight, i)
    })
  }
  return (0, l.EQ)([n, p > 1]).with(["card", !0], () => null).with(["banner", !0], () => f(d.NW.formatToPlainString(d.t["8gsP5O"], {
    days: p
  }))).with(["modal", !0], () => f(d.NW.formatToPlainString(d.t.Io7ozs, {
    days: p
  }))).otherwise(() => f(d.NW.string(d.t.Bc13HB)))
}