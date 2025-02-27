/** Chunk was on 44799 **/
t.d(n, {
  Z: () => j
});
var i = t(200651);
t(192379);
var r = t(793030),
  o = t(442837),
  a = t(481060),
  s = t(678558),
  c = t(413335),
  l = t(690221),
  d = t(430824),
  u = t(763792),
  x = t(800869),
  v = t(767218),
  p = t(309945),
  _ = t(981631),
  b = t(783684),
  m = t(388032),
  h = t(599985);

function j(e) {
  let {
    guildId: n
  } = e, t = (0, o.e7)([d.Z], () => d.Z.getGuild(n));
  if (null != t) return (0, i.jsxs)("div", {
    className: h.container,
    children: [(0, i.jsxs)("div", {
      className: h.headerContainer,
      children: [(0, i.jsx)(r.xv, {
        variant: "eyebrow",
        children: m.NW.string(b.Z.hjvcLC)
      }), (0, i.jsx)(l.Z, {
        onClick: () => {},
        children: (0, i.jsx)(r.xv, {
          variant: "text-xs/semibold",
          color: "currentColor",
          children: m.NW.string(m.t.hvVgAQ)
        })
      })]
    }), (0, i.jsxs)("div", {
      className: h.contentContainer,
      children: [(0, i.jsx)(v.Z, {
        count: 3,
        type: v.b.AVAILABLE
      }), (0, i.jsx)(v.Z, {
        count: 2,
        type: v.b.SPENT
      }), (0, i.jsx)(v.Z, {
        count: 5,
        type: v.b.TOTAL
      })]
    }), (0, i.jsx)(x.Z, {}), (0, i.jsx)(p.Z, {
      powerup: u.W["0"]
    }), (0, i.jsx)(s.Z, {
      className: h.boostButton,
      guild: t,
      analyticsLocation: {
        page: _.ZY5.POWERUPS_OVERVIEW,
        section: _.jXE.POWERUPS_OVERVIEW_SIDEABAR
      },
      color: a.Ttl.CUSTOM,
      size: a.PhG.LARGE,
      icon: (0, i.jsx)(c.Z, {
        className: h.boostButtonIcon
      })
    })]
  })
}