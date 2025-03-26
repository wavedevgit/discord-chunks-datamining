/** Chunk was on 44799 **/
t.d(n, {
  Z: () => g
});
var r = t(200651);
t(192379);
var i = t(793030),
  o = t(442837),
  s = t(481060),
  a = t(678558),
  l = t(343649),
  c = t(413335),
  d = t(430824),
  u = t(63063),
  m = t(317169),
  x = t(639660),
  p = t(767218),
  v = t(981631),
  _ = t(296260),
  b = t(388032),
  j = t(785947);

function g(e) {
  let {
    guildId: n
  } = e, t = (0, o.e7)([d.Z], () => d.Z.getGuild(n)), {
    available: g,
    spent: Z,
    total: h
  } = (0, m.Z)(n);
  if (null != t) return (0, r.jsxs)("div", {
    className: j.container,
    children: [(0, r.jsxs)("div", {
      className: j.headerContainer,
      children: [(0, r.jsx)(i.xv, {
        variant: "eyebrow",
        children: b.NW.string(_.Z.hjvcLC)
      }), (0, r.jsx)(i.xv, {
        className: j.learnMore,
        variant: "text-xs/semibold",
        children: b.NW.format(_.Z.fXE30d, {
          helpDeskArticle: u.Z.getArticleURL(v.BhN.GUILD_BOOSTING_FAQ)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: j.contentContainer,
      children: [(0, r.jsx)(p.Z, {
        count: g,
        type: p.b.AVAILABLE
      }), (0, r.jsx)(p.Z, {
        count: Z,
        type: p.b.SPENT
      }), (0, r.jsx)(p.Z, {
        count: h,
        type: p.b.TOTAL
      })]
    }), (0, r.jsx)(x.Z, {
      guildId: n
    }), (0, r.jsx)(a.Z, {
      className: j.boostButton,
      guild: t,
      analyticsLocation: {
        page: v.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: v.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: s.Ttl.CUSTOM,
      size: s.PhG.LARGE,
      intent: l.P.NONE,
      icon: (0, r.jsx)(c.Z, {
        className: j.boostButtonIcon
      })
    })]
  })
}