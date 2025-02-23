/** Chunk was on 99786 (4abb3ceacd323920.js) **/
n.d(e, {
  Z: () => b
});
var o = n(200651);
n(192379);
var i = n(442837),
  r = n(481060),
  a = n(906732),
  l = n(48217),
  c = n(26323),
  s = n(430824),
  u = n(914010),
  _ = n(709586),
  d = n(981631),
  f = n(30513),
  m = n(388032),
  p = n(43375);

function b(t) {
  let {
    analyticsSection: e,
    analyticsPage: n,
    isGIF: b,
    banner: E
  } = t, g = (0, i.e7)([u.Z], () => u.Z.getGuildId()), A = (0, i.e7)([s.Z], () => s.Z.getGuild(g)), {
    analyticsLocations: C
  } = (0, a.ZP)();
  return null == A || A.hasFeature(d.oNc.ANIMATED_BANNER) || !b && A.hasFeature(d.oNc.BANNER) ? null : (0, o.jsxs)("div", {
    className: p.container,
    children: [(0, o.jsx)(_.Z, {
      className: p.guildBoostingIcon
    }), (0, o.jsx)(r.Text, {
      color: "header-primary",
      variant: "text-sm/semibold",
      children: m.NW.string(m.t["56M7xc"])
    }), (0, o.jsx)(r.zxk, {
      look: r.zxk.Looks.LINK,
      color: r.zxk.Colors.LINK,
      className: p.subscribeButton,
      onClick: () => {
        if (null == A) return;
        let t = {
          section: e,
          page: n,
          object: d.qAy.UPSELL_HEADER
        };
        null != E ? (0, l.c)({
          analyticsLocations: C,
          analyticsLocation: t,
          guild: A,
          isGIF: b,
          banner: E
        }) : (0, c.Z)({
          analyticsLocations: C,
          analyticsSourceLocation: t,
          guild: A,
          perks: b ? (0, f.zC)() : (0, f.XO)()
        })
      },
      children: m.NW.string(m.t.WUHdZW)
    })]
  })
}