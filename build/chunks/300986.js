/** Chunk was on 52272 **/
n.d(t, {
  Z: () => g
}), n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
  o = n(692547),
  a = n(481060),
  l = n(706454),
  s = n(594174),
  c = n(626135),
  u = n(63063),
  d = n(51144),
  p = n(665149),
  m = n(981631),
  f = n(388032);
let h = new Set(["ko", "ja"]);

function g(e) {
  let {
    className: t
  } = e, n = (0, i.e7)([s.default], () => s.default.getCurrentUser()), g = (0, i.e7)([l.default], () => l.default.locale), _ = (0, d.EO)(n);
  return (0, r.jsx)(a.eee, {
    href: u.w,
    target: "_blank",
    tabIndex: -1,
    children: (0, r.jsx)(p.JO, {
      color: _ ? o.Z.unsafe_rawColors.GREEN_360.css : "currentColor",
      className: t,
      onClick: () => c.default.track(m.rMx.HELP_CLICKED, {
        highlighted: _
      }),
      icon: a.idN,
      tooltipPosition: h.has(g) ? "left" : void 0,
      tooltip: f.NW.string(f.t.cqEoj4)
    })
  })
}