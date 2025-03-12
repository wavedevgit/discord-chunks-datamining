/** Chunk was on 53494 **/
n.d(t, {
  Z: () => f
});
var r = n(200651);
n(192379);
var i = n(442837),
  o = n(481060),
  l = n(299379),
  a = n(486472),
  s = n(430824),
  c = n(682662),
  u = n(662146),
  d = n(981631),
  p = n(388032),
  h = n(319315);

function f() {
  let e = (0, i.e7)([a.Z, s.Z], () => a.Z.unavailableGuilds.filter(e => null == s.Z.getGuild(e)).length);
  return e <= 0 ? null : (0, r.jsx)(c.H, {
    children: (0, r.jsx)(u.Z, {
      text: p.NW.format(p.t["TnH05+"], {
        count: e
      }),
      color: o.ua7.Colors.RED,
      children: (0, r.jsx)(o.eee, {
        href: (0, l.Z)(d.RK.TWITTER),
        target: "_blank",
        className: h.guildsError,
        "aria-label": p.NW.formatToPlainString(p.t["MEpX+/"], {
          count: e
        }),
        children: (0, r.jsx)("span", {
          "aria-hidden": !0,
          className: h.errorInner,
          children: "!"
        })
      })
    })
  })
}