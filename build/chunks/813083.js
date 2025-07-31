/** Chunk was on 11912 **/
"use strict";
r.d(t, {
  Z: () => u
}), r(314940);
var n = r(255367);
r(73800);
var a = r(278074),
  l = r(780384),
  i = r(481060),
  o = r(410030),
  s = r(884697),
  c = r(388032);
let u = e => {
  let {
    category: t,
    display: r,
    className: u
  } = e, d = (0, o.ZP)();
  if (null == t.unpublishedAt) return null;
  let p = (0, s.OT)(t.unpublishedAt);

  function b(e) {
    return (0, n.jsx)(i.IGR, {
      disableColor: !0,
      text: e,
      className: u,
      style: (0, l.wj)(d) ? {
        color: "var(--black-500)",
        backgroundColor: "var(--white-500)"
      } : {
        color: "var(--white-500)",
        backgroundColor: "var(--black-500)"
      }
    })
  }
  return (0, a.EQ)([r, p > 1]).with(["card", !0], () => null).with(["banner", !0], () => b(c.intl.formatToPlainString(c.t["8gsP5O"], {
    days: p
  }))).with(["modal", !0], () => b(c.intl.formatToPlainString(c.t.Io7ozs, {
    days: p
  }))).otherwise(() => b(c.intl.string(c.t.Bc13HB)))
}