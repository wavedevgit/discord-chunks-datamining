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
  l = t(413335),
  c = t(690221),
  d = t(430824),
  u = t(763792),
  x = t(800869),
  p = t(767218),
  b = t(309945),
  v = t(981631),
  j = t(730621),
  m = t(388032),
  h = t(785947);

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
        children: m.NW.string(j.Z.hjvcLC)
      }), (0, r.jsx)(c.Z, {
        onClick: () => {},
        children: (0, r.jsx)(i.xv, {
          variant: "text-xs/semibold",
          color: "currentColor",
          children: m.NW.string(m.t.hvVgAQ)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: h.contentContainer,
      children: [(0, r.jsx)(p.Z, {
        count: 3,
        type: p.b.AVAILABLE
      }), (0, r.jsx)(p.Z, {
        count: 2,
        type: p.b.SPENT
      }), (0, r.jsx)(p.Z, {
        count: 5,
        type: p.b.TOTAL
      })]
    }), (0, r.jsx)(x.Z, {}), (0, r.jsx)(b.Z, {
      powerup: u.W["0"]
    }), (0, r.jsx)(s.Z, {
      className: h.boostButton,
      guild: t,
      analyticsLocation: {
        page: v.ZY5.POWERUPS_OVERVIEW,
        section: v.jXE.POWERUPS_OVERVIEW_SIDEABAR
      },
      color: a.Ttl.CUSTOM,
      size: a.PhG.LARGE,
      icon: (0, r.jsx)(l.Z, {
        className: h.boostButtonIcon
      })
    })]
  })
}