/** Chunk was on 44799 **/
t.d(n, {
  Z: () => j
});
var r = t(200651);
t(192379);
var i = t(793030),
  o = t(442837),
  s = t(481060),
  a = t(678558),
  l = t(413335),
  c = t(430824),
  d = t(63063),
  u = t(317169),
  x = t(639660),
  p = t(767218),
  v = t(981631),
  m = t(268359),
  b = t(388032),
  _ = t(314);

function j(e) {
  let {
    guildId: n
  } = e, t = (0, o.e7)([c.Z], () => c.Z.getGuild(n)), {
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
        children: b.NW.string(m.Z.hjvcLC)
      }), (0, r.jsx)(i.xv, {
        className: _.learnMore,
        variant: "text-xs/semibold",
        children: b.NW.format(m.Z.fXE30d, {
          helpDeskArticle: d.Z.getArticleURL(v.BhN.GUILD_BOOSTING_FAQ)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: _.contentContainer,
      children: [(0, r.jsx)(p.Z, {
        count: j,
        type: p.b.AVAILABLE
      }), (0, r.jsx)(p.Z, {
        count: h,
        type: p.b.SPENT
      }), (0, r.jsx)(p.Z, {
        count: f,
        type: p.b.TOTAL
      })]
    }), (0, r.jsx)(x.Z, {
      guildId: n
    }), (0, r.jsx)(a.Z, {
      className: _.boostButton,
      guild: t,
      analyticsLocation: {
        page: v.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: v.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: s.Ttl.CUSTOM,
      size: s.PhG.LARGE,
      icon: (0, r.jsx)(l.Z, {
        className: _.boostButtonIcon
      })
    })]
  })
}