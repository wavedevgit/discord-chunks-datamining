/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  A: () => u
});
var r = n(200651);
n(192379);
var i = n(481060),
  s = n(63063),
  a = n(67734),
  l = n(375263),
  o = n(586382),
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
        children: [c.NW.string(c.t["0r0AzM"]), (0, r.jsx)(o.zA, {
          guild: t
        })]
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        className: d.text,
        children: c.NW.string(c.t.UfqmIS)
      }), (0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-secondary",
        className: d.text,
        children: c.NW.format(c.t.vBcWUl, {
          articleURL: s.Z.getArticleURL(A.BhN.GUILD_BANNER_SPLASH)
        })
      }), (0, r.jsx)(a.F, {
        guild: t,
        canManageGuild: n,
        buttonClassName: d.button
      })]
    }), (0, r.jsx)("div", {
      className: d.column,
      children: (0, r.jsx)(l.O, {
        guild: t,
        canManageGuild: n
      })
    })]
  })
}