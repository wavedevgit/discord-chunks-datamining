/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  Z: () => f
}), r(627341);
var n = r(200651);
r(192379);
var i = r(120356),
  l = r.n(i),
  o = r(278074),
  a = r(780384),
  s = r(481060),
  c = r(410030),
  d = r(884697),
  u = r(388032),
  p = r(793218);
let f = e => {
  let {
    category: t,
    display: r,
    className: i
  } = e, f = (0, c.ZP)();
  if (null == t.unpublishedAt) return null;
  let h = (0, d.OT)(t.unpublishedAt);

  function b(e) {
    return (0, n.jsx)(s.IGR, {
      disableColor: !0,
      text: e,
      className: l()((0, a.wj)(f) ? p.badgeDark : p.badgeLight, i)
    })
  }
  return (0, o.EQ)([r, h > 1]).with(["card", !0], () => null).with(["banner", !0], () => b(u.NW.formatToPlainString(u.t["8gsP5O"], {
    days: h
  }))).with(["modal", !0], () => b(u.NW.formatToPlainString(u.t.Io7ozs, {
    days: h
  }))).otherwise(() => b(u.NW.string(u.t.Bc13HB)))
}