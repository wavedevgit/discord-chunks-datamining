/** Chunk was on 56236 (2904e6350ea865b5.js) **/
t.d(n, {
  Z: () => v
});
var r = t(200651);
t(192379);
var i = t(442837),
  l = t(481060),
  o = t(434404),
  c = t(147754),
  a = t(939863),
  s = t(430824),
  u = t(496675),
  d = t(981631),
  g = t(388032),
  p = t(411355);

function v(e) {
  let {
    guildId: n,
    onClose: t
  } = e, {
    showHubEventsList: v
  } = c.Z.useExperiment({
    guildId: n,
    location: "6597ca_1"
  }, {
    autoTrackExposure: !1
  }), h = (0, i.e7)([s.Z, u.Z], () => {
    let e = s.Z.getGuild(n);
    return u.Z.can(d.Plq.MANAGE_ROLES, e)
  }, [n]), f = (0, i.e7)([s.Z], () => {
    let e = s.Z.getGuild(n);
    return v && (null == e ? void 0 : e.hasFeature(d.oNc.HUB))
  }, [n, v]);
  return (0, r.jsxs)("div", {
    className: p.container,
    children: [(0, r.jsx)(a.Z, {
      children: (0, r.jsx)("div", {
        className: p.circle,
        children: (0, r.jsx)(l.Que, {
          size: "custom",
          color: "currentColor",
          height: 40,
          width: 40,
          className: p.icon
        })
      })
    }), (0, r.jsx)(l.X6q, {
      color: "header-primary",
      variant: "heading-xl/semibold",
      className: p.title,
      children: f ? g.NW.string(g.t.RhXVpa) : g.NW.string(g.t["WgZ+3N"])
    }), (0, r.jsx)(l.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: p.subtitle,
      children: f ? g.NW.string(g.t["6hktHB"]) : g.NW.string(g.t["v/S/PD"])
    }), h && (0, r.jsx)(l.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: p.roleTip,
      children: g.NW.format(g.t["K+DH2t"], {
        onClick: () => {
          o.Z.open(n, d.pNK.ROLES), t()
        }
      })
    })]
  })
}