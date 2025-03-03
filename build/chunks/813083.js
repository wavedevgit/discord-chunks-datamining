/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => f
}), r(627341);
var n = r(200651);
r(192379);
var l = r(120356),
  i = r.n(l),
  o = r(278074),
  a = r(780384),
  s = r(481060),
  c = r(410030),
  u = r(884697),
  d = r(388032),
  p = r(127328);
let f = e => {
  let {
    category: t,
    display: r,
    className: l
  } = e, f = (0, c.ZP)();
  if (null == t.unpublishedAt) return null;
  let b = (0, u.OT)(t.unpublishedAt);

  function h(e) {
    return (0, n.jsx)(s.IGR, {
      disableColor: !0,
      text: e,
      className: i()((0, a.wj)(f) ? p.badgeDark : p.badgeLight, l)
    })
  }
  return (0, o.EQ)([r, b > 1]).with(["card", !0], () => null).with(["banner", !0], () => h(d.NW.formatToPlainString(d.t["8gsP5O"], {
    days: b
  }))).with(["modal", !0], () => h(d.NW.formatToPlainString(d.t.Io7ozs, {
    days: b
  }))).otherwise(() => h(d.NW.string(d.t.Bc13HB)))
}