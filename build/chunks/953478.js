/** Chunk was on 44799 **/
t.d(n, {
  Z: () => g
});
var i = t(200651);
t(192379);
var r = t(793030),
  o = t(442837),
  s = t(481060),
  a = t(678558),
  l = t(343649),
  c = t(413335),
  d = t(430824),
  u = t(63063),
  x = t(317169),
  m = t(639660),
  v = t(767218),
  p = t(981631),
  _ = t(367123),
  b = t(388032),
  j = t(785947);

function g(e) {
  let {
    guildId: n
  } = e, t = (0, o.e7)([d.Z], () => d.Z.getGuild(n)), {
    available: g,
    spent: h,
    total: Z
  } = (0, x.Z)(n);
  if (null != t) return (0, i.jsxs)("div", {
    className: j.container,
    children: [(0, i.jsxs)("div", {
      className: j.headerContainer,
      children: [(0, i.jsx)(r.xv, {
        variant: "eyebrow",
        children: b.NW.string(_.Z.hjvcLC)
      }), (0, i.jsx)(r.xv, {
        className: j.learnMore,
        variant: "text-xs/semibold",
        children: b.NW.format(_.Z.fXE30d, {
          helpDeskArticle: u.Z.getArticleURL(p.BhN.GUILD_BOOSTING_FAQ)
        })
      })]
    }), (0, i.jsxs)("div", {
      className: j.contentContainer,
      children: [(0, i.jsx)(v.Z, {
        count: g,
        type: v.b.AVAILABLE
      }), (0, i.jsx)(v.Z, {
        count: h,
        type: v.b.SPENT
      }), (0, i.jsx)(v.Z, {
        count: Z,
        type: v.b.TOTAL
      })]
    }), (0, i.jsx)(m.Z, {
      guildId: n
    }), (0, i.jsx)(a.Z, {
      className: j.boostButton,
      guild: t,
      analyticsLocation: {
        page: p.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: p.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: s.Ttl.CUSTOM,
      size: s.PhG.LARGE,
      intent: l.P.NONE,
      icon: (0, i.jsx)(c.Z, {
        className: j.boostButtonIcon
      })
    })]
  })
}