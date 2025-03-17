/** Chunk was on 44799 **/
t.d(n, {
  Z: () => j
});
var r = t(200651);
t(192379);
var i = t(793030),
  s = t(442837),
  o = t(481060),
  a = t(678558),
  l = t(413335),
  c = t(430824),
  d = t(63063),
  u = t(317169),
  x = t(639660),
  m = t(767218),
  p = t(981631),
  v = t(730621),
  b = t(388032),
  _ = t(785947);

function j(e) {
  let {
    guildId: n
  } = e, t = (0, s.e7)([c.Z], () => c.Z.getGuild(n)), {
    available: j,
    spent: h,
    total: f
  } = (0, u.Z)(n);
  if (null != t) return (0, r.jsxs)("div", {
    className: _.container,
    children: [(0, r.jsxs)("div", {
      className: _.headerContainer,
      children: [(0, r.jsx)(i.xv, {
        variant: "eyebrow",
        children: b.NW.string(v.Z.hjvcLC)
      }), (0, r.jsx)(i.xv, {
        className: _.learnMore,
        variant: "text-xs/semibold",
        children: b.NW.format(v.Z.fXE30d, {
          helpDeskArticle: d.Z.getArticleURL(p.BhN.GUILD_BOOSTING_FAQ)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: _.contentContainer,
      children: [(0, r.jsx)(m.Z, {
        count: j,
        type: m.b.AVAILABLE
      }), (0, r.jsx)(m.Z, {
        count: h,
        type: m.b.SPENT
      }), (0, r.jsx)(m.Z, {
        count: f,
        type: m.b.TOTAL
      })]
    }), (0, r.jsx)(x.Z, {
      guildId: n
    }), (0, r.jsx)(a.Z, {
      className: _.boostButton,
      guild: t,
      analyticsLocation: {
        page: p.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: p.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: o.Ttl.CUSTOM,
      size: o.PhG.LARGE,
      icon: (0, r.jsx)(l.Z, {
        className: _.boostButtonIcon
      })
    })]
  })
}