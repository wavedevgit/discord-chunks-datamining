/** Chunk was on 44799 **/
t.d(n, {
  Z: () => g
});
var r = t(200651);
t(192379);
var o = t(793030),
  i = t(442837),
  s = t(481060),
  a = t(678558),
  l = t(343649),
  c = t(413335),
  d = t(430824),
  u = t(63063),
  p = t(317169),
  m = t(639660),
  x = t(767218),
  v = t(981631),
  _ = t(296260),
  f = t(388032),
  b = t(424882);

function g(e) {
  let {
    guildId: n
  } = e, t = (0, i.e7)([d.Z], () => d.Z.getGuild(n)), {
    available: g,
    spent: j,
    total: h
  } = (0, p.Z)(n);
  if (null != t) return (0, r.jsxs)("div", {
    className: b.container,
    children: [(0, r.jsxs)("div", {
      className: b.headerContainer,
      children: [(0, r.jsx)(o.xv, {
        variant: "eyebrow",
        children: f.NW.string(_.Z.hjvcLC)
      }), (0, r.jsx)(o.xv, {
        className: b.learnMore,
        variant: "text-xs/semibold",
        children: f.NW.format(_.Z.fXE30d, {
          helpDeskArticle: u.Z.getArticleURL(v.BhN.GUILD_BOOSTING_FAQ)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: b.contentContainer,
      children: [(0, r.jsx)(x.Z, {
        count: g,
        type: x.b.AVAILABLE
      }), (0, r.jsx)(x.Z, {
        count: j,
        type: x.b.SPENT
      }), (0, r.jsx)(x.Z, {
        count: h,
        type: x.b.TOTAL
      })]
    }), (0, r.jsx)(m.Z, {
      guildId: n
    }), (0, r.jsx)(a.Z, {
      className: b.boostButton,
      guild: t,
      analyticsLocation: {
        page: v.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: v.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: s.Ttl.CUSTOM,
      size: s.PhG.LARGE,
      intent: l.P.NONE,
      icon: (0, r.jsx)(c.Z, {
        className: b.boostButtonIcon
      })
    })]
  })
}