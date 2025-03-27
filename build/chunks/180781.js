/** Chunk was on 81288 **/
n.d(t, {
  Z: () => m
});
var i = n(200651);
n(192379);
var o = n(442837),
  r = n(481060),
  a = n(906732),
  l = n(48217),
  s = n(26323),
  c = n(430824),
  d = n(914010),
  u = n(709586),
  _ = n(981631),
  g = n(30513),
  f = n(388032),
  b = n(150059);

function m(e) {
  let {
    analyticsSection: t,
    analyticsPage: n,
    isGIF: m,
    banner: p
  } = e, h = (0, o.e7)([d.Z], () => d.Z.getGuildId()), v = (0, o.e7)([c.Z], () => c.Z.getGuild(h)), {
    analyticsLocations: N
  } = (0, a.ZP)();
  return null == v || v.hasFeature(_.oNc.ANIMATED_BANNER) || !m && v.hasFeature(_.oNc.BANNER) ? null : (0, i.jsxs)("div", {
    className: b.container,
    children: [(0, i.jsx)(u.Z, {
      className: b.guildBoostingIcon
    }), (0, i.jsx)(r.Text, {
      color: "header-primary",
      variant: "text-sm/semibold",
      children: f.NW.string(f.t["56M7xc"])
    }), (0, i.jsx)(r.zxk, {
      look: r.zxk.Looks.LINK,
      color: r.zxk.Colors.LINK,
      className: b.subscribeButton,
      onClick: () => {
        if (null == v) return;
        let e = {
          section: t,
          page: n,
          object: _.qAy.UPSELL_HEADER
        };
        null != p ? (0, l.c)({
          analyticsLocations: N,
          analyticsLocation: e,
          guild: v,
          isGIF: m,
          banner: p
        }) : (0, s.Z)({
          analyticsLocations: N,
          analyticsSourceLocation: e,
          guild: v,
          perks: m ? (0, g.zC)() : (0, g.XO)()
        })
      },
      children: f.NW.string(f.t.WUHdZW)
    })]
  })
}