/** Chunk was on 44799 **/
t.d(n, {
  Z: () => _
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
  p = t(639660),
  v = t(767218),
  x = t(981631),
  m = t(268359),
  b = t(388032),
  j = t(314);

function _(e) {
  let {
    guildId: n
  } = e, t = (0, o.e7)([c.Z], () => c.Z.getGuild(n)), {
    available: _,
    spent: f,
    total: h
  } = (0, u.Z)(n);
  if (null != t) return (0, r.jsxs)("div", {
    className: j.container,
    children: [(0, r.jsxs)("div", {
      className: j.headerContainer,
      children: [(0, r.jsx)(i.xv, {
        variant: "eyebrow",
        children: b.NW.string(m.Z.hjvcLC)
      }), (0, r.jsx)(i.xv, {
        className: j.learnMore,
        variant: "text-xs/semibold",
        children: b.NW.format(m.Z.fXE30d, {
          helpDeskArticle: d.Z.getArticleURL(x.BhN.GUILD_BOOSTING_FAQ)
        })
      })]
    }), (0, r.jsxs)("div", {
      className: j.contentContainer,
      children: [(0, r.jsx)(v.Z, {
        count: _,
        type: v.b.AVAILABLE
      }), (0, r.jsx)(v.Z, {
        count: f,
        type: v.b.SPENT
      }), (0, r.jsx)(v.Z, {
        count: h,
        type: v.b.TOTAL
      })]
    }), (0, r.jsx)(p.Z, {
      guildId: n
    }), (0, r.jsx)(a.Z, {
      className: j.boostButton,
      guild: t,
      analyticsLocation: {
        page: x.ZY5.GUILD_POWERUPS_OVERVIEW,
        section: x.jXE.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: s.Ttl.CUSTOM,
      size: s.PhG.LARGE,
      icon: (0, r.jsx)(l.Z, {
        className: j.boostButtonIcon
      })
    })]
  })
}