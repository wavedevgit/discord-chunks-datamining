/** Chunk was on 72891 **/
n.d(t, {
  c: () => p
});
var i = n(255367);
n(73800);
var a = n(481060),
  o = n(269128),
  r = n(358555),
  l = n(267642),
  c = n(26323),
  s = n(30513),
  d = n(981631),
  u = n(388032),
  f = n(309818);

function g(e) {
  let {
    guild: t,
    banner: n
  } = e;
  return (0, i.jsx)("div", {
    className: f.guildBanner,
    style: {
      backgroundImage: "url(".concat(n)
    },
    children: (0, i.jsxs)("div", {
      className: f.guildHeader,
      children: [(0, i.jsx)(r.Z, {
        guild: t,
        isBannerVisible: !0
      }), (0, i.jsx)(a.X6q, {
        className: f.guildName,
        variant: "heading-md/semibold",
        children: t.name
      }), (0, i.jsx)(o.Z, {
        className: f.dropdown,
        open: !1
      })]
    })
  })
}

function p(e) {
  let {
    analyticsLocations: t,
    analyticsLocation: n,
    guild: a,
    isGIF: o,
    banner: r
  } = e, f = o ? (0, l._p)(d.oNc.ANIMATED_BANNER) : (0, l._p)(d.oNc.BANNER);
  null != f && (0, c.Z)({
    analyticsLocations: t,
    analyticsSourceLocation: n,
    guild: a,
    headerProps: {
      title: u.intl.string(u.t["rv2H+/"]),
      subtitle: function(e, t) {
        let n = (0, l.nW)(e);
        return t ? u.intl.formatToPlainString(u.t["TR/Uys"], {
          targetLevelOrPlan: n
        }) : u.intl.formatToPlainString(u.t.B253V1, {
          targetLevelOrPlan: n
        })
      }(f, o),
      image: (0, i.jsx)(g, {
        guild: a,
        banner: r
      })
    },
    perkIntro: u.intl.string(u.t.ZuItcH),
    perks: o ? (0, s.zC)() : (0, s.XO)()
  })
}