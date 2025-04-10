/** Chunk was on 44799 **/
t.d(n, {
  Z: () => f
});
var r = t(200651);
t(192379);
var o = t(793030),
  s = t(442837),
  i = t(481060),
  a = t(678558),
  l = t(343649),
  c = t(430824),
  u = t(63063),
  d = t(317169),
  m = t(639660),
  p = t(767218),
  x = t(981631),
  _ = t(680278),
  g = t(388032),
  v = t(658585);

function f(e) {
  let {
    guildId: n
  } = e, t = (0, s.e7)([c.Z], () => c.Z.getGuild(n)), {
    available: f,
    spent: b,
    total: j
  } = (0, d.Z)(n);
  if (null != t) return (0, r.jsxs)("div", {
    className: v.container,
    children: [(0, r.jsxs)("div", {
      className: v.headerContainer,
      children: [(0, r.jsx)(o.xv, {
        variant: "eyebrow",
        children: g.NW.string(_.Z.hjvcLC)
      }), (0, r.jsx)(o.xv, {
        className: v.learnMore,
        variant: "text-xs/semibold",
        children: g.NW.format(_.Z.fXE30d, {
          helpDeskArticle: u.Z.getArticleURL(x.BhN.GUILD_BOOSTING_FAQ)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: v.contentContainer,
      children: [(0, r.jsx)(p.Z, {
        count: f,
        type: p.b.AVAILABLE
      }), (0, r.jsx)(p.Z, {
        count: b,
        type: p.b.SPENT
      }), (0, r.jsx)(p.Z, {
        count: j,
        type: p.b.TOTAL
      })]
    }), (0, r.jsx)(m.Z, {
      guildId: n
    }), (0, r.jsx)(a.Z, {
      className: v.boostButton,
      guild: t,
      analyticsLocation: {
        page: x.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: x.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: i.Ttl.CUSTOM,
      size: i.PhG.LARGE,
      intent: l.P.NONE,
      icon: (0, r.jsx)(i.$Eu, {
        className: v.boostButtonIcon,
        size: "sm",
        color: i.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
      })
    })]
  })
}