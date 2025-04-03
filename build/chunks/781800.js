/** Chunk was on 10451 **/
n.d(t, {
  Z: () => d
});
var r = n(200651);
n(192379);
var i = n(481060),
  s = n(626135),
  a = n(391110),
  o = n(981631),
  l = n(388032),
  c = n(26526);
let d = e => {
  let {
    setIsAllPerksVisible: t,
    previousComponent: n
  } = e;
  return (0, r.jsx)(i.gtL, {
    color: i.Ttl.CUSTOM,
    onlyShineOnHover: !0,
    shineSize: i.rHe.SMALL,
    className: c.seeAllPerksButton,
    onClick: () => {
      t(!0), s.default.track(o.rMx.NITRO_HOME_NAVIGATION, {
        current_component: n,
        next_component: a.MQ.SEE_ALL,
        interaction_component: "See All Button"
      })
    },
    children: (0, r.jsxs)("div", {
      className: c.seeAllPerksButtonContent,
      children: [l.NW.string(l.t["37C26e"]), (0, r.jsx)(i.Fbu, {
        color: "currentColor"
      })]
    })
  })
}