/** Chunk was on 76282 **/
n.d(t, {
  Z: () => p
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
  _ = n(127328);
let p = e => {
  let {
    category: t,
    display: n,
    className: i
  } = e, p = (0, c.ZP)();
  if (null == t.unpublishedAt) return null;
  let E = (0, u.OT)(t.unpublishedAt);

  function f(e) {
    return (0, r.jsx)(s.IGR, {
      disableColor: !0,
      text: e,
      className: o()((0, a.wj)(p) ? _.badgeDark : _.badgeLight, i)
    })
  }
  return (0, l.EQ)([n, E > 1]).with(["card", !0], () => null).with(["banner", !0], () => f(d.NW.formatToPlainString(d.t["8gsP5O"], {
    days: E
  }))).with(["modal", !0], () => f(d.NW.formatToPlainString(d.t.Io7ozs, {
    days: E
  }))).otherwise(() => f(d.NW.string(d.t.Bc13HB)))
}