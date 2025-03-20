/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  A: () => u
});
var r = n(200651);
n(192379);
var i = n(481060),
  s = n(63063),
  a = n(586382),
  l = n(594980),
  o = n(515025),
  A = n(981631),
  c = n(388032),
  d = n(50388);

function u(e) {
  let {
    guild: t,
    canManageGuild: n
  } = e;
  return (0, r.jsxs)(i.hjN, {
    className: d.container,
    children: [(0, r.jsxs)("div", {
      className: d.column,
      children: [(0, r.jsxs)(i.vwX, {
        className: d.title,
        children: [c.NW.string(c.t.tzGY0t), (0, r.jsx)(a.hH, {
          guild: t
        })]
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        className: d.text,
        children: c.NW.string(c.t.F7bbrq)
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        className: d.text,
        children: c.NW.format(c.t.ZYA9PT, {
          articleURL: s.Z.getArticleURL(A.BhN.GUILD_INVITE_SPLASH)
        })
      }), (0, r.jsx)(l.c, {
        guild: t,
        canManageGuild: n,
        buttonClassName: d.button
      })]
    }), (0, r.jsx)("div", {
      className: d.column,
      children: (0, r.jsx)(o.h, {
        guild: t,
        canManageGuild: n
      })
    })]
  })
}