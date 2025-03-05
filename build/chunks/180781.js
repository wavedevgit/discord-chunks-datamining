/** Chunk was on 81288 **/
n.d(t, {
  Z: () => f
});
var o = n(200651);
n(192379);
var i = n(442837),
  r = n(481060),
  a = n(906732),
  l = n(48217),
  c = n(26323),
  s = n(430824),
  d = n(914010),
  u = n(709586),
  _ = n(981631),
  g = n(30513),
  m = n(388032),
  b = n(150059);

function f(e) {
  let {
    analyticsSection: t,
    analyticsPage: n,
    isGIF: f,
    banner: p
  } = e, h = (0, i.e7)([d.Z], () => d.Z.getGuildId()), N = (0, i.e7)([s.Z], () => s.Z.getGuild(h)), {
    analyticsLocations: v
  } = (0, a.ZP)();
  return null == N || N.hasFeature(_.oNc.ANIMATED_BANNER) || !f && N.hasFeature(_.oNc.BANNER) ? null : (0, o.jsxs)("div", {
    className: b.container,
    children: [(0, o.jsx)(u.Z, {
      className: b.guildBoostingIcon
    }), (0, o.jsx)(r.Text, {
      color: "header-primary",
      variant: "text-sm/semibold",
      children: m.NW.string(m.t["56M7xc"])
    }), (0, o.jsx)(r.zxk, {
      look: r.zxk.Looks.LINK,
      color: r.zxk.Colors.LINK,
      className: b.subscribeButton,
      onClick: () => {
        if (null == N) return;
        let e = {
          section: t,
          page: n,
          object: _.qAy.UPSELL_HEADER
        };
        null != p ? (0, l.c)({
          analyticsLocations: v,
          analyticsLocation: e,
          guild: N,
          isGIF: f,
          banner: p
        }) : (0, c.Z)({
          analyticsLocations: v,
          analyticsSourceLocation: e,
          guild: N,
          perks: f ? (0, g.zC)() : (0, g.XO)()
        })
      },
      children: m.NW.string(m.t.WUHdZW)
    })]
  })
}