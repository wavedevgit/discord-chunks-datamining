/** Chunk was on 44799 **/
t.d(n, {
  Z: () => _
});
var r = t(200651);
t(192379);
var i = t(793030),
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
  m = t(981631),
  b = t(783684),
  j = t(388032),
  h = t(599985);

function _(e) {
  let {
    guildId: n
  } = e, t = (0, o.e7)([d.Z], () => d.Z.getGuild(n));
  if (null != t) return (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsxs)("div", {
      className: h.headerContainer,
      children: [(0, r.jsx)(i.xv, {
        variant: "eyebrow",
        children: j.NW.string(b.Z.hjvcLC)
      }), (0, r.jsx)(l.Z, {
        onClick: () => {},
        children: (0, r.jsx)(i.xv, {
          variant: "text-xs/semibold",
          color: "currentColor",
          children: j.NW.string(j.t.hvVgAQ)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: h.contentContainer,
      children: [(0, r.jsx)(v.Z, {
        count: 3,
        type: v.b.AVAILABLE
      }), (0, r.jsx)(v.Z, {
        count: 2,
        type: v.b.SPENT
      }), (0, r.jsx)(v.Z, {
        count: 5,
        type: v.b.TOTAL
      })]
    }), (0, r.jsx)(x.Z, {}), (0, r.jsx)(p.Z, {
      powerup: u.W["0"]
    }), (0, r.jsx)(s.Z, {
      className: h.boostButton,
      guild: t,
      analyticsLocation: {
        page: m.ZY5.POWERUPS_OVERVIEW,
        section: m.jXE.POWERUPS_OVERVIEW_SIDEABAR
      },
      color: a.Ttl.CUSTOM,
      size: a.PhG.LARGE,
      icon: (0, r.jsx)(c.Z, {
        className: h.boostButtonIcon
      })
    })]
  })
}